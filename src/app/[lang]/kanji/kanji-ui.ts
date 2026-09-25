// Pure helpers for the kanji page: the compact props, quiz building, search and
// the mastery colours. No React and no storage. The derivation of the lessons
// and the Leitner rules live in src/lib/kanji.ts (and src/lib/kana.ts).

import { romajiKanaReadings } from "@/lib/kana";
import { buildKanjiOptions, kanjiReadings, pickKanjiDrillItems } from "@/lib/kanji";
import type { Segment } from "@/types";
import type { Kanji, KanjiLesson, KanjiProgress } from "@/types/kanji";

// ── Props ─────────────────────────────────────────────────────────────

/** An example word, sent once and shared by every kanji it writes. */
export interface KanjiWord {
  term: string;
  reading: string;
  romanization: string;
  french: string;
  /** Furigana placement, from the vocabulary item (or the whole reading over the word). */
  segments: Segment[];
}

/** A kanji with its example words, as indices into the `words` prop. */
export interface KanjiCard extends Kanji {
  examples: number[];
}

/** A lesson as the page shows it: the course ones, then those from lessons and readings. */
export interface PageLesson extends KanjiLesson {
  /** False for the kanji the course path never writes (standalone lessons, graded readings). */
  path: boolean;
}

// ── Display ───────────────────────────────────────────────────────────

/** "jour · soleil": the two most common meanings, which is what a quiz option can hold. */
export const meaningLabel = (k: Kanji, max = 2) => k.meanings.slice(0, max).join(" · ");

/** Card ground by Leitner box — the same scale as the kana chart. undefined = never answered. */
export function boxClass(box: number | undefined): string {
  if (box === undefined) return "border-stone-200 bg-white";
  if (box === 0) return "border-rose-200 bg-rose-50";
  if (box <= 2) return "border-amber-200 bg-amber-50";
  if (box <= 4) return "border-emerald-200 bg-emerald-50";
  return "border-emerald-300 bg-emerald-100";
}

export const LEGEND: { label: string; box: number | undefined }[] = [
  { label: "Jamais vu", box: undefined },
  { label: "À revoir", box: 0 },
  { label: "En cours", box: 1 },
  { label: "Maîtrisé", box: 3 },
  { label: "Acquis", box: 5 },
];

// ── Search ────────────────────────────────────────────────────────────

const fold = (text: string) =>
  text
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .trim();

/** Katakana folded onto hiragana, so an on'yomi is found by a hiragana query. */
function toHiragana(text: string): string {
  let out = "";
  for (const char of text) {
    const code = char.codePointAt(0)!;
    out += code >= 0x30a1 && code <= 0x30f6 ? String.fromCodePoint(code - 0x60) : char;
  }
  return out;
}

/**
 * A query understood three ways: the kanji itself, a French meaning (accents
 * ignored), or a reading typed in kana or in rōmaji.
 */
export function kanjiMatcher(query: string): ((k: Kanji) => boolean) | null {
  const q = query.trim();
  if (!q) return null;
  const meaning = fold(q);
  const kana = new Set([toHiragana(q), ...romajiKanaReadings(q)].filter(Boolean));
  return (k) => {
    if (q.includes(k.char)) return true;
    if (k.meanings.some((m) => fold(m).includes(meaning))) return true;
    const readings = kanjiReadings(k);
    return [...kana].some((r) => readings.some((reading) => reading.startsWith(r)));
  };
}

// ── Questions ─────────────────────────────────────────────────────────

export type QuizMode = "meaning" | "reading" | "word";
export type DrillMode = QuizMode | "mixed";

export type Question =
  /** The kanji alone: which meaning? */
  | { kind: "meaning"; target: Kanji; options: Kanji[] }
  /** An example word: how is it read? The options are kana readings. */
  | { kind: "reading"; target: Kanji; word: KanjiWord; options: string[] }
  /** An example word with the kanji blanked out: which kanji goes there? */
  | { kind: "word"; target: Kanji; word: KanjiWord; options: Kanji[] };

export interface QuizContext {
  /** Kanji the distractors come from. Widened to `all` when too small. */
  pool: KanjiCard[];
  all: KanjiCard[];
  words: KanjiWord[];
}

function shuffle<T>(items: T[], rand: () => number): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

const MIN_POOL = 8;

function optionPool(ctx: QuizContext): Kanji[] {
  return ctx.pool.length >= MIN_POOL ? ctx.pool : [...ctx.pool, ...ctx.all];
}

/** The mask shown in place of the kanji in a "word" question. */
export const BLANK = "〇";

/**
 * Readings of other example words, the closest in length first: a two-mora
 * answer among six-mora ones would give itself away.
 */
function readingOptions(word: KanjiWord, ctx: QuizContext, rand: () => number): string[] {
  const length = [...word.reading].length;
  const seen = new Set([word.reading]);
  const candidates = shuffle(
    ctx.pool.flatMap((k) => k.examples.map((i) => ctx.words[i])).filter((w) => w && w.reading !== word.reading),
    rand
  ).sort((a, b) => Math.abs([...a.reading].length - length) - Math.abs([...b.reading].length - length));
  const out = [word.reading];
  for (const w of candidates.length >= 3 ? candidates : [...candidates, ...shuffle(ctx.words, rand)]) {
    if (out.length >= 4) break;
    if (seen.has(w.reading)) continue;
    seen.add(w.reading);
    out.push(w.reading);
  }
  return shuffle(out, rand);
}

