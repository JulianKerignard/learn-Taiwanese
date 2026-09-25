"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, ChevronRight, Eye, Sparkles } from "lucide-react";
import AudioButton from "@/components/AudioButton";
import { useContentLang } from "@/components/ContentLanguage";
import { cn } from "@/lib/cn";
import { isLessonMastered, lessonMastery, readableWords, wordKanaIds } from "@/lib/kana";
import type { Kana, KanaLesson, KanaProgress, KanaScript, KanaWord } from "@/types/kana";
import QuizRunner, { QuizSummary, type QuizResult } from "./QuizRunner";
import { buildLessonQuiz, describeSign, isSpecial, kanaIndex, knownThrough, lessonsOf, romajiLabel, type Question } from "./kana-ui";
import WordCard from "./WordCard";

interface Props {
  script: KanaScript;
  kana: Kana[];
  lessons: KanaLesson[];
  words: KanaWord[];
  progress: KanaProgress;
  ready: boolean;
  onAnswer: (kanaId: string, correct: boolean) => void;
}

/** The lessons of one script as a vertical path; opening one runs its three steps. */
export default function LessonPath({ script, kana, lessons, words, progress, ready, onAnswer }: Props) {
  const lang = useContentLang();
  const [openId, setOpenId] = useState<string | null>(null);
  const byId = useMemo(() => new Map(kana.map((k) => [k.id, k])), [kana]);
  const scriptLessons = useMemo(() => lessonsOf(lessons, script), [lessons, script]);

  // The recommended lesson: the first one not yet mastered. Only once the
  // stored progress is read, so the prerender does not recommend lesson 1 to
  // someone who finished it.
  const nextId = ready ? scriptLessons.find((lesson) => !isLessonMastered(lesson, progress))?.id : undefined;

  function open(id: string | null) {
    setOpenId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const openIndex = scriptLessons.findIndex((lesson) => lesson.id === openId);
  if (openIndex >= 0) {
    const lesson = scriptLessons[openIndex];
    const following = scriptLessons[openIndex + 1];
    return (
      <LessonView
        key={lesson.id}
        lesson={lesson}
        number={openIndex + 1}
        byId={byId}
        kana={kana}
        lessons={lessons}
        words={words}
        progress={progress}
        onAnswer={onAnswer}
        onClose={() => open(null)}
        onNext={following ? () => open(following.id) : undefined}
      />
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="max-w-2xl text-sm text-stone-600">
        Chaque leçon présente quelques signes, puis te fait t&rsquo;entraîner et lire tes premiers mots.
        Tout est ouvert, mais l&rsquo;ordre proposé est le plus facile.
      </p>
      <ol className="relative flex flex-col gap-3">
        {scriptLessons.map((lesson, i) => {
          const mastery = lessonMastery(lesson, progress);
          const done = ready && isLessonMastered(lesson, progress);
          const isNext = lesson.id === nextId;
          return (
            <li key={lesson.id} className="relative flex gap-3 sm:gap-4">
              {i < scriptLessons.length - 1 && (
                <span aria-hidden="true" className="absolute top-13 bottom-[-0.75rem] left-[1.1875rem] w-0.5 bg-stone-200" />
              )}
              <span
                aria-hidden="true"
                className={cn(
                  "relative z-10 mt-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold",
                  done && "border-success bg-success text-white",
                  !done && isNext && "border-primary bg-primary text-white",
                  !done && !isNext && "border-stone-300 bg-white text-stone-500"
                )}
              >
                {done ? <Check className="h-5 w-5" /> : i + 1}
              </span>
              <button
                type="button"
                onClick={() => open(lesson.id)}
                className={cn(
                  "card flex min-w-0 flex-1 flex-col gap-2 p-4 text-left sm:p-5",
                  isNext && "border-primary/40 ring-2 ring-primary/20"
                )}
              >
                <span className="flex flex-wrap items-center gap-2">
                  <span className="font-bold text-stone-800">{lesson.title}</span>
                  {isNext && <span className="badge bg-primary/10 text-primary-dark">À faire maintenant</span>}
                  {done && <span className="badge bg-success/10 text-success-ink">Maîtrisée</span>}
                  <ChevronRight className="ml-auto h-4 w-4 shrink-0 text-stone-400" aria-hidden="true" />
                </span>
                <span lang={lang} className="chinese flex flex-wrap gap-x-2 gap-y-1 text-2xl leading-tight text-stone-700">
                  {lesson.kana.map((id) => (
                    <span key={id}>{byId.get(id)?.char}</span>
                  ))}
                </span>
                <span className="flex items-center gap-2">
                  <span className="block h-1.5 flex-1 overflow-hidden rounded-full bg-stone-100">
                    <span
                      className="block h-full rounded-full bg-success transition-all"
                      style={{ width: `${Math.round((ready ? mastery : 0) * 100)}%` }}
                    />
                  </span>
                  <span className="w-9 text-right text-xs text-stone-500 tabular-nums">
                    {ready ? `${Math.round(mastery * 100)}%` : "—"}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

// ── One lesson ────────────────────────────────────────────────────────

type Step = "discover" | "quiz" | "read" | "done";

const STEPS: { key: Exclude<Step, "done">; label: string }[] = [
  { key: "discover", label: "Découvre" },
  { key: "quiz", label: "Entraîne-toi" },
  { key: "read", label: "Lis tes premiers mots" },
];

function LessonView({
  lesson,
  number,
  byId,
  kana,
  lessons,
  words,
  progress,
  onAnswer,
  onClose,
  onNext,
}: {
  lesson: KanaLesson;
  number: number;
  byId: Map<string, Kana>;
  kana: Kana[];
  lessons: KanaLesson[];
  words: KanaWord[];
  progress: KanaProgress;
  onAnswer: (kanaId: string, correct: boolean) => void;
  onClose: () => void;
  onNext?: () => void;
}) {
  const [step, setStep] = useState<Step>("discover");
  const rootRef = useRef<HTMLDivElement>(null);

  // Each step starts at the top of the lesson: on a phone the button that moves
  // on sits at the bottom of a long step, and the next one used to open there.
  useEffect(() => {
    const root = rootRef.current;
    if (root && root.getBoundingClientRect().top < 0) {
      root.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, [step]);
  const [signIndex, setSignIndex] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [results, setResults] = useState<QuizResult[]>([]);

  const signs = lesson.kana.map((id) => byId.get(id)).filter((k): k is Kana => !!k);

  const lessonWords = useMemo(() => {
    const known = knownThrough(lessons, lesson);
    const index = kanaIndex(kana);
    const fresh = new Set(lesson.kana);
    return readableWords(words, known, kana)
      .filter((w) => (wordKanaIds(w.term, index) ?? []).some((id) => fresh.has(id)))
      .slice(0, 6);
  }, [lessons, lesson, kana, words]);

  function startQuiz() {
    setQuestions(buildLessonQuiz(lesson, lessons, kana, words, progress, Math.random));
    setResults([]);
    setStep("quiz");
  }

  const stepIndex = STEPS.findIndex((s) => s.key === step);

  return (
    <div ref={rootRef} className="flex scroll-mt-24 flex-col gap-5">
      <div className="flex items-center gap-3">
        <button type="button" onClick={onClose} className="btn-secondary gap-1.5 px-3">
          <ArrowLeft className="h-4 w-4" />
          Parcours
        </button>
        <div className="min-w-0">
          <p className="text-xs text-stone-500">Leçon {number}</p>
          <h2 className="truncate text-title font-bold text-stone-900">{lesson.title}</h2>
        </div>
      </div>

      <ol className="grid grid-cols-3 gap-2" aria-label="Étapes de la leçon">
        {STEPS.map((s, i) => {
          const current = s.key === step;
          const past = step === "done" || i < stepIndex;
          return (
            <li
              key={s.key}
              aria-current={current ? "step" : undefined}
              className={cn(
                "flex flex-col gap-1.5 text-[11px] font-medium sm:text-xs",
                current ? "text-primary" : past ? "text-success-ink" : "text-stone-400"
              )}
            >
              <span
                className={cn(
                  "h-1.5 rounded-full",
                  current ? "bg-primary" : past ? "bg-success" : "bg-stone-200"
                )}
              />
              <span>
                {i + 1}. {s.label}
              </span>
            </li>
          );
        })}
      </ol>

      {step === "discover" && (
        <Discover
          intro={lesson.intro}
          signs={signs}
          index={signIndex}
          byId={byId}
          onIndex={setSignIndex}
          onDone={startQuiz}
        />
      )}

      {step === "quiz" && questions.length > 0 && (
        <QuizRunner
          questions={questions}
          onAnswer={onAnswer}
          onFinish={(r) => {
            setResults(r);
            setStep("read");
          }}
        />
      )}

      {step === "read" && (
        <div className="flex flex-col gap-4">
          <p className="text-stone-600">
            {lessonWords.length > 0
              ? "Tu peux déjà lire ces mots ! Lis-les à voix haute, puis vérifie."
              : "Pas encore de mot à lire avec ces signes : encore une leçon ou deux et ils arrivent."}
          </p>
          {lessonWords.length > 0 && (
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {lessonWords.map((w) => (
                <li key={w.term}>
                  <WordCard word={w} />
                </li>
              ))}
            </ul>
          )}
          <div>
            <button type="button" onClick={() => setStep("done")} className="btn-primary gap-2">
              Terminer la leçon
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {step === "done" && (
        <div className="card flex flex-col items-center gap-5 p-6 text-center sm:p-8">
          <Sparkles className="h-8 w-8 text-warning" aria-hidden="true" />
          <h3 className="text-title font-bold text-stone-900">Leçon terminée</h3>
          <QuizSummary results={results} />
          <p className="max-w-md text-sm text-stone-500">
            Un signe est maîtrisé après trois bonnes réponses d&rsquo;affilée. Reviens le réviser dans
            l&rsquo;onglet Entraînement.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button type="button" onClick={startQuiz} className="btn-secondary">
              Refaire l&rsquo;entraînement
            </button>
            {onNext ? (
              <button type="button" onClick={onNext} className="btn-primary gap-2">
                Leçon suivante
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button type="button" onClick={onClose} className="btn-primary">
                Retour au parcours
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function Discover({
  intro,
  signs,
  index,
  byId,
  onIndex,
  onDone,
}: {
  intro: string;
  signs: Kana[];
  index: number;
  byId: Map<string, Kana>;
  onIndex: (i: number) => void;
  onDone: () => void;
}) {
  const lang = useContentLang();
  const sign = signs[index];
  if (!sign) return null;
  const description = describeSign(sign);
  const confusables = (sign.confusables ?? []).map((id) => byId.get(id)).filter((k): k is Kana => !!k);
  const last = index + 1 >= signs.length;

  return (
    <div className="flex flex-col gap-4">
      {index === 0 && <p className="rounded-lg bg-accent/5 px-4 py-3 text-sm text-stone-700">{intro}</p>}

      <div className="card flex flex-col items-center gap-4 p-5 text-center sm:p-8">
        <p className="text-xs text-stone-500 tabular-nums">
          Signe {index + 1} sur {signs.length}
        </p>
        <span lang={lang} className="chinese text-8xl leading-none text-stone-900 sm:text-9xl">
          {sign.char}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold text-primary">{romajiLabel(sign)}</span>
          {!isSpecial(sign) && <AudioButton text={sign.char} size="lg" />}
        </div>
        {description && <p className="max-w-lg text-stone-700">{description}</p>}
        {confusables.length > 0 && (
          <div className="flex flex-col items-center gap-2">
            <p className="flex items-center gap-1.5 text-xs font-medium text-warning-ink">
              <Eye className="h-3.5 w-3.5" aria-hidden="true" />À ne pas confondre avec
            </p>
            <ul className="flex flex-wrap justify-center gap-2">
              {confusables.map((k) => (
                <li
                  key={k.id}
                  className="flex items-baseline gap-1.5 rounded-lg border border-warning/30 bg-warning/5 px-3 py-1"
                >
                  <span lang={lang} className="chinese text-2xl">
                    {k.char}
                  </span>
                  <span className="text-sm text-stone-600">{k.romaji}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => onIndex(index - 1)}
          disabled={index === 0}
          className="btn-secondary gap-1.5 disabled:opacity-40"
        >
          <ArrowLeft className="h-4 w-4" />
          Précédent
        </button>
        {last ? (
          <button type="button" onClick={onDone} className="btn-primary gap-1.5">
            Je m&rsquo;entraîne
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button type="button" onClick={() => onIndex(index + 1)} className="btn-primary gap-1.5">
            Suivant
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
      {!last && (
        <button type="button" onClick={onDone} className="self-center text-sm text-stone-500 underline hover:text-stone-700">
          Passer directement à l&rsquo;entraînement
        </button>
      )}
    </div>
  );
}
