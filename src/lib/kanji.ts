// The kanji course: which kanji a unit introduces, example words, drills.
//
// Pure functions only — no React, no storage — so the validator derives the
// lessons exactly as the page does.
//
// Mastery reuses the kana course's Leitner scheme (src/lib/kana.ts) as is: the
// stored record is the same type (KanjiMastery = KanaMastery), only the key
// differs — the char here, Kana.id there.

import { isKanji } from "@/lib/japanese";
import {
  isLessonMastered as isKanaLessonMastered,
  lessonMastery as kanaLessonMastery,
  pickDrillItems as pickKanaDrillItems,
} from "@/lib/kana";
import type { VocabularyItem } from "@/types";
import type { Kana, KanaLesson } from "@/types/kana";
import type { Kanji, KanjiExample, KanjiLesson, KanjiProgress } from "@/types/kanji";

export { MASTERED_BOX, MAX_BOX, isMastered, nextBox } from "@/lib/kana";

/** What the derivation needs from a course unit — CourseUnit fits, and so does a lighter projection. */
export interface KanjiSourceUnit {
  id: string;
  number: number;
  title: string;
  vocabulary: Pick<VocabularyItem, "term" | "reading" | "romanization" | "french">[];
}

// ── Lookup ────────────────────────────────────────────────────────────

export function kanjiIndex(list: Kanji[]): Map<string, Kanji> {
  return new Map(list.map((k) => [k.char, k]));
}

/** The distinct kanji of a term, in order of appearance: 日本語 → 日, 本, 語. Kana and 々 are skipped. */
export function kanjiOf(term: string): string[] {
  return [...new Set([...term].filter(isKanji))];
}

// ── Lessons ───────────────────────────────────────────────────────────

const byNumber = <T extends { number: number }>(units: T[]): T[] =>
  [...units].sort((a, b) => a.number - b.number);

/**
 * One lesson per unit that introduces kanji. A kanji belongs to the first unit,
 * in path order (unit NUMBER, not id), whose vocabulary writes it. Chars absent
 * from `index` are left out: the page cannot teach a kanji it has no entry for,
 * and the validator reports them.
 */
export function deriveKanjiLessons(
  units: KanjiSourceUnit[],
  levelOf: (unitId: string) => number,
  index: Map<string, Kanji>
): KanjiLesson[] {
  const seen = new Set<string>();
  const lessons: KanjiLesson[] = [];
  for (const unit of byNumber(units)) {
    const fresh: string[] = [];
    for (const item of unit.vocabulary) {
      for (const char of kanjiOf(item.term)) {
        if (seen.has(char) || !index.has(char)) continue;
        seen.add(char);
        fresh.push(char);
      }
    }
    if (fresh.length === 0) continue;
    lessons.push({
      unitId: unit.id,
      unitNumber: unit.number,
      unitTitle: unit.title,
      level: levelOf(unit.id),
      kanji: fresh,
    });
  }
  return lessons;
}

/**
 * Course words that write `char`, shortest first — a two-character word shows
 * the kanji better than a set phrase — then earliest in the path, which is also
 * the most basic. A term taught twice counts once, at its first unit.
 */
export function examplesFor(char: string, units: KanjiSourceUnit[], limit: number): KanjiExample[] {
  const found = new Map<string, { example: KanjiExample; order: number }>();
  let order = 0;
  for (const unit of byNumber(units)) {
    for (const item of unit.vocabulary) {
      order++;
      if (found.has(item.term) || !item.term.includes(char)) continue;
      found.set(item.term, {
        example: {
          term: item.term,
          reading: item.reading,
          romanization: item.romanization,
          french: item.french,
          unitId: unit.id,
        },
        order,
      });
    }
  }
  return [...found.values()]
    .sort((a, b) => [...a.example.term].length - [...b.example.term].length || a.order - b.order)
    .slice(0, limit)
    .map(({ example }) => example);
}

// ── Mastery ───────────────────────────────────────────────────────────
//
// The kana helpers below are typed on Kana / KanaLesson but read nothing from
// them except the key (`id`) and the list of keys (`kana`). The adapters hand
// them exactly that, so the weighting and the thresholds live in one place.

