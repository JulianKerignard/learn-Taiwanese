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
import { getGamification, saveGamification, addStudyTime } from "@/lib/storage";
import { checkAchievements, recordXpEvent } from "@/lib/gamification";
import CourseContent from "@/components/CourseContent";
import DialogueDisplay from "@/components/DialogueDisplay";
import CharacterCard from "@/components/CharacterCard";
import ExerciseRunner from "@/components/ExerciseRunner";
import ProgressBar from "@/components/ProgressBar";
import { cn } from "@/lib/cn";
import {
  completeUnit,
} from "@/lib/progress";
import { upsertCard, updateStreak, getCards } from "@/lib/storage";
import { createCard } from "@/lib/fsrs";
import { LANGUAGES, langHref, levelName, type LanguageSegment } from "@/lib/language";
import type { Chapter, CourseUnit, ProficiencyLevel } from "@/types/course";
import { useClientState } from "@/lib/use-client-state";

/** Stable FSRS card id for a unit vocabulary entry. */
function vocabCardId(unitId: string, term: string): string {
  return `course-${unitId}-${term}`;
}

// Everything this component knows about the catalogue arrives as props. It is a
// client component: importing @/data/course here would ship all 88 unit modules
// to the browser, which is exactly what the server page exists to prevent.
interface UnitContentProps {
  /** Edition being read: every link below has to carry it. */
  lang: LanguageSegment;
  /** The route param — the address, even when nothing is found at it. */
  unitId: string;
  unit?: CourseUnit;
  /** The whole parcours in order: completing a unit advances through it. */
  chapters: Chapter[];
  level?: ProficiencyLevel;
  /** Ids of this level's units, in order, for the "next unit" link. */
  levelUnitIds: string[];
}

type Tab = "course" | "vocabulary" | "exercises";

