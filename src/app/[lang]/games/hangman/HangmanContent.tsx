"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { type GameWord } from "@/lib/game-data";
import AudioButton from "@/components/AudioButton";
import { shuffleArray } from "@/lib/utils";
import { splitMora } from "@/lib/japanese";
import { LANGUAGES, langHref, type LanguageCode, type LanguageSegment } from "@/lib/language";
import { useClientState } from "@/lib/use-client-state";

type Phase = "playing" | "won" | "lost";

const MAX_ERRORS = 6;
const CHOICE_COUNT = 20;

// One game, two boards. Mandarin hides the characters of the word and the reader
// guesses those; Japanese hides the mora of the reading — 今日 is two characters
// but three mora, so a per-character split would be the wrong board entirely.
// The Japanese pool is restricted upstream to kana-written words, where the term
// is its own reading (see ./page.tsx).
const COPY: Record<LanguageCode, { title: string; prompt: string }> = {
  zh: { title: "Pendu chinois", prompt: "Quel est le caractère chinois pour :" },
  ja: { title: "Pendu japonais", prompt: "Quelle est la lecture en kana de :" },
};

function buildChoices(
  target: GameWord,
  allWords: GameWord[],
  unitsOf: (word: GameWord) => string[]
): string[] {
  const pool = new Set<string>(unitsOf(target));

  const allUnits = allWords.flatMap(unitsOf);
  const shuffled = shuffleArray([...new Set(allUnits)].filter((c) => !pool.has(c)));

  const needed = CHOICE_COUNT - pool.size;
  for (let i = 0; i < needed && i < shuffled.length; i++) {
    pool.add(shuffled[i]);
  }

  return shuffleArray([...pool]);
}

function drawRound(
  words: GameWord[],
  unitsOf: (word: GameWord) => string[]
): { target: GameWord; choices: string[] } | null {
  if (words.length === 0) return null;
  const target = words[Math.floor(Math.random() * words.length)];
  return { target, choices: buildChoices(target, words, unitsOf) };
}

