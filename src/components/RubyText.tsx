"use client";

import { cn } from "@/lib/cn";
import { toSegments } from "@/lib/japanese";
import type { Segment } from "@/types";

type ReadingSize = "xs" | "sm" | "md";

interface RubyTextProps {
  /** The word as written. */
  term: string;
  /** Full reading in kana, used when no explicit segments are given. */
  kana: string;
  segments?: Segment[];
  showReading: boolean;
  readingSize?: ReadingSize;
  termSize?: string;
  className?: string;
}

const RT_SIZES: Record<ReadingSize, string> = {
  xs: "text-[10px]",
  sm: "text-xs",
  md: "text-sm",
};

/**
 * Renders furigana as one <ruby> per segment.
 *
 * There is no alignment to compute: the data says which run of text carries which
 * reading. That is the only correct model for Japanese — 食べる splits as 食(た)
 * + べる, and 今日(きょう) does not split at all.
 *
 * When the reading is hidden it is left out of the DOM rather than made
 * transparent, so a screen reader never reads the answer aloud.
 */
export default function RubyText({
  term,
  kana,
  segments,
  showReading,
  readingSize = "xs",
  termSize,
  className,
}: RubyTextProps) {
  const resolved = toSegments({ term, kana, segments });
  const rtSize = RT_SIZES[readingSize];

  return (
    <span className={cn("inline", className)} lang="ja">
      {resolved.map((segment, i) =>
        segment.reading && showReading ? (
          <ruby key={i} className={termSize}>
            {segment.text}
            <rt className={cn(rtSize, "font-normal text-stone-500")}>{segment.reading}</rt>
          </ruby>
        ) : (
          <span key={i} className={termSize}>
            {segment.text}
          </span>
        )
      )}
    </span>
  );
}
