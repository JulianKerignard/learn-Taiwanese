"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { RotateCcw, Layers, ChevronRight, Sparkles, BookOpen, GraduationCap } from "lucide-react";
import ProgressBar from "@/components/ProgressBar";
import { cn } from "@/lib/cn";
import { getCards } from "@/lib/storage";
import { getStats } from "@/lib/fsrs";
import {
  getRecommendedTopics,
  groupCardsByUnit,
  groupCardsByChapter,
  groupCardsByHSK,
  type TopicGroup,
  type RevisionTopic,
} from "@/lib/revision";
import type { SM2Card } from "@/types";

type ViewMode = "recommended" | "unit" | "chapter" | "hsk";

export default function RevisionPage() {
  const [cards, setCards] = useState<SM2Card[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [view, setView] = useState<ViewMode>("recommended");

  useEffect(() => {
    setCards(getCards());
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  const stats = getStats(cards);
  const recommended = getRecommendedTopics(cards);

  const groupedData: TopicGroup[] =
    view === "unit" ? groupCardsByUnit(cards) :
    view === "chapter" ? groupCardsByChapter(cards) :
    view === "hsk" ? groupCardsByHSK(cards) :
    [];

  const hasCards = cards.length > 0;

  return (
    <div className="flex flex-col gap-10">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-3xl font-bold text-stone-900">Révision</h1>
        <p className="mt-1 text-stone-500">
          Renforce ta mémoire avec la répétition espacée
        </p>
      </section>

      {/* Stats */}
      {hasCards && (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <StatCard icon={<Layers className="h-5 w-5 text-primary" />} label="Total" value={stats.total} />
          <StatCard icon={<RotateCcw className="h-5 w-5 text-danger" />} label="À réviser" value={stats.due} />
          <StatCard icon={<GraduationCap className="h-5 w-5 text-success" />} label="Maîtrisées" value={stats.mature} />
          <StatCard icon={<Sparkles className="h-5 w-5 text-warning" />} label="Nouvelles" value={stats.newCards} />
        </div>
      )}

      {/* No cards state */}
      {!hasCards && (
        <div className="card text-center py-12">
          <BookOpen className="mx-auto h-16 w-16 text-stone-300 mb-4" />
          <h2 className="text-xl font-bold text-stone-800 mb-2">Aucune carte à réviser</h2>
          <p className="text-stone-500 mb-6">
            Ajoute du vocabulaire depuis les leçons ou le parcours pour commencer tes révisions.
          </p>
          <div className="flex justify-center gap-3">
            <Link href="/path" className="btn-primary gap-1">
              <GraduationCap className="h-4 w-4" />
              Parcours
            </Link>
            <Link href="/lessons" className="btn-secondary gap-1">
              <BookOpen className="h-4 w-4" />
              Leçons
            </Link>
          </div>
        </div>
      )}

      {hasCards && (
        <>
          {/* View toggle */}
          <div className="flex gap-1 rounded-lg border border-stone-200 bg-stone-50 p-1">
            {([
              { key: "recommended" as const, label: "Recommandé" },
              { key: "hsk" as const, label: "Par HSK" },
              { key: "chapter" as const, label: "Par chapitre" },
              { key: "unit" as const, label: "Par unité" },
            ]).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setView(tab.key)}
                className={cn(
                  "flex-1 rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors",
                  view === tab.key
                    ? "bg-white text-stone-800 shadow-sm"
                    : "text-stone-500 hover:text-stone-700"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Recommended view */}
          {view === "recommended" && (
            <div className="flex flex-col gap-6">
              {recommended.length > 0 ? (
                <>
                  <h2 className="text-lg font-semibold text-stone-800">À réviser en priorité</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {recommended.map((topic) => (
                      <TopicCard key={topic.id} topic={topic} />
                    ))}
                  </div>
                </>
              ) : (
                <div className="card text-center py-8">
                  <p className="text-lg font-bold text-success mb-2">Tout est à jour !</p>
                  <p className="text-stone-500">Aucune carte en retard. Reviens demain ou ajoute du nouveau vocabulaire.</p>
                </div>
              )}

              {/* Review all button */}
              {stats.due > 0 && (
                <Link
                  href="/revision/all"
                  className="btn-primary mx-auto gap-2"
                >
                  <RotateCcw className="h-4 w-4" />
                  Réviser tout ({stats.due} carte{stats.due > 1 ? "s" : ""})
                </Link>
              )}
            </div>
          )}

          {/* Grouped views */}
          {view !== "recommended" && (
            <div className="grid gap-4 sm:grid-cols-2">
              {groupedData.map((group) => (
                <TopicCard key={group.id} topic={{ ...group, score: group.dueCount, type: "unit" }} />
              ))}
              {groupedData.length === 0 && (
                <p className="text-stone-400 col-span-2 text-center py-8">Aucune carte dans cette catégorie.</p>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

function TopicCard({ topic }: { topic: RevisionTopic | (TopicGroup & { score: number; type: string }) }) {
  const total = topic.cards.length;
  const mastery = total > 0 ? Math.round((topic.masteredCount / total) * 100) : 0;

  return (
    <Link
      href={`/revision/${topic.id}`}
      className="card group flex flex-col gap-3 transition-all hover:shadow-lg hover:-translate-y-0.5"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-stone-800 group-hover:text-primary transition-colors">
            {topic.label}
          </h3>
          {topic.labelZh && (
            <p className="chinese text-sm text-stone-400">{topic.labelZh}</p>
          )}
        </div>
        <ChevronRight className="h-5 w-5 shrink-0 text-stone-300 group-hover:text-primary transition-colors" />
      </div>

      <div className="flex items-center gap-4 text-xs text-stone-500">
        <span>{total} carte{total > 1 ? "s" : ""}</span>
        {topic.dueCount > 0 && (
          <span className="font-medium text-danger">{topic.dueCount} à réviser</span>
        )}
        {topic.weakCount > 0 && (
          <span className="text-warning">{topic.weakCount} fragile{topic.weakCount > 1 ? "s" : ""}</span>
        )}
      </div>

      <div>
        <div className="flex items-center justify-between text-xs text-stone-400 mb-1">
          <span>Maîtrise</span>
          <span>{mastery}%</span>
        </div>
        <ProgressBar value={topic.masteredCount} max={total} color={mastery >= 80 ? "bg-success" : mastery >= 50 ? "bg-warning" : "bg-stone-300"} />
      </div>
    </Link>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: number }) {
  return (
    <div className="card flex flex-col items-center gap-2 text-center">
      {icon}
      <p className="text-2xl font-bold text-stone-800">{value}</p>
      <p className="text-xs text-stone-500">{label}</p>
    </div>
  );
}
