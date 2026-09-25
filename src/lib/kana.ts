// The kana reading course: segmentation, rōmaji and spaced mastery.
//
// Pure functions only — no React, no storage — so the validator can hold the
// data to the same rules the page applies (a word the validator accepts is a
// word the drill can read and grade).

import { splitMora } from "@/lib/japanese";
import type { Kana, KanaLesson, KanaMastery, KanaProgress, KanaWord } from "@/types/kana";

// ── Segmentation ──────────────────────────────────────────────────────

/**
 * Splits a kana term into the units the course teaches: きゃ and ファ are one
 * sign each, while っ/ッ and ー stand alone. That is exactly the mora split,
 * so the rule lives in one place (src/lib/japanese.ts).
 */
export const splitKana = (term: string): string[] => splitMora(term);

// ── Rōmaji ────────────────────────────────────────────────────────────
//
// Corpus convention: modified Hepburn typed wāpuro-style — no macrons (コーヒー
// "koohii", ぎんこう "ginkou"), ん always "n". The table is written once, in
// hiragana; katakana is folded onto it by code point, so the two scripts can
// never disagree about a sound.

const SYLLABLES: Record<string, string> = {
  あ: "a", い: "i", う: "u", え: "e", お: "o",
  か: "ka", き: "ki", く: "ku", け: "ke", こ: "ko",
  さ: "sa", し: "shi", す: "su", せ: "se", そ: "so",
  た: "ta", ち: "chi", つ: "tsu", て: "te", と: "to",
  な: "na", に: "ni", ぬ: "nu", ね: "ne", の: "no",
  は: "ha", ひ: "hi", ふ: "fu", へ: "he", ほ: "ho",
  ま: "ma", み: "mi", む: "mu", め: "me", も: "mo",
  や: "ya", ゆ: "yu", よ: "yo",
  ら: "ra", り: "ri", る: "ru", れ: "re", ろ: "ro",
  わ: "wa", を: "wo", ん: "n",
  が: "ga", ぎ: "gi", ぐ: "gu", げ: "ge", ご: "go",
  ざ: "za", じ: "ji", ず: "zu", ぜ: "ze", ぞ: "zo",
  だ: "da", ぢ: "ji", づ: "zu", で: "de", ど: "do",
  ば: "ba", び: "bi", ぶ: "bu", べ: "be", ぼ: "bo",
  ぱ: "pa", ぴ: "pi", ぷ: "pu", ぺ: "pe", ぽ: "po",
  ゔ: "vu",
  // Small signs read on their own (rare, but a drill may show one).
  ぁ: "a", ぃ: "i", ぅ: "u", ぇ: "e", ぉ: "o", ゃ: "ya", ゅ: "yu", ょ: "yo", ゎ: "wa",
};

/**
 * Combinations with a small vowel (or a small yu on a non-i sign), which follow
 * no rule worth encoding: the spelling was chosen sound by sound for loanwords.
 */
const COMBINATIONS: Record<string, string> = {
  ふぁ: "fa", ふぃ: "fi", ふぇ: "fe", ふぉ: "fo", ふゅ: "fyu",
  てぃ: "ti", でぃ: "di", とぅ: "tu", どぅ: "du", てゅ: "tyu", でゅ: "dyu",
  うぃ: "wi", うぇ: "we", うぉ: "wo", いぇ: "ye",
  しぇ: "she", じぇ: "je", ちぇ: "che",
  つぁ: "tsa", つぃ: "tsi", つぇ: "tse", つぉ: "tso",
  ゔぁ: "va", ゔぃ: "vi", ゔぇ: "ve", ゔぉ: "vo",
};

const SMALL_Y: Record<string, string> = { ゃ: "a", ゅ: "u", ょ: "o" };

const SOKUON = new Set(["っ", "ッ"]);
const CHOUON = "ー";

/** Katakana ァ…ヶ sit exactly 0x60 above their hiragana counterparts (ヴ → ゔ too). */
function toHiragana(text: string): string {
  let out = "";
  for (const char of text) {
    const code = char.codePointAt(0)!;
    out += code >= 0x30a1 && code <= 0x30f6 ? String.fromCodePoint(code - 0x60) : char;
  }
  return out;
}

