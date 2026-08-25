import type { PathProgress, CourseUnit, Chapter, JLPTLevel } from "@/types/course";
import { getUnitById, jlptLevels as defaultHskLevels } from "@/data/course";
import { storageGet, storageSet, KEYS } from "@/lib/storage";

const STORAGE_KEY = KEYS.courseProgress;

const defaultProgress: PathProgress = {
  completedUnits: [],
  unitScores: {},
  currentUnit: "unit-01",
  chapterProgress: {},
};

export function getPathProgress(): PathProgress {
  return storageGet<PathProgress>(STORAGE_KEY, defaultProgress);
}

export function savePathProgress(progress: PathProgress): void {
  storageSet(STORAGE_KEY, progress);
}

export function isUnitUnlocked(unitId: string, unit: CourseUnit, progress: PathProgress): boolean {
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
  unit: CourseUnit,
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

// ── JLPT Level helpers ──────────────────────────────────────────────

export function getJLPTLevelProgress(level: JLPTLevel, unitIds: string[], progress: PathProgress): number {
  if (unitIds.length === 0) return 0;
  const completed = unitIds.filter((id) => progress.completedUnits.includes(id)).length;
  return completed / unitIds.length;
}

export function getJLPTLevelCompletedCount(unitIds: string[], progress: PathProgress): number {
  return unitIds.filter((id) => progress.completedUnits.includes(id)).length;
}

export function getCurrentJLPTLevel(progress: PathProgress): JLPTLevel | undefined {
  const currentUnit = getUnitById(progress.currentUnit);
  if (!currentUnit) return defaultHskLevels[0];
  return defaultHskLevels.find((l) => l.chapterNumbers.includes(currentUnit.chapter));
}

