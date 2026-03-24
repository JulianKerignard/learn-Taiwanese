"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Trophy,
  Flame,
  GraduationCap,
  BookOpen,
  Star,
  RotateCcw,
  Layers,
  Map,
  Target,
  Trash2,
  AlertTriangle,
} from "lucide-react";
import ProgressBar from "@/components/ProgressBar";
import { getProgress, getCards, updateStreak, saveCards } from "@/lib/storage";
import { getPathProgress, getChapterProgress } from "@/lib/progress";
import {
  getLevelFromTotalXP,
  totalXpForLevel,
  xpForLevel,
} from "@/lib/gamification";
import { getGamification } from "@/lib/storage";
import { getStats } from "@/lib/fsrs";
import { chapters, allUnits } from "@/data/course";
import { lessons } from "@/data/lessons";
import type { UserProgress } from "@/types";
import type { GamificationData } from "@/types";
import type { PathProgress } from "@/types/course";

export default function ProgressPage() {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [gamification, setGamification] = useState<GamificationData | null>(
    null
  );
  const [pathProgress, setPathProgress] = useState<PathProgress | null>(null);
  const [cardStats, setCardStats] = useState({
    total: 0,
    due: 0,
    learned: 0,
    mature: 0,
    newCards: 0,
  });
  const [showReset, setShowReset] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    reload();
  }, []);

  function reload() {
    setProgress(getProgress());
    setGamification(getGamification());
    setPathProgress(getPathProgress());
    setCardStats(getStats(getCards()));
    setLoaded(true);
  }

  function handleReset() {
    localStorage.removeItem("taiwan-progress");
    localStorage.removeItem("taiwan-cards");
    localStorage.removeItem("taiwan-course-progress");
    localStorage.removeItem("taiwan-gamification");
    localStorage.removeItem("taiwan-settings");
    setShowReset(false);
    window.location.reload();
  }

  if (!loaded) return null;

  // First visit: no data
  if (
    !progress?.lastStudyDate &&
    !gamification?.totalXP &&
    !pathProgress?.completedUnits.length
  ) {
    return (
      <div className="flex flex-col items-center gap-6 py-20 text-center">
        <Map className="h-16 w-16 text-primary/40" />
        <div>
          <h1 className="text-2xl font-bold text-stone-900">Bienvenue !</h1>
          <p className="mt-2 text-stone-500">
            Tu n'as pas encore commence. Lance-toi dans le parcours !
          </p>
        </div>
        <Link href="/path" className="btn-primary gap-2">
          <Target className="h-4 w-4" />
          Commencer le parcours
        </Link>
      </div>
    );
  }

  const levelInfo = getLevelFromTotalXP(gamification?.totalXP ?? 0);
  const xpNeeded = xpForLevel(levelInfo.level);
  const unlockedAchievements = (gamification?.achievements ?? []).filter(
    (a) => a.unlockedAt
  );

  const overallCompleted = pathProgress?.completedUnits.length ?? 0;
  const overallTotal = allUnits.length;
  const overallPct =
    overallTotal > 0 ? Math.round((overallCompleted / overallTotal) * 100) : 0;

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold text-stone-900">Progression</h1>
        <p className="mt-1 text-stone-500">
          Suis tes avancees et reste motive.
        </p>
      </div>

      {/* Section 1: Stats principales */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <StatCard
          icon={<Star className="h-5 w-5 text-warning" />}
          label="Niveau"
          value={levelInfo.level}
        />
        <StatCard
          icon={<GraduationCap className="h-5 w-5 text-primary" />}
          label="XP total"
          value={gamification?.totalXP ?? 0}
        />
        <StatCard
          icon={<Flame className="h-5 w-5 text-danger" />}
          label="Streak"
          value={`${progress?.currentStreak ?? 0}j`}
        />
        <StatCard
          icon={<Map className="h-5 w-5 text-accent" />}
          label="Parcours"
          value={`${overallCompleted}/${overallTotal}`}
        />
      </div>

      {/* Section 2: Progression du parcours */}
      <section className="card">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-stone-800">
            Ton parcours
          </h2>
          <span className="text-sm font-medium text-primary">{overallPct}%</span>
        </div>

        <div className="flex flex-col gap-4">
          {chapters.map((chapter) => {
            const completedInChapter =
              chapter.unitIds.filter((id) =>
                pathProgress?.completedUnits.includes(id)
              ).length;
            const totalInChapter = chapter.unitIds.length;
            const isCurrent = chapter.unitIds.includes(
              pathProgress?.currentUnit ?? ""
            );

            return (
              <div key={chapter.number} className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-stone-700">
                      Chapitre {chapter.number}
                    </span>
                    <span className="text-sm text-stone-500">
                      {chapter.title}
                    </span>
                    {isCurrent && (
                      <span className="badge bg-primary/10 text-primary text-xs">
                        En cours
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-stone-400">
                    {completedInChapter}/{totalInChapter}
                  </span>
                </div>
                <ProgressBar
                  value={completedInChapter}
                  max={totalInChapter}
                  color={
                    completedInChapter === totalInChapter
                      ? "bg-success"
                      : isCurrent
                      ? "bg-primary"
                      : "bg-stone-300"
                  }
                />
              </div>
            );
          })}
        </div>

        <Link
          href="/path"
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          <Map className="h-4 w-4" />
          Voir le parcours complet
        </Link>
      </section>

      {/* Section 3: Gamification */}
      <section className="card">
        <h2 className="mb-4 text-lg font-semibold text-stone-800">
          Niveau et trophees
        </h2>

        {/* XP bar */}
        <div className="mb-6">
          <div className="mb-1 flex items-center justify-between text-sm">
            <span className="text-stone-600">
              Niveau {levelInfo.level}
            </span>
            {levelInfo.xpToNextLevel > 0 && (
              <span className="text-stone-400">
                {levelInfo.currentLevelXP} / {xpNeeded} XP
              </span>
            )}
          </div>
          <ProgressBar
            value={levelInfo.currentLevelXP}
            max={xpNeeded}
            color="bg-warning"
          />
        </div>

        {/* Achievements */}
        <h3 className="mb-3 text-sm font-semibold text-stone-700">
          Trophees debloques
        </h3>
        {unlockedAchievements.length > 0 ? (
          <div className="grid gap-3 sm:grid-cols-2">
            {unlockedAchievements.map((a) => (
              <div
                key={a.id}
                className="flex items-center gap-3 rounded-lg bg-warning/5 px-3 py-2"
              >
                <Trophy className="h-5 w-5 text-warning" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-stone-700">
                    {a.name}
                  </p>
                  <p className="text-xs text-stone-400">
                    {a.unlockedAt
                      ? new Date(a.unlockedAt).toLocaleDateString("fr-FR")
                      : ""}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-stone-400">
            Continue a etudier pour debloquer des trophees
          </p>
        )}
      </section>

      {/* Section 4: Flashcards stats */}
      <section className="card">
        <h2 className="mb-3 text-lg font-semibold text-stone-800">
          <Layers className="mr-2 inline h-5 w-5 text-primary" />
          Flashcards
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
          <MiniStat label="Total" value={cardStats.total} />
          <MiniStat
            label="A reviser"
            value={cardStats.due}
            color="text-accent"
          />
          <MiniStat
            label="Apprises"
            value={cardStats.learned}
            color="text-success"
          />
          <MiniStat
            label="Matures"
            value={cardStats.mature}
            color="text-primary"
          />
          <MiniStat
            label="Nouvelles"
            value={cardStats.newCards}
            color="text-warning"
          />
        </div>

        <Link
          href="/flashcards"
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          <RotateCcw className="h-4 w-4" />
          Reviser les flashcards
        </Link>
      </section>

      {/* Section 5: Lecons completees */}
      <section className="card">
        <h2 className="mb-3 text-lg font-semibold text-stone-800">
          <BookOpen className="mr-2 inline h-5 w-5 text-primary" />
          Lecons
        </h2>
        <div className="flex flex-col gap-2">
          {lessons.map((l) => {
            const done = progress?.lessonsCompleted.includes(l.id);
            return (
              <div
                key={l.id}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                  done ? "bg-success/5" : "bg-stone-50"
                }`}
              >
                <span className="text-xl">{l.icon}</span>
                <span className="flex-1 text-sm font-medium text-stone-700">
                  {l.title}
                </span>
                {done ? (
                  <span className="badge bg-success/10 text-success text-xs">
                    Completee
                  </span>
                ) : (
                  <span className="badge bg-stone-100 text-stone-400 text-xs">
                    A faire
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 6: Reset */}
      <section className="card border-danger/30">
        <h2 className="mb-2 text-lg font-semibold text-danger">
          Zone de danger
        </h2>
        {!showReset ? (
          <button
            onClick={() => setShowReset(true)}
            className="inline-flex items-center gap-2 rounded-lg border border-danger/30 px-4 py-2 text-sm font-medium text-danger transition-colors hover:bg-danger/5"
          >
            <Trash2 className="h-4 w-4" />
            Reinitialiser toute la progression
          </button>
        ) : (
          <div className="flex flex-col gap-3 rounded-lg bg-danger/5 p-4">
            <div className="flex items-start gap-2">
              <AlertTriangle className="mt-0.5 h-5 w-5 text-danger" />
              <p className="text-sm text-stone-700">
                Cette action est irreversible. Toutes tes donnees de
                progression, flashcards, parcours et parametres seront
                supprimes.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleReset}
                className="rounded-lg bg-danger px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
              >
                Confirmer la reinitialisation
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
