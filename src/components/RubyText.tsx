"use client";

import { cn } from "@/lib/cn";

interface RubyTextProps {
  chinese: string;
  /** Reading to annotate with: pinyin syllables, or zhuyin in "zhuyin" mode. */
  pinyin: string;
  showPinyin: boolean;
  pinyinSize?: "xs" | "sm" | "md";
  charSize?: string;
  /**
   * "pinyin" sets the reading above the character; "zhuyin" sets it vertically
   * to its right (ruby-position: inter-character), the way every Taiwanese
   * textbook does. Browsers without inter-character fall back to "over", which
   * is still a correct annotation.
   */
  mode?: "pinyin" | "zhuyin";
  className?: string;
}

/**
 * Splits a reading into syllables aligned with Chinese characters.
 * Pinyin and zhuyin are both whitespace-separated, one syllable per character.
 */
function alignReadingToChars(chinese: string, reading: string): string[] {
  const syllables = reading
    .replace(/[，。！？、；：""''（）…—]/g, "")
    .split(/[\s]+/)
    .filter(Boolean);

  const chars = chinese.split("");
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
  chinese,
  pinyin,
  showPinyin,
  pinyinSize = "xs",
  charSize,
  mode = "pinyin",
  className,
}: RubyTextProps) {
  const aligned = alignReadingToChars(chinese, pinyin);
  const chars = chinese.split("");

  const rtSize = {
    xs: "text-[10px]",
    sm: "text-xs",
    md: "text-sm",
  }[pinyinSize];

  const isZhuyin = mode === "zhuyin";

  return (
    <span className={cn("inline", className)} lang="zh-Hant-TW">
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
          <ruby key={i} className={cn(charSize, isZhuyin && "ruby-zhuyin")}>
            {char}
            <rt
              className={cn(
                rtSize,
                isZhuyin && "chinese",
                "font-normal text-stone-500 transition-opacity duration-200",
                showPinyin ? "opacity-100" : "opacity-0"
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
