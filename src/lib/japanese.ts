// Japanese script and phonology primitives.
//
// The important difference from Mandarin: a reading does NOT map one syllable per
// character. 漢字 is two kanji for three mora (かん・じ), and 今日 reads きょう as a
// unit that cannot be split per character at all. So furigana placement is data,
// never something to compute from the characters — see toSegments below.

import type { Segment, VocabularyItem } from "@/types";

// ── Script detection ──────────────────────────────────────────────────

const HIRAGANA = /[ぁ-ゖゝ-ゟ]/;
const KATAKANA = /[ァ-ヺヽ-ヿㇰ-ㇿ]/;
const KANJI = /[一-鿿㐀-䶿豈-﫿]/;
const JAPANESE = /[ぁ-ゖァ-ヺ一-鿿㐀-䶿ー々]/;

export const isHiragana = (char: string) => HIRAGANA.test(char);
export const isKatakana = (char: string) => KATAKANA.test(char);
export const isKana = (char: string) => HIRAGANA.test(char) || KATAKANA.test(char) || char === "ー";
export const isKanji = (char: string) => KANJI.test(char);

/** True when the text contains any Japanese script (used to decide TTS and ruby). */
export const hasJapanese = (text: string) => JAPANESE.test(text);

export const hasKanji = (text: string) => [...text].some(isKanji);

// ── Mora ──────────────────────────────────────────────────────────────

// Small kana bind to the preceding mora: きょ is one mora, not two.
const SMALL_KANA = new Set([
  "ゃ", "ゅ", "ょ", "ぁ", "ぃ", "ぅ", "ぇ", "ぉ", "ゎ",
  "ャ", "ュ", "ョ", "ァ", "ィ", "ゥ", "ェ", "ォ", "ヮ",
]);

/**
 * Splits a kana reading into mora. ん, っ and ー each count as their own mora —
 * that is what the pitch accent is counted on.
 */
export function splitMora(kana: string): string[] {
  const mora: string[] = [];
  for (const char of kana) {
    if (SMALL_KANA.has(char) && mora.length > 0) {
      mora[mora.length - 1] += char;
    } else {
      mora.push(char);
    }
  }
  return mora;
}

export const countMora = (kana: string) => splitMora(kana).length;

// ── Pitch accent ──────────────────────────────────────────────────────

export type PitchPattern = "heiban" | "atamadaka" | "nakadaka" | "odaka";

export const PITCH_LABELS: Record<PitchPattern, { ja: string; fr: string; short: string }> = {
  heiban: { ja: "平板", fr: "Plat", short: "──" },
  atamadaka: { ja: "頭高", fr: "Aigu initial", short: "▔╲" },
  nakadaka: { ja: "中高", fr: "Aigu médian", short: "╱▔╲" },
  odaka: { ja: "尾高", fr: "Aigu final", short: "╱▔" },
};

/**
 * A Japanese word carries at most one downstep. Its position is the whole accent:
 * 0 means no downstep (heiban), 1 means the drop happens after the first mora
 * (atamadaka), and a downstep on the last mora is only audible on the particle
 * that follows (odaka) — which is why odaka and heiban sound identical alone.
 */
export function pitchPattern(downstep: number, moraCount: number): PitchPattern {
  if (downstep <= 0) return "heiban";
  if (downstep === 1) return "atamadaka";
  if (downstep >= moraCount) return "odaka";
  return "nakadaka";
}

/** High/low value per mora, plus the following particle. Drives the contour graph. */
export function pitchContour(kana: string, downstep: number): boolean[] {
  const count = countMora(kana);
  const levels: boolean[] = [];
  for (let i = 1; i <= count; i += 1) {
    if (downstep <= 0) {
      // Heiban: low first mora, high for the rest, particle stays high.
      levels.push(i > 1);
    } else {
      levels.push(i === 1 ? downstep === 1 : i > 1 && i <= downstep);
    }
  }
  // The trailing particle: high only when the word has no downstep.
  levels.push(downstep <= 0);
  return levels;
}

// ── Furigana segmentation ─────────────────────────────────────────────

/**
 * Resolves the ruby segments for a vocabulary item.
 *
 * Explicit segments always win. Without them the fallback is deliberately coarse:
 * the whole reading over the whole word. That is always correct, whereas guessing
 * a per-character split silently misplaces the reading on most words.
 */
export function toSegments(item: Pick<VocabularyItem, "term" | "reading" | "segments">): Segment[] {
  if (item.segments?.length) return item.segments;
  if (!hasKanji(item.term)) return [{ text: item.term }];
  return [{ text: item.term, reading: item.reading }];
}

/** Trailing kana shared by term and reading need no furigana (okurigana). */
export function splitOkurigana(term: string, kana: string): Segment[] {
  const chars = [...term];
  let tail = 0;
  while (
    tail < chars.length - 1 &&
    isKana(chars[chars.length - 1 - tail]) &&
    chars[chars.length - 1 - tail] === [...kana][[...kana].length - 1 - tail]
  ) {
    tail += 1;
  }
  if (tail === 0) return [{ text: term, reading: kana }];

  const stem = chars.slice(0, chars.length - tail).join("");
  const okurigana = chars.slice(chars.length - tail).join("");
  const stemReading = [...kana].slice(0, [...kana].length - tail).join("");
  return [{ text: stem, reading: stemReading }, { text: okurigana }];
}

// ── Collation ─────────────────────────────────────────────────────────

/** Gojūon ordering comes free from ICU — no hand-rolled table needed. */
export const japaneseCollator = new Intl.Collator("ja", { sensitivity: "base" });
