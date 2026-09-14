"use client";

import { useState, useMemo, useCallback } from "react";
import { Check, X, ArrowRight, Ear, Layers, BookOpen } from "lucide-react";
import AudioButton from "@/components/AudioButton";
import ProgressBar from "@/components/ProgressBar";
import { cn } from "@/lib/cn";
import { shuffleArray } from "@/lib/utils";
import { splitMora, pitchContour, pitchPattern, toSegments, PITCH_LABELS } from "@/lib/japanese";
import type { PitchPattern } from "@/lib/japanese";
import type { Segment } from "@/types";
// Type-only: `import type` is erased at compile time, so the corpus module
// itself never reaches the browser. The values arrive as props.
import type { AccentGroup, AccentWord, MinimalPair } from "@/data/ja/pitch-accent";

const PATTERN_ORDER: PitchPattern[] = ["heiban", "atamadaka", "nakadaka", "odaka"];

/**
 * One hue per accent pattern. Written here rather than as theme tokens because
 * the palette is local to this module, and because it must stay distinct from
 * --color-success / --color-danger: a pattern colour is never a verdict.
 * Each value clears 4.5:1 on white, and the contour line and its badge read from
 * the same entry so they cannot disagree.
 */
const PATTERN_COLOR: Record<PitchPattern, string> = {
  heiban: "#0f766e",
  atamadaka: "#b45309",
  nakadaka: "#6d28d9",
  odaka: "#0369a1",
};

/** Same hue at ~10% for the badge ground. */
const patternTint = (pattern: PitchPattern) => `${PATTERN_COLOR[pattern]}1a`;

/**
 * Japanese text, in the Japanese face.
 *
 * The shared stylesheet has a `.chinese` utility and no Japanese counterpart, so
 * the face is applied here from the variable next/font declares on <html>. Move
 * this to a `.japanese` class in globals.css once a second Japanese view needs it.
 */
const JAPANESE_FONT = "var(--font-noto-jp), var(--font-sans)";

function Jp({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span lang="ja" className={className} style={{ fontFamily: JAPANESE_FONT }}>
      {children}
    </span>
  );
}

/**
 * Furigana over a word, from its explicit segments.
 *
 * RubyText aligns one reading syllable per character, which is a Mandarin rule:
 * 今日 reads きょう as a single unit and cannot be split per character at all. So
 * the segmentation comes from the data, via toSegments.
 */
function SegmentedRuby({
  word,
  termSize,
  readingSize = "text-[10px]",
}: {
  word: Pick<AccentWord, "term" | "reading" | "segments">;
  termSize: string;
  readingSize?: string;
}) {
  const segments: Segment[] = toSegments(word);

  return (
    <span lang="ja" className={cn("inline", termSize)} style={{ fontFamily: JAPANESE_FONT }}>
      {segments.map((segment, i) =>
        segment.reading ? (
          <ruby key={i}>
            {segment.text}
            <rt className={cn(readingSize, "font-normal text-stone-500")}>{segment.reading}</rt>
          </ruby>
        ) : (
          <span key={i}>{segment.text}</span>
        )
      )}
    </span>
  );
}

/**
 * Draws the pitch as a step line over the mora, plus the particle slot — which is
 * the only place a heiban and an odaka word differ.
 */
