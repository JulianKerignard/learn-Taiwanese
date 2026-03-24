"use client";

import { useState, useEffect } from "react";
import {
  BookOpen,
  Flame,
  GraduationCap,
  RotateCcw,
  ChevronRight,
  Layers,
  Map,
} from "lucide-react";
import Link from "next/link";
import { getProgress, getCards } from "@/lib/storage";
import { getStats } from "@/lib/fsrs";
import { lessons } from "@/data/lessons";
import { getPathProgress } from "@/lib/progress";
import { getUnitById } from "@/data/course";
import type { UserProgress } from "@/types";
import type { PathProgress } from "@/types/course";

export default function HomePage() {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [cardStats, setCardStats] = useState({ total: 0, due: 0, learned: 0, mature: 0, newCards: 0 });
  const [pathProgress, setPathProgress] = useState<PathProgress | null>(null);

  useEffect(() => {
    const p = getProgress();
    setProgress(p);
    const cards = getCards();
    setCardStats(getStats(cards));
    setPathProgress(getPathProgress());
  }, []);

  if (!progress) return null;

  const displayedLessons = lessons.slice(0, 5);

  return (
    <div className="flex flex-col gap-10">
      {/* Hero */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-stone-900">
          Bienvenue, <span className="chinese text-primary">歡迎!</span>
        </h1>
        <p className="mt-2 text-lg text-stone-500">
          Apprends le mandarin pour ta vie à Taiwan
        </p>
      </section>

      {/* Parcours */}
      {pathProgress && <PathCTA pathProgress={pathProgress} />}

      {/* Stats rapides */}
      <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <StatCard
          icon={<GraduationCap className="h-5 w-5 text-primary" />}
          label="Caractères appris"
          value={progress.charactersLearned}
        />
        <StatCard
          icon={<Flame className="h-5 w-5 text-warning" />}
          label="Streak actuel"
          value={`${progress.currentStreak} jour${progress.currentStreak > 1 ? "s" : ""}`}
        />
        <StatCard
          icon={<RotateCcw className="h-5 w-5 text-accent" />}
          label="À réviser aujourd'hui"
          value={cardStats.due}
        />
        <StatCard
          icon={<BookOpen className="h-5 w-5 text-success" />}
          label="Leçons complétées"
          value={progress.lessonsCompleted.length}
        />
      </section>

      {/* Continuer */}
      {cardStats.due > 0 && (
        <section>
          <h2 className="mb-4 text-xl font-semibold text-stone-800">Continuer</h2>
          <div className="card flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Layers className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-stone-800">Session de révision</p>
                <p className="text-sm text-stone-500">
                  {cardStats.due} carte{cardStats.due > 1 ? "s" : ""} à réviser
                </p>
              </div>
            </div>
            <Link href="/flashcards" className="btn-primary gap-1 shrink-0">
              Réviser <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      )}

      {/* Leçons */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-stone-800">Leçons</h2>
          <Link href="/lessons" className="text-sm font-medium text-primary hover:underline">
            Voir tout
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {displayedLessons.map((lesson) => {
            const completed = progress.lessonsCompleted.includes(lesson.id);
            return (
              <Link key={lesson.id} href={`/lessons/${lesson.slug}`} className="card group cursor-pointer">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{lesson.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-stone-800 group-hover:text-primary transition-colors">
                      {lesson.title}
                    </h3>
                    <p className="chinese text-sm text-stone-400">{lesson.titleZh}</p>
                    <p className="mt-1 text-sm text-stone-500 line-clamp-2">{lesson.description}</p>
                    {completed && (
                      <span className="badge mt-2 bg-success/10 text-success">Complétée</span>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function PathCTA({ pathProgress }: { pathProgress: PathProgress }) {
  const currentUnit = getUnitById(pathProgress.currentUnit);
  const hasStarted = pathProgress.completedUnits.length > 0;

  return (
    <section>
      <div className="card flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <Map className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="font-medium text-stone-800">
              {hasStarted ? "Ton parcours" : "Commence ton parcours"}
            </p>
            <p className="text-sm text-stone-500">
              {hasStarted && currentUnit
                ? `Prochaine etape : Unite ${currentUnit.number} — ${currentUnit.title}`
                : hasStarted
                  ? `${pathProgress.completedUnits.length} unites completees`
                  : "Apprends le chinois pas a pas"}
            </p>
          </div>
        </div>
        <Link
          href={hasStarted && currentUnit ? `/path/${currentUnit.id}` : "/path"}
          className="btn-primary gap-1 shrink-0"
        >
          {hasStarted ? "Continuer" : "Commencer"}
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
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
