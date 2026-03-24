"use client";

import { useState, useEffect, useCallback } from "react";
import {
  BookOpen,
  MessageSquare,
  HelpCircle,
  Plus,
  CheckCircle2,
  ChevronLeft,
  Trophy,
} from "lucide-react";
import CharacterCard from "@/components/CharacterCard";
import AudioButton from "@/components/AudioButton";
import PinyinDisplay from "@/components/PinyinDisplay";
import QuizQuestion from "@/components/QuizQuestion";
import CourseContent from "@/components/CourseContent";
import { getLessonBySlug } from "@/data/lessons";
import { createCard } from "@/lib/fsrs";
import { getCards, upsertCard, getProgress, saveProgress } from "@/lib/storage";
import { cn } from "@/lib/cn";
import type { Lesson, FlashcardData } from "@/types";

type Tab = "cours" | "vocabulary" | "phrases" | "quiz";

export default function LessonContent({ slug }: { slug: string }) {
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [tab, setTab] = useState<Tab>("cours");
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [addedToFlashcards, setAddedToFlashcards] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const l = getLessonBySlug(slug);
    if (l) {
      setLesson(l);
      const progress = getProgress();
      setCompleted(progress.lessonsCompleted.includes(l.id));
    }
  }, [slug]);

  const handleQuizAnswer = useCallback(
    (correct: boolean) => {
      if (!lesson) return;
      if (correct) setQuizScore((s) => s + 1);

      setTimeout(() => {
        if (quizIndex + 1 < lesson.quiz.length) {
          setQuizIndex((i) => i + 1);
        } else {
          setQuizFinished(true);
        }
      }, 300);
    },
    [lesson, quizIndex]
  );

  function handleAddFlashcards() {
    if (!lesson) return;
    const existingCards = getCards();
    const existingIds = new Set(existingCards.map((c) => c.id));

    for (const item of lesson.vocabulary) {
      const id = `${lesson.id}-${item.character}`;
      if (!existingIds.has(id)) {
        const data: FlashcardData = {
          id,
          front: item.character,
          back: item.french,
          pinyin: item.pinyin,
          zhuyin: item.zhuyin,
          type: "vocabulary",
          lessonId: lesson.id,
        };
        upsertCard(createCard(data));
      }
    }

    const progress = getProgress();
    progress.charactersLearned = Math.max(
      progress.charactersLearned,
      getCards().length
    );
    saveProgress(progress);
    setAddedToFlashcards(true);
  }

  function handleComplete() {
    if (!lesson) return;
    const progress = getProgress();
    if (!progress.lessonsCompleted.includes(lesson.id)) {
      progress.lessonsCompleted.push(lesson.id);
      saveProgress(progress);
      setCompleted(true);
    }
  }

  if (!lesson) {
    return (
      <div className="flex flex-col items-center gap-4 py-20">
        <p className="text-lg text-stone-500">Leçon introuvable.</p>
        <a href="/lessons" className="btn-secondary">
          Retour aux leçons
        </a>
      </div>
    );
  }

  const hasCourse = lesson.sections && lesson.sections.length > 0;

  const tabs: { key: Tab; label: string; icon: React.ReactNode }[] = [
    ...(hasCourse ? [{ key: "cours" as Tab, label: "Cours", icon: <BookOpen className="h-4 w-4" /> }] : []),
    { key: "vocabulary", label: "Vocabulaire", icon: <BookOpen className="h-4 w-4" /> },
    { key: "phrases", label: "Phrases", icon: <MessageSquare className="h-4 w-4" /> },
    { key: "quiz", label: "Quiz", icon: <HelpCircle className="h-4 w-4" /> },
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div>
        <a
          href="/lessons"
          className="mb-4 inline-flex items-center gap-1 text-sm text-stone-500 hover:text-primary transition-colors"
        >
          <ChevronLeft className="h-4 w-4" /> Retour aux leçons
        </a>
        <div className="flex items-center gap-4">
          <span className="text-5xl">{lesson.icon}</span>
          <div>
            <h1 className="text-3xl font-bold text-stone-900">{lesson.title}</h1>
            <p className="chinese text-lg text-stone-400">{lesson.titleZh}</p>
            <p className="mt-1 text-stone-500">{lesson.description}</p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={handleAddFlashcards}
          disabled={addedToFlashcards}
          className={cn(
            "btn-secondary gap-2",
            addedToFlashcards && "opacity-60 cursor-not-allowed"
          )}
        >
          <Plus className="h-4 w-4" />
          {addedToFlashcards ? "Ajouté aux flashcards" : "Ajouter aux flashcards"}
        </button>
        <button
          onClick={handleComplete}
          disabled={completed}
          className={cn(
            "btn-primary gap-2",
            completed && "bg-success hover:bg-success cursor-not-allowed"
          )}
        >
          <CheckCircle2 className="h-4 w-4" />
          {completed ? "Leçon complétée" : "Marquer comme complétée"}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 rounded-lg bg-stone-100 p-1">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={cn(
              "flex flex-1 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors",
              tab === t.key
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-500 hover:text-stone-700"
            )}
          >
            {t.icon}
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {tab === "cours" && hasCourse && (
        <CourseContent sections={lesson.sections!} />
      )}

      {tab === "vocabulary" && (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {lesson.vocabulary.map((item) => (
            <CharacterCard key={item.character} item={item} />
          ))}
        </div>
      )}

      {tab === "phrases" && (
        <div className="flex flex-col gap-4">
          {lesson.phrases.map((phrase) => (
            <div key={phrase.chinese} className="card flex items-start gap-4">
              <AudioButton text={phrase.chinese} size="md" />
              <div className="flex-1">
                <p className="chinese text-2xl font-medium text-stone-800">
                  {phrase.chinese}
                </p>
                <PinyinDisplay pinyin={phrase.pinyin} zhuyin={phrase.zhuyin} size="md" />
                <p className="mt-1 text-stone-600">{phrase.french}</p>
                {phrase.context && (
                  <p className="mt-2 text-xs text-stone-400 italic">{phrase.context}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === "quiz" && (
        <div className="mx-auto w-full max-w-lg">
          {quizFinished ? (
            <div className="card flex flex-col items-center gap-4 text-center">
              <Trophy className="h-12 w-12 text-warning" />
              <h3 className="text-2xl font-bold text-stone-800">Quiz terminé !</h3>
              <p className="text-lg text-stone-600">
                Score : {quizScore} / {lesson.quiz.length}
              </p>
              <p className="text-sm text-stone-500">
                {quizScore === lesson.quiz.length
                  ? "Parfait ! Tu maîtrises cette leçon."
                  : quizScore >= lesson.quiz.length / 2
                  ? "Bon travail ! Continue à pratiquer."
                  : "Continue d'apprendre, tu vas progresser !"}
              </p>
              <button
                onClick={() => {
                  setQuizIndex(0);
                  setQuizScore(0);
                  setQuizFinished(false);
                }}
                className="btn-primary"
              >
                Recommencer
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between text-sm text-stone-500">
                <span>
                  Question {quizIndex + 1} / {lesson.quiz.length}
                </span>
                <span>Score : {quizScore}</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-stone-100">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-300"
                  style={{
                    width: `${((quizIndex + 1) / lesson.quiz.length) * 100}%`,
                  }}
                />
              </div>
              <QuizQuestion
                key={lesson.quiz[quizIndex].id}
                question={lesson.quiz[quizIndex]}
                onAnswer={handleQuizAnswer}
              />
            </div>
          )}
        </div>
      )}

      {/* Cultural notes */}
      {lesson.culturalNotes && lesson.culturalNotes.length > 0 && (
        <section>
          <h2 className="mb-3 text-lg font-semibold text-stone-800">Notes culturelles</h2>
          <div className="flex flex-col gap-3">
            {lesson.culturalNotes.map((note, i) => (
              <div key={i} className="card bg-amber-50/50 border-amber-200/50">
                <p className="text-sm text-stone-700">{note}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
