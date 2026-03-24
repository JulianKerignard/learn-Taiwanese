"use client";

import { useState, useCallback, useMemo } from "react";
import { Check, X, RotateCcw, ArrowRight, Volume2 } from "lucide-react";
import AudioButton from "./AudioButton";
import type { Exercise } from "@/types/course";
import { cn } from "@/lib/cn";
import ProgressBar from "./ProgressBar";

function shuffleArray<T>(arr: T[]): T[] {
  const s = [...arr];
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [s[i], s[j]] = [s[j], s[i]];
  }
  return s;
}

// Detect if a string contains Chinese characters
function hasChinese(str: string): boolean {
  return /[\u4e00-\u9fff\u3400-\u4dbf]/.test(str);
}

interface ExerciseRunnerProps {
  exercises: Exercise[];
  onComplete: (score: number) => void;
  className?: string;
}

interface ExerciseResult {
  exerciseId: string;
  correct: boolean;
  answer: string;
}

export default function ExerciseRunner({ exercises, onComplete, className }: ExerciseRunnerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState<ExerciseResult[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [reorderPicked, setReorderPicked] = useState<string[]>([]);
  const [usedIndices, setUsedIndices] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);

  const current = exercises[currentIndex];
  const correctCount = results.filter((r) => r.correct).length;

  // Shuffle options once per question (not on every render)
  const shuffledOptions = useMemo(() => {
    if (!current?.options) return [];
    if (current.type === "reorder") return current.options; // Don't shuffle reorder
    return shuffleArray(current.options);
  }, [currentIndex, current?.type]);

  const handleAnswer = useCallback(
    (answer: string) => {
      if (showFeedback || !current) return;
      setSelectedAnswer(answer);
      setShowFeedback(true);

      const isCorrect = answer === current.correctAnswer;
      setResults((prev) => [
        ...prev,
        { exerciseId: current.id, correct: isCorrect, answer },
      ]);
    },
    [showFeedback, current]
  );

  const handleReorderPick = useCallback(
    (word: string, pickIndex: number) => {
      if (showFeedback || !current) return;
      const next = [...reorderPicked, word];
      const nextUsed = [...usedIndices, pickIndex];
      setReorderPicked(next);
      setUsedIndices(nextUsed);

      if (next.length === (current.options ?? []).length) {
        const answer = next.join("");
        handleAnswer(answer);
      }
    },
    [showFeedback, current, reorderPicked, usedIndices, handleAnswer]
  );

  const handleNext = () => {
    if (currentIndex + 1 >= exercises.length) {
      setFinished(true);
      const finalCorrect = results.filter((r) => r.correct).length;
      const finalScore = finalCorrect / exercises.length;
      onComplete(finalScore);
    } else {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setReorderPicked([]);
      setUsedIndices([]);
    }
  };

  if (finished) {
    const finalScore = correctCount / exercises.length;
    const pct = Math.round(finalScore * 100);
    return (
      <div className={cn("card text-center", className)}>
        <div className="text-5xl mb-4">{pct >= 70 ? "🎉" : "💪"}</div>
        <h3 className="text-xl font-bold text-stone-800 mb-2">
          {pct >= 70 ? "Bravo !" : "Courage !"}
        </h3>
        <p className="text-stone-600 mb-4">
          {correctCount}/{exercises.length} bonnes reponses ({pct}%)
        </p>
        <ProgressBar value={correctCount} max={exercises.length} color={pct >= 70 ? "bg-success" : "bg-warning"} />
      </div>
    );
  }

  if (!current) return null;

  const isCorrect = selectedAnswer === current.correctAnswer;
  const reorderOptions = current.options ?? [];

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div className="flex items-center justify-between">
        <span className="text-sm text-stone-500">
          Question {currentIndex + 1}/{exercises.length}
        </span>
        <span className="text-sm font-medium text-stone-700">
          {correctCount} correct{correctCount > 1 ? "s" : ""}
        </span>
      </div>

      <ProgressBar value={currentIndex + 1} max={exercises.length} />

      <div className="card">
        <p className="mb-1 text-xs font-medium uppercase text-stone-400">
          {exerciseTypeLabel(current.type)}
        </p>
        <div className="mb-6">
          {current.type === "listen" && hasChinese(current.question) ? (
            <div className="flex flex-col items-center gap-3">
              <AudioButton text={current.question} size="lg" />
              <p className="text-sm text-stone-400">Ecoutez et choisissez la bonne reponse</p>
            </div>
          ) : (
            <p className="text-lg font-medium text-stone-800">
              {hasChinese(current.question) ? (
                <span className="chinese">{current.question}</span>
              ) : (
                current.question
              )}
              {hasChinese(current.question) && current.hint && (
                <span className="ml-2 text-sm text-stone-400 italic">({current.hint})</span>
              )}
            </p>
          )}
        </div>

        {current.hint && (
          <p className="mb-4 text-sm italic text-stone-400">Indice : {current.hint}</p>
        )}

        {current.type === "reorder" ? (
          <div className="flex flex-col gap-4">
            <div className="min-h-[48px] flex flex-wrap gap-2 rounded-lg border-2 border-dashed border-stone-200 p-3">
              {reorderPicked.map((word, i) => (
                <span
                  key={i}
                  className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium chinese text-stone-800"
                >
                  {word}
                </span>
              ))}
              {reorderPicked.length === 0 && (
                <span className="text-sm text-stone-300">Cliquez sur les mots pour former la phrase...</span>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {reorderOptions.map((word, i) => {
                const isUsed = usedIndices.includes(i);
                return (
                  <button
                    key={i}
                    onClick={() => handleReorderPick(word, i)}
                    disabled={showFeedback || isUsed}
                    className={cn(
                      "rounded-lg border border-stone-200 px-3 py-1.5 text-sm font-medium chinese transition-colors",
                      isUsed
                        ? "bg-stone-100 text-stone-300 cursor-default"
                        : "bg-white hover:border-primary hover:bg-primary/5 cursor-pointer"
                    )}
                  >
                    {word}
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2">
            {shuffledOptions.map((option) => {
              const isSelected = selectedAnswer === option;
              const isAnswer = option === current.correctAnswer;
              let optionStyle = "border-stone-200 bg-white hover:border-primary hover:bg-primary/5";
              if (showFeedback) {
                if (isAnswer) {
                  optionStyle = "border-success bg-success/10 text-success";
                } else if (isSelected && !isAnswer) {
                  optionStyle = "border-danger bg-danger/10 text-danger";
                } else {
                  optionStyle = "border-stone-100 bg-stone-50 text-stone-400";
                }
              }

              return (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  disabled={showFeedback}
                  className={cn(
                    "flex items-center gap-3 rounded-lg border-2 px-4 py-3 text-left text-sm font-medium transition-all chinese",
                    optionStyle,
                    !showFeedback && "cursor-pointer"
                  )}
                >
                  {showFeedback && isAnswer && <Check className="h-4 w-4 shrink-0 text-success" />}
                  {showFeedback && isSelected && !isAnswer && <X className="h-4 w-4 shrink-0 text-danger" />}
                  <span>{option}</span>
                </button>
              );
            })}
          </div>
        )}

        {showFeedback && (
          <div
            className={cn(
              "mt-4 flex items-center justify-between rounded-lg p-3",
              isCorrect ? "bg-success/10" : "bg-danger/10"
            )}
          >
            <div className="flex items-center gap-2">
              {isCorrect ? (
                <Check className="h-5 w-5 text-success" />
              ) : (
                <X className="h-5 w-5 text-danger" />
              )}
              <span className={cn("text-sm font-medium", isCorrect ? "text-success" : "text-danger")}>
                {isCorrect ? "Correct !" : `La bonne reponse etait : ${current.correctAnswer}`}
              </span>
            </div>
            <button onClick={handleNext} className="btn-primary gap-1 text-sm">
              {currentIndex + 1 >= exercises.length ? "Terminer" : "Suivant"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function exerciseTypeLabel(type: Exercise["type"]): string {
  switch (type) {
    case "comprehension":
      return "Comprehension";
    case "fill-blank":
      return "Completer la phrase";
    case "translate":
      return "Traduction";
    case "reorder":
      return "Remettre dans l'ordre";
    case "listen":
      return "Ecoute";
    default:
      return "Exercice";
  }
}
