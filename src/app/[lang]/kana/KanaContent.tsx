"use client";

import { useCallback, useMemo, useState } from "react";
import { Route, Grid3x3, Dumbbell, BookOpen } from "lucide-react";
import ProgressBar from "@/components/ProgressBar";
import { useContentLang } from "@/components/ContentLanguage";
import { cn } from "@/lib/cn";
import { isMastered, nextBox } from "@/lib/kana";
import { KEYS, storageGet, storageSet } from "@/lib/storage";
import { useClientState } from "@/lib/use-client-state";
import type { Kana, KanaLesson, KanaProgress, KanaScript, KanaWord } from "@/types/kana";
import LessonPath from "./LessonPath";
import KanaChart from "./KanaChart";
import KanaDrill from "./KanaDrill";
import ReadingPractice from "./ReadingPractice";

type Tab = "path" | "chart" | "drill" | "reading";

const EMPTY: KanaProgress = {};
const readProgress = () => storageGet<KanaProgress>(KEYS.kanaProgress, EMPTY);

const SCRIPTS: { key: KanaScript; label: string; sample: string }[] = [
  { key: "hiragana", label: "Hiragana", sample: "あ" },
  { key: "katakana", label: "Katakana", sample: "ア" },
];

/**
 * The kana reading course: a lesson path, the chart, a free drill and reading
 * practice, all feeding one Leitner mastery record per sign.
 *
 * The corpus arrives as props from the server page; the progress lives in
 * localStorage (KEYS.kanaProgress) and is read once hydration is over.
 */
export default function KanaContent({
  kana,
  lessons,
  words,
}: {
  kana: Kana[];
  lessons: KanaLesson[];
  words: KanaWord[];
}) {
  const lang = useContentLang();
  const [tab, setTab] = useState<Tab>("path");
  const [script, setScript] = useState<KanaScript>("hiragana");
  const [progress, setProgress, ready] = useClientState(readProgress, EMPTY);

  const record = useCallback(
    (kanaId: string, correct: boolean) => {
      const now = Date.now();
      setProgress((prev) => {
        const next = { ...prev, [kanaId]: nextBox(prev[kanaId], correct, now) };
        storageSet(KEYS.kanaProgress, next);
        return next;
      });
    },
    [setProgress]
  );

  const stats = useMemo(() => {
    const signs = kana.filter((k) => k.script === script);
    return { total: signs.length, mastered: signs.filter((k) => isMastered(progress[k.id])).length };
  }, [kana, script, progress]);

  const tabs: { key: Tab; label: string; icon: React.ReactNode }[] = [
    { key: "path", label: "Parcours", icon: <Route className="h-4 w-4" /> },
    { key: "chart", label: "Tableau", icon: <Grid3x3 className="h-4 w-4" /> },
    { key: "drill", label: "Entraînement", icon: <Dumbbell className="h-4 w-4" /> },
    { key: "reading", label: "Lecture", icon: <BookOpen className="h-4 w-4" /> },
  ];

  const scriptLabel = script === "hiragana" ? "hiragana" : "katakana";

  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      <header className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-display font-bold text-stone-900">Apprendre à lire</h1>
          <p className="mt-1 text-stone-500">
            <span lang={lang} className="chinese">
              ひらがな・カタカナ
            </span>
          </p>
          <p className="mt-3 max-w-2xl text-stone-600">
            Le japonais s&rsquo;écrit avec deux alphabets syllabiques. Les <strong>hiragana</strong> notent
            les mots japonais et la grammaire, les <strong>katakana</strong>{" "}les mots venus de
            l&rsquo;étranger. Commence par les hiragana : une fois lus, les katakana vont deux fois plus vite.
          </p>
        </div>

        <div className="flex flex-col gap-3 lg:w-72">
          <div
            role="radiogroup"
            aria-label="Alphabet"
            className="flex gap-1 rounded-lg border border-stone-200 bg-stone-50 p-1"
          >
            {SCRIPTS.map((s) => (
              <button
                key={s.key}
                type="button"
                role="radio"
                aria-checked={script === s.key}
                onClick={() => setScript(s.key)}
                className={cn(
                  "flex flex-1 items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  script === s.key ? "bg-white text-stone-800 shadow-sm" : "text-stone-500 hover:text-stone-700"
                )}
              >
                <span lang={lang} className="chinese text-base" aria-hidden="true">
                  {s.sample}
                </span>
                {s.label}
              </button>
            ))}
          </div>
          <div>
            <div className="mb-1 flex justify-between text-xs text-stone-500">
              <span>Signes {scriptLabel} maîtrisés</span>
              <span className="tabular-nums">{ready ? `${stats.mastered} / ${stats.total}` : `— / ${stats.total}`}</span>
            </div>
            <ProgressBar value={ready ? stats.mastered : 0} max={stats.total} color="bg-success" />
          </div>
        </div>
      </header>

      <div role="tablist" aria-label="Sections" className="flex gap-1 rounded-lg border border-stone-200 bg-stone-50 p-1">
        {tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            id={`kana-tab-${t.key}`}
            aria-selected={tab === t.key}
            aria-controls="kana-panel"
            onClick={() => setTab(t.key)}
            className={cn(
              "flex min-w-0 flex-1 flex-col items-center justify-center gap-0.5 rounded-md px-1 py-1.5 text-[11px] font-medium transition-colors sm:flex-row sm:gap-2 sm:px-4 sm:py-2 sm:text-sm",
              tab === t.key ? "bg-white text-stone-800 shadow-sm" : "text-stone-500 hover:text-stone-700"
            )}
          >
            {t.icon}
            <span className="truncate">{t.label}</span>
          </button>
        ))}
      </div>

      <div id="kana-panel" role="tabpanel" aria-labelledby={`kana-tab-${tab}`}>
        {tab === "path" && (
          <LessonPath
            key={script}
            script={script}
            kana={kana}
            lessons={lessons}
            words={words}
            progress={progress}
            ready={ready}
            onAnswer={record}
          />
        )}
        {tab === "chart" && <KanaChart script={script} kana={kana} lessons={lessons} progress={progress} />}
        {tab === "drill" && (
          <KanaDrill
            key={script}
            script={script}
            kana={kana}
            lessons={lessons}
            words={words}
            progress={progress}
            onAnswer={record}
          />
        )}
        {tab === "reading" && <ReadingPractice kana={kana} words={words} progress={progress} ready={ready} />}
      </div>
    </div>
  );
}
