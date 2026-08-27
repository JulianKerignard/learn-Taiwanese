"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { getAllGameWords, type GameWord } from "@/lib/game-data";
import AudioButton from "@/components/AudioButton";
import { shuffleArray } from "@/lib/utils";
import { splitMora } from "@/lib/japanese";
import { ArrowLeft, Frown, Trophy } from "lucide-react";

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
  // Off by default: the rōmaji is a transliteration of the very reading being
  // guessed, so showing it hands over the answer. (In the Mandarin original the
  // pinyin did not identify the hanzi, which is why it was shown.)
  const [showRomaji, setShowRomaji] = useState(false);
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
      <div className="mx-auto max-w-xl text-center">
        <p className="text-stone-500">Chargement...</p>
      </div>
    );
  }

  const targetMora = splitMora(target.kana);
  const solved = phase === "won" || phase === "lost";

  return (
    <div className="mx-auto max-w-xl">
      <div className="mb-6 flex items-center justify-between">
        <Link
          href="/games"
          className="flex items-center gap-1 text-sm text-stone-500 hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour aux jeux
        </Link>
      </div>

      <h1 className="page-title mb-6 text-center">Pendu japonais</h1>

      {/* Romaji toggle */}
      <div className="mb-4 flex justify-end">
        <label className="flex items-center gap-2 text-sm text-stone-500">
          <input type="checkbox" checked={showRomaji} onChange={(e) => setShowRomaji(e.target.checked)} className="rounded" />
          Afficher le rōmaji (révèle la réponse)
        </label>
      </div>

      {/* Question */}
      <div className="card bg-stone-50 mb-6 p-4 text-center">
        <p className="text-sm text-stone-500">
          Écrivez la lecture en kana de :
        </p>
        <p className="card-title mt-1">{target.french}</p>
        {showRomaji && (
          <p className="mt-1 text-sm italic text-stone-500">{target.romaji}</p>
        )}
      </div>

      {/* Error indicators */}
      <div className="mb-6 flex items-center justify-center gap-2">
        {Array.from({ length: MAX_ERRORS }).map((_, i) => (
          <div
            key={i}
            className={`h-4 w-4 rounded-full border-2 transition-colors ${
              i < errors
                ? "border-danger bg-danger"
                : "border-stone-300 bg-white"
            }`}
          />
        ))}
        <span className="ml-2 text-sm text-stone-500">
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
              lang={revealed ? "ja" : undefined}
              className={`flex h-16 min-w-14 items-center justify-center rounded-xl border-2 px-2 text-2xl font-semibold transition-all ${
                revealed
                  ? phase === "lost" && !guessed.has(char)
                    ? "japanese border-danger bg-danger/10 text-danger"
                    : "japanese border-success bg-success/10 text-stone-900"
                  : "border-stone-300 bg-white text-stone-500"
              }`}
            >
              {revealed ? char : "_"}
            </div>
          );
        })}
      </div>

      {solved && (
        <div className="mb-6 text-center">
          <p className="text-xs tracking-wide text-stone-500 uppercase">S&rsquo;écrit</p>
          <p className="term-display mt-1 text-stone-900" lang="ja">
            {target.term}
          </p>
        </div>
      )}

      {/* Result */}
      {phase !== "playing" && (
        <div className="card mb-6 text-center">
          {phase === "won" ? (
            <Trophy className="mx-auto mb-2 h-9 w-9 text-success" aria-hidden="true" />
          ) : (
            <Frown className="mx-auto mb-2 h-9 w-9 text-stone-500" aria-hidden="true" />
          )}
          <h2
            className={`section-title mb-2 ${
              phase === "won" ? "text-success" : "text-danger"
            }`}
          >
            {phase === "won" ? "Bravo !" : "Perdu..."}
          </h2>
          <p className="japanese card-title mb-1" lang="ja">
            {target.term}
          </p>
          <p className="mb-3 text-sm text-stone-500">{target.romaji}</p>
          <AudioButton text={target.term} size="lg" />
          <div className="mt-4">
            <button onClick={() => initGame()} className="btn-primary">
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
              "japanese flex h-12 items-center justify-center rounded-lg border-2 text-lg font-semibold transition-all ";
            if (isGuessed && isInWord) {
              cls += "border-success bg-success/10 text-success cursor-default";
            } else if (isGuessed && !isInWord) {
              cls +=
                "border-stone-200 bg-stone-100 text-stone-500 cursor-default";
            } else {
              cls +=
                "border-stone-200 bg-white text-stone-700 hover:border-primary hover:bg-primary/5 cursor-pointer";
            }
            return (
              <button
                key={char}
                lang="ja"
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
    </div>
  );
}