const VOICED: Record<string, string[]> = {
  か: ["が"], き: ["ぎ"], く: ["ぐ"], け: ["げ"], こ: ["ご"],
  さ: ["ざ"], し: ["じ"], す: ["ず"], せ: ["ぜ"], そ: ["ぞ"],
  た: ["だ"], ち: ["ぢ", "じ"], つ: ["づ", "ず"], て: ["で"], と: ["ど"],
  は: ["ば", "ぱ"], ひ: ["び", "ぴ"], ふ: ["ぶ", "ぷ"], へ: ["べ", "ぺ"], ほ: ["ぼ", "ぽ"],
};

const hiragana = (text: string) =>
  text.replace(/[\u30a1-\u30f6]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60));

/**
 * Whether `k` could stand in the blank of `word` and still be read as printed:
 * one of its readings (stem of a kun'yomi included), or that reading with
 * rendaku or a final っ, sits where the blank is in the word's reading.
 */
function fitsBlank(k: Kanji, word: KanjiWord, char: string): boolean {
  const chars = [...word.term];
  const at = chars.indexOf(char);
  const forms = new Set<string>();
  for (const r of [...k.onyomi, ...k.kunyomi]) {
    const base = hiragana(r.replace(/-/g, ""));
    for (const form of new Set([base.split(".")[0], base.replace(".", "")])) {
      if (!form) continue;
      forms.add(form);
      for (const v of VOICED[form[0]] ?? []) forms.add(v + form.slice(1));
      if (form.length > 1) forms.add(form.slice(0, -1) + "っ");
    }
  }
  const reading = word.reading;
  const last = at === chars.length - 1;
  return [...forms].some((f) =>
    at === 0 ? reading.startsWith(f) : last ? reading.endsWith(f) : reading.includes(f)
  );
}

export function buildQuestion(target: KanjiCard, mode: QuizMode, ctx: QuizContext, rand: () => number): Question {
  const examples = target.examples.map((i) => ctx.words[i]).filter(Boolean);
  // A word question on a one-kanji word shows nothing but the blank and the reading.
  const wordExamples = examples.filter((w) => [...w.term].length > 1);
  if (mode === "reading" && examples.length > 0) {
    // The two first examples are the shortest, the clearest for a reading.
    const word = examples[Math.floor(rand() * Math.min(2, examples.length))];
    return { kind: "reading", target, word, options: readingOptions(word, ctx, rand) };
  }
  if (mode === "word" && wordExamples.length > 0) {
    const word = wordExamples[Math.floor(rand() * Math.min(2, wordExamples.length))];
    // Distractors never share a reading with the target: the reading is printed.
    // Nor may one fit the blank through the word's own reading: 日本 (にほん) is
    // read with a に that 日's entry does not list, and 二本 is also にほん.
    const pool = optionPool(ctx).filter((k) => !fitsBlank(k, word, target.char));
    return { kind: "word", target, word, options: buildKanjiOptions(target, pool, 4, rand, "reading") };
  }
  return { kind: "meaning", target, options: buildKanjiOptions(target, optionPool(ctx), 4, rand, "meaning") };
}

/** Draws `count` targets, repeating the pool when it is smaller, never twice in a row. */
export function drawTargets(pool: KanjiCard[], progress: KanjiProgress, count: number, rand: () => number): KanjiCard[] {
  if (pool.length === 0) return [];
  const byChar = new Map(pool.map((k) => [k.char, k]));
  const out: KanjiCard[] = [];
  while (out.length < count) {
    const round = pickKanjiDrillItems(pool, progress, count - out.length, rand).map((k) => byChar.get(k.char)!);
    if (round.length > 1 && out.length > 0 && round[0].char === out[out.length - 1].char) {
      [round[0], round[1]] = [round[1], round[0]];
    }
    out.push(...round);
  }
  return out.slice(0, count);
}

const MODES: QuizMode[] = ["meaning", "reading", "word"];

export function drillQuestions(
  targets: KanjiCard[],
  mode: DrillMode,
  ctx: QuizContext,
  rand: () => number
): Question[] {
  return targets.map((k, i) => buildQuestion(k, mode === "mixed" ? MODES[i % MODES.length] : mode, ctx, rand));
}

const LESSON_QUIZ_MAX = 20;

/**
 * The quiz at the end of a lesson: every new kanji once for its meaning, then
 * a second pass on the word level — read an example, or find the kanji missing
 * from one — and two or three kanji of earlier lessons to keep them alive.
 */
export function buildLessonQuiz(
  lesson: KanjiLesson,
  earlier: KanjiCard[],
  byChar: Map<string, KanjiCard>,
  ctx: Omit<QuizContext, "pool">,
  progress: KanjiProgress,
  rand: () => number
): Question[] {
  const fresh = lesson.kanji.map((c) => byChar.get(c)).filter((k): k is KanjiCard => !!k);
  const pool = [...earlier, ...fresh];
  const full = { ...ctx, pool };

  const review = pickKanjiDrillItems(earlier, progress, Math.min(3, earlier.length), rand)
    .map((k) => byChar.get(k.char))
    .filter((k): k is KanjiCard => !!k);
  const room = Math.max(3, LESSON_QUIZ_MAX - fresh.length - review.length);
  const second = shuffle(fresh, rand).slice(0, room);

  const first = shuffle(fresh, rand).map((k) => buildQuestion(k, "meaning", full, rand));
  const later = shuffle(
    [
      ...second.map((k, i) => buildQuestion(k, i % 2 === 0 ? "reading" : "word", full, rand)),
      ...review.map((k) => buildQuestion(k, "meaning", full, rand)),
    ],
    rand
  );
  // The seam between the passes must not ask the same kanji twice in a row.
  if (later.length > 1 && first.length > 0 && later[0].target.char === first[first.length - 1].target.char) {
    [later[0], later[1]] = [later[1], later[0]];
  }
  return [...first, ...later];
}

/** The word with the kanji replaced by the blank: 日本 → 〇本. */
export const blanked = (word: KanjiWord, char: string) => word.term.split(char).join(BLANK);