export default function UnitContent({
  lang,
  unitId,
  unit,
  chapters,
  level,
  levelUnitIds,
}: UnitContentProps) {
  const [activeTab, setActiveTab] = useState<Tab>("course");
  const [exerciseResult, setExerciseResult] = useState<{
    score: number;
    passed: boolean;
  } | null>(null);
  // Only the flashcard state needs the browser; the lesson itself came prerendered.
  const [vocabAdded, setVocabAdded] = useClientState(
    () => {
      if (!unit) return false;
      const existingIds = new Set(getCards().map((c) => c.id));
      // every() is true for an empty list: 15 units have no vocabulary, and the
      // button would show as already added next to "0 mots".
      return (
        unit.vocabulary.length > 0 &&
        unit.vocabulary.every((item) => existingIds.has(vocabCardId(unitId, item.term)))
      );
    },
    false,
    unitId
  );

  useEffect(() => {
    let activeTime = 0;
    let lastTick = Date.now();
    let visible = true;

    function onVisibilityChange() {
      if (document.hidden) {
        // Tab hidden: accumulate time so far
        activeTime += Date.now() - lastTick;
        visible = false;
      } else {
        // Tab visible again: reset tick
        lastTick = Date.now();
        visible = true;
      }
    }

    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
      if (visible) {
        activeTime += Date.now() - lastTick;
      }
      const minutes = Math.round(activeTime / 60000);
      if (minutes > 0) addStudyTime(minutes);
    };
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

        // Award XP for completing a unit
        const gam = getGamification();
        const xpEarned = Math.round(50 + score * 50); // 50-100 XP based on score
        gam.totalReviews += 1;
        recordXpEvent(gam, {
          base: xpEarned,
          modeBonus: 0,
          streakMultiplier: 1,
          total: xpEarned,
          timestamp: new Date().toISOString(),
        });
        // Check achievements
        const newAchievements = checkAchievements(gam);
        gam.achievements.push(...newAchievements);
        saveGamification(gam);
      }
    },
    [unit, unitId, chapters]
  );

  const handleAddAllVocab = useCallback(() => {
    if (!unit) return;
    // Skip cards already in the store: re-adding would reset their FSRS history.
    const existingIds = new Set(getCards().map((c) => c.id));
    for (const item of unit.vocabulary) {
      const id = vocabCardId(unitId, item.term);
      if (existingIds.has(id)) continue;
      const card = createCard({
        id,
        front: item.term,
        back: item.french,
        romanization: item.romanization,
        reading: item.reading,
        segments: item.segments,
        type: "vocabulary",
        lessonId: unitId,
      });
      upsertCard(card);
    }
    setVocabAdded(true);
  }, [unit, unitId, setVocabAdded]);

  const handleRetry = () => {
    setExerciseResult(null);
  };

  // Next unit within the same proficiency level
  const levelIdx = levelUnitIds.indexOf(unitId);
  const nextUnitId = levelIdx >= 0 && levelIdx < levelUnitIds.length - 1
    ? levelUnitIds[levelIdx + 1]
    : null;
  const isLastInLevel = levelIdx === levelUnitIds.length - 1;

  if (!unit) {
    return (
      <div className="flex flex-col items-center gap-4 py-20 text-center">
        <p className="text-lg text-stone-500">Cette unité n'est pas encore disponible.</p>
        <Link href={langHref(lang, "/path")} className="btn-primary">
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
        <Link href={langHref(lang, "/path")} className="hover:text-primary transition-colors">
          Parcours
        </Link>
        <ChevronRight className="h-3 w-3" />
        {level && (
          <>
            <Link href={langHref(lang, `/path/niveau/${level.slug}`)} className="hover:text-primary transition-colors">
              {levelName(LANGUAGES[lang], level.level)}
            </Link>
            <ChevronRight className="h-3 w-3" />
          </>
        )}
        {chapter && (
          <>
            <span>Chapitre {chapter.number}</span>
            <ChevronRight className="h-3 w-3" />
          </>
        )}
        <span className="text-stone-700">Unité {unit.number}</span>
      </nav>

      {/* Header */}
      <header>
        <div className="flex items-center gap-3">
          <span className="text-3xl">{unit.icon}</span>
          <div>
            <h1 className="text-display font-bold text-stone-900">
              Unité {unit.number} — {unit.title}
            </h1>
            <p className="chinese text-stone-500">{unit.titleNative}</p>
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
              "flex flex-1 items-center justify-center gap-1 sm:gap-2 rounded-md px-2 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium transition-colors",
              activeTab === tab.key
                ? "bg-white text-stone-800 shadow-sm"
                : "text-stone-500 hover:text-stone-700"
            )}
          >
            <span className="hidden sm:inline">{tab.icon}</span>
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
              <h3 className="mb-4 text-lg font-bold text-stone-800">
                Dialogue
              </h3>
              <DialogueDisplay dialogue={unit.dialogue} />
            </div>
          )}

          {unit.keyPoints.length > 0 && (
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-5">
              <h3 className="mb-3 font-bold text-amber-800">
                Points clés à retenir
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
                  Ajouté aux flashcards
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
              <CharacterCard key={item.term} item={item} />
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
                  ? "Unité validée !"
                  : "Pas tout à fait..."}
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
                  <Link href={langHref(lang, `/path/${nextUnitId}`)} className="btn-primary gap-1">
                    Unité suivante
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                ) : exerciseResult.passed && isLastInLevel && level ? (
                  <Link href={langHref(lang, `/path/niveau/${level.slug}`)} className="btn-primary gap-1">
                    Niveau terminé !
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <button onClick={handleRetry} className="btn-primary gap-1">
                    <RotateCcw className="h-4 w-4" />
                    Réessayer
                  </button>
                )}
                <Link href={langHref(lang, level ? `/path/niveau/${level.slug}` : "/path")} className="btn-secondary">
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
          href={langHref(lang, level ? `/path/niveau/${level.slug}` : "/path")}
          className="flex items-center gap-1 text-sm text-stone-500 hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          {level ? `Retour au ${levelName(LANGUAGES[lang], level.level)}` : "Retour au parcours"}
        </Link>
        {nextUnitId && (
          <Link
            href={langHref(lang, `/path/${nextUnitId}`)}
            className="flex items-center gap-1 text-sm text-stone-500 hover:text-primary transition-colors"
          >
            Unité suivante
            <ChevronRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
