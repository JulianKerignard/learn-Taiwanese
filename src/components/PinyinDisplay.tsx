"use client";

import { cn } from "@/lib/cn";

interface PinyinDisplayProps {
  pinyin: string;
  zhuyin?: string;
  mode?: "pinyin" | "zhuyin" | "both";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function PinyinDisplay({
  pinyin,
  zhuyin,
  mode = "pinyin",
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
      {(mode === "pinyin" || mode === "both") && (
        <span className="italic">{pinyin}</span>
      )}
      {mode === "both" && zhuyin && <span className="mx-1 text-stone-300">|</span>}
      {(mode === "zhuyin" || mode === "both") && zhuyin && (
        <span className="chinese">{zhuyin}</span>
      )}
    </span>
  );
}
