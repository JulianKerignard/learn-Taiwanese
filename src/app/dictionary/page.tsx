"use client";

import { useState, useMemo } from "react";
import { Search, X, Volume2, Plus, Check } from "lucide-react";
import AudioButton from "@/components/AudioButton";
import PinyinDisplay from "@/components/PinyinDisplay";
import { cn } from "@/lib/cn";
import { getSettings, getCards, upsertCard } from "@/lib/storage";
import { createCard } from "@/lib/fsrs";
import { allUnits, hskLevels, getHSKLevelForUnit } from "@/data/course";
import { lessons } from "@/data/lessons";
import { gradedTexts } from "@/data/readings";
import type { VocabularyItem } from "@/types";

// ─── Build complete dictionary from all sources ───

interface DictEntry {
  character: string;
  pinyin: string;
  zhuyin: string;
  french: string;
  english: string;
  sources: string[];
  hskLevel?: number;
  example?: { sentence: string; pinyin: string; translation: string };
}

function buildDictionary(): DictEntry[] {
  const map = new Map<string, DictEntry>();

  // Course units
  for (const unit of allUnits) {
    const hsk = getHSKLevelForUnit(unit);
    for (const v of unit.vocabulary) {
      const existing = map.get(v.character);
      if (existing) {
        if (!existing.sources.includes(`Unité ${unit.number}`)) {
          existing.sources.push(`Unité ${unit.number}`);
        }
        if (hsk && (!existing.hskLevel || hsk.level < existing.hskLevel)) {
          existing.hskLevel = hsk.level;
        }
      } else {
        map.set(v.character, {
          character: v.character,
          pinyin: v.pinyin,
          zhuyin: v.zhuyin,
          french: v.french,
          english: v.english,
          sources: [`Unité ${unit.number}`],
          hskLevel: hsk?.level,
          example: v.example,
        });
      }
    }
  }

  // Standalone lessons
  for (const lesson of lessons) {
    for (const v of lesson.vocabulary) {
      const existing = map.get(v.character);
      if (existing) {
        if (!existing.sources.includes(lesson.title)) {
          existing.sources.push(lesson.title);
        }
      } else {
        map.set(v.character, {
          character: v.character,
          pinyin: v.pinyin,
          zhuyin: v.zhuyin,
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
      const existing = map.get(v.character);
      if (existing) {
        if (!existing.sources.includes(`Lecture: ${reading.titleFr}`)) {
          existing.sources.push(`Lecture: ${reading.titleFr}`);
        }
      } else {
        map.set(v.character, {
          character: v.character,
          pinyin: v.pinyin,
          zhuyin: v.zhuyin || "",
          french: v.french,
          english: "",
          sources: [`Lecture: ${reading.titleFr}`],
        });
      }
    }
  }

  return [...map.values()].sort((a, b) => a.pinyin.localeCompare(b.pinyin));
}

type SortMode = "pinyin" | "character" | "hsk";
type SourceFilter = "all" | "course" | "lessons" | "readings";

export default function DictionaryPage() {
  const [query, setQuery] = useState("");
  const [sortMode, setSortMode] = useState<SortMode>("pinyin");
  const [sourceFilter, setSourceFilter] = useState<SourceFilter>("all");
  const [hskFilter, setHskFilter] = useState<number | null>(null);
  const [expandedEntry, setExpandedEntry] = useState<string | null>(null);
  const [addedCards, setAddedCards] = useState<Set<string>>(new Set());

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

    // HSK filter
    if (hskFilter) {
      results = results.filter((e) => e.hskLevel === hskFilter);
    }

    // Search
    if (q) {
      results = results.filter(
        (e) =>
          e.character.includes(q) ||
          e.pinyin.toLowerCase().includes(q) ||
          e.zhuyin.includes(q) ||
          e.french.toLowerCase().includes(q) ||
          e.english.toLowerCase().includes(q)
      );
    }

    // Sort
    if (sortMode === "character") {
      results = [...results].sort((a, b) => a.character.localeCompare(b.character, "zh-Hant"));
    } else if (sortMode === "hsk") {
      results = [...results].sort((a, b) => (a.hskLevel ?? 99) - (b.hskLevel ?? 99) || a.pinyin.localeCompare(b.pinyin));
    }
    // default "pinyin" is already sorted

    return results;
  }, [query, sortMode, sourceFilter, hskFilter, dictionary]);

  function handleAddToFlashcards(entry: DictEntry) {
    if (existingCardChars.has(entry.character) || addedCards.has(entry.character)) return;
    const card = createCard({
      id: `dict-${entry.character}-${Date.now()}`,
      front: entry.character,
      back: entry.french,
      pinyin: entry.pinyin,
      zhuyin: entry.zhuyin,
      type: "vocabulary",
    });
    upsertCard(card);
    setAddedCards((prev) => new Set(prev).add(entry.character));
  }

  const stats = useMemo(() => ({
    total: dictionary.length,
    hsk1: dictionary.filter((e) => e.hskLevel === 1).length,
    hsk2: dictionary.filter((e) => e.hskLevel === 2).length,
  }), [dictionary]);

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-stone-900">Dictionnaire</h1>
        <p className="mt-1 text-stone-500">
          {stats.total} mots — Tout le vocabulaire du parcours, des leçons et des lectures
        </p>
        <div className="mt-2 flex gap-2 text-xs text-stone-400">
          <span>HSK 1 : {stats.hsk1} mots</span>
          <span>·</span>
          <span>HSK 2 : {stats.hsk2} mots</span>
        </div>
      </div>

      {/* Search bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher un caractère, pinyin, zhuyin ou traduction..."
          className="w-full rounded-lg border border-stone-300 bg-white py-2.5 pl-10 pr-10 text-sm text-stone-900 placeholder:text-stone-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
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

        {/* HSK filter */}
        <div className="flex gap-1">
          {hskLevels.filter((l) => !l.comingSoon).map((level) => (
            <button
              key={level.level}
              onClick={() => setHskFilter(hskFilter === level.level ? null : level.level)}
              className={cn(
                "badge border transition-colors",
                hskFilter === level.level
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-stone-200 bg-white text-stone-500 hover:border-stone-300"
              )}
            >
              HSK {level.level}
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
          <option value="pinyin">Tri : Pinyin</option>
          <option value="character">Tri : Caractère</option>
          <option value="hsk">Tri : Niveau HSK</option>
        </select>
      </div>

      {/* Results count */}
      <p className="text-sm text-stone-500">
        {filtered.length} résultat{filtered.length !== 1 ? "s" : ""}
        {query && ` pour "${query}"`}
      </p>

      {/* Results */}
      {filtered.length > 0 ? (
        <div className="flex flex-col gap-1">
          {filtered.map((entry) => {
            const isExpanded = expandedEntry === entry.character;
            const isInFlashcards = existingCardChars.has(entry.character) || addedCards.has(entry.character);

            return (
              <div key={entry.character}>
                <button
                  onClick={() => setExpandedEntry(isExpanded ? null : entry.character)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-lg border px-4 py-3 text-left transition-all",
                    isExpanded
                      ? "border-primary/30 bg-white shadow-sm"
                      : "border-stone-100 bg-white hover:border-stone-200"
                  )}
                >
                  {/* Character */}
                  <span className="chinese text-2xl font-medium text-stone-900 w-16 text-center shrink-0">
                    {entry.character}
                  </span>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <PinyinDisplay pinyin={entry.pinyin} zhuyin={entry.zhuyin} mode={displayMode} size="sm" />
                      {entry.hskLevel && (
                        <span className="badge bg-stone-100 text-stone-500 text-[10px]">
                          HSK {entry.hskLevel}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-stone-600 truncate">{entry.french}</p>
                  </div>

                  {/* Audio */}
                  <AudioButton text={entry.character} size="sm" className="shrink-0" />
                </button>

                {/* Expanded view */}
                {isExpanded && (
                  <div className="ml-4 mr-4 mb-2 rounded-b-lg border border-t-0 border-stone-100 bg-stone-50 p-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-medium text-stone-400 uppercase mb-1">Prononciation</p>
                        <p className="text-sm text-stone-700">{entry.pinyin}</p>
                        {entry.zhuyin && <p className="text-sm text-stone-500 chinese">{entry.zhuyin}</p>}
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
                        <p className="chinese text-sm text-stone-800">{entry.example.sentence}</p>
                        <p className="text-xs italic text-stone-400">{entry.example.pinyin}</p>
                        <p className="text-xs text-stone-500">{entry.example.translation}</p>
                      </div>
                    )}

                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {entry.sources.map((s, i) => (
                          <span key={i} className="badge bg-stone-100 text-stone-400 text-[10px]">{s}</span>
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
