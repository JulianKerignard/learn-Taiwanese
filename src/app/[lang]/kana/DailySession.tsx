"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Check, Clock, Flame, Play, RotateCcw, Sparkles } from "lucide-react";
import ProgressBar from "@/components/ProgressBar";
import { useContentLang } from "@/components/ContentLanguage";
import { cn } from "@/lib/cn";
import {
  dailyStreak,
  dayKey,
  dueKana,
  planDailySession,
  readableWords,
  wordKanaIds,
  type DailyGoal,
  type DailyPlan,
} from "@/lib/kana";
import { KEYS, addStudyTime, storageGet, storageSet, updateStreak } from "@/lib/storage";
import { useClientState } from "@/lib/use-client-state";
import { shuffleArray } from "@/lib/utils";
import { prefetchSpeech } from "@/lib/tts";
import type { Kana, KanaDaily, KanaDay, KanaLesson, KanaProgress, KanaWord } from "@/types/kana";
import { Discover } from "./LessonPath";
import QuizRunner, { QuizSummary, type QuizResult } from "./QuizRunner";
import WordCard from "./WordCard";
import { buildLessonQuiz, buildQuestion, drawTargets, isSpecial, kanaIndex, type DrillMode, type Question } from "./kana-ui";

const EMPTY_DAILY: KanaDaily = { minutes: 15, days: {} };
const EMPTY_DAY: KanaDay = { seconds: 0, answers: 0, learned: 0, done: false };
const readDaily = (): KanaDaily => {
  const stored = storageGet<Partial<KanaDaily>>(KEYS.kanaDaily, EMPTY_DAILY);
  return { minutes: stored.minutes === 30 ? 30 : 15, days: stored.days ?? {} };
};

const GOALS: DailyGoal[] = [15, 30];
const REVIEW_MODES: DrillMode[] = ["kana-romaji", "romaji-kana", "listen"];
const PRACTICE_MODES: DrillMode[] = ["kana-romaji", "romaji-kana", "listen", "type"];
/** Extra round offered once the day's session is done. */
const BONUS_QUESTIONS = 30;
const WORDS_TO_READ = 6;

type Step =
  | { kind: "review"; questions: Question[] }
  | { kind: "discover"; lesson: KanaLesson }
  | { kind: "learn"; lesson: KanaLesson; questions: Question[] }
  | { kind: "practice"; questions: Question[] }
  | { kind: "read"; words: KanaWord[] };

const STEP_LABELS: Record<Step["kind"], string> = {
  review: "Révision",
  discover: "Nouveaux signes",
  learn: "Nouveaux signes",
  practice: "Consolidation",
  read: "Lecture",
};

/** Called from event handlers only; a module function keeps the render pure. */
const clock = () => Date.now();

