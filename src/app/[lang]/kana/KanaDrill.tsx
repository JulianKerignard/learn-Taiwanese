"use client";

import { useMemo, useState } from "react";
import { Ear, Keyboard, ListChecks, Play, RotateCcw, Shuffle } from "lucide-react";
import { useContentLang } from "@/components/ContentLanguage";
import { cn } from "@/lib/cn";
import type { Kana, KanaLesson, KanaProgress, KanaScript, KanaWord } from "@/types/kana";
import QuizRunner, { QuizSummary, type QuizResult } from "./QuizRunner";
import { buildQuestion, drawTargets, isSpecial, lessonsOf, type DrillMode, type Question } from "./kana-ui";

const SESSION_LENGTH = 20;
const WEAK_LIMIT = 20;

type Source = "lessons" | "seen" | "weak";

const MODES: { key: DrillMode; label: string; hint: string; icon: React.ReactNode }[] = [
  { key: "kana-romaji", label: "Kana → rōmaji", hint: "Lis le signe, choisis sa lecture", icon: <ListChecks className="h-4 w-4" /> },
  { key: "romaji-kana", label: "Rōmaji → kana", hint: "Retrouve le signe d'une lecture", icon: <Shuffle className="h-4 w-4" /> },
  { key: "type", label: "Écrire le rōmaji", hint: "Tape la lecture au clavier", icon: <Keyboard className="h-4 w-4" /> },
  { key: "listen", label: "Écoute", hint: "Entends le son, choisis le signe", icon: <Ear className="h-4 w-4" /> },
];

/** Signs answered at least once and still weak: low box first, then lowest accuracy. */
function weakSigns(signs: Kana[], progress: KanaProgress): Kana[] {
  return signs
    .filter((k) => (progress[k.id]?.seen ?? 0) > 0 && (progress[k.id]?.box ?? 0) <= 2)
    .sort((a, b) => {
      const ma = progress[a.id]!;
      const mb = progress[b.id]!;
      return ma.box - mb.box || ma.correct / ma.seen - mb.correct / mb.seen;
    })
    .slice(0, WEAK_LIMIT);
}

export default function KanaDrill({
  script,
  kana,
  lessons,
  words,
  progress,
  onAnswer,
}: {
  script: KanaScript;
  kana: Kana[];
  lessons: KanaLesson[];
  words: KanaWord[];
  progress: KanaProgress;
  onAnswer: (kanaId: string, correct: boolean) => void;
}) {
  const lang = useContentLang();
  const scriptLessons = useMemo(() => lessonsOf(lessons, script), [lessons, script]);
  const byId = useMemo(() => new Map(kana.map((k) => [k.id, k])), [kana]);
  const signs = useMemo(() => kana.filter((k) => k.script === script), [kana, script]);

  const seen = signs.filter((k) => (progress[k.id]?.seen ?? 0) > 0);
  const weak = weakSigns(signs, progress);

  // null: nothing ticked by hand yet, so default to the lessons already started
  // (or the first one) — which depends on the stored progress.
  const [picked, setPicked] = useState<string[] | null>(null);
  const [source, setSource] = useState<Source | null>(null);
  const [mode, setMode] = useState<DrillMode>("kana-romaji");
  const [session, setSession] = useState<Question[] | null>(null);
  const [results, setResults] = useState<QuizResult[] | null>(null);

  const startedLessons = scriptLessons
    .filter((lesson) => lesson.kana.some((id) => (progress[id]?.seen ?? 0) > 0))
    .map((lesson) => lesson.id);
  const lessonIds = picked ?? (startedLessons.length > 0 ? startedLessons : scriptLessons.slice(0, 1).map((l) => l.id));
  const activeSource: Source = source ?? "lessons";

  const lessonPool = scriptLessons
    .filter((lesson) => lessonIds.includes(lesson.id))
    .flatMap((lesson) => lesson.kana)
    .map((id) => byId.get(id))
    .filter((k): k is Kana => !!k);
  const pool = activeSource === "seen" ? seen : activeSource === "weak" ? weak : lessonPool;
  // Special signs are drilled inside words; typing or hearing them alone makes no sense.
  const drillable = pool.filter((k) => !isSpecial(k) || mode === "kana-romaji" || mode === "romaji-kana");

  function toggleLesson(id: string) {
    setSource("lessons");
    setPicked(lessonIds.includes(id) ? lessonIds.filter((x) => x !== id) : [...lessonIds, id]);
  }

  function start() {
    const rand = Math.random;
    const known = new Set([...seen, ...drillable].map((k) => k.id));
    const ctx = { pool: drillable, kana, words, known };
    const targets = drawTargets(drillable, progress, SESSION_LENGTH, rand);
    const questions = targets
      .map((k) => buildQuestion(k, mode, ctx, rand))
      .filter((q): q is Question => q !== null);
    setResults(null);
    setSession(questions);
  }

  if (session && session.length > 0) {
    return (
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-4">
        <div className="flex justify-end">
          <button type="button" onClick={() => setSession(null)} className="text-sm text-stone-500 underline hover:text-stone-700">
            Arrêter la session
          </button>
        </div>
        <QuizRunner
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
    // pb-28 on phones: room for the fixed start bar below, so it never hides the
    // last lesson of the list.
    <div className="grid gap-6 pb-28 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start lg:pb-0">
      <section className="card flex min-w-0 flex-col gap-4 p-4 sm:p-6 lg:row-span-2" aria-labelledby="drill-signs">
        <h2 id="drill-signs" className="text-subtitle font-bold text-stone-800">
          Quels signes ?
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
          <ul className="grid gap-1 sm:grid-cols-2">
            {scriptLessons.map((lesson) => {
              const checked = activeSource === "lessons" && lessonIds.includes(lesson.id);
              return (
                <li key={lesson.id}>
                  <label className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-1.5 hover:bg-stone-50">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleLesson(lesson.id)}
                      className="h-4 w-4 shrink-0 accent-primary"
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm text-stone-700">{lesson.title}</span>
                      <span lang={lang} className="chinese block truncate text-xs text-stone-500">
                        {lesson.kana.map((id) => byId.get(id)?.char).join(" ")}
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
        <section className="card flex flex-col gap-3 p-4 sm:p-6" aria-labelledby="drill-mode">
          <h2 id="drill-mode" className="text-subtitle font-bold text-stone-800">
            Mode
          </h2>
          <div role="radiogroup" aria-labelledby="drill-mode" className="grid grid-cols-2 gap-2 lg:grid-cols-1">
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

      {/* On a phone the lesson list is long: the start button stays pinned to
          the bottom of the screen instead of waiting below all nineteen lessons.
          From lg it sits under the mode picker, in the sticky side column. */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex flex-col gap-1.5 border-t border-stone-200 bg-white/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-sm lg:static lg:z-auto lg:col-start-2 lg:border-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
        <button type="button" onClick={start} disabled={drillable.length === 0} className="btn-primary gap-2 py-3 text-base disabled:opacity-50">
          <Play className="h-4 w-4" />
          Lancer {SESSION_LENGTH} questions
        </button>
        <p className="text-center text-xs text-stone-500">
          {drillable.length === 0
            ? "Choisis au moins un signe à travailler."
            : `${drillable.length} signe${drillable.length > 1 ? "s" : ""} en jeu · les plus fragiles reviennent plus souvent`}
        </p>
      </div>
    </div>
  );
}
