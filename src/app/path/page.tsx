"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Check, Lock, ChevronRight, BookOpen, Clock } from "lucide-react";
import ProgressBar from "@/components/ProgressBar";
import { cn } from "@/lib/cn";
import {
  getPathProgress,
  isUnitUnlocked,
  isUnitCompleted,
  getChapterProgress,
  getOverallProgress,
} from "@/lib/progress";
import { allUnits, chapters, getUnitById } from "@/data/course";
import type { PathProgress, CourseUnit, Chapter } from "@/types/course";

const TOTAL_UNITS = allUnits.length;

interface PlaceholderUnit {
  id: string;
  number: number;
  title: string;
  titleZh: string;
  description: string;
  placeholder: true;
}

function getPlaceholderUnits(): PlaceholderUnit[] {
  const existing = allUnits.map((u) => u.number);
  const placeholders: PlaceholderUnit[] = [];
  for (let i = 1; i <= TOTAL_UNITS; i++) {
    if (!existing.includes(i)) {
      placeholders.push({
        id: `unit-${String(i).padStart(2, "0")}`,
        number: i,
        title: "Bientot disponible",
        titleZh: "",
        description: "Cette unite est en cours de preparation.",
        placeholder: true,
      });
    }
  }
  return placeholders;
}

export default function PathPage() {
  const [progress, setProgress] = useState<PathProgress | null>(null);

  useEffect(() => {
    setProgress(getPathProgress());
  }, []);

  if (!progress) return null;

  const completedCount = progress.completedUnits.length;
  const overallPct = getOverallProgress(TOTAL_UNITS, progress);
  const placeholders = getPlaceholderUnits();

  return (
    <div className="flex flex-col gap-10">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-3xl font-bold text-stone-900">Ton parcours</h1>
        <p className="mt-1 text-stone-500">
          {completedCount}/{TOTAL_UNITS} unites completees
        </p>
        <div className="mx-auto mt-4 max-w-md">
          <ProgressBar
            value={completedCount}
            max={TOTAL_UNITS}
            label={`Progression globale`}
          />
        </div>
      </section>

      {/* Chapters */}
      <div className="flex flex-col gap-12">
        {(() => {
          let globalIndex = 0;
          return chapters.map((chapter) => {
            const startIndex = globalIndex;
            globalIndex += chapter.unitIds.length;
            return (
              <ChapterSection
                key={chapter.number}
                chapter={chapter}
                progress={progress}
                placeholders={placeholders}
                startIndex={startIndex}
              />
            );
          });
        })()}
      </div>
    </div>
  );
}

function ChapterSection({
  chapter,
  progress,
  placeholders,
  startIndex,
}: {
  chapter: Chapter;
  progress: PathProgress;
  placeholders: PlaceholderUnit[];
  startIndex: number;
}) {
  const chapterPct = getChapterProgress(chapter, progress);

  // Get units for this chapter: real ones + placeholders
  const chapterUnits: (CourseUnit | PlaceholderUnit)[] = chapter.unitIds.map((id) => {
    const real = getUnitById(id);
    if (real) return real;
    const ph = placeholders.find((p) => p.id === id);
    if (ph) return ph;
    return {
      id,
      number: parseInt(id.replace("unit-", ""), 10),
      title: "Bientot disponible",
      titleZh: "",
      description: "Cette unite est en cours de preparation.",
      placeholder: true as const,
    };
  });

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-stone-800">
          Chapitre {chapter.number} — {chapter.title}
        </h2>
        <p className="chinese text-sm text-stone-400">{chapter.titleZh}</p>
        <p className="mt-1 text-sm text-stone-500">{chapter.description}</p>
        <div className="mt-3 max-w-xs">
          <ProgressBar value={Math.round(chapterPct * 100)} max={100} />
        </div>
      </div>

      <div className="relative ml-3 pl-5 sm:ml-6 sm:pl-8 border-l-2 border-stone-200">
        {chapterUnits.map((unit, i) => {
          const isPlaceholder = "placeholder" in unit;
          return (
            <UnitNode
              key={unit.id}
              unit={unit}
              displayNumber={startIndex + i + 1}
              progress={progress}
              isPlaceholder={isPlaceholder}
              isLast={i === chapterUnits.length - 1}
            />
          );
        })}
      </div>
    </section>
  );
}

function UnitNode({
  unit,
  displayNumber,
  progress,
  isPlaceholder,
  isLast,
}: {
  unit: CourseUnit | PlaceholderUnit;
  displayNumber: number;
  progress: PathProgress;
  isPlaceholder: boolean;
  isLast: boolean;
}) {
  const completed = isUnitCompleted(unit.id, progress);
  const unlocked = !isPlaceholder && "prerequisites" in unit && isUnitUnlocked(unit.id, unit as CourseUnit, progress);
  const isCurrent = progress.currentUnit === unit.id && !isPlaceholder;
  const score = progress.unitScores[unit.id];

  let circleStyle = "border-stone-300 bg-white text-stone-400";
  if (completed) {
    circleStyle = "border-success bg-success text-white";
  } else if (isCurrent) {
    circleStyle = "border-primary bg-primary/10 text-primary ring-2 ring-primary/30";
  } else if (isPlaceholder || !unlocked) {
    circleStyle = "border-stone-200 bg-stone-100 text-stone-300";
  }

  return (
    <div className={cn("relative pb-8", isLast && "pb-0")}>
      {/* Circle on the line */}
      <div
        className={cn(
          "absolute -left-[calc(1.25rem+0.625rem)] sm:-left-[calc(2rem+1.25rem)] flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2 text-xs sm:text-sm font-bold",
          circleStyle
        )}
      >
        {completed ? <Check className="h-5 w-5" /> : displayNumber}
      </div>

      <div
        className={cn(
          "rounded-lg border p-4 transition-colors",
          isPlaceholder
            ? "border-stone-100 bg-stone-50"
            : isCurrent
              ? "border-primary/30 bg-white shadow-sm"
              : completed
                ? "border-stone-200 bg-white"
                : !unlocked
                  ? "border-stone-100 bg-stone-50"
                  : "border-stone-200 bg-white"
        )}
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3
                className={cn(
                  "font-semibold",
                  isPlaceholder || !unlocked ? "text-stone-400" : "text-stone-800"
                )}
              >
                Unite {displayNumber} — {unit.title}
              </h3>
              {!isPlaceholder && !unlocked && <Lock className="h-4 w-4 text-stone-300" />}
            </div>
            {unit.titleZh && (
              <p className="chinese text-sm text-stone-400">{unit.titleZh}</p>
            )}
            <p
              className={cn(
                "mt-1 text-sm",
                isPlaceholder || !unlocked ? "text-stone-300" : "text-stone-500"
              )}
            >
              {unit.description}
            </p>
            {completed && score !== undefined && (
              <span className="badge mt-2 bg-success/10 text-success">
                Score : {Math.round(score * 100)}%
              </span>
            )}
            {isPlaceholder && (
              <div className="mt-2 flex items-center gap-1 text-xs text-stone-300">
                <Clock className="h-3 w-3" />
                <span>Bientot disponible</span>
              </div>
            )}
          </div>

          {!isPlaceholder && unlocked && (
            <Link
              href={`/path/${unit.id}`}
              className={cn(
                "shrink-0",
                completed ? "btn-secondary" : "btn-primary",
                "gap-1 text-sm"
              )}
            >
              {completed ? "Refaire" : isCurrent ? "Continuer" : "Commencer"}
              <ChevronRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
