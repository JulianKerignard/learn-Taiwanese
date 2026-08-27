// Corpus invariants. Fails the build on anything that silently breaks a lesson:
// unanswerable exercises and quiz questions, tone buckets that contradict the
// pronunciation, prerequisites that lock a unit, duplicate ids, divergent
// readings, a metadata catalogue that no longer matches the units it describes,
// and a game word list that has drifted from the corpus.
//
// Everything the app reads as content is covered: the course units, the
// standalone lessons, the graded readings, the tone pairs and the generated
// game word list. A file that escapes this script ships unverified.
//
//   npm run validate
//
// Errors exit 1. Warnings are reported but do not fail.

import { readFileSync } from "node:fs";

import { tonePairs } from "../src/data/tone-pairs.ts";
import { allUnits, chapters, hskLevels } from "../src/data/course/index.ts";
import {
  allUnitMetas,
  chapters as metaChapters,
  hskLevels as metaHskLevels,
} from "../src/data/course/meta.ts";
import { gameWords } from "../src/data/game-words.ts";
import { lessons } from "../src/data/lessons.ts";
import { gradedTexts } from "../src/data/readings.ts";
// The generator is the single source of truth for what game-words.ts should
// contain; importing it is what wires its --check into the build.
import {
  collect as collectGameWords,
  render as renderGameWords,
  OUTPUT as GAME_WORDS_FILE,
} from "./generate-game-words.mjs";
import { dictionaryEntries } from "../src/data/dictionary.ts";
// The generator is the single source of truth for what dictionary.ts should
// contain; importing it is what wires its --check into the build. The aliased
// fs import keeps this section independent of the other sections' imports.
import { readFileSync as readGeneratedFile } from "node:fs";
import {
  collectDictionary,
  render as renderDictionary,
  OUTPUT as DICTIONARY_FILE,
} from "./generate-dictionary.mjs";

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
//
// Fed by every vocabulary list in the app — units, lessons and graded readings —
// so a word annotated one way in a unit and another way in a lesson is reported
// instead of teaching two pronunciations of the same thing.

const readings = new Map();

/** Records the annotations `source` gives to a word. Warns later if they differ. */
function noteReading(source, item) {
  const entry = readings.get(item.character) ?? { pinyin: new Map(), zhuyin: new Map() };
  if (!entry.pinyin.has(item.pinyin)) entry.pinyin.set(item.pinyin, source);
  if (!entry.zhuyin.has(item.zhuyin)) entry.zhuyin.set(item.zhuyin, source);
  readings.set(item.character, entry);
}

/** Fields no vocabulary entry may omit, wherever it lives. */
function checkVocabularyItem(check, label, item) {
  if (!item.character?.trim()) {
    err(check, `${label}: entrée de vocabulaire sans caractère`);
    return false;
  }
  for (const field of ["pinyin", "zhuyin", "french"]) {
    if (!item[field]?.trim()) err(check, `${label}/${item.character}: ${field} manquant`);
  }
  return true;
}

let courseVocabCount = 0;

for (const unit of allUnits) {
  const seenWords = new Set();
  for (const item of unit.vocabulary) {
    courseVocabCount += 1;
    if (!checkVocabularyItem("vocabulaire", unit.id, item)) continue;
    if (seenWords.has(item.character)) {
      err("vocabulaire", `${unit.id}/${item.character}: doublon dans l'unité`);
    }
    seenWords.add(item.character);
    noteReading(unit.id, item);
  }
}

// ── 5. The standalone lessons ─────────────────────────────────────────
//
// src/data/lessons feeds the dictionary, the mini-games and the review queue
// exactly like the course does, so its vocabulary gets the same invariants. The
// quiz is a lesson's only graded step: an unanswerable question there is as bad
// as a broken exercise in a unit.

const lessonIds = new Map();
const quizIds = new Map();
let lessonVocabCount = 0;
let quizCount = 0;

