"use client";

import { useState, useEffect } from "react";
import { Volume2 } from "lucide-react";
import { speak, isSupported } from "@/lib/tts";
import { cn } from "@/lib/cn";

interface AudioButtonProps {
  text: string;
  rate?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function AudioButton({ text, rate = 0.85, size = "md", className }: AudioButtonProps) {
  const [playing, setPlaying] = useState(false);
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    setSupported(isSupported());
  }, []);

  if (!supported) return null;

  const sizeClass = {
    sm: "h-6 w-6 p-1",
    md: "h-8 w-8 p-1.5",
    lg: "h-10 w-10 p-2",
  }[size];

  const iconSize = { sm: 14, md: 18, lg: 22 }[size];

  async function handleClick() {
    if (playing) return;
    setPlaying(true);
    await speak(text, rate);
    setPlaying(false);
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        "inline-flex items-center justify-center rounded-full text-stone-500 transition-colors hover:bg-primary/10 hover:text-primary",
        playing && "animate-pulse text-primary",
        sizeClass,
        className
      )}
      title="Écouter la prononciation"
    >
      {playing ? <Volume2 size={iconSize} /> : <Volume2 size={iconSize} />}
    </button>
  );
}
