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

// One corpus per run. The merged repo holds two, and a validator that silently
// covered only one would be worse than none: `npm run validate` invokes this
// script once per language.
const LANG = process.argv[2];
if (LANG !== "zh" && LANG !== "ja") {
  console.error("usage: validate-corpus.mjs <zh|ja>");
  process.exit(2);
}
const DIR = `../src/data/${LANG}`;
const isZh = LANG === "zh";

const { allUnits, chapters, levels, getLevelForUnit } = await import(`${DIR}/course/index.ts`);
const {
  allUnitMetas,
  chapters: metaChapters,
  levels: metaLevels,
} = await import(`${DIR}/course/meta.ts`);
const { lessons } = await import(`${DIR}/lessons.ts`);
const { gradedTexts } = await import(`${DIR}/readings.ts`);
const { gameWords } = await import(`${DIR}/game-words.ts`);
const { dictionaryEntries } = await import(`${DIR}/dictionary.ts`);

// Phonology differs in kind: Mandarin teaches syllable tones, Japanese a single
// pitch downstep per word. Each edition brings its own data and its own checks.
const tonePairs = isZh ? (await import(`${DIR}/tone-pairs.ts`)).tonePairs : [];
const accentGroups = isZh ? [] : (await import(`${DIR}/pitch-accent.ts`)).accentGroups;
const minimalPairs = isZh ? [] : (await import(`${DIR}/pitch-accent.ts`)).minimalPairs;
const { splitMora, countMora, isKana, isKanji } = isZh
  ? {}
  : await import("../src/lib/japanese.ts");

// The generators are the single source of truth for what the generated files
// should contain; importing them is what wires their --check into the build.
const {
  collect: collectGameWords,
  render: renderGameWords,
  OUTPUT: GAME_WORDS_FILE,
} = await import("./generate-game-words.mjs");
const {
  collectDictionary,
  render: renderDictionary,
  OUTPUT: DICTIONARY_FILE,
} = await import("./generate-dictionary.mjs");
const readGeneratedFile = readFileSync;

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
    const tones = zhuyinTones(word.reading);
    const label = `${pair.id} ${word.native} (${word.romanization})`;

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
    if (word.native.length !== tones.length) {
      warn("tone-pairs", `${label}: ${word.native.length} caractères pour ${tones.length} syllabes`);
    }

    // Cross-check the two annotation systems against each other.
    const fromPinyin = pinyinMarkedTones(word.romanization);
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
    const previous = seenPairWords.get(word.native);
    if (previous) {
      err("tone-pairs", `${word.native} déclaré dans ${previous} et dans ${pair.id}`);
    } else {
      seenPairWords.set(word.native, pair.id);
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
  const entry = readings.get(item.term) ?? { romanization: new Map(), reading: new Map() };
  if (!entry.romanization.has(item.romanization)) entry.romanization.set(item.romanization, source);
  if (!entry.reading.has(item.reading)) entry.reading.set(item.reading, source);
  readings.set(item.term, entry);
}

/** Fields no vocabulary entry may omit, wherever it lives. */
function checkVocabularyItem(check, label, item) {
  if (!item.term?.trim()) {
    err(check, `${label}: entrée de vocabulaire sans caractère`);
    return false;
  }
  for (const field of ["romanization", "reading", "french"]) {
    if (!item[field]?.trim()) err(check, `${label}/${item.term}: ${field} manquant`);
  }
  return true;
}

let courseVocabCount = 0;

