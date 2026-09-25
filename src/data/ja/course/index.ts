import type { CourseUnit, Chapter, ProficiencyLevel } from "@/types/course";

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

// Chapitre 4 — Se déplacer et habiter
import { unit21 } from "./chapter4/unit21";
import { unit22 } from "./chapter4/unit22";
import { unit23 } from "./chapter4/unit23";
import { unit24 } from "./chapter4/unit24";
import { unit25 } from "./chapter4/unit25";
import { unit26 } from "./chapter4/unit26";

// Chapitre 5 — Grammaire intermédiaire
import { unit27 } from "./chapter5/unit27";
import { unit28 } from "./chapter5/unit28";
import { unit29 } from "./chapter5/unit29";
import { unit30 } from "./chapter5/unit30";
import { unit31 } from "./chapter5/unit31";
import { unit32 } from "./chapter5/unit32";
import { unit45 } from "./chapter5/unit45";
import { unit46 } from "./chapter5/unit46";
import { unit47 } from "./chapter5/unit47";
import { unit48 } from "./chapter5/unit48";
import { unit49 } from "./chapter5/unit49";
import { unit50 } from "./chapter5/unit50";
import { unit51 } from "./chapter5/unit51";
import { unit52 } from "./chapter5/unit52";

// Chapitre 6 — Travail et société
import { unit33 } from "./chapter6/unit33";
import { unit34 } from "./chapter6/unit34";
import { unit35 } from "./chapter6/unit35";
import { unit36 } from "./chapter6/unit36";
import { unit37 } from "./chapter6/unit37";

// Chapitre 7 — Nuances et registres
import { unit38 } from "./chapter7/unit38";
import { unit39 } from "./chapter7/unit39";
import { unit40 } from "./chapter7/unit40";
import { unit41 } from "./chapter7/unit41";

// Chapitre 8 — Vers l'autonomie
import { unit42 } from "./chapter8/unit42";
import { unit43 } from "./chapter8/unit43";
import { unit44 } from "./chapter8/unit44";

export const chapters: Chapter[] = [
  {
    number: 1,
    title: "Les kana et les sons",
    titleNative: "かなと発音",
    description: "Lire le japonais avant de le parler : hiragana, katakana, mores et accent",
    unitIds: ["unit-01", "unit-02", "unit-03", "unit-04", "unit-05", "unit-06", "unit-07"],
  },
  {
    number: 2,
    title: "Premiers échanges",
    titleNative: "はじめての会話",
    description: "Se présenter, compter, désigner : les structures qui reviennent partout",
    unitIds: ["unit-08", "unit-09", "unit-10", "unit-11", "unit-12", "unit-13"],
  },
  {
    number: 3,
    title: "La vie quotidienne",
    titleNative: "毎日の生活",
    description: "Verbes, heure, restaurant, achats, transports : le japonais utile dès le premier jour",
    unitIds: ["unit-14", "unit-15", "unit-16", "unit-17", "unit-18", "unit-19", "unit-20"],
  },
  {
    number: 4,
    title: "Se déplacer et habiter",
    titleNative: "移動と住まい",
    description:
      "Enchaîner les actions avec la forme en て, demander une permission, chercher un logement et dire ce qu'on veut",
    unitIds: ["unit-21", "unit-22", "unit-23", "unit-24", "unit-25", "unit-26"],
  },
  {
    number: 5,
    title: "Grammaire intermédiaire",
    titleNative: "中級文法",
    description:
      "Style neutre, conditionnels, passif, causatif et relatives, puis transitivité, but, concession, temps et discours rapporté : la charpente de la phrase longue",
    unitIds: [
      "unit-27", "unit-28", "unit-29", "unit-30", "unit-31", "unit-32",
      "unit-45", "unit-46", "unit-47", "unit-48", "unit-49", "unit-50", "unit-51", "unit-52",
    ],
  },
  {
    number: 6,
    title: "Travail et société",
    titleNative: "仕事と社会",
    description:
      "Keigo, téléphone et courriels, hôpital et démarches administratives : le japonais des situations formelles",
    unitIds: ["unit-33", "unit-34", "unit-35", "unit-36", "unit-37"],
  },
  {
    number: 7,
    title: "Nuances et registres",
    titleNative: "ニュアンスと文体",
    description:
      "Auxiliaires d'aspect, ouï-dire et suppositions, onomatopées et formes contractées : choisir le bon ton",
    unitIds: ["unit-38", "unit-39", "unit-40", "unit-41"],
  },
  {
    number: 8,
    title: "Vers l'autonomie",
    titleNative: "自立へ向けて",
    description:
      "Lire un texte argumenté, la presse et les documents officiels, et comprendre les expressions imagées",
    unitIds: ["unit-42", "unit-43", "unit-44"],
  },
];

