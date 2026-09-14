"use client";

import { cn } from "@/lib/cn";

interface RubyTextProps {
  chinese: string;
  pinyin: string;
  showPinyin: boolean;
  pinyinSize?: "xs" | "sm" | "md";
  charSize?: string;
  className?: string;
}

/**
 * Splits pinyin string into syllables aligned with Chinese characters.
 * Handles multi-char words by matching syllable count to character count.
 */
function alignPinyinToChars(chinese: string, pinyin: string): string[] {
  const syllables = pinyin
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
  className,
}: RubyTextProps) {
  const aligned = alignPinyinToChars(chinese, pinyin);
  const chars = chinese.split("");

  const rtSize = {
    xs: "text-[10px]",
    sm: "text-xs",
    md: "text-sm",
  }[pinyinSize];

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
          <ruby key={i} className={cn("ruby-align-center", charSize)}>
            {char}
            <rt
              className={cn(
                rtSize,
                "font-normal text-stone-400 transition-opacity duration-200",
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
