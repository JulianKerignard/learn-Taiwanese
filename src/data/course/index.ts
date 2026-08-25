import type { CourseUnit, Chapter, JLPTLevel } from "@/types/course";

// Chapitre 1 — Les kana et les sons
import { unit01 } from "./chapter1/unit01";
import { unit02 } from "./chapter1/unit02";
import { unit03 } from "./chapter1/unit03";
import { unit04 } from "./chapter1/unit04";
import { unit05 } from "./chapter1/unit05";
import { unit06 } from "./chapter1/unit06";
import { unit07 } from "./chapter1/unit07";

// Chapitre 2 — Premiers échanges
import { unit08 } from "./chapter2/unit08";
import { unit09 } from "./chapter2/unit09";
import { unit10 } from "./chapter2/unit10";
import { unit11 } from "./chapter2/unit11";
import { unit12 } from "./chapter2/unit12";
import { unit13 } from "./chapter2/unit13";

// Chapitre 3 — La vie quotidienne
import { unit14 } from "./chapter3/unit14";
import { unit15 } from "./chapter3/unit15";
import { unit16 } from "./chapter3/unit16";
import { unit17 } from "./chapter3/unit17";
import { unit18 } from "./chapter3/unit18";
import { unit19 } from "./chapter3/unit19";
import { unit20 } from "./chapter3/unit20";

export const chapters: Chapter[] = [
  {
    number: 1,
    title: "Les kana et les sons",
    titleJa: "かなと発音",
    description: "Lire le japonais avant de le parler : hiragana, katakana, mores et accent",
    unitIds: ["unit-01", "unit-02", "unit-03", "unit-04", "unit-05", "unit-06", "unit-07"],
  },
  {
    number: 2,
    title: "Premiers échanges",
    titleJa: "はじめての会話",
    description: "Se présenter, compter, désigner : les structures qui reviennent partout",
    unitIds: ["unit-08", "unit-09", "unit-10", "unit-11", "unit-12", "unit-13"],
  },
  {
    number: 3,
    title: "La vie quotidienne",
    titleJa: "毎日の生活",
    description: "Verbes, heure, restaurant, achats, transports : le japonais utile dès le premier jour",
    unitIds: ["unit-14", "unit-15", "unit-16", "unit-17", "unit-18", "unit-19", "unit-20"],
  },
];

/**
 * JLPT runs from N5 (entry) to N1 (hardest) — the reverse of HSK's numbering.
 * `level` keeps the N number so the UI can print it directly.
 */
export const jlptLevels: JLPTLevel[] = [
  {
    level: 5,
    slug: "jlpt-n5",
    color: { badge: "bg-n5", surface: "border-n5/25 bg-n5/5", text: "text-n5" },
    title: "JLPT N5",
    titleJa: "日本語能力試験 N5",
    secondaryLabel: "Kanji Kentei 10 級",
    description:
      "Lire les deux syllabaires, environ 800 mots et 100 kanji. Comprendre des phrases simples du quotidien.",
    chapterNumbers: [1, 2, 3],
  },
  {
    level: 4,
    slug: "jlpt-n4",
    color: { badge: "bg-n4", surface: "border-n4/25 bg-n4/5", text: "text-n4" },
    title: "JLPT N4",
    titleJa: "日本語能力試験 N4",
    secondaryLabel: "Kanji Kentei 9–8 級",
    description:
      "Environ 1 500 mots et 300 kanji. Tenir une conversation quotidienne et lire des textes courts.",
    chapterNumbers: [4, 5],
    comingSoon: true,
  },
  {
    level: 3,
    slug: "jlpt-n3",
    color: { badge: "bg-n3", surface: "border-n3/25 bg-n3/5", text: "text-n3" },
    title: "JLPT N3",
    titleJa: "日本語能力試験 N3",
    secondaryLabel: "Kanji Kentei 7–5 級",
    description:
      "Le palier charnière : environ 3 700 mots et 650 kanji, registres poli et familier maîtrisés.",
    chapterNumbers: [6, 7],
    comingSoon: true,
  },
  {
    level: 2,
    slug: "jlpt-n2",
    color: { badge: "bg-n2", surface: "border-n2/25 bg-n2/5", text: "text-n2" },
    title: "JLPT N2",
    titleJa: "日本語能力試験 N2",
    secondaryLabel: "Kanji Kentei 4–3 級",
    description: "Japonais de travail : presse, réunions, nuances de politesse (敬語).",
    chapterNumbers: [8],
    comingSoon: true,
  },
];

export const allUnits: CourseUnit[] = [
  unit01, unit02, unit03, unit04, unit05, unit06, unit07,
  unit08, unit09, unit10, unit11, unit12, unit13,
  unit14, unit15, unit16, unit17, unit18, unit19, unit20,
];

const unitMap = new Map(allUnits.map((unit) => [unit.id, unit]));

export function getUnitById(id: string): CourseUnit | undefined {
  return unitMap.get(id);
}

export function getChapter(number: number): Chapter | undefined {
  return chapters.find((chapter) => chapter.number === number);
}

export function getChapterUnits(number: number): CourseUnit[] {
  const chapter = getChapter(number);
  if (!chapter) return [];
  return chapter.unitIds
    .map((id) => unitMap.get(id))
    .filter((unit): unit is CourseUnit => unit !== undefined);
}

export function getJLPTLevelForUnit(unit: CourseUnit): JLPTLevel | undefined {
  return jlptLevels.find((level) => level.chapterNumbers.includes(unit.chapter));
}

export function getJLPTLevelBySlug(slug: string): JLPTLevel | undefined {
  return jlptLevels.find((level) => level.slug === slug);
}

export function getJLPTLevelChapters(level: JLPTLevel): Chapter[] {
  return level.chapterNumbers
    .map((number) => getChapter(number))
    .filter((chapter): chapter is Chapter => chapter !== undefined);
}

export function getJLPTLevelUnits(level: JLPTLevel): CourseUnit[] {
  return level.chapterNumbers.flatMap((number) => getChapterUnits(number));
}
