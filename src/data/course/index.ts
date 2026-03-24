import type { CourseUnit, Chapter } from "@/types/course";

// Chapter 1 - Fondations
import { unit01 } from "./chapter1/unit01";
import { unit02 } from "./chapter1/unit02";
import { unit03 } from "./chapter1/unit03";
import { unit31 } from "./chapter1/unit31";
import { unit04 } from "./chapter1/unit04";
import { unit05 } from "./chapter1/unit05";
import { unit06 } from "./chapter1/unit06";
import { unit32 } from "./chapter1/unit32";
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

// Chapter 3 - Construire des phrases
import { unit14 } from "./chapter3/unit14";
import { unit15 } from "./chapter3/unit15";
import { unit16 } from "./chapter3/unit16";
import { unit34 } from "./chapter3/unit34";
import { unit43 } from "./chapter3/unit43";
import { unit17 } from "./chapter3/unit17";

// Chapter 4 - Vie sociale
import { unit18 } from "./chapter4/unit18";
import { unit19 } from "./chapter4/unit19";
import { unit20 } from "./chapter4/unit20";
import { unit21 } from "./chapter4/unit21";
import { unit22 } from "./chapter4/unit22";
import { unit35 } from "./chapter4/unit35";

// Chapter 5 - Approfondir
import { unit23 } from "./chapter5/unit23";
import { unit24 } from "./chapter5/unit24";
import { unit25 } from "./chapter5/unit25";
import { unit26 } from "./chapter5/unit26";
import { unit27 } from "./chapter5/unit27";
import { unit44 } from "./chapter5/unit44";

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
    unitIds: ["unit-01", "unit-02", "unit-03", "unit-31", "unit-04", "unit-05", "unit-06", "unit-32", "unit-07"],
  },
  {
    number: 2,
    title: "Survivre à Taiwan",
    titleZh: "生存",
    description: "Conversations essentielles pour le quotidien",
    unitIds: ["unit-08", "unit-09", "unit-10", "unit-11", "unit-12", "unit-13", "unit-33", "unit-41", "unit-42"],
  },
  {
    number: 3,
    title: "Construire des phrases",
    titleZh: "造句",
    description: "Grammaire essentielle et particules",
    unitIds: ["unit-14", "unit-15", "unit-16", "unit-34", "unit-43", "unit-17"],
  },
  {
    number: 4,
    title: "Vie sociale",
    titleZh: "社交",
    description: "Vie sociale et culture taiwanaise",
    unitIds: ["unit-18", "unit-19", "unit-20", "unit-21", "unit-22", "unit-35"],
  },
  {
    number: 5,
    title: "Approfondir",
    titleZh: "深入",
    description: "Grammaire avancée et nuances culturelles",
    unitIds: ["unit-23", "unit-24", "unit-25", "unit-26", "unit-27", "unit-44"],
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
  unit01, unit02, unit03, unit31, unit04, unit05, unit06, unit32, unit07,
  unit08, unit09, unit10, unit11, unit12, unit13, unit33, unit41, unit42,
  unit14, unit15, unit16, unit34, unit43, unit17,
  unit18, unit19, unit20, unit21, unit22, unit35,
  unit23, unit24, unit25, unit26, unit27, unit44,
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

function getChapterUnits(chapterNumber: number): CourseUnit[] {
  const chapter = getChapter(chapterNumber);
  if (!chapter) return [];
  return chapter.unitIds
    .map((id) => allUnits.find((u) => u.id === id))
    .filter((u): u is CourseUnit => u !== undefined);
}
