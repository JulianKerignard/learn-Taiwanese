// Corpus invariants. Fails the build on anything that silently teaches an error:
// misplaced furigana, unanswerable exercises and quiz questions, impossible pitch
// accents, prerequisites that lock a unit, duplicate ids, divergent readings or
// pitches, a metadata catalogue that no longer matches the units it describes,
// and a game word list that has drifted from the corpus.
//
// Everything the app reads as content is covered: the course units, the
// standalone lessons, the graded readings, the pitch accent data and the
// generated game word list. A file that escapes this script ships unverified.
//
//   npm run validate
//
// Errors exit 1. Warnings are reported but do not fail.

import { readFileSync } from "node:fs";

import { allUnits, chapters, jlptLevels } from "../src/data/course/index.ts";
import {
  allUnitMetas,
  chapters as metaChapters,
  jlptLevels as metaJlptLevels,
} from "../src/data/course/meta.ts";
import { accentGroups, minimalPairs } from "../src/data/pitch-accent.ts";
import { lessons } from "../src/data/lessons.ts";
import { gradedTexts } from "../src/data/readings.ts";
import { gameWords } from "../src/data/game-words.ts";
import { splitMora, countMora, isKana, isKanji } from "../src/lib/japanese.ts";
// The generator is the single source of truth for what game-words.ts should
// contain; importing it is what wires its --check into the build.
import {
  collect as collectGameWords,
  render as renderGameWords,
  OUTPUT as GAME_WORDS_FILE,
} from "./generate-game-words.mjs";
import { dictionaryEntries } from "../src/data/dictionary.ts";
// Same arrangement for the dictionary: its generator owns the expected content.
import {
  collectDictionary,
  render as renderDictionary,
  OUTPUT as DICTIONARY_FILE,
} from "./generate-dictionary.mjs";

const errors = [];
const warnings = [];

const err = (check, message) => errors.push({ check, message });
const warn = (check, message) => warnings.push({ check, message });

const isAllKana = (text) => [...text].every((c) => isKana(c));

// 々 and 〆 stand in for a kanji and carry a reading like one, but no kanji range
// contains them — treating them as kana would let their reading go unchecked.
const isKanjiLike = (char) => isKanji(char) || char === "々" || char === "〆";

/** A kanji almost never reads longer than this; 妹 = いもうと is the corpus maximum. */
const MAX_MORA_PER_KANJI = 4;

/** A sentence reading keeps the punctuation of the sentence it transcribes. */
const READING_PUNCTUATION = /[、。，．？！：；「」『』（）〜…・\s]/g;

// ── 1. Furigana actually line up ──────────────────────────────────────
//
// This is the check that matters most. A misplaced reading is invisible during
// review and teaches the learner a word that does not exist.

/**
 * Checks one ruby segment against the run of text it sits above.
 *
 * Concatenating the segments proves nothing on its own: swap the readings of two
 * segments and the concatenation is unchanged while every furigana is wrong. So
 * each segment is also judged on its own.
 *
 * What can be verified without a dictionary:
 *   - a segment with no kanji reads exactly as it is written;
 *   - the kana written inside a segment (okurigana, a leading お…) appear
 *     unchanged at the same end of its reading;
 *   - the reading is long enough for the kanji it covers (≥ 1 mora each) and
 *     short enough (≤ 4 mora each, the corpus maximum).
 *
 * What cannot: whether 電 really reads でん. Two kanji segments of similar length
 * with swapped readings — 電車 as [電=しゃ][車=でん] — satisfy every rule here.
 * Catching that needs a kanji reading dictionary, which this script does not
 * carry; the guards below are what narrows the gap without one.
 */
