"use client";

import { useState, useRef, useCallback } from "react";
import { cn } from "@/lib/cn";
import { funFacts, categories } from "@/data/funfacts";
import type { FunFact } from "@/data/funfacts";
import { Sparkles, Shuffle } from "lucide-react";

type Category = FunFact["category"];

const categoryColors: Record<Category, { card: string; badge: string }> = {
  taipei: { card: "bg-blue-50 border-blue-200", badge: "bg-blue-100 text-blue-700 border-blue-200" },
  villes: { card: "bg-purple-50 border-purple-200", badge: "bg-purple-100 text-purple-700 border-purple-200" },
  nourriture: { card: "bg-amber-50 border-amber-200", badge: "bg-amber-100 text-amber-700 border-amber-200" },
  culture: { card: "bg-rose-50 border-rose-200", badge: "bg-rose-100 text-rose-700 border-rose-200" },
  nature: { card: "bg-emerald-50 border-emerald-200", badge: "bg-emerald-100 text-emerald-700 border-emerald-200" },
  insolite: { card: "bg-orange-50 border-orange-200", badge: "bg-orange-100 text-orange-700 border-orange-200" },
};

export default function FunFactsPage() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [highlightedId, setHighlightedId] = useState<string | null>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const filtered = activeCategory
    ? funFacts.filter((f) => f.category === activeCategory)
    : funFacts;

  const handleRandom = useCallback(() => {
    const pool = activeCategory
      ? funFacts.filter((f) => f.category === activeCategory)
      : funFacts;
    const pick = pool[Math.floor(Math.random() * pool.length)];
    setHighlightedId(pick.id);
    const el = cardRefs.current[pick.id];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    setTimeout(() => setHighlightedId(null), 2000);
  }, [activeCategory]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Sparkles className="text-primary" size={22} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-stone-900">Fun Facts sur Taiwan</h1>
            <p className="text-sm text-stone-500">
              Des anecdotes pour briller en société
            </p>
          </div>
        </div>
      </div>

      {/* Filters + Counter + Random */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => setActiveCategory(null)}
          className={cn(
            "badge border transition-colors",
            activeCategory === null
              ? "border-primary bg-primary/10 text-primary"
              : "border-stone-200 bg-white text-stone-500 hover:border-stone-300"
          )}
        >
          Tous
        </button>
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() =>
              setActiveCategory(activeCategory === cat.key ? null : cat.key)
            }
            className={cn(
              "badge border transition-colors",
              activeCategory === cat.key
                ? categoryColors[cat.key].badge
                : "border-stone-200 bg-white text-stone-500 hover:border-stone-300"
            )}
          >
            {cat.emoji} {cat.label}
          </button>
        ))}

        <div className="flex w-full items-center gap-3 sm:w-auto sm:ml-auto">
          <span className="text-xs text-stone-400">
            {filtered.length} / {funFacts.length} faits
          </span>
          <button
            onClick={handleRandom}
            className="flex items-center gap-1.5 rounded-lg border border-stone-200 bg-white px-3 py-1.5 text-sm font-medium text-stone-600 transition-colors hover:border-primary hover:text-primary"
          >
            <Shuffle size={14} />
            Fait aléatoire
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((fact) => (
          <div
            key={fact.id}
            ref={(el) => { cardRefs.current[fact.id] = el; }}
            className={cn(
              "rounded-xl border p-5 transition-all duration-300",
              categoryColors[fact.category].card,
              highlightedId === fact.id && "ring-2 ring-primary ring-offset-2 scale-[1.02]"
            )}
          >
            <div className="flex items-start justify-between">
              <span className="text-3xl">{fact.emoji}</span>
              <span
                className={cn(
                  "badge border text-[10px]",
                  categoryColors[fact.category].badge
                )}
              >
                {categories.find((c) => c.key === fact.category)?.label}
              </span>
            </div>
            <h3 className="mt-3 text-base font-bold text-stone-900">
              {fact.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-700">
              {fact.text}
            </p>
            {fact.chinese && (
              <div className="mt-3 inline-flex items-center gap-2 rounded-lg border border-stone-200 bg-white/60 px-3 py-1.5">
                <span className="chinese text-lg font-semibold text-stone-900">
                  {fact.chinese}
                </span>
                {fact.pinyin && (
                  <span className="text-xs text-stone-500">{fact.pinyin}</span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
