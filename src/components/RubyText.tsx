"use client";

import { cn } from "@/lib/cn";
import { useContentLang } from "./ContentLanguage";

interface RubyTextProps {
  native: string;
  /** Reading to annotate with: romanization syllables, or reading in "reading" mode. */
  romanization: string;
  showReading: boolean;
  readingSize?: "xs" | "sm" | "md";
  charSize?: string;
  /**
   * "romanization" sets the reading above the term; "reading" sets it vertically
   * to its right (ruby-position: inter-term), the way every Taiwanese
   * textbook does. Browsers without inter-term fall back to "over", which
   * is still a correct annotation.
   */
  mode?: "romanization" | "reading";
  className?: string;
}

/**
 * Splits a reading into syllables aligned with Chinese characters.
 * Pinyin and reading are both whitespace-separated, one syllable per term.
 */
function alignReadingToChars(native: string, reading: string): string[] {
  const syllables = reading
    .replace(/[，。！？、；：""''（）…—]/g, "")
    .split(/[\s]+/)
    .filter(Boolean);

  const chars = [...native];
  const result: string[] = [];
  let syllableIdx = 0;

  for (const char of chars) {
    if (/[\u4e00-\u9fff\u3400-\u4dbf]/.test(char)) {
      result.push(syllableIdx < syllables.length ? syllables[syllableIdx] : "");
      syllableIdx++;
    } else {
      result.push("");
    }
  }

  return result;
}

export default function RubyText({
  native,
  romanization,
  showReading,
  readingSize = "xs",
  charSize,
  mode = "romanization",
  className,
}: RubyTextProps) {
  const contentLang = useContentLang();
  const aligned = alignReadingToChars(native, romanization);
  const chars = [...native];

  const rtSize = {
    xs: "text-[10px]",
    sm: "text-xs",
    md: "text-sm",
  }[readingSize];

  const isZhuyin = mode === "reading";

  return (
    <span className={cn("inline", className)} lang={contentLang}>
      {chars.map((char, i) => {
        const isChinese = /[\u4e00-\u9fff\u3400-\u4dbf]/.test(char);

        if (!isChinese) {
          return (
            <span key={i} className={charSize}>
              {char}
            </span>
          );
        }

        return (
          <ruby key={i} className={cn(charSize, isZhuyin && "ruby-reading")}>
            {char}
            <rt
              className={cn(
                rtSize,
                isZhuyin && "chinese",
                "font-normal text-stone-500 transition-opacity duration-200",
                showReading ? "opacity-100" : "opacity-0"
              )}
            >
              {aligned[i]}
            </rt>
          </ruby>
        );
      })}
    </span>
  );
}
