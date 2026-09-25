"use client";

import { useState, useMemo } from "react";
import { Search, X, Plus, Check, ChevronDown } from "lucide-react";
import AudioButton from "@/components/AudioButton";
import PinyinDisplay from "@/components/PinyinDisplay";
import { cn } from "@/lib/cn";
import { getCards, upsertCard } from "@/lib/storage";
import { readDisplayMode } from "@/lib/display";
import type { UserSettings } from "@/types";
import { createCard } from "@/lib/fsrs";
import { japaneseCollator } from "@/lib/japanese";
import { LANGUAGES, levelName, type LanguageSegment } from "@/lib/language";
import { useClientState } from "@/lib/use-client-state";

// Everything this component knows about the corpus arrives as props. It is a
// client component: importing @/data/<lang>/dictionary here would ship *both*
// dictionaries (304 kB + 212 kB) to the browser. The server page resolves the
// edition's entries and passes them down — see ./page.tsx.

export type DictionarySourceKind = "course" | "lesson" | "reading";

export interface DictionarySource {
  kind: DictionarySourceKind;
  label: string;
}

/** The projection of a dictionary entry this page renders. Both corpora match it. */
export interface DictionaryEntry {
  term: string;
  romanization: string;
  reading: string;
  french: string;
  english: string;
  /** Earliest proficiency level that teaches the word; absent outside the parcours. */
  level?: number;
  example?: { sentence: string; romanization: string; translation: string };
  sources: DictionarySource[];
}

interface DictionaryContentProps {
  lang: LanguageSegment;
  entries: DictionaryEntry[];
  /** Level numbers offered as filters, in table order, unreleased ones removed. */
  levels: number[];
}

type SortMode = "romanization" | "term" | "gojuon" | "level";
type SourceFilter = "all" | "course" | "lessons" | "readings";

const SOURCE_FILTER_KIND: Record<Exclude<SourceFilter, "all">, DictionarySourceKind> = {
  course: "course",
  lessons: "lesson",
  readings: "reading",
};

/** Both dictionaries hold hundreds of entries; rendering them all blows up the HTML. */
const PAGE_SIZE = 100;

const NO_USER_STATE = {
  displayMode: "romanization" as const,
  existingCardTerms: new Set<string>(),
};

/** Called from a click handler only: the timestamp keeps re-added terms distinct. */
function dictionaryCardId(term: string): string {
  return `dict-${term}-${Date.now()}`;
}