/**
 * JLPT runs from N5 (entry) to N1 (hardest): the number decreases as level rises.
 * `level` keeps the N number so the UI can print it directly.
 */
export const levels: ProficiencyLevel[] = [
  {
    level: 5,
    slug: "jlpt-n5",
    color: { badge: "bg-n5", surface: "border-n5/25 bg-n5/5", text: "text-n5" },
    title: "JLPT N5",
    titleNative: "日本語能力試験 N5",
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
    titleNative: "日本語能力試験 N4",
    secondaryLabel: "Kanji Kentei 9–8 級",
    description:
      "Environ 1 500 mots et 300 kanji. Tenir une conversation quotidienne et lire des textes courts.",
    chapterNumbers: [4, 5],
  },
  {
    level: 3,
    slug: "jlpt-n3",
    color: { badge: "bg-n3", surface: "border-n3/25 bg-n3/5", text: "text-n3" },
    title: "JLPT N3",
    titleNative: "日本語能力試験 N3",
    secondaryLabel: "Kanji Kentei 7–5 級",
    description:
      "Le palier charnière : environ 3 700 mots et 650 kanji, registres poli et familier maîtrisés.",
    chapterNumbers: [6, 7],
  },
  {
    level: 2,
    slug: "jlpt-n2",
    color: { badge: "bg-n2", surface: "border-n2/25 bg-n2/5", text: "text-n2" },
    title: "JLPT N2",
    titleNative: "日本語能力試験 N2",
    secondaryLabel: "Kanji Kentei 4–3 級",
    description: "Japonais de travail : presse, réunions, nuances de politesse (敬語).",
    chapterNumbers: [8],
  },
];

export const allUnits: CourseUnit[] = [
  unit01, unit02, unit03, unit04, unit05, unit06, unit07,
  unit08, unit09, unit10, unit11, unit12, unit13,
  unit14, unit15, unit16, unit17, unit18, unit19, unit20,
  unit21, unit22, unit23, unit24, unit25, unit26,
  unit27, unit28, unit29, unit30, unit31, unit32,
  unit45, unit46, unit47, unit48, unit49, unit50, unit51, unit52,
  unit33, unit34, unit35, unit36, unit37,
  unit38, unit39, unit40, unit41,
  unit42, unit43, unit44,
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

export function getLevelForUnit(unit: CourseUnit): ProficiencyLevel | undefined {
  return levels.find((level) => level.chapterNumbers.includes(unit.chapter));
}

export function getLevelBySlug(slug: string): ProficiencyLevel | undefined {
  return levels.find((level) => level.slug === slug);
}

export function getLevelChapters(level: ProficiencyLevel): Chapter[] {
  return level.chapterNumbers
    .map((number) => getChapter(number))
    .filter((chapter): chapter is Chapter => chapter !== undefined);
}

export function getLevelUnits(level: ProficiencyLevel): CourseUnit[] {
  return level.chapterNumbers.flatMap((number) => getChapterUnits(number));
}
