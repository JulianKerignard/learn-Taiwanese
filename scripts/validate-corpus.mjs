// Corpus invariants. Fails the build on anything that silently breaks a lesson:
// unanswerable exercises, tone buckets that contradict the pronunciation,
// prerequisites that lock a unit, duplicate ids, divergent readings, a metadata
// catalogue that no longer matches the units it describes, and a game word list
// that has drifted from the corpus.
//
//   npm run validate
//
// Errors exit 1. Warnings are reported but do not fail.

import { tonePairs } from "../src/data/tone-pairs.ts";
import { allUnits, chapters, hskLevels } from "../src/data/course/index.ts";
import {
  allUnitMetas,
  chapters as metaChapters,
  hskLevels as metaHskLevels,
} from "../src/data/course/meta.ts";
import { gameWords } from "../src/data/game-words.ts";
import { lessons } from "../src/data/lessons.ts";

const errors = [];
const warnings = [];

const err = (check, message) => errors.push({ check, message });
const warn = (check, message) => warnings.push({ check, message });

// ── Tone helpers ──────────────────────────────────────────────────────

const ZHUYIN_TONE_MARKS = { "ˊ": 2, "ˇ": 3, "ˋ": 4, "˙": 0 };

/** Tone of a single zhuyin syllable; unmarked means first tone. */
function zhuyinTone(syllable) {
  for (const [mark, tone] of Object.entries(ZHUYIN_TONE_MARKS)) {
    if (syllable.includes(mark)) return tone;
  }
  return 1;
}

function zhuyinTones(zhuyin) {
  return zhuyin.trim().split(/\s+/).filter(Boolean).map(zhuyinTone);
}

const PINYIN_TONES = {
  1: "āēīōūǖĀĒĪŌŪǕ",
  2: "áéíóúǘÁÉÍÓÚǗ",
  3: "ǎěǐǒǔǚǍĚǏǑǓǙ",
  4: "àèìòùǜÀÈÌÒÙǛ",
};

/** Ordered tones carried by pinyin diacritics; neutral syllables leave no mark. */
function pinyinMarkedTones(pinyin) {
  const tones = [];
  for (const char of pinyin) {
    for (const [tone, marked] of Object.entries(PINYIN_TONES)) {
      if (marked.includes(char)) tones.push(Number(tone));
    }
  }
  return tones;
}

// ── 1. Tone pairs match the pronunciation they teach ──────────────────

for (const pair of tonePairs) {
  for (const word of pair.words) {
    const tones = zhuyinTones(word.zhuyin);
    const label = `${pair.id} ${word.chinese} (${word.pinyin})`;

    if (tones.length !== 2) {
      err("tone-pairs", `${label}: ${tones.length} syllabe(s) dans une paire de tons`);
      continue;
    }
    if (tones[0] !== pair.tone1 || tones[1] !== pair.tone2) {
      err(
        "tone-pairs",
        `${label}: prononce ${tones[0]}+${tones[1]} mais rangé dans ${pair.tone1}+${pair.tone2}`
      );
    }
    if (word.chinese.length !== tones.length) {
      warn("tone-pairs", `${label}: ${word.chinese.length} caractères pour ${tones.length} syllabes`);
    }

    // Cross-check the two annotation systems against each other.
    const fromPinyin = pinyinMarkedTones(word.pinyin);
    const fromZhuyin = tones.filter((t) => t !== 0);
    if (fromPinyin.join(",") !== fromZhuyin.join(",")) {
      err(
        "annotations",
        `${label}: pinyin donne [${fromPinyin}] et zhuyin donne [${fromZhuyin}]`
      );
    }
  }
}

const seenPairWords = new Map();
for (const pair of tonePairs) {
  for (const word of pair.words) {
    const previous = seenPairWords.get(word.chinese);
    if (previous) {
      err("tone-pairs", `${word.chinese} déclaré dans ${previous} et dans ${pair.id}`);
    } else {
      seenPairWords.set(word.chinese, pair.id);
    }
  }
}

// ── 2. Every exercise is answerable ───────────────────────────────────

const exerciseIds = new Map();

