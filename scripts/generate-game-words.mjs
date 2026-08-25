// Extracts the three fields the mini-games need (character, pinyin, french) from
// the course units and the standalone lessons into src/data/game-words.ts.
//
// The games are client components: importing the course index there would ship
// every section, dialogue and exercise of the 88 units to the browser. This
// generated module keeps /games/* down to the word list itself.
//
//   node --experimental-strip-types --no-warnings --import ./scripts/register-loader.mjs scripts/generate-game-words.mjs
//   … same command with --check to fail instead of writing when the file is stale
//
// Re-run it after touching any unit or lesson vocabulary.

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

import { allUnits } from "../src/data/course/index.ts";
import { lessons } from "../src/data/lessons.ts";

const OUTPUT = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../src/data/game-words.ts"
);

/** Course units first, then lessons; first occurrence of a character wins. */
function collect() {
  const words = new Map();

  for (const source of [allUnits, lessons]) {
    for (const entry of source) {
      for (const v of entry.vocabulary) {
        if (words.has(v.character)) continue;
        words.set(v.character, {
          character: v.character,
          pinyin: v.pinyin,
          french: v.french,
        });
      }
    }
  }

  return [...words.values()];
}

const quote = (value) => JSON.stringify(value ?? "");

function render(words) {
  const lines = words.map(
    (w) =>
      `  { character: ${quote(w.character)}, pinyin: ${quote(w.pinyin)}, french: ${quote(w.french)} },`
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
  character: string;
  pinyin: string;
  french: string;
}

/** ${words.length} unique characters, course units first then standalone lessons. */
export const gameWords: GameWord[] = [
${lines.join("\n")}
];
`;
}

const words = collect();
const output = render(words);
const check = process.argv.includes("--check");

if (check) {
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
