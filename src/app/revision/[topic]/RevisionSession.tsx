"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ReviewSession from "@/components/ReviewSession";
import { filterCardsByTopic } from "@/lib/revision";

const TOPIC_LABELS: Record<string, string> = {
  all: "Toutes les cartes",
  recommended: "Recommandé",
};

function getTopicLabel(topicId: string): string {
  if (TOPIC_LABELS[topicId]) return TOPIC_LABELS[topicId];
  if (topicId.startsWith("unit-")) {
    const num = topicId.replace("unit-", "");
    return `Unité ${parseInt(num)}`;
  }
  if (topicId.startsWith("chapter-")) return `Chapitre ${topicId.replace("chapter-", "")}`;
  if (topicId.startsWith("hsk-")) return `HSK ${topicId.replace("hsk-", "")}`;
  return topicId;
}

export default function RevisionSession({ topicId }: { topicId: string }) {
  const label = getTopicLabel(topicId);
  const filter = topicId === "all" ? undefined : (cards: Parameters<typeof filterCardsByTopic>[0]) => filterCardsByTopic(cards, topicId);

  return (
    <div className="flex flex-col gap-6">
      <Link
        href="/revision"
        className="flex items-center gap-1 text-sm text-stone-400 hover:text-primary transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour à la révision
      </Link>

      <div className="text-center mb-2">
        <p className="text-sm text-stone-500">Révision — {label}</p>
      </div>

      <ReviewSession cardFilter={filter} topicLabel={label} />
    </div>
  );
}
