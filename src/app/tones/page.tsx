"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  Volume2,
  ChevronLeft,
  CheckCircle,
  XCircle,
  Info,
  RotateCcw,
  Trophy,
  Ear,
  Eye,
  Zap,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { storageGet, storageSet } from "@/lib/storage";
import { speak, initVoices } from "@/lib/tts";
import { tonePairs, sandhiRules, type TonePair, type TonePairWord } from "@/data/tone-pairs";
import { shuffleArray } from "@/lib/utils";
import ProgressBar from "@/components/ProgressBar";
import AudioButton from "@/components/AudioButton";

type ExerciseMode = "listen" | "reverse";
type PageView = "overview" | "grid" | "exercise" | "sandhi";

interface PairProgress {
  correct: number;
  total: number;
}

// ─── Tone helpers ───

function toneColor(tone: number): string {
  const colors: Record<number, string> = {
    1: "text-red-600", 2: "text-amber-600", 3: "text-green-600", 4: "text-blue-600", 0: "text-stone-500",
  };
  return colors[tone] ?? "text-stone-400";
}

function toneBgColor(tone: number): string {
  const colors: Record<number, string> = {
    1: "bg-red-50 border-red-200 hover:bg-red-100",
    2: "bg-amber-50 border-amber-200 hover:bg-amber-100",
    3: "bg-green-50 border-green-200 hover:bg-green-100",
    4: "bg-blue-50 border-blue-200 hover:bg-blue-100",
    0: "bg-stone-50 border-stone-200 hover:bg-stone-100",
  };
  return colors[tone] ?? "bg-stone-50 border-stone-200";
}

function toneName(tone: number): string {
  const names: Record<number, string> = {
    1: "1er ton (haut plat)", 2: "2e ton (montant)", 3: "3e ton (descendant-montant)",
    4: "4e ton (descendant)", 0: "Ton neutre (léger)",
  };
  return names[tone] ?? "";
}

function toneShortName(tone: number): string {
  const names: Record<number, string> = { 1: "T1", 2: "T2", 3: "T3", 4: "T4", 0: "T0" };
  return names[tone] ?? "";
}

// ─── Tone visual SVG ───

function ToneVisual({ tone, size = 40 }: { tone: number; size?: number }) {
  const mid = size / 2;
  const pad = 4;
  const w = size - pad * 2;

  function path(): string {
    switch (tone) {
      case 1: return `M${pad},${pad + 6} L${pad + w},${pad + 6}`;
      case 2: return `M${pad},${mid + 8} L${pad + w},${pad}`;
      case 3: return `M${pad},${pad + 4} Q${mid},${size - pad} ${pad + w},${pad + 4}`;
      case 4: return `M${pad},${pad} L${pad + w},${mid + 8}`;
      case 0: return `M${mid - 4},${mid} A4,4 0 1,1 ${mid + 4},${mid} A4,4 0 1,1 ${mid - 4},${mid}`;
      default: return "";
    }
  }

  const colors: Record<number, string> = {
    1: "#ef4444", 2: "#f59e0b", 3: "#22c55e", 4: "#3b82f6", 0: "#78716c",
  };

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <path d={path()} stroke={colors[tone] ?? "#a8a29e"} strokeWidth={3} fill="none" strokeLinecap="round" />
    </svg>
  );
}

// ─── Overview: tone introduction cards ───

function ToneOverview({ onStart }: { onStart: () => void }) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <p className="text-stone-500 max-w-lg mx-auto">
          Le mandarin a <strong>4 tons</strong> + un ton neutre. Chaque ton change le sens du mot.
          Le même son « ma » peut signifier mère, chanvre, cheval ou gronder selon le ton.
        </p>
      </div>

      {/* Tone cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map((tone) => {
          const examples: Record<number, { char: string; pinyin: string; meaning: string }> = {
            1: { char: "媽", pinyin: "mā", meaning: "mère" },
            2: { char: "麻", pinyin: "má", meaning: "chanvre" },
            3: { char: "馬", pinyin: "mǎ", meaning: "cheval" },
            4: { char: "罵", pinyin: "mà", meaning: "gronder" },
          };
          const ex = examples[tone];
          return (
            <div key={tone} className={cn("card flex flex-col items-center gap-3 p-5", toneBgColor(tone).split(" ")[0])}>
              <ToneVisual tone={tone} size={56} />
              <h3 className={cn("text-lg font-bold", toneColor(tone))}>{toneName(tone)}</h3>
              <div className="flex items-center gap-2">
                <span className="chinese text-3xl">{ex.char}</span>
                <AudioButton text={ex.char} size="sm" />
              </div>
              <p className="text-sm text-stone-500">
                <span className="italic">{ex.pinyin}</span> — {ex.meaning}
              </p>
            </div>
          );
        })}
      </div>

      {/* Neutral tone */}
      <div className="card flex items-center gap-4 p-4">
        <ToneVisual tone={0} size={40} />
        <div>
          <h3 className="font-semibold text-stone-700">{toneName(0)}</h3>
          <p className="text-sm text-stone-500">
            Court et faible, souvent pour les particules : <span className="chinese">嗎</span> (ma),{" "}
            <span className="chinese">的</span> (de), <span className="chinese">了</span> (le)
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <button onClick={onStart} className="btn-primary gap-2 text-base px-8 py-3">
          <Zap className="h-5 w-5" />
          Pratiquer les paires de tons
        </button>
        <p className="mt-2 text-xs text-stone-400">
          16 combinaisons à maîtriser pour parler naturellement
        </p>
      </div>
    </div>
  );
}

