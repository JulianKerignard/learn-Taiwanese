"use client";

import { useState, useMemo, useCallback } from "react";
import { Check, X, ArrowRight, Ear, Layers, BookOpen } from "lucide-react";
import AudioButton from "@/components/AudioButton";
import RubyText from "@/components/RubyText";
import ProgressBar from "@/components/ProgressBar";
import { cn } from "@/lib/cn";
import { shuffleArray } from "@/lib/utils";
import { splitMora, pitchContour, pitchPattern, PITCH_LABELS } from "@/lib/japanese";
import type { PitchPattern } from "@/lib/japanese";
import { accentGroups, minimalPairs } from "@/data/pitch-accent";
import type { AccentWord } from "@/data/pitch-accent";

const PATTERN_ORDER: PitchPattern[] = ["heiban", "atamadaka", "nakadaka", "odaka"];

// One token per pattern, defined in globals.css. The contour line and its label
// read from the same source so they cannot disagree.
const PATTERN_CLASS: Record<PitchPattern, { text: string; bg: string; stroke: string }> = {
  heiban: { text: "text-heiban", bg: "bg-heiban/10", stroke: "var(--color-heiban)" },
  atamadaka: { text: "text-atamadaka", bg: "bg-atamadaka/10", stroke: "var(--color-atamadaka)" },
  nakadaka: { text: "text-nakadaka", bg: "bg-nakadaka/10", stroke: "var(--color-nakadaka)" },
  odaka: { text: "text-odaka", bg: "bg-odaka/10", stroke: "var(--color-odaka)" },
};

type Tab = "patterns" | "pairs" | "drill";

/**
 * Draws the pitch as a step line over the mora, plus the particle slot — which is
 * the only place a heiban and an odaka word differ.
 */
function ContourGraph({
  kana,
  downstep,
  showParticle = true,
}: {
  kana: string;
  downstep: number;
  showParticle?: boolean;
}) {
  const mora = splitMora(kana);
  const levels = pitchContour(kana, downstep);
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
        <path d={path} fill="none" stroke={PATTERN_CLASS[pattern].stroke} strokeWidth="2.5" strokeLinejoin="round" />
        {points.map((point, i) => (
          <circle
            key={i}
            cx={point.x}
            cy={point.y}
            r="4"
            fill={i >= mora.length ? "white" : PATTERN_CLASS[pattern].stroke}
            stroke={PATTERN_CLASS[pattern].stroke}
            strokeWidth="2"
          />
        ))}
      </svg>
      <div className="flex" style={{ width }}>
        {slots.map((_, i) => (
          <span
            key={i}
            className={cn(
              "japanese text-center text-sm",
              i >= mora.length ? "text-stone-300 italic" : "text-stone-700"
            )}
            style={{ width: stepX }}
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
  const style = PATTERN_CLASS[pattern];
  return (
    <span className={cn("badge gap-1.5", style.bg, style.text)}>
      <span className="japanese">{label.ja}</span>
      <span className="text-stone-400">·</span>
      {label.fr}
    </span>
  );
}

// ── Listening drill ───────────────────────────────────────────────────

const allDrillWords: AccentWord[] = accentGroups.flatMap((g) => g.words);

function AccentDrill() {
  const [queue, setQueue] = useState(() => shuffleArray(allDrillWords).slice(0, 10));
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<PitchPattern | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const current = queue[index];
  const answer = current ? pitchPattern(current.downstep, splitMora(current.kana).length) : null;

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
    setQueue(shuffleArray(allDrillWords).slice(0, 10));
    setIndex(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  };

  if (done) {
    const pct = Math.round((score / queue.length) * 100);
    return (
      <div className="card flex flex-col items-center gap-4 text-center">
        <h2 className="text-xl font-semibold text-stone-800">
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
        <p className="text-xs font-medium tracking-wide text-stone-400 uppercase">
          Écoutez et identifiez le schéma
        </p>
        <AudioButton text={current.term} size="lg" />

        {picked && (
          <div className="flex flex-col items-center gap-3">
            <RubyText
              term={current.term}
              kana={current.kana}
              segments={current.segments}
              showReading
              readingSize="sm"
              termSize="text-4xl"
              className="japanese"
            />
            <ContourGraph kana={current.kana} downstep={current.downstep} />
            <p className="text-sm text-stone-500">
              {current.romaji} — {current.french}
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
              else style = "border-stone-100 bg-stone-50 text-stone-400";
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
                  <span className="japanese">{PITCH_LABELS[pattern].ja}</span>
                  <span className="ml-2 text-stone-400">{PITCH_LABELS[pattern].fr}</span>
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

// ── Page ──────────────────────────────────────────────────────────────

export default function AccentPage() {
  const [tab, setTab] = useState<Tab>("patterns");

  const tabs: { key: Tab; label: string; icon: React.ReactNode }[] = useMemo(
    () => [
      { key: "patterns", label: "Les 4 schémas", icon: <Layers className="h-4 w-4" /> },
      { key: "pairs", label: "Paires minimales", icon: <BookOpen className="h-4 w-4" /> },
      { key: "drill", label: "Exercice d'écoute", icon: <Ear className="h-4 w-4" /> },
    ],
    []
  );

  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="text-3xl font-bold text-stone-900">L&rsquo;accent de hauteur</h1>
        <p className="japanese mt-1 text-stone-400" lang="ja">
          高低アクセント
        </p>
        <p className="mt-3 max-w-2xl text-stone-600">
          Le japonais n&rsquo;a pas de tons syllabiques comme le japonais. Un mot porte au plus{" "}
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
                <h2 className="text-xl font-semibold text-stone-800">{PITCH_LABELS[group.id].fr}</h2>
                <PatternBadge pattern={group.id} />
              </div>
              <p className="max-w-2xl text-sm leading-relaxed text-stone-600">{group.description}</p>
              <ul className="flex flex-col divide-y divide-stone-100">
                {group.words.map((word) => (
                  <li key={word.term} className="flex flex-wrap items-center gap-x-5 gap-y-2 py-3">
                    <ContourGraph kana={word.kana} downstep={word.downstep} />
                    <div className="flex min-w-40 flex-1 items-center gap-2">
                      <RubyText
                        term={word.term}
                        kana={word.kana}
                        segments={word.segments}
                        showReading
                        readingSize="xs"
                        termSize="text-2xl"
                        className="japanese"
                      />
                      <AudioButton text={word.term} size="sm" />
                    </div>
                    <div className="text-sm">
                      <span className="text-stone-700">{word.french}</span>
                      <span className="ml-2 text-stone-400 italic">{word.romaji}</span>
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
            <section key={pair.kana} className="card flex flex-col gap-4">
              <div className="flex items-baseline gap-3">
                <h2 className="japanese text-2xl font-medium text-stone-800" lang="ja">
                  {pair.kana}
                </h2>
                <span className="text-sm text-stone-400 italic">{pair.romaji}</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {pair.senses.map((sense) => {
                  const pattern = pitchPattern(sense.downstep, splitMora(pair.kana).length);
                  return (
                    <div
                      key={sense.term}
                      className="flex flex-col gap-2 rounded-lg border border-stone-100 p-3"
                    >
                      <div className="flex items-center gap-2">
                        <span className="japanese text-2xl text-stone-800" lang="ja">
                          {sense.term}
                        </span>
                        <AudioButton text={sense.term} size="sm" />
                      </div>
                      <ContourGraph kana={pair.kana} downstep={sense.downstep} />
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

      {tab === "drill" && <AccentDrill />}
    </div>
  );
}
