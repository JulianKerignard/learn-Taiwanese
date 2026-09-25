"use client";

import AudioButton from "@/components/AudioButton";
import { useContentLang } from "@/components/ContentLanguage";
import { cn } from "@/lib/cn";
import type { Segment } from "@/types";
import type { Kanji, KanjiMastery } from "@/types/kanji";
import type { KanjiWord } from "./kanji-ui";

/** A term with its furigana, one <ruby> per annotated segment. */
export function Furigana({
  segments,
  className,
  rtClassName,
  highlight,
}: {
  segments: Segment[];
  className?: string;
  rtClassName?: string;
  /** A kanji to set in the primary colour wherever it appears. */
  highlight?: string;
}) {
  const lang = useContentLang();
  const paint = (text: string) =>
    highlight && text.includes(highlight)
      ? text.split(highlight).flatMap((part, i) =>
          i === 0
            ? [part]
            : [
                <span key={i} className="text-primary">
                  {highlight}
                </span>,
                part,
              ]
        )
      : text;
  return (
    <span lang={lang} className={cn("chinese", className)}>
      {segments.map((segment, i) =>
        segment.reading ? (
          <ruby key={i}>
            {paint(segment.text)}
            <rt className={cn("text-[0.45em] font-normal text-stone-500", rtClassName)}>{segment.reading}</rt>
          </ruby>
        ) : (
          <span key={i}>{segment.text}</span>
        )
      )}
    </span>
  );
}

/** An example word: furigana, rōmaji, meaning and audio. */
export function ExampleWord({ word, highlight }: { word: KanjiWord; highlight?: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-stone-200 bg-white px-4 py-3 shadow-sm">
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <Furigana segments={word.segments} highlight={highlight} className="text-2xl leading-[1.9] break-all text-stone-900" />
        <span className="text-sm text-stone-600">
          <span className="font-medium">{word.romanization}</span>
          <span className="text-stone-500"> · {word.french}</span>
        </span>
      </div>
      <AudioButton text={word.term} />
    </div>
  );
}

/** On'yomi and kun'yomi, with the okurigana of a kun'yomi set apart: た.べる → た·べる. */
export function Readings({ k, compact = false, className }: { k: Kanji; compact?: boolean; className?: string }) {
  const lang = useContentLang();
  const rows: { label: string; hint: string; values: string[] }[] = [
    { label: "On", hint: "lecture sino-japonaise", values: k.onyomi },
    { label: "Kun", hint: "lecture japonaise", values: k.kunyomi },
  ];
  return (
    <dl
      className={cn(
        "grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-x-3 gap-y-1.5 text-left",
        compact ? "text-sm" : "text-base",
        className
      )}
    >
      {rows.map((row) => (
        <div key={row.label} className="contents">
          <dt className="text-xs font-medium tracking-wide text-stone-500 uppercase" title={row.hint}>
            {row.label}
            <span className="sr-only"> ({row.hint})</span>
          </dt>
          <dd lang={lang} className="chinese flex flex-wrap gap-x-3 gap-y-0.5 text-stone-800">
            {row.values.length > 0 ? (
              row.values.map((value) => {
                const [stem, okurigana] = value.split(".");
                return (
                  <span key={value}>
                    {stem}
                    {okurigana && <span className="text-stone-400">·{okurigana}</span>}
                  </span>
                );
              })
            ) : (
              <span className="text-sm text-stone-400">—</span>
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function masteryLine(m: KanjiMastery | undefined): string {
  return m ? `${m.correct} / ${m.seen} bonnes réponses · niveau ${m.box} sur 5` : "Pas encore travaillé";
}
