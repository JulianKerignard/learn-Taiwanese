"use client";

import { useState, useMemo } from "react";
import { Search, X, Plus, Check, ChevronDown } from "lucide-react";
import AudioButton from "@/components/AudioButton";
import ReadingDisplay from "@/components/ReadingDisplay";
import { cn } from "@/lib/cn";
import { getSettings, getCards, upsertCard } from "@/lib/storage";
import { japaneseCollator } from "@/lib/japanese";
import { createCard } from "@/lib/fsrs";
import { allUnits, jlptLevels, getJLPTLevelForUnit } from "@/data/course";
import { lessons } from "@/data/lessons";
import { gradedTexts } from "@/data/readings";
import type { VocabularyItem } from "@/types";

// ─── Build complete dictionary from all sources ───

interface DictEntry {
  term: string;
  romaji: string;
  kana: string;
  french: string;
  english: string;
  sources: string[];
  jlptLevel?: number;
  example?: { sentence: string; romaji: string; translation: string };
}

function buildDictionary(): DictEntry[] {
  const map = new Map<string, DictEntry>();

  // Course units
  for (const unit of allUnits) {
    const jlpt = getJLPTLevelForUnit(unit);
    for (const v of unit.vocabulary) {
      const existing = map.get(v.term);
      if (existing) {
        if (!existing.sources.includes(`Unité ${unit.number}`)) {
          existing.sources.push(`Unité ${unit.number}`);
        }
        if (jlpt && (!existing.jlptLevel || jlpt.level < existing.jlptLevel)) {
          existing.jlptLevel = jlpt.level;
        }
      } else {
        map.set(v.term, {
          term: v.term,
          romaji: v.romaji,
          kana: v.kana,
          french: v.french,
          english: v.english,
          sources: [`Unité ${unit.number}`],
          jlptLevel: jlpt?.level,
          example: v.example,
        });
      }
    }
  }

  // Standalone lessons
  for (const lesson of lessons) {
    for (const v of lesson.vocabulary) {
      const existing = map.get(v.term);
      if (existing) {
        if (!existing.sources.includes(lesson.title)) {
          existing.sources.push(lesson.title);
        }
      } else {
        map.set(v.term, {
          term: v.term,
          romaji: v.romaji,
          kana: v.kana,
          french: v.french,
          english: v.english,
          sources: [lesson.title],
          example: v.example,
        });
      }
    }
  }

  // Readings
  for (const reading of gradedTexts) {
    for (const v of reading.vocabulary) {
      const existing = map.get(v.term);
      if (existing) {
        if (!existing.sources.includes(`Lecture: ${reading.titleFr}`)) {
          existing.sources.push(`Lecture: ${reading.titleFr}`);
        }
      } else {
        map.set(v.term, {
          term: v.term,
          romaji: v.romaji,
          kana: v.kana || "",
          french: v.french,
          english: "",
          sources: [`Lecture: ${reading.titleFr}`],
        });
      }
    }
  }

  return [...map.values()].sort((a, b) => japaneseCollator.compare(a.kana, b.kana));
}

type SortMode = "kana" | "romaji" | "jlpt";
type SourceFilter = "all" | "course" | "lessons" | "readings";

/** The dictionary holds ~850 entries; rendering them all blows up the HTML. */
const PAGE_SIZE = 100;

