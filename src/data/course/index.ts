import type { CourseUnit, Chapter, HSKLevel } from "@/types/course";

// Chapter 1 - Fondations
import { unit01 } from "./chapter1/unit01";
import { unit02 } from "./chapter1/unit02";
import { unit03 } from "./chapter1/unit03";
import { unit31 } from "./chapter1/unit31";
import { unit04 } from "./chapter1/unit04";
import { unit05 } from "./chapter1/unit05";
import { unit06 } from "./chapter1/unit06";
import { unit32 } from "./chapter1/unit32";
import { unit51 } from "./chapter1/unit51";
import { unit52 } from "./chapter1/unit52";
import { unit56 } from "./chapter1/unit56";
import { unit57 } from "./chapter1/unit57";
import { unit58 } from "./chapter1/unit58";
import { unit59 } from "./chapter1/unit59";
import { unit60 } from "./chapter1/unit60";
import { unit07 } from "./chapter1/unit07";

// Chapter 2 - Survivre à Taiwan
import { unit08 } from "./chapter2/unit08";
import { unit09 } from "./chapter2/unit09";
import { unit10 } from "./chapter2/unit10";
import { unit11 } from "./chapter2/unit11";
import { unit12 } from "./chapter2/unit12";
import { unit13 } from "./chapter2/unit13";
import { unit33 } from "./chapter2/unit33";
import { unit41 } from "./chapter2/unit41";
import { unit42 } from "./chapter2/unit42";
import { unit45 } from "./chapter2/unit45";
import { unit46 } from "./chapter2/unit46";
import { unit47 } from "./chapter2/unit47";
import { unit53 } from "./chapter2/unit53";
import { unit61 } from "./chapter2/unit61";
import { unit62 } from "./chapter2/unit62";
import { unit63 } from "./chapter2/unit63";
import { unit64 } from "./chapter2/unit64";
import { unit65 } from "./chapter2/unit65";
import { unit66 } from "./chapter2/unit66";
import { unit67 } from "./chapter2/unit67";
import { unit68 } from "./chapter2/unit68";
import { unit69 } from "./chapter2/unit69";
import { unit70 } from "./chapter2/unit70";
import { unit71 } from "./chapter2/unit71";

// Chapter 3 - Construire des phrases
import { unit14 } from "./chapter3/unit14";
import { unit15 } from "./chapter3/unit15";
import { unit16 } from "./chapter3/unit16";
import { unit34 } from "./chapter3/unit34";
import { unit43 } from "./chapter3/unit43";
import { unit17 } from "./chapter3/unit17";
import { unit72 } from "./chapter3/unit72";
import { unit73 } from "./chapter3/unit73";
import { unit74 } from "./chapter3/unit74";
import { unit75 } from "./chapter3/unit75";
import { unit76 } from "./chapter3/unit76";
import { unit77 } from "./chapter3/unit77";

// Chapter 4 - Vie sociale
import { unit18 } from "./chapter4/unit18";
import { unit19 } from "./chapter4/unit19";
import { unit20 } from "./chapter4/unit20";
import { unit21 } from "./chapter4/unit21";
import { unit22 } from "./chapter4/unit22";
import { unit35 } from "./chapter4/unit35";
import { unit54 } from "./chapter4/unit54";
import { unit78 } from "./chapter4/unit78";
import { unit79 } from "./chapter4/unit79";
import { unit80 } from "./chapter4/unit80";
import { unit81 } from "./chapter4/unit81";
import { unit82 } from "./chapter4/unit82";
import { unit83 } from "./chapter4/unit83";

// Chapter 5 - Approfondir
import { unit23 } from "./chapter5/unit23";
import { unit24 } from "./chapter5/unit24";
import { unit25 } from "./chapter5/unit25";
import { unit26 } from "./chapter5/unit26";
import { unit27 } from "./chapter5/unit27";
import { unit44 } from "./chapter5/unit44";
import { unit48 } from "./chapter5/unit48";
import { unit49 } from "./chapter5/unit49";
import { unit50 } from "./chapter5/unit50";
import { unit55 } from "./chapter5/unit55";
import { unit84 } from "./chapter5/unit84";
import { unit85 } from "./chapter5/unit85";
import { unit86 } from "./chapter5/unit86";
import { unit87 } from "./chapter5/unit87";
import { unit88 } from "./chapter5/unit88";

// Chapter 6 - Pratique avancée
import { unit36 } from "./chapter6/unit36";
import { unit37 } from "./chapter6/unit37";
import { unit38 } from "./chapter6/unit38";
import { unit28 } from "./chapter6/unit28";

// Chapter 7 - Maîtriser
import { unit29 } from "./chapter6/unit29";
import { unit30 } from "./chapter6/unit30";

// Chapter 8 - Certification
import { unit39 } from "./chapter7/unit39";
import { unit40 } from "./chapter7/unit40";