/** Rōmaji of one unit from splitKana (never っ or ー, handled by the caller). */
function unitRomaji(unit: string): string {
  const hira = toHiragana(unit);
  if (SYLLABLES[hira]) return SYLLABLES[hira];
  if (COMBINATIONS[hira]) return COMBINATIONS[hira];

  const [head, small] = [...hira];
  const stem = SYLLABLES[head];
  if (stem && small && SMALL_Y[small] && stem.endsWith("i")) {
    // きゃ = ky + a, but し/ち/じ/ぢ already carry their palatal: sha, cha, ja.
    const consonant = stem === "shi" ? "sh" : stem === "chi" ? "ch" : stem === "ji" ? "j" : `${stem.slice(0, -1)}y`;
    return consonant + SMALL_Y[small];
  }
  // Unknown pairing: spell each sign, which at least never loses one.
  return [...hira].map((char) => SYLLABLES[char] ?? char).join("");
}

const VOWELS = "aeiou";

/**
 * Deterministic kana → rōmaji in corpus convention.
 *
 * - っ doubles the next consonant, and before "ch" writes "c": まっちゃ "maccha",
 *   ちょっと "chotto" — the corpus spelling, not the "tch" of strict Hepburn.
 *   A っ with no consonant after it (a clipped あっ) writes nothing.
 * - ー repeats the vowel before it: コーヒー "koohii".
 * - は and を are read as signs, never as particles: the word list holds words,
 *   not sentences, so こんにちは would come out "konnichiha" and is kept out.
 */
export function kanaToRomaji(term: string): string {
  let out = "";
  let doubled = false;
  for (const unit of splitKana(term)) {
    if (SOKUON.has(unit)) {
      doubled = true;
      continue;
    }
    if (unit === CHOUON) {
      const last = [...out].reverse().find((char) => VOWELS.includes(char));
      out += last ?? "";
      continue;
    }
    const romaji = unitRomaji(unit);
    if (doubled && romaji && !VOWELS.includes(romaji[0])) {
      out += romaji.startsWith("ch") ? "c" : romaji[0];
    }
    doubled = false;
    out += romaji;
  }
  return out;
}

// ── Lookup ────────────────────────────────────────────────────────────

export function kanaIndex(kana: Kana[]): Map<string, Kana> {
  return new Map(kana.map((k) => [k.char, k]));
}

export function lessonOf(lessons: KanaLesson[], kanaId: string): KanaLesson | undefined {
  return lessons.find((lesson) => lesson.kana.includes(kanaId));
}

/** Ids introduced by the given lessons — the page decides which lessons count as done. */
export function knownKanaIds(lessons: KanaLesson[], lessonIds: Iterable<string>): Set<string> {
  const wanted = new Set(lessonIds);
  return new Set(lessons.filter((lesson) => wanted.has(lesson.id)).flatMap((lesson) => lesson.kana));
}

/** Ids introduced by every lesson up to and including `lessonId`, in learning order. */
export function kanaIdsThrough(lessons: KanaLesson[], lessonId: string): Set<string> {
  const end = lessons.findIndex((lesson) => lesson.id === lessonId);
  return new Set(lessons.slice(0, end + 1).flatMap((lesson) => lesson.kana));
}

/** The kana ids a term is written with, or null if one unit is not a taught sign. */
export function wordKanaIds(term: string, index: Map<string, Kana>): string[] | null {
  const ids: string[] = [];
  for (const unit of splitKana(term)) {
    const k = index.get(unit);
    if (!k) return null;
    ids.push(k.id);
  }
  return ids;
}

/** Words the learner can read with only the signs in `knownIds`. */
export function readableWords(words: KanaWord[], knownIds: Set<string>, kana: Kana[]): KanaWord[] {
  const index = kanaIndex(kana);
  return words.filter((word) => {
    const ids = wordKanaIds(word.term, index);
    return ids !== null && ids.every((id) => knownIds.has(id));
  });
}

