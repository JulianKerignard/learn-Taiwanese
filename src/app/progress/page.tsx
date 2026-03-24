"use client";

import { useState, useEffect } from "react";
import {
  BarChart3,
  Flame,
  GraduationCap,
  BookOpen,
  Layers,
  Star,
  Calendar,
  AlertTriangle,
  Trash2,
} from "lucide-react";
import ProgressBar from "@/components/ProgressBar";
import { getProgress, saveProgress, getCards, saveCards } from "@/lib/storage";
import { getStats } from "@/lib/fsrs";
import { lessons } from "@/data/lessons";
import type { UserProgress } from "@/types";

export default function ProgressPage() {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [cardStats, setCardStats] = useState({
    total: 0,
    due: 0,
    learned: 0,
    mature: 0,
    newCards: 0,
  });
  const [showReset, setShowReset] = useState(false);

  useEffect(() => {
    reload();
  }, []);

  function reload() {
    const p = getProgress();
    setProgress(p);
    const cards = getCards();
    setCardStats(getStats(cards));
  }

  function handleReset() {
    // Clear progress storage so getProgress() returns defaults on reload
    try { localStorage.removeItem("taiwan-progress"); } catch { /* noop */ }
    saveCards([]);
    setShowReset(false);
    reload();
  }

  if (!progress) return null;

  // Build last 7 days streak calendar
  const today = new Date();
  const streakDays: { date: string; label: string; active: boolean }[] = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const iso = d.toISOString().split("T")[0];
    const dayLabel = d.toLocaleDateString("fr-FR", { weekday: "short" }).slice(0, 3);

    // A day is "active" if it falls within the current streak window ending at lastStudyDate
    let active = false;
    if (progress.lastStudyDate && progress.currentStreak > 0) {
      const lastStudy = new Date(progress.lastStudyDate);
      const streakStart = new Date(lastStudy);
      streakStart.setDate(streakStart.getDate() - (progress.currentStreak - 1));
      active = d >= streakStart && d <= lastStudy;
    }

    streakDays.push({ date: iso, label: dayLabel, active });
  }

  const completedLessons = lessons.filter((l) =>
    progress.lessonsCompleted.includes(l.id)
  );

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold text-stone-900">Progression</h1>
        <p className="mt-1 text-stone-500">Suis tes avancées et reste motivé.</p>
      </div>

      {/* Stats globales */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <StatCard
          icon={<Star className="h-5 w-5 text-warning" />}
          label="Niveau"
          value={progress.level}
        />
        <StatCard
          icon={<GraduationCap className="h-5 w-5 text-primary" />}
          label="Caractères appris"
          value={progress.charactersLearned}
        />
        <StatCard
          icon={<Flame className="h-5 w-5 text-danger" />}
          label="Streak actuel"
          value={`${progress.currentStreak}j`}
        />
        <StatCard
          icon={<Calendar className="h-5 w-5 text-accent" />}
          label="Jours total"
          value={progress.totalStudyDays}
        />
      </div>

      {/* Objectif quotidien */}
      <section className="card">
        <h2 className="mb-3 text-lg font-semibold text-stone-800">
          Objectif quotidien
        </h2>
        <ProgressBar
          value={progress.todayReviewedCards}
          max={progress.dailyGoal}
          label={`${progress.todayReviewedCards} / ${progress.dailyGoal} cartes revues`}
          color="bg-primary"
        />
      </section>

      {/* Streak calendrier */}
      <section className="card">
        <h2 className="mb-3 text-lg font-semibold text-stone-800">
          Streak - 7 derniers jours
        </h2>
        <div className="flex justify-between gap-2">
          {streakDays.map((day) => (
            <div key={day.date} className="flex flex-col items-center gap-1">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium ${
                  day.active
                    ? "bg-primary text-white"
                    : "bg-stone-100 text-stone-400"
                }`}
              >
                {day.active ? (
                  <Flame className="h-4 w-4" />
                ) : (
                  <span className="text-xs">
                    {new Date(day.date).getDate()}
                  </span>
                )}
              </div>
              <span className="text-xs text-stone-400">{day.label}</span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-sm text-stone-500">
          Plus long streak : {progress.longestStreak} jour
          {progress.longestStreak > 1 ? "s" : ""}
        </p>
      </section>

      {/* Stats flashcards */}
      <section className="card">
        <h2 className="mb-3 text-lg font-semibold text-stone-800">Flashcards</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
          <MiniStat label="Total" value={cardStats.total} />
          <MiniStat label="À réviser" value={cardStats.due} color="text-accent" />
          <MiniStat label="Apprises" value={cardStats.learned} color="text-success" />
          <MiniStat label="Matures" value={cardStats.mature} color="text-primary" />
          <MiniStat label="Nouvelles" value={cardStats.newCards} color="text-warning" />
        </div>
      </section>

      {/* Leçons complétées */}
      <section className="card">
        <h2 className="mb-3 text-lg font-semibold text-stone-800">
          Leçons complétées ({completedLessons.length} / {lessons.length})
        </h2>
        {completedLessons.length > 0 ? (
          <div className="flex flex-col gap-2">
            {completedLessons.map((l) => (
              <div
                key={l.id}
                className="flex items-center gap-3 rounded-lg bg-success/5 px-3 py-2"
              >
                <span className="text-xl">{l.icon}</span>
                <span className="text-sm font-medium text-stone-700">
                  {l.title}
                </span>
                <span className="chinese text-xs text-stone-400">{l.titleZh}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-stone-400">
            Aucune leçon complétée pour le moment.
          </p>
        )}
      </section>

      {/* Reset */}
      <section className="card border-danger/30">
        <h2 className="mb-2 text-lg font-semibold text-danger">Zone de danger</h2>
        {!showReset ? (
          <button
            onClick={() => setShowReset(true)}
            className="inline-flex items-center gap-2 rounded-lg border border-danger/30 px-4 py-2 text-sm font-medium text-danger transition-colors hover:bg-danger/5"
          >
            <Trash2 className="h-4 w-4" />
            Réinitialiser la progression
          </button>
        ) : (
          <div className="flex flex-col gap-3 rounded-lg bg-danger/5 p-4">
            <div className="flex items-start gap-2">
              <AlertTriangle className="mt-0.5 h-5 w-5 text-danger" />
              <p className="text-sm text-stone-700">
                Cette action est irréversible. Toutes tes données de progression,
                flashcards et leçons complétées seront supprimées.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleReset}
                className="rounded-lg bg-danger px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
              >
                Confirmer la réinitialisation
              </button>
              <button
                onClick={() => setShowReset(false)}
                className="btn-secondary"
              >
                Annuler
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}) {
  return (
    <div className="card flex flex-col items-center gap-2 text-center">
      {icon}
      <p className="text-2xl font-bold text-stone-800">{value}</p>
      <p className="text-xs text-stone-500">{label}</p>
    </div>
  );
}

function MiniStat({
  label,
  value,
  color = "text-stone-800",
}: {
  label: string;
  value: number;
  color?: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <p className={`text-xl font-bold ${color}`}>{value}</p>
      <p className="text-xs text-stone-500">{label}</p>
    </div>
  );
}
