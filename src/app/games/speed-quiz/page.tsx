"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { getAllGameWords, type GameWord } from "@/lib/game-data";

type Phase = "ready" | "playing" | "result";

interface Question {
  word: GameWord;
  options: string[];
  correctIndex: number;
}

function generateQuestion(
  allWords: GameWord[],
  usedSet: Set<string>
): Question | null {
  const available = allWords.filter((w) => !usedSet.has(w.character));
  if (available.length === 0) return null;

  const word = available[Math.floor(Math.random() * available.length)];
  const distractors = allWords
    .filter((w) => w.character !== word.character)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map((w) => w.french);

  const options = [...distractors, word.french].sort(
    () => Math.random() - 0.5
  );
  const correctIndex = options.indexOf(word.french);

  return { word, options, correctIndex };
}

const DURATION = 60;
const STORAGE_KEY = "taiwan-speed-record";

export default function SpeedQuizPage() {
  const [phase, setPhase] = useState<Phase>("ready");
  const [allWords, setAllWords] = useState<GameWord[]>([]);
  const [question, setQuestion] = useState<Question | null>(null);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [timeLeft, setTimeLeft] = useState(DURATION);
  const [feedback, setFeedback] = useState<number | null>(null);
  const [record, setRecord] = useState(0);
  const [showPinyin, setShowPinyin] = useState(true);
  const usedRef = useRef(new Set<string>());
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setAllWords(getAllGameWords());
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setRecord(Number(saved));
  }, []);

  const nextQuestion = useCallback(() => {
    if (allWords.length === 0) return;
    const q = generateQuestion(allWords, usedRef.current);
    if (q) {
      usedRef.current.add(q.word.character);
      setQuestion(q);
    } else {
      // Reset pool if exhausted
      usedRef.current.clear();
      const q2 = generateQuestion(allWords, usedRef.current);
      if (q2) {
        usedRef.current.add(q2.word.character);
        setQuestion(q2);
      }
    }
    setFeedback(null);
  }, [allWords]);

  function startGame() {
    setPhase("playing");
    setScore(0);
    setCombo(0);
    setCorrect(0);
    setWrong(0);
    setTimeLeft(DURATION);
    usedRef.current.clear();
    nextQuestion();

    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          timerRef.current = null;
          setPhase("result");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }

  // Save record when game ends
  useEffect(() => {
    if (phase === "result") {
      const saved = localStorage.getItem(STORAGE_KEY);
      const currentRecord = saved ? Number(saved) : 0;
      if (score > currentRecord) {
        localStorage.setItem(STORAGE_KEY, String(score));
        setRecord(score);
      }
    }
  }, [phase, score]);

  // Cleanup timer on unmount only
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  function handleAnswer(index: number) {
    if (!question || feedback !== null) return;

    setFeedback(index);
    if (index === question.correctIndex) {
      const multiplier = Math.min(Math.floor(combo / 3) + 1, 5);
      setScore((s) => s + 10 * multiplier);
      setCombo((c) => c + 1);
      setCorrect((c) => c + 1);
    } else {
      setScore((s) => Math.max(0, s - 5));
      setCombo(0);
      setWrong((w) => w + 1);
    }

    setTimeout(() => {
      nextQuestion();
    }, 150);
  }

  const multiplier = Math.min(Math.floor(combo / 3) + 1, 5);
  const timerPercent = (timeLeft / DURATION) * 100;

  if (phase === "ready") {
    return (
      <main className="mx-auto max-w-xl px-4 py-12 text-center">
        <Link
          href="/games"
          className="mb-8 inline-block text-sm text-stone-400 hover:text-stone-600 transition-colors"
        >
          &larr; Retour aux jeux
        </Link>
        <h1 className="mb-4 text-3xl font-bold text-stone-900">Speed Quiz</h1>
        <p className="mb-8 text-stone-500">
          Traduis le plus de mots possible en 60 secondes !
        </p>
        <label className="mb-6 flex items-center justify-center gap-2 text-sm text-stone-600">
          <input type="checkbox" checked={showPinyin} onChange={(e) => setShowPinyin(e.target.checked)} className="rounded" />
          Afficher le pinyin
        </label>
        <button
          onClick={startGame}
          disabled={allWords.length === 0}
          className="rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 px-10 py-4 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105 disabled:opacity-50"
        >
          Commencer
        </button>
      </main>
    );
  }

  if (phase === "result") {
    const isNewRecord = score >= record && score > 0;
    return (
      <main className="mx-auto max-w-xl px-4 py-12 text-center">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-8">
          <div className="mb-2 text-4xl">&#9201;</div>
          <h2 className="mb-4 text-2xl font-bold text-amber-700">
            Temps ecoule !
          </h2>
          <div className="mb-6 text-5xl font-black text-stone-900">
            {score} pts
          </div>
          {isNewRecord && (
            <p className="mb-4 text-lg font-bold text-amber-600">
              Nouveau record !
            </p>
          )}
          <div className="mb-6 flex justify-center gap-8 text-sm text-stone-600">
            <div>
              <div className="text-2xl font-bold text-emerald-600">
                {correct}
              </div>
              Bonnes reponses
            </div>
            <div>
              <div className="text-2xl font-bold text-red-500">{wrong}</div>
              Mauvaises reponses
            </div>
          </div>
          <p className="mb-6 text-sm text-stone-400">
            Record : <strong>{record}</strong> pts
          </p>
          <button
            onClick={startGame}
            className="rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-3 font-medium text-white transition-transform hover:scale-105"
          >
            Rejouer
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-xl px-4 py-8">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-2xl font-black text-stone-900">{score} pts</div>
        {combo >= 3 && (
          <div className="rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-amber-700">
            x{multiplier}
          </div>
        )}
        <div className="text-2xl font-bold text-stone-700">{timeLeft}s</div>
      </div>

      {/* Timer bar */}
      <div className="mb-8 h-2 overflow-hidden rounded-full bg-stone-200">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-linear ${
            timeLeft > 20
              ? "bg-emerald-500"
              : timeLeft > 10
              ? "bg-amber-500"
              : "bg-red-500"
          }`}
          style={{ width: `${timerPercent}%` }}
        />
      </div>

      {question && (
        <>
          <div className="mb-8 text-center">
            <span className="chinese text-6xl font-bold text-stone-900">
              {question.word.character}
            </span>
            {showPinyin && (
              <p className="mt-2 text-sm text-stone-400 italic">
                {question.word.pinyin}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3">
            {question.options.map((option, i) => {
              let cls =
                "rounded-xl border-2 border-stone-200 bg-white px-4 py-4 text-center font-medium text-stone-700 transition-all hover:border-primary hover:bg-primary/5";
              if (feedback !== null) {
                if (i === question.correctIndex) {
                  cls =
                    "rounded-xl border-2 border-emerald-400 bg-emerald-50 px-4 py-4 text-center font-medium text-emerald-700";
                } else if (i === feedback && i !== question.correctIndex) {
                  cls =
                    "rounded-xl border-2 border-red-400 bg-red-50 px-4 py-4 text-center font-medium text-red-700";
                }
              }
              return (
                <button key={i} onClick={() => handleAnswer(i)} className={cls}>
                  {option}
                </button>
              );
            })}
          </div>
        </>
      )}
    </main>
  );
}
