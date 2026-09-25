"use client";

import { useMemo, useState } from "react";
import { BookOpenText, Languages, Puzzle, Play, RotateCcw, Shuffle } from "lucide-react";
import { useContentLang } from "@/components/ContentLanguage";
import { cn } from "@/lib/cn";
import type { KanjiProgress } from "@/types/kanji";
import { drawTargets, drillQuestions, type DrillMode, type KanjiCard, type KanjiWord, type PageLesson, type Question } from "./kanji-ui";
import KanjiQuiz, { QuizSummary, type QuizResult } from "./KanjiQuiz";
import { lessonTitle } from "./KanjiPath";

const SESSION_LENGTH = 20;
const WEAK_LIMIT = 30;

type Source = "lessons" | "seen" | "weak";

const MODES: { key: DrillMode; label: string; hint: string; icon: React.ReactNode }[] = [
  { key: "meaning", label: "Kanji → sens", hint: "Lis le kanji, choisis son sens", icon: <Languages className="h-4 w-4" /> },
  { key: "reading", label: "Lecture d'un mot", hint: "Choisis comment se lit un mot", icon: <BookOpenText className="h-4 w-4" /> },
  { key: "word", label: "Mot → kanji", hint: "Retrouve le kanji qui manque", icon: <Puzzle className="h-4 w-4" /> },
  { key: "mixed", label: "Tout mélanger", hint: "Les trois à la suite", icon: <Shuffle className="h-4 w-4" /> },
];

/** Kanji answered at least once and still weak: low box first, then lowest accuracy. */
function weakKanji(all: KanjiCard[], progress: KanjiProgress): KanjiCard[] {
  return all
    .filter((k) => (progress[k.char]?.seen ?? 0) > 0 && (progress[k.char]?.box ?? 0) <= 2)
    .sort((a, b) => {
      const ma = progress[a.char]!;
      const mb = progress[b.char]!;
      return ma.box - mb.box || ma.correct / ma.seen - mb.correct / mb.seen;
    })
    .slice(0, WEAK_LIMIT);
}

