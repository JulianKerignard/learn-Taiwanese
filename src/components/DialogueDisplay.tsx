"use client";

import { useState } from "react";
import AudioButton from "./AudioButton";
import type { Dialogue } from "@/types/course";
import { cn } from "@/lib/cn";

interface DialogueDisplayProps {
  dialogue: Dialogue;
  className?: string;
}

export default function DialogueDisplay({ dialogue, className }: DialogueDisplayProps) {
  const speakers = Array.from(new Set(dialogue.lines.map((l) => l.speaker)));
  const speakerA = speakers[0] ?? "";
  const speakerB = speakers[1] ?? "";

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <p className="text-sm italic text-stone-400">{dialogue.context}</p>
      <div className="flex flex-col gap-3">
        {dialogue.lines.map((line, i) => {
          const isRight = line.speaker === speakerB;
          return (
            <DialogueBubble
              key={i}
              speaker={line.speaker}
              chinese={line.chinese}
              pinyin={line.pinyin}
              french={line.french}
              note={line.note}
              isRight={isRight}
            />
          );
        })}
      </div>
    </div>
  );
}

function DialogueBubble({
  speaker,
  chinese,
  pinyin,
  french,
  note,
  isRight,
}: {
  speaker: string;
  chinese: string;
  pinyin: string;
  french: string;
  note?: string;
  isRight: boolean;
}) {
  const [showTranslation, setShowTranslation] = useState(false);

  return (
    <div className={cn("flex flex-col max-w-[80%]", isRight ? "self-end items-end" : "self-start items-start")}>
      <span className="mb-1 text-xs font-medium text-stone-400">{speaker}</span>
      <div
        className={cn(
          "rounded-2xl px-4 py-3",
          isRight
            ? "rounded-br-md bg-primary/10 text-stone-800"
            : "rounded-bl-md bg-stone-100 text-stone-800"
        )}
      >
        <div className="flex items-center gap-2">
          <span className="chinese text-lg">{chinese}</span>
          <AudioButton text={chinese} size="sm" />
        </div>
        <p className="text-xs italic text-stone-400 mt-0.5">{pinyin}</p>
      </div>
      <button
        onClick={() => setShowTranslation(!showTranslation)}
        className="mt-1 text-xs text-stone-400 hover:text-stone-600 transition-colors"
      >
        {showTranslation ? "Masquer la traduction" : "Voir la traduction"}
      </button>
      {showTranslation && (
        <div className="mt-1">
          <p className="text-sm text-stone-600">{french}</p>
          {note && (
            <p className="mt-0.5 text-xs text-stone-400 italic">
              📌 {note}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