// ── Typed answers ─────────────────────────────────────────────────────
//
// A learner who types "si" for し has read the sign correctly; they learnt
// another romanisation, or type the way a Japanese IME expects. The drill
// grades reading, not spelling, so Kunrei and wāpuro spellings are accepted.

const VARIANTS: Record<string, string[]> = {
  shi: ["si"], chi: ["ti"], tsu: ["tu"], fu: ["hu"], ji: ["zi"],
  sha: ["sya"], shu: ["syu"], sho: ["syo"],
  cha: ["tya", "cya"], chu: ["tyu", "cyu"], cho: ["tyo", "cyo"],
  ja: ["zya", "jya"], ju: ["zyu", "jyu"], jo: ["zyo", "jyo"],
  n: ["nn"],
  ti: ["thi"], di: ["dhi"], tu: ["twu"], du: ["dwu"], dyu: ["dhu"],
  she: ["sye"], je: ["zye", "jye"], che: ["tye", "cye"],
};

/**
 * By id, for the signs whose Hepburn rōmaji is shared with another sign:
 * ぢ/づ also read "di"/"du" (how an IME types them), を also reads "o" (how it
 * is pronounced), and ウォ types "who" — but never "o", it does sound "wo".
 */
const VARIANTS_BY_ID: Record<string, string[]> = {
  dji: ["di"],
  dzu: ["du", "dzu"],
  wo: ["o"],
  who: ["who"],
};

export function acceptedRomaji(k: Kana): string[] {
  const suffix = k.id.slice(2);
  const byId = VARIANTS_BY_ID[suffix] ?? [];
  // ウォ must not inherit を's "o": its variants come from its id alone.
  const byRomaji = suffix === "who" ? [] : VARIANTS[k.romaji] ?? [];
  return [...new Set([k.romaji, ...byRomaji, ...byId])];
}

const MACRONS: Record<string, string> = { ā: "aa", ī: "ii", ū: "uu", ē: "ee", ō: "oo", â: "aa", î: "ii", û: "uu", ê: "ee", ô: "oo" };

/**
 * Lowercase, full-width folded, spaces, hyphens and apostrophes dropped ("n'"
 * is "n"). A macron is expanded to a doubled vowel; ō is ambiguous between the
 * corpus' "oo" and "ou", which is harmless for single signs, the only thing
 * graded by typing.
 */
