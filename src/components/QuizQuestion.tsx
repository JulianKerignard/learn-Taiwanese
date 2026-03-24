"use client";

import { useState, useMemo } from "react";
import { Check, X } from "lucide-react";
import AudioButton from "./AudioButton";
import { cn } from "@/lib/cn";
import type { QuizItem } from "@/types";

function shuffleArray<T>(arr: T[]): T[] {
  const s = [...arr];
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [s[i], s[j]] = [s[j], s[i]];
  }
  return s;
}

interface QuizQuestionProps {
  question: QuizItem;
  onAnswer: (correct: boolean) => void;
}

export default function QuizQuestion({ question, onAnswer }: QuizQuestionProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const isCorrect = selected === question.correctAnswer;

  const shuffledOptions = useMemo(
    () => shuffleArray(question.options),
    [question.id]
  );

  function handleSelect(option: string) {
    if (answered) return;
    setSelected(option);
    setAnswered(true);
    setTimeout(() => onAnswer(option === question.correctAnswer), 1200);
  }

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Question */}
      <div className="flex items-center gap-2">
        {question.type === "audio-to-character" ? (
          <AudioButton text={question.question} size="lg" />
        ) : (
          <h3 className="chinese text-center text-3xl font-medium">{question.question}</h3>
        )}
      </div>

      <p className="text-sm text-stone-500">
        {question.type === "character-to-french" && "Quelle est la traduction ?"}
        {question.type === "french-to-character" && "Quel est le caractère ?"}
        {question.type === "audio-to-character" && "Quel caractère entendez-vous ?"}
        {question.type === "pinyin-to-character" && "Quel caractère correspond ?"}
      </p>

      {/* Options */}
      <div className="grid w-full max-w-md grid-cols-2 gap-3">
        {shuffledOptions.map((option) => {
          const isThis = selected === option;
          const isRight = option === question.correctAnswer;

          return (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className={cn(
                "rounded-xl border-2 p-4 text-center text-lg font-medium transition-all",
                !answered && "border-stone-200 hover:border-primary hover:bg-primary/5",
                answered && isRight && "border-success bg-success/10 text-success",
                answered && isThis && !isRight && "border-danger bg-danger/10 text-danger",
                answered && !isThis && !isRight && "border-stone-100 text-stone-300"
              )}
            >
              <span className={cn(question.type === "french-to-character" && "chinese text-2xl")}>
                {option}
              </span>
              {answered && isThis && (
                <span className="ml-2">
                  {isRight ? <Check className="inline h-5 w-5" /> : <X className="inline h-5 w-5" />}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