function checkSegment(label, segment) {
  const chars = [...segment.text];
  const kanji = chars.filter(isKanjiLike).length;

  if (kanji === 0) {
    // Nothing to place: the reading, if any, can only restate the text.
    if (segment.reading && segment.reading !== segment.text) {
      err(
        "furigana",
        `${label}: le segment "${segment.text}" est en kana mais porte la lecture "${segment.reading}"`
      );
    } else if (segment.reading) {
      warn("furigana", `${label}: le segment "${segment.text}" est déjà en kana mais porte une lecture`);
    }
    return;
  }

  if (!segment.reading) {
    err("furigana", `${label}: le segment "${segment.text}" contient un kanji sans lecture`);
    return;
  }
  if (!isAllKana(segment.reading)) {
    err("furigana", `${label}: la lecture "${segment.reading}" n'est pas en kana`);
    return;
  }

  // The kana written in the segment are read as written, so they must sit at the
  // same end of the reading. This is what catches a reading shifted by one kana.
  let head = 0;
  while (head < chars.length && !isKanjiLike(chars[head])) head += 1;
  let tail = chars.length;
  while (tail > 0 && !isKanjiLike(chars[tail - 1])) tail -= 1;

  const leading = chars.slice(0, head).join("");
  const trailing = chars.slice(tail).join("");
  if (leading && !segment.reading.startsWith(leading)) {
    err(
      "furigana",
      `${label}: "${segment.text}" commence par "${leading}" mais sa lecture "${segment.reading}" non — furigana décalés`
    );
  }
  if (trailing && !segment.reading.endsWith(trailing)) {
    err(
      "furigana",
      `${label}: "${segment.text}" finit par "${trailing}" mais sa lecture "${segment.reading}" non — furigana décalés`
    );
  }

  // Mora budget: the kana of the segment read as themselves, each kanji adds
  // between one and four mora.
  const kanaMora = countMora(chars.filter((c) => !isKanjiLike(c)).join(""));
  const mora = countMora(segment.reading);
  if (mora < kanji + kanaMora) {
    err(
      "furigana",
      `${label}: "${segment.text}" (${kanji} kanji) lu "${segment.reading}" — ${mora} mores, il en faut au moins ${kanji + kanaMora}`
    );
  } else if (mora > MAX_MORA_PER_KANJI * kanji + kanaMora) {
    err(
      "furigana",
      `${label}: "${segment.text}" (${kanji} kanji) lu "${segment.reading}" — ${mora} mores, plus de ${MAX_MORA_PER_KANJI} par kanji`
    );
  }
}

function checkSegments(label, item) {
  const { term, kana, segments } = item;

  if (!term || !kana) {
    err("vocabulaire", `${label}: term ou kana manquant`);
    return;
  }
  if (!isAllKana(kana)) {
    err("vocabulaire", `${label}: la lecture "${kana}" contient autre chose que des kana`);
  }
  if (!segments?.length) {
    // Legitimate for a kana-only word; coarse as soon as a kanji appears.
    if ([...term].some(isKanji)) {
      warn("furigana", `${label}: contient un kanji mais aucun segment — la lecture couvrira tout le mot`);
    }
    return;
  }

  const rebuiltTerm = segments.map((s) => s.text).join("");
  if (rebuiltTerm !== term) {
    err("furigana", `${label}: les segments composent "${rebuiltTerm}" au lieu de "${term}"`);
  }

  const rebuiltKana = segments.map((s) => s.reading ?? s.text).join("");
  if (rebuiltKana !== kana) {
    err(
      "furigana",
      `${label}: les segments se lisent "${rebuiltKana}" au lieu de "${kana}" — furigana mal placés`
    );
  }

  for (const segment of segments) checkSegment(label, segment);
}

/**
 * Same segment invariants for a sentence, whose `term`/`kana` pair is named
 * differently and whose reading keeps the punctuation of the original.
 */
function checkSentenceSegments(check, label, sentence) {
  if (sentence.segments?.length) {
    const rebuilt = sentence.segments.map((s) => s.text).join("");
    if (rebuilt !== sentence.japanese) {
      err(check, `${label}: les segments composent "${rebuilt}" au lieu de "${sentence.japanese}"`);
    }
    const rebuiltKana = sentence.segments.map((s) => s.reading ?? s.text).join("");
    if (rebuiltKana !== sentence.kana) {
      err(
        check,
        `${label}: les segments se lisent "${rebuiltKana}" au lieu de "${sentence.kana}" — furigana mal placés`
      );
    }
    for (const segment of sentence.segments) checkSegment(label, segment);
  } else if ([...sentence.japanese].some(isKanjiLike)) {
    warn(check, `${label}: contient un kanji mais aucun segment — la lecture couvrira toute la phrase`);
  }
}

function checkPitch(label, kana, pitch) {
  if (pitch === undefined) return;
  const mora = countMora(kana);
  if (!Number.isInteger(pitch) || pitch < 0) {
    err("accent", `${label}: pitch ${pitch} invalide`);
  } else if (pitch > mora) {
    err("accent", `${label}: chute sur la more ${pitch} alors que "${kana}" n'en compte que ${mora}`);
  }
}

