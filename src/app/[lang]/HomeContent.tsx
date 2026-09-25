"use client";

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
import { useClientState } from "@/lib/use-client-state";
import { getStats } from "@/lib/fsrs";
import { getUnitMetaById } from "@/data/meta";
import {
  getPathProgress,
  getCurrentLevel,
  EMPTY_PATH_PROGRESS,
} from "@/lib/progress";
import {
  LANGUAGES,
  langHref,
  levelName,
  type LanguageSegment,
} from "@/lib/language";
import type { UserProgress } from "@/types";
import type { PathProgress } from "@/types/course";

/**
 * What a home-page lesson card shows — resolved by the server page.
 *
 * The lesson modules are megabytes each; a card needs six strings. Importing
 * @/data/<lang>/lessons here would put both corpora in the browser bundle.
 */
export interface LessonCard {
  id: string;
  slug: string;
  title: string;
  titleNative: string;
  description: string;
  icon: string;
}

const EMPTY_HOME: {
  progress: UserProgress;
  cardStats: ReturnType<typeof getStats>;
  pathProgress: PathProgress;
} = {
  progress: defaultProgress,
  cardStats: { total: 0, due: 0, learned: 0, mature: 0, newCards: 0 },
  pathProgress: EMPTY_PATH_PROGRESS,
};

export default function HomeContent({
  lang,
  lessons,
}: {
  lang: LanguageSegment;
  lessons: LessonCard[];
}) {
  // Two kinds of content live on this page. The hero, the stat labels and the
  // lesson cards are known at build time and stay in the prerendered HTML.
  // Anything that describes the reader — counters, streak, "commence ton
  // parcours", the resume link — waits for `hydrated`: an empty localStorage at
  // build time is an absence of data, not a user with zero progress.
  const [{ progress, cardStats, pathProgress }, , hydrated] = useClientState(
    () => ({
      progress: getProgress(),
      cardStats: getStats(getCards()),
      pathProgress: getPathProgress(),
    }),
    EMPTY_HOME
  );

  const language = LANGUAGES[lang];
  const href = (path: string) => langHref(lang, path);

  return (
    <div className="flex flex-col gap-10">
      {/* Hero. The greeting used to be a hardcoded 歡迎; the edition now names
          itself from the registry so /japon does not greet in Mandarin. */}
      <section className="text-center">
        <h1 className="text-display font-bold text-stone-900">Bienvenue</h1>
        <p className="chinese mt-1 text-2xl text-primary" lang={language.contentLang}>
          {language.nameNative}
        </p>
        <p className="mt-2 text-lg text-stone-500">{language.tagline}</p>
      </section>

      {/* Parcours */}
      <PathCTA lang={lang} pathProgress={pathProgress} hydrated={hydrated} />

      {/* Stats rapides */}
      <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <StatCard
          icon={<GraduationCap className="h-5 w-5 text-primary" />}
          label={`${capitalize(language.copy.terms)} appris`}
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
            <Link href={href("/revision/all")} className="btn-primary gap-1 shrink-0">
              Réviser <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      )}

      {/* Leçons */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-title font-bold text-stone-800">Leçons</h2>
          <Link href={href("/lessons")} className="text-sm font-medium text-primary hover:underline">
            Voir tout
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lessons.map((lesson) => {
            const completed = progress.lessonsCompleted.includes(lesson.id);
            return (
              <Link
                key={lesson.id}
                href={href(`/lessons/${lesson.slug}`)}
                className="card group cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{lesson.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-stone-800 group-hover:text-primary transition-colors">
                      {lesson.title}
                    </h3>
                    <p className="chinese text-sm text-stone-500" lang={language.contentLang}>
                      {lesson.titleNative}
                    </p>
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

function PathCTA({
  lang,
  pathProgress,
  hydrated,
}: {
  lang: LanguageSegment;
  pathProgress: PathProgress;
  hydrated: boolean;
}) {
  const language = LANGUAGES[lang];
  const currentUnit = getUnitMetaById(language.code, pathProgress.currentUnit);
  const hasStarted = pathProgress.completedUnits.length > 0;
  const currentLevel = getCurrentLevel(language.code, pathProgress);
  const pathHref = langHref(lang, "/path");
  const resumeHref = hasStarted && currentUnit ? langHref(lang, `/path/${currentUnit.id}`) : pathHref;
  // "HSK 3" going up, "JLPT N3" going down — the scale comes from the registry.
  const levelPrefix = currentLevel ? `${levelName(language, currentLevel.level)} — ` : "";

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
                  ? `${levelPrefix}Unité ${currentUnit.number} : ${currentUnit.title}`
                  : hasStarted
                    ? `${pathProgress.completedUnits.length} unités complétées`
                    : "Progresse pas à pas, unité après unité"}
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
          href={hydrated ? resumeHref : pathHref}
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

/** The registry stores domain nouns lowercase ("caractères", "mots"). */
function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
