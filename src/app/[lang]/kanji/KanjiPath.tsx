"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, ChevronRight, MapPin, Sparkles } from "lucide-react";
import { useContentLang } from "@/components/ContentLanguage";
import { cn } from "@/lib/cn";
import { isLessonMastered, lessonMastery } from "@/lib/kanji";
import type { KanjiProgress } from "@/types/kanji";
import { buildLessonQuiz, type KanjiCard, type KanjiWord, type PageLesson, type Question } from "./kanji-ui";
import KanjiQuiz, { QuizSummary, type QuizResult } from "./KanjiQuiz";
import { ExampleWord, Readings } from "./KanjiParts";

interface Props {
  lessons: PageLesson[];
  byChar: Map<string, KanjiCard>;
  all: KanjiCard[];
  words: KanjiWord[];
  levelLabels: Record<number, string>;
  progress: KanjiProgress;
  /** The learner's current course unit, once the stored path progress is read. */
  currentUnit: { id: string; number: number } | null;
  ready: boolean;
  onAnswer: (char: string, correct: boolean) => void;
}

/** A lesson's heading: "Unité 12 · En ville", or the lesson or text title outside the path. */
export function lessonTitle(lesson: PageLesson): string {
  return lesson.path ? `Unité ${lesson.unitNumber} · ${lesson.unitTitle}` : lesson.unitTitle;
}

interface Group {
  key: string;
  title: string;
  lessons: PageLesson[];
}

function groupsOf(lessons: PageLesson[], levelLabels: Record<number, string>): Group[] {
  const groups: Group[] = [];
  for (const lesson of lessons) {
    const key = lesson.path ? `level-${lesson.level}` : "extra";
    let group = groups.find((g) => g.key === key);
    if (!group) {
      group = {
        key,
        title: lesson.path
          ? `Parcours ${levelLabels[lesson.level] ?? ""}`.trim()
          : "Hors parcours : leçons thématiques et lectures",
        lessons: [],
      };
      groups.push(group);
    }
    group.lessons.push(lesson);
  }
  return groups;
}

/**
 * The lessons that follow the course path, grouped by level. The one to do now
 * is the first not mastered up to the learner's current unit, so a learner in
 * unit 20 is not sent back to unit 8 once it is done — and is not sent ahead.
 */
