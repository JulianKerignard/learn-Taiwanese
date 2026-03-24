"use client";

import { useState, useEffect } from "react";
import { BookOpen } from "lucide-react";
import { getProgress } from "@/lib/storage";
import { lessons } from "@/data/lessons";
import type { UserProgress } from "@/types";

const categoryLabels: Record<string, { label: string; color: string }> = {
  basics: { label: "Bases", color: "bg-primary/10 text-primary" },
  survival: { label: "Survie", color: "bg-warning/10 text-warning" },
  daily: { label: "Quotidien", color: "bg-accent/10 text-accent" },
  social: { label: "Social", color: "bg-success/10 text-success" },
  culture: { label: "Culture", color: "bg-purple-100 text-purple-700" },
};

export default function LessonsPage() {
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold text-stone-900">Leçons</h1>
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
            <a
              key={lesson.id}
              href={`/lessons/${lesson.slug}`}
              className="card group cursor-pointer flex flex-col gap-3"
            >
              <div className="flex items-start justify-between">
                <span className="text-4xl">{lesson.icon}</span>
                {completed && (
                  <span className="badge bg-success/10 text-success">Complétée</span>
                )}
              </div>

              <div>
                <h2 className="text-lg font-semibold text-stone-800 group-hover:text-primary transition-colors">
                  {lesson.title}
                </h2>
                <p className="chinese text-sm text-stone-400">{lesson.titleZh}</p>
              </div>

              <p className="text-sm text-stone-500 line-clamp-2">{lesson.description}</p>

              <div className="mt-auto flex items-center justify-between">
                <span className={`badge ${cat.color}`}>{cat.label}</span>
                <span className="flex items-center gap-1 text-xs text-stone-400">
                  <BookOpen className="h-3.5 w-3.5" />
                  {lesson.vocabulary.length} mots
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
