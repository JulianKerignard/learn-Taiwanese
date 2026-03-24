"use client";

import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import {
  CheckCircle2,
  RotateCcw,
  Sparkles,
  BookOpen,
  Trophy,
  Flame,
  Zap,
} from "lucide-react";
import Flashcard from "./Flashcard";
import { getDueCards, getNewCards, gradeCard } from "@/lib/fsrs";
import { calculateXP, checkAchievements, getLevelFromTotalXP, getStreakMultiplier } from "@/lib/gamification";
import {
  getCards,
  upsertCard,
  getProgress,
  saveProgress,
  updateStreak,
  getSettings,
  getGamification,
  saveGamification,
} from "@/lib/storage";
import type { SM2Card, SM2Grade, ReviewMode, SessionResult, Achievement } from "@/types";

const REVIEW_MODES: ReviewMode[] = ["recognize", "recall", "listening", "writing"];

function shuffleArray<T>(arr: T[]): T[] {
  const s = [...arr];
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [s[i], s[j]] = [s[j], s[i]];
  }
  return s;
}

function pickMode(index: number): ReviewMode {
  return REVIEW_MODES[index % REVIEW_MODES.length];
}

function shuffleForDistractors(cards: SM2Card[], current: SM2Card): SM2Card[] {
  return shuffleArray(cards.filter((c) => c.id !== current.id)).slice(0, 3);
}

