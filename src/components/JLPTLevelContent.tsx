"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronRight, Construction } from "lucide-react";
import ProgressBar from "@/components/ProgressBar";
import { ChapterSection } from "@/components/ChapterSection";
import { cn } from "@/lib/cn";
import {
  getPathProgress,
  getJLPTLevelCompletedCount,
  EMPTY_PATH_PROGRESS,
} from "@/lib/progress";
import {
  getJLPTLevelBySlug,
  jlptLevels,
  getJLPTLevelChapters,
  getJLPTLevelUnitMetas,
  chapters,
} from "@/data/course/meta";
import type { PathProgress } from "@/types/course";

export default function JLPTLevelContent({ slug }: { slug: string }) {
  // Start from empty rather than null: returning null until hydration left the
  // prerendered page with no content at all, so the LCP waited on the bundle.
  const [progress, setProgress] = useState<PathProgress>(EMPTY_PATH_PROGRESS);

  useEffect(() => {
    setProgress(getPathProgress());
  }, []);

  const jlptLevel = getJLPTLevelBySlug(slug);
  if (!jlptLevel) return null;
  const level = jlptLevel.level;

  if (jlptLevel.comingSoon) {
    return (
      <div className="flex flex-col gap-10">
        <Link href="/path" className="flex items-center gap-1 text-sm text-stone-500 hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Tous les niveaux
        </Link>
        <div className="card text-center py-16">
          <Construction className="mx-auto mb-4 h-12 w-12 text-stone-500" aria-hidden="true" />
          <h1 className="page-title mb-2">JLPT N{level}</h1>
          <p className="text-stone-500 mb-1">{jlptLevel.description}</p>
          <p className="text-sm text-stone-500">{jlptLevel.secondaryLabel}</p>
          <p className="mt-6 text-stone-500">Ce niveau est en cours de préparation. Reviens bientôt !</p>
          <Link href="/path" className="btn-primary mt-6 inline-flex">
            Retour aux niveaux
          </Link>
        </div>
      </div>
    );
  }

  const levelChapters = getJLPTLevelChapters(jlptLevel);
  const levelUnits = getJLPTLevelUnitMetas(jlptLevel);
  const unitIds = levelUnits.map((u) => u.id);
  const completedCount = getJLPTLevelCompletedCount(unitIds, progress);
  const totalCount = levelUnits.length;

  // Compute global startIndex for unit numbering
  const allOrderedIds = chapters.flatMap((ch) => ch.unitIds);
  const firstUnitId = unitIds[0];
  const globalStartIndex = firstUnitId ? allOrderedIds.indexOf(firstUnitId) : 0;

  // Next JLPT level
  // JLPT counts down: after N5 comes N4.
  const nextLevel = jlptLevels.find((l) => l.level === level - 1);

  return (
    <div className="flex flex-col gap-10">
      {/* Back link */}
      <Link
        href="/path"
        className="flex items-center gap-1 text-sm text-stone-500 hover:text-primary transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Tous les niveaux
      </Link>

      {/* Header */}
      <section>
        <div className="flex items-center gap-4">
          <div
            className={cn(
              "flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-bold text-white",
              jlptLevel.color.badge
            )}
          >
            N{level}
          </div>
          <div>
            <h1 className="page-title">
              JLPT N{level}
            </h1>
            <p className="japanese text-stone-500" lang="ja">{jlptLevel.titleJa}</p>
            <p className="text-sm text-stone-500">{jlptLevel.secondaryLabel}</p>
          </div>
        </div>
        <p className="mt-3 text-stone-500">{jlptLevel.description}</p>
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
          <p className="text-lg font-bold text-success mb-2">Niveau JLPT N{level} terminé !</p>
          {nextLevel ? (
            <Link href={`/path/niveau/${nextLevel.slug}`} className="btn-primary gap-1">
              Passer au JLPT N{nextLevel.level}
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