const asKanaLesson = (lesson: KanjiLesson) => ({ kana: lesson.kanji }) as KanaLesson;

/** 0..1, same rule as a kana lesson: each kanji counts up to the mastery threshold. */
export const lessonMastery = (lesson: KanjiLesson, progress: KanjiProgress): number =>
  kanaLessonMastery(asKanaLesson(lesson), progress);

export const isLessonMastered = (lesson: KanjiLesson, progress: KanjiProgress): boolean =>
  isKanaLessonMastered(asKanaLesson(lesson), progress);

/** Weighted draw without replacement — low boxes and stale kanji first. See pickDrillItems in src/lib/kana.ts. */
export function pickKanjiDrillItems(
  pool: Kanji[],
  progress: KanjiProgress,
  count: number,
  rand: () => number
): Kanji[] {
  const byChar = kanjiIndex(pool);
  const keys = [...byChar.keys()].map((char) => ({ id: char }) as Kana);
  return pickKanaDrillItems(keys, progress, count, rand).map((key) => byChar.get(key.id)!);
}

// ── Multiple choice ───────────────────────────────────────────────────

export type KanjiQuizKind = "meaning" | "reading";

/** Katakana ァ…ヶ sit 0x60 above hiragana: folds an on'yomi onto the kun'yomi alphabet. */
function toHiragana(text: string): string {
  let out = "";
  for (const char of text) {
    const code = char.codePointAt(0)!;
    out += code >= 0x30a1 && code <= 0x30f6 ? String.fromCodePoint(code - 0x60) : char;
  }
  return out;
}

/** "た.べる" → "たべる", "ジッ" → "じっ": every reading as it would be heard. */
export function kanjiReadings(k: Kanji): string[] {
  return [...new Set([...k.onyomi, ...k.kunyomi].map((r) => toHiragana(r.replace(/[.-]/g, ""))))];
}

/**
 * "froid (temps)" and "froid" are one answer, and so are "s'égarer" and
 * "égarer": compared without the parenthesis, case, accents or a leading
 * reflexive pronoun. Falls back to the whole meaning when the parenthesis is
 * all there is, so no answer ever reduces to "".
 */
function meaningKey(meaning: string): string {
  const fold = (text: string) =>
    text
      .normalize("NFD")
      .replace(/\p{M}/gu, "")
      .toLowerCase()
      .replace(/[’]/g, "'")
      .replace(/^(se |s')/, "")
      .trim();
  return fold(meaning.replace(/\(.*?\)/g, "").trim()) || fold(meaning);
}

function shuffle<T>(items: T[], rand: () => number): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * `count` choices including `target`, in random order. Distractors come from
 * the same JLPT level first, then the neighbouring ones, then anything — a N1
 * kanji among N5 ones is too easy to rule out. No two options share a meaning
 * (kind "meaning") or a reading (kind "reading"): 冷 next to 寒 would be two
 * right answers to "froid", 橋 next to 箸 two right answers to "はし".
 */
export function buildKanjiOptions(
  target: Kanji,
  pool: Kanji[],
  count: number,
  rand: () => number,
  kind: KanjiQuizKind = "meaning"
): Kanji[] {
  const answers = (k: Kanji) => (kind === "meaning" ? k.meanings.map(meaningKey) : kanjiReadings(k));
  const others = [...kanjiIndex(pool).values()].filter((k) => k.char !== target.char);
  const distance = (k: Kanji) => Math.abs(k.jlpt - target.jlpt);
  const tiers = [
    others.filter((k) => distance(k) === 0),
    others.filter((k) => distance(k) === 1),
    others.filter((k) => distance(k) > 1),
  ];

  const chosen: Kanji[] = [target];
  const taken = new Set(answers(target));
  for (const k of tiers.flatMap((tier) => shuffle(tier, rand))) {
    if (chosen.length >= count) break;
    const own = answers(k);
    if (own.length === 0 || own.some((a) => taken.has(a))) continue;
    chosen.push(k);
    own.forEach((a) => taken.add(a));
  }
  return shuffle(chosen, rand);
}
