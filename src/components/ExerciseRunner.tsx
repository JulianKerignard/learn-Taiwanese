"use client";

import { useState, useCallback, useMemo } from "react";
import { Check, X, ArrowRight } from "lucide-react";
import AudioButton from "./AudioButton";
import type { Exercise } from "@/types/course";
import { addMistake } from "@/lib/storage";
import { cn } from "@/lib/cn";
import { shuffleArray, hasChinese, stripPunctuation as strip } from "@/lib/utils";
import ProgressBar from "./ProgressBar";

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


/**
 * Reorder tiles and free-text answers can't be matched byte for byte: the tiles
 * never carry punctuation, and typed input varies in spacing.
 */
function isAnswerCorrect(exercise: Exercise, answer: string): boolean {
  if (exercise.type === "reorder" || !exercise.options?.length) {
    return strip(answer) === strip(exercise.correctAnswer);
  }
  return answer === exercise.correctAnswer;
}

export default function ExerciseRunner({ exercises, onComplete, className }: ExerciseRunnerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState<ExerciseResult[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [reorderPicked, setReorderPicked] = useState<string[]>([]);
  const [usedIndices, setUsedIndices] = useState<number[]>([]);
  const [textAnswer, setTextAnswer] = useState("");
  const [finished, setFinished] = useState(false);

  const current = exercises[currentIndex];
  const correctCount = results.filter((r) => r.correct).length;

  // Shuffle options once per question (not on every render).
  // Keep the original indices so optionsHint / optionsZhuyin stay aligned.
  const shuffledData = useMemo(() => {
    if (!current?.options?.length) return [];
    return shuffleArray(current.options.map((opt, i) => ({ opt, origIndex: i })));
  }, [currentIndex, current?.id]);

  const handleAnswer = useCallback(
    (answer: string) => {
      if (showFeedback || !current) return;
      setSelectedAnswer(answer);
      setShowFeedback(true);

      const isCorrect = isAnswerCorrect(current, answer);
      setResults((prev) => [
        ...prev,
        { exerciseId: current.id, correct: isCorrect, answer },
      ]);

      if (!isCorrect) {
        addMistake(current.correctAnswer);
      }
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
      setTextAnswer("");
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
          {correctCount}/{exercises.length} bonnes réponses ({pct}%)
        </p>
        <ProgressBar value={correctCount} max={exercises.length} color={pct >= 70 ? "bg-success" : "bg-warning"} />
      </div>
    );
  }

  if (!current) return null;

  const isCorrect = selectedAnswer !== null && isAnswerCorrect(current, selectedAnswer);
  const hasOptions = shuffledData.length > 0;

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {/* Screen-reader-only verdict */}
      <div role="status" aria-live="polite" className="sr-only">
        {showFeedback
          ? isCorrect
            ? "Bonne réponse"
            : `Mauvaise réponse. La bonne réponse était : ${current.correctAnswer}`
          : ""}
      </div>

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
              <p className="text-sm text-stone-400">Écoutez et choisissez la bonne réponse</p>
            </div>
          ) : (
            <p className="text-lg font-medium text-stone-800">
              {hasChinese(current.question) ? (
                <span className="chinese" lang="zh-Hant-TW">{current.question}</span>
              ) : (
                current.question
              )}
              {hasChinese(current.question) && current.hint && (
                <span className="ml-2 text-sm text-stone-500 italic">({current.hint})</span>
              )}
            </p>
          )}
        </div>

        {(current.hint || current.hintReading) && (
          <p className="mb-4 rounded-lg bg-accent/5 px-3 py-1.5 text-sm italic text-accent">
            {current.hint && <span>{current.hint}</span>}
            {current.hint && current.hintReading && <span className="mx-1.5 text-stone-300">|</span>}
            {current.hintReading && (
              <span className="chinese" lang="zh-Hant-TW">{current.hintReading}</span>
            )}
          </p>
        )}

        {current.type === "reorder" && hasOptions ? (
          <div className="flex flex-col gap-4">
            <div className="min-h-[48px] flex flex-wrap gap-2 rounded-lg border-2 border-dashed border-stone-200 p-3">
              {reorderPicked.map((word, i) => (
                <span
                  key={i}
                  className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium chinese text-stone-800"
                  lang="zh-Hant-TW"
                >
                  {word}
                </span>
              ))}
              {reorderPicked.length === 0 && (
                <span className="text-sm text-stone-300">Cliquez sur les mots pour former la phrase...</span>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {shuffledData.map(({ opt: word }, i) => {
                const isUsed = usedIndices.includes(i);
                return (
                  <button
                    key={i}
                    onClick={() => handleReorderPick(word, i)}
                    disabled={showFeedback || isUsed}
                    lang="zh-Hant-TW"
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
        ) : !hasOptions ? (
          <form
            className="flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              if (textAnswer.trim()) handleAnswer(textAnswer);
            }}
          >
            <input
              type="text"
              value={textAnswer}
              onChange={(e) => setTextAnswer(e.target.value)}
              disabled={showFeedback}
              placeholder="Écrivez votre réponse…"
              aria-label="Votre réponse"
              autoComplete="off"
              lang="zh-Hant-TW"
              className="chinese flex-1 rounded-lg border-2 border-stone-200 px-4 py-3 text-base text-stone-800 focus-visible:border-primary disabled:bg-stone-50 disabled:text-stone-400"
            />
            <button
              type="submit"
              disabled={showFeedback || !textAnswer.trim()}
              className="btn-primary shrink-0 disabled:opacity-40"
            >
              Valider
            </button>
          </form>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2">
            {shuffledData.map(({ opt: option, origIndex }) => {
              const optPinyin = current.optionsHint?.[origIndex];
              const optZhuyin = current.optionsReading?.[origIndex];
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

              // The audio control is a sibling, never a child: a button inside a
              // button is invalid, and clicking it used to submit the answer.
              return (
                <div
                  key={option}
                  className={cn(
                    "flex items-center gap-2 rounded-lg border-2 transition-all",
                    optionStyle
                  )}
                >
                  <button
                    onClick={() => handleAnswer(option)}
                    disabled={showFeedback}
                    className={cn(
                      "chinese flex flex-1 items-center gap-3 px-4 py-3 text-left text-sm font-medium",
                      !showFeedback && "cursor-pointer"
                    )}
                  >
                    {showFeedback && isAnswer && <Check className="h-4 w-4 shrink-0 text-success" />}
                    {showFeedback && isSelected && !isAnswer && <X className="h-4 w-4 shrink-0 text-danger" />}
                    <span className="flex-1">
                      <span lang={hasChinese(option) ? "zh-Hant-TW" : undefined}>{option}</span>
                      {hasChinese(option) && (optPinyin || optZhuyin) && (
                        <span className="ml-2 text-xs text-stone-500 italic">
                          {optPinyin}
                          {optPinyin && optZhuyin && <span className="mx-1 text-stone-300">|</span>}
                          {optZhuyin && (
                            <span className="chinese" lang="zh-Hant-TW">
                              {optZhuyin}
                            </span>
                          )}
                        </span>
                      )}
                    </span>
                  </button>
                  {hasChinese(option) && (
                    <AudioButton text={option} size="sm" className="mr-2 shrink-0 opacity-60" />
                  )}
                </div>
              );
            })}
          </div>
        )}

        {showFeedback && (
          <div
            className={cn(
              "mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between rounded-lg p-3",
              isCorrect ? "bg-success/10" : "bg-danger/10"
            )}
          >
            <div className="flex items-center gap-2">
              {isCorrect ? (
                <Check className="h-5 w-5 text-success" />
              ) : (
                <X className="h-5 w-5 text-danger" />
              )}
              <div>
                <span className={cn("text-sm font-medium", isCorrect ? "text-success" : "text-danger")}>
                  {isCorrect ? "Correct !" : `La bonne réponse était : ${current.correctAnswer}`}
                </span>
                {!isCorrect && hasChinese(current.correctAnswer) && (
                  <div className="flex items-center gap-2 mt-1">
                    {current.hint && <span className="text-xs text-stone-500 italic">{current.hint}</span>}
                    <AudioButton text={current.correctAnswer} size="sm" />
                  </div>
                )}
              </div>
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
      return "Compréhension";
    case "fill-blank":
      return "Compléter la phrase";
    case "translate":
      return "Traduction";
    case "reorder":
      return "Remettre dans l'ordre";
    case "listen":
      return "Écoute";
    default:
      return "Exercice";
  }
}
