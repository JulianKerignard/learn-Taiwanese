"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import {
  Clock,
  ChevronLeft,
  ChevronRight,
  Check,
  X,
  RotateCcw,
  Trophy,
  AlertTriangle,
} from "lucide-react";
import type { MockTest, TestSectionResult, TestResult } from "@/types/test";
import { saveTestResult } from "@/lib/test-storage";
import AudioButton from "@/components/AudioButton";
import ProgressBar from "@/components/ProgressBar";
import { cn } from "@/lib/cn";

interface TestRunnerProps {
  test: MockTest;
}

function hasChinese(str: string): boolean {
  return /[\u4e00-\u9fff\u3400-\u4dbf]/.test(str);
}

export default function TestRunner({ test }: TestRunnerProps) {
  const [phase, setPhase] = useState<"intro" | "testing" | "results">("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Map<string, string>>(new Map());
  const [timeRemaining, setTimeRemaining] = useState(test.timeLimitMinutes * 60);
  const [result, setResult] = useState<TestResult | null>(null);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const answersRef = useRef(answers);
  answersRef.current = answers;

  const flatExercises = test.sections.flatMap((section) =>
    section.exercises.map((ex) => ({
      ...ex,
      sectionId: section.id,
      sectionTitle: section.title,
    }))
  );

  const handleSubmit = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    const currentAnswers = answersRef.current;
    const totalTime = test.timeLimitMinutes * 60;
    const timeUsed = totalTime - timeRemaining;

    const sectionResults: TestSectionResult[] = test.sections.map((section) => {
      const correct = section.exercises.filter(
        (ex) => currentAnswers.get(ex.id) === ex.correctAnswer
      ).length;
      return {
        sectionId: section.id,
        sectionTitle: section.title,
        correct,
        total: section.exercises.length,
        percentage: section.exercises.length > 0
          ? Math.round((correct / section.exercises.length) * 100)
          : 0,
      };
    });

    const totalCorrect = sectionResults.reduce((sum, s) => sum + s.correct, 0);
    const percentage = Math.round((totalCorrect / test.totalQuestions) * 100);

    const testResult: TestResult = {
      testId: test.id,
      date: new Date().toISOString(),
      totalCorrect,
      totalQuestions: test.totalQuestions,
      percentage,
      passed: percentage >= Math.round(test.passingScore * 100),
      timeUsedSeconds: timeUsed,
      sectionResults,
    };

    saveTestResult(testResult);
    setResult(testResult);
    setPhase("results");
  }, [test, timeRemaining]);

  function startTest() {
    setPhase("testing");
    setTimeRemaining(test.timeLimitMinutes * 60);
    timerRef.current = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  function resetTest() {
    setPhase("intro");
    setCurrentIndex(0);
    setAnswers(new Map());
    setTimeRemaining(test.timeLimitMinutes * 60);
    setResult(null);
  }

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const timeStr = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  // ---------- INTRO ----------
  if (phase === "intro") {
    return (
      <div className="card mx-auto max-w-2xl p-6">
        <div className="mb-6 text-center">
          <span className="mb-2 inline-block text-4xl">{test.icon}</span>
          <h1 className="text-2xl font-bold">{test.title}</h1>
          <p className="text-lg text-stone-500">{test.titleZh}</p>
        </div>

        <p className="mb-6 text-center text-stone-600">{test.description}</p>

        <div className="mb-6 flex justify-center gap-4 text-sm text-stone-500">
          <span>{test.totalQuestions} questions</span>
          <span>·</span>
          <span>{test.timeLimitMinutes} minutes</span>
          <span>·</span>
          <span>{Math.round(test.passingScore * 100)}% pour réussir</span>
        </div>

        <div className="mb-6 space-y-2">
          <h2 className="font-semibold text-stone-700">Sections</h2>
          {test.sections.map((section) => (
            <div
              key={section.id}
              className="flex items-center justify-between rounded-lg bg-stone-50 px-4 py-2 text-sm"
            >
              <span>{section.title}</span>
              <span className="text-stone-400">
                {section.exercises.length} question{section.exercises.length > 1 ? "s" : ""}
              </span>
            </div>
          ))}
        </div>

        <div className="mb-6 rounded-lg border border-stone-200 bg-stone-50 p-4 text-sm text-stone-600">
          <div className="mb-1 flex items-center gap-2 font-medium text-stone-700">
            <AlertTriangle size={16} />
            Règles
          </div>
          Pas de feedback immédiat — les résultats sont affichés à la fin. Tu peux naviguer
          librement entre les questions.
        </div>

        <button onClick={startTest} className="btn-primary w-full">
          Commencer le test
        </button>
      </div>
    );
  }

  // ---------- TESTING ----------
  if (phase === "testing") {
    const current = flatExercises[currentIndex];
    const selectedAnswer = answers.get(current.id);

    return (
      <div className="mx-auto max-w-2xl">
        {/* Top bar */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <div
            className={cn(
              "flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium",
              timeRemaining > 300
                ? "bg-stone-100 text-stone-700"
                : timeRemaining > 60
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
            )}
          >
            <Clock size={16} />
            {timeStr}
          </div>
          <span className="text-sm text-stone-500">
            Question {currentIndex + 1}/{test.totalQuestions}
          </span>
          <span className="text-sm font-medium text-stone-600">{current.sectionTitle}</span>
        </div>

        {/* Question */}
        <div className="card mb-6 p-6">
          {current.type === "listen" ? (
            <div className="mb-4 flex flex-col items-center gap-3">
              <AudioButton text={current.question} size="lg" />
              <p className="text-sm text-stone-500">Écoutez et choisissez la bonne réponse</p>
            </div>
          ) : (
            <p className={cn("mb-4 text-lg font-medium", hasChinese(current.question) && "chinese")}>
              {current.question}
            </p>
          )}

          {current.hint && (
            <p className="mb-4 text-sm italic text-stone-400">{current.hint}</p>
          )}

          {/* Options grid */}
          <div className="grid grid-cols-2 gap-3">
            {(current.options ?? []).map((option, i) => (
              <button
                key={i}
                onClick={() => {
                  const next = new Map(answers);
                  next.set(current.id, option);
                  setAnswers(next);
                }}
                className={cn(
                  "rounded-lg border-2 px-4 py-3 text-left text-sm transition-colors",
                  selectedAnswer === option
                    ? "border-primary bg-primary/5 font-medium"
                    : "border-stone-200 hover:border-stone-300",
                  hasChinese(option) && "chinese"
                )}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
            disabled={currentIndex === 0}
            className={cn(
              "flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors",
              currentIndex === 0
                ? "cursor-not-allowed text-stone-300"
                : "text-stone-600 hover:bg-stone-100"
            )}
          >
            <ChevronLeft size={16} />
            Précédent
          </button>

          <div className="flex flex-wrap justify-center gap-1.5">
            {flatExercises.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={cn(
                  "flex h-7 w-7 items-center justify-center rounded-full text-xs font-medium transition-colors",
                  answers.has(flatExercises[i].id)
                    ? "bg-primary text-white"
                    : "bg-stone-100 text-stone-500",
                  i === currentIndex && "ring-2 ring-primary ring-offset-1"
                )}
              >
                {i + 1}
              </button>
            ))}
          </div>

          {currentIndex < flatExercises.length - 1 ? (
            <button
              onClick={() => setCurrentIndex((i) => i + 1)}
              className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-stone-600 transition-colors hover:bg-stone-100"
            >
              Suivant
              <ChevronRight size={16} />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="flex items-center gap-1 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90"
            >
              <Check size={16} />
              Terminer
            </button>
          )}
        </div>
      </div>
    );
  }

  // ---------- RESULTS ----------
  if (phase === "results" && result) {
    const timeUsedMin = Math.floor(result.timeUsedSeconds / 60);
    const timeUsedSec = result.timeUsedSeconds % 60;

    return (
      <div className="mx-auto max-w-2xl space-y-6">
        {/* Score */}
        <div
          className={cn(
            "card p-8 text-center",
            result.passed ? "border-green-200 bg-green-50" : "border-yellow-200 bg-yellow-50"
          )}
        >
          <div className="mb-3 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white">
            {result.passed ? (
              <Trophy size={32} className="text-green-500" />
            ) : (
              <AlertTriangle size={32} className="text-yellow-500" />
            )}
          </div>
          <div className="mb-2 text-4xl font-bold">{result.percentage}%</div>
          <div className="mb-1 text-sm text-stone-500">
            {result.totalCorrect}/{result.totalQuestions} réponses correctes
          </div>
          <p
            className={cn(
              "text-lg font-semibold",
              result.passed ? "text-green-700" : "text-yellow-700"
            )}
          >
            {result.passed ? "Félicitations, tu as réussi !" : "Continue à t'entraîner !"}
          </p>
        </div>

        {/* Time */}
        <div className="card flex items-center justify-center gap-2 p-4 text-sm text-stone-600">
          <Clock size={16} />
          Temps utilisé : {timeUsedMin}m {String(timeUsedSec).padStart(2, "0")}s
        </div>

        {/* Section breakdown */}
        <div className="card space-y-4 p-6">
          <h2 className="font-semibold text-stone-700">Résultats par section</h2>
          {result.sectionResults.map((sr) => (
            <div key={sr.sectionId}>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span className="font-medium">{sr.sectionTitle}</span>
                <span className="text-stone-500">
                  {sr.correct}/{sr.total} ({sr.percentage}%)
                </span>
              </div>
              <ProgressBar
                value={sr.correct}
                max={sr.total}
                color={sr.percentage >= 70 ? "bg-green-500" : sr.percentage >= 50 ? "bg-yellow-500" : "bg-red-500"}
              />
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button onClick={resetTest} className="btn-secondary flex flex-1 items-center justify-center gap-2">
            <RotateCcw size={16} />
            Réessayer
          </button>
          <Link href="/tests" className="btn-primary flex flex-1 items-center justify-center gap-2">
            Retour aux tests
          </Link>
        </div>
      </div>
    );
  }

  return null;
}
