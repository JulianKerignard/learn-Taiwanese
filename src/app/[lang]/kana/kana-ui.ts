// Pure helpers for the kana page: chart layout, quiz building, word scripts.
// No React and no storage, so they can be reasoned about on their own. The
// spaced-mastery rules themselves live in src/lib/kana.ts.

import {
  buildOptions,
  kanaIdsThrough,
  kanaIndex,
  kanaToRomaji,
  pickDrillItems,
  readableWords,
  wordKanaIds,
} from "@/lib/kana";
import type { Kana, KanaLesson, KanaProgress, KanaScript, KanaWord } from "@/types/kana";

// ── Chart layout ──────────────────────────────────────────────────────

export interface ChartRow {
  row: string;
  /** One slot per column; null is a gap in the table (the や and わ rows). */
  cells: (Kana | null)[];
}

const GOJUON_COLUMNS = "aiueo";
const YOON_COLUMNS = "auo";

function rowsOf(signs: Kana[]): Map<string, Kana[]> {
  const rows = new Map<string, Kana[]>();
  for (const k of signs) rows.set(k.row, [...(rows.get(k.row) ?? []), k]);
  return rows;
}

/** Signs laid out in columns by their final vowel: か き く け こ, や _ ゆ _ よ. */
function grid(signs: Kana[], columns: string): ChartRow[] {
  return [...rowsOf(signs)].map(([row, members]) => {
    const cells: (Kana | null)[] = Array.from({ length: columns.length }, () => null);
    for (const k of members) {
      const column = columns.indexOf(k.romaji.slice(-1));
      // A sign whose vowel has no column (ん) takes the first free slot.
      const slot = column >= 0 && cells[column] === null ? column : cells.indexOf(null);
      if (slot >= 0) cells[slot] = k;
    }
    return { row, cells };
  });
}

export interface ChartSection {
  key: string;
  title: string;
  hint: string;
  columns: string[];
  rows: ChartRow[];
  /** Free-flowing list instead of a grid (extended and special signs). */
  flow?: Kana[];
}

export function chartSections(kana: Kana[], script: KanaScript): ChartSection[] {
  const signs = kana.filter((k) => k.script === script);
  const of = (group: Kana["group"]) => signs.filter((k) => k.group === group);
  const basic = of("basic");
  const n = basic.filter((k) => k.row === "n");

  const sections: ChartSection[] = [
    {
      key: "basic",
      title: "Les signes de base",
      hint: "Le gojūon : cinq voyelles, puis une consonne devant chacune.",
      columns: [...GOJUON_COLUMNS],
      rows: grid(basic.filter((k) => k.row !== "n"), GOJUON_COLUMNS),
      flow: n,
    },
    {
      key: "dakuten",
      title: "Dakuten et handakuten",
      hint: "Deux petits traits ゛ rendent le son voisé (k → g), un petit rond ゜ change h en p.",
      columns: [...GOJUON_COLUMNS],
      rows: grid(of("dakuten"), GOJUON_COLUMNS),
    },
    {
      key: "yoon",
      title: "Les sons contractés (yōon)",
      hint: "Un signe en i suivi d'un petit ゃ, ゅ ou ょ : les deux se lisent en une seule syllabe.",
      columns: [...YOON_COLUMNS].map((v) => `y${v}`),
      rows: grid(of("yoon"), YOON_COLUMNS),
    },
  ];
  const extended = of("extended");
  if (extended.length > 0) {
    sections.push({
      key: "extended",
      title: "Les sons étrangers",
      hint: "Des combinaisons propres aux katakana, inventées pour les mots venus d'ailleurs.",
      columns: [],
      rows: [],
      flow: extended,
    });
  }
  const special = of("special");
  if (special.length > 0) {
    sections.push({
      key: "special",
      title: "Les signes spéciaux",
      hint: "Ils ne se lisent pas seuls : ils modifient le son voisin.",
      columns: [],
      rows: [],
      flow: special,
    });
  }
  return sections;
}

// ── Descriptions ──────────────────────────────────────────────────────

/** What a special sign does, shown where other signs show their rōmaji. */
export function romajiLabel(k: Kana): string {
  if (k.romaji === "sokuon") return "consonne doublée";
  if (k.romaji === "chouon") return "voyelle longue";
  return k.romaji;
}

export const isSpecial = (k: Kana) => k.group === "special";

/**
 * An explanation for the signs that have no mnemonic of their own: they are
 * built from signs already learned, and saying which is the useful part.
 */
export function describeSign(k: Kana): string | null {
  if (k.mnemonic) return k.mnemonic;
  const chars = [...k.char];
  if (chars.length === 1) {
    const [base, mark] = [...k.char.normalize("NFD")];
    if (mark === "゙") {
      return `C'est ${base} avec le dakuten ゛ (deux petits traits en haut à droite) : le son devient voisé, « ${k.romaji} ».`;
    }
    if (mark === "゚") {
      return `C'est ${base} avec le handakuten ゜ (un petit rond en haut à droite) : le h devient un p, « ${k.romaji} ».`;
    }
    return null;
  }
  const [head, small] = chars;
  if (k.group === "yoon") {
    return `${head} suivi d'un petit ${small} : on ne lit pas deux syllabes, on les fond en une seule, « ${k.romaji} ».`;
  }
  return `${head} suivi d'un petit ${small} : une combinaison créée pour un son étranger, « ${k.romaji} ».`;
}

// ── Pools ─────────────────────────────────────────────────────────────

export function lessonsOf(lessons: KanaLesson[], script: KanaScript): KanaLesson[] {
  return lessons.filter((lesson) => lesson.script === script);
}