for (const lesson of lessons) {
  const previousLesson = lessonIds.get(lesson.id);
  if (previousLesson) {
    err("lessons", `id de leçon "${lesson.id}" partagé avec ${previousLesson}`);
  } else {
    lessonIds.set(lesson.id, lesson.slug);
  }

  const seenWords = new Set();
  for (const item of lesson.vocabulary) {
    lessonVocabCount += 1;
    if (!checkVocabularyItem("lessons", lesson.id, item)) continue;
    if (seenWords.has(item.character)) {
      err("lessons", `${lesson.id}/${item.character}: doublon dans la leçon`);
    }
    seenWords.add(item.character);
    noteReading(lesson.id, item);
  }

  for (const phrase of lesson.phrases ?? []) {
    if (!phrase.chinese?.trim()) {
      err("lessons", `${lesson.id}: phrase sans texte chinois`);
      continue;
    }
    for (const field of ["pinyin", "zhuyin", "french"]) {
      if (!phrase[field]?.trim()) {
        err("lessons", `${lesson.id}/${phrase.chinese}: ${field} manquant`);
      }
    }
  }

  const quiz = lesson.quiz ?? [];
  if (quiz.length === 0) warn("lessons", `${lesson.id}: aucun quiz`);

  for (const question of quiz) {
    quizCount += 1;
    const label = `${lesson.id}/${question.id}`;

    const previous = quizIds.get(question.id);
    if (previous) {
      err("quiz", `id "${question.id}" partagé par ${previous} et ${lesson.id}`);
    } else {
      quizIds.set(question.id, lesson.id);
    }

    if (!question.question?.trim()) err("quiz", `${label}: énoncé vide`);

    const options = question.options ?? [];
    if (options.length < 2) {
      // QuizQuestion renders one button per option — there is no free-text fallback.
      err("quiz", `${label}: ${options.length} option(s) — question à choix sans choix`);
      continue;
    }
    if (!options.includes(question.correctAnswer)) {
      err("quiz", `${label}: correctAnswer "${question.correctAnswer}" absent des options`);
    }
    if (new Set(options).size !== options.length) {
      // Two identical buttons, one of them scored wrong.
      err("quiz", `${label}: options dupliquées`);
    }
  }
}

// ── 6. Graded readings ────────────────────────────────────────────────
//
// ReadingText renders the sentences one by one and reveals the translation on
// tap; `text` is only the running version of the same sentences. A sentence
// without its translation is a dead end for the reader.

const textIds = new Map();
let sentenceCount = 0;
let readingVocabCount = 0;

for (const text of gradedTexts) {
  const previous = textIds.get(text.id);
  if (previous) {
    err("readings", `id de lecture "${text.id}" déclaré deux fois`);
  } else {
    textIds.set(text.id, text.title);
  }

  if (!text.sentences?.length) {
    err("readings", `${text.id}: aucune phrase`);
    continue;
  }

  for (const sentence of text.sentences) {
    sentenceCount += 1;
    if (!sentence.chinese?.trim()) {
      err("readings", `${text.id}: phrase sans texte chinois`);
      continue;
    }
    const label = `${text.id}/${sentence.chinese}`;
    if (!sentence.french?.trim()) err("readings", `${label}: traduction manquante`);
    if (!sentence.pinyin?.trim()) err("readings", `${label}: pinyin manquant`);
  }

  // `text` restates the sentences as running prose. Nothing derives it, so the
  // two copies drift the moment a sentence is edited on its own.
  const joined = text.sentences.map((sentence) => sentence.chinese).join("");
  if (text.text !== joined) {
    err(
      "readings",
      `${text.id}: le texte suivi ne correspond pas à la concaténation des phrases`
    );
  }

  const seenWords = new Set();
  for (const item of text.vocabulary) {
    readingVocabCount += 1;
    if (!checkVocabularyItem("readings", text.id, item)) continue;
    if (seenWords.has(item.character)) {
      err("readings", `${text.id}/${item.character}: doublon dans le lexique`);
    }
    seenWords.add(item.character);
    noteReading(text.id, item);
  }
}

