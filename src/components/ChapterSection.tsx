"use client";

import Link from "next/link";
import { Check, Lock, ChevronRight } from "lucide-react";
import ProgressBar from "@/components/ProgressBar";
import { cn } from "@/lib/cn";
import {
  isUnitUnlocked,
  isUnitCompleted,
  getChapterProgress,
} from "@/lib/progress";
// Metadata only: a path node shows a title, an icon and a lock state. Reaching
// for @/data/course here would ship all 88 unit modules to every route that
// renders the parcours.
import { getUnitMetaById } from "@/data/course/meta";
import type { PathProgress, CourseUnitMeta, Chapter } from "@/types/course";

export function ChapterSection({
  chapter,
  progress,
  startIndex,
  userStateReady,
}: {
  chapter: Chapter;
  progress: PathProgress;
  startIndex: number;
  /**
   * False while the prerendered HTML is still waiting for localStorage. The
   * chapter and unit copy is build-known and always renders; the lock, the
   * completion tick, the score and the chapter bar are claims about the reader
   * and stay out until this is true. In particular, nothing is drawn as locked
   * before then — a lock computed from an empty progression would tell every
   * visitor that 39 units out of 40 are closed to them.
   */
  userStateReady: boolean;
}) {
  const chapterPct = getChapterProgress(chapter, progress);

  const chapterUnits = chapter.unitIds
    .map((id) => getUnitMetaById(id))
    .filter((u): u is CourseUnitMeta => u !== undefined);

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-title font-bold text-stone-800">
          Chapitre {chapter.number} — {chapter.title}
        </h2>
        <p className="chinese text-sm text-stone-500" lang="zh-Hant-TW">{chapter.titleZh}</p>
        <p className="mt-1 text-sm text-stone-500">{chapter.description}</p>
        <div className="mt-3 max-w-xs">
          {userStateReady ? (
            <ProgressBar value={Math.round(chapterPct * 100)} max={100} />
          ) : (
            <div className="h-2 w-full animate-pulse rounded-full bg-stone-100" />
          )}
        </div>
      </div>

      <div className="relative ml-3 pl-5 sm:ml-6 sm:pl-8 border-l-2 border-stone-200">
        {chapterUnits.map((unit, i) => (
          <UnitNode
            key={unit.id}
            unit={unit}
            displayNumber={startIndex + i + 1}
            progress={progress}
            isLast={i === chapterUnits.length - 1}
            userStateReady={userStateReady}
          />
        ))}
      </div>
    </section>
  );
}

function UnitNode({
  unit,
  displayNumber,
  progress,
  isLast,
  userStateReady,
}: {
  unit: CourseUnitMeta;
  displayNumber: number;
  progress: PathProgress;
  isLast: boolean;
  userStateReady: boolean;
}) {
  // Before the reader's progression is known, the node renders in its neutral
  // state: no tick, no lock, no "en cours", and reachable — an open link is the
  // one option that asserts nothing about them.
  const completed = userStateReady && isUnitCompleted(unit.id, progress);
  const unlocked = !userStateReady || isUnitUnlocked(unit.id, unit, progress);
  const isCurrent = userStateReady && progress.currentUnit === unit.id;
  const score = userStateReady ? progress.unitScores[unit.id] : undefined;

  let circleStyle = "border-stone-300 bg-white text-stone-400";
  if (completed) {
    circleStyle = "border-success bg-success text-white";
  } else if (isCurrent) {
    circleStyle = "border-primary bg-primary/10 text-primary ring-2 ring-primary/30";
  } else if (!unlocked) {
    circleStyle = "border-stone-200 bg-stone-100 text-stone-300";
  }

  return (
    <div className={cn("relative pb-8", isLast && "pb-0")}>
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
          isCurrent
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
                  "font-bold",
                  !unlocked ? "text-stone-400" : "text-stone-800"
                )}
              >
                Unité {displayNumber} — {unit.title}
              </h3>
              {!unlocked && !completed && <Lock className="h-4 w-4 text-stone-300" />}
            </div>
            {unit.titleZh && (
              <p className="chinese text-sm text-stone-500" lang="zh-Hant-TW">{unit.titleZh}</p>
            )}
            <p
              className={cn(
                "mt-1 text-sm",
                !unlocked ? "text-stone-300" : "text-stone-500"
              )}
            >
              {unit.description}
            </p>
            {completed && score !== undefined && (
              <span className="badge mt-2 bg-success/10 text-success">
                Score : {Math.round(score * 100)}%
              </span>
            )}
          </div>

          {unlocked && (
            <Link
              href={`/path/${unit.id}`}
              className={cn(
                "shrink-0",
                completed ? "btn-secondary" : "btn-primary",
                "min-w-[7.5rem] gap-1 text-sm"
              )}
            >
              {userStateReady
                ? completed
                  ? "Refaire"
                  : isCurrent
                    ? "Continuer"
                    : "Commencer"
                : "Ouvrir"}
              <ChevronRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