/** Signs of every lesson of the script up to and including this one. */
export function knownThrough(lessons: KanaLesson[], lesson: KanaLesson): Set<string> {
  return kanaIdsThrough(lessonsOf(lessons, lesson.script), lesson.id);
}

export function seenIds(progress: KanaProgress): Set<string> {
  return new Set(Object.entries(progress).filter(([, m]) => m.seen > 0).map(([id]) => id));
}

export type WordScript = KanaScript | "mixed";

export function wordScript(word: KanaWord, index: Map<string, Kana>): WordScript {
  const ids = wordKanaIds(word.term, index) ?? [];
  if (ids.every((id) => id.startsWith("h-"))) return "hiragana";
  if (ids.every((id) => id.startsWith("k-"))) return "katakana";
  return "mixed";
}

// ── Questions ─────────────────────────────────────────────────────────

export type DrillMode = "kana-romaji" | "romaji-kana" | "type" | "listen";

export type Question =
  | { kind: "choice"; mode: "kana-romaji" | "romaji-kana" | "listen"; target: Kana; options: Kana[] }
  | { kind: "type"; target: Kana }
  /** Special signs are read inside a word: っ in きって, ー in コーヒー. */
  | { kind: "word"; target: Kana; word: KanaWord; options: string[] };

function shuffle<T>(items: T[], rand: () => number): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * A word question for っ/ッ or ー. The distractors are the classic misreadings:
 * the sign ignored (きって read "kite"), or っ read as a full つ ("kitsute").
 */
function wordQuestion(
  target: Kana,
  words: KanaWord[],
  kana: Kana[],
  known: Set<string>,
  rand: () => number
): Question | null {
  const withSign = words.filter((w) => w.term.includes(target.char));
  if (withSign.length === 0) return null;
  const readable = readableWords(withSign, new Set([...known, target.id]), kana);
  const candidates = readable.length > 0 ? readable : withSign;
  const word = candidates[Math.floor(rand() * candidates.length)];

  const variants = [
    kanaToRomaji(word.term.replace(target.char, "")),
    kanaToRomaji(word.term.split(target.char).join("")),
  ];
  if (target.romaji === "sokuon") {
    variants.push(kanaToRomaji(word.term.replace(target.char, target.script === "hiragana" ? "つ" : "ツ")));
  } else {
    // ー read as a written う: コーヒー "kouhii".
    variants.push(kanaToRomaji(word.term.replace(target.char, "ウ")));
  }
  const options = [...new Set([word.romaji, ...variants])].filter(Boolean).slice(0, 4);
  if (options.length < 2) return null;
  return { kind: "word", target, word, options: shuffle(options, rand) };
}

/** Distractors come from `pool`, widened to the whole script when it is too small to offer 4. */
function optionPool(pool: Kana[], kana: Kana[], script: KanaScript): Kana[] {
  const drillable = pool.filter((k) => !isSpecial(k));
  if (drillable.length >= 6) return drillable;
  const ids = new Set(drillable.map((k) => k.id));
  return [...drillable, ...kana.filter((k) => k.script === script && k.group === "basic" && !ids.has(k.id))];
}

export function buildQuestion(
  target: Kana,
  mode: DrillMode,
  ctx: { pool: Kana[]; kana: Kana[]; words: KanaWord[]; known: Set<string> },
  rand: () => number
): Question | null {
  if (isSpecial(target)) return wordQuestion(target, ctx.words, ctx.kana, ctx.known, rand);
  if (mode === "type") return { kind: "type", target };
  const options = buildOptions(target, optionPool(ctx.pool, ctx.kana, target.script), 4, rand);
  return { kind: "choice", mode, target, options };
}

/** Draws `count` targets, repeating the pool when it is smaller, never twice in a row. */
export function drawTargets(pool: Kana[], progress: KanaProgress, count: number, rand: () => number): Kana[] {
  if (pool.length === 0) return [];
  const out: Kana[] = [];
  while (out.length < count) {
    const round = pickDrillItems(pool, progress, count - out.length, rand);
    if (round.length > 1 && out.length > 0 && round[0].id === out[out.length - 1].id) {
      [round[0], round[1]] = [round[1], round[0]];
    }
    out.push(...round);
  }
  return out.slice(0, count);
}

/**
 * The quiz at the end of a lesson: every new sign once, then a few signs from
 * earlier lessons to keep them alive, about ten items in all. Modes alternate
 * between reading (kana → rōmaji) and recognising (rōmaji → kana).
 */
export function buildLessonQuiz(
  lesson: KanaLesson,
  lessons: KanaLesson[],
  kana: Kana[],
  words: KanaWord[],
  progress: KanaProgress,
  rand: () => number
): Question[] {
  const byId = new Map(kana.map((k) => [k.id, k]));
  const known = knownThrough(lessons, lesson);
  const fresh = lesson.kana.map((id) => byId.get(id)).filter((k): k is Kana => !!k);
  const earlier = [...known]
    .filter((id) => !lesson.kana.includes(id))
    .map((id) => byId.get(id))
    .filter((k): k is Kana => !!k && !isSpecial(k));

  const target = Math.max(10, fresh.length + 2);
  const review = pickDrillItems(earlier, progress, Math.min(3, Math.max(2, target - fresh.length)), rand);
  const extra = drawTargets(fresh.filter((k) => !isSpecial(k)), progress, Math.max(0, target - fresh.length - review.length), rand);
  const targets = [...shuffle(fresh, rand), ...shuffle([...review, ...extra], rand)];

  const pool = [...known].map((id) => byId.get(id)).filter((k): k is Kana => !!k);
  const ctx = { pool, kana, words, known };
  return targets
    .map((k, i) => buildQuestion(k, i % 3 === 2 ? "romaji-kana" : "kana-romaji", ctx, rand))
    .filter((q): q is Question => q !== null);
}

export { kanaIndex };
