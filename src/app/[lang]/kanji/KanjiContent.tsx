"use client";

import { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Dumbbell, LayoutGrid, Route } from "lucide-react";
import ProgressBar from "@/components/ProgressBar";
import { useContentLang } from "@/components/ContentLanguage";
import { cn } from "@/lib/cn";
import { isMastered, nextBox } from "@/lib/kanji";
import { KEYS, storageGet, storageSet } from "@/lib/storage";
import { useClientState } from "@/lib/use-client-state";
import type { PathProgress } from "@/types/course";
import type { KanjiProgress } from "@/types/kanji";
import type { KanjiCard, KanjiWord, PageLesson } from "./kanji-ui";
import KanjiPath from "./KanjiPath";
import KanjiList from "./KanjiList";
import KanjiDrill from "./KanjiDrill";

type Tab = "path" | "list" | "drill";

const EMPTY: KanjiProgress = {};
const readProgress = () => storageGet<KanjiProgress>(KEYS.kanjiProgress, EMPTY);
// Only the current unit is needed: read the stored record directly rather than
// through src/lib/progress.ts, which brings the course catalogue of both editions.
const readCurrentUnit = () => storageGet<Partial<PathProgress> | null>(KEYS.courseProgress, null)?.currentUnit ?? null;

const TABS: { key: Tab; label: string; icon: React.ReactNode }[] = [
  { key: "path", label: "Parcours", icon: <Route className="h-4 w-4" /> },
  { key: "list", label: "Liste", icon: <LayoutGrid className="h-4 w-4" /> },
  { key: "drill", label: "Entraînement", icon: <Dumbbell className="h-4 w-4" /> },
];

/**
 * The kanji course: lessons that follow the course path, the full list and a
 * drill, all feeding one Leitner record per kanji (KEYS.kanjiProgress, keyed
 * by the character). The corpus arrives as props from the server page.
 */
export default function KanjiContent({
  kanji,
  words,
  lessons,
  unitNumbers,
  levelLabels,
  kanaHref,
}: {
  kanji: KanjiCard[];
  words: KanjiWord[];
  lessons: PageLesson[];
  unitNumbers: Record<string, number>;
  levelLabels: Record<number, string>;
  kanaHref: string | null;
}) {
  const lang = useContentLang();
  const [tab, setTab] = useState<Tab>("path");
  const [progress, setProgress, ready] = useClientState(readProgress, EMPTY);
  const [currentUnitId] = useClientState(readCurrentUnit, null);

  const byChar = useMemo(() => new Map(kanji.map((k) => [k.char, k])), [kanji]);
  const currentUnit =
    currentUnitId && unitNumbers[currentUnitId] !== undefined
      ? { id: currentUnitId, number: unitNumbers[currentUnitId] }
      : null;

  const record = useCallback(
    (char: string, correct: boolean) => {
      const now = Date.now();
      setProgress((prev) => {
        const next = { ...prev, [char]: nextBox(prev[char], correct, now) };
        storageSet(KEYS.kanjiProgress, next);
        return next;
      });
    },
    [setProgress]
  );

  const mastered = useMemo(() => kanji.filter((k) => isMastered(progress[k.char])).length, [kanji, progress]);

  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      <header className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-display font-bold text-stone-900">Les kanji</h1>
          <p className="mt-1 text-stone-500">
            <span lang={lang} className="chinese">
              漢字
            </span>
          </p>
          <p className="mt-3 max-w-2xl text-stone-600">
            Les kanji portent le sens des mots ; les kana, eux, notent la grammaire et les lectures. Chaque
            kanji a souvent deux types de lecture : l&rsquo;<strong>on&rsquo;yomi</strong>, venue du chinois, qu&rsquo;on
            entend surtout dans les mots composés, et la <strong>kun&rsquo;yomi</strong>, japonaise, pour les
            mots seuls. Apprends-les dans les mots du parcours, au rythme de tes unités.
          </p>
          {kanaHref && (
            <Link href={kanaHref} className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Revoir les kana
            </Link>
          )}
        </div>

        <div className="lg:w-72">
          <div className="mb-1 flex justify-between text-xs text-stone-500">
            <span>Kanji maîtrisés</span>
            <span className="tabular-nums">{ready ? `${mastered} / ${kanji.length}` : `— / ${kanji.length}`}</span>
          </div>
          <ProgressBar value={ready ? mastered : 0} max={kanji.length} color="bg-success" />
        </div>
      </header>

      <div role="tablist" aria-label="Sections" className="flex gap-1 rounded-lg border border-stone-200 bg-stone-50 p-1">
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            id={`kanji-tab-${t.key}`}
            aria-selected={tab === t.key}
            aria-controls="kanji-panel"
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

      <div id="kanji-panel" role="tabpanel" aria-labelledby={`kanji-tab-${tab}`}>
        {tab === "path" && (
          <KanjiPath
            lessons={lessons}
            byChar={byChar}
            all={kanji}
            words={words}
            levelLabels={levelLabels}
            progress={progress}
            currentUnit={currentUnit}
            ready={ready}
            onAnswer={record}
          />
        )}
        {tab === "list" && (
          <KanjiList kanji={kanji} words={words} lessons={lessons} levelLabels={levelLabels} progress={progress} />
        )}
        {tab === "drill" && (
          <KanjiDrill kanji={kanji} byChar={byChar} words={words} lessons={lessons} progress={progress} onAnswer={record} />
        )}
      </div>
    </div>
  );
}
