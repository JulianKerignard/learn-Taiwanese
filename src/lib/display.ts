"use client";

// Which annotation a learner sees, and how a card's term takes furigana.
//
// The stored setting is what the learner chose; the effective mode is what the
// app shows. They differ in one case: an edition with a reading course stops
// showing the Latin annotation (rōmaji) once the learner reads the basic
// hiragana, so that the script is read instead of the transliteration.

import { hasKanji, splitOkurigana, toSegments } from "@/lib/japanese";
import { isMastered, kanaToRomaji } from "@/lib/kana";
import { currentLanguage, type LanguageConfig } from "@/lib/language";
import { KEYS, getSettings, storageGet } from "@/lib/storage";
import { useClientState } from "@/lib/use-client-state";
import type { FlashcardData, Segment, UserSettings } from "@/types";
import type { KanaProgress } from "@/types/kana";

export type DisplayMode = UserSettings["displayMode"];

/** What a learner who never opened the settings gets. Mirrors storage.ts. */
export const DEFAULT_DISPLAY_MODE: DisplayMode = "romanization";
export const DEFAULT_DAILY_NEW_CARDS = 10;
export const MIN_DAILY_NEW_CARDS = 1;
export const MAX_DAILY_NEW_CARDS = 50;

const DISPLAY_MODES: readonly DisplayMode[] = ["romanization", "reading", "both"];

/**
 * The stored settings with every field present. A reset writes `{}` to the
 * server and the sync brings it back down, so a stored object can lack fields
 * that getSettings() only defaults when the key is absent altogether.
 */
export function readSettings(): UserSettings {
  const stored = getSettings() as Partial<UserSettings>;
  const dailyNewCards = Number.isFinite(stored.dailyNewCards)
    ? clampDailyNewCards(stored.dailyNewCards as number)
    : DEFAULT_DAILY_NEW_CARDS;
  return {
    showEnglish: true,
    autoPlayAudio: false,
    theme: "light",
    ...stored,
    displayMode: DISPLAY_MODES.includes(stored.displayMode as DisplayMode)
      ? (stored.displayMode as DisplayMode)
      : DEFAULT_DISPLAY_MODE,
    dailyNewCards,
  };
}

export function clampDailyNewCards(value: number): number {
  return Math.min(MAX_DAILY_NEW_CARDS, Math.max(MIN_DAILY_NEW_CARDS, Math.round(value)));
}

// ── Weaning off rōmaji ────────────────────────────────────────────────

/**
 * The 46 basic hiragana, in gojūon order. Their ids are derived here rather
 * than read from src/data/ja/kana.ts: that module carries every sign's mnemonic
 * and every reading word, and would land in the bundle of each page that shows
 * a flashcard. The derivation is the one the data uses — "h-" plus the rōmaji —
 * and kanaToRomaji is the converter the validator checks every sign's rōmaji
 * against, so the two cannot drift apart without `npm run validate` failing.
 */
const BASIC_HIRAGANA =
  "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";

export const BASIC_HIRAGANA_IDS: readonly string[] = [...BASIC_HIRAGANA].map(
  (char) => `h-${kanaToRomaji(char)}`
);

/** Basic hiragana to master before rōmaji is dropped. The home page's kana card uses the same bar. */
export const HIRAGANA_READY = 40;

export function masteredBasicHiragana(progress: KanaProgress): number {
  return BASIC_HIRAGANA_IDS.filter((id) => isMastered(progress[id])).length;
}

/** True once the learner reads the basic hiragana well enough to do without rōmaji. */
export function readsBasicHiragana(progress: KanaProgress): boolean {
  return masteredBasicHiragana(progress) >= HIRAGANA_READY;
}

/** True when this edition drops its Latin annotation for this learner. */
export function isWeaned(
  settings: Pick<UserSettings, "weanRomanization">,
  language: LanguageConfig,
  kanaProgress: KanaProgress
): boolean {
  return (
    settings.weanRomanization !== false &&
    language.readingCourse !== null &&
    readsBasicHiragana(kanaProgress)
  );
}

/**
 * The annotation actually shown. A weaned learner keeps the native reading and
 * loses the Latin one: "romanization" and "both" both become "reading".
 */
export function effectiveDisplayMode(
  settings: Pick<UserSettings, "displayMode" | "weanRomanization">,
  language: LanguageConfig,
  kanaProgress: KanaProgress
): DisplayMode {
  const chosen = settings.displayMode ?? DEFAULT_DISPLAY_MODE;
  return isWeaned(settings, language, kanaProgress) ? "reading" : chosen;
}

/** Kana mastery, read only in editions that have a reading course. */
export function readKanaProgress(language: LanguageConfig): KanaProgress {
  return language.readingCourse ? storageGet<KanaProgress>(KEYS.kanaProgress, {}) : {};
}

/** Browser-only: the effective mode for the edition being viewed. */
export function readDisplayMode(): DisplayMode {
  const language = currentLanguage();
  return effectiveDisplayMode(readSettings(), language, readKanaProgress(language));
}

/**
 * The effective display mode, hydration-safe: the prerender and the hydrating
 * render get the default, the stored choice is read once hydration is over.
 */
export function useDisplayMode(): DisplayMode {
  const [mode] = useClientState(readDisplayMode, DEFAULT_DISPLAY_MODE);
  return mode;
}

// ── Furigana ──────────────────────────────────────────────────────────

/**
 * Editions whose terms take furigana: kanji glossed with a syllabary, which a
 * kanji course exists to wean the learner from. Mandarin annotates per
 * character (RubyText) and is left as it is.
 */
export const usesFurigana = (language: LanguageConfig): boolean => language.kanjiCourse !== null;

/**
 * Ruby segments for a card's term, or null when it has no kanji to gloss.
 *
 * Cards carry `segments` since the call sites pass them. Cards created before
 * that fall back to toSegments' coarse rule — the whole reading over the whole
 * word — refined by splitOkurigana so 食べる reads た over 食 rather than たべる
 * over all three: trailing kana shared by term and reading need no furigana.
 */
export function cardSegments(card: Pick<FlashcardData, "front" | "reading" | "segments">): Segment[] | null {
  if (!hasKanji(card.front)) return null;
  if (card.segments?.length) return card.segments;
  const reading = card.reading?.trim();
  if (!reading) return null;
  const coarse = toSegments({ term: card.front, reading, segments: undefined });
  return coarse.length === 1 && coarse[0].reading ? splitOkurigana(card.front, reading) : coarse;
}