export default function KanjiDrill({
  kanji,
  byChar,
  words,
  lessons,
  progress,
  onAnswer,
}: {
  kanji: KanjiCard[];
  byChar: Map<string, KanjiCard>;
  words: KanjiWord[];
  lessons: PageLesson[];
  progress: KanjiProgress;
  onAnswer: (char: string, correct: boolean) => void;
}) {
  const lang = useContentLang();
  const seen = useMemo(() => kanji.filter((k) => (progress[k.char]?.seen ?? 0) > 0), [kanji, progress]);
  const weak = useMemo(() => weakKanji(kanji, progress), [kanji, progress]);

  // null: nothing ticked by hand yet, so default to the lessons already started
  // (or the first one) — which depends on the stored progress.
  const [picked, setPicked] = useState<string[] | null>(null);
  const [source, setSource] = useState<Source | null>(null);
  const [mode, setMode] = useState<DrillMode>("meaning");
  const [session, setSession] = useState<Question[] | null>(null);
  const [results, setResults] = useState<QuizResult[] | null>(null);

  const startedLessons = lessons
    .filter((lesson) => lesson.kanji.some((c) => (progress[c]?.seen ?? 0) > 0))
    .map((lesson) => lesson.unitId);
  const lessonIds = picked ?? (startedLessons.length > 0 ? startedLessons : lessons.slice(0, 1).map((l) => l.unitId));
  const activeSource: Source = source ?? "lessons";

  const lessonPool = lessons
    .filter((lesson) => lessonIds.includes(lesson.unitId))
    .flatMap((lesson) => lesson.kanji)
    .map((c) => byChar.get(c))
    .filter((k): k is KanjiCard => !!k);
  const pool = activeSource === "seen" ? seen : activeSource === "weak" ? weak : lessonPool;

  function toggleLesson(id: string) {
    setSource("lessons");
    setPicked(lessonIds.includes(id) ? lessonIds.filter((x) => x !== id) : [...lessonIds, id]);
  }

  function start() {
    const rand = Math.random;
    // Distractors from everything already met, so a small pool still offers four options.
    const distractors = [...new Map([...seen, ...pool].map((k) => [k.char, k])).values()];
    const targets = drawTargets(pool, progress, SESSION_LENGTH, rand);
    setResults(null);
    setSession(drillQuestions(targets, mode, { pool: distractors, all: kanji, words }, rand));
  }

  if (session && session.length > 0) {
    return (
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-4">
        <div className="flex justify-end">
          <button type="button" onClick={() => setSession(null)} className="text-sm text-stone-500 underline hover:text-stone-700">
            Arrêter la session
          </button>
        </div>
        <KanjiQuiz
          questions={session}
          onAnswer={onAnswer}
          onFinish={(r) => {
            setSession(null);
            setResults(r);
          }}
        />
      </div>
    );
  }

  if (results) {
    return (
      <div className="card mx-auto flex w-full max-w-2xl flex-col items-center gap-5 p-6 text-center sm:p-8">
        <h2 className="text-title font-bold text-stone-900">Session terminée</h2>
        <QuizSummary results={results} />
        <div className="flex flex-wrap justify-center gap-3">
          <button type="button" onClick={() => setResults(null)} className="btn-secondary">
            Changer les réglages
          </button>
          <button type="button" onClick={start} className="btn-primary gap-2">
            <RotateCcw className="h-4 w-4" />
            Nouvelle session
          </button>
        </div>
      </div>
    );
  }

  const quick: { key: Source; label: string; count: number }[] = [
    { key: "seen", label: "Tout ce que j'ai vu", count: seen.length },
    { key: "weak", label: "Mes points faibles", count: weak.length },
  ];

  return (
    // pb-28 on phones: room for the fixed start bar, so it never hides the last lesson.
    <div className="grid gap-6 pb-28 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start lg:pb-0">
      <section className="card flex min-w-0 flex-col gap-4 p-4 sm:p-6 lg:row-span-2" aria-labelledby="kanji-drill-signs">
        <h2 id="kanji-drill-signs" className="text-subtitle font-bold text-stone-800">
          Quels kanji ?
        </h2>
        <div className="flex flex-wrap gap-2">
          {quick.map((q) => (
            <button
              key={q.key}
              type="button"
              aria-pressed={activeSource === q.key}
              disabled={q.count === 0}
              onClick={() => setSource(activeSource === q.key ? "lessons" : q.key)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-40",
                activeSource === q.key
                  ? "border-primary bg-primary/10 text-primary-dark"
                  : "border-stone-300 bg-white text-stone-700 hover:bg-stone-50"
              )}
            >
              {q.label} <span className="tabular-nums text-stone-500">({q.count})</span>
            </button>
          ))}
        </div>
        <fieldset className={cn("flex flex-col gap-1", activeSource !== "lessons" && "opacity-60")}>
          <legend className="mb-2 text-sm text-stone-500">Ou choisis des leçons :</legend>
          <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
            {lessons.map((lesson) => {
              const checked = activeSource === "lessons" && lessonIds.includes(lesson.unitId);
              return (
                <li key={lesson.unitId} className="min-w-0">
                  <label className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-1.5 hover:bg-stone-50">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleLesson(lesson.unitId)}
                      className="h-4 w-4 shrink-0 accent-primary"
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm text-stone-700">{lessonTitle(lesson)}</span>
                      <span lang={lang} className="chinese block truncate text-xs text-stone-500">
                        {lesson.kanji.join(" ")}
                      </span>
                    </span>
                  </label>
                </li>
              );
            })}
          </ul>
        </fieldset>
      </section>

      <div className="flex flex-col gap-4 lg:sticky lg:top-20">
        <section className="card flex flex-col gap-3 p-4 sm:p-6" aria-labelledby="kanji-drill-mode">
          <h2 id="kanji-drill-mode" className="text-subtitle font-bold text-stone-800">
            Mode
          </h2>
          <div role="radiogroup" aria-labelledby="kanji-drill-mode" className="grid grid-cols-2 gap-2 lg:grid-cols-1">
            {MODES.map((m) => (
              <button
                key={m.key}
                type="button"
                role="radio"
                aria-checked={mode === m.key}
                onClick={() => setMode(m.key)}
                className={cn(
                  "flex flex-col items-start gap-0.5 rounded-lg border-2 px-3 py-2 text-left transition-colors",
                  mode === m.key ? "border-primary bg-primary/5" : "border-stone-200 hover:border-stone-300"
                )}
              >
                <span className="flex items-center gap-1.5 text-sm font-medium text-stone-800">
                  {m.icon}
                  {m.label}
                </span>
                <span className="text-xs text-stone-500">{m.hint}</span>
              </button>
            ))}
          </div>
        </section>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 flex flex-col gap-1.5 border-t border-stone-200 bg-white/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-sm lg:static lg:z-auto lg:col-start-2 lg:border-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
        <button type="button" onClick={start} disabled={pool.length === 0} className="btn-primary gap-2 py-3 text-base disabled:opacity-50">
          <Play className="h-4 w-4" />
          Lancer {SESSION_LENGTH} questions
        </button>
        <p className="text-center text-xs text-stone-500">
          {pool.length === 0
            ? "Choisis au moins un kanji à travailler."
            : `${pool.length} kanji en jeu · les plus fragiles reviennent plus souvent`}
        </p>
      </div>
    </div>
  );
}