export const chapters: Chapter[] = [
  {
    number: 1,
    title: "Prononciation et fondations",
    titleZh: "發音與基礎",
    description: "Comprendre comment le chinois fonctionne",
    unitIds: ["unit-01", "unit-02", "unit-03", "unit-31", "unit-04", "unit-05", "unit-06", "unit-51", "unit-52", "unit-56", "unit-57", "unit-58", "unit-59", "unit-60", "unit-32", "unit-07"],
  },
  {
    number: 2,
    title: "Survivre à Taiwan",
    titleZh: "生存",
    description: "Conversations essentielles pour le quotidien",
    unitIds: ["unit-08", "unit-09", "unit-10", "unit-11", "unit-12", "unit-13", "unit-33", "unit-41", "unit-42", "unit-45", "unit-46", "unit-47", "unit-53", "unit-61", "unit-62", "unit-63", "unit-64", "unit-65", "unit-66", "unit-67", "unit-68", "unit-69", "unit-70", "unit-71"],
  },
  {
    number: 3,
    title: "Construire des phrases",
    titleZh: "造句",
    description: "Grammaire essentielle et particules",
    unitIds: ["unit-14", "unit-15", "unit-16", "unit-34", "unit-43", "unit-17", "unit-72", "unit-73", "unit-74", "unit-75", "unit-76", "unit-77"],
  },
  {
    number: 4,
    title: "Vie sociale",
    titleZh: "社交",
    description: "Vie sociale et culture taiwanaise",
    unitIds: ["unit-18", "unit-19", "unit-20", "unit-21", "unit-22", "unit-35", "unit-54", "unit-78", "unit-79", "unit-80", "unit-81", "unit-82", "unit-83"],
  },
  {
    number: 5,
    title: "Approfondir",
    titleZh: "深入",
    description: "Grammaire avancée et nuances culturelles",
    unitIds: ["unit-23", "unit-24", "unit-25", "unit-26", "unit-27", "unit-44", "unit-48", "unit-49", "unit-50", "unit-55", "unit-84", "unit-85", "unit-86", "unit-87", "unit-88"],
  },
  {
    number: 6,
    title: "Pratique avancée",
    titleZh: "進階練習",
    description: "Dialogues, lecture et grammaire avancée",
    unitIds: ["unit-36", "unit-37", "unit-38", "unit-28"],
  },
  {
    number: 7,
    title: "Maîtriser",
    titleZh: "精通",
    description: "Bilan et consolidation",
    unitIds: ["unit-29", "unit-30"],
  },
  {
    number: 8,
    title: "Certification",
    titleZh: "認證",
    description: "Tests de niveau et examen final",
    unitIds: ["unit-39", "unit-40"],
  },
];

export const allUnits: CourseUnit[] = [
  unit01, unit02, unit03, unit31, unit04, unit05, unit06, unit51, unit52, unit56, unit57, unit58, unit59, unit60, unit32, unit07,
  unit08, unit09, unit10, unit11, unit12, unit13, unit33, unit41, unit42, unit45, unit46, unit47, unit53, unit61, unit62, unit63, unit64, unit65, unit66, unit67, unit68, unit69, unit70, unit71,
  unit14, unit15, unit16, unit34, unit43, unit17, unit72, unit73, unit74, unit75, unit76, unit77,
  unit18, unit19, unit20, unit21, unit22, unit35, unit54, unit78, unit79, unit80, unit81, unit82, unit83,
  unit23, unit24, unit25, unit26, unit27, unit44, unit48, unit49, unit50, unit55, unit84, unit85, unit86, unit87, unit88,
  unit36, unit37, unit38, unit28,
  unit29, unit30,
  unit39, unit40,
];

export function getUnitById(id: string): CourseUnit | undefined {
  return allUnits.find((u) => u.id === id);
}

export function getChapter(num: number): Chapter | undefined {
  return chapters.find((c) => c.number === num);
}

export function getChapterUnits(chapterNumber: number): CourseUnit[] {
  const chapter = getChapter(chapterNumber);
  if (!chapter) return [];
  return chapter.unitIds
    .map((id) => allUnits.find((u) => u.id === id))
    .filter((u): u is CourseUnit => u !== undefined);
}

// ── HSK / TOCFL Levels ──────────────────────────────────────────────

export const hskLevels: HSKLevel[] = [
  {
    level: 1,
    slug: "hsk-1",
    title: "Fondations & Survie",
    titleZh: "基礎",
    tocflLabel: "TOCFL Niveau 1 (入門級)",
    description: "Prononciation, tons, grammaire de base et conversations essentielles pour le quotidien",
    chapterNumbers: [1, 2],
  },
  {
    level: 2,
    slug: "hsk-2",
    title: "Communication",
    titleZh: "初級",
    tocflLabel: "TOCFL Niveau 2 (基礎級)",
    description: "Construction de phrases, vie sociale, culture taiwanaise et grammaire intermédiaire",
    chapterNumbers: [3, 4, 5],
  },
  {
    level: 3,
    slug: "hsk-3",
    title: "Approfondissement",
    titleZh: "中級",
    tocflLabel: "TOCFL Niveau 3 (進階級)",
    description: "Grammaire avancée, pratique intensive et préparation aux certifications",
    chapterNumbers: [6, 7, 8],
    comingSoon: true,
  },
  {
    level: 4,
    slug: "hsk-4",
    title: "Maîtrise",
    titleZh: "進階",
    tocflLabel: "TOCFL Niveau 4 (高階級)",
    description: "Expression complexe, lecture avancée et discussions abstraites",
    chapterNumbers: [],
    comingSoon: true,
  },
];

export function getHSKLevel(levelNumber: number): HSKLevel | undefined {
  return hskLevels.find((l) => l.level === levelNumber);
}

export function getHSKLevelForUnit(unit: CourseUnit): HSKLevel | undefined {
  return hskLevels.find((l) => l.chapterNumbers.includes(unit.chapter));
}

export function getHSKLevelUnits(level: HSKLevel): CourseUnit[] {
  return level.chapterNumbers.flatMap((n) => getChapterUnits(n));
}

export function getHSKLevelChapters(level: HSKLevel): Chapter[] {
  return level.chapterNumbers
    .map((n) => getChapter(n))
    .filter((c): c is Chapter => c !== undefined);
}
