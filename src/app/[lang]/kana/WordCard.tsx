"use client";

import { useState } from "react";
import AudioButton from "@/components/AudioButton";
import { useContentLang } from "@/components/ContentLanguage";
import { cn } from "@/lib/cn";
import type { KanaWord } from "@/types/kana";

/** A word to read aloud first; the reading and meaning show on demand. */
export default function WordCard({ word }: { word: KanaWord }) {
  const lang = useContentLang();
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="flex h-full items-stretch gap-1 rounded-xl border border-stone-200 bg-white shadow-sm">
      <button
        type="button"
        onClick={() => setRevealed((r) => !r)}
        aria-expanded={revealed}
        className="flex min-w-0 flex-1 flex-col items-start gap-1 rounded-xl px-4 py-3 text-left transition-colors hover:bg-stone-50"
      >
        <span lang={lang} className="chinese text-3xl leading-tight break-all text-stone-900">
          {word.term}
        </span>
        <span className={cn("text-sm", revealed ? "text-stone-700" : "text-primary")}>
          {revealed ? (
            <>
              <span className="font-medium">{word.romaji}</span>
              <span className="text-stone-500"> · {word.french}</span>
            </>
          ) : (
            "Afficher"
          )}
        </span>
      </button>
      <div className="flex items-center pr-3">
        <AudioButton text={word.term} />
      </div>
    </div>
  );
}
