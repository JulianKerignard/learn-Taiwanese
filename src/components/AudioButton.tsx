"use client";

import { useState } from "react";
import { Volume2 } from "lucide-react";
import { speak, isSupported } from "@/lib/tts";
import { cn } from "@/lib/cn";
import { useClientState } from "@/lib/use-client-state";

interface AudioButtonProps {
  text: string;
  rate?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function AudioButton({ text, rate = 0.85, size = "md", className }: AudioButtonProps) {
  const [playing, setPlaying] = useState(false);
  const [supported] = useClientState(isSupported, true);

  if (!supported) return null;

  const sizeClass = {
    sm: "h-6 w-6 p-1",
    md: "h-8 w-8 p-1.5",
    lg: "h-10 w-10 p-2",
  }[size];

  const iconSize = { sm: 14, md: 18, lg: 22 }[size];

  async function handleClick(e: React.MouseEvent) {
    // The button often sits on something clickable itself — a flashcard that
    // flips, a dictionary row that expands: playing audio must not trigger it.
    e.stopPropagation();
    if (playing) return;
    setPlaying(true);
    try {
      await speak(text, rate);
    } finally {
      // A failed fetch or an interrupted utterance would otherwise leave the
      // button pulsing and dead until the page reloads.
      setPlaying(false);
    }
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center rounded-full text-stone-500 transition-colors hover:bg-primary/10 hover:text-primary",
        // Invisible hit area: at 24px the small size is hard to hit with a thumb.
        "after:absolute after:-inset-2 after:content-['']",
        playing && "animate-pulse text-primary",
        sizeClass,
        className
      )}
      title="Écouter la prononciation"
      aria-label="Écouter la prononciation"
    >
      <Volume2 size={iconSize} />
    </button>
  );
}
