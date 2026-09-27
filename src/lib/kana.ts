// The kana reading course: segmentation, rōmaji and spaced mastery.
//
// Pure functions only — no React, no storage — so the validator can hold the
// data to the same rules the page applies (a word the validator accepts is a
// word the drill can read and grade).

import { splitMora } from "@/lib/japanese";
import type { Kana, KanaDaily, KanaLesson, KanaMastery, KanaProgress, KanaWord } from "@/types/kana";

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

// ── Rōmaji → kana, and typed sentence answers ─────────────────────────
//
// The reverse of kanaToRomaji, for grading what a learner types in a free-text
// exercise. It reads wāpuro input and the corpus' own Hepburn alike: "shi" and
// "si", "tsu" and "tu", "konnichiwa" (Hepburn) and "konnnichiha" (IME).

/** One rōmaji spelling → the kana it may stand for. The first is canonical. */
const ROMAJI_TO_KANA: Record<string, string[]> = (() => {
  const table: Record<string, string[]> = {};
  const add = (romaji: string, ...kana: string[]) => {
    const list = (table[romaji] ??= []);
    for (const k of kana) if (!list.includes(k)) list.push(k);
  };

  // Plain signs, from the table kanaToRomaji reads. ぢ/づ and the small signs
  // are left to the explicit spellings below, ん to the parser (it needs context).
  for (const [kana, romaji] of Object.entries(SYLLABLES)) {
    if ("ぁぃぅぇぉゃゅょゎんぢづ".includes(kana)) continue;
    add(romaji, kana);
  }
  // Kunrei / IME spellings of the same signs.
  add("si", "し"); add("zi", "じ"); add("hu", "ふ");
  add("ti", "ち"); add("tu", "つ");
  // Yōon: き + ゃ = kya…, and the palatal rows that drop the y.
  for (const head of ["き", "ぎ", "に", "ひ", "び", "ぴ", "み", "り"]) {
    const consonant = SYLLABLES[head].slice(0, -1);
    for (const [small, vowel] of Object.entries(SMALL_Y)) add(`${consonant}y${vowel}`, head + small);
  }
  for (const [small, vowel] of Object.entries(SMALL_Y)) {
    for (const c of ["sh", "sy"]) add(c + vowel, "し" + small);
    for (const c of ["ch", "cy", "ty"]) add(c + vowel, "ち" + small);
    for (const c of ["j", "jy", "zy"]) add(c + vowel, "じ" + small);
  }
  // Loanword combinations, as kanaToRomaji spells them; ti/tu/di/du keep their
  // Kunrei and IME readings (ち, つ, ぢ, づ) as alternatives.
  for (const [kana, romaji] of Object.entries(COMBINATIONS)) add(romaji, kana);
  add("di", "ぢ"); add("du", "づ"); add("dzu", "づ");
  add("thi", "てぃ"); add("dhi", "でぃ"); add("twu", "とぅ"); add("dwu", "どぅ");
  add("dhu", "でゅ"); add("who", "うぉ"); add("sye", "しぇ"); add("zye", "じぇ");
  add("jye", "じぇ"); add("tye", "ちぇ"); add("cye", "ちぇ");
  // Small signs typed on their own, IME style.
  for (const [vowel, small] of Object.entries({ a: "ぁ", i: "ぃ", u: "ぅ", e: "ぇ", o: "ぉ" })) {
    add(`x${vowel}`, small); add(`l${vowel}`, small);
  }
  for (const [small, vowel] of Object.entries(SMALL_Y)) {
    add(`xy${vowel}`, small); add(`ly${vowel}`, small);
  }
  for (const r of ["xtu", "ltu", "xtsu", "ltsu"]) add(r, "っ");
  add("xwa", "ゎ"); add("lwa", "ゎ");
  return table;
})();

const LONGEST_ROMAJI = Math.max(...Object.keys(ROMAJI_TO_KANA).map((r) => r.length));
const MAX_CANDIDATES = 64;

/** A macron is a long vowel the corpus spells two ways: ō is "oo" or "ou". */
const MACRON_SPELLINGS: Record<string, string[]> = {
  ā: ["aa"], ī: ["ii"], ū: ["uu"], ē: ["ee", "ei"], ō: ["oo", "ou"],
  â: ["aa"], î: ["ii"], û: ["uu"], ê: ["ee", "ei"], ô: ["oo", "ou"],
};