function ContourGraph({
  reading,
  downstep,
  showParticle = true,
}: {
  reading: string;
  downstep: number;
  showParticle?: boolean;
}) {
  const mora = splitMora(reading);
  const levels = pitchContour(reading, downstep);
  const pattern = pitchPattern(downstep, mora.length);
  const slots = showParticle ? levels : levels.slice(0, -1);

  const stepX = 40;
  const width = slots.length * stepX;
  const highY = 14;
  const lowY = 38;

  const points = slots.map((high, i) => ({ x: i * stepX + stepX / 2, y: high ? highY : lowY }));
  // Pitch steps between mora, it does not glide: draw the horizontal run first,
  // then the vertical jump.
  const path = points
    .map((point, i) =>
      i === 0 ? `M ${point.x},${point.y}` : `L ${point.x},${points[i - 1].y} L ${point.x},${point.y}`
    )
    .join(" ");

  return (
    <div className="inline-flex flex-col items-start">
      <svg
        width={width}
        height={52}
        viewBox={`0 0 ${width} 52`}
        role="img"
        aria-label={`Contour ${PITCH_LABELS[pattern].fr}`}
      >
        <line x1="0" y1={highY} x2={width} y2={highY} strokeWidth="1" strokeDasharray="2 3" className="stroke-stone-200" />
        <line x1="0" y1={lowY} x2={width} y2={lowY} strokeWidth="1" strokeDasharray="2 3" className="stroke-stone-200" />
        <path d={path} fill="none" stroke={PATTERN_COLOR[pattern]} strokeWidth="2.5" strokeLinejoin="round" />
        {points.map((point, i) => (
          <circle
            key={i}
            cx={point.x}
            cy={point.y}
            r="4"
            fill={i >= mora.length ? "white" : PATTERN_COLOR[pattern]}
            stroke={PATTERN_COLOR[pattern]}
            strokeWidth="2"
          />
        ))}
      </svg>
      <div className="flex" style={{ width }}>
        {slots.map((_, i) => (
          <span
            key={i}
            lang="ja"
            className={cn(
              "text-center text-sm",
              i >= mora.length ? "text-stone-400 italic" : "text-stone-700"
            )}
            style={{ width: stepX, fontFamily: JAPANESE_FONT }}
          >
            {i >= mora.length ? "が" : mora[i]}
          </span>
        ))}
      </div>
    </div>
  );
}

function PatternBadge({ pattern }: { pattern: PitchPattern }) {
  const label = PITCH_LABELS[pattern];
  return (
    <span
      className="badge gap-1.5"
      style={{ color: PATTERN_COLOR[pattern], backgroundColor: patternTint(pattern) }}
    >
      <Jp>{label.ja}</Jp>
      <span className="text-stone-500">·</span>
      {label.fr}
    </span>
  );
}

// ── Listening drill ───────────────────────────────────────────────────

const DRILL_LENGTH = 10;

