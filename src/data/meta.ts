import type { Chapter, CourseUnitMeta, ProficiencyLevel } from "@/types/course";
import type { LanguageCode } from "@/lib/language";

import * as zh from "./zh/course/meta";
import * as ja from "./ja/course/meta";

/**
 * Course metadata for both editions, safe to import from a client component.
 *
 * The full catalogues are megabytes — they stay server-side. This module only
 * carries what a list view needs (titles, chapter numbers, prerequisites,
 * level definitions): 72 kB for both languages, which is the price of not
 * prop-drilling metadata through every page.
 *
 * Anything that needs a unit's *content* — sections, vocabulary, exercises —
 * must resolve it in a server component and pass it down. See
 * src/app/[lang]/path/[unit]/page.tsx.
 */
export interface CourseMeta {
  chapters: Chapter[];
  levels: ProficiencyLevel[];
  allUnitMetas: CourseUnitMeta[];
}

const BY_CODE: Record<LanguageCode, CourseMeta> = {
  zh: { chapters: zh.chapters, levels: zh.levels, allUnitMetas: zh.allUnitMetas },
  ja: { chapters: ja.chapters, levels: ja.levels, allUnitMetas: ja.allUnitMetas },
};

export function courseMeta(code: LanguageCode): CourseMeta {
  return BY_CODE[code];
}

export function getUnitMetaById(code: LanguageCode, id: string): CourseUnitMeta | undefined {
  return BY_CODE[code].allUnitMetas.find((unit) => unit.id === id);
}

export function getChapter(code: LanguageCode, number: number): Chapter | undefined {
  return BY_CODE[code].chapters.find((chapter) => chapter.number === number);
}

export function getLevelBySlug(code: LanguageCode, slug: string): ProficiencyLevel | undefined {
  return BY_CODE[code].levels.find((level) => level.slug === slug);
}

export function getLevelForUnit(
  code: LanguageCode,
  unit: Pick<CourseUnitMeta, "chapter">
): ProficiencyLevel | undefined {
  return BY_CODE[code].levels.find((level) => level.chapterNumbers.includes(unit.chapter));
}

export function getChapterUnitMetas(code: LanguageCode, number: number): CourseUnitMeta[] {
  const chapter = getChapter(code, number);
  if (!chapter) return [];
  const byId = new Map(BY_CODE[code].allUnitMetas.map((unit) => [unit.id, unit]));
  return chapter.unitIds
    .map((id) => byId.get(id))
    .filter((unit): unit is CourseUnitMeta => unit !== undefined);
}

export function getLevelUnitMetas(code: LanguageCode, level: ProficiencyLevel): CourseUnitMeta[] {
  return level.chapterNumbers.flatMap((number) => getChapterUnitMetas(code, number));
}

/** Path order across every chapter, used to tell whether a unit is unlocked. */
export function pathOrder(code: LanguageCode): string[] {
  return BY_CODE[code].chapters.flatMap((chapter) => chapter.unitIds);
}