// ── 2. Vocabulary ─────────────────────────────────────────────────────

// term -> { kana: Map<reading, source>, pitch: Map<downstep, source> }.
// A word taught with two readings is a warning; so is a word taught with two
// pitches, which is just as audible and used to go unreported.
const readings = new Map();

function noteReading(source, item) {
  const entry = readings.get(item.term) ?? { kana: new Map(), pitch: new Map() };
  if (!entry.kana.has(item.kana)) entry.kana.set(item.kana, source);
  if (item.pitch !== undefined && !entry.pitch.has(item.pitch)) {
    entry.pitch.set(item.pitch, source);
  }
  readings.set(item.term, entry);
}

let vocabCount = 0;

for (const unit of allUnits) {
  const seen = new Set();
  for (const item of unit.vocabulary) {
    vocabCount += 1;
    const label = `${unit.id}/${item.term}`;

    if (seen.has(item.term)) err("vocabulaire", `${label}: doublon dans l'unité`);
    seen.add(item.term);

    checkSegments(label, item);
    checkPitch(label, item.kana, item.pitch);

    if (!item.french?.trim()) err("vocabulaire", `${label}: traduction française manquante`);
    if (!item.romaji?.trim()) err("vocabulaire", `${label}: rōmaji manquant`);

    // Chapter 1 teaches the syllabaries: no kanji may appear before they exist.
    if (unit.chapter === 1 && [...item.term].some(isKanji)) {
      err("vocabulaire", `${label}: kanji dans le chapitre 1, qui enseigne les kana`);
    }

    noteReading(unit.id, item);
  }
}

// ── 3. Every exercise is answerable ───────────────────────────────────

const exerciseIds = new Map();
const IGNORED = /[、。？！：；「」『』\s]/g;

for (const unit of allUnits) {
  if (unit.exercises.length === 0) err("exercices", `${unit.id}: aucun exercice`);

  unit.exercises.forEach((exercise, index) => {
    const label = `${unit.id}/${exercise.id}`;

    if (exerciseIds.has(exercise.id)) {
      err("ids", `id "${exercise.id}" partagé par ${exerciseIds.get(exercise.id)} et ${unit.id}`);
    } else {
      exerciseIds.set(exercise.id, unit.id);
    }
    const expected = `${unit.id}-ex${index + 1}`;
    if (exercise.id !== expected) warn("ids", `${label}: attendu "${expected}"`);

    const options = exercise.options ?? [];

    if (exercise.type === "reorder") {
      if (options.length < 2) {
        err("exercices", `${label}: reorder avec ${options.length} tuile(s)`);
        return;
      }
      const target = exercise.correctAnswer.replace(IGNORED, "");
      const built = options.join("").replace(IGNORED, "");
      if (built.length !== target.length) {
        err(
          "exercices",
          `${label}: les tuiles (${built.length} signes) ne peuvent pas composer la réponse (${target.length})`
        );
      } else if ([...built].sort().join("") !== [...target].sort().join("")) {
        err("exercices", `${label}: les tuiles ne contiennent pas les mêmes signes que la réponse`);
      }
      return;
    }

    if (options.length === 0) {
      if (exercise.type === "comprehension" || exercise.type === "listen") {
        err("exercices", `${label}: type "${exercise.type}" sans options — question à choix sans choix`);
      } else {
        warn("exercices", `${label}: type "${exercise.type}" sans options — réponse en saisie libre`);
      }
      return;
    }

    if (!options.includes(exercise.correctAnswer)) {
      err("exercices", `${label}: correctAnswer absent des options`);
    }
    if (new Set(options).size !== options.length) {
      err("exercices", `${label}: options dupliquées`);
    }
    for (const field of ["optionsHint", "optionsKana"]) {
      const extra = exercise[field];
      if (extra && extra.length !== options.length) {
        err("exercices", `${label}: ${field} a ${extra.length} entrées pour ${options.length} options`);
      }
    }
    // A listen exercise sends `question` straight to speech synthesis.
    if (exercise.type === "listen" && /[a-zA-ZÀ-ÿ]/.test(exercise.question)) {
      err(
        "exercices",
        `${label}: la consigne d'écoute contient du texte latin — il serait lu par la synthèse vocale`
      );
    }
  });
}

