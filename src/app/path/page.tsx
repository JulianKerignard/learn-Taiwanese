"use client";

import { useState, useEffect } from "react";
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
import { allUnitMetas, levels, getLevelUnitMetas } from "@/data/zh/course/meta";
import type { PathProgress } from "@/types/course";

const TOTAL_UNITS = allUnitMetas.length;

export default function PathPage() {
  // The level cards — titles, descriptions, unit totals — are known at build
  // time and stay in the prerendered HTML. The counters, the percentages and the
  // "En cours" badge describe the reader, so they wait for `hydrated` instead of
  // rendering an empty progression as if it were a measured zero.
  const [progress, setProgress] = useState<PathProgress>(EMPTY_PATH_PROGRESS);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setProgress(getPathProgress());
    setHydrated(true);
  }, []);

  const completedCount = progress.completedUnits.length;
  const currentLevel = getCurrentLevel(progress);

  return (
    <div className="flex flex-col gap-10">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-display font-bold text-stone-900">Ton parcours</h1>
        <p className="mt-1 text-stone-500">
          Choisis ton niveau et progresse à ton rythme
        </p>
        <div className="mx-auto mt-4 max-w-md">
          {hydrated ? (
            <ProgressBar
              value={completedCount}
              max={TOTAL_UNITS}
              label={`${completedCount}/${TOTAL_UNITS} unités complétées`}
            />
          ) : (
            // Same two rows and same heights as ProgressBar: the total is a fact
            // about the corpus, the share completed is a fact about the reader.
            <div className="w-full">
              <div className="mb-1 flex justify-between text-xs text-stone-500">
                <span>{TOTAL_UNITS} unités au total</span>
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
          const units = getLevelUnitMetas(level);
          const unitIds = units.map((u) => u.id);
          const completed = getLevelCompletedCount(unitIds, progress);
          const total = units.length;
          const isCurrent = hydrated && currentLevel?.level === level.level && !level.comingSoon;
          const isComplete = hydrated && completed === total && total > 0;
          const colors = level.color;

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
                      <h2 className="text-title font-bold text-stone-500">
                        HSK {level.level} — {level.title}
                      </h2>
                      <Lock className="h-4 w-4 text-stone-400" />
                    </div>
                    <p className="chinese text-sm text-stone-500">{level.titleNative}</p>
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
              href={`/path/${level.slug}`}
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
                      HSK {level.level} — {level.title}
                    </h2>
                    {isCurrent && (
                      <span className="badge bg-primary/10 text-primary text-xs">En cours</span>
                    )}
                  </div>
                  <p className="chinese text-sm text-stone-500">{level.titleNative}</p>
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
