"use client";

import AudioButton from "./AudioButton";
import ReadingDisplay from "./ReadingDisplay";
import { cn } from "@/lib/cn";
import type { VocabularyItem } from "@/types";

interface CharacterCardProps {
  item: VocabularyItem;
  showTranslation?: boolean;
  displayMode?: "romaji" | "kana" | "both";
  className?: string;
}

export default function CharacterCard({
  item,
  showTranslation = true,
  displayMode = "romaji",
  className,
}: CharacterCardProps) {
  return (
    <div className={cn("card flex flex-col items-center gap-2 p-4", className)}>
      <div className="flex items-center gap-1">
        <span className="term-display" lang="ja">{item.term}</span>
        <AudioButton text={item.term} size="md" />
      </div>
      <ReadingDisplay romaji={item.romaji} kana={item.kana} mode={displayMode} />
      {showTranslation && (
        <p className="text-center text-sm text-stone-600">{item.french}</p>
      )}
    </div>
  );
}
