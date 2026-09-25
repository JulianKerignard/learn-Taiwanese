// Extracts the four fields the mini-games need (term, reading, romanization, french)
// from the course units and the standalone lessons into src/data/<lang>/game-words.ts.
//
// `reading` is the native phonetic script (zhuyin, or kana). The Japanese hangman
// is played on the mora of the reading, so without it the game could only use
// the words already written in kana.
//
// The games are client components: importing the course index there would ship
// every section, dialogue and exercise of the 88 units to the browser. This
// generated module keeps /games/* down to the word list itself.
//
//   npm run generate-game-words
//   npm run generate-game-words -- --check   fails instead of writing when stale
//
// Re-run it after touching any unit or lesson vocabulary. `npm run validate`
// imports collect() and render() from here and re-checks the file, so a stale
// game-words.ts fails the build without anyone having to call --check by hand.

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

// Which corpus to read. The merged repo holds two; a generator hardwired to one
// of them silently compares the other against the wrong source.
export const LANG = process.env.CORPUS_LANG ?? process.argv.find((a) => a === "zh" || a === "ja") ?? "zh";
const DIR = `../src/data/${LANG}`;

const { allUnits } = await import(`${DIR}/course/index.ts`);
const { lessons } = await import(`${DIR}/lessons.ts`);

export const OUTPUT = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  `../src/data/${LANG}/game-words.ts`
);

/** Course units first, then lessons; first occurrence of a character wins. */
export function collect() {
  const words = new Map();

  for (const source of [allUnits, lessons]) {
    for (const entry of source) {
      for (const v of entry.vocabulary) {
        if (words.has(v.term)) continue;
        words.set(v.term, {
          term: v.term,
          reading: v.reading,
          romanization: v.romanization,
          french: v.french,
        });
      }
    }
  }

  return [...words.values()];
}

const quote = (value) => JSON.stringify(value ?? "");

export function render(words) {
  const lines = words.map(
    (w) =>
      `  { term: ${quote(w.term)}, reading: ${quote(w.reading)}, romanization: ${quote(w.romanization)}, french: ${quote(w.french)} },`
  );

  return `// GENERATED FILE — do not edit by hand.
//
// Source: src/data/course (vocabulary of the 88 units) + src/data/lessons.
// Regenerate with:
//   node --experimental-strip-types --no-warnings --import ./scripts/register-loader.mjs scripts/generate-game-words.mjs
//
// Only the fields the mini-games read are kept, so /games/* never has to bundle
// the sections, dialogues and exercises of the course.

export interface GameWord {
  term: string;
  /** Native phonetic script: zhuyin for Mandarin, kana for Japanese. */
  reading: string;
  romanization: string;
  french: string;
}

/** ${words.length} unique characters, course units first then standalone lessons. */
export const gameWords: GameWord[] = [
${lines.join("\n")}
];
`;
}

// CLI only: importing this module must stay side-effect free so the validator
// can reuse collect() and render() without writing anything.
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const words = collect();
  const output = render(words);

  if (process.argv.includes("--check")) {
    let current = "";
    try {
      current = readFileSync(OUTPUT, "utf8");
    } catch {
      console.error("game-words.ts est absent — lance le script sans --check.");
      process.exit(1);
    }
    if (current !== output) {
      console.error(
        "game-words.ts est desynchronise du corpus — regenere-le (script sans --check)."
      );
      process.exit(1);
    }
    console.log(`game-words.ts a jour (${words.length} mots).`);
  } else {
    writeFileSync(OUTPUT, output, "utf8");
    console.log(`game-words.ts ecrit : ${words.length} mots.`);
  }
}
