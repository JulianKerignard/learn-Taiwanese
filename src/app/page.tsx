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
import { getProgress, getCards, defaultProgress } from "@/lib/storage";
import { getStats } from "@/lib/fsrs";
import { lessons } from "@/data/zh/lessons";
import { getPathProgress, EMPTY_PATH_PROGRESS } from "@/lib/progress";
import { getUnitMetaById } from "@/data/zh/course/meta";
import { getCurrentLevel } from "@/lib/progress";
import type { UserProgress } from "@/types";
import type { PathProgress } from "@/types/course";

export default function HomePage() {
  // Two kinds of content live on this page. The hero, the stat labels and the
  // lesson cards are known at build time and stay in the prerendered HTML.
  // Anything that describes the reader — counters, streak, "commence ton
  // parcours", the resume link — waits for `hydrated`: an empty localStorage at
  // build time is an absence of data, not a user with zero progress.
  const [progress, setProgress] = useState<UserProgress>(defaultProgress);
  const [cardStats, setCardStats] = useState({ total: 0, due: 0, learned: 0, mature: 0, newCards: 0 });
  const [pathProgress, setPathProgress] = useState<PathProgress>(EMPTY_PATH_PROGRESS);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setProgress(getProgress());
    setCardStats(getStats(getCards()));
    setPathProgress(getPathProgress());
    setHydrated(true);
  }, []);

  const displayedLessons = lessons.slice(0, 5);

  return (
    <div className="flex flex-col gap-10">
      {/* Hero */}
      <section className="text-center">
        <h1 className="text-display font-bold text-stone-900">
          Bienvenue, <span className="chinese text-primary">歡迎!</span>
        </h1>
        <p className="mt-2 text-lg text-stone-500">
          Apprends le mandarin pour ta vie à Taiwan
        </p>
      </section>

      {/* Parcours */}
      <PathCTA pathProgress={pathProgress} hydrated={hydrated} />

      {/* Stats rapides */}
      <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <StatCard
          icon={<GraduationCap className="h-5 w-5 text-primary" />}
          label="Caractères appris"
          value={progress.termsLearned}
          pending={!hydrated}
        />
        <StatCard
          icon={<Flame className="h-5 w-5 text-warning" />}
          label="Streak actuel"
          value={`${progress.currentStreak} jour${progress.currentStreak > 1 ? "s" : ""}`}
          pending={!hydrated}
        />
        <StatCard
          icon={<RotateCcw className="h-5 w-5 text-accent" />}
          label="À réviser aujourd'hui"
          value={cardStats.due}
          pending={!hydrated}
        />
        <StatCard
          icon={<BookOpen className="h-5 w-5 text-success" />}
          label="Leçons complétées"
          value={progress.lessonsCompleted.length}
          pending={!hydrated}
        />
      </section>

      {/* Continuer */}
      {hydrated && cardStats.due > 0 && (
        <section>
          <h2 className="text-title font-bold mb-4 text-stone-800">Continuer</h2>
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
            <Link href="/revision/all" className="btn-primary gap-1 shrink-0">
              Réviser <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      )}

      {/* Leçons */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-title font-bold text-stone-800">Leçons</h2>
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
                    <h3 className="font-bold text-stone-800 group-hover:text-primary transition-colors">
                      {lesson.title}
                    </h3>
                    <p className="chinese text-sm text-stone-500">{lesson.titleNative}</p>
                    <p className="mt-1 text-sm text-stone-500 line-clamp-2">{lesson.description}</p>
                    {hydrated && completed && (
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

function PathCTA({ pathProgress, hydrated }: { pathProgress: PathProgress; hydrated: boolean }) {
  const currentUnit = getUnitMetaById(pathProgress.currentUnit);
  const hasStarted = pathProgress.completedUnits.length > 0;
  const currentLevel = getCurrentLevel(pathProgress);
  const resumeHref = hasStarted && currentUnit ? `/path/${currentUnit.id}` : "/path";

  return (
    <section>
      <div className="card flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <Map className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="font-medium text-stone-800">
              {hydrated && !hasStarted ? "Commence ton parcours" : "Ton parcours"}
            </p>
            {hydrated ? (
              <p className="text-sm text-stone-500">
                {hasStarted && currentUnit
                  ? `HSK ${currentLevel?.level ?? ""} — Unité ${currentUnit.number} : ${currentUnit.title}`
                  : hasStarted
                    ? `${pathProgress.completedUnits.length} unités complétées`
                    : "Apprends le chinois pas à pas"}
              </p>
            ) : (
              // Same 20px line box as the sentence it stands in for, so the card
              // does not change height when the real one arrives.
              <span className="mt-0.5 block h-5 w-52 animate-pulse rounded bg-stone-100" aria-hidden />
            )}
          </div>
        </div>
        {/* The destination is the reader's current unit, which only the browser
            knows. Until then the link goes to the parcours index — true for
            everyone — and the fixed width keeps the button from resizing. */}
        <Link
          href={hydrated ? resumeHref : "/path"}
          className="btn-primary min-w-[12rem] gap-1 shrink-0"
        >
          {hydrated ? (hasStarted ? "Continuer" : "Commencer") : "Ouvrir le parcours"}
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
  pending,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  pending?: boolean;
}) {
  return (
    <div className="card flex flex-col items-center gap-2 text-center">
      {icon}
      {pending ? (
        <span className="block h-8 w-12 animate-pulse rounded bg-stone-100" aria-hidden />
      ) : (
        <p className="text-2xl font-bold text-stone-800">{value}</p>
      )}
      <p className="text-xs text-stone-500">{label}</p>
    </div>
  );
}
