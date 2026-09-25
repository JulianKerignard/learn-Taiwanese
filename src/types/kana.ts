/**
 * The kana reading course — learning to read hiragana and katakana before the
 * course path asks the learner to read anything.
 *
 * Shared contract between the data (src/data/ja/kana.ts), the pure logic
 * (src/lib/kana.ts) and the page (src/app/[lang]/kana/).
 */

export type KanaScript = "hiragana" | "katakana";

/**
 * - basic:    the 46 signs of the gojūon table (あ … ん / ア … ン)
 * - dakuten:  the 25 voiced and half-voiced signs (が … ぽ)
 * - yoon:     the 33 contracted sounds (きゃ … ぴょ)
 * - extended: katakana-only combinations for foreign sounds (ファ, ティ, ヴァ…)
 * - special:  marks that are not syllables of their own — small っ/ッ (doubled
 *             consonant) and ー (long vowel, katakana). Their `romaji` is a
 *             description key ("sokuon", "chouon"), not a sound.
 */
export type KanaGroup = "basic" | "dakuten" | "yoon" | "extended" | "special";

export interface Kana {
  /** Stable id, never shown: "h-ka", "k-kya", "k-fa". Script prefix + rōmaji. */
  id: string;
  script: KanaScript;
  /** One sign, or two for a yōon / extended combination: "か", "きゃ", "ファ". */
  char: string;
  /** Modified Hepburn, lowercase: "shi", "chi", "tsu", "fu", "ji", "n", "wo". */
  romaji: string;
  group: KanaGroup;
  /** Row of the table the sign belongs to, as its first sign's rōmaji: "a", "ka", "ga", "kya". */
  row: string;
  /** French mnemonic describing the shape. Required for basic signs. */
  mnemonic?: string;
  /** Ids of signs that are easily mistaken for this one (シ/ツ, ソ/ン, ぬ/め). */
  confusables?: string[];
}

export interface KanaLesson {
  /** "h-01" … ; order of the array is the learning order. */
  id: string;
  script: KanaScript;
  /** French: "Les voyelles", "La ligne か". */
  title: string;
  /** Short French introduction (1–3 sentences): what is new, what to watch for. */
  intro: string;
  /** Ids of the signs this lesson introduces. */
  kana: string[];
}

export interface KanaWord {
  /** Written entirely in kana (may include っ/ッ and ー). */
  term: string;
  romaji: string;
  french: string;
}

/** Per-sign mastery, stored under KEYS.kanaProgress keyed by Kana.id. */
export interface KanaMastery {
  /** Leitner box, 0 (new/failed) to 5 (mastered). */
  box: number;
  seen: number;
  correct: number;
  /** ms timestamp of the last answer. */
  lastSeen: number;
}

export type KanaProgress = Record<string, KanaMastery>;
