// Extracts the fields /dictionary displays — character, readings, translations,
// HSK level, example, and where each word comes from — into src/data/dictionary.ts.
//
// /dictionary is a client component: importing @/data/course there shipped every
// section, dialogue and exercise of the 88 units to the browser. This generated
// module keeps the route down to the word list itself.
//
//   node --experimental-strip-types --no-warnings --import ./scripts/register-loader.mjs scripts/generate-dictionary.mjs
//   … same command with --check to fail instead of writing when the file is stale
//
// Re-run it after touching any unit, lesson or reading vocabulary.
// `npm run validate` compares the committed file to the corpus and fails on drift.

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

import { allUnits, getHSKLevelForUnit } from "../src/data/course/index.ts";
import { lessons } from "../src/data/lessons.ts";
import { gradedTexts } from "../src/data/readings.ts";

export const OUTPUT = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../src/data/dictionary.ts"
);

// Explicit locale: the sort runs here now, so it must not depend on the machine's
// default locale, or --check would fail on someone else's laptop.
const PINYIN_COLLATOR = new Intl.Collator("en");

/**
 * One entry per character, course units first, then lessons, then readings —
 * the order decides which reading, translation and example win, and which
 * words carry an HSK level.
 */
export function collectDictionary() {
  const entries = new Map();

  const add = (item, source, hskLevel) => {
    const existing = entries.get(item.character);

    if (!existing) {
      entries.set(item.character, {
        character: item.character,
        pinyin: item.pinyin,
        zhuyin: item.zhuyin ?? "",
        french: item.french,
        english: item.english ?? "",
        hskLevel,
        example: item.example,
        sources: [source],
      });
      return;
    }

    if (!existing.sources.some((s) => s.kind === source.kind && s.label === source.label)) {
      existing.sources.push(source);
    }
    // A word taught in several units belongs to the earliest level that teaches it.
    if (hskLevel !== undefined && (existing.hskLevel === undefined || hskLevel < existing.hskLevel)) {
      existing.hskLevel = hskLevel;
    }
  };

  for (const unit of allUnits) {
    const level = getHSKLevelForUnit(unit)?.level;
    const source = { kind: "course", label: `Unité ${unit.number}` };
    for (const item of unit.vocabulary) add(item, source, level);
  }

  for (const lesson of lessons) {
    const source = { kind: "lesson", label: lesson.title };
    for (const item of lesson.vocabulary) add(item, source, undefined);
  }

  for (const reading of gradedTexts) {
    const source = { kind: "reading", label: `Lecture: ${reading.titleFr}` };
    for (const item of reading.vocabulary) add(item, source, undefined);
  }

  return [...entries.values()].sort((a, b) => PINYIN_COLLATOR.compare(a.pinyin, b.pinyin));
}

const quote = (value) => JSON.stringify(value ?? "");

function renderSource(source) {
  return `{ kind: ${quote(source.kind)}, label: ${quote(source.label)} }`;
}

function renderEntry(entry) {
  const fields = [
    `character: ${quote(entry.character)}`,
    `pinyin: ${quote(entry.pinyin)}`,
    `zhuyin: ${quote(entry.zhuyin)}`,
    `french: ${quote(entry.french)}`,
    `english: ${quote(entry.english)}`,
  ];

  if (entry.hskLevel !== undefined) fields.push(`hskLevel: ${entry.hskLevel}`);
  if (entry.example) {
    fields.push(
      `example: { sentence: ${quote(entry.example.sentence)}, ` +
        `pinyin: ${quote(entry.example.pinyin)}, ` +
        `translation: ${quote(entry.example.translation)} }`
    );
  }
  fields.push(`sources: [${entry.sources.map(renderSource).join(", ")}]`);

  return `  { ${fields.join(", ")} },`;
}

export function render(entries) {
  const counts = { course: 0, lesson: 0, reading: 0 };
  for (const entry of entries) {
    for (const kind of new Set(entry.sources.map((s) => s.kind))) counts[kind] += 1;
  }

  return `// GENERATED FILE — do not edit by hand.
//
// Source: src/data/course (vocabulary of the ${allUnits.length} units) + src/data/lessons
// + src/data/readings.
// Regenerate with:
//   node --experimental-strip-types --no-warnings --import ./scripts/register-loader.mjs scripts/generate-dictionary.mjs
//
// Only the fields /dictionary displays are kept, so the route never has to bundle
// the sections, dialogues and exercises of the course.

export type DictionarySourceKind = "course" | "lesson" | "reading";

/** Where an entry comes from. \`label\` is the badge text shown under the word. */
export interface DictionarySource {
  kind: DictionarySourceKind;
  label: string;
}

export interface DictionaryEntry {
  character: string;
  pinyin: string;
  zhuyin: string;
  french: string;
  english: string;
  /** Earliest HSK level that teaches the word; absent outside the course path. */
  hskLevel?: number;
  example?: { sentence: string; pinyin: string; translation: string };
  sources: DictionarySource[];
}

/**
 * ${entries.length} unique characters, sorted by pinyin — the page's default order.
 * ${counts.course} come from the course, ${counts.lesson} from the lessons, ${counts.reading} from the readings.
 */
export const dictionaryEntries: DictionaryEntry[] = [
${entries.map(renderEntry).join("\n")}
];
`;
}

// Importable as a module — the validator reuses collectDictionary() and render()
// so its check can never drift from what this script produces. The CLI below runs
// only when the file is the entry point.
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const entries = collectDictionary();
  const output = render(entries);

  if (process.argv.includes("--check")) {
    let current = "";
    try {
      current = readFileSync(OUTPUT, "utf8");
    } catch {
      console.error("dictionary.ts est absent — lance le script sans --check.");
      process.exit(1);
    }
    if (current !== output) {
      console.error(
        "dictionary.ts est desynchronise du corpus — regenere-le (script sans --check)."
      );
      process.exit(1);
    }
    console.log(`dictionary.ts a jour (${entries.length} entrees).`);
  } else {
    writeFileSync(OUTPUT, output, "utf8");
    console.log(`dictionary.ts ecrit : ${entries.length} entrees.`);
  }
}
