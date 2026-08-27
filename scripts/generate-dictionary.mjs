// Extracts the fields /dictionary displays — term, readings, translations, JLPT
// level, example, and where each word comes from — into src/data/dictionary.ts.
//
// /dictionary is a client component: importing @/data/course there shipped every
// section, dialogue and exercise of the units to the browser. This generated
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

import { allUnits, getJLPTLevelForUnit } from "../src/data/course/index.ts";
import { lessons } from "../src/data/lessons.ts";
import { gradedTexts } from "../src/data/readings.ts";
import { japaneseCollator } from "../src/lib/japanese.ts";

export const OUTPUT = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../src/data/dictionary.ts"
);

/**
 * One entry per term, course units first, then lessons, then readings — the
 * order decides which reading, translation and example win, and which words
 * carry a JLPT level.
 */
export function collectDictionary() {
  const entries = new Map();

  const add = (item, source, jlptLevel) => {
    const existing = entries.get(item.term);

    if (!existing) {
      entries.set(item.term, {
        term: item.term,
        kana: item.kana ?? "",
        romaji: item.romaji,
        french: item.french,
        english: item.english ?? "",
        jlptLevel,
        example: item.example,
        sources: [source],
      });
      return;
    }

    if (!existing.sources.some((s) => s.kind === source.kind && s.label === source.label)) {
      existing.sources.push(source);
    }
    // Smallest N number wins, which is what the page did before this module
    // existed. Note that JLPT numbering runs backwards — N5 is the entry level —
    // so a word taught in an N5 unit and an N4 unit is badged N4. Kept as-is:
    // changing it would move 31 entries between the level filters.
    if (jlptLevel !== undefined && (existing.jlptLevel === undefined || jlptLevel < existing.jlptLevel)) {
      existing.jlptLevel = jlptLevel;
    }
  };

  for (const unit of allUnits) {
    const level = getJLPTLevelForUnit(unit)?.level;
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

  // Gojūon order, the page's default sort.
  return [...entries.values()].sort((a, b) => japaneseCollator.compare(a.kana, b.kana));
}

const quote = (value) => JSON.stringify(value ?? "");

function renderSource(source) {
  return `{ kind: ${quote(source.kind)}, label: ${quote(source.label)} }`;
}

function renderEntry(entry) {
  const fields = [
    `term: ${quote(entry.term)}`,
    `kana: ${quote(entry.kana)}`,
    `romaji: ${quote(entry.romaji)}`,
    `french: ${quote(entry.french)}`,
    `english: ${quote(entry.english)}`,
  ];

  if (entry.jlptLevel !== undefined) fields.push(`jlptLevel: ${entry.jlptLevel}`);
  if (entry.example) {
    fields.push(
      `example: { sentence: ${quote(entry.example.sentence)}, ` +
        `romaji: ${quote(entry.example.romaji)}, ` +
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
  term: string;
  kana: string;
  romaji: string;
  french: string;
  english: string;
  /** Lowest JLPT number among the units that teach the word; absent outside the course path. */
  jlptLevel?: number;
  example?: { sentence: string; romaji: string; translation: string };
  sources: DictionarySource[];
}

/**
 * ${entries.length} unique terms, in gojūon order — the page's default sort.
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
