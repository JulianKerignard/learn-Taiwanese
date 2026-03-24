"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/cn";
import { storageGet, storageSet } from "@/lib/storage";
import { gradedTexts } from "@/data/readings";
import ReadingText from "@/components/ReadingText";
import { BookOpen, Check, Filter } from "lucide-react";

const READ_KEY = "taiwan-reading-completed";

function getReadTexts(): Set<string> {
  const arr = storageGet<string[]>(READ_KEY, []);
  return new Set(arr);
}

function saveReadTexts(ids: Set<string>) {
  storageSet(READ_KEY, [...ids]);
}

const levelConfig = {
  1: { label: "Niveau 1", color: "bg-green-100 text-green-700 border-green-200", dot: "bg-green-500" },
  2: { label: "Niveau 2", color: "bg-amber-100 text-amber-700 border-amber-200", dot: "bg-amber-500" },
  3: { label: "Niveau 3", color: "bg-red-100 text-red-700 border-red-200", dot: "bg-red-500" },
} as const;

export default function ReadingPage() {
  const [selectedLevel, setSelectedLevel] = useState<1 | 2 | 3 | null>(null);
  const [activeReading, setActiveReading] = useState<string | null>(null);
  const [readTexts, setReadTexts] = useState<Set<string>>(new Set());

  useEffect(() => {
    setReadTexts(getReadTexts());
  }, []);

  const filteredTexts = selectedLevel
    ? gradedTexts.filter((t) => t.level === selectedLevel)
    : gradedTexts;

  const activeText = gradedTexts.find((t) => t.id === activeReading);

  const countByLevel = (level: 1 | 2 | 3) =>
    gradedTexts.filter((t) => t.level === level && readTexts.has(t.id)).length;

  const totalByLevel = (level: 1 | 2 | 3) =>
    gradedTexts.filter((t) => t.level === level).length;

  function markAsRead(id: string) {
    const updated = new Set(readTexts);
    if (updated.has(id)) {
      updated.delete(id);
    } else {
      updated.add(id);
    }
    setReadTexts(updated);
    saveReadTexts(updated);
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <BookOpen className="text-primary" size={22} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-stone-900">Lecture gradée</h1>
            <p className="text-sm text-stone-500">
              Apprends par l&apos;immersion avec des textes adaptés à ton niveau
            </p>
          </div>
        </div>

        {/* Progress counters */}
        <div className="mt-4 flex gap-4">
          {([1, 2, 3] as const).map((level) => (
            <div
              key={level}
              className="flex items-center gap-2 rounded-lg border border-stone-100 bg-white px-3 py-2"
            >
              <div className={cn("h-2 w-2 rounded-full", levelConfig[level].dot)} />
              <span className="text-xs text-stone-500">{levelConfig[level].label}</span>
              <span className="text-xs font-semibold text-stone-700">
                {countByLevel(level)}/{totalByLevel(level)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Active reading view */}
      {activeText ? (
        <div className="space-y-4">
          <ReadingText
            reading={activeText}
            onClose={() => setActiveReading(null)}
          />
          <div className="flex justify-end">
            <button
              onClick={() => markAsRead(activeText.id)}
              className={cn(
                "btn-secondary gap-1.5",
                readTexts.has(activeText.id) && "border-success text-success"
              )}
            >
              <Check size={16} />
              {readTexts.has(activeText.id) ? "Lu" : "Marquer comme lu"}
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Filters */}
          <div className="flex items-center gap-2">
            <Filter size={16} className="text-stone-400" />
            <button
              onClick={() => setSelectedLevel(null)}
              className={cn(
                "badge border transition-colors",
                selectedLevel === null
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-stone-200 bg-white text-stone-500 hover:border-stone-300"
              )}
            >
              Tous
            </button>
            {([1, 2, 3] as const).map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(selectedLevel === level ? null : level)}
                className={cn(
                  "badge border transition-colors",
                  selectedLevel === level
                    ? levelConfig[level].color
                    : "border-stone-200 bg-white text-stone-500 hover:border-stone-300"
                )}
              >
                {levelConfig[level].label}
              </button>
            ))}
          </div>

          {/* Text cards grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTexts.map((text) => {
              const isRead = readTexts.has(text.id);
              return (
                <button
                  key={text.id}
                  onClick={() => setActiveReading(text.id)}
                  className={cn(
                    "card text-left transition-all hover:border-primary/30 hover:shadow-md",
                    isRead && "border-success/30 bg-success/5"
                  )}
                >
                  <div className="flex items-start justify-between">
                    <span className={cn("badge border", levelConfig[text.level].color)}>
                      Niveau {text.level}
                    </span>
                    {isRead && (
                      <span className="flex items-center gap-1 text-xs text-success">
                        <Check size={12} />
                        Lu
                      </span>
                    )}
                  </div>
                  <h3 className="chinese mt-3 text-xl font-bold text-stone-900">{text.title}</h3>
                  <p className="mt-1 text-sm text-stone-500">{text.titleFr}</p>
                  <div className="mt-3 flex items-center gap-3 text-xs text-stone-400">
                    <span>{text.sentences.length} phrases</span>
                    <span>{text.vocabulary.length} mots</span>
                    <span>{text.text.length} caractères</span>
                  </div>
                  {text.vocabulary.filter((v) => v.isNew).length > 0 && (
                    <div className="mt-2 text-xs text-amber-600">
                      {text.vocabulary.filter((v) => v.isNew).length} mots nouveaux
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
