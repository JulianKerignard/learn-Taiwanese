/**
 * The kanji course — after the kana, the characters the course path uses.
 *
 * Shared contract between the data (src/data/ja/kanji.ts), the pure logic
 * (src/lib/kanji.ts) and the page (src/app/[lang]/kanji/).
 *
 * Lessons are not authored: a kanji is taught in the lesson of the course unit
 * where it first appears in the vocabulary, so the kanji course follows the
 * path the learner is already on. src/lib/kanji.ts derives them.
 */

export interface Kanji {
  /** The character itself, also its key. */
  char: string;
  /** French meanings, most common first: ["eau"], ["jour", "soleil"]. */
  meanings: string[];
  /** On'yomi in katakana: ["スイ"]. Empty when the kanji has none in common use. */
  onyomi: string[];
  /**
   * Kun'yomi in hiragana, okurigana after a dot: ["みず"], ["た.べる", "く.う"].
   * Empty when none in common use.
   */
  kunyomi: string[];
  strokes: number;
  /** JLPT level usually attributed to the kanji (5 = N5 … 1 = N1), from the common lists. */
  jlpt: 1 | 2 | 3 | 4 | 5;
  /** Optional French mnemonic about the shape or its components. */
  mnemonic?: string;
}

/** A course word that contains the kanji, used as an example with furigana. */
export interface KanjiExample {
  term: string;
  reading: string;
  romanization: string;
  french: string;
  /** Course unit that teaches the word: "unit-08". */
  unitId: string;
}

/** Derived, one per course unit that introduces new kanji. */
export interface KanjiLesson {
  /** The unit id it follows: "unit-08". */
  unitId: string;
  unitNumber: number;
  unitTitle: string;
  /** Proficiency level of that unit (5 = N5 …). */
  level: number;
  /** Chars first met in this unit, in order of appearance. */
  kanji: string[];
}

/** Per-kanji mastery, stored under KEYS.kanjiProgress keyed by the char. Same Leitner scheme as the kana. */
export type { KanaMastery as KanjiMastery } from "./kana";

export type KanjiProgress = Record<string, import("./kana").KanaMastery>;