for (const unit of allUnits) {
  for (const exercise of unit.exercises) {
    const label = `${unit.id}/${exercise.id}`;

    const previous = exerciseIds.get(exercise.id);
    if (previous) {
      err("exercise-ids", `id "${exercise.id}" partagé par ${previous} et ${unit.id}`);
    } else {
      exerciseIds.set(exercise.id, unit.id);
    }

    const options = exercise.options ?? [];

    if (exercise.type === "reorder") {
      if (options.length < 2) {
        err("exercises", `${label}: reorder avec ${options.length} tuile(s)`);
      }
      // A reorder is solvable only if the tiles can spell the answer.
      const stripped = exercise.correctAnswer.replace(/[，。？！、：；「」\s]/g, "");
      const joined = options.join("");
      if (joined.length !== stripped.length) {
        err(
          "exercises",
          `${label}: les tuiles (${joined.length} car.) ne peuvent pas composer la réponse (${stripped.length} car.)`
        );
      }
      continue;
    }

    if (options.length === 0) {
      // ExerciseRunner falls back to a free-text field, which is the right UX for a
      // translation but meaningless for a multiple-choice question.
      if (exercise.type === "comprehension" || exercise.type === "listen") {
        err("exercises", `${label}: type "${exercise.type}" sans options — question à choix sans choix`);
      } else {
        warn("exercises", `${label}: type "${exercise.type}" sans options — réponse en saisie libre`);
      }
      continue;
    }
    if (!options.includes(exercise.correctAnswer)) {
      err("exercises", `${label}: correctAnswer absent des options`);
    }
    if (new Set(options).size !== options.length) {
      warn("exercises", `${label}: options dupliquées`);
    }
    if (exercise.optionsHint && exercise.optionsHint.length !== options.length) {
      warn("exercises", `${label}: ${exercise.optionsHint.length} hints pour ${options.length} options`);
    }
  }
}

// ── 3. Prerequisites never lock a unit ────────────────────────────────

const pathOrder = chapters.flatMap((chapter) => chapter.unitIds);
const positionOf = new Map(pathOrder.map((id, index) => [id, index]));

for (const unit of allUnits) {
  const position = positionOf.get(unit.id);
  if (position === undefined) {
    err("path", `${unit.id} existe mais n'est référencée par aucun chapitre`);
    continue;
  }
  for (const prerequisite of unit.prerequisites) {
    const prerequisitePosition = positionOf.get(prerequisite);
    if (prerequisitePosition === undefined) {
      err("path", `${unit.id} exige ${prerequisite}, qui n'existe pas`);
    } else if (prerequisitePosition > position) {
      err(
        "path",
        `${unit.id} (position ${position}) exige ${prerequisite} (position ${prerequisitePosition}) : unité verrouillée`
      );
    }
  }
}

const declaredIds = new Set(allUnits.map((unit) => unit.id));
for (const id of pathOrder) {
  if (!declaredIds.has(id)) err("path", `${id} référencé par un chapitre mais aucune unité ne l'exporte`);
}
if (new Set(pathOrder).size !== pathOrder.length) {
  err("path", "un id d'unité apparaît dans plusieurs chapitres");
}

// ── 4. One word, one reading ──────────────────────────────────────────

const readings = new Map();

for (const unit of allUnits) {
  for (const item of unit.vocabulary) {
    const entry = readings.get(item.character) ?? { pinyin: new Map(), zhuyin: new Map() };
    if (!entry.pinyin.has(item.pinyin)) entry.pinyin.set(item.pinyin, unit.id);
    if (!entry.zhuyin.has(item.zhuyin)) entry.zhuyin.set(item.zhuyin, unit.id);
    readings.set(item.character, entry);
  }
}

for (const [character, entry] of readings) {
  if (entry.pinyin.size > 1) {
    const variants = [...entry.pinyin].map(([value, unit]) => `${value} (${unit})`).join(" vs ");
    warn("annotations", `${character} : pinyin divergent — ${variants}`);
  }
  if (entry.zhuyin.size > 1) {
    const variants = [...entry.zhuyin].map(([value, unit]) => `${value} (${unit})`).join(" vs ");
    warn("annotations", `${character} : zhuyin divergent — ${variants}`);
  }
}

// ── 5. The metadata catalogue matches the units ───────────────────────
//
// `src/data/course/meta.ts` restates unit metadata so that list views never
// import a unit module. Nothing keeps the copy honest at build time, so keep it
// honest here: a title edited in unitNN.ts and not in meta.ts would otherwise
// ship two different titles for the same unit.

