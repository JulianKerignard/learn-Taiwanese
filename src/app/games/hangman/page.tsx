"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { getRandomWords, getAllGameWords, type GameWord } from "@/lib/game-data";
import AudioButton from "@/components/AudioButton";

type Phase = "playing" | "won" | "lost";

const MAX_ERRORS = 6;

function shuffleArray<T>(arr: T[]): T[] {
  const s = [...arr];
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [s[i], s[j]] = [s[j], s[i]];
  }
  return s;
}

function buildChoices(target: GameWord, allWords: GameWord[]): string[] {
  const targetChars = [...target.character];
  const pool = new Set<string>(targetChars);

  const allChars = allWords.flatMap((w) => [...w.character]);
  const shuffled = shuffleArray(
    [...new Set(allChars)].filter((c) => !pool.has(c))
  );

  const needed = 20 - pool.size;
  for (let i = 0; i < needed && i < shuffled.length; i++) {
    pool.add(shuffled[i]);
  }

  return shuffleArray([...pool]);
}

export default function HangmanPage() {
  const [allWords, setAllWords] = useState<GameWord[]>([]);
  const [target, setTarget] = useState<GameWord | null>(null);
  const [choices, setChoices] = useState<string[]>([]);
  const [guessed, setGuessed] = useState<Set<string>>(new Set());
  const [errors, setErrors] = useState(0);
  const [showPinyin, setShowPinyin] = useState(true);
  const [phase, setPhase] = useState<Phase>("playing");

  const initGame = useCallback(
    (words?: GameWord[]) => {
      const pool = words ?? allWords;
      if (pool.length === 0) return;
      const word = pool[Math.floor(Math.random() * pool.length)];
      setTarget(word);
      setChoices(buildChoices(word, pool));
      setGuessed(new Set());
      setErrors(0);
      setPhase("playing");
    },
    [allWords]
  );

  useEffect(() => {
    const words = getAllGameWords();
    setAllWords(words);
    initGame(words);
  }, []);

  function handleChoice(char: string) {
    if (phase !== "playing" || !target || guessed.has(char)) return;

    const newGuessed = new Set(guessed);
    newGuessed.add(char);
    setGuessed(newGuessed);

    const targetChars = [...target.character];

    if (targetChars.includes(char)) {
      // Check win
      const allFound = targetChars.every((c) => newGuessed.has(c));
      if (allFound) setPhase("won");
    } else {
      const newErrors = errors + 1;
      setErrors(newErrors);
      if (newErrors >= MAX_ERRORS) setPhase("lost");
    }
  }

  if (!target) {
    return (
      <main className="mx-auto max-w-xl px-4 py-12 text-center">
        <p className="text-stone-500">Chargement...</p>
      </main>
    );
  }

  const targetChars = [...target.character];

  return (
    <main className="mx-auto max-w-xl px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <Link
          href="/games"
          className="text-sm text-stone-400 hover:text-stone-600 transition-colors"
        >
          &larr; Retour aux jeux
        </Link>
      </div>

      <h1 className="mb-6 text-center text-2xl font-bold text-stone-900">
        Pendu Chinois
      </h1>

      {/* Pinyin toggle */}
      <div className="mb-4 flex justify-end">
        <label className="flex items-center gap-2 text-sm text-stone-500">
          <input type="checkbox" checked={showPinyin} onChange={(e) => setShowPinyin(e.target.checked)} className="rounded" />
          Afficher le pinyin
        </label>
      </div>

      {/* Question */}
      <div className="mb-6 rounded-xl border border-stone-200 bg-stone-50 p-4 text-center">
        <p className="text-sm text-stone-500">
          Quel est le caractère chinois pour :
        </p>
        <p className="mt-1 text-xl font-bold text-stone-900">
          {target.french}
        </p>
        {showPinyin && (
          <p className="mt-1 text-sm italic text-stone-400">{target.pinyin}</p>
        )}
      </div>

      {/* Error indicators */}
      <div className="mb-6 flex items-center justify-center gap-2">
        {Array.from({ length: MAX_ERRORS }).map((_, i) => (
          <div
            key={i}
            className={`h-4 w-4 rounded-full border-2 transition-colors ${
              i < errors
                ? "border-red-400 bg-red-400"
                : "border-stone-300 bg-white"
            }`}
          />
        ))}
        <span className="ml-2 text-sm text-stone-400">
          {MAX_ERRORS - errors} essais restants
        </span>
      </div>

      {/* Word display */}
      <div className="mb-8 flex items-center justify-center gap-3">
        {targetChars.map((char, i) => {
          const revealed = guessed.has(char) || phase === "lost" || phase === "won";
          return (
            <div
              key={i}
              className={`flex h-16 w-16 items-center justify-center rounded-xl border-2 text-2xl font-bold transition-all ${
                revealed
                  ? phase === "lost" && !guessed.has(char)
                    ? "border-red-300 bg-red-50 text-red-600 chinese"
                    : "border-emerald-300 bg-emerald-50 text-stone-900 chinese"
                  : "border-stone-300 bg-white text-stone-300"
              }`}
            >
              {revealed ? char : "_"}
            </div>
          );
        })}
      </div>

      {/* Result */}
      {phase !== "playing" && (
        <div
          className={`mb-6 rounded-xl border p-6 text-center ${
            phase === "won"
              ? "border-emerald-200 bg-emerald-50"
              : "border-red-200 bg-red-50"
          }`}
        >
          <div className="mb-2 text-3xl">
            {phase === "won" ? "\u{1F389}" : "\u{1F614}"}
          </div>
          <h2
            className={`mb-2 text-lg font-bold ${
              phase === "won" ? "text-emerald-700" : "text-red-700"
            }`}
          >
            {phase === "won" ? "Bravo !" : "Perdu..."}
          </h2>
          <p className="mb-1 text-lg font-bold text-stone-900 chinese">
            {target.character}
          </p>
          <p className="mb-3 text-sm text-stone-500">{target.pinyin}</p>
          <AudioButton text={target.character} size="lg" />
          <div className="mt-4">
            <button
              onClick={() => initGame()}
              className="rounded-xl bg-primary px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary/90"
            >
              Mot suivant
            </button>
          </div>
        </div>
      )}

      {/* Character grid */}
      {phase === "playing" && (
        <div className="grid grid-cols-5 gap-2">
          {choices.map((char) => {
            const isGuessed = guessed.has(char);
            const isInWord = targetChars.includes(char);
            let cls =
              "flex h-12 items-center justify-center rounded-lg border-2 text-lg font-bold chinese transition-all ";
            if (isGuessed && isInWord) {
              cls +=
                "border-emerald-300 bg-emerald-50 text-emerald-700 cursor-default";
            } else if (isGuessed && !isInWord) {
              cls +=
                "border-stone-200 bg-stone-100 text-stone-300 cursor-default";
            } else {
              cls +=
                "border-stone-200 bg-white text-stone-700 hover:border-primary hover:bg-primary/5 cursor-pointer";
            }
            return (
              <button
                key={char}
                onClick={() => handleChoice(char)}
                disabled={isGuessed}
                className={cls}
              >
                {char}
              </button>
            );
          })}
        </div>
      )}
    </main>
  );
}
