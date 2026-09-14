"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, Clock, Trophy, Lock } from "lucide-react";
import { cn } from "@/lib/cn";
import { getBestResult } from "@/lib/test-storage";
import { LANGUAGES, langHref, type LanguageSegment } from "@/lib/language";
import type { LevelColor } from "@/types/course";
import type { TestResult } from "@/types/test";

// A mock test carries its sections, and those carry every exercise — 34 kB for
// the Japanese N5 alone. This list needs none of it, so the server page projects
// each test down to the card's fields before handing them over. See ./page.tsx.

/** A published mock test, reduced to what the card shows. */
export interface TestCard {
  id: string;
  title: string;
  titleNative: string;
  description: string;
  totalQuestions: number;
  timeLimitMinutes: number;
  passingScorePercent: number;
  icon: string;
  color: LevelColor;
}

/** A proficiency level of the parcours that has no mock test yet. */
export interface UpcomingTestCard {
  slug: string;
  title: string;
  titleNative: string;
  description: string;
  icon: string;
  color: LevelColor;
}

interface TestsContentProps {
  lang: LanguageSegment;
  tests: TestCard[];
  upcoming: UpcomingTestCard[];
}

export default function TestsContent({ lang, tests, upcoming }: TestsContentProps) {
  const language = LANGUAGES[lang];
  const [bestResults, setBestResults] = useState<Record<string, TestResult | null>>({});

  // Results live in localStorage, which the prerender cannot see: read after mount.
  useEffect(() => {
    const results: Record<string, TestResult | null> = {};
    for (const test of tests) {
      results[test.id] = getBestResult(test.id);
    }
    setBestResults(results);
  }, [tests]);

  return (
    <div className="flex flex-col gap-10">
      <section className="text-center">
        <h1 className="text-display font-bold text-stone-900">Tests {language.levels.code}</h1>
        <p className="mt-1 text-stone-500">
          Évalue ton niveau avec des examens blancs au format officiel
        </p>
      </section>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tests.map((test) => {
          const best = bestResults[test.id];

          return (
            <Link
              key={test.id}
              href={langHref(lang, `/tests/${test.id}`)}
              className="card group relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-4">
                <div className={cn(
                  "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl font-bold text-white shadow-sm",
                  test.color.badge
                )}>
                  {test.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-title font-bold text-stone-800 group-hover:text-primary transition-colors">
                    {test.title}
                  </h2>
                  <p className="chinese text-sm text-stone-500" lang={language.contentLang}>
                    {test.titleNative}
                  </p>
                  <p className="mt-1 text-sm text-stone-500">{test.description}</p>
                </div>
                <ChevronRight className="h-5 w-5 shrink-0 text-stone-300 group-hover:text-primary transition-colors mt-1" />
              </div>

              <div className="mt-4 flex items-center gap-4 text-xs text-stone-500">
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {test.timeLimitMinutes} min
                </span>
                <span>{test.totalQuestions} questions</span>
                <span>{test.passingScorePercent}% pour réussir</span>
              </div>

              {best && (
                <div className="mt-3 flex items-center gap-2 rounded-lg bg-stone-50 px-3 py-2">
                  <Trophy className={cn("h-4 w-4", best.passed ? "text-success" : "text-warning")} />
                  <span className="text-sm font-medium text-stone-700">
                    Meilleur score : {best.percentage}%
                  </span>
                  {best.passed && (
                    <span className="badge bg-success/10 text-success text-xs ml-auto">Réussi</span>
                  )}
                </div>
              )}
            </Link>
          );
        })}

        {upcoming.map((level) => (
          <div key={level.slug} className="card relative overflow-hidden opacity-60">
            <div className="flex items-start gap-4">
              <div className={cn(
                "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl font-bold text-white shadow-sm",
                level.color.badge
              )}>
                {level.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h2 className="text-title font-bold text-stone-500">{level.title}</h2>
                  <Lock className="h-4 w-4 text-stone-400" aria-hidden />
                </div>
                <p className="chinese text-sm text-stone-500" lang={language.contentLang}>
                  {level.titleNative}
                </p>
                <p className="mt-1 text-sm text-stone-500">{level.description}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-end text-xs">
              <span className="badge bg-stone-100 text-stone-500">Bientôt disponible</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
