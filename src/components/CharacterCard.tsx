"use client";

import AudioButton from "./AudioButton";
import PinyinDisplay from "./PinyinDisplay";
import { cn } from "@/lib/cn";
import type { VocabularyItem } from "@/types";
import { useContentLang } from "./ContentLanguage";

interface CharacterCardProps {
  item: VocabularyItem;
  showTranslation?: boolean;
  displayMode?: "romanization" | "reading" | "both";
  className?: string;
}

export default function CharacterCard({
  item,
  showTranslation = true,
  displayMode = "romanization",
  className,
}: CharacterCardProps) {
  const contentLang = useContentLang();
  return (
    <div className={cn("card flex flex-col items-center gap-2 p-4", className)}>
      <div className="flex items-center gap-1">
        <span className="term-display" lang={contentLang}>
          {item.term}
        </span>
        <AudioButton text={item.term} size="md" />
      </div>
      <PinyinDisplay romanization={item.romanization} reading={item.reading} mode={displayMode} />
      {showTranslation && (
        <p className="text-center text-sm text-stone-600">{item.french}</p>
      )}
    </div>
  );
}