const formatClock = (seconds: number) =>
  `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;

/**
 * The daily session: 15 or 30 minutes that take the learner through the
 * syllabary one day at a time — due reviews first, then the next lessons in
 * order, consolidation until the goal is filled, and a few words to read.
 *
 * The plan is frozen when the session starts; the steps that depend on what
 * was just learned (the lesson quiz, the practice draw, the words) are built
 * as they begin, from the progress as it is then.
 */
export default function DailySession({
  kana,
  lessons,
  words,
  progress,
  ready,
  onAnswer,
}: {
  kana: Kana[];
  lessons: KanaLesson[];
  words: KanaWord[];
  progress: KanaProgress;
  ready: boolean;
  onAnswer: (kanaId: string, correct: boolean) => void;
}) {
  const [daily, setDaily, dailyReady] = useClientState(readDaily, EMPTY_DAILY);
  // The clock as of hydration: the overview is a snapshot, refreshed when a
  // session ends.
  const [now, setNow] = useClientState(() => Date.now(), 0);

  const [plan, setPlan] = useState<DailyPlan | null>(null);
  const [steps, setSteps] = useState<Step[]>([]);
  const [stepIndex, setStepIndex] = useState(0);
  const [discoverIndex, setDiscoverIndex] = useState(0);
  const [results, setResults] = useState<QuizResult[]>([]);
  const [elapsed, setElapsed] = useState(0);
  const [finished, setFinished] = useState(false);
  const [bonus, setBonus] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const byId = useMemo(() => new Map(kana.map((k) => [k.id, k])), [kana]);
  const index = useMemo(() => kanaIndex(kana), [kana]);
  const running = plan !== null && !finished;
  const today = now > 0 ? dayKey(now) : "";
  const todayRecord = daily.days[today] ?? EMPTY_DAY;

  const saveDaily = useCallback(
    (update: (prev: KanaDaily) => KanaDaily) => {
      setDaily((prev) => {
        const next = update(prev);
        storageSet(KEYS.kanaDaily, next);
        return next;
      });
    },
    [setDaily]
  );

  const updateToday = useCallback(
    (patch: (day: KanaDay) => KanaDay) => {
      const key = dayKey(Date.now());
      saveDaily((prev) => ({ ...prev, days: { ...prev.days, [key]: patch(prev.days[key] ?? EMPTY_DAY) } }));
    },
    [saveDaily]
  );

  // The session clock only runs while the page is visible: a tab left open
  // over lunch is not practice.
  useEffect(() => {
    if (!running) return;
    const tick = setInterval(() => {
      if (document.visibilityState === "visible") setElapsed((s) => s + 1);
    }, 1000);
    return () => clearInterval(tick);
  }, [running]);

  // Seconds are saved every half minute, so leaving halfway still counts.
  const savedSeconds = useRef(0);
  useEffect(() => {
    if (!running || elapsed - savedSeconds.current < 30) return;
    const delta = elapsed - savedSeconds.current;
    savedSeconds.current = elapsed;
    updateToday((day) => ({ ...day, seconds: day.seconds + delta }));
  }, [running, elapsed, updateToday]);

  // Each step starts at the top: on a phone the button that moves on sits at
  // the bottom of a long step.
  useEffect(() => {
    const root = rootRef.current;
    if (running && root && root.getBoundingClientRect().top < 0) {
      root.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, [running, stepIndex]);

  // The words to read each have a speaker: fetch them as the step opens.
  useEffect(() => {
    const step = steps[stepIndex];
    if (running && step?.kind === "read") prefetchSpeech(step.words.map((w) => w.term));
  }, [running, steps, stepIndex]);

  const answer = useCallback(
    (kanaId: string, correct: boolean) => {
      const firstTime = !progress[kanaId]?.seen;
      onAnswer(kanaId, correct);
      updateToday((day) => ({ ...day, answers: day.answers + 1, learned: day.learned + (firstTime ? 1 : 0) }));
    },
    [onAnswer, progress, updateToday]
  );

  const overview = useMemo(
    () => (ready && now > 0 ? planDailySession(lessons, kana, progress, now, daily.minutes) : null),
    [ready, now, lessons, kana, progress, daily.minutes]
  );
  const streak = now > 0 ? dailyStreak(daily, now) : 0;

  /** Signs met so far, as of the progress passed in — the pool for options and practice. */
  function seenSigns(current: KanaProgress, extra: string[] = []): Kana[] {
    const ids = new Set([...Object.keys(current).filter((id) => current[id]?.seen), ...extra]);
    return [...ids].map((id) => byId.get(id)).filter((k): k is Kana => !!k);
  }

  function questionsFor(targets: Kana[], modes: DrillMode[], pool: Kana[]): Question[] {
    const ctx = { pool, kana, words, known: new Set(pool.map((k) => k.id)) };
    return targets
      .map((k, i) => buildQuestion(k, isSpecial(k) ? "kana-romaji" : modes[i % modes.length], ctx, Math.random))
      .filter((q): q is Question => q !== null);
  }

  function start(extraOnly = false) {
    const at = clock();
    const fresh = planDailySession(lessons, kana, progress, at, daily.minutes);
    const pool = seenSigns(progress);
    const planned: Step[] = [];
    if (extraOnly) {
      planned.push({ kind: "practice", questions: [] });
    } else {
      if (fresh.review.length > 0) planned.push({ kind: "review", questions: questionsFor(fresh.review, REVIEW_MODES, pool) });
      for (const lesson of fresh.newLessons) planned.push({ kind: "discover", lesson }, { kind: "learn", lesson, questions: [] });
      if (fresh.practice > 0) planned.push({ kind: "practice", questions: [] });
      planned.push({ kind: "read", words: [] });
    }
    setNow(at);
    setPlan(fresh);
    setBonus(extraOnly);
    setSteps(planned);
    setResults([]);
    setElapsed(0);
    savedSeconds.current = 0;
    setFinished(false);
    setDiscoverIndex(0);
    enter(planned, 0, fresh, extraOnly);
  }

  /** Builds a step's content as it begins, from the progress as it is now. */
  function enter(all: Step[], i: number, currentPlan: DailyPlan, extraOnly: boolean) {
    const step = all[i];
    if (!step) return finish(extraOnly);
    let built: Step = step;
    if (step.kind === "learn") {
      built = { ...step, questions: buildLessonQuiz(step.lesson, lessons, kana, words, progress, Math.random) };
    } else if (step.kind === "practice") {
      const learnedToday = currentPlan.newLessons.flatMap((l) => l.kana);
      const pool = seenSigns(progress, learnedToday);
      const count = extraOnly ? BONUS_QUESTIONS : currentPlan.practice;
      built = { ...step, questions: questionsFor(drawTargets(pool, progress, count, Math.random), PRACTICE_MODES, pool) };
    } else if (step.kind === "read") {
      const known = new Set([...seenSigns(progress).map((k) => k.id), ...currentPlan.newLessons.flatMap((l) => l.kana)]);
      const fresh = new Set(currentPlan.newLessons.flatMap((l) => l.kana));
      const readable = readableWords(words, known, kana);
      // Words that use today's signs first: that is what the learner can read now
      // and could not yesterday.
      const withFresh = readable.filter((w) => (wordKanaIds(w.term, index) ?? []).some((id) => fresh.has(id)));
      const rest = readable.filter((w) => !withFresh.includes(w));
      const shuffled = [...shuffleArray(withFresh), ...shuffleArray(rest)];
      built = { ...step, words: shuffled.slice(0, WORDS_TO_READ) };
    }
    const next = [...all];
    next[i] = built;
    // An empty step (no words readable yet, no question buildable) is skipped.
    const empty =
      (built.kind === "read" && built.words.length === 0) ||
      ((built.kind === "review" || built.kind === "learn" || built.kind === "practice") && built.questions.length === 0);
    setSteps(next);
    if (empty) return enter(next, i + 1, currentPlan, extraOnly);
    setStepIndex(i);
    setDiscoverIndex(0);
  }

  function advance(stepResults: QuizResult[] = []) {
    if (!plan) return;
    setResults((prev) => [...prev, ...stepResults]);
    enter(steps, stepIndex + 1, plan, bonus);
  }

  function finish(extraOnly: boolean) {
    const at = clock();
    const delta = elapsed - savedSeconds.current;
    savedSeconds.current = elapsed;
    updateToday((day) => ({ ...day, seconds: day.seconds + Math.max(0, delta), done: day.done || !extraOnly }));
    // The kana session is study like any other: it counts for the app's streak
    // and the study time shown on the progress page.
    if (!extraOnly) updateStreak();
    addStudyTime(Math.max(1, Math.round(elapsed / 60)));
    setFinished(true);
    setNow(at);
  }

  if (!ready || !dailyReady || now === 0 || !overview) {
    return <div className="card h-64 animate-pulse bg-stone-50" aria-hidden="true" />;
  }

  // ── Running session ──
  if (running) {
    const step = steps[stepIndex];
    const goalSeconds = daily.minutes * 60;
    const kinds = [...new Set(steps.map((s) => STEP_LABELS[s.kind]))];
    const current = step ? STEP_LABELS[step.kind] : "";
    return (
      <div ref={rootRef} className="flex scroll-mt-24 flex-col gap-5">
        <div className="card flex flex-col gap-3 p-4">
          <div className="flex items-center justify-between gap-3 text-sm">
            <span className="font-medium text-stone-700">{bonus ? "Séance bonus" : "Séance du jour"}</span>
            <span className="flex items-center gap-1.5 tabular-nums text-stone-600">
              <Clock className="h-4 w-4" aria-hidden="true" />
              {formatClock(elapsed)}
              {!bonus && <span className="text-stone-400"> / {daily.minutes}:00</span>}
            </span>
          </div>
          {!bonus && <ProgressBar value={Math.min(elapsed, goalSeconds)} max={goalSeconds} color="bg-success" />}
          <ol className="flex flex-wrap gap-x-3 gap-y-1 text-xs" aria-label="Étapes de la séance">
            {kinds.map((label) => {
              const firstIndex = steps.findIndex((s) => STEP_LABELS[s.kind] === label);
              const lastIndex = steps.length - 1 - [...steps].reverse().findIndex((s) => STEP_LABELS[s.kind] === label);
              const done = stepIndex > lastIndex;
              const active = label === current;
              return (
                <li
                  key={label}
                  aria-current={active ? "step" : undefined}
                  className={cn(
                    "flex items-center gap-1",
                    active ? "font-semibold text-primary" : done ? "text-success-ink" : "text-stone-400",
                    firstIndex < 0 && "hidden"
                  )}
                >
                  {done && <Check className="h-3 w-3" aria-hidden="true" />}
                  {label}
                </li>
              );
            })}
          </ol>
        </div>

        {step?.kind === "review" && (
          <StepIntro title="Révision" text="Les signes qui reviennent aujourd'hui, les plus fragiles d'abord.">
            <QuizRunner key={`review-${stepIndex}`} questions={step.questions} onAnswer={answer} onFinish={advance} />
          </StepIntro>
        )}
        {step?.kind === "discover" && (
          <StepIntro title={`Nouveaux signes — ${step.lesson.title}`}>
            <Discover
              intro={step.lesson.intro}
              signs={step.lesson.kana.map((id) => byId.get(id)).filter((k): k is Kana => !!k)}
              index={discoverIndex}
              byId={byId}
              onIndex={setDiscoverIndex}
              onDone={() => advance()}
            />
          </StepIntro>
        )}
        {step?.kind === "learn" && (
          <StepIntro title={`Entraîne-toi — ${step.lesson.title}`}>
            <QuizRunner key={`learn-${stepIndex}`} questions={step.questions} onAnswer={answer} onFinish={advance} />
          </StepIntro>
        )}
        {step?.kind === "practice" && (
          <StepIntro
            title="Consolidation"
            text="Tous les signes que tu as vus, mélangés : lire, reconnaître, écouter, écrire."
          >
            <QuizRunner key={`practice-${stepIndex}`} questions={step.questions} onAnswer={answer} onFinish={advance} />
          </StepIntro>
        )}
        {step?.kind === "read" && (
          <StepIntro title="Lis de vrais mots" text="Lis chaque mot à voix haute, puis vérifie.">
            <ul className="grid gap-3 sm:grid-cols-2">
              {step.words.map((w) => (
                <li key={w.term}>
                  <WordCard word={w} />
                </li>
              ))}
            </ul>
            <button type="button" onClick={() => advance()} className="btn-primary mt-2 gap-2 self-center">
              <Check className="h-4 w-4" />
              Terminer la séance
            </button>
          </StepIntro>
        )}
      </div>
    );
  }

  // ── Finished ──
  if (plan && finished) {
    const learned = plan.newLessons.flatMap((l) => l.kana).map((id) => byId.get(id)).filter((k): k is Kana => !!k);
    const tomorrow = dueKana(kana, progress, now + 24 * 60 * 60 * 1000).length;
    return (
      <div ref={rootRef} className="flex scroll-mt-24 flex-col gap-5">
        <div className="card flex flex-col items-center gap-4 p-6 text-center">
          <Sparkles className="h-8 w-8 text-warning" aria-hidden="true" />
          <h2 className="text-title font-bold text-stone-900">
            {bonus ? "Séance bonus terminée" : "Séance du jour terminée"}
          </h2>
          <p className="text-stone-600">
            {formatClock(elapsed)} de pratique
            {!bonus && streak > 0 && (
              <>
                {" · "}
                <span className="font-medium text-warning-ink">
                  {`${streak} jour${streak > 1 ? "s" : ""} d’affilée`}
                </span>
              </>
            )}
          </p>
          {learned.length > 0 && <LearnedToday signs={learned} />}
          <QuizSummary results={results} />
          <p className="text-sm text-stone-500">
            {tomorrow > 0
              ? `Demain, environ ${tomorrow} signe${tomorrow > 1 ? "s" : ""} à revoir. Reviens pour ne pas les perdre.`
              : "Reviens demain pour la suite de l'alphabet."}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <button type="button" onClick={() => setPlan(null)} className="btn-secondary">
              Retour
            </button>
            <button type="button" onClick={() => start(true)} className="btn-primary gap-2">
              <RotateCcw className="h-4 w-4" />
              Encore {BONUS_QUESTIONS} questions
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Overview ──
  const doneToday = todayRecord.done;
  const newSigns = overview.newLessons.flatMap((l) => l.kana).map((id) => byId.get(id)).filter((k): k is Kana => !!k);
  return (
    <div ref={rootRef} className="flex flex-col gap-5">
      <div className={cn("card flex flex-col gap-4 p-5 sm:p-6", doneToday && "border-success/40")}>
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-title font-bold text-stone-900">
            {doneToday ? "Séance du jour faite" : "Au programme aujourd'hui"}
          </h2>
          {doneToday && <Check className="h-6 w-6 shrink-0 text-success" aria-label="Terminée" />}
        </div>

        {doneToday ? (
          <p className="text-stone-600">
            Bravo, c&rsquo;est fait pour aujourd&rsquo;hui ({formatClock(todayRecord.seconds)} de pratique). La
            régularité compte plus que la durée : reviens demain. Tu peux aussi faire une séance bonus.
          </p>
        ) : (
          <ul className="flex flex-col gap-3 text-sm text-stone-700">
            {overview.review.length > 0 && (
              <li className="flex gap-2">
                <RotateCcw className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span>
                  <strong>{overview.review.length}</strong> signe{overview.review.length > 1 ? "s" : ""} à revoir
                  {overview.deferred > 0 && ` (et ${overview.deferred} gardés pour demain)`}
                </span>
              </li>
            )}
            {overview.newLessons.length > 0 && (
              <li className="flex flex-col gap-2">
                <span className="flex gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-warning" aria-hidden="true" />
                  <span>
                    <strong>{newSigns.length}</strong> nouveaux signes :{" "}
                    {overview.newLessons.map((l) => l.title).join(", ")}
                  </span>
                </span>
                <LearnedToday signs={newSigns} compact />
              </li>
            )}
            {overview.noNewReason === "backlog" && (
              <li className="rounded-lg bg-warning/10 px-3 py-2 text-warning-ink">
                Beaucoup de signes à revoir : aujourd&rsquo;hui on consolide, les nouveaux attendront demain.
              </li>
            )}
            {overview.noNewReason === "finished" && (
              <li className="rounded-lg bg-success/10 px-3 py-2 text-success-ink">
                Tu as vu tous les kana. Les séances servent maintenant à les garder.
              </li>
            )}
            {overview.practice > 0 && (
              <li className="flex gap-2">
                <Play className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  Consolidation : <strong>{overview.practice}</strong> questions sur tout ce que tu as vu
                </span>
              </li>
            )}
            <li className="flex gap-2 text-stone-500">
              <Clock className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              Environ {Math.max(1, Math.round(overview.estimateSeconds / 60))} minutes
            </li>
          </ul>
        )}

        <button
          type="button"
          onClick={() => start(doneToday)}
          className={cn("gap-2 py-3 text-base", doneToday ? "btn-secondary" : "btn-primary")}
        >
          {doneToday ? <RotateCcw className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          {doneToday ? `Séance bonus (${BONUS_QUESTIONS} questions)` : "Commencer la séance"}
        </button>
      </div>
      <div className="card flex flex-col gap-5 p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-full",
                streak > 0 ? "bg-warning/15 text-warning-ink" : "bg-stone-100 text-stone-400"
              )}
            >
              <Flame className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p className="text-2xl font-bold text-stone-900 tabular-nums">
                {streak} jour{streak > 1 ? "s" : ""}
              </p>
              <p className="text-sm text-stone-500">d&rsquo;affilée</p>
            </div>
          </div>
          <WeekStrip daily={daily} now={now} />
        </div>

        <div>
          <p className="mb-2 text-sm font-medium text-stone-700">Mon objectif par jour</p>
          <div role="radiogroup" aria-label="Objectif quotidien" className="grid grid-cols-2 gap-2">
            {GOALS.map((goal) => (
              <button
                key={goal}
                type="button"
                role="radio"
                aria-checked={daily.minutes === goal}
                onClick={() => saveDaily((prev) => ({ ...prev, minutes: goal }))}
                className={cn(
                  "rounded-lg border-2 px-3 py-2 text-sm font-medium transition-colors",
                  daily.minutes === goal
                    ? "border-primary bg-primary/5 text-primary-dark"
                    : "border-stone-200 text-stone-600 hover:border-stone-300"
                )}
              >
                {goal} minutes
              </button>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

function StepIntro({ title, text, children }: { title: string; text?: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <div>
        <h2 className="text-subtitle font-bold text-stone-800">{title}</h2>
        {text && <p className="text-sm text-stone-500">{text}</p>}
      </div>
      {children}
    </section>
  );
}

function LearnedToday({ signs, compact = false }: { signs: Kana[]; compact?: boolean }) {
  const lang = useContentLang();
  return (
    <ul className={cn("flex flex-wrap gap-1.5", compact ? "pl-6" : "justify-center")}>
      {signs.map((k) => (
        <li
          key={k.id}
          lang={lang}
          className={cn(
            "chinese flex items-center justify-center rounded-md border border-stone-200 bg-white text-stone-800",
            compact ? "h-9 min-w-9 px-1.5 text-lg" : "h-12 min-w-12 px-2 text-2xl"
          )}
        >
          {k.char}
        </li>
      ))}
    </ul>
  );
}

/** The last seven days: done, started, or missed. */
function WeekStrip({ daily, now }: { daily: KanaDaily; now: number }) {
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(now);
    d.setHours(12, 0, 0, 0);
    d.setDate(d.getDate() - (6 - i));
    return d;
  });
  const labels = ["D", "L", "M", "M", "J", "V", "S"];
  return (
    <ol className="flex gap-1.5" aria-label="Les sept derniers jours">
      {days.map((d, i) => {
        const record = daily.days[dayKey(d.getTime())];
        const state = record?.done ? "done" : record && record.answers > 0 ? "started" : "none";
        const isToday = i === 6;
        return (
          <li key={i} className="flex flex-col items-center gap-1">
            <span
              aria-label={`${d.toLocaleDateString("fr-FR", { weekday: "long" })} : ${
                state === "done" ? "séance faite" : state === "started" ? "commencée" : "pas de séance"
              }`}
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs",
                state === "done" && "border-success bg-success text-white",
                state === "started" && "border-warning bg-warning/10 text-warning-ink",
                state === "none" && "border-stone-200 text-stone-300",
                isToday && state === "none" && "border-primary/50"
              )}
            >
              {state === "done" ? <Check className="h-4 w-4" aria-hidden="true" /> : null}
            </span>
            <span className={cn("text-[11px]", isToday ? "font-semibold text-stone-700" : "text-stone-400")}>
              {labels[d.getDay()]}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