export default function DictionaryPage() {
  const [query, setQuery] = useState("");
  const [sortMode, setSortMode] = useState<SortMode>("kana");
  const [sourceFilter, setSourceFilter] = useState<SourceFilter>("all");
  const [levelFilter, setLevelFilter] = useState<number | null>(null);
  const [expandedEntry, setExpandedEntry] = useState<string | null>(null);
  const [addedCards, setAddedCards] = useState<Set<string>>(new Set());
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const displayMode = getSettings().displayMode;
  const dictionary = useMemo(() => buildDictionary(), []);

  const existingCardChars = useMemo(() => {
    const cards = getCards();
    return new Set(cards.map((c) => c.front));
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let results = dictionary;

    // Source filter
    if (sourceFilter === "course") {
      results = results.filter((e) => e.sources.some((s) => s.startsWith("Unité")));
    } else if (sourceFilter === "lessons") {
      results = results.filter((e) => e.sources.some((s) => !s.startsWith("Unité") && !s.startsWith("Lecture")));
    } else if (sourceFilter === "readings") {
      results = results.filter((e) => e.sources.some((s) => s.startsWith("Lecture")));
    }

    // JLPT filter
    if (levelFilter) {
      results = results.filter((e) => e.jlptLevel === levelFilter);
    }

    // Search
    if (q) {
      results = results.filter(
        (e) =>
          e.term.includes(q) ||
          e.romaji.toLowerCase().includes(q) ||
          e.kana.includes(q) ||
          e.french.toLowerCase().includes(q) ||
          e.english.toLowerCase().includes(q)
      );
    }

    // Sort
    if (sortMode === "romaji") {
      results = [...results].sort((a, b) => a.romaji.localeCompare(b.romaji, "en"));
    } else if (sortMode === "jlpt") {
      results = [...results].sort(
        (a, b) =>
          (b.jlptLevel ?? 0) - (a.jlptLevel ?? 0) || japaneseCollator.compare(a.kana, b.kana)
      );
    }
    // default "kana" is the gojūon order buildDictionary already applied

    return results;
  }, [query, sortMode, sourceFilter, levelFilter, dictionary]);

  // Any change to the search or the filters restarts the list at the first page.
  const filterKey = `${query}|${sortMode}|${sourceFilter}|${levelFilter}`;
  const [lastFilterKey, setLastFilterKey] = useState(filterKey);
  if (lastFilterKey !== filterKey) {
    setLastFilterKey(filterKey);
    setVisibleCount(PAGE_SIZE);
  }

  const visible = useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount]);
  const remaining = filtered.length - visible.length;

  function handleAddToFlashcards(entry: DictEntry) {
    if (existingCardChars.has(entry.term) || addedCards.has(entry.term)) return;
    const card = createCard({
      id: `dict-${entry.term}-${Date.now()}`,
      front: entry.term,
      back: entry.french,
      romaji: entry.romaji,
      kana: entry.kana,
      type: "vocabulary",
    });
    upsertCard(card);
    setAddedCards((prev) => new Set(prev).add(entry.term));
  }

  const stats = useMemo(() => ({
    total: dictionary.length,
    hsk1: dictionary.filter((e) => e.jlptLevel === 1).length,
    hsk2: dictionary.filter((e) => e.jlptLevel === 2).length,
  }), [dictionary]);

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="page-title">Dictionnaire</h1>
        <p className="mt-1 text-stone-500">
          {stats.total} mots — Tout le vocabulaire du parcours, des leçons et des lectures
        </p>
        <div className="mt-2 flex gap-2 text-xs text-stone-500">
          <span>JLPT 1 : {stats.hsk1} mots</span>
          <span>·</span>
          <span>JLPT 2 : {stats.hsk2} mots</span>
        </div>
      </div>

      {/* Search bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-500" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher un caractère, romaji, kana ou traduction..."
          className="w-full rounded-lg border border-stone-300 bg-white py-2.5 pl-10 pr-10 text-sm text-stone-900 placeholder:text-stone-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 hover:text-stone-600"
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

        {/* JLPT filter */}
        <div className="flex gap-1">
          {jlptLevels.filter((l) => !l.comingSoon).map((level) => (
            <button
              key={level.level}
              onClick={() => setLevelFilter(levelFilter === level.level ? null : level.level)}
              className={cn(
                "badge border transition-colors",
                levelFilter === level.level
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-stone-200 bg-white text-stone-500 hover:border-stone-300"
              )}
            >
              N{level.level}
            </button>
          ))}
        </div>

        <div className="h-4 w-px bg-stone-200" />

        {/* Sort */}
        <select
          value={sortMode}
          onChange={(e) => setSortMode(e.target.value as SortMode)}
          className="rounded-lg border border-stone-200 bg-white px-2 py-1 text-xs text-stone-600 focus:border-primary focus:outline-none"
        >
          <option value="kana">Tri : ordre gojūon (あいうえお)</option>
          <option value="romaji">Tri : rōmaji</option>
          <option value="jlpt">Tri : niveau JLPT</option>
        </select>
      </div>

      {/* Results count */}
      <p className="text-sm text-stone-500">
        {filtered.length} résultat{filtered.length !== 1 ? "s" : ""}
        {query && ` pour "${query}"`}
        {remaining > 0 && (
          <span className="text-stone-500"> — {visible.length} affiché{visible.length !== 1 ? "s" : ""}</span>
        )}
      </p>

      {/* Results */}
      {filtered.length > 0 ? (
        <div className="flex flex-col gap-1">
          {visible.map((entry) => {
            const isExpanded = expandedEntry === entry.term;
            const isInFlashcards = existingCardChars.has(entry.term) || addedCards.has(entry.term);

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
                  {/* Character */}
                  <span className="japanese text-2xl font-medium text-stone-900 w-16 text-center shrink-0" lang="ja">
                    {entry.term}
                  </span>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <ReadingDisplay romaji={entry.romaji} kana={entry.kana} mode={displayMode} size="sm" />
                      {entry.jlptLevel && (
                        <span className="badge bg-stone-100 text-stone-500 text-[10px]">
                          N{entry.jlptLevel}
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
                      "shrink-0 text-stone-500 transition-transform",
                      isExpanded && "rotate-180 text-primary"
                    )}
                  />
                </button>

                {/* Expanded view */}
                {isExpanded && (
                  <div className="ml-4 mr-4 mb-2 rounded-b-lg border border-t-0 border-stone-100 bg-stone-50 p-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-medium text-stone-500 uppercase mb-1">Prononciation</p>
                        <div className="flex items-center gap-2">
                          <p className="text-sm text-stone-700">{entry.romaji}</p>
                          <AudioButton text={entry.term} size="sm" className="shrink-0" />
                        </div>
                        {entry.kana && <p className="japanese text-sm text-stone-500" lang="ja">{entry.kana}</p>}
                      </div>
                      <div>
                        <p className="text-xs font-medium text-stone-500 uppercase mb-1">Traduction</p>
                        <p className="text-sm text-stone-700">{entry.french}</p>
                        {entry.english && <p className="text-xs text-stone-500">{entry.english}</p>}
                      </div>
                    </div>

                    {entry.example && (
                      <div className="mt-3 rounded-lg bg-white border border-stone-100 p-3">
                        <p className="text-xs font-medium text-stone-500 uppercase mb-1">Exemple</p>
                        <p className="japanese text-sm text-stone-800" lang="ja">{entry.example.sentence}</p>
                        <p className="text-xs italic text-stone-500">{entry.example.romaji}</p>
                        <p className="text-xs text-stone-500">{entry.example.translation}</p>
                      </div>
                    )}

                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {entry.sources.map((s, i) => (
                          <span key={i} className="badge bg-stone-100 text-stone-500 text-[10px]">{s}</span>
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
          <Search className="h-12 w-12 text-stone-400" aria-hidden="true" />
          <p className="text-lg text-stone-500">Aucun résultat trouvé.</p>
          <p className="text-sm text-stone-500">
            Essaie avec un autre terme ou retire les filtres.
          </p>
        </div>
      )}
    </div>
  );
}
