"use client";

import { useState, useEffect, useCallback } from "react";
import {
  BookOpen,
  Languages,
  Dumbbell,
  ChevronRight,
  ArrowLeft,
  Plus,
  Check,
  RotateCcw,
} from "lucide-react";
import Link from "next/link";
import CourseContent from "@/components/CourseContent";
import DialogueDisplay from "@/components/DialogueDisplay";
import CharacterCard from "@/components/CharacterCard";
import ExerciseRunner from "@/components/ExerciseRunner";
import ProgressBar from "@/components/ProgressBar";
import { cn } from "@/lib/cn";
import { getUnitById, chapters } from "@/data/course";
import {
  getPathProgress,
  isUnitUnlocked,
  completeUnit,
} from "@/lib/progress";
import { upsertCard, updateStreak } from "@/lib/storage";
import type { CourseUnit } from "@/types/course";
import type { SM2Card } from "@/types";

interface UnitContentProps {
  unitId: string;
}

type Tab = "course" | "vocabulary" | "exercises";

export default function UnitContent({ unitId }: UnitContentProps) {
  const [unit, setUnit] = useState<CourseUnit | undefined>(undefined);
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("course");
  const [exerciseResult, setExerciseResult] = useState<{
    score: number;
    passed: boolean;
  } | null>(null);
  const [vocabAdded, setVocabAdded] = useState(false);

  useEffect(() => {
    const u = getUnitById(unitId);
    setUnit(u);
    setLoaded(true);
  }, [unitId]);

  const chapter = unit ? chapters.find((c) => c.number === unit.chapter) : undefined;

  const handleExerciseComplete = useCallback(
    (score: number) => {
      if (!unit) return;
      const passed = score >= unit.requiredScore;
      setExerciseResult({ score, passed });
      if (passed) {
        completeUnit(unitId, score, unit, chapters);
        updateStreak();
      }
    },
    [unit, unitId]
  );

  const handleAddAllVocab = useCallback(() => {
    if (!unit) return;
    for (const item of unit.vocabulary) {
      const card: SM2Card = {
        id: `course-${unitId}-${item.character}`,
        front: item.character,
        back: item.french,
        pinyin: item.pinyin,
        zhuyin: item.zhuyin,
        type: "vocabulary",
        lessonId: unitId,
        easeFactor: 2.5,
        interval: 0,
        repetitions: 0,
        nextReview: new Date().toISOString(),
      };
      upsertCard(card);
    }
    setVocabAdded(true);
  }, [unit, unitId]);

  const handleRetry = () => {
    setExerciseResult(null);
  };

  const allOrderedIds = chapters.flatMap((ch) => ch.unitIds);
  const currentIdx = allOrderedIds.indexOf(unitId);
  const nextUnitId = currentIdx >= 0 && currentIdx < allOrderedIds.length - 1
    ? allOrderedIds[currentIdx + 1]
    : null;

  if (!loaded) return null;

  if (!unit) {
    return (
      <div className="flex flex-col items-center gap-4 py-20 text-center">
        <p className="text-lg text-stone-500">Cette unite n'est pas encore disponible.</p>
        <Link href="/path" className="btn-primary">
          Retour au parcours
        </Link>
      </div>
    );
  }

  const tabs: { key: Tab; label: string; icon: React.ReactNode }[] = [
    { key: "course", label: "Cours", icon: <BookOpen className="h-4 w-4" /> },
    { key: "vocabulary", label: "Vocabulaire", icon: <Languages className="h-4 w-4" /> },
    { key: "exercises", label: "Exercices", icon: <Dumbbell className="h-4 w-4" /> },
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-stone-400">
        <Link href="/path" className="hover:text-primary transition-colors">
          Parcours
        </Link>
        <ChevronRight className="h-3 w-3" />
        {chapter && (
          <>
            <span>Chapitre {chapter.number}</span>
            <ChevronRight className="h-3 w-3" />
          </>
        )}
        <span className="text-stone-700">Unite {unit.number}</span>
      </nav>

      {/* Header */}
      <header>
        <div className="flex items-center gap-3">
          <span className="text-3xl">{unit.icon}</span>
          <div>
            <h1 className="text-2xl font-bold text-stone-900">
              Unite {unit.number} — {unit.title}
            </h1>
            <p className="chinese text-stone-400">{unit.titleZh}</p>
          </div>
        </div>
        <p className="mt-2 text-stone-500">{unit.description}</p>
      </header>

      {/* Tabs */}
      <div className="flex gap-1 rounded-lg border border-stone-200 bg-stone-50 p-1">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={cn(
              "flex flex-1 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors",
              activeTab === tab.key
                ? "bg-white text-stone-800 shadow-sm"
                : "text-stone-500 hover:text-stone-700"
            )}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {activeTab === "course" && (
        <div className="flex flex-col gap-8">
          <CourseContent sections={unit.sections} />

          {unit.dialogue && (
            <div>
              <h3 className="mb-4 text-lg font-semibold text-stone-800">
                Dialogue
              </h3>
              <DialogueDisplay dialogue={unit.dialogue} />
            </div>
          )}

          {unit.keyPoints.length > 0 && (
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-5">
              <h3 className="mb-3 font-semibold text-amber-800">
                Points cles a retenir
              </h3>
              <ul className="flex flex-col gap-2">
                {unit.keyPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-amber-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {activeTab === "vocabulary" && (
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-stone-500">
              {unit.vocabulary.length} mot{unit.vocabulary.length > 1 ? "s" : ""} de vocabulaire
            </p>
            <button
              onClick={handleAddAllVocab}
              disabled={vocabAdded}
              className={cn(
                "btn-secondary gap-1 text-sm",
                vocabAdded && "opacity-50 cursor-default"
              )}
            >
              {vocabAdded ? (
                <>
                  <Check className="h-4 w-4" />
                  Ajoute aux flashcards
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4" />
                  Ajouter tout aux flashcards
                </>
              )}
            </button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {unit.vocabulary.map((item) => (
              <CharacterCard key={item.character} item={item} />
            ))}
          </div>
        </div>
      )}

      {activeTab === "exercises" && (
        <div className="flex flex-col gap-6">
          {exerciseResult ? (
            <div className="card text-center">
              <div className="text-5xl mb-4">
                {exerciseResult.passed ? "🎉" : "💪"}
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2">
                {exerciseResult.passed
                  ? "Unite validee !"
                  : "Pas tout a fait..."}
              </h3>
              <p className="text-stone-600 mb-4">
                Score : {Math.round(exerciseResult.score * 100)}%
                {!exerciseResult.passed &&
                  ` (minimum requis : ${Math.round(unit.requiredScore * 100)}%)`}
              </p>
              <ProgressBar
                value={Math.round(exerciseResult.score * 100)}
                max={100}
                color={exerciseResult.passed ? "bg-success" : "bg-warning"}
              />
              <div className="mt-6 flex items-center justify-center gap-3">
                {exerciseResult.passed && nextUnitId ? (
                  <Link href={`/path/${nextUnitId}`} className="btn-primary gap-1">
                    Unite suivante
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <button onClick={handleRetry} className="btn-primary gap-1">
                    <RotateCcw className="h-4 w-4" />
                    Reessayer
                  </button>
                )}
                <Link href="/path" className="btn-secondary">
                  Retour au parcours
                </Link>
              </div>
            </div>
          ) : (
            <ExerciseRunner
              exercises={unit.exercises}
              onComplete={handleExerciseComplete}
            />
          )}
        </div>
      )}

      {/* Bottom navigation */}
      <div className="flex items-center justify-between border-t border-stone-200 pt-6">
        <Link
          href="/path"
          className="flex items-center gap-1 text-sm text-stone-500 hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour au parcours
        </Link>
        {nextUnitId && (
          <Link
            href={`/path/${nextUnitId}`}
            className="flex items-center gap-1 text-sm text-stone-500 hover:text-primary transition-colors"
          >
            Unite suivante
            <ChevronRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
