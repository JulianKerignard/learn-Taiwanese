"use client";

import AudioButton from "./AudioButton";
import PinyinDisplay from "./PinyinDisplay";
import { cn } from "@/lib/cn";
import type { VocabularyItem } from "@/types";

interface CharacterCardProps {
  item: VocabularyItem;
  showTranslation?: boolean;
  displayMode?: "pinyin" | "zhuyin" | "both";
  className?: string;
}

export default function CharacterCard({
  item,
  showTranslation = true,
  displayMode = "pinyin",
  className,
}: CharacterCardProps) {
  return (
    <div className={cn("card flex flex-col items-center gap-2 p-4", className)}>
      <div className="flex items-center gap-1">
        <span className="character-display">{item.character}</span>
        <AudioButton text={item.character} size="md" />
      </div>
      <PinyinDisplay pinyin={item.pinyin} zhuyin={item.zhuyin} mode={displayMode} />
      {showTranslation && (
        <p className="text-center text-sm text-stone-600">{item.french}</p>
      )}
    </div>
  );
}