function expandMacrons(token: string): string[] {
  let out = [""];
  for (const char of token) {
    const spellings = MACRON_SPELLINGS[char] ?? [char];
    out = out.flatMap((prefix) => spellings.map((s) => prefix + s)).slice(0, MAX_CANDIDATES);
  }
  return out;
}

const PARTICLES: Record<string, string[]> = { wa: ["は", "わ"], e: ["へ", "え"], o: ["を", "お"] };
const SYLLABLES_BY_VOWEL: Record<string, string> = { a: "あ", i: "い", u: "う", e: "え", o: "お" };

const isVowel = (char: string | undefined) => char !== undefined && VOWELS.includes(char);

/**
 * Every kana reading of one space-delimited rōmaji token, or [] when a letter
 * cannot be read. `particle` marks a token that follows another one: typed on
 * its own there, "wa", "e" and "o" are the particles は, へ and を, and a final
 * "wa" is は too (konnichiwa, jitsu wa), as the corpus writes them.
 */
function readToken(token: string, particle: boolean): string[] {
  if (particle && token in PARTICLES) return PARTICLES[token];

  const results: string[] = [];
  const walk = (i: number, kana: string) => {
    if (results.length >= MAX_CANDIDATES) return;
    if (i >= token.length) {
      results.push(kana);
      return;
    }
    const char = token[i];
    const next = token[i + 1];
    if (char === "'") return walk(i + 1, kana);
    if (char === "-") return walk(i + 1, kana + CHOUON);
    if (char === "n") {
      if (next === "'") return walk(i + 2, kana + "ん");
      // nn before a vowel is ん + な-row ("konnichiwa", "zannen"); anywhere
      // else it is the IME's ん ("konnnichiha", "honn"). Hepburn marks the
      // other reading with an apostrophe: "kin'en".
      if (next === "n") return walk(isVowel(token[i + 2]) || token[i + 2] === "y" ? i + 1 : i + 2, kana + "ん");
      if (!isVowel(next) && next !== "y") return walk(i + 1, kana + "ん");
    }
    // Traditional Hepburn writes ん as "m" before b and p: "shimbun", "tempura".
    if (char === "m" && (next === "b" || next === "p")) return walk(i + 1, kana + "ん");
    // A doubled consonant is っ: "gakkou", "kitte", "maccha", and Hepburn "tch".
    if (!isVowel(char) && char !== "n" && (next === char || (char === "t" && token.startsWith("ch", i + 1)))) {
      return walk(i + 1, kana + "っ");
    }
    for (let length = Math.min(LONGEST_ROMAJI, token.length - i); length > 0; length--) {
      const spellings = ROMAJI_TO_KANA[token.slice(i, i + length)];
      if (!spellings) continue;
      const final = i + length === token.length && i > 0;
      const readings = final && token.slice(i, i + length) === "wa" ? [...spellings, "は"] : spellings;
      for (const reading of readings) walk(i + length, kana + reading);
      return;
    }
  };
  walk(0, "");
  return results;
}


