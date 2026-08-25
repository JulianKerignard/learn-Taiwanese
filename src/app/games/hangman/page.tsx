"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { getAllGameWords, type GameWord } from "@/lib/game-data";
import AudioButton from "@/components/AudioButton";
import { shuffleArray } from "@/lib/utils";
import { splitMora } from "@/lib/japanese";

type Phase = "playing" | "won" | "lost";

const MAX_ERRORS = 6;

function buildChoices(target: GameWord, allWords: GameWord[]): string[] {
  const pool = new Set<string>(splitMora(target.kana));

  const allMora = allWords.flatMap((w) => splitMora(w.kana));
  const shuffled = shuffleArray([...new Set(allMora)].filter((c) => !pool.has(c)));

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

    const targetMora = splitMora(target.kana);

    if (targetMora.includes(char)) {
      // Check win
      const allFound = targetMora.every((c) => newGuessed.has(c));
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

  const targetMora = splitMora(target.kana);
  const solved = phase === "won" || phase === "lost";

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
        Pendu japonais
      </h1>

      {/* Romaji toggle */}
      <div className="mb-4 flex justify-end">
        <label className="flex items-center gap-2 text-sm text-stone-500">
          <input type="checkbox" checked={showPinyin} onChange={(e) => setShowPinyin(e.target.checked)} className="rounded" />
          Afficher le rōmaji
        </label>
      </div>

      {/* Question */}
      <div className="mb-6 rounded-xl border border-stone-200 bg-stone-50 p-4 text-center">
        <p className="text-sm text-stone-500">
          Écrivez la lecture en kana de :
        </p>
        <p className="mt-1 text-xl font-bold text-stone-900">
          {target.french}
        </p>
        {showPinyin && (
          <p className="mt-1 text-sm italic text-stone-400">{target.romaji}</p>
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
        {targetMora.map((char, i) => {
          const revealed = guessed.has(char) || phase === "lost" || phase === "won";
          return (
            <div
              key={i}
              className={`flex h-16 min-w-14 items-center justify-center rounded-xl border-2 px-2 text-2xl font-bold transition-all ${
                revealed
                  ? phase === "lost" && !guessed.has(char)
                    ? "border-red-300 bg-red-50 text-red-600 japanese"
                    : "border-emerald-300 bg-emerald-50 text-stone-900 japanese"
                  : "border-stone-300 bg-white text-stone-300"
              }`}
            >
              {revealed ? char : "_"}
            </div>
          );
        })}
      </div>

      {solved && (
        <div className="mb-6 text-center">
          <p className="text-xs tracking-wide text-stone-400 uppercase">S&rsquo;écrit</p>
          <p className="japanese mt-1 text-3xl text-stone-900" lang="ja">
            {target.term}
          </p>
        </div>
      )}

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
          <p className="mb-1 text-lg font-bold text-stone-900 japanese">
            {target.term}
          </p>
          <p className="mb-3 text-sm text-stone-500">{target.romaji}</p>
          <AudioButton text={target.term} size="lg" />
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
            const isInWord = targetMora.includes(char);
            let cls =
              "flex h-12 items-center justify-center rounded-lg border-2 text-lg font-bold japanese transition-all ";
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
