import type { PathProgress, CourseUnitMeta, Chapter, ProficiencyLevel } from "@/types/course";
// Metadata only: unlock rules read prerequisites and requiredScore, never the
// lesson itself. Importing @/data/course here would pull all 88 unit modules
// into every client bundle that tracks progress.
import { getUnitMetaById, levels as defaultHskLevels } from "@/data/zh/course/meta";
import { storageGet, storageSet, KEYS } from "@/lib/storage";

const STORAGE_KEY = KEYS.courseProgress;

const defaultProgress: PathProgress = {
  completedUnits: [],
  unitScores: {},
  currentUnit: "unit-01",
  chapterProgress: {},
};

/**
 * Seed for the prerender, where localStorage does not exist yet: the state of a
 * visitor who has never started. Pages render the whole parcours from it and let
 * the badges fill in at hydration — returning null until then would ship an
 * empty <main>. Read-only: never pass it to a function that mutates progress.
 */
export const EMPTY_PATH_PROGRESS: PathProgress = {
  completedUnits: [],
  unitScores: {},
  currentUnit: "unit-01",
  chapterProgress: {},
};

export function getPathProgress(): PathProgress {
  // Copy: completeUnit() pushes into the object it is given, and the exported
  // default doubles as the pre-hydration render seed.
  return storageGet<PathProgress>(STORAGE_KEY, {
    ...defaultProgress,
    completedUnits: [],
    unitScores: {},
    chapterProgress: {},
  });
}

export function savePathProgress(progress: PathProgress): void {
  storageSet(STORAGE_KEY, progress);
}

export function isUnitUnlocked(unitId: string, unit: CourseUnitMeta, progress: PathProgress): boolean {
  if (unit.prerequisites.length === 0) return true;
  return unit.prerequisites.every((prereq) => progress.completedUnits.includes(prereq));
}

export function isUnitCompleted(unitId: string, progress: PathProgress): boolean {
  return progress.completedUnits.includes(unitId);
}

// Find the next unit in chapter order (not by number)
function findNextUnitId(unitId: string, chapters: Chapter[]): string | null {
  const allOrderedIds = chapters.flatMap((ch) => ch.unitIds);
  const idx = allOrderedIds.indexOf(unitId);
  if (idx >= 0 && idx < allOrderedIds.length - 1) {
    return allOrderedIds[idx + 1];
  }
  return null;
}

export function completeUnit(
  unitId: string,
  score: number,
  unit: CourseUnitMeta,
  chapters?: Chapter[]
): PathProgress {
  const progress = getPathProgress();

  if (score >= unit.requiredScore) {
    if (!progress.completedUnits.includes(unitId)) {
      progress.completedUnits.push(unitId);
    }
  }

  const prev = progress.unitScores[unitId] ?? 0;
  progress.unitScores[unitId] = Math.max(prev, score);

  if (score >= unit.requiredScore && chapters) {
    const nextId = findNextUnitId(unitId, chapters);
    if (nextId) {
      progress.currentUnit = nextId;
    }
  }

  savePathProgress(progress);
  return progress;
}

export function getChapterProgress(chapter: Chapter, progress: PathProgress): number {
  const completed = chapter.unitIds.filter((id) => progress.completedUnits.includes(id)).length;
  return chapter.unitIds.length > 0 ? completed / chapter.unitIds.length : 0;
}

export function getOverallProgress(totalUnits: number, progress: PathProgress): number {
  return totalUnits > 0 ? progress.completedUnits.length / totalUnits : 0;
}

// ── HSK Level helpers ──────────────────────────────────────────────

export function getLevelProgress(level: ProficiencyLevel, unitIds: string[], progress: PathProgress): number {
  if (unitIds.length === 0) return 0;
  const completed = unitIds.filter((id) => progress.completedUnits.includes(id)).length;
  return completed / unitIds.length;
}

export function getLevelCompletedCount(unitIds: string[], progress: PathProgress): number {
  return unitIds.filter((id) => progress.completedUnits.includes(id)).length;
}

export function getCurrentLevel(progress: PathProgress): ProficiencyLevel | undefined {
  const currentUnit = getUnitMetaById(progress.currentUnit);
  if (!currentUnit) return defaultHskLevels[0];
  return defaultHskLevels.find((l) => l.chapterNumbers.includes(currentUnit.chapter));
}

