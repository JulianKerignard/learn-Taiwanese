"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ReviewSession from "@/components/ReviewSession";
import {
  filterCardsByTopic,
  topicLabel,
  type LessonRef,
  type RevisionContext,
} from "@/lib/revision";
import { LANGUAGES, langHref, type LanguageSegment } from "@/lib/language";
import type { SM2Card } from "@/types";

export default function RevisionSession({
  lang,
  topicId,
  lessons,
}: {
  lang: LanguageSegment;
  topicId: string;
  lessons: LessonRef[];
}) {
  const ctx: RevisionContext = { code: LANGUAGES[lang].code, lessons };
  const label = topicLabel(lang, topicId);
  const filter =
    topicId === "all" ? undefined : (cards: SM2Card[]) => filterCardsByTopic(ctx, cards, topicId);

  return (
    <div className="flex flex-col gap-6">
      <Link
        href={langHref(lang, "/revision")}
        className="flex items-center gap-1 text-sm text-stone-400 hover:text-primary transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour à la révision
      </Link>

      <div className="text-center mb-2">
        <p className="text-sm text-stone-500">Révision — {label}</p>
      </div>

      <ReviewSession lang={lang} cardFilter={filter} />
    </div>
  );
}