function AccentDrill({ words }: { words: AccentWord[] }) {
  const [queue, setQueue] = useState(() => shuffleArray(words).slice(0, DRILL_LENGTH));
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<PitchPattern | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const current = queue[index];
  const answer = current ? pitchPattern(current.downstep, splitMora(current.reading).length) : null;

  const handlePick = useCallback(
    (pattern: PitchPattern) => {
      if (picked || !answer) return;
      setPicked(pattern);
      if (pattern === answer) setScore((s) => s + 1);
    },
    [picked, answer]
  );

  const handleNext = () => {
    if (index + 1 >= queue.length) {
      setDone(true);
      return;
    }
    setIndex((i) => i + 1);
    setPicked(null);
  };

  const restart = () => {
    setQueue(shuffleArray(words).slice(0, DRILL_LENGTH));
    setIndex(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  };

  if (done) {
    const pct = Math.round((score / queue.length) * 100);
    return (
      <div className="card flex flex-col items-center gap-4 text-center">
        <h2 className="text-title font-bold text-stone-800">
          {score}/{queue.length} — {pct}%
        </h2>
        <ProgressBar value={score} max={queue.length} color={pct >= 70 ? "bg-success" : "bg-warning"} />
        <p className="max-w-md text-sm text-stone-500">
          {pct >= 70
            ? "Votre oreille distingue déjà les schémas. Passez aux paires minimales : c'est là que l'accent change le sens."
            : "Concentrez-vous sur le moment de la chute plutôt que sur la mélodie globale. Réécoutez chaque mot deux fois."}
        </p>
        <button onClick={restart} className="btn-primary">
          Recommencer
        </button>
      </div>
    );
  }

  if (!current || !answer) return null;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between text-sm text-stone-500">
        <span>
          Mot {index + 1}/{queue.length}
        </span>
        <span className="font-medium text-stone-700">
          {score} correct{score > 1 ? "s" : ""}
        </span>
      </div>
      <ProgressBar value={index + 1} max={queue.length} />

      <div className="card flex flex-col items-center gap-5">
        <p className="text-xs font-medium tracking-wide text-stone-500 uppercase">
          Écoutez et identifiez le schéma
        </p>
        <AudioButton text={current.term} size="lg" />

        {picked && (
          <div className="flex flex-col items-center gap-3">
            <SegmentedRuby word={current} termSize="text-4xl" readingSize="text-xs" />
            <ContourGraph reading={current.reading} downstep={current.downstep} />
            <p className="text-sm text-stone-500">
              {current.romanization} — {current.french}
            </p>
          </div>
        )}

        <div className="grid w-full gap-2 sm:grid-cols-2">
          {PATTERN_ORDER.map((pattern) => {
            const isAnswer = pattern === answer;
            const isPicked = pattern === picked;
            let style = "border-stone-200 bg-white hover:border-primary hover:bg-primary/5";
            if (picked) {
              if (isAnswer) style = "border-success bg-success/10 text-success";
              else if (isPicked) style = "border-danger bg-danger/10 text-danger";
              else style = "border-stone-100 bg-stone-50 text-stone-500";
            }
            return (
              <button
                key={pattern}
                onClick={() => handlePick(pattern)}
                disabled={picked !== null}
                className={cn(
                  "flex items-center gap-3 rounded-lg border-2 px-4 py-3 text-left text-sm font-medium transition-all",
                  style
                )}
              >
                {picked && isAnswer && <Check className="h-4 w-4 shrink-0" />}
                {picked && isPicked && !isAnswer && <X className="h-4 w-4 shrink-0" />}
                <span className="flex-1">
                  <Jp>{PITCH_LABELS[pattern].ja}</Jp>
                  <span className="ml-2 text-stone-500">{PITCH_LABELS[pattern].fr}</span>
                </span>
              </button>
            );
          })}
        </div>

        <div role="status" aria-live="polite" className="sr-only">
          {picked
            ? picked === answer
              ? "Correct"
              : `Incorrect, la réponse était ${PITCH_LABELS[answer].fr}`
            : ""}
        </div>

        {picked && (
          <button onClick={handleNext} className="btn-primary gap-1 self-end text-sm">
            {index + 1 >= queue.length ? "Terminer" : "Suivant"}
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}

// ── Module ────────────────────────────────────────────────────────────

type Tab = "patterns" | "pairs" | "drill";

/**
 * The Japanese phonology module: one downstep per word, four patterns, and the
 * minimal pairs where the accent is the only thing carrying the meaning.
 *
 * The corpus arrives as props from the server page — a client component may not
 * import src/data/<lang>/..., which would ship both editions to the browser.
 */
export default function PitchAccentContent({
  accentGroups,
  minimalPairs,
}: {
  accentGroups: AccentGroup[];
  minimalPairs: MinimalPair[];
}) {
  const [tab, setTab] = useState<Tab>("patterns");

  const drillWords = useMemo(() => accentGroups.flatMap((g) => g.words), [accentGroups]);

  const tabs: { key: Tab; label: string; icon: React.ReactNode }[] = [
    { key: "patterns", label: "Les 4 schémas", icon: <Layers className="h-4 w-4" /> },
    { key: "pairs", label: "Paires minimales", icon: <BookOpen className="h-4 w-4" /> },
    { key: "drill", label: "Exercice d'écoute", icon: <Ear className="h-4 w-4" /> },
  ];

  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="text-display font-bold text-stone-900">L&rsquo;accent de hauteur</h1>
        <p className="mt-1 text-stone-500">
          <Jp>高低アクセント</Jp>
        </p>
        <p className="mt-3 max-w-2xl text-stone-600">
          Le japonais n&rsquo;a pas de tons syllabiques, syllabe par syllabe. Un mot porte au plus{" "}
          <strong>une seule chute de hauteur</strong>, et c&rsquo;est sa position qui définit tout le
          contour. Quatre positions possibles, donc quatre schémas — et une conséquence
          contre-intuitive : deux d&rsquo;entre eux sont indistinguables tant qu&rsquo;on
          n&rsquo;ajoute pas une particule.
        </p>
      </header>

      <div className="flex gap-1 rounded-lg border border-stone-200 bg-stone-50 p-1">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={cn(
              "flex flex-1 items-center justify-center gap-1 rounded-md px-2 py-1.5 text-xs font-medium transition-colors sm:gap-2 sm:px-4 sm:py-2 sm:text-sm",
              tab === t.key ? "bg-white text-stone-800 shadow-sm" : "text-stone-500 hover:text-stone-700"
            )}
          >
            {t.icon}
            {t.label}
          </button>
        ))}
      </div>

      {tab === "patterns" && (
        <div className="flex flex-col gap-6">
          {accentGroups.map((group) => (
            <section key={group.id} className="card flex flex-col gap-4">
              <div className="flex flex-wrap items-baseline gap-3">
                <h2 className="text-title font-bold text-stone-800">{PITCH_LABELS[group.id].fr}</h2>
                <PatternBadge pattern={group.id} />
              </div>
              <p className="max-w-2xl text-sm leading-relaxed text-stone-600">{group.description}</p>
              <ul className="flex flex-col divide-y divide-stone-100">
                {group.words.map((word) => (
                  <li key={word.term} className="flex flex-wrap items-center gap-x-5 gap-y-2 py-3">
                    <ContourGraph reading={word.reading} downstep={word.downstep} />
                    <div className="flex min-w-40 flex-1 items-center gap-2">
                      <SegmentedRuby word={word} termSize="text-2xl" />
                      <AudioButton text={word.term} size="sm" />
                    </div>
                    <div className="text-sm">
                      <span className="text-stone-700">{word.french}</span>
                      <span className="ml-2 text-stone-500 italic">{word.romanization}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}

      {tab === "pairs" && (
        <div className="flex flex-col gap-6">
          <p className="max-w-2xl text-stone-600">
            Ces mots s&rsquo;écrivent pareil en kana et ne diffèrent que par leur accent. C&rsquo;est
            le seul endroit où se tromper de hauteur change réellement ce qu&rsquo;on dit.
          </p>
          {minimalPairs.map((pair) => (
            <section key={pair.reading} className="card flex flex-col gap-4">
              <div className="flex items-baseline gap-3">
                <Jp className="text-2xl font-medium text-stone-800">{pair.reading}</Jp>
                <span className="text-sm text-stone-500 italic">{pair.romanization}</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {pair.senses.map((sense) => {
                  const pattern = pitchPattern(sense.downstep, splitMora(pair.reading).length);
                  return (
                    <div
                      key={sense.term}
                      className="flex flex-col gap-2 rounded-lg border border-stone-100 p-3"
                    >
                      <div className="flex items-center gap-2">
                        <Jp className="text-2xl text-stone-800">{sense.term}</Jp>
                        <AudioButton text={sense.term} size="sm" />
                      </div>
                      <ContourGraph reading={pair.reading} downstep={sense.downstep} />
                      <PatternBadge pattern={pattern} />
                      <p className="text-sm text-stone-600">{sense.french}</p>
                    </div>
                  );
                })}
              </div>
              <p className="rounded-lg bg-accent/5 px-3 py-2 text-sm text-stone-600 italic">
                {pair.note}
              </p>
            </section>
          ))}
        </div>
      )}

      {tab === "drill" && <AccentDrill words={drillWords} />}
    </div>
  );
}
