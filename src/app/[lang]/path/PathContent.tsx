"use client";

import Link from "next/link";
import { ChevronRight, Check, Lock } from "lucide-react";
import ProgressBar from "@/components/ProgressBar";
import { cn } from "@/lib/cn";
import {
  getPathProgress,
  getLevelCompletedCount,
  getCurrentLevel,
  EMPTY_PATH_PROGRESS,
} from "@/lib/progress";
// Metadata only: a level card shows a title, a unit count and a lock state.
// @/data/server here would drag every unit module into this route's bundle.
import { courseMeta, getLevelUnitMetas } from "@/data/meta";
import {
  LANGUAGES,
  langHref,
  levelHeading,
  type LanguageSegment,
} from "@/lib/language";
import type { PathProgress } from "@/types/course";
import { useClientState } from "@/lib/use-client-state";

export default function PathContent({ lang }: { lang: LanguageSegment }) {
  // The level cards — titles, descriptions, unit totals — are known at build
  // time and stay in the prerendered HTML. The counters, the percentages and the
  // "En cours" badge describe the reader, so they wait for `hydrated` instead of
  // rendering an empty progression as if it were a measured zero.
  const [progress, , hydrated] = useClientState<PathProgress>(getPathProgress, EMPTY_PATH_PROGRESS);

  const language = LANGUAGES[lang];
  const { code } = language;
  const { levels, allUnitMetas } = courseMeta(code);
  const totalUnits = allUnitMetas.length;

  const completedCount = progress.completedUnits.length;
  const currentLevel = getCurrentLevel(code, progress);

  return (
    <div className="flex flex-col gap-10">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-display font-bold text-stone-900">Ton parcours</h1>
        <p className="mt-1 text-stone-500">
          Choisis ton niveau et progresse à ton rythme
        </p>
        <div className="w-full mx-auto mt-4 max-w-md">
          {hydrated ? (
            <ProgressBar
              value={completedCount}
              max={totalUnits}
              label={`${completedCount}/${totalUnits} unités complétées`}
            />
          ) : (
            // Same two rows and same heights as ProgressBar: the total is a fact
            // about the corpus, the share completed is a fact about the reader.
            <div className="w-full">
              <div className="mb-1 flex justify-between text-xs text-stone-500">
                <span>{totalUnits} unités au total</span>
                <span className="block h-4 w-8 animate-pulse rounded bg-stone-100" aria-hidden />
              </div>
              <div className="h-2 w-full animate-pulse rounded-full bg-stone-100" />
            </div>
          )}
        </div>
      </section>

      {/* Level cards */}
      <div className="grid gap-6 sm:grid-cols-2">
        {levels.map((level) => {
          const units = getLevelUnitMetas(code, level);
          const unitIds = units.map((u) => u.id);
          const completed = getLevelCompletedCount(unitIds, progress);
          const total = units.length;
          const isCurrent = hydrated && currentLevel?.level === level.level && !level.comingSoon;
          const isComplete = hydrated && completed === total && total > 0;
          const colors = level.color;
          // "HSK 1 — Les bases" or "JLPT N5 — …", per the edition's scale.
          const heading = levelHeading(language, level);

          if (level.comingSoon) {
            return (
              <div
                key={level.level}
                className="card relative overflow-hidden opacity-60 cursor-not-allowed"
              >
                <div className="flex items-start gap-4">
                  <div className={cn(
                    "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl font-bold text-white shadow-sm opacity-50",
                    colors.badge
                  )}>
                    {level.level}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h2 className="text-title font-bold text-stone-500">{heading}</h2>
                      <Lock className="h-4 w-4 text-stone-400" />
                    </div>
                    <p className="chinese text-sm text-stone-500" lang={language.contentLang}>
                      {level.titleNative}
                    </p>
                    <p className="mt-1 text-sm text-stone-500">{level.description}</p>
                    <p className="mt-1 text-xs font-medium text-stone-500">
                      {level.secondaryLabel}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-stone-500">
                  <span>{total > 0 ? `${total} unités` : "Contenu en préparation"}</span>
                  <span className="badge bg-stone-100 text-stone-500">Bientôt disponible</span>
                </div>
              </div>
            );
          }

          return (
            <Link
              key={level.level}
              href={langHref(lang, `/path/niveau/${level.slug}`)}
              className={cn(
                "card group relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-0.5",
                isCurrent && "ring-2 ring-primary/40"
              )}
            >
              <div className="flex items-start gap-4">
                <div className={cn(
                  "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl font-bold text-white shadow-sm",
                  colors.badge
                )}>
                  {isComplete ? <Check className="h-7 w-7" /> : level.level}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h2 className="text-title font-bold text-stone-800 group-hover:text-primary transition-colors">
                      {heading}
                    </h2>
                    {isCurrent && (
                      <span className="badge bg-primary/10 text-primary text-xs">En cours</span>
                    )}
                  </div>
                  <p className="chinese text-sm text-stone-500" lang={language.contentLang}>
                    {level.titleNative}
                  </p>
                  <p className="mt-1 text-sm text-stone-500">{level.description}</p>
                  <p className={cn("mt-1 text-xs font-medium", colors.text)}>
                    {level.secondaryLabel}
                  </p>
                </div>
                <ChevronRight className="h-5 w-5 shrink-0 text-stone-300 group-hover:text-primary transition-colors mt-1" />
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                  <span>{hydrated ? `${completed}/${total} unités` : `${total} unités`}</span>
                  {hydrated ? (
                    <span>{total > 0 ? Math.round((completed / total) * 100) : 0}%</span>
                  ) : (
                    <span className="block h-4 w-8 animate-pulse rounded bg-stone-100" aria-hidden />
                  )}
                </div>
                <div
                  className={cn(
                    "h-2 w-full overflow-hidden rounded-full",
                    colors.surface,
                    !hydrated && "animate-pulse"
                  )}
                >
                  {hydrated && (
                    <div
                      className={cn("h-full rounded-full transition-all", colors.badge)}
                      style={{ width: `${total > 0 ? (completed / total) * 100 : 0}%` }}
                    />
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