const META_FIELDS = [
  "id",
  "number",
  "chapter",
  "title",
  "titleZh",
  "description",
  "icon",
  "requiredScore",
];

const metaById = new Map(allUnitMetas.map((meta) => [meta.id, meta]));

if (allUnitMetas.length !== allUnits.length) {
  err(
    "meta",
    `meta.ts décrit ${allUnitMetas.length} unités, le corpus en compte ${allUnits.length}`
  );
}

allUnits.forEach((unit, index) => {
  const meta = metaById.get(unit.id);
  if (!meta) {
    err("meta", `${unit.id} absente de meta.ts`);
    return;
  }
  if (allUnitMetas[index]?.id !== unit.id) {
    err("meta", `${unit.id} est au rang ${index} dans le corpus mais pas dans meta.ts`);
  }
  for (const field of META_FIELDS) {
    if (meta[field] !== unit[field]) {
      err(
        "meta",
        `${unit.id}.${field} : meta.ts dit ${JSON.stringify(meta[field])}, l'unité dit ${JSON.stringify(unit[field])}`
      );
    }
  }
  if (meta.prerequisites.join("|") !== unit.prerequisites.join("|")) {
    err("meta", `${unit.id}.prerequisites divergent entre meta.ts et l'unité`);
  }
});

for (const meta of allUnitMetas) {
  if (!declaredIds.has(meta.id)) {
    err("meta", `${meta.id} décrite par meta.ts mais aucune unité ne l'exporte`);
  }
}

if (JSON.stringify(metaChapters) !== JSON.stringify(chapters)) {
  err("meta", "les chapitres de meta.ts divergent de ceux de index.ts");
}
if (JSON.stringify(metaHskLevels) !== JSON.stringify(hskLevels)) {
  err("meta", "les niveaux HSK de meta.ts divergent de ceux de index.ts");
}

// ── 6. The generated game word list matches the corpus ────────────────
//
// src/data/game-words.ts is generated so /games/* never bundles the units.
// Regenerate it with scripts/generate-game-words.mjs when this fails.

const expectedGameWords = new Map();
for (const source of [allUnits, lessons]) {
  for (const entry of source) {
    for (const item of entry.vocabulary) {
      if (expectedGameWords.has(item.character)) continue;
      expectedGameWords.set(item.character, { pinyin: item.pinyin, french: item.french });
    }
  }
}

if (gameWords.length !== expectedGameWords.size) {
  err(
    "game-words",
    `game-words.ts liste ${gameWords.length} mots, le corpus en donne ${expectedGameWords.size} — régénère-le`
  );
}
for (const word of gameWords) {
  const expected = expectedGameWords.get(word.character);
  if (!expected) {
    err("game-words", `${word.character} n'existe plus dans le corpus — régénère game-words.ts`);
    continue;
  }
  if (expected.pinyin !== word.pinyin || expected.french !== word.french) {
    err("game-words", `${word.character} : game-words.ts diverge du corpus — régénère-le`);
  }
}

// ── Report ────────────────────────────────────────────────────────────

function report(title, entries) {
  if (entries.length === 0) return;
  console.log(`\n${title} (${entries.length})`);
  const byCheck = new Map();
  for (const entry of entries) {
    if (!byCheck.has(entry.check)) byCheck.set(entry.check, []);
    byCheck.get(entry.check).push(entry.message);
  }
  for (const [check, messages] of byCheck) {
    console.log(`\n  [${check}]`);
    for (const message of messages) console.log(`    ${message}`);
  }
}

console.log(
  `Corpus : ${allUnits.length} unités, ${chapters.length} chapitres, ` +
    `${allUnits.reduce((n, u) => n + u.vocabulary.length, 0)} entrées de vocabulaire, ` +
    `${exerciseIds.size} exercices, ${tonePairs.length} paires de tons, ` +
    `${allUnitMetas.length} métadonnées, ${gameWords.length} mots de jeu`
);

report("WARNINGS", warnings);
report("ERREURS", errors);

if (errors.length > 0) {
  console.log(`\n✗ ${errors.length} erreur(s)`);
  process.exit(1);
}
console.log(`\n✓ Corpus valide${warnings.length ? ` (${warnings.length} warning(s))` : ""}`);
