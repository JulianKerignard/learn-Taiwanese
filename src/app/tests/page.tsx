"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, Clock, Trophy, Lock } from "lucide-react";
import { cn } from "@/lib/cn";
import { mockTests } from "@/data/tests";
import { getBestResult } from "@/lib/test-storage";
import type { TestResult } from "@/types/test";

const LEVEL_COLORS = [
  { bg: "from-emerald-500 to-teal-600", light: "border-emerald-200", text: "text-emerald-700" },
  { bg: "from-sky-500 to-blue-600", light: "border-sky-200", text: "text-sky-700" },
  { bg: "from-violet-500 to-purple-600", light: "border-violet-200", text: "text-violet-700" },
];

const HSK3_PLACEHOLDER = {
  id: "hsk-3",
  title: "HSK 3 — Test blanc",
  titleZh: "HSK三級模擬考試",
  level: 3,
  description: "Teste ta compréhension de textes et ta capacité à t'exprimer",
  totalQuestions: 80,
  timeLimitMinutes: 90,
  icon: "📖",
};

export default function TestsPage() {
  const [bestResults, setBestResults] = useState<Record<string, TestResult | null>>({});

  useEffect(() => {
    const results: Record<string, TestResult | null> = {};
    for (const test of mockTests) {
      results[test.id] = getBestResult(test.id);
    }
    setBestResults(results);
  }, []);

  return (
    <div className="flex flex-col gap-10">
      <section className="text-center">
        <h1 className="text-3xl font-bold text-stone-900">Tests HSK</h1>
        <p className="mt-1 text-stone-500">
          Évalue ton niveau avec des examens blancs au format officiel
        </p>
      </section>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Active tests */}
        {mockTests.map((test, i) => {
          const best = bestResults[test.id];
          const colors = LEVEL_COLORS[i] || LEVEL_COLORS[0];

          return (
            <Link
              key={test.id}
              href={`/tests/${test.id}`}
              className="card group relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-4">
                <div className={cn(
                  "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-2xl font-black text-white shadow-sm",
                  colors.bg
                )}>
                  {test.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg font-bold text-stone-800 group-hover:text-primary transition-colors">
                    {test.title}
                  </h2>
                  <p className="chinese text-sm text-stone-400">{test.titleZh}</p>
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
                <span>{Math.round(test.passingScore * 100)}% pour réussir</span>
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

        {/* HSK 3 placeholder */}
        <div className="card relative overflow-hidden opacity-60 cursor-not-allowed">
          <div className="flex items-start gap-4">
            <div className={cn(
              "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-2xl font-black text-white shadow-sm",
              LEVEL_COLORS[2].bg
            )}>
              {HSK3_PLACEHOLDER.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-stone-500">
                  {HSK3_PLACEHOLDER.title}
                </h2>
                <Lock className="h-4 w-4 text-stone-400" />
              </div>
              <p className="chinese text-sm text-stone-300">{HSK3_PLACEHOLDER.titleZh}</p>
              <p className="mt-1 text-sm text-stone-400">{HSK3_PLACEHOLDER.description}</p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-4 text-xs text-stone-400">
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {HSK3_PLACEHOLDER.timeLimitMinutes} min
            </span>
            <span>{HSK3_PLACEHOLDER.totalQuestions} questions</span>
            <span className="badge bg-stone-100 text-stone-400 ml-auto">Bientôt disponible</span>
          </div>
        </div>
      </div>
    </div>
  );
}
