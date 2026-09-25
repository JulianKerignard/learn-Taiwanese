"use client";

import Link from "next/link";
import { BookOpen } from "lucide-react";
import { getProgress } from "@/lib/storage";
import { LANGUAGES, langHref, type LanguageSegment } from "@/lib/language";
import type { UserProgress } from "@/types";
import { useClientState } from "@/lib/use-client-state";

/**
 * Everything a lesson card shows, and nothing more.
 *
 * The lesson bodies — sections, phrases, quizzes — stay on the server: this
 * list would otherwise carry the whole 296 kB corpus of the edition into the
 * page just to print ten titles.
 */
export interface LessonSummary {
  id: string;
  slug: string;
  title: string;
  titleNative: string;
  description: string;
  category: string;
  icon: string;
  termCount: number;
}

const categoryLabels: Record<string, { label: string; color: string }> = {
  basics: { label: "Bases", color: "bg-primary/10 text-primary" },
  survival: { label: "Survie", color: "bg-warning/10 text-warning" },
  daily: { label: "Quotidien", color: "bg-accent/10 text-accent" },
  social: { label: "Social", color: "bg-success/10 text-success" },
  culture: { label: "Culture", color: "bg-purple-100 text-purple-700" },
};

export default function LessonsContent({
  lang,
  lessons,
}: {
  lang: LanguageSegment;
  lessons: LessonSummary[];
}) {
  // localStorage after hydration only: the cards themselves come prerendered.
  const [progress] = useClientState<UserProgress | null>(getProgress, null);

  const language = LANGUAGES[lang];

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-display font-bold text-stone-900">Leçons</h1>
        <p className="mt-1 text-stone-500">
          Progresse à ton rythme à travers les leçons thématiques.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {lessons.map((lesson) => {
          const completed = progress?.lessonsCompleted.includes(lesson.id) ?? false;
          const cat = categoryLabels[lesson.category] ?? {
            label: lesson.category,
            color: "bg-stone-100 text-stone-600",
          };

          return (
            <Link
              key={lesson.id}
              href={langHref(lang, `/lessons/${lesson.slug}`)}
              className="card group cursor-pointer flex flex-col gap-3"
            >
              <div className="flex items-start justify-between">
                <span className="text-4xl">{lesson.icon}</span>
                {completed && (
                  <span className="badge bg-success/10 text-success">Complétée</span>
                )}
              </div>

              <div>
                <h2 className="text-title font-bold text-stone-800 group-hover:text-primary transition-colors">
                  {lesson.title}
                </h2>
                <p className="chinese text-sm text-stone-500" lang={language.contentLang}>
                  {lesson.titleNative}
                </p>
              </div>

              <p className="text-sm text-stone-500 line-clamp-2">{lesson.description}</p>

              <div className="mt-auto flex items-center justify-between">
                <span className={`badge ${cat.color}`}>{cat.label}</span>
                <span className="flex items-center gap-1 text-xs text-stone-400">
                  <BookOpen className="h-3.5 w-3.5" />
                  {lesson.termCount} mots
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