export function normalizeAnswer(input: string): string {
  return input
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[āīūēōâîûêô]/g, (char) => MACRONS[char])
    .replace(/[\s'’-]/g, "");
}

export function isAcceptedAnswer(k: Kana, input: string): boolean {
  const answer = normalizeAnswer(input);
  return answer !== "" && acceptedRomaji(k).some((romaji) => normalizeAnswer(romaji) === answer);
}

// ── Leitner mastery ───────────────────────────────────────────────────

export const MAX_BOX = 5;
/** Three correct answers in a row: enough to call a sign read, not yet automatic. */
export const MASTERED_BOX = 3;

/**
 * Up one box on a right answer, straight back to 0 on a wrong one — the plain
 * Leitner rule. A sign misread once is a sign not yet read; the climb back is
 * quick because boxes, not days, gate it.
 */
export function nextBox(m: KanaMastery | undefined, correct: boolean, now: number): KanaMastery {
  const previous = m ?? { box: 0, seen: 0, correct: 0, lastSeen: 0 };
  // Stored progress is user data: a box outside 0..MAX_BOX (or NaN) is clamped
  // before the step, so the result always lands in bounds.
  const box = clampBox(previous.box);
  return {
    box: correct ? Math.min(MAX_BOX, box + 1) : 0,
    seen: previous.seen + 1,
    correct: previous.correct + (correct ? 1 : 0),
    lastSeen: now,
  };
}

function clampBox(box: number | undefined): number {
  return Number.isFinite(box) ? Math.max(0, Math.min(MAX_BOX, Math.floor(box!))) : 0;
}

export const isMastered = (m: KanaMastery | undefined): boolean => (m?.box ?? 0) >= MASTERED_BOX;

/**
 * 0..1. Each sign counts up to the mastery threshold, so the bar moves on every
 * right answer instead of jumping when a sign crosses box 3.
 */
export function lessonMastery(lesson: KanaLesson, progress: KanaProgress): number {
  if (lesson.kana.length === 0) return 0;
  const total = lesson.kana.reduce(
    (sum, id) => sum + Math.min(progress[id]?.box ?? 0, MASTERED_BOX) / MASTERED_BOX,
    0
  );
  return total / lesson.kana.length;
}

export const isLessonMastered = (lesson: KanaLesson, progress: KanaProgress): boolean =>
  lesson.kana.every((id) => isMastered(progress[id]));

function shuffle<T>(items: T[], rand: () => number): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * Weighted draw without replacement. Low boxes weigh the most (box 0 is 36
 * times box 5), and within that the signs answered longest ago are favoured —
 * by rank, not by elapsed time, so no clock is needed and a sign just answered
 * is the least likely to come straight back.
 *
 * `rand` is injected: the caller owns the randomness (lint forbids it in
 * render), and a seeded one makes the draw reproducible.
 */
export function pickDrillItems(
  pool: Kana[],
  progress: KanaProgress,
  count: number,
  rand: () => number
): Kana[] {
  const unique = [...new Map(pool.map((k) => [k.id, k])).values()];
  // Rank the distinct answer times, not the signs: signs answered at the same
  // moment — typically never, lastSeen 0 — share a rank, so a fresh lesson's
  // signs weigh the same instead of favouring whichever comes first in `pool`.
  const lastSeen = (k: Kana) => progress[k.id]?.lastSeen ?? 0;
  const times = [...new Set(unique.map(lastSeen))].sort((a, b) => a - b);
  const rankOf = new Map(times.map((time, rank) => [time, rank]));
  const staleness = (k: Kana) => (times.length > 1 ? 1 - rankOf.get(lastSeen(k))! / (times.length - 1) : 1);

  const candidates = unique.map((k) => {
    const box = clampBox(progress[k.id]?.box);
    return { k, weight: (MAX_BOX + 1 - box) ** 2 * (0.5 + staleness(k)) };
  });

  const picked: Kana[] = [];
  while (picked.length < count && candidates.length > 0) {
    const total = candidates.reduce((sum, c) => sum + c.weight, 0);
    let target = rand() * total;
    let index = candidates.findIndex((c) => (target -= c.weight) < 0);
    if (index === -1) index = candidates.length - 1;
    picked.push(candidates[index].k);
    candidates.splice(index, 1);
  }
  return picked;
}

/**
 * `count` choices including `target`, in random order. Distractors are drawn
 * from `pool` by how likely they are to be mistaken for the target: declared
 * confusables, then the same row (か vs き), then the same group, then the same
 * script. No two options share a character or an accepted rōmaji — ぢ next to
 * じ would be two right answers, and so would ヂ next to ディ (ヂ accepts "di"),
 * チ next to ティ ("ti") or お next to を ("o").
 */
export function buildOptions(target: Kana, pool: Kana[], count: number, rand: () => number): Kana[] {
  const others = pool.filter((k) => k.id !== target.id);
  const confusables = new Set(target.confusables ?? []);
  const tiers = [
    others.filter((k) => confusables.has(k.id)),
    others.filter((k) => !confusables.has(k.id) && k.script === target.script && k.row === target.row),
    others.filter(
      (k) => !confusables.has(k.id) && k.script === target.script && k.row !== target.row && k.group === target.group
    ),
    others.filter((k) => !confusables.has(k.id) && k.script === target.script && k.group !== target.group),
    others.filter((k) => !confusables.has(k.id) && k.script !== target.script),
  ];

  const readings = (k: Kana) => acceptedRomaji(k).map(normalizeAnswer);
  const chosen: Kana[] = [target];
  const chars = new Set([target.char]);
  const romaji = new Set(readings(target));
  for (const k of tiers.flatMap((tier) => shuffle(tier, rand))) {
    if (chosen.length >= count) break;
    const own = readings(k);
    if (chars.has(k.char) || own.some((r) => romaji.has(r))) continue;
    chosen.push(k);
    chars.add(k.char);
    own.forEach((r) => romaji.add(r));
  }
  return shuffle(chosen, rand);
}
