// Corpus invariants. Fails the build on anything that silently teaches an error:
// misplaced furigana, unanswerable exercises, impossible pitch accents,
// prerequisites that lock a unit, duplicate ids, divergent readings, and a
// metadata catalogue that no longer matches the units it describes.
//
//   npm run validate
//
// Errors exit 1. Warnings are reported but do not fail.

import { allUnits, chapters, jlptLevels } from "../src/data/course/index.ts";
import {
  allUnitMetas,
  chapters as metaChapters,
  jlptLevels as metaJlptLevels,
} from "../src/data/course/meta.ts";
import { accentGroups, minimalPairs } from "../src/data/pitch-accent.ts";
import { splitMora, countMora, isKana, isKanji } from "../src/lib/japanese.ts";

const errors = [];
const warnings = [];

const err = (check, message) => errors.push({ check, message });
const warn = (check, message) => warnings.push({ check, message });

const isAllKana = (text) => [...text].every((c) => isKana(c));

// ── 1. Furigana actually line up ──────────────────────────────────────
//
// This is the check that matters most. A misplaced reading is invisible during
// review and teaches the learner a word that does not exist.

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

  for (const segment of segments) {
    if (!segment.reading && [...segment.text].some(isKanji)) {
      err("furigana", `${label}: le segment "${segment.text}" contient un kanji sans lecture`);
    }
    if (segment.reading && !isAllKana(segment.reading)) {
      err("furigana", `${label}: la lecture "${segment.reading}" n'est pas en kana`);
    }
    if (segment.reading && isAllKana(segment.text)) {
      warn("furigana", `${label}: le segment "${segment.text}" est déjà en kana mais porte une lecture`);
    }
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

const readings = new Map();
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

    const entry = readings.get(item.term) ?? new Map();
    if (!entry.has(item.kana)) entry.set(item.kana, unit.id);
    readings.set(item.term, entry);
  }
}

for (const [term, variants] of readings) {
  if (variants.size > 1) {
    const list = [...variants].map(([kana, unit]) => `${kana} (${unit})`).join(" vs ");
    warn("vocabulaire", `${term} : lectures divergentes — ${list}`);
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

const META_FIELDS = [
  "id",
  "number",
  "chapter",
  "title",
  "titleJa",
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
    `${vocabCount} entrées de vocabulaire (${moraTotal} mores), ` +
    `${exerciseIds.size} exercices, ` +
    `${accentGroups.reduce((n, g) => n + g.words.length, 0)} mots d'accent, ` +
    `${minimalPairs.length} paires minimales`
);

report("WARNINGS", warnings);
report("ERREURS", errors);

if (errors.length > 0) {
  console.log(`\n✗ ${errors.length} erreur(s)`);
  process.exit(1);
}
console.log(`\n✓ Corpus valide${warnings.length ? ` (${warnings.length} warning(s))` : ""}`);