// ── 4. The path is walkable ───────────────────────────────────────────

const pathOrder = chapters.flatMap((chapter) => chapter.unitIds);
const positionOf = new Map(pathOrder.map((id, index) => [id, index]));

for (const unit of allUnits) {
  const position = positionOf.get(unit.id);
  if (position === undefined) {
    err("parcours", `${unit.id} existe mais n'est référencée par aucun chapitre`);
    continue;
  }
  for (const prerequisite of unit.prerequisites) {
    const at = positionOf.get(prerequisite);
    if (at === undefined) {
      err("parcours", `${unit.id} exige ${prerequisite}, qui n'existe pas`);
    } else if (at > position) {
      err("parcours", `${unit.id} (rang ${position}) exige ${prerequisite} (rang ${at}) : unité verrouillée`);
    }
  }
}

const declared = new Set(allUnits.map((u) => u.id));
for (const id of pathOrder) {
  if (!declared.has(id)) err("parcours", `${id} référencé par un chapitre mais aucune unité ne l'exporte`);
}

// Every chapter a live level claims must exist, or the level renders empty.
for (const level of jlptLevels) {
  if (level.comingSoon) continue;
  for (const number of level.chapterNumbers) {
    if (!chapters.some((c) => c.number === number)) {
      err("parcours", `${level.slug} référence le chapitre ${number}, absent`);
    }
  }
}

// ── 5. The metadata catalogue matches the units ───────────────────────
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
      err("meta", `${unit.id}.${field} : meta.ts dit ${JSON.stringify(meta[field])}, l'unité dit ${JSON.stringify(unit[field])}`);
    }
  }
  if (meta.prerequisites.join("|") !== unit.prerequisites.join("|")) {
    err("meta", `${unit.id}.prerequisites divergent entre meta.ts et l'unité`);
  }
});

for (const meta of allUnitMetas) {
  if (!declared.has(meta.id)) err("meta", `${meta.id} décrite par meta.ts mais aucune unité ne l'exporte`);
}

if (JSON.stringify(metaChapters) !== JSON.stringify(chapters)) {
  err("meta", "les chapitres de meta.ts divergent de ceux de index.ts");
}
if (JSON.stringify(metaJlptLevels) !== JSON.stringify(jlptLevels)) {
  err("meta", "les niveaux JLPT de meta.ts divergent de ceux de index.ts");
}

// ── 6. Pitch accent data ──────────────────────────────────────────────

for (const group of accentGroups) {
  for (const word of group.words) {
    const label = `${group.id}/${word.term}`;
    checkSegments(label, word);
    checkPitch(label, word.kana, word.downstep);

    const mora = countMora(word.kana);
    const actual =
      word.downstep <= 0
        ? "heiban"
        : word.downstep === 1
          ? "atamadaka"
          : word.downstep >= mora
            ? "odaka"
            : "nakadaka";
    if (actual !== group.id) {
      err("accent", `${label}: chute ${word.downstep} sur ${mora} mores = ${actual}, rangé dans ${group.id}`);
    }
  }
}

for (const pair of minimalPairs) {
  if (!isAllKana(pair.kana)) err("accent", `paire ${pair.kana}: la lecture n'est pas en kana`);
  if (pair.senses.length < 2) err("accent", `paire ${pair.kana}: moins de deux sens`);

  const downsteps = new Set();
  for (const sense of pair.senses) {
    checkPitch(`paire ${pair.kana}/${sense.term}`, pair.kana, sense.downstep);
    if (downsteps.has(sense.downstep)) {
      err(
        "accent",
        `paire ${pair.kana}: ${sense.term} porte le même accent qu'un autre sens — ce n'est pas une paire minimale`
      );
    }
    downsteps.add(sense.downstep);
  }
}

// ── 7. The standalone lessons ─────────────────────────────────────────
//
// src/data/lessons feeds the dictionary, the mini-games and the review queue
// exactly like the course does, so its vocabulary gets the same invariants,
// furigana included. The quiz is a lesson's only graded step: an unanswerable
// question there is as bad as a broken exercise in a unit.

const lessonIds = new Map();
const quizIds = new Map();
let lessonVocabCount = 0;
let quizCount = 0;

