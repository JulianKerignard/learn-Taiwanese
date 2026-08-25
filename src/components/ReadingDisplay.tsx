"use client";

import { cn } from "@/lib/cn";

interface PinyinDisplayProps {
  romaji: string;
  kana?: string;
  mode?: "romaji" | "kana" | "both";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function ReadingDisplay({
  romaji,
  kana,
  mode = "romaji",
  size = "md",
  className,
}: PinyinDisplayProps) {
  const sizeClass = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  }[size];

  return (
    <span className={cn("text-stone-500", sizeClass, className)}>
      {(mode === "romaji" || mode === "both") && (
        <span className="italic">{romaji}</span>
      )}
      {mode === "both" && kana && <span className="mx-1 text-stone-400" aria-hidden="true">|</span>}
      {(mode === "kana" || mode === "both") && kana && (
        <span className="japanese" lang="ja">{kana}</span>
      )}
    </span>
  );
}