// ── 7. Every word keeps the same reading everywhere ────────────────────
//
// Runs after all three sources have been recorded above.

for (const [character, entry] of readings) {
  if (entry.pinyin.size > 1) {
    const variants = [...entry.pinyin].map(([value, source]) => `${value} (${source})`).join(" vs ");
    warn("annotations", `${character} : pinyin divergent — ${variants}`);
  }
  if (entry.zhuyin.size > 1) {
    const variants = [...entry.zhuyin].map(([value, source]) => `${value} (${source})`).join(" vs ");
    warn("annotations", `${character} : zhuyin divergent — ${variants}`);
  }
}

// ── 8. The metadata catalogue matches the units ───────────────────────
//
// `src/data/course/meta.ts` restates unit metadata so that list views never
// import a unit module. Nothing keeps the copy honest at build time, so keep it
// honest here: a title edited in unitNN.ts and not in meta.ts would otherwise
// ship two different titles for the same unit.

// Derived, not hand-written: a field added to CourseUnitMeta would otherwise
// escape the comparison without a sound. Everything except the content a unit
// adds on top of its metadata must match.
const CONTENT_ONLY = new Set(["sections", "dialogue", "keyPoints", "vocabulary", "exercises"]);

const metaFieldsOf = (meta, unit) =>
  [...new Set([...Object.keys(meta), ...Object.keys(unit)])].filter((k) => !CONTENT_ONLY.has(k));

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
  for (const field of metaFieldsOf(meta, unit)) {
    if (JSON.stringify(meta[field]) !== JSON.stringify(unit[field])) {
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

// ── 9. The generated game word list matches the corpus ────────────────
//
// src/data/game-words.ts is generated so /games/* never bundles the units.
// Regenerate it with `npm run generate-game-words` when this fails.
//
// The expected list comes from the generator itself rather than from a second
// copy of its rules here: a change to what the generator collects can no longer
// drift away from what this section accepts.

const expectedGameWords = new Map(
  collectGameWords().map((word) => [word.character, word])
);

const listedGameWords = new Set();
for (const word of gameWords) {
  if (listedGameWords.has(word.character)) {
    err("game-words", `${word.character} apparaît deux fois dans game-words.ts — régénère-le`);
  }
  listedGameWords.add(word.character);

  const expected = expectedGameWords.get(word.character);
  if (!expected) {
    err("game-words", `${word.character} n'existe plus dans le corpus — régénère game-words.ts`);
    continue;
  }
  if (expected.pinyin !== word.pinyin || expected.french !== word.french) {
    err("game-words", `${word.character} : game-words.ts diverge du corpus — régénère-le`);
  }
}

// Both directions. Counting alone let a duplicate cover for an omission.
for (const character of expectedGameWords.keys()) {
  if (!listedGameWords.has(character)) {
    err("game-words", `${character} est dans le corpus mais absent de game-words.ts — régénère-le`);
  }
}

// The checks above compare data; this one compares the file. It is the
// generator's --check, run as part of the build instead of by hand: it also
// catches a header, an order or a count edited into the generated file.
try {
  if (readFileSync(GAME_WORDS_FILE, "utf8") !== renderGameWords([...expectedGameWords.values()])) {
    err(
      "game-words",
      "game-words.ts n'est pas ce que le générateur produit — lance `npm run generate-game-words`"
    );
  }
} catch (error) {
  err("game-words", `game-words.ts illisible (${error.code ?? error.message})`);
}

// ── 10. The generated dictionary matches the corpus ───────────────────
//
// src/data/dictionary.ts is generated so /dictionary never bundles the units.
// The generator's own collector is reused here rather than restated, so the two
// can only disagree about what is committed to the file — never about what the
// corpus says. Both directions are compared: a duplicate must not be able to
// cover for an omission. Regenerate with scripts/generate-dictionary.mjs.

const expectedDict = new Map(collectDictionary().map((entry) => [entry.character, entry]));
const listedDict = new Set();
const dictErrorsBefore = errors.length;

/** Field-by-field so a changed reading, level, example or source is named. */
function diffDictionaryEntry(expected, actual) {
  const differences = [];
  for (const field of ["pinyin", "zhuyin", "french", "english", "hskLevel"]) {
    if (expected[field] !== actual[field]) {
      differences.push(`${field} : corpus ${JSON.stringify(expected[field])} vs fichier ${JSON.stringify(actual[field])}`);
    }
  }
  if (JSON.stringify(expected.example ?? null) !== JSON.stringify(actual.example ?? null)) {
    differences.push("example divergent");
  }
  const key = (sources) => sources.map((s) => `${s.kind}:${s.label}`).join("|");
  if (key(expected.sources) !== key(actual.sources)) {
    differences.push(`sources : corpus [${key(expected.sources)}] vs fichier [${key(actual.sources)}]`);
  }
  return differences;
}

for (const entry of dictionaryEntries) {
  if (listedDict.has(entry.character)) {
    err("dictionary", `${entry.character} apparaît deux fois dans dictionary.ts — régénère-le`);
    continue;
  }
  listedDict.add(entry.character);

  const expected = expectedDict.get(entry.character);
  if (!expected) {
    err("dictionary", `${entry.character} n'existe plus dans le corpus — régénère dictionary.ts`);
    continue;
  }
  for (const difference of diffDictionaryEntry(expected, entry)) {
    err("dictionary", `${entry.character} : ${difference} — régénère dictionary.ts`);
  }
}

for (const character of expectedDict.keys()) {
  if (!listedDict.has(character)) {
    err("dictionary", `${character} est dans le corpus mais absent de dictionary.ts — régénère-le`);
  }
}

// Order carries meaning: it is the page's default "tri par pinyin".
// Only worth reporting once the two lists hold the same words.
const expectedOrder = [...expectedDict.keys()].join("|");
const listedOrder = dictionaryEntries.map((entry) => entry.character).join("|");
if (errors.length === dictErrorsBefore && expectedOrder !== listedOrder) {
  err("dictionary", "dictionary.ts n'est plus trié comme le corpus — régénère-le");
}

// The checks above compare data; this one compares the file. It is the
// generator's --check, run as part of the build instead of by hand: it also
// catches a header, a comment or a count edited into the generated file.
try {
  if (readGeneratedFile(DICTIONARY_FILE, "utf8") !== renderDictionary([...expectedDict.values()])) {
    err(
      "dictionary",
      "dictionary.ts n'est pas ce que le générateur produit — lance `npm run generate-dictionary`"
    );
  }
} catch (error) {
  err("dictionary", `dictionary.ts illisible (${error.code ?? error.message})`);
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
    `${courseVocabCount + lessonVocabCount + readingVocabCount} entrées de vocabulaire ` +
    `(${courseVocabCount} cours, ${lessonVocabCount} leçons, ${readingVocabCount} lectures), ` +
    `${exerciseIds.size} exercices, ${quizCount} questions de quiz, ` +
    `${gradedTexts.length} lectures (${sentenceCount} phrases), ` +
    `${tonePairs.length} paires de tons, ${allUnitMetas.length} métadonnées, ` +
    `${gameWords.length} mots de jeu`
);

report("WARNINGS", warnings);
report("ERREURS", errors);

if (errors.length > 0) {
  console.log(`\n✗ ${errors.length} erreur(s)`);
  process.exit(1);
}
console.log(`\n✓ Corpus valide${warnings.length ? ` (${warnings.length} warning(s))` : ""}`);