/** Punctuation and spacing a typed answer may add, drop or type half-width. */
const ANSWER_NOISE = /[\s、。，．,.!?！？・:;：；「」『』()（）［］[\]"“”…〜~]/g;

/** Half-width kana and full-width Latin folded (NFKC), punctuation and spaces dropped. */
function normalizeTyped(text: string): string {
  return text.normalize("NFKC").toLowerCase().replace(ANSWER_NOISE, "");
}

/** Hiragana with ー spelt out as the vowel it lengthens: コーヒー → こおひい. */
function phonetic(kana: string): string {
  let out = "";
  for (const char of toHiragana(kana)) {
    if (char === CHOUON) {
      const vowel = kanaToRomaji(out).slice(-1);
      out += SYLLABLES_BY_VOWEL[vowel] ?? CHOUON;
    } else {
      out += char;
    }
  }
  return out;
}


const ALL_KANA = /^[ぁ-ゖァ-ヺー]+$/;
const ROMAJI_INPUT = /^[a-zāīūēōâîûêô'’\s-]+$/;

/**
 * Every hiragana string the rōmaji `input` may stand for (canonical first), or
 * [] when it is not rōmaji. Spaces separate words; punctuation is ignored.
 * Accepts wāpuro input (nn and n' for ん, a doubled consonant for っ, "-" for ー,
 * "xtu"/"la" for small signs) as well as the corpus' Hepburn. Long vowels are
 * kept as typed ("koohii" こおひい, "ginkou" ぎんこう); a macron is read "oo".
 */
export function romajiKanaReadings(input: string): string[] {
  const text = input.normalize("NFKC").toLowerCase().replace(/’/g, "'").replace(/[、。，．,.!?！？]/g, " ").trim();
  if (!text || !ROMAJI_INPUT.test(text)) return [];

  let readings = [""];
  const tokens = text.split(/\s+/);
  for (const [index, token] of tokens.entries()) {
    const options = [...new Set(expandMacrons(token).flatMap((t) => readToken(t, index > 0)))];
    if (options.length === 0) return [];
    readings = readings.flatMap((prefix) => options.map((o) => prefix + o)).slice(0, MAX_CANDIDATES);
  }
  return readings;
}

/**
 * Grades a typed answer against a Japanese `expected` sentence.
 *
 * - Punctuation, spaces and character width never matter: "テレビを見ますか" is
 *   "テレビを見ますか。", ﾃﾚﾋﾞ is テレビ.
 * - Rōmaji is accepted when the expected answer is written in kana only, since
 *   then the kana *is* its reading; script (hiragana/katakana) cannot be typed
 *   in rōmaji, so it is not graded on that path. Long vowels must match as
 *   the kana spell them: "koohii" is コーヒー, "kouhii" is not.
 * - An expected answer with kanji needs the exact characters: the exercises
 *   carry no reading of their answer, so a kana or rōmaji spelling of it cannot
 *   be checked and is refused rather than guessed.
 */
export function matchesTypedAnswer(expected: string, answer: string): boolean {
  const target = normalizeTyped(expected);
  const typed = normalizeTyped(answer);
  if (!typed || !target) return false;
  if (typed === target) return true;

  if (!ALL_KANA.test(target)) return false;
  const reading = phonetic(target);
  return romajiKanaReadings(answer).some((kana) => phonetic(kana) === reading);
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

// ── Daily session ─────────────────────────────────────────────────────

const DAY_MS = 24 * 60 * 60 * 1000;

/**
 * Days to wait before a sign comes back, by Leitner box: a sign just failed
 * (box 0) is due again at once, then 1, 2, 4, 7 and 14 days. The boxes alone
 * never said *when* — this is what turns them into daily practice.
 */
export const REVIEW_INTERVAL_DAYS = [0, 1, 2, 4, 7, 14] as const;

/**
 * A few hours of slack: a sign answered at 20:00 yesterday is due at 16:00
 * today, so a learner who practises in the afternoon is not a day behind.
 */
const DUE_SLACK_MS = 4 * 60 * 60 * 1000;

export function dueAt(m: KanaMastery): number {
  const days = REVIEW_INTERVAL_DAYS[clampBox(m.box)];
  return days === 0 ? m.lastSeen : m.lastSeen + days * DAY_MS - DUE_SLACK_MS;
}

/** Signs already met whose review is due, the weakest and most overdue first. */
export function dueKana(kana: Kana[], progress: KanaProgress, now: number): Kana[] {
  return kana
    .filter((k) => {
      const m = progress[k.id];
      return m !== undefined && m.seen > 0 && dueAt(m) <= now;
    })
    .sort((a, b) => {
      const ma = progress[a.id]!;
      const mb = progress[b.id]!;
      return clampBox(ma.box) - clampBox(mb.box) || dueAt(ma) - dueAt(mb);
    });
}

/** The next lessons, in learning order, that still hold a sign never answered. */
export function upcomingLessons(lessons: KanaLesson[], progress: KanaProgress): KanaLesson[] {
  return lessons.filter((lesson) => lesson.kana.some((id) => !(progress[id]?.seen)));
}

export type DailyGoal = KanaDaily["minutes"];

/** Rough cost of each activity, from timing the lesson and drill screens. */
export const SECONDS_PER_REVIEW = 8;
export const SECONDS_PER_NEW_SIGN = 75;

/**
 * Beyond this many signs due, the day is spent consolidating: learning new
 * signs on top of a backlog is how learners end up recognising none of them.
 */
export const BACKLOG_LIMIT = 40;

/** At most this many practice questions, however long the goal: past that, repetition stops paying. */
export const MAX_PRACTICE = 60;
/**
 * Consolidation questions per sign known: 60 questions on the five vowels is
 * rote, not practice. When the cap leaves time over, a further lesson fits.
 */
export const PRACTICE_PER_SIGN = 6;

export interface DailyPlan {
  /** Due signs to review first, weakest first. */
  review: Kana[];
  /** Due signs left for another day because the time budget ran out. */
  deferred: number;
  /** Lessons to learn today, in order. */
  newLessons: KanaLesson[];
  /** Why no new lesson today, when there is none. */
  noNewReason: "backlog" | "finished" | null;
  /**
   * Consolidation questions that fill the rest of the goal, drawn at session
   * time from every sign met so far (today's included), weakest first.
   */
  practice: number;
  estimateSeconds: number;
}

const newSignsIn = (lesson: KanaLesson, progress: KanaProgress) =>
  lesson.kana.filter((id) => !progress[id]?.seen).length;

/**
 * What today's session holds, sized to the learner's goal:
 *
 * 1. the due reviews, weakest first — always the most fragile signs;
 * 2. new lessons in learning order, up to 2 for 15 minutes and 3 for 30, as
 *    long as reviews and lessons stay within 85 % of the goal — the first
 *    lesson always fits, so the learner moves forward every day unless a
 *    backlog says otherwise;
 * 3. consolidation questions until the goal is filled, at most
 *    PRACTICE_PER_SIGN per sign known.
 */
export function planDailySession(
  lessons: KanaLesson[],
  kana: Kana[],
  progress: KanaProgress,
  now: number,
  goal: DailyGoal
): DailyPlan {
  const budget = goal * 60;
  const due = dueKana(kana, progress, now);
  const upcoming = upcomingLessons(lessons, progress);

  const reviewSlots = Math.max(10, Math.floor((budget * 0.6) / SECONDS_PER_REVIEW));
  const review = due.slice(0, reviewSlots);
  let cost = review.length * SECONDS_PER_REVIEW;

  const newLessons: KanaLesson[] = [];
  let noNewReason: DailyPlan["noNewReason"] = null;
  if (upcoming.length === 0) noNewReason = "finished";
  else if (due.length > BACKLOG_LIMIT) noNewReason = "backlog";
  else {
    const maxLessons = goal >= 30 ? 3 : 2;
    for (const lesson of upcoming.slice(0, maxLessons)) {
      const lessonCost = newSignsIn(lesson, progress) * SECONDS_PER_NEW_SIGN;
      if (newLessons.length > 0 && cost + lessonCost > budget * 0.85) break;
      newLessons.push(lesson);
      cost += lessonCost;
    }
  }

  const known =
    Object.values(progress).filter((m) => m.seen > 0).length +
    newLessons.reduce((sum, lesson) => sum + newSignsIn(lesson, progress), 0);
  const practiceCount = Math.min(
    MAX_PRACTICE,
    known * PRACTICE_PER_SIGN,
    Math.max(0, Math.floor((budget - cost) / SECONDS_PER_REVIEW))
  );
  return {
    review,
    deferred: due.length - review.length,
    newLessons,
    noNewReason,
    practice: practiceCount,
    estimateSeconds: cost + practiceCount * SECONDS_PER_REVIEW,
  };
}

/** Local calendar day, "YYYY-MM-DD" — the key of KanaDaily.days. */
export function dayKey(time: number): string {
  const d = new Date(time);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

/**
 * Consecutive days with a finished session, ending today — or yesterday, so the
 * streak is not shown as lost in the morning before today's session.
 */
export function dailyStreak(daily: KanaDaily, now: number): number {
  const doneOn = (time: number) => daily.days[dayKey(time)]?.done === true;
  let cursor = doneOn(now) ? now : now - DAY_MS;
  let streak = 0;
  // Step by calendar day at noon, so a DST change never skips or repeats a day.
  const noon = new Date(cursor);
  noon.setHours(12, 0, 0, 0);
  cursor = noon.getTime();
  while (doneOn(cursor)) {
    streak++;
    const previous = new Date(cursor);
    previous.setDate(previous.getDate() - 1);
    cursor = previous.getTime();
  }
  return streak;
}
