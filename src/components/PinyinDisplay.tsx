"use client";

import RubyText from "./RubyText";
import { cn } from "@/lib/cn";

interface PinyinDisplayProps {
  pinyin: string;
  zhuyin?: string;
  /**
   * Base characters for the zhuyin. When given, the zhuyin is composed as ruby
   * to the right of its character instead of trailing the pinyin as loose text.
   * Left out on quiz surfaces, where the character is the answer.
   */
  chinese?: string;
  mode?: "pinyin" | "zhuyin" | "both";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function PinyinDisplay({
  pinyin,
  zhuyin,
  chinese,
  mode = "pinyin",
  size = "md",
  className,
}: PinyinDisplayProps) {
  const sizeClass = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  }[size];

  const rtSize = ({ sm: "xs", md: "xs", lg: "sm" } as const)[size];

  const showPinyin = mode === "pinyin" || mode === "both";
  const showZhuyin = (mode === "zhuyin" || mode === "both") && !!zhuyin;
  const composed = showZhuyin && !!chinese;

  return (
    <span className={cn("text-stone-500", sizeClass, className)}>
      {showPinyin && <span className="italic">{pinyin}</span>}
      {showPinyin && showZhuyin && <span className="mx-1.5 text-stone-400">·</span>}
      {showZhuyin &&
        (composed ? (
          <RubyText
            chinese={chinese}
            pinyin={zhuyin}
            showPinyin
            mode="zhuyin"
            pinyinSize={rtSize}
            charSize="chinese"
          />
        ) : (
          <span className="chinese" lang="zh-Hant-TW">
            {zhuyin}
          </span>
        ))}
    </span>
  );
}
