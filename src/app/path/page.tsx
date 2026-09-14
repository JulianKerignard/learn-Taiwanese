"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, Check, Lock } from "lucide-react";
import ProgressBar from "@/components/ProgressBar";
import { cn } from "@/lib/cn";
import {
  getPathProgress,
  getOverallProgress,
  getHSKLevelCompletedCount,
  getCurrentHSKLevel,
} from "@/lib/progress";
import { allUnits, hskLevels, getHSKLevelUnits } from "@/data/course";
import type { PathProgress } from "@/types/course";

const TOTAL_UNITS = allUnits.length;

const LEVEL_COLORS = [
  { bg: "from-emerald-500 to-teal-600", light: "bg-emerald-50 border-emerald-200", text: "text-emerald-700" },
  { bg: "from-sky-500 to-blue-600", light: "bg-sky-50 border-sky-200", text: "text-sky-700" },
  { bg: "from-violet-500 to-purple-600", light: "bg-violet-50 border-violet-200", text: "text-violet-700" },
  { bg: "from-rose-500 to-red-600", light: "bg-rose-50 border-rose-200", text: "text-rose-700" },
];

export default function PathPage() {
  const [progress, setProgress] = useState<PathProgress | null>(null);

  useEffect(() => {
    setProgress(getPathProgress());
  }, []);

  if (!progress) return null;

  const completedCount = progress.completedUnits.length;
  const currentLevel = getCurrentHSKLevel(progress, allUnits, hskLevels);

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
        {hskLevels.map((level) => {
          const units = getHSKLevelUnits(level);
          const unitIds = units.map((u) => u.id);
          const completed = getHSKLevelCompletedCount(unitIds, progress);
          const total = units.length;
          const isCurrent = currentLevel?.level === level.level && !level.comingSoon;
          const isComplete = completed === total && total > 0;
          const colors = LEVEL_COLORS[level.level - 1] || LEVEL_COLORS[0];

          if (level.comingSoon) {
            return (
              <div
                key={level.level}
                className="card relative overflow-hidden opacity-60 cursor-not-allowed"
              >
                <div className="flex items-start gap-4">
                  <div className={cn(
                    "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-2xl font-black text-white shadow-sm opacity-50",
                    colors.bg
                  )}>
                    {level.level}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg font-bold text-stone-500">
                        HSK {level.level} — {level.title}
                      </h2>
                      <Lock className="h-4 w-4 text-stone-400" />
                    </div>
                    <p className="chinese text-sm text-stone-300">{level.titleZh}</p>
                    <p className="mt-1 text-sm text-stone-400">{level.description}</p>
                    <p className="mt-1 text-xs font-medium text-stone-400">
                      {level.tocflLabel}
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
              key={level.level}
              href={`/path/${level.slug}`}
              className={cn(
                "card group relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-0.5",
                isCurrent && "ring-2 ring-primary/40"
              )}
            >
              <div className="flex items-start gap-4">
                <div className={cn(
                  "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-2xl font-black text-white shadow-sm",
                  colors.bg
                )}>
                  {isComplete ? <Check className="h-7 w-7" /> : level.level}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-bold text-stone-800 group-hover:text-primary transition-colors">
                      HSK {level.level} — {level.title}
                    </h2>
                    {isCurrent && (
                      <span className="badge bg-primary/10 text-primary text-xs">En cours</span>
                    )}
                  </div>
                  <p className="chinese text-sm text-stone-400">{level.titleZh}</p>
                  <p className="mt-1 text-sm text-stone-500">{level.description}</p>
                  <p className={cn("mt-1 text-xs font-medium", colors.text)}>
                    {level.tocflLabel}
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
                    className={cn("h-full rounded-full bg-gradient-to-r transition-all", colors.bg)}
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