export default function KanjiPath({ lessons, byChar, all, words, levelLabels, progress, currentUnit, ready, onAnswer }: Props) {
  const lang = useContentLang();
  const [openId, setOpenId] = useState<string | null>(null);
  const groups = useMemo(() => groupsOf(lessons, levelLabels), [lessons, levelLabels]);

  const reached = currentUnit
    ? lessons.filter((lesson) => lesson.path && lesson.unitNumber <= currentUnit.number)
    : [];
  const nextId = ready
    ? (reached.find((lesson) => !isLessonMastered(lesson, progress)) ??
        lessons.find((lesson) => !isLessonMastered(lesson, progress)))?.unitId
    : undefined;

  function open(id: string | null) {
    setOpenId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const openIndex = lessons.findIndex((lesson) => lesson.unitId === openId);
  if (openIndex >= 0) {
    const lesson = lessons[openIndex];
    const following = lessons[openIndex + 1];
    return (
      <LessonView
        key={lesson.unitId}
        lesson={lesson}
        earlier={lessons
          .slice(0, openIndex)
          .flatMap((l) => l.kanji)
          .map((c) => byChar.get(c))
          .filter((k): k is KanjiCard => !!k)}
        byChar={byChar}
        all={all}
        words={words}
        levelLabels={levelLabels}
        progress={progress}
        onAnswer={onAnswer}
        onClose={() => open(null)}
        onNext={following ? () => open(following.unitId) : undefined}
      />
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <p className="max-w-2xl text-sm text-stone-600">
        Chaque leçon reprend les kanji nouveaux d&rsquo;une unité du parcours : tu les découvres avec des mots
        que tu connais déjà, puis tu t&rsquo;entraînes. Tout est ouvert ; suis ton parcours pour que les
        kanji arrivent au bon moment.
      </p>
      {groups.map((group) => (
        <section key={group.key} className="flex flex-col gap-3" aria-labelledby={`kanji-group-${group.key}`}>
          <h2 id={`kanji-group-${group.key}`} className="text-subtitle font-bold text-stone-800">
            {group.title}
          </h2>
          <ol className="grid gap-3 lg:grid-cols-2">
            {group.lessons.map((lesson) => {
              const mastery = lessonMastery(lesson, progress);
              const done = ready && isLessonMastered(lesson, progress);
              const isNext = lesson.unitId === nextId;
              const isCurrent = ready && currentUnit?.id === lesson.unitId;
              return (
                <li key={lesson.unitId}>
                  <button
                    type="button"
                    onClick={() => open(lesson.unitId)}
                    className={cn(
                      "card flex w-full min-w-0 flex-col gap-2 p-4 text-left sm:p-5",
                      isNext && "border-primary/40 ring-2 ring-primary/20"
                    )}
                  >
                    <span className="flex flex-wrap items-center gap-2">
                      <span
                        aria-hidden="true"
                        className={cn(
                          "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold",
                          done && "border-success bg-success text-white",
                          !done && isNext && "border-primary bg-primary text-white",
                          !done && !isNext && "border-stone-300 bg-white text-stone-500"
                        )}
                      >
                        {done ? <Check className="h-4 w-4" /> : lesson.path ? lesson.unitNumber : "·"}
                      </span>
                      <span className="min-w-0 flex-1 font-bold text-stone-800">{lessonTitle(lesson)}</span>
                      <ChevronRight className="h-4 w-4 shrink-0 text-stone-400" aria-hidden="true" />
                    </span>
                    {(isNext || done || isCurrent) && (
                      <span className="flex flex-wrap gap-2">
                        {isNext && <span className="badge bg-primary/10 text-primary-dark">À faire maintenant</span>}
                        {isCurrent && (
                          <span className="badge gap-1 bg-accent/10 text-stone-700">
                            <MapPin className="h-3 w-3" aria-hidden="true" />
                            Ton unité en cours
                          </span>
                        )}
                        {done && <span className="badge bg-success/10 text-success-ink">Maîtrisée</span>}
                      </span>
                    )}
                    <span lang={lang} className="chinese flex flex-wrap gap-x-2 gap-y-1 text-2xl leading-tight text-stone-700">
                      {lesson.kanji.map((c) => (
                        <span key={c}>{c}</span>
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
        </section>
      ))}
    </div>
  );
}

// ── One lesson ────────────────────────────────────────────────────────

type Step = "discover" | "quiz" | "done";

const STEPS: { key: Exclude<Step, "done">; label: string }[] = [
  { key: "discover", label: "Découvre" },
  { key: "quiz", label: "Entraîne-toi" },
];

function LessonView({
  lesson,
  earlier,
  byChar,
  all,
  words,
  levelLabels,
  progress,
  onAnswer,
  onClose,
  onNext,
}: {
  lesson: PageLesson;
  earlier: KanjiCard[];
  byChar: Map<string, KanjiCard>;
  all: KanjiCard[];
  words: KanjiWord[];
  levelLabels: Record<number, string>;
  progress: KanjiProgress;
  onAnswer: (char: string, correct: boolean) => void;
  onClose: () => void;
  onNext?: () => void;
}) {
  const [step, setStep] = useState<Step>("discover");
  const [kanjiIndex, setKanjiIndex] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [results, setResults] = useState<QuizResult[]>([]);
  const rootRef = useRef<HTMLDivElement>(null);

  // Each step (and each kanji) starts at the top of the lesson: on a phone the
  // button that moves on sits at the bottom of a long card.
  useEffect(() => {
    const root = rootRef.current;
    if (root && root.getBoundingClientRect().top < 0) root.scrollIntoView({ block: "start", behavior: "smooth" });
  }, [step, kanjiIndex]);

  const cards = lesson.kanji.map((c) => byChar.get(c)).filter((k): k is KanjiCard => !!k);

  function startQuiz() {
    setQuestions(buildLessonQuiz(lesson, earlier, byChar, { all, words }, progress, Math.random));
    setResults([]);
    setStep("quiz");
  }

  const stepIndex = STEPS.findIndex((s) => s.key === step);

  return (
    <div ref={rootRef} className="mx-auto flex w-full max-w-3xl scroll-mt-24 flex-col gap-5">
      <div className="flex items-center gap-3">
        <button type="button" onClick={onClose} className="btn-secondary shrink-0 gap-1.5 px-3">
          <ArrowLeft className="h-4 w-4" />
          Parcours
        </button>
        <div className="min-w-0">
          <p className="text-xs text-stone-500">
            {lesson.path ? `Unité ${lesson.unitNumber}` : "Hors parcours"} · {cards.length} kanji
          </p>
          <h2 className="truncate text-title font-bold text-stone-900">{lesson.unitTitle}</h2>
        </div>
      </div>

      <ol className="grid grid-cols-2 gap-2" aria-label="Étapes de la leçon">
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
              <span className={cn("h-1.5 rounded-full", current ? "bg-primary" : past ? "bg-success" : "bg-stone-200")} />
              <span>
                {i + 1}. {s.label}
              </span>
            </li>
          );
        })}
      </ol>

      {step === "discover" && cards[kanjiIndex] && (
        <div className="flex flex-col gap-4">
          <KanjiSheet
            card={cards[kanjiIndex]}
            words={words}
            position={`Kanji ${kanjiIndex + 1} sur ${cards.length}`}
            levelLabel={levelLabels[cards[kanjiIndex].jlpt]}
          />
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setKanjiIndex(kanjiIndex - 1)}
              disabled={kanjiIndex === 0}
              className="btn-secondary gap-1.5 disabled:opacity-40"
            >
              <ArrowLeft className="h-4 w-4" />
              Précédent
            </button>
            {kanjiIndex + 1 >= cards.length ? (
              <button type="button" onClick={startQuiz} className="btn-primary gap-1.5">
                Je m&rsquo;entraîne
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button type="button" onClick={() => setKanjiIndex(kanjiIndex + 1)} className="btn-primary gap-1.5">
                Suivant
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
          {kanjiIndex + 1 < cards.length && (
            <button type="button" onClick={startQuiz} className="self-center text-sm text-stone-500 underline hover:text-stone-700">
              Passer directement à l&rsquo;entraînement
            </button>
          )}
        </div>
      )}

      {step === "quiz" && questions.length > 0 && (
        <KanjiQuiz
          questions={questions}
          onAnswer={onAnswer}
          onFinish={(r) => {
            setResults(r);
            setStep("done");
          }}
        />
      )}

      {step === "done" && (
        <div className="card flex flex-col items-center gap-5 p-6 text-center sm:p-8">
          <Sparkles className="h-8 w-8 text-warning" aria-hidden="true" />
          <h3 className="text-title font-bold text-stone-900">Leçon terminée</h3>
          <QuizSummary results={results} />
          <p className="max-w-md text-sm text-stone-500">
            Un kanji est maîtrisé après trois bonnes réponses d&rsquo;affilée. Reviens le réviser dans
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

/**
 * Everything about one kanji: glyph, meanings, readings, strokes, mnemonic,
 * example words. `compact` for the narrow detail panel of the list.
 */
export function KanjiSheet({
  card,
  words,
  position,
  levelLabel,
  footer,
  compact = false,
}: {
  card: KanjiCard;
  words: KanjiWord[];
  position?: string;
  levelLabel?: string;
  footer?: React.ReactNode;
  compact?: boolean;
}) {
  const lang = useContentLang();
  const examples = card.examples.map((i) => words[i]).filter(Boolean);
  return (
    <div className={cn("flex flex-col gap-5", compact ? "p-5" : "card p-5 sm:p-8")}>
      {position && <p className="text-center text-xs text-stone-500 tabular-nums">{position}</p>}
      <div className={cn("flex flex-col items-center gap-5", !compact && "sm:flex-row sm:items-start sm:gap-8")}>
        <span
          lang={lang}
          className={cn("chinese leading-none text-stone-900", compact ? "text-7xl" : "text-8xl sm:text-9xl")}
        >
          {card.char}
        </span>
        <div className="flex w-full min-w-0 flex-1 flex-col gap-3">
          <p className={cn("text-center text-2xl font-bold text-primary", !compact && "sm:text-left")}>
            {card.meanings.join(", ")}
          </p>
          <Readings k={card} className={cn("mx-auto w-fit max-w-full", !compact && "sm:mx-0")} />
          <p className={cn("text-center text-xs text-stone-500", !compact && "sm:text-left")}>
            {card.strokes} trait{card.strokes > 1 ? "s" : ""}
            {levelLabel && <> · {levelLabel}</>}
          </p>
        </div>
      </div>
      {card.mnemonic && <p className="rounded-lg bg-accent/5 px-4 py-3 text-sm text-stone-700">{card.mnemonic}</p>}
      {examples.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium text-stone-500">Dans des mots du cours</p>
          <ul className={cn("grid gap-2", !compact && "sm:grid-cols-2")}>
            {examples.map((w) => (
              <li key={w.term}>
                <ExampleWord word={w} highlight={card.char} />
              </li>
            ))}
          </ul>
        </div>
      )}
      {footer}
    </div>
  );
}
