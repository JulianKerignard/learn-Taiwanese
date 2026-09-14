"use client";

import RubyText from "./RubyText";
import { cn } from "@/lib/cn";
import { useContentLang } from "./ContentLanguage";

interface PinyinDisplayProps {
  romanization: string;
  reading?: string;
  /**
   * Base characters for the reading. When given, the reading is composed as ruby
   * to the right of its term instead of trailing the romanization as loose text.
   * Left out on quiz surfaces, where the term is the answer.
   */
  native?: string;
  mode?: "romanization" | "reading" | "both";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function PinyinDisplay({
  romanization,
  reading,
  native,
  mode = "romanization",
  size = "md",
  className,
}: PinyinDisplayProps) {
  const contentLang = useContentLang();
  const sizeClass = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  }[size];

  const rtSize = ({ sm: "xs", md: "xs", lg: "sm" } as const)[size];

  const showReading = mode === "romanization" || mode === "both";
  const showZhuyin = (mode === "reading" || mode === "both") && !!reading;
  const composed = showZhuyin && !!native;

  return (
    <span className={cn("text-stone-500", sizeClass, className)}>
      {showReading && <span className="italic">{romanization}</span>}
      {showReading && showZhuyin && <span className="mx-1.5 text-stone-400">·</span>}
      {showZhuyin &&
        (composed ? (
          <RubyText
            native={native}
            romanization={reading}
            showReading
            mode="reading"
            readingSize={rtSize}
            charSize="chinese"
          />
        ) : (
          <span className="chinese" lang={contentLang}>
            {reading}
          </span>
        ))}
    </span>
  );
}