for (const lesson of lessons) {
  const previousLesson = lessonIds.get(lesson.id);
  if (previousLesson) {
    err("lecons", `id de leçon "${lesson.id}" partagé avec ${previousLesson}`);
  } else {
    lessonIds.set(lesson.id, lesson.slug);
  }

  const seenTerms = new Set();
  for (const item of lesson.vocabulary) {
    lessonVocabCount += 1;
    const label = `${lesson.id}/${item.term}`;

    if (seenTerms.has(item.term)) err("lecons", `${label}: doublon dans la leçon`);
    seenTerms.add(item.term);

    checkSegments(label, item);
    checkPitch(label, item.kana, item.pitch);
    if (!item.french?.trim()) err("lecons", `${label}: traduction française manquante`);
    if (!item.romaji?.trim()) err("lecons", `${label}: rōmaji manquant`);
    noteReading(lesson.id, item);
  }

  for (const phrase of lesson.phrases ?? []) {
    if (!phrase.japanese?.trim()) {
      err("lecons", `${lesson.id}: phrase sans texte japonais`);
      continue;
    }
    const label = `${lesson.id}/${phrase.japanese}`;
    if (!phrase.kana?.trim()) err("lecons", `${label}: kana manquant`);
    else if (!isAllKana(phrase.kana.replace(READING_PUNCTUATION, ""))) {
      err("lecons", `${label}: la lecture "${phrase.kana}" contient autre chose que des kana`);
    }
    if (!phrase.romaji?.trim()) err("lecons", `${label}: rōmaji manquant`);
    if (!phrase.french?.trim()) err("lecons", `${label}: traduction française manquante`);
    checkSentenceSegments("lecons", label, phrase);
  }

  const quiz = lesson.quiz ?? [];
  if (quiz.length === 0) warn("lecons", `${lesson.id}: aucun quiz`);

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

// ── 8. Graded readings ────────────────────────────────────────────────
//
// ReadingText renders the sentences one by one with their furigana and reveals
// the translation on tap. A sentence without its translation is a dead end for
// the reader; a sentence whose segments do not line up teaches a wrong reading
// in the one place the learner has no vocabulary card to check against.

const textIds = new Map();
let sentenceCount = 0;
let readingVocabCount = 0;

for (const text of gradedTexts) {
  const previous = textIds.get(text.id);
  if (previous) {
    err("lectures", `id de lecture "${text.id}" déclaré deux fois`);
  } else {
    textIds.set(text.id, text.title);
  }

  if (!text.sentences?.length) {
    err("lectures", `${text.id}: aucune phrase`);
    continue;
  }

  for (const sentence of text.sentences) {
    sentenceCount += 1;
    if (!sentence.japanese?.trim()) {
      err("lectures", `${text.id}: phrase sans texte japonais`);
      continue;
    }
    const label = `${text.id}/${sentence.japanese}`;
    if (!sentence.french?.trim()) err("lectures", `${label}: traduction manquante`);
    if (!sentence.romaji?.trim()) err("lectures", `${label}: rōmaji manquant`);
    if (!sentence.kana?.trim()) {
      err("lectures", `${label}: kana manquant`);
    } else if (!isAllKana(sentence.kana.replace(READING_PUNCTUATION, ""))) {
      err("lectures", `${label}: la lecture "${sentence.kana}" contient autre chose que des kana`);
    }
    checkSentenceSegments("lectures", label, sentence);
  }

  // `text` is derived from the sentences in readings.ts. Re-deriving it here is
  // what keeps that derivation from being quietly replaced by a hand-written copy.
  const joined = text.sentences.map((sentence) => sentence.japanese).join("");
  if (text.text !== joined) {
    err(
      "lectures",
      `${text.id}: le texte suivi ne correspond pas à la concaténation des phrases`
    );
  }

  const seenTerms = new Set();
  for (const item of text.vocabulary) {
    readingVocabCount += 1;
    const label = `${text.id}/${item.term}`;
    if (seenTerms.has(item.term)) err("lectures", `${label}: doublon dans le lexique`);
    seenTerms.add(item.term);

    checkSegments(label, item);
    checkPitch(label, item.kana, item.pitch);
    if (!item.french?.trim()) err("lectures", `${label}: traduction française manquante`);
    if (!item.romaji?.trim()) err("lectures", `${label}: rōmaji manquant`);
    noteReading(text.id, item);
  }
}

// ── 9. One word, one reading and one pitch ────────────────────────────
//
// Runs after all three sources have been recorded above.

for (const [term, entry] of readings) {
  if (entry.kana.size > 1) {
    const list = [...entry.kana].map(([kana, source]) => `${kana} (${source})`).join(" vs ");
    warn("vocabulaire", `${term} : lectures divergentes — ${list}`);
  }
  if (entry.pitch.size > 1) {
    const list = [...entry.pitch].map(([pitch, source]) => `${pitch} (${source})`).join(" vs ");
    warn("vocabulaire", `${term} : accents divergents — ${list}`);
  }
}

// ── 10. The generated game word list matches the corpus ───────────────
//
// src/data/game-words.ts is generated so /games/* never bundles the units.
// Regenerate it with `npm run generate-game-words` when this fails.
//
// The expected list comes from the generator itself rather than from a second
// copy of its rules here: a change to what the generator collects can no longer
// drift away from what this section accepts.

const expectedGameWords = new Map(collectGameWords().map((word) => [word.term, word]));

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
  for (const field of ["kana", "romaji", "french"]) {
    if (expected[field] !== word[field]) {
      err("game-words", `${word.term}.${field} : game-words.ts diverge du corpus — régénère-le`);
    }
  }
}