export default function DictionaryContent({ lang, entries, levels }: DictionaryContentProps) {
  const language = LANGUAGES[lang];
  const { copy } = language;

  // The two editions do not sort alike. Mandarin reads in romanization order,
  // which is the order the generated file already carries; Japanese reads in
  // gojūon order, which only the kana reading gives — rōmaji alphabetical puts
  // あえ before あい. Both orders stay available, the edition picks the default.
  const sortOptions: { value: SortMode; label: string }[] =
    language.code === "ja"
      ? [
          { value: "gojuon", label: "Tri : gojūon" },
          { value: "romanization", label: `Tri : ${copy.readingPrimary}` },
          { value: "level", label: `Tri : niveau ${language.levels.code}` },
        ]
      : [
          { value: "romanization", label: `Tri : ${copy.readingPrimary}` },
          { value: "term", label: `Tri : ${copy.term}` },
          { value: "level", label: `Tri : niveau ${language.levels.code}` },
        ];

  const [query, setQuery] = useState("");
  const [sortMode, setSortMode] = useState<SortMode>(sortOptions[0].value);
  const [sourceFilter, setSourceFilter] = useState<SourceFilter>("all");
  const [levelFilter, setLevelFilter] = useState<number | null>(null);
  const [expandedEntry, setExpandedEntry] = useState<string | null>(null);
  const [addedCards, setAddedCards] = useState<Set<string>>(new Set());
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // Read once hydration is over, never while hydrating: this page is prerendered,
  // so touching localStorage then makes the server and client markup disagree and
  // costs a full client re-render of the list.
  const [{ displayMode, existingCardTerms }] = useClientState<{
    displayMode: UserSettings["displayMode"];
    existingCardTerms: Set<string>;
  }>(
    () => ({
      displayMode: readDisplayMode(),
      existingCardTerms: new Set(getCards().map((c) => c.front)),
    }),
    NO_USER_STATE
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let results = entries;

    if (sourceFilter !== "all") {
      const kind = SOURCE_FILTER_KIND[sourceFilter];
      results = results.filter((e) => e.sources.some((s) => s.kind === kind));
    }

    if (levelFilter) {
      results = results.filter((e) => e.level === levelFilter);
    }

    if (q) {
      results = results.filter(
        (e) =>
          e.term.includes(q) ||
          e.romanization.toLowerCase().includes(q) ||
          e.reading.includes(q) ||
          e.french.toLowerCase().includes(q) ||
          e.english.toLowerCase().includes(q)
      );
    }

    if (sortMode === "gojuon") {
      results = [...results].sort((a, b) => japaneseCollator.compare(a.reading, b.reading));
    } else if (sortMode === "term") {
      results = [...results].sort((a, b) => a.term.localeCompare(b.term, language.contentLang));
    } else if (sortMode === "level") {
      // Unranked words last, and the proficiency scales run in opposite
      // directions: HSK 1 is the easiest, JLPT N5 is.
      const rank = (level?: number) =>
        level === undefined ? Infinity : language.levels.ascending ? level : -level;
      results = [...results].sort(
        (a, b) => rank(a.level) - rank(b.level) || a.romanization.localeCompare(b.romanization)
      );
    }
    // default "romanization" is the order the generated file already carries

    return results;
  }, [query, sortMode, sourceFilter, levelFilter, entries, language]);

  // Any change to the search or the filters restarts the list at the first page.
  const filterKey = `${query}|${sortMode}|${sourceFilter}|${levelFilter}`;
  const [lastFilterKey, setLastFilterKey] = useState(filterKey);
  if (lastFilterKey !== filterKey) {
    setLastFilterKey(filterKey);
    setVisibleCount(PAGE_SIZE);
  }

  const visible = useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount]);
  const remaining = filtered.length - visible.length;

  function handleAddToFlashcards(entry: DictionaryEntry) {
    if (existingCardTerms.has(entry.term) || addedCards.has(entry.term)) return;
    const card = createCard({
      id: dictionaryCardId(entry.term),
      front: entry.term,
      back: entry.french,
      romanization: entry.romanization,
      reading: entry.reading,
      type: "vocabulary",
    });
    upsertCard(card);
    setAddedCards((prev) => new Set(prev).add(entry.term));
  }

  const levelCounts = useMemo(
    () => levels.map((level) => ({ level, count: entries.filter((e) => e.level === level).length })),
    [levels, entries]
  );

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="text-display font-bold text-stone-900">Dictionnaire</h1>
        <p className="mt-1 text-stone-500">
          {entries.length} {copy.terms} — Tout le vocabulaire du parcours, des leçons et des lectures
        </p>
        <div className="mt-2 flex flex-wrap gap-2 text-xs text-stone-400">
          {levelCounts.map(({ level, count }, i) => (
            <span key={level} className="flex gap-2">
              {i > 0 && <span aria-hidden>·</span>}
              <span>
                {levelName(language, level)} : {count} {copy.terms}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Search bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Rechercher un ${copy.term}, un ${copy.readingPrimary}, un ${copy.readingSecondary} ou une traduction…`}
          className="w-full rounded-lg border border-stone-300 bg-white py-2.5 pl-10 pr-10 text-base text-stone-900 sm:text-sm placeholder:text-stone-400 focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            aria-label="Effacer la recherche"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2">
        {/* Source filter */}
        <div className="flex gap-1">
          {([
            { key: "all" as const, label: "Tout" },
            { key: "course" as const, label: "Parcours" },
            { key: "lessons" as const, label: "Leçons" },
            { key: "readings" as const, label: "Lectures" },
          ]).map((f) => (
            <button
              key={f.key}
              onClick={() => setSourceFilter(f.key)}
              aria-pressed={sourceFilter === f.key}
              className={cn(
                "badge border transition-colors",
                sourceFilter === f.key
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-stone-200 bg-white text-stone-500 hover:border-stone-300"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="h-4 w-px bg-stone-200" />

        {/* Proficiency level filter */}
        <div className="flex flex-wrap gap-1">
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => setLevelFilter(levelFilter === level ? null : level)}
              aria-pressed={levelFilter === level}
              className={cn(
                "badge border transition-colors",
                levelFilter === level
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-stone-200 bg-white text-stone-500 hover:border-stone-300"
              )}
            >
              {levelName(language, level)}
            </button>
          ))}
        </div>

        <div className="h-4 w-px bg-stone-200" />

        {/* Sort */}
        <select
          value={sortMode}
          onChange={(e) => setSortMode(e.target.value as SortMode)}
          aria-label="Ordre de tri"
          className="rounded-lg border border-stone-200 bg-white px-2 py-1 text-base text-stone-600 focus:border-primary sm:text-xs"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Results count */}
      <p className="text-sm text-stone-500">
        {filtered.length} résultat{filtered.length !== 1 ? "s" : ""}
        {query && ` pour "${query}"`}
        {remaining > 0 && (
          <span className="text-stone-400"> — {visible.length} affiché{visible.length !== 1 ? "s" : ""}</span>
        )}
      </p>

      {/* Results */}
      {filtered.length > 0 ? (
        <div className="flex flex-col gap-1">
          {visible.map((entry) => {
            const isExpanded = expandedEntry === entry.term;
            const isInFlashcards = existingCardTerms.has(entry.term) || addedCards.has(entry.term);

            return (
              <div key={entry.term}>
                <button
                  onClick={() => setExpandedEntry(isExpanded ? null : entry.term)}
                  aria-expanded={isExpanded}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-lg border px-4 py-3 text-left transition-all",
                    isExpanded
                      ? "border-primary/30 bg-white shadow-sm"
                      : "border-stone-100 bg-white hover:border-stone-200"
                  )}
                >
                  {/* Term */}
                  <span
                    className="chinese text-2xl font-medium text-stone-900 w-16 text-center shrink-0"
                    lang={language.contentLang}
                  >
                    {entry.term}
                  </span>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <PinyinDisplay romanization={entry.romanization} reading={entry.reading} mode={displayMode} size="sm" />
                      {entry.level && (
                        <span className="badge bg-stone-100 text-stone-500 text-[10px]">
                          {levelName(language, entry.level)}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-stone-600 truncate">{entry.french}</p>
                  </div>

                  {/* Audio lives in the expanded panel: one mounted client
                      component per collapsed row is far too many. */}
                  <ChevronDown
                    size={16}
                    aria-hidden
                    className={cn(
                      "shrink-0 text-stone-300 transition-transform",
                      isExpanded && "rotate-180 text-primary"
                    )}
                  />
                </button>

                {/* Expanded view */}
                {isExpanded && (
                  <div className="ml-4 mr-4 mb-2 rounded-b-lg border border-t-0 border-stone-100 bg-stone-50 p-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-medium text-stone-400 uppercase mb-1">Prononciation</p>
                        <div className="flex items-center gap-2">
                          <p className="text-sm text-stone-700">{entry.romanization}</p>
                          <AudioButton text={entry.term} size="sm" className="shrink-0" />
                        </div>
                        {entry.reading && (
                          <PinyinDisplay
                            native={entry.term}
                            romanization={entry.romanization}
                            reading={entry.reading}
                            mode="reading"
                            size="lg"
                            className="text-stone-900"
                          />
                        )}
                      </div>
                      <div>
                        <p className="text-xs font-medium text-stone-400 uppercase mb-1">Traduction</p>
                        <p className="text-sm text-stone-700">{entry.french}</p>
                        {entry.english && <p className="text-xs text-stone-400">{entry.english}</p>}
                      </div>
                    </div>

                    {entry.example && (
                      <div className="mt-3 rounded-lg bg-white border border-stone-100 p-3">
                        <p className="text-xs font-medium text-stone-400 uppercase mb-1">Exemple</p>
                        <p className="chinese text-sm text-stone-800" lang={language.contentLang}>
                          {entry.example.sentence}
                        </p>
                        <p className="text-xs italic text-stone-500">{entry.example.romanization}</p>
                        <p className="text-xs text-stone-500">{entry.example.translation}</p>
                      </div>
                    )}

                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {entry.sources.map((s) => (
                          <span key={s.label} className="badge bg-stone-100 text-stone-400 text-[10px]">{s.label}</span>
                        ))}
                      </div>
                      <button
                        onClick={(e) => { e.stopPropagation(); handleAddToFlashcards(entry); }}
                        disabled={isInFlashcards}
                        className={cn(
                          "flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors",
                          isInFlashcards
                            ? "bg-success/10 text-success cursor-default"
                            : "bg-primary/10 text-primary hover:bg-primary/20"
                        )}
                      >
                        {isInFlashcards ? <Check size={12} /> : <Plus size={12} />}
                        {isInFlashcards ? "Dans les flashcards" : "Ajouter aux flashcards"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {remaining > 0 && (
            <button
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              className="mt-3 self-center rounded-lg border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-600 transition-colors hover:border-primary/30 hover:text-primary"
            >
              Afficher plus ({Math.min(PAGE_SIZE, remaining)} sur {remaining} restants)
            </button>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 py-16 text-center">
          <Search className="h-12 w-12 text-stone-300" />
          <p className="text-lg text-stone-500">Aucun résultat trouvé.</p>
          <p className="text-sm text-stone-400">
            Essaie avec un autre terme ou retire les filtres.
          </p>
        </div>
      )}
    </div>
  );
}