export default function ReviewSession() {
  const [queue, setQueue] = useState<SM2Card[]>([]);
  const [allCards, setAllCards] = useState<SM2Card[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sessionDone, setSessionDone] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [sessionResult, setSessionResult] = useState<SessionResult | null>(null);
  const startTimeRef = useRef(Date.now());

  // Track accuracy per mode
  const [modeAccuracy, setModeAccuracy] = useState<Record<ReviewMode, { correct: number; total: number }>>({
    recognize: { correct: 0, total: 0 },
    recall: { correct: 0, total: 0 },
    listening: { correct: 0, total: 0 },
    writing: { correct: 0, total: 0 },
  });

  const [sessionXP, setSessionXP] = useState(0);
  const [reviewed, setReviewed] = useState(0);
  const [newLearned, setNewLearned] = useState(0);
  const [allGradesGood, setAllGradesGood] = useState(true);
  const [newAchievements, setNewAchievements] = useState<Achievement[]>([]);

  useEffect(() => {
    const cards = getCards();
    const settings = getSettings();
    const due = getDueCards(cards);
    const newCards = getNewCards(cards, settings.dailyNewCards);

    const dueIds = new Set(due.map((c) => c.id));
    const combined = [...due, ...newCards.filter((c) => !dueIds.has(c.id))];

    setAllCards(cards);
    setQueue(combined);
    setLoaded(true);
    startTimeRef.current = Date.now();

    if (combined.length === 0) {
      setSessionDone(true);
    }
  }, []);

  const handleGrade = useCallback(
    (grade: SM2Grade) => {
      const card = queue[currentIndex];
      if (!card) return;

      const mode = pickMode(currentIndex);

      // Grade the card via FSRS
      const updated = gradeCard(card, grade);
      upsertCard(updated);

      // Update streak
      const progress = updateStreak();
      progress.todayReviewedCards += 1;
      if (card.repetitions === 0) {
        progress.todayNewCards += 1;
      }
      progress.lastStudyDate = new Date().toISOString().split("T")[0];
      progress.charactersLearned = Math.max(
        progress.charactersLearned,
        getCards().filter((c) => c.repetitions > 0).length
      );
      saveProgress(progress);

      // Calculate XP
      const xpEvent = calculateXP(grade, mode, progress.currentStreak);
      const gamData = getGamification();
      gamData.totalXP += xpEvent.total;
      gamData.totalReviews += 1;
      gamData.totalCharactersLearned = progress.charactersLearned;
      gamData.currentStreak = progress.currentStreak;
      gamData.xpHistory.push(xpEvent);

      // Track grade quality
      const isGoodOrEasy = grade >= 3;
      if (!isGoodOrEasy) {
        setAllGradesGood(false);
      }

      // Update mode accuracy
      setModeAccuracy((prev) => ({
        ...prev,
        [mode]: {
          correct: prev[mode].correct + (isGoodOrEasy ? 1 : 0),
          total: prev[mode].total + 1,
        },
      }));

      setSessionXP((prev) => prev + xpEvent.total);
      setReviewed((prev) => prev + 1);
      if (card.repetitions === 0) {
        setNewLearned((prev) => prev + 1);
      }

      // Check achievements
      gamData.lastSessionPerfect = allGradesGood && isGoodOrEasy;
      const earned = checkAchievements(gamData);
      if (earned.length > 0) {
        gamData.achievements.push(...earned);
        setNewAchievements((prev) => [...prev, ...earned]);
      }

      // Update level in progress
      const levelInfo = getLevelFromTotalXP(gamData.totalXP);
      progress.level = levelInfo.level;
      saveProgress(progress);
      saveGamification(gamData);

      if (currentIndex + 1 >= queue.length) {
        const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000);
        setSessionResult({
          totalCards: queue.length,
          reviewed: reviewed + 1,
          newLearned: newLearned + (card.repetitions === 0 ? 1 : 0),
          xpEarned: sessionXP + xpEvent.total,
          accuracy: {
            ...modeAccuracy,
            [mode]: {
              correct: modeAccuracy[mode].correct + (isGoodOrEasy ? 1 : 0),
              total: modeAccuracy[mode].total + 1,
            },
          },
          timeSpent,
          newAchievements,
        });
        setSessionDone(true);
      } else {
        setCurrentIndex((i) => i + 1);
      }
    },
    [queue, currentIndex, reviewed, newLearned, sessionXP, modeAccuracy, allGradesGood, newAchievements]
  );

  if (!loaded) return null;

  // No cards
  if (queue.length === 0 && sessionDone) {
    return (
      <div className="flex flex-col items-center gap-6 py-20 text-center">
        <BookOpen className="h-16 w-16 text-stone-300" />
        <h1 className="text-2xl font-bold text-stone-800">Rien a reviser !</h1>
        <p className="max-w-md text-stone-500">
          Ajoute du vocabulaire depuis les lecons pour commencer tes sessions de
          revision.
        </p>
        <a href="/lessons" className="btn-primary gap-2">
          <BookOpen className="h-4 w-4" />
          Voir les lecons
        </a>
      </div>
    );
  }

  // Session complete
  if (sessionDone && sessionResult) {
    const gamData = getGamification();
    const levelInfo = getLevelFromTotalXP(gamData.totalXP);
    const streakMult = getStreakMultiplier(gamData.currentStreak);
    const minutes = Math.floor(sessionResult.timeSpent / 60);
    const seconds = sessionResult.timeSpent % 60;

    return (
      <div className="mx-auto flex max-w-md flex-col items-center gap-6 py-12">
        <CheckCircle2 className="h-16 w-16 text-success" />
        <h1 className="text-2xl font-bold text-stone-800">Session terminee !</h1>

        {/* XP and Level */}
        <div className="w-full rounded-xl border border-stone-200 bg-gradient-to-r from-primary/5 to-accent/5 p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              <span className="font-bold text-stone-800">+{sessionResult.xpEarned} XP</span>
              {streakMult > 1 && (
                <span className="text-xs text-primary">(x{streakMult})</span>
              )}
            </div>
            <span className="text-sm font-medium text-stone-600">
              Niveau {levelInfo.level}
            </span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-stone-200">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${levelInfo.progress * 100}%` }}
            />
          </div>
          <p className="mt-1 text-xs text-stone-500 text-right">
            {Math.round(levelInfo.currentLevelXP)}/{Math.round(levelInfo.currentLevelXP + levelInfo.xpToNextLevel)} XP
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid w-full grid-cols-4 gap-3">
          <div className="flex flex-col items-center gap-1 rounded-lg border border-stone-100 bg-white p-3">
            <RotateCcw className="h-4 w-4 text-accent" />
            <p className="text-lg font-bold text-stone-800">{sessionResult.reviewed}</p>
            <p className="text-[10px] text-stone-500">Revues</p>
          </div>
          <div className="flex flex-col items-center gap-1 rounded-lg border border-stone-100 bg-white p-3">
            <Sparkles className="h-4 w-4 text-warning" />
            <p className="text-lg font-bold text-stone-800">{sessionResult.newLearned}</p>
            <p className="text-[10px] text-stone-500">Nouvelles</p>
          </div>
          <div className="flex flex-col items-center gap-1 rounded-lg border border-stone-100 bg-white p-3">
            <Flame className="h-4 w-4 text-danger" />
            <p className="text-lg font-bold text-stone-800">{gamData.currentStreak}</p>
            <p className="text-[10px] text-stone-500">Streak</p>
          </div>
          <div className="flex flex-col items-center gap-1 rounded-lg border border-stone-100 bg-white p-3">
            <Trophy className="h-4 w-4 text-primary" />
            <p className="text-lg font-bold text-stone-800">
              {minutes > 0 ? `${minutes}m` : ""}{seconds}s
            </p>
            <p className="text-[10px] text-stone-500">Temps</p>
          </div>
        </div>

        {/* Accuracy per mode */}
        <div className="w-full rounded-xl border border-stone-100 bg-white p-4">
          <h3 className="text-sm font-semibold text-stone-700 mb-3">Precision par mode</h3>
          <div className="space-y-2">
            {(["recognize", "recall", "listening", "writing"] as ReviewMode[]).map((m) => {
              const data = sessionResult.accuracy[m];
              if (data.total === 0) return null;
              const pct = Math.round((data.correct / data.total) * 100);
              const label = {
                recognize: "Reconnaissance",
                recall: "Rappel",
                listening: "Ecoute",
                writing: "Ecriture",
              }[m];

              return (
                <div key={m} className="flex items-center gap-3">
                  <span className="w-28 text-xs text-stone-600">{label}</span>
                  <div className="flex-1 h-2 rounded-full bg-stone-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="text-xs font-medium text-stone-700 w-10 text-right">{pct}%</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* New achievements */}
        {newAchievements.length > 0 && (
          <div className="w-full rounded-xl border border-warning/30 bg-warning/5 p-4">
            <h3 className="text-sm font-semibold text-warning mb-2 flex items-center gap-1">
              <Trophy className="h-4 w-4" />
              Nouveau(x) succes !
            </h3>
            <div className="space-y-1">
              {newAchievements.map((a) => (
                <p key={a.id} className="text-sm text-stone-700">
                  <span className="font-medium">{a.name}</span> - {a.description}
                </p>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-3">
          <a href="/" className="btn-secondary">
            Accueil
          </a>
          <a href="/lessons" className="btn-primary">
            Continuer a apprendre
          </a>
        </div>
      </div>
    );
  }

  // Active session
  const card = queue[currentIndex];
  const mode = pickMode(currentIndex);
  const distractors = useMemo(
    () => shuffleForDistractors(allCards.length > 0 ? allCards : queue, card),
    [allCards, queue, card]
  );
  const settings = useMemo(() => getSettings(), []);

  return (
    <div className="mx-auto flex max-w-lg flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-stone-900">Revision</h1>
        <p className="text-sm text-stone-500">
          Carte {currentIndex + 1} sur {queue.length}
        </p>
      </div>

      <div className="h-1.5 w-full overflow-hidden rounded-full bg-stone-100">
        <div
          className="h-full rounded-full bg-primary transition-all duration-300"
          style={{
            width: `${((currentIndex + 1) / queue.length) * 100}%`,
          }}
        />
      </div>

      <Flashcard
        card={card}
        mode={mode}
        onGrade={handleGrade}
        displayMode={settings.displayMode}
        distractors={distractors}
      />

      <div className="flex justify-center gap-4 text-xs text-stone-400">
        <span>Revues : {reviewed}</span>
        <span>Nouvelles : {newLearned}</span>
        <span>XP : +{sessionXP}</span>
      </div>
    </div>
  );
}
