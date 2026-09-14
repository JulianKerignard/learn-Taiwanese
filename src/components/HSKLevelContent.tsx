"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";
import ProgressBar from "@/components/ProgressBar";
import { ChapterSection } from "@/components/ChapterSection";
import { cn } from "@/lib/cn";
import { getPathProgress, getHSKLevelProgress, getHSKLevelCompletedCount } from "@/lib/progress";
import { hskLevels, getHSKLevelChapters, getHSKLevelUnits, allUnits, chapters } from "@/data/course";
import type { PathProgress } from "@/types/course";

const LEVEL_COLORS = [
  "from-emerald-500 to-teal-600",
  "from-sky-500 to-blue-600",
  "from-violet-500 to-purple-600",
  "from-rose-500 to-red-600",
];

export default function HSKLevelContent({ level }: { level: number }) {
  const [progress, setProgress] = useState<PathProgress | null>(null);

  useEffect(() => {
    setProgress(getPathProgress());
  }, []);

  const hskLevel = hskLevels.find((l) => l.level === level);
  if (!hskLevel) return null;
  if (!progress) return null;

  if (hskLevel.comingSoon) {
    return (
      <div className="flex flex-col gap-10">
        <Link href="/path" className="flex items-center gap-1 text-sm text-stone-400 hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Tous les niveaux
        </Link>
        <div className="card text-center py-16">
          <div className="text-5xl mb-4">🚧</div>
          <h1 className="text-2xl font-bold text-stone-800 mb-2">HSK {level} — {hskLevel.title}</h1>
          <p className="text-stone-500 mb-1">{hskLevel.description}</p>
          <p className="text-sm text-stone-400">{hskLevel.tocflLabel}</p>
          <p className="mt-6 text-stone-500">Ce niveau est en cours de préparation. Reviens bientôt !</p>
          <Link href="/path" className="btn-primary mt-6 inline-flex">
            Retour aux niveaux
          </Link>
        </div>
      </div>
    );
  }

  const levelChapters = getHSKLevelChapters(hskLevel);
  const levelUnits = getHSKLevelUnits(hskLevel);
  const unitIds = levelUnits.map((u) => u.id);
  const completedCount = getHSKLevelCompletedCount(unitIds, progress);
  const totalCount = levelUnits.length;

  // Compute global startIndex for unit numbering
  const allOrderedIds = chapters.flatMap((ch) => ch.unitIds);
  const firstUnitId = unitIds[0];
  const globalStartIndex = firstUnitId ? allOrderedIds.indexOf(firstUnitId) : 0;

  // Next HSK level
  const nextLevel = hskLevels.find((l) => l.level === level + 1);

  return (
    <div className="flex flex-col gap-10">
      {/* Back link */}
      <Link
        href="/path"
        className="flex items-center gap-1 text-sm text-stone-400 hover:text-primary transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Tous les niveaux
      </Link>

      {/* Header */}
      <section>
        <div className="flex items-center gap-4">
          <div className={cn(
            "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-2xl font-black text-white",
            LEVEL_COLORS[level - 1] || LEVEL_COLORS[0]
          )}>
            {level}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-stone-900">
              HSK {level} — {hskLevel.title}
            </h1>
            <p className="chinese text-stone-400">{hskLevel.titleZh}</p>
            <p className="text-sm text-stone-500">{hskLevel.tocflLabel}</p>
          </div>
        </div>
        <p className="mt-3 text-stone-500">{hskLevel.description}</p>
        <div className="mt-4 max-w-md">
          <ProgressBar value={completedCount} max={totalCount} label={`${completedCount}/${totalCount} unités complétées`} />
        </div>
      </section>

      {/* Chapters within this level */}
      <div className="flex flex-col gap-12">
        {(() => {
          let runningIndex = globalStartIndex;
          return levelChapters.map((chapter) => {
            const startIndex = runningIndex;
            runningIndex += chapter.unitIds.length;
            return (
              <ChapterSection
                key={chapter.number}
                chapter={chapter}
                progress={progress}
                startIndex={startIndex}
              />
            );
          });
        })()}
      </div>

      {/* Level complete or next level CTA */}
      {completedCount === totalCount && totalCount > 0 && (
        <div className="card text-center border-success/30 bg-success/5">
          <p className="text-lg font-bold text-success mb-2">Niveau HSK {level} terminé !</p>
          {nextLevel ? (
            <Link href={`/path/${nextLevel.slug}`} className="btn-primary gap-1">
              Passer au HSK {nextLevel.level}
              <ChevronRight className="h-4 w-4" />
            </Link>
          ) : (
            <p className="text-stone-500">Félicitations, tu as terminé tous les niveaux !</p>
          )}
        </div>
      )}
    </div>
  );
}