export default function HangmanContent({
  lang,
  words,
}: {
  lang: LanguageSegment;
  words: GameWord[];
}) {
  const language = LANGUAGES[lang];
  const isJapanese = language.code === "ja";
  const copy = COPY[language.code];

  const unitsOf = useCallback(
    (word: GameWord) => (isJapanese ? splitMora(word.term) : [...word.term]),
    [isJapanese]
  );

  // The first word is drawn at random, which the prerender cannot do without
  // the server and the client disagreeing: draw it once hydration is over.
  const [round, setRound] = useClientState(() => drawRound(words, unitsOf), null);
  const target = round?.target ?? null;
  const choices = round?.choices ?? [];
  const [guessed, setGuessed] = useState<Set<string>>(new Set());
  const [errors, setErrors] = useState(0);
  // The rōmaji spells the kana out loud, so it would hand over the answer: the
  // Japanese board starts with it hidden. The pinyin gives away no character.
  const [showRomanization, setShowRomanization] = useState(!isJapanese);
  const [phase, setPhase] = useState<Phase>("playing");

  function initGame() {
    setRound(drawRound(words, unitsOf));
    setGuessed(new Set());
    setErrors(0);
    setPhase("playing");
  }

  function handleChoice(unit: string) {
    if (phase !== "playing" || !target || guessed.has(unit)) return;

    const newGuessed = new Set(guessed);
    newGuessed.add(unit);
    setGuessed(newGuessed);

    const targetUnits = unitsOf(target);

    if (targetUnits.includes(unit)) {
      if (targetUnits.every((c) => newGuessed.has(c))) setPhase("won");
    } else {
      const newErrors = errors + 1;
      setErrors(newErrors);
      if (newErrors >= MAX_ERRORS) setPhase("lost");
    }
  }

  if (!target) {
    return (
      <div className="mx-auto max-w-xl py-12 text-center">
        <p className="text-stone-500">Chargement...</p>
      </div>
    );
  }

  const targetUnits = unitsOf(target);

  return (
    <div className="mx-auto max-w-xl">
      <div className="mb-6 flex items-center justify-between">
        <Link
          href={langHref(lang, "/games")}
          className="text-sm text-stone-400 hover:text-stone-600 transition-colors"
        >
          &larr; Retour aux jeux
        </Link>
      </div>

      <h1 className="text-display font-bold mb-6 text-center text-stone-900">{copy.title}</h1>

      {/* Romanization toggle */}
      <div className="mb-4 flex justify-end">
        <label className="flex items-center gap-2 text-sm text-stone-500">
          <input
            type="checkbox"
            checked={showRomanization}
            onChange={(e) => setShowRomanization(e.target.checked)}
            className="rounded"
          />
          Afficher le {language.copy.readingPrimary}
        </label>
      </div>

      {/* Question */}
      <div className="mb-6 rounded-xl border border-stone-200 bg-stone-50 p-4 text-center">
        <p className="text-sm text-stone-500">{copy.prompt}</p>
        <p className="mt-1 text-xl font-bold text-stone-900">{target.french}</p>
        {showRomanization && (
          <p className="mt-1 text-sm italic text-stone-500">{target.romanization}</p>
        )}
      </div>

      {/* Error indicators */}
      <div className="mb-6 flex items-center justify-center gap-2">
        {Array.from({ length: MAX_ERRORS }).map((_, i) => (
          <div
            key={i}
            aria-hidden
            className={`h-4 w-4 rounded-full border-2 transition-colors ${
              i < errors ? "border-red-400 bg-red-400" : "border-stone-300 bg-white"
            }`}
          />
        ))}
        <span className="ml-2 text-sm text-stone-400">
          {MAX_ERRORS - errors} essais restants
        </span>
      </div>

      {/* Word display */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
        {targetUnits.map((unit, i) => {
          const revealed = guessed.has(unit) || phase !== "playing";
          return (
            <div
              key={i}
              lang={revealed ? language.contentLang : undefined}
              className={`flex h-16 min-w-16 items-center justify-center rounded-xl border-2 px-2 text-2xl font-bold transition-all ${
                revealed
                  ? phase === "lost" && !guessed.has(unit)
                    ? "border-red-300 bg-red-50 text-red-600 chinese"
                    : "border-emerald-300 bg-emerald-50 text-stone-900 chinese"
                  : "border-stone-300 bg-white text-stone-300"
              }`}
            >
              {revealed ? unit : "_"}
            </div>
          );
        })}
      </div>

      {/* Result */}
      {phase !== "playing" && (
        <div
          className={`mb-6 rounded-xl border p-6 text-center ${
            phase === "won" ? "border-emerald-200 bg-emerald-50" : "border-red-200 bg-red-50"
          }`}
        >
          <div className="mb-2 text-3xl" aria-hidden>
            {phase === "won" ? "\u{1F389}" : "\u{1F614}"}
          </div>
          <h2
            className={`text-title font-bold mb-2 ${
              phase === "won" ? "text-emerald-700" : "text-red-700"
            }`}
          >
            {phase === "won" ? "Bravo !" : "Perdu..."}
          </h2>
          <p className="mb-1 text-lg font-bold text-stone-900 chinese" lang={language.contentLang}>
            {target.term}
          </p>
          <p className="mb-3 text-sm text-stone-500">{target.romanization}</p>
          <AudioButton text={target.term} size="lg" />
          <div className="mt-4">
            <button
              onClick={initGame}
              className="rounded-xl bg-primary px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary/90"
            >
              Mot suivant
            </button>
          </div>
        </div>
      )}

      {/* Choice grid */}
      {phase === "playing" && (
        <div className="grid grid-cols-5 gap-2">
          {choices.map((unit) => {
            const isGuessed = guessed.has(unit);
            const isInWord = targetUnits.includes(unit);
            let cls =
              "flex h-12 items-center justify-center rounded-lg border-2 text-lg font-bold chinese transition-all ";
            if (isGuessed && isInWord) {
              cls += "border-emerald-300 bg-emerald-50 text-emerald-700 cursor-default";
            } else if (isGuessed && !isInWord) {
              cls += "border-stone-200 bg-stone-100 text-stone-300 cursor-default";
            } else {
              cls +=
                "border-stone-200 bg-white text-stone-700 hover:border-primary hover:bg-primary/5 cursor-pointer";
            }
            return (
              <button
                key={unit}
                onClick={() => handleChoice(unit)}
                disabled={isGuessed}
                lang={language.contentLang}
                className={cls}
              >
                {unit}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
