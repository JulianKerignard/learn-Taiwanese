"use client";

import { useMemo, useState } from "react";
import { Lightbulb } from "lucide-react";
import { cn } from "@/lib/cn";
import { readableWords } from "@/lib/kana";
import type { Kana, KanaProgress, KanaWord } from "@/types/kana";
import { kanaIndex, seenIds, wordScript, type WordScript } from "./kana-ui";
import WordCard from "./WordCard";

type Filter = "all" | "hiragana" | "katakana";

const FILTERS: { key: Filter; label: string }[] = [
  { key: "hiragana", label: "Hiragana" },
  { key: "katakana", label: "Katakana" },
  { key: "all", label: "Tous" },
];

const PAGE = 24;
const FEW_WORDS = 5;

/** Words made only of signs the learner has already practised. */
export default function ReadingPractice({
  kana,
  words,
  progress,
  ready,
}: {
  kana: Kana[];
  words: KanaWord[];
  progress: KanaProgress;
  ready: boolean;
}) {
  const [filter, setFilter] = useState<Filter>("all");
  const [shown, setShown] = useState(PAGE);

  const scripts = useMemo(() => {
    const index = kanaIndex(kana);
    return new Map<string, WordScript>(words.map((w) => [w.term, wordScript(w, index)]));
  }, [kana, words]);

  const inFilter = (w: KanaWord) => filter === "all" || scripts.get(w.term) === filter;
  const pool = words.filter(inFilter);
  const readable = ready ? readableWords(pool, seenIds(progress), kana) : [];

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div role="radiogroup" aria-label="Filtrer les mots" className="flex gap-1 rounded-lg border border-stone-200 bg-stone-50 p-1">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              role="radio"
              aria-checked={filter === f.key}
              onClick={() => {
                setFilter(f.key);
                setShown(PAGE);
              }}
              className={cn(
                "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                filter === f.key ? "bg-white text-stone-800 shadow-sm" : "text-stone-500 hover:text-stone-700"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
        <p className="text-sm text-stone-600" aria-live="polite">
          <strong className="tabular-nums text-stone-900">{ready ? readable.length : "—"}</strong> mot
          {readable.length > 1 ? "s" : ""} lisible{readable.length > 1 ? "s" : ""} sur{" "}
          <span className="tabular-nums">{pool.length}</span>
        </p>
      </div>

      {ready && readable.length < FEW_WORDS && (
        <p className="flex items-start gap-2 rounded-lg bg-warning/10 px-4 py-3 text-sm text-warning-ink">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          {readable.length === 0
            ? "Aucun mot lisible pour l'instant : fais la première leçon du parcours, et les mots apparaîtront ici au fur et à mesure."
            : "Encore peu de mots : chaque leçon du parcours en débloque de nouveaux."}
        </p>
      )}

      {readable.length > 0 && (
        <>
          <p className="text-sm text-stone-500">Lis chaque mot à voix haute, puis touche-le pour vérifier.</p>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {readable.slice(0, shown).map((w) => (
              <li key={w.term}>
                <WordCard word={w} />
              </li>
            ))}
          </ul>
          {readable.length > shown && (
            <button type="button" onClick={() => setShown((n) => n + PAGE)} className="btn-secondary self-center">
              Afficher plus de mots ({readable.length - shown} restants)
            </button>
          )}
        </>
      )}
    </div>
  );
}
