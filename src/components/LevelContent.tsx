"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";
import ProgressBar from "@/components/ProgressBar";
import { ChapterSection } from "@/components/ChapterSection";
import { cn } from "@/lib/cn";
import {
  getPathProgress,
  getLevelCompletedCount,
  EMPTY_PATH_PROGRESS,
} from "@/lib/progress";
import { courseMeta, getLevelBySlug, getLevelUnitMetas } from "@/data/meta";
import {
  LANGUAGES,
  langHref,
  levelHeading,
  levelName,
  nextLevelNumber,
  type LanguageSegment,
} from "@/lib/language";
import type { Chapter, PathProgress } from "@/types/course";

/**
 * One level of the parcours, for either edition.
 *
 * Metadata only — chapters, unit titles, prerequisites — so the route stays out
 * of the corpora. HSK numbers climb with difficulty and JLPT numbers fall, so
 * the "next level" link follows `levels.ascending` rather than a hardcoded +1.
 */
export default function LevelContent({
  lang,
  slug,
}: {
  lang: LanguageSegment;
  slug: string;
}) {
  // Every hook runs before the early returns below — the level lookup must not
  // be allowed to skip one.
  //
  // Start from empty rather than null: returning null until hydration left the
  // prerendered page with no content at all, so the LCP waited on the bundle.
  // `hydrated` keeps the two halves apart — chapter and unit copy is build-known
  // and ships in the HTML, while progression, locks and counters wait for
  // localStorage rather than presenting an empty progression as a measurement.
  const [progress, setProgress] = useState<PathProgress>(EMPTY_PATH_PROGRESS);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setProgress(getPathProgress());
    setHydrated(true);
  }, []);

  const language = LANGUAGES[lang];
  const { code } = language;
  const level = getLevelBySlug(code, slug);
  if (!level) return null;

  const heading = levelHeading(language, level);
  const pathHref = langHref(lang, "/path");

  if (level.comingSoon) {
    return (
      <div className="flex flex-col gap-10">
        <Link href={pathHref} className="flex items-center gap-1 text-sm text-stone-500 hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Tous les niveaux
        </Link>
        <div className="card text-center py-16">
          <div className="text-5xl mb-4">🚧</div>
          <h1 className="text-display font-bold text-stone-800 mb-2">{heading}</h1>
          <p className="text-stone-500 mb-1">{level.description}</p>
          <p className="text-sm text-stone-500">{level.secondaryLabel}</p>
          <p className="mt-6 text-stone-500">Ce niveau est en cours de préparation. Reviens bientôt !</p>
          <Link href={pathHref} className="btn-primary mt-6 inline-flex">
            Retour aux niveaux
          </Link>
        </div>
      </div>
    );
  }

  const { chapters, levels } = courseMeta(code);
  const levelChapters = level.chapterNumbers
    .map((number) => chapters.find((chapter) => chapter.number === number))
    .filter((chapter): chapter is Chapter => chapter !== undefined);
  const levelUnits = getLevelUnitMetas(code, level);
  const unitIds = levelUnits.map((u) => u.id);
  const completedCount = getLevelCompletedCount(unitIds, progress);
  const totalCount = levelUnits.length;

  // Compute global startIndex for unit numbering
  const allOrderedIds = chapters.flatMap((ch) => ch.unitIds);
  const firstUnitId = unitIds[0];
  const globalStartIndex = firstUnitId ? allOrderedIds.indexOf(firstUnitId) : 0;

  // The level that follows this one in difficulty — one step up the HSK scale,
  // one step down the JLPT one.
  const nextLevel = levels.find((l) => l.level === nextLevelNumber(language, level.level));

  return (
    <div className="flex flex-col gap-10">
      {/* Back link */}
      <Link
        href={pathHref}
        className="flex items-center gap-1 text-sm text-stone-500 hover:text-primary transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Tous les niveaux
      </Link>

      {/* Header */}
      <section>
        <div className="flex items-center gap-4">
          <div className={cn(
            "flex h-14 w-14 items-center justify-center rounded-2xl text-2xl font-bold text-white",
            level.color.badge
          )}>
            {level.level}
          </div>
          <div>
            <h1 className="text-display font-bold text-stone-900">{heading}</h1>
            <p className="chinese text-stone-500" lang={language.contentLang}>{level.titleNative}</p>
            <p className="text-sm text-stone-500">{level.secondaryLabel}</p>
          </div>
        </div>
        <p className="mt-3 text-stone-500">{level.description}</p>
        <div className="mt-4 max-w-md">
          {hydrated ? (
            <ProgressBar value={completedCount} max={totalCount} label={`${completedCount}/${totalCount} unités complétées`} />
          ) : (
            // Same two rows and heights as ProgressBar. The unit total belongs to
            // the corpus; how many are done belongs to the reader.
            <div className="w-full">
              <div className="mb-1 flex justify-between text-xs text-stone-500">
                <span>{totalCount} unités dans ce niveau</span>
                <span className="block h-4 w-8 animate-pulse rounded bg-stone-100" aria-hidden />
              </div>
              <div className="h-2 w-full animate-pulse rounded-full bg-stone-100" />
            </div>
          )}
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
                lang={lang}
                chapter={chapter}
                progress={progress}
                startIndex={startIndex}
                userStateReady={hydrated}
              />
            );
          });
        })()}
      </div>

      {/* Level complete or next level CTA */}
      {hydrated && completedCount === totalCount && totalCount > 0 && (
        <div className="card text-center border-success/30 bg-success/5">
          <p className="text-lg font-bold text-success mb-2">
            Niveau {levelName(language, level.level)} terminé !
          </p>
          {nextLevel ? (
            <Link href={langHref(lang, `/path/niveau/${nextLevel.slug}`)} className="btn-primary gap-1">
              Passer au {levelName(language, nextLevel.level)}
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
