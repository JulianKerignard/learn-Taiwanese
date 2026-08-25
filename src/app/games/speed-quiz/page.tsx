"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, Timer } from "lucide-react";
import { getAllGameWords, type GameWord } from "@/lib/game-data";
import { KEYS } from "@/lib/storage";

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
  const available = allWords.filter((w) => !usedSet.has(w.term));
  if (available.length === 0) return null;

  const word = available[Math.floor(Math.random() * available.length)];
  const distractors = allWords
    .filter((w) => w.term !== word.term)
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
const STORAGE_KEY = KEYS.speedRecord;

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
      usedRef.current.add(q.word.term);
      setQuestion(q);
    } else {
      // Reset pool if exhausted
      usedRef.current.clear();
      const q2 = generateQuestion(allWords, usedRef.current);
      if (q2) {
        usedRef.current.add(q2.word.term);
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
      <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
        <Link
          href="/games"
          className="flex items-center gap-1 self-start text-sm text-stone-500 hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour aux jeux
        </Link>
        <h1 className="page-title">Quiz éclair</h1>
        <p className="text-stone-500">
          Traduis le plus de mots possible en 60 secondes !
        </p>
        <label className="flex items-center justify-center gap-2 text-sm text-stone-600">
          <input type="checkbox" checked={showPinyin} onChange={(e) => setShowPinyin(e.target.checked)} className="rounded" />
          Afficher le rōmaji
        </label>
        <button
          onClick={startGame}
          disabled={allWords.length === 0}
          className="btn-primary px-8 py-3 text-base disabled:opacity-50"
        >
          Commencer
        </button>
      </div>
    );
  }

  if (phase === "result") {
    const isNewRecord = score >= record && score > 0;
    return (
      <div className="mx-auto max-w-xl">
        <div className="card text-center">
          <Timer className="mx-auto mb-2 h-10 w-10 text-warning" aria-hidden="true" />
          <h2 className="section-title mb-4">Temps écoulé !</h2>
          <div className="mb-6 text-5xl font-bold text-stone-900">
            {score} pts
          </div>
          {isNewRecord && (
            <p className="mb-4 text-lg font-semibold text-warning">
              Nouveau record !
            </p>
          )}
          <div className="mb-6 flex justify-center gap-8 text-sm text-stone-600">
            <div>
              <div className="text-2xl font-bold text-success">
                {correct}
              </div>
              Bonnes réponses
            </div>
            <div>
              <div className="text-2xl font-bold text-danger">{wrong}</div>
              Mauvaises réponses
            </div>
          </div>
          <p className="mb-6 text-sm text-stone-500">
            Record : <strong>{record}</strong> pts
          </p>
          <button onClick={startGame} className="btn-primary">
            Rejouer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-stone-900">{score} pts</div>
        {combo >= 3 && (
          <span className="badge bg-warning/10 text-warning">x{multiplier}</span>
        )}
        <div className="text-2xl font-bold text-stone-700">{timeLeft}s</div>
      </div>

      {/* Timer bar */}
      <div className="mb-8 h-2 overflow-hidden rounded-full bg-stone-200">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-linear ${
            timeLeft > 20
              ? "bg-success"
              : timeLeft > 10
              ? "bg-warning"
              : "bg-danger"
          }`}
          style={{ width: `${timerPercent}%` }}
        />
      </div>

      {question && (
        <>
          <div className="mb-8 text-center">
            <span className="term-display text-stone-900" lang="ja">
              {question.word.term}
            </span>
            {showPinyin && (
              <p className="mt-2 text-sm text-stone-500 italic">
                {question.word.romaji}
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
                    "rounded-xl border-2 border-success bg-success/10 px-4 py-4 text-center font-medium text-success";
                } else if (i === feedback && i !== question.correctIndex) {
                  cls =
                    "rounded-xl border-2 border-danger bg-danger/10 px-4 py-4 text-center font-medium text-danger";
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
    </div>
  );
}