// Both directions. Counting alone lets a duplicate cover for an omission.
for (const term of expectedGameWords.keys()) {
  if (!listedGameWords.has(term)) {
    err("game-words", `${term} est dans le corpus mais absent de game-words.ts — régénère-le`);
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

// ── 11. The generated dictionary matches the corpus ───────────────────
//
// src/data/dictionary.ts is generated so /dictionary never bundles the units.
// Regenerate it with `npm run generate-dictionary` when this fails.
//
// Same arrangement as the game word list: the expected entries come from the
// generator itself, so a change to what it collects can no longer drift away
// from what this section accepts.

const expectedDict = new Map(collectDictionary().map((entry) => [entry.term, entry]));
const listedDict = new Set();
const dictErrorsBefore = errors.length;

/** Field-by-field so a changed reading, level, example or source is named. */
function diffDictionaryEntry(expected, actual) {
  const differences = [];
  for (const field of ["kana", "romaji", "french", "english", "jlptLevel"]) {
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

// Both directions. Counting alone lets a duplicate cover for an omission.
for (const term of expectedDict.keys()) {
  if (!listedDict.has(term)) {
    err("dictionary", `${term} est dans le corpus mais absent de dictionary.ts — régénère-le`);
  }
}

// Order carries meaning: it is the page's default gojūon sort.
// Only worth reporting once the two lists hold the same words.
const expectedDictOrder = [...expectedDict.keys()].join("|");
const listedDictOrder = dictionaryEntries.map((entry) => entry.term).join("|");
if (errors.length === dictErrorsBefore && expectedDictOrder !== listedDictOrder) {
  err("dictionary", "dictionary.ts n'est plus trié comme le corpus — régénère-le");
}

// The checks above compare data; this one compares the file. It is the
// generator's --check, run as part of the build instead of by hand: it also
// catches a header, a comment or a count edited into the generated file.
try {
  if (readFileSync(DICTIONARY_FILE, "utf8") !== renderDictionary([...expectedDict.values()])) {
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

const moraTotal = allUnits.reduce(
  (n, u) => n + u.vocabulary.reduce((m, v) => m + splitMora(v.kana).length, 0),
  0
);

console.log(
  `Corpus : ${allUnits.length} unités, ${chapters.length} chapitres, ` +
    `${vocabCount + lessonVocabCount + readingVocabCount} entrées de vocabulaire ` +
    `(${vocabCount} cours / ${moraTotal} mores, ${lessonVocabCount} leçons, ` +
    `${readingVocabCount} lectures), ` +
    `${exerciseIds.size} exercices, ${quizCount} questions de quiz, ` +
    `${gradedTexts.length} lectures (${sentenceCount} phrases), ` +
    `${accentGroups.reduce((n, g) => n + g.words.length, 0)} mots d'accent, ` +
    `${minimalPairs.length} paires minimales, ${gameWords.length} mots de jeu`
);

report("WARNINGS", warnings);
report("ERREURS", errors);

if (errors.length > 0) {
  console.log(`\n✗ ${errors.length} erreur(s)`);
  process.exit(1);
}
console.log(`\n✓ Corpus valide${warnings.length ? ` (${warnings.length} warning(s))` : ""}`);