// ─── Tone pair grid ───

function ToneGrid({
  progress,
  onSelect,
}: {
  progress: Map<string, PairProgress>;
  onSelect: (pair: TonePair) => void;
}) {
  const mainPairs = tonePairs.filter((p) => p.tone1 > 0 && p.tone2 > 0);
  const neutralPairs = tonePairs.filter((p) => p.tone2 === 0);

  function isMastered(id: string): boolean {
    const p = progress.get(id);
    return !!p && p.correct >= 3 && p.correct / p.total >= 0.8;
  }

  function getAccuracy(id: string): number | null {
    const p = progress.get(id);
    if (!p || p.total === 0) return null;
    return Math.round((p.correct / p.total) * 100);
  }

  return (
    <div className="space-y-6">
      {/* 4x4 grid */}
      <div>
        <div className="mb-2 grid grid-cols-5 gap-1 text-center text-xs text-stone-500">
          <div className="flex items-center justify-center text-[10px] text-stone-400">2e ton ↓</div>
          {[1, 2, 3, 4].map((t) => (
            <div key={t} className="flex flex-col items-center py-1">
              <ToneVisual tone={t} size={24} />
              <span>{toneShortName(t)}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-5 gap-1.5">
          {[1, 2, 3, 4].map((t1) => (
            <React.Fragment key={`row-${t1}`}>
              <div className="flex items-center justify-center">
                <div className="flex flex-col items-center text-xs text-stone-500">
                  <ToneVisual tone={t1} size={24} />
                  <span>{toneShortName(t1)}</span>
                </div>
              </div>
              {[1, 2, 3, 4].map((t2) => {
                const pair = mainPairs.find((p) => p.tone1 === t1 && p.tone2 === t2);
                if (!pair) return <div key={`${t1}-${t2}`} />;
                const mastered = isMastered(pair.id);
                const accuracy = getAccuracy(pair.id);
                return (
                  <button
                    key={pair.id}
                    onClick={() => onSelect(pair)}
                    className={cn(
                      "relative flex flex-col items-center justify-center rounded-lg border-2 p-2 sm:p-3 transition-all hover:scale-105 hover:shadow-md",
                      toneBgColor(t1),
                      mastered && "ring-2 ring-green-400"
                    )}
                  >
                    {mastered && (
                      <CheckCircle size={14} className="absolute right-1 top-1 text-green-500" />
                    )}
                    <span className="text-lg sm:text-xl font-bold">{pair.symbol}</span>
                    <span className="text-[10px] text-stone-500">{t1}+{t2}</span>
                    {accuracy !== null && !mastered && (
                      <span className="text-[9px] text-stone-400">{accuracy}%</span>
                    )}
                    {pair.sandhi && <Info size={10} className="absolute bottom-1 left-1 text-amber-500" />}
                  </button>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Neutral tone */}
      <div>
        <h3 className="mb-2 text-sm font-medium text-stone-600">Avec ton neutre</h3>
        <div className="grid grid-cols-4 gap-1.5">
          {neutralPairs.map((pair) => {
            const mastered = isMastered(pair.id);
            return (
              <button
                key={pair.id}
                onClick={() => onSelect(pair)}
                className={cn(
                  "relative flex flex-col items-center justify-center rounded-lg border-2 p-2 transition-all hover:scale-105 hover:shadow-md",
                  toneBgColor(pair.tone1),
                  mastered && "ring-2 ring-green-400"
                )}
              >
                {mastered && (
                  <CheckCircle size={14} className="absolute right-1 top-1 text-green-500" />
                )}
                <span className="text-lg font-bold">{pair.symbol}</span>
                <span className="text-[10px] text-stone-500">{pair.tone1}+0</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Exercise component ───

function Exercise({
  pair,
  mode,
  questionNumber,
  onResult,
  onNext,
}: {
  pair: TonePair;
  mode: ExerciseMode;
  questionNumber: number;
  onResult: (correct: boolean) => void;
  onNext: () => void;
}) {
  const [currentWord, setCurrentWord] = useState<TonePairWord | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const generateQuestion = useCallback(() => {
    const wordIndex = Math.floor(Math.random() * pair.words.length);
    const word = pair.words[wordIndex];
    setCurrentWord(word);
    setSelected(null);
    setIsCorrect(null);

    if (mode === "listen") {
      const correctAnswer = `${pair.tone1}+${pair.tone2}`;
      const allPairIds = tonePairs
        .filter((p) => p.id !== pair.id)
        .map((p) => `${p.tone1}+${p.tone2}`);
      const shuffled = shuffleArray(allPairIds).slice(0, 3);
      shuffled.push(correctAnswer);
      setOptions(shuffleArray(shuffled));
    } else {
      const correctAnswer = word.chinese;
      const otherWords = shuffleArray(
        tonePairs
          .filter((p) => p.id !== pair.id)
          .flatMap((p) => p.words)
          .map((w) => w.chinese)
      ).slice(0, 3);
      setOptions(shuffleArray([...otherWords, correctAnswer]));
    }
  }, [pair, mode]);

  useEffect(() => {
    generateQuestion();
  }, [generateQuestion]);

  function handleSelect(option: string) {
    if (selected) return;
    setSelected(option);
    const correctAnswer = mode === "listen" ? `${pair.tone1}+${pair.tone2}` : currentWord?.chinese ?? "";
    const correct = option === correctAnswer;
    setIsCorrect(correct);
    onResult(correct);
  }

  function handlePlayAudio() {
    if (currentWord) speak(currentWord.chinese, 0.7);
  }

  if (!currentWord) return null;

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Question */}
      {mode === "listen" ? (
        <div className="flex flex-col items-center gap-3">
          <p className="text-sm text-stone-500">Écoutez et identifiez la paire de tons</p>
          <button
            onClick={handlePlayAudio}
            className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95"
          >
            <Volume2 size={36} />
          </button>
          <div className="flex items-center gap-2">
            <span className="chinese text-2xl text-stone-800">{currentWord.chinese}</span>
            <AudioButton text={currentWord.chinese} size="sm" />
          </div>
          <p className="text-xs text-stone-400 italic">{currentWord.pinyin}</p>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3">
          <p className="text-sm text-stone-500">Quel mot correspond à cette paire ?</p>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center">
              <ToneVisual tone={pair.tone1} size={56} />
              <span className={cn("text-xs font-medium", toneColor(pair.tone1))}>{toneShortName(pair.tone1)}</span>
            </div>
            <span className="text-3xl font-bold text-stone-200">+</span>
            <div className="flex flex-col items-center">
              <ToneVisual tone={pair.tone2} size={56} />
              <span className={cn("text-xs font-medium", toneColor(pair.tone2))}>{toneShortName(pair.tone2)}</span>
            </div>
          </div>
        </div>
      )}

      {/* Options */}
      <div className="grid w-full max-w-sm grid-cols-2 gap-2">
        {options.map((option) => {
          const correctAnswer = mode === "listen" ? `${pair.tone1}+${pair.tone2}` : currentWord.chinese;
          let btnClass = "border-stone-200 bg-white hover:border-primary hover:bg-primary/5";
          if (selected) {
            if (option === correctAnswer) btnClass = "border-success bg-success/10 text-success";
            else if (option === selected && !isCorrect) btnClass = "border-danger bg-danger/10 text-danger";
            else btnClass = "border-stone-100 bg-stone-50 text-stone-300";
          }

          return (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              disabled={!!selected}
              className={cn("rounded-xl border-2 px-3 py-3 text-center font-medium transition-all", btnClass)}
            >
              {mode === "listen" ? (
                <span className="text-lg">{option}</span>
              ) : (
                <span className="chinese text-xl">{option}</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Feedback */}
      {selected && (
        <div className="flex flex-col items-center gap-3 w-full max-w-sm">
          <div className={cn(
            "flex items-center gap-2 rounded-lg px-4 py-2 w-full justify-center",
            isCorrect ? "bg-success/10 text-success" : "bg-danger/10 text-danger"
          )}>
            {isCorrect ? <CheckCircle size={18} /> : <XCircle size={18} />}
            <span className="text-sm font-medium">
              {isCorrect ? "Correct !" : "Incorrect"}
            </span>
          </div>

          <div className="flex items-center gap-3 rounded-lg bg-stone-50 border border-stone-100 px-4 py-3 w-full">
            <AudioButton text={currentWord.chinese} size="sm" />
            <div className="flex-1">
              <span className="chinese text-lg font-medium text-stone-800">{currentWord.chinese}</span>
              <span className="ml-2 text-sm italic text-stone-400">{currentWord.pinyin}</span>
              {currentWord.zhuyin && (
                <span className="ml-1 text-sm text-stone-400 chinese">{currentWord.zhuyin}</span>
              )}
            </div>
            <span className="text-sm text-stone-500">{currentWord.french}</span>
          </div>

          <button onClick={() => { generateQuestion(); onNext(); }} className="btn-primary gap-1.5 text-sm">
            Question suivante
            <ArrowRight size={14} />
          </button>
        </div>
      )}
    </div>
  );
}

// ─── Sandhi section ───

function SandhiSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-stone-800">Règles de sandhi tonal</h2>
        <p className="mt-1 text-sm text-stone-500">
          En mandarin, certains tons changent selon le contexte. Ces règles sont essentielles pour parler naturellement.
        </p>
      </div>

      {sandhiRules.map((rule, i) => (
        <div key={i} className="card">
          <h3 className="mb-2 text-base font-semibold text-stone-800">{rule.titleFr}</h3>
          <p className="mb-4 text-sm text-stone-600">{rule.ruleFr}</p>

          <div className="space-y-2">
            {rule.examples.map((ex, j) => (
              <div key={j} className="flex items-center gap-3 rounded-lg bg-stone-50 px-4 py-3">
                <AudioButton text={ex.pinyin} size="sm" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-stone-400 line-through">{ex.original}</span>
                    <ArrowRight size={12} className="text-stone-300" />
                    <span className="font-medium text-primary">{ex.actual}</span>
                  </div>
                  <span className="text-xs text-stone-500">{ex.french}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Main page ───

export default function TonesPage() {
  const [view, setView] = useState<PageView>("overview");
  const [selectedPair, setSelectedPair] = useState<TonePair | null>(null);
  const [exerciseMode, setExerciseMode] = useState<ExerciseMode>("listen");
  const [progress, setProgress] = useState<Map<string, PairProgress>>(new Map());
  const [sessionCorrect, setSessionCorrect] = useState(0);
  const [sessionTotal, setSessionTotal] = useState(0);

  useEffect(() => {
    initVoices();
    const parsed = storageGet<Record<string, PairProgress>>("tone-drill-progress", {});
    if (Object.keys(parsed).length > 0) {
      setProgress(new Map(Object.entries(parsed)));
    }
  }, []);

  function saveProgress(updated: Map<string, PairProgress>) {
    setProgress(updated);
    storageSet("tone-drill-progress", Object.fromEntries(updated));
  }

  function handleResult(correct: boolean) {
    if (!selectedPair) return;
    const updated = new Map(progress);
    const current = updated.get(selectedPair.id) ?? { correct: 0, total: 0 };
    updated.set(selectedPair.id, {
      correct: current.correct + (correct ? 1 : 0),
      total: current.total + 1,
    });
    saveProgress(updated);
    setSessionCorrect((c) => c + (correct ? 1 : 0));
    setSessionTotal((t) => t + 1);
  }

  function handleSelectPair(pair: TonePair) {
    setSelectedPair(pair);
    setSessionCorrect(0);
    setSessionTotal(0);
    setView("exercise");
  }

  function handleBackToGrid() {
    setSelectedPair(null);
    setView("grid");
  }

  const masteredCount = useMemo(() =>
    Array.from(progress.entries()).filter(
      ([, p]) => p.correct >= 3 && p.correct / p.total >= 0.8
    ).length,
    [progress]
  );

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-stone-900">
            <span className="chinese text-primary">聲調</span> Les tons du mandarin
          </h1>
          <p className="mt-1 text-sm text-stone-500">
            Maîtrise les 4 tons et leurs combinaisons pour parler naturellement
          </p>
        </div>
      </div>

      {/* Progress + nav */}
      <div className="card p-4 space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-1.5 text-stone-600">
            <Trophy size={16} className="text-amber-500" />
            {masteredCount}/{tonePairs.length} paires maîtrisées
          </span>
          {sessionTotal > 0 && view === "exercise" && (
            <span className="text-xs text-stone-400">
              Session : {sessionCorrect}/{sessionTotal} ({Math.round((sessionCorrect / sessionTotal) * 100)}%)
            </span>
          )}
        </div>
        <ProgressBar value={masteredCount} max={tonePairs.length} color="bg-gradient-to-r from-primary to-primary-light" />

        {/* View tabs */}
        <div className="flex gap-1 rounded-lg bg-stone-50 p-1">
          {([
            { key: "overview" as const, label: "Introduction", icon: <Eye size={14} /> },
            { key: "grid" as const, label: "Grille des tons", icon: <Zap size={14} /> },
            { key: "sandhi" as const, label: "Sandhi", icon: <Info size={14} /> },
          ]).map((tab) => (
            <button
              key={tab.key}
              onClick={() => { setView(tab.key); setSelectedPair(null); }}
              className={cn(
                "flex flex-1 items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors",
                view === tab.key || (view === "exercise" && tab.key === "grid")
                  ? "bg-white text-stone-800 shadow-sm"
                  : "text-stone-500 hover:text-stone-700"
              )}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tone legend */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs text-stone-500">
        {[1, 2, 3, 4, 0].map((t) => (
          <div key={t} className="flex items-center gap-1">
            <ToneVisual tone={t} size={20} />
            <span className={toneColor(t)}>{toneName(t).split(" (")[0]}</span>
          </div>
        ))}
      </div>

      {/* Content */}
      {view === "overview" && (
        <ToneOverview onStart={() => setView("grid")} />
      )}

      {view === "sandhi" && <SandhiSection />}

      {view === "grid" && !selectedPair && (
        <ToneGrid progress={progress} onSelect={handleSelectPair} />
      )}

      {view === "exercise" && selectedPair && (
        <div className="card p-6 space-y-6">
          {/* Exercise header */}
          <div className="flex items-center justify-between">
            <button
              onClick={handleBackToGrid}
              className="flex items-center gap-1 text-sm text-stone-500 hover:text-primary transition-colors"
            >
              <ChevronLeft size={18} />
              Retour à la grille
            </button>
            <div className="flex items-center gap-2">
              <ToneVisual tone={selectedPair.tone1} size={28} />
              <span className="text-lg font-bold text-stone-400">+</span>
              <ToneVisual tone={selectedPair.tone2} size={28} />
              <span className="text-sm font-medium text-stone-700">
                {selectedPair.tone1}+{selectedPair.tone2}
              </span>
            </div>
          </div>

          {/* Sandhi note */}
          {selectedPair.sandhiFr && (
            <div className="flex items-start gap-2 rounded-lg bg-amber-50 border border-amber-200 px-3 py-2">
              <Info size={16} className="mt-0.5 shrink-0 text-amber-600" />
              <p className="text-sm text-amber-700">{selectedPair.sandhiFr}</p>
            </div>
          )}

          {/* Mode toggle */}
          <div className="flex justify-center gap-2">
            <button
              onClick={() => setExerciseMode("listen")}
              className={cn(
                "flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                exerciseMode === "listen" ? "bg-primary text-white" : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              )}
            >
              <Ear size={14} />
              Écouter → Identifier
            </button>
            <button
              onClick={() => setExerciseMode("reverse")}
              className={cn(
                "flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                exerciseMode === "reverse" ? "bg-primary text-white" : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              )}
            >
              <Eye size={14} />
              Tons → Trouver le mot
            </button>
          </div>

          {/* Exercise */}
          <Exercise
            pair={selectedPair}
            mode={exerciseMode}
            questionNumber={sessionTotal + 1}
            onResult={handleResult}
            onNext={() => {}}
          />

          {/* Word reference for this pair */}
          <div className="border-t border-stone-100 pt-4">
            <h3 className="mb-3 text-sm font-medium text-stone-600">
              Vocabulaire de cette combinaison ({selectedPair.words.length} mots)
            </h3>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {selectedPair.words.map((word) => (
                <div
                  key={word.chinese}
                  className="flex items-center gap-2 rounded-lg border border-stone-100 p-2 transition-colors hover:bg-stone-50"
                >
                  <AudioButton text={word.chinese} size="sm" />
                  <div className="min-w-0 flex-1">
                    <span className="chinese text-base font-medium">{word.chinese}</span>
                    <p className="text-xs italic text-stone-400">{word.pinyin}</p>
                    <p className="text-xs text-stone-500 truncate">{word.french}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
