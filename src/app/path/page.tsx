"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, Check, Lock } from "lucide-react";
import ProgressBar from "@/components/ProgressBar";
import { cn } from "@/lib/cn";
import {
  getPathProgress,
  getJLPTLevelCompletedCount,
  getCurrentJLPTLevel,
  EMPTY_PATH_PROGRESS,
} from "@/lib/progress";
import { allUnitMetas, jlptLevels, getJLPTLevelUnitMetas } from "@/data/course/meta";
import type { PathProgress } from "@/types/course";

const TOTAL_UNITS = allUnitMetas.length;

export default function PathPage() {
  // The level cards are known at build time; only the counters need the browser.
  const [progress, setProgress] = useState<PathProgress>(EMPTY_PATH_PROGRESS);

  useEffect(() => {
    setProgress(getPathProgress());
  }, []);

  const completedCount = progress.completedUnits.length;
  const currentLevel = getCurrentJLPTLevel(progress);

  return (
    <div className="flex flex-col gap-10">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-3xl font-bold text-stone-900">Ton parcours</h1>
        <p className="mt-1 text-stone-500">
          Choisis ton niveau et progresse à ton rythme
        </p>
        <div className="mx-auto mt-4 max-w-md">
          <ProgressBar
            value={completedCount}
            max={TOTAL_UNITS}
            label={`${completedCount}/${TOTAL_UNITS} unités complétées`}
          />
        </div>
      </section>

      {/* Level cards */}
      <div className="grid gap-6 sm:grid-cols-2">
        {jlptLevels.map((level) => {
          const units = getJLPTLevelUnitMetas(level);
          const unitIds = units.map((u) => u.id);
          const completed = getJLPTLevelCompletedCount(unitIds, progress);
          const total = units.length;
          const isCurrent = currentLevel?.level === level.level && !level.comingSoon;
          const isComplete = completed === total && total > 0;
          const colors = level.color;

          if (level.comingSoon) {
            return (
              <div
                key={`N${level.level}`}
                className="card relative overflow-hidden opacity-60 cursor-not-allowed"
              >
                <div className="flex items-start gap-4">
                  <div className={cn(
                    "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl font-black text-white shadow-sm opacity-50",
                    colors.badge
                  )}>
                    {`N${level.level}`}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg font-bold text-stone-500">
                        {level.title}
                      </h2>
                      <Lock className="h-4 w-4 text-stone-400" />
                    </div>
                    <p className="japanese text-sm text-stone-300">{level.titleJa}</p>
                    <p className="mt-1 text-sm text-stone-400">{level.description}</p>
                    <p className="mt-1 text-xs font-medium text-stone-400">
                      {level.secondaryLabel}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-stone-400">
                  <span>{total > 0 ? `${total} unités` : "Contenu en préparation"}</span>
                  <span className="badge bg-stone-100 text-stone-400">Bientôt disponible</span>
                </div>
              </div>
            );
          }

          return (
            <Link
              key={`N${level.level}`}
              href={`/path/niveau/${level.slug}`}
              className={cn(
                "card group relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-0.5",
                isCurrent && "ring-2 ring-primary/40"
              )}
            >
              <div className="flex items-start gap-4">
                <div className={cn(
                  "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl font-black text-white shadow-sm",
                  colors.badge
                )}>
                  {isComplete ? <Check className="h-7 w-7" /> : `N${level.level}`}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-bold text-stone-800 group-hover:text-primary transition-colors">
                      {level.title}
                    </h2>
                    {isCurrent && (
                      <span className="badge bg-primary/10 text-primary text-xs">En cours</span>
                    )}
                  </div>
                  <p className="japanese text-sm text-stone-400">{level.titleJa}</p>
                  <p className="mt-1 text-sm text-stone-500">{level.description}</p>
                  <p className={cn("mt-1 text-xs font-medium", colors.text)}>
                    {level.secondaryLabel}
                  </p>
                </div>
                <ChevronRight className="h-5 w-5 shrink-0 text-stone-300 group-hover:text-primary transition-colors mt-1" />
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                  <span>{completed}/{total} unités</span>
                  <span>{total > 0 ? Math.round((completed / total) * 100) : 0}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-stone-100">
                  <div
                    className={cn("h-full rounded-full transition-all", colors.badge)}
                    style={{ width: `${total > 0 ? (completed / total) * 100 : 0}%` }}
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