for (const unit of allUnits) {
  const seenWords = new Set();
  for (const item of unit.vocabulary) {
    courseVocabCount += 1;
    if (!checkVocabularyItem("vocabulaire", unit.id, item)) continue;
    if (seenWords.has(item.term)) {
      err("vocabulaire", `${unit.id}/${item.term}: doublon dans l'unité`);
    }
    seenWords.add(item.term);
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
    if (seenWords.has(item.term)) {
      err("lessons", `${lesson.id}/${item.term}: doublon dans la leçon`);
    }
    seenWords.add(item.term);
    noteReading(lesson.id, item);
  }

  for (const phrase of lesson.phrases ?? []) {
    if (!phrase.native?.trim()) {
      err("lessons", `${lesson.id}: phrase sans texte chinois`);
      continue;
    }
    for (const field of ["romanization", "reading", "french"]) {
      if (!phrase[field]?.trim()) {
        err("lessons", `${lesson.id}/${phrase.native}: ${field} manquant`);
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
    if (!sentence.native?.trim()) {
      err("readings", `${text.id}: phrase sans texte chinois`);
      continue;
    }
    const label = `${text.id}/${sentence.native}`;
    if (!sentence.french?.trim()) err("readings", `${label}: traduction manquante`);
    if (!sentence.romanization?.trim()) err("readings", `${label}: pinyin manquant`);
  }

  // `text` restates the sentences as running prose. Nothing derives it, so the
  // two copies drift the moment a sentence is edited on its own.
  const joined = text.sentences.map((sentence) => sentence.native).join("");
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
    if (seenWords.has(item.term)) {
      err("readings", `${text.id}/${item.term}: doublon dans le lexique`);
    }
    seenWords.add(item.term);
    noteReading(text.id, item);
  }
}

// ── 7. Every word keeps the same reading everywhere ────────────────────
//
// Runs after all three sources have been recorded above.

for (const [character, entry] of readings) {
  if (entry.romanization.size > 1) {
    const variants = [...entry.romanization].map(([value, source]) => `${value} (${source})`).join(" vs ");
    warn("annotations", `${character} : pinyin divergent — ${variants}`);
  }
  if (entry.reading.size > 1) {
    const variants = [...entry.reading].map(([value, source]) => `${value} (${source})`).join(" vs ");
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
if (JSON.stringify(metaLevels) !== JSON.stringify(levels)) {
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
  collectGameWords().map((word) => [word.term, word])
);

const listedGameWords = new Set();
for (const word of gameWords) {
  if (listedGameWords.has(word.term)) {
    err("game-words", `${word.term} apparaît deux fois dans game-words.ts — régénère-le`);
  }
  listedGameWords.add(word.term);

  const expected = expectedGameWords.get(word.term);
  if (!expected) {
    err("game-words", `${word.term} n'existe plus dans le corpus — régénère game-words.ts`);
    continue;
  }
  if (expected.romanization !== word.romanization || expected.french !== word.french) {
    err("game-words", `${word.term} : game-words.ts diverge du corpus — régénère-le`);
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

const expectedDict = new Map(collectDictionary().map((entry) => [entry.term, entry]));
const listedDict = new Set();
const dictErrorsBefore = errors.length;

/** Field-by-field so a changed reading, level, example or source is named. */
function diffDictionaryEntry(expected, actual) {
  const differences = [];
  for (const field of ["pinyin", "zhuyin", "french", "english", "level"]) {
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
  if (listedDict.has(entry.term)) {
    err("dictionary", `${entry.term} apparaît deux fois dans dictionary.ts — régénère-le`);
    continue;
  }
  listedDict.add(entry.term);

  const expected = expectedDict.get(entry.term);
  if (!expected) {
    err("dictionary", `${entry.term} n'existe plus dans le corpus — régénère dictionary.ts`);
    continue;
  }
  for (const difference of diffDictionaryEntry(expected, entry)) {
    err("dictionary", `${entry.term} : ${difference} — régénère dictionary.ts`);
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
const listedOrder = dictionaryEntries.map((entry) => entry.term).join("|");
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

// ── 11. The kana reading course (Japanese only) ───────────────────────
//
// /japon/kana teaches the two syllabaries sign by sign, then drills them and
// offers words to read. A sign missing from the table, taught in no lesson or
// in two, or a word spelt with a sign the course never teaches is a reading
// the page cannot grade. Rōmaji is recomputed with the page's own converter
// (src/lib/kana.ts), so the data and the grader cannot drift apart. There is
// no escape hatch: a word the converter spells differently (a particle は read
// "wa", say) does not belong in a list of words.

const kanaCourse = isZh ? null : await import(`${DIR}/kana.ts`);
const kanaLib = isZh ? null : await import("../src/lib/kana.ts");
let kanaSummary = "";

if (kanaCourse && kanaLib) {
  const { kana, kanaLessons, kanaWords } = kanaCourse;
  const { splitKana, kanaToRomaji, kanaIndex, kanaIdsThrough, readableWords } = kanaLib;

  const EXPECTED = {
    hiragana: { basic: 46, dakuten: 25, yoon: 33, special: 1, extended: 0 },
    katakana: { basic: 46, dakuten: 25, yoon: 33, special: 2 },
  };
  // The foreign sounds a learner meets in everyday loanwords. More may be added.
  const REQUIRED_EXTENDED = [
    "ファ", "フィ", "フェ", "フォ", "ティ", "ディ", "トゥ", "ドゥ", "ウィ", "ウェ", "ウォ",
    "シェ", "ジェ", "チェ", "ヴァ", "ヴィ", "ヴ", "ヴェ", "ヴォ", "ツァ", "デュ", "フュ",
  ];

  const byId = new Map();
  const charsByScript = { hiragana: new Map(), katakana: new Map() };
  const counts = { hiragana: {}, katakana: {} };

  for (const k of kana) {
    const label = `${k.id} ${k.char}`;
    if (byId.has(k.id)) err("kana", `id "${k.id}" déclaré deux fois`);
    byId.set(k.id, k);

    const prefix = k.script === "hiragana" ? "h-" : k.script === "katakana" ? "k-" : null;
    if (!prefix) {
      err("kana", `${label}: écriture inconnue "${k.script}"`);
      continue;
    }
    if (!k.id.startsWith(prefix)) err("kana", `${label}: l'id ne commence pas par ${prefix}`);

    const previous = charsByScript[k.script].get(k.char);
    if (previous) err("kana", `${k.char} déclaré par ${previous} et par ${k.id}`);
    charsByScript[k.script].set(k.char, k.id);

    counts[k.script][k.group] = (counts[k.script][k.group] ?? 0) + 1;

    if (k.group === "basic" && !k.mnemonic?.trim()) {
      err("kana", `${label}: signe de base sans mnémotechnique`);
    }
    if (!k.row?.trim()) err("kana", `${label}: ligne (row) manquante`);

    // The converter is what grades typed words: it must agree with the table.
    if (k.group !== "special" && kanaToRomaji(k.char) !== k.romaji) {
      err("kana", `${label}: rōmaji "${k.romaji}" mais le convertisseur lit "${kanaToRomaji(k.char)}"`);
    }
    if (k.group !== "special" && splitKana(k.char).length !== 1) {
      err("kana", `${label}: le signe se découpe en ${splitKana(k.char).length} unités`);
    }
  }

  for (const [script, expected] of Object.entries(EXPECTED)) {
    for (const [group, count] of Object.entries(expected)) {
      const actual = counts[script][group] ?? 0;
      if (actual !== count) err("kana", `${script} ${group} : ${actual} signes, ${count} attendus`);
    }
  }
  for (const char of REQUIRED_EXTENDED) {
    const id = charsByScript.katakana.get(char);
    if (!id || byId.get(id).group !== "extended") {
      err("kana", `${char} absent des combinaisons étendues du katakana`);
    }
  }

  for (const k of kana) {
    for (const other of k.confusables ?? []) {
      const target = byId.get(other);
      if (!target) {
        err("kana", `${k.id}: confusable "${other}" inexistant`);
      } else if (other === k.id) {
        err("kana", `${k.id}: se déclare confusable avec lui-même`);
      } else if (!(target.confusables ?? []).includes(k.id)) {
        err("kana", `${k.id} ↔ ${other}: confusable dans un seul sens`);
      }
    }
  }

  // Every sign in exactly one lesson, and every lesson made of real signs.
  const lessonOfKana = new Map();
  const kanaLessonIds = new Set();
  for (const lesson of kanaLessons) {
    if (kanaLessonIds.has(lesson.id)) err("kana-lessons", `id de leçon "${lesson.id}" déclaré deux fois`);
    kanaLessonIds.add(lesson.id);
    if (!lesson.title?.trim()) err("kana-lessons", `${lesson.id}: titre manquant`);
    if (!lesson.intro?.trim()) err("kana-lessons", `${lesson.id}: introduction manquante`);
    if (!lesson.kana?.length) err("kana-lessons", `${lesson.id}: aucun signe`);

    for (const id of lesson.kana ?? []) {
      const k = byId.get(id);
      if (!k) {
        err("kana-lessons", `${lesson.id}: signe "${id}" inexistant`);
        continue;
      }
      if (k.script !== lesson.script) {
        err("kana-lessons", `${lesson.id} (${lesson.script}) enseigne ${id}, un ${k.script}`);
      }
      const previous = lessonOfKana.get(id);
      if (previous) err("kana-lessons", `${id} enseigné par ${previous} et par ${lesson.id}`);
      lessonOfKana.set(id, lesson.id);
    }
  }
  for (const k of kana) {
    if (!lessonOfKana.has(k.id)) err("kana-lessons", `${k.id} ${k.char} n'est enseigné par aucune leçon`);
  }

  // Words: taught signs only, rōmaji the converter agrees with, no duplicate.
  const index = kanaIndex(kana);
  const seenTerms = new Set();
  for (const word of kanaWords) {
    const label = `${word.term} (${word.romaji})`;
    if (!word.term?.trim()) {
      err("kana-words", "mot sans graphie");
      continue;
    }
    if (seenTerms.has(word.term)) err("kana-words", `${word.term}: doublon`);
    seenTerms.add(word.term);
    if (!word.french?.trim()) err("kana-words", `${label}: traduction manquante`);

    const unknown = splitKana(word.term).filter((unit) => !index.has(unit));
    if (unknown.length > 0) {
      err("kana-words", `${label}: ${unknown.join(" ")} n'est pas un signe enseigné`);
      continue;
    }
    const computed = kanaToRomaji(word.term);
    if (computed !== word.romaji) {
      err("kana-words", `${label}: le convertisseur lit "${computed}"`);
    }
  }

  // The point of the list is to read early. A first lesson set that unlocks
  // nothing would leave the reading practice empty for the first hour.
  const earlyLesson = kanaLessons.filter((lesson) => lesson.script === "hiragana")[2];
  const earlyWords = earlyLesson
    ? readableWords(kanaWords, kanaIdsThrough(kanaLessons, earlyLesson.id), kana).length
    : 0;
  if (earlyWords < 5) {
    warn("kana-words", `${earlyWords} mot(s) lisible(s) après ${earlyLesson?.id ?? "la 3e leçon"}`);
  }
  if (kanaWords.length < 150) warn("kana-words", `${kanaWords.length} mots de lecture (150 visés)`);

  const scriptCount = (script) => kana.filter((k) => k.script === script).length;
  kanaSummary =
    `Kana : ${scriptCount("hiragana")} hiragana, ${scriptCount("katakana")} katakana, ` +
    `${kanaLessons.length} leçons, ${kanaWords.length} mots de lecture ` +
    `(${earlyWords} lisibles après ${earlyLesson?.id})`;
}

// ── 12. The kanji course (Japanese only) ──────────────────────────────
//
// /japon/kanji teaches, unit by unit, the kanji the vocabulary writes. Lessons
// are derived (src/lib/kanji.ts), so the only thing that can drift is the data:
// a kanji the corpus writes with no entry in src/data/ja/kanji.ts would be
// silently dropped from the course. Every vocabulary list is covered — units,
// standalone lessons, graded readings — since all of them reach the reviews.

const kanjiCourse = isZh ? null : await import(`${DIR}/kanji.ts`);
const kanjiLib = isZh ? null : await import("../src/lib/kanji.ts");
let kanjiSummary = "";

if (kanjiCourse && kanjiLib) {
  const { kanji } = kanjiCourse;
  const { kanjiIndex, kanjiOf, deriveKanjiLessons } = kanjiLib;
  const ONYOMI = /^[\u30a1-\u30fa\u30fc]+$/;
  const KUNYOMI = /^[\u3041-\u3096.-]+$/;

  const byChar = new Map();
  for (const k of kanji) {
    const label = k.char ?? "(sans caractère)";
    if (typeof k.char !== "string" || [...k.char].length !== 1 || !isKanji(k.char)) {
      err("kanji", `${label}: "char" doit être un kanji unique`);
      continue;
    }
    if (byChar.has(k.char)) err("kanji", `${k.char} déclaré deux fois`);
    byChar.set(k.char, k);

    if (!k.meanings?.length || k.meanings.some((m) => !m?.trim())) {
      err("kanji", `${label}: au moins un sens, et aucun sens vide`);
    }
    if (k.meanings?.length > 3) warn("kanji", `${label}: ${k.meanings.length} sens (3 au plus visés)`);
    const onyomi = k.onyomi ?? [];
    const kunyomi = k.kunyomi ?? [];
    if (onyomi.length + kunyomi.length === 0) err("kanji", `${label}: aucune lecture`);
    for (const r of onyomi) {
      if (!ONYOMI.test(r)) err("kanji", `${label}: on'yomi "${r}" hors katakana`);
    }
    for (const r of kunyomi) {
      if (!KUNYOMI.test(r) || r.startsWith(".") || r.endsWith(".") || r.split(".").length > 2) {
        err("kanji", `${label}: kun'yomi "${r}" mal formé (hiragana, okurigana après un seul point)`);
      }
    }
    for (const list of [onyomi, kunyomi]) {
      if (new Set(list).size !== list.length) err("kanji", `${label}: lecture en double`);
    }
    if (!Number.isInteger(k.strokes) || k.strokes < 1 || k.strokes > 30) {
      err("kanji", `${label}: nombre de traits ${k.strokes} hors de 1..30`);
    }
    if (![1, 2, 3, 4, 5].includes(k.jlpt)) err("kanji", `${label}: niveau JLPT ${k.jlpt} hors de 1..5`);
    if (k.mnemonic !== undefined && !k.mnemonic.trim()) err("kanji", `${label}: mnémotechnique vide`);
  }

  // Coverage: every kanji any vocabulary list writes, with where it first appears.
  const needed = new Map();
  const note = (source, items) => {
    for (const item of items ?? []) {
      for (const char of kanjiOf(item.term ?? "")) if (!needed.has(char)) needed.set(char, `${source}/${item.term}`);
    }
  };
  const unitsInOrder = [...allUnits].sort((a, b) => a.number - b.number);
  for (const unit of unitsInOrder) note(unit.id, unit.vocabulary);
  for (const lesson of lessons) note(lesson.slug, lesson.vocabulary);
  for (const text of gradedTexts) note(text.id, text.vocabulary);

  const missing = [...needed].filter(([char]) => !byChar.has(char));
  if (missing.length > 0) {
    err(
      "kanji",
      `${missing.length} kanji du vocabulaire sans entrée : ` +
        missing.map(([char, where]) => `${char} (${where})`).join(", ")
    );
  }
  const unused = kanji.filter((k) => !needed.has(k.char)).map((k) => k.char);
  if (unused.length > 0) warn("kanji", `${unused.length} entrée(s) qu'aucun vocabulaire n'écrit : ${unused.join(" ")}`);

  const levelNumberOf = new Map();
  for (const unit of allUnits) levelNumberOf.set(unit.id, getLevelForUnit(unit)?.level ?? 0);
  const kanjiLessons = deriveKanjiLessons(allUnits, (id) => levelNumberOf.get(id) ?? 0, kanjiIndex(kanji));
  for (const lesson of kanjiLessons) {
    if (!lesson.level) err("kanji", `${lesson.unitId}: aucun niveau pour la leçon de kanji dérivée`);
  }

  // Readings: every vocabulary word must be readable with the readings its kanji
  // list — rendaku (人々 ひとびと), gemination (学校 がっこう), okurigana-less
  // stems (話 はなし, 受付 うけつけ) allowed. A word that is not points at a
  // reading missing from the entry, or at a wrong reading in the word. Words
  // read as a whole (jukujikun, the special readings of the Jōyō appendix) are
  // listed below; so are the few per-kanji readings no table gives as such.
  const WHOLE_WORD = new Set([
    "明日", "また明日", "今日", "昨日", "今朝", "一日", "二十日", "一人", "二人", "大人", "部屋",
    "上手", "下手", "手伝う", "手伝い", "息子", "迷子", "景色", "土産", "お土産", "風邪", "紅葉",
    "梅雨", "お腹", "眼鏡", "時計", "今年", "果物", "二十歳", "真面目",
  ]);
  const SPECIAL = { 日: ["に"], 来: ["き", "こ"], 切: ["きっ"], 子: ["ざ"] };
  const hira = (s) =>
    [...s].map((c) => { const x = c.codePointAt(0); return x >= 0x30a1 && x <= 0x30f6 ? String.fromCodePoint(x - 0x60) : c; }).join("");
  const VOICED = { か: "が", き: "ぎ", く: "ぐ", け: "げ", こ: "ご", さ: "ざ", し: "じ", す: "ず", せ: "ぜ", そ: "ぞ", た: "だ", ち: "じ", つ: "ず", て: "で", と: "ど", は: "ば", ひ: "び", ふ: "ぶ", へ: "べ", ほ: "ぼ" };
  const SEMI = { は: "ぱ", ひ: "ぴ", ふ: "ぷ", へ: "ぺ", ほ: "ぽ" };
  const I_ROW = { う: "い", く: "き", ぐ: "ぎ", す: "し", つ: "ち", ぬ: "に", ぶ: "び", む: "み", る: "り" };
  const variantCache = new Map();
  const variantsOf = (char) => {
    if (variantCache.has(char)) return variantCache.get(char);
    const k = byChar.get(char);
    const base = new Set([...(k.onyomi ?? []).map(hira), ...(SPECIAL[char] ?? [])]);
    for (const r of k.kunyomi ?? []) {
      const [stem, oku = ""] = r.split(".");
      base.add(stem);
      base.add(stem + oku);
      const last = oku.at(-1);
      if (I_ROW[last]) base.add(stem + oku.slice(0, -1) + I_ROW[last]); // 話す → はなし
      if (last === "る") base.add(stem + oku.slice(0, -1)); // 受ける → うけ
    }
    const out = new Set();
    for (const v of base) {
      out.add(v);
      if (VOICED[v[0]]) out.add(VOICED[v[0]] + v.slice(1));
      if (SEMI[v[0]]) out.add(SEMI[v[0]] + v.slice(1));
      if (v[0] === "ち") out.add("ぢ" + v.slice(1)); // 鼻血 はなぢ
      if (v[0] === "つ") out.add("づ" + v.slice(1)); // 三日月 みかづき
      if (/[つくちき]$/.test(v)) out.add(v.slice(0, -1) + "っ");
    }
    variantCache.set(char, out);
    return out;
  };
  const readable = (chars, reading) => {
    const memo = new Map();
    const go = (i, j, prev) => {
      if (i === chars.length) return j === reading.length;
      const key = `${i}:${j}`;
      if (memo.has(key)) return memo.get(key);
      const c = chars[i] === "々" ? prev : chars[i];
      let ok = false;
      if (!c || !isKanji(c)) ok = !!c && reading.startsWith(hira(c), j) && go(i + 1, j + hira(c).length, null);
      else for (const v of variantsOf(c)) if (reading.startsWith(v, j) && go(i + 1, j + v.length, c)) { ok = true; break; }
      memo.set(key, ok);
      return ok;
    };
    return go(0, 0, null);
  };
  let readingsChecked = 0;
  const unreadable = new Map();
  const vocabularyLists = [
    ...allUnits.map((unit) => [unit.id, unit.vocabulary]),
    ...lessons.map((lesson) => [lesson.slug, lesson.vocabulary]),
    ...gradedTexts.map((text) => [text.id, text.vocabulary]),
  ];
  for (const [source, items] of vocabularyLists) {
    for (const item of items ?? []) {
      const term = item.term ?? "";
      const chars = [...term].filter((c) => isKanji(c) || c === "々" || isKana(c));
      if (!chars.some(isKanji) || WHOLE_WORD.has(term) || chars.some((c) => isKanji(c) && !byChar.has(c))) continue;
      const reading = hira([...(item.reading ?? "")].filter(isKana).join(""));
      readingsChecked++;
      if (!readable(chars, reading) && !unreadable.has(term)) unreadable.set(term, `${term} [${item.reading}] (${source})`);
    }
  }
  if (unreadable.size > 0) {
    warn(
      "kanji",
      `${unreadable.size} mot(s) dont la lecture ne se déduit pas des lectures de leurs kanji ` +
        `(lecture manquante dans kanji.ts, ou mot à lire d'un bloc à ajouter à WHOLE_WORD) : ` +
        [...unreadable.values()].join(", ")
    );
  }

  kanjiSummary =
    `Kanji : ${kanji.length} entrées, ${kanjiLessons.length} leçons dérivées, ` +
    `${readingsChecked} lectures de mots vérifiées`;
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
if (kanaSummary) console.log(kanaSummary);
if (kanjiSummary) console.log(kanjiSummary);

report("WARNINGS", warnings);
report("ERREURS", errors);

if (errors.length > 0) {
  console.log(`\n✗ ${errors.length} erreur(s)`);
  process.exit(1);
}
console.log(`\n✓ Corpus valide${warnings.length ? ` (${warnings.length} warning(s))` : ""}`);
