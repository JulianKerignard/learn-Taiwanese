"use client";

import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import CharacterCard from "@/components/CharacterCard";
import AudioButton from "@/components/AudioButton";
import { getAllVocabulary, lessons } from "@/data/lessons";

export default function DictionaryPage() {
  const [query, setQuery] = useState("");
  const [lessonFilter, setLessonFilter] = useState<string>("all");

  const allVocab = useMemo(() => getAllVocabulary(), []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allVocab.filter((item) => {
      // Lesson filter
      if (lessonFilter !== "all" && item.lessonId !== lessonFilter) return false;
      // Search filter
      if (!q) return true;
      return (
        item.character.includes(q) ||
        item.pinyin.toLowerCase().includes(q) ||
        item.zhuyin.includes(q) ||
        item.french.toLowerCase().includes(q) ||
        item.english.toLowerCase().includes(q)
      );
    });
  }, [query, lessonFilter, allVocab]);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold text-stone-900">Dictionnaire</h1>
        <p className="mt-1 text-stone-500">
          Recherche dans le vocabulaire de toutes les leçons.
        </p>
      </div>

      {/* Search bar */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un caractère, pinyin ou traduction..."
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

        <select
          value={lessonFilter}
          onChange={(e) => setLessonFilter(e.target.value)}
          className="rounded-lg border border-stone-300 bg-white px-3 py-2.5 text-sm text-stone-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        >
          <option value="all">Toutes les leçons</option>
          {lessons.map((l) => (
            <option key={l.id} value={l.id}>
              {l.icon} {l.title}
            </option>
          ))}
        </select>
      </div>

      {/* Results count */}
      <p className="text-sm text-stone-500">
        {results.length} résultat{results.length !== 1 ? "s" : ""}
        {query && ` pour "${query}"`}
      </p>

      {/* Results */}
      {results.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {results.map((item) => (
            <CharacterCard key={`${item.lessonId}-${item.character}`} item={item} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 py-16 text-center">
          <Search className="h-12 w-12 text-stone-300" />
          <p className="text-lg text-stone-500">Aucun résultat trouvé.</p>
          <p className="text-sm text-stone-400">
            Essaie avec un autre terme ou retire le filtre de leçon.
          </p>
        </div>
      )}
    </div>
  );
}
