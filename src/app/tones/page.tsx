"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Volume2,
  ChevronLeft,
  CheckCircle,
  XCircle,
  Info,
  RotateCcw,
  Trophy,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { storageGet, storageSet } from "@/lib/storage";
import { speak, initVoices } from "@/lib/tts";
import { tonePairs, sandhiRules, type TonePair, type TonePairWord } from "@/data/tone-pairs";

function shuffleArray<T>(arr: T[]): T[] {
  const s = [...arr];
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [s[i], s[j]] = [s[j], s[i]];
  }
  return s;
}

type ExerciseMode = "listen" | "reverse";

interface PairProgress {
  correct: number;
  total: number;
}

function toneColor(tone: number): string {
  switch (tone) {
    case 1: return "bg-red-500";
    case 2: return "bg-amber-500";
    case 3: return "bg-green-500";
    case 4: return "bg-blue-500";
    case 0: return "bg-stone-400";
    default: return "bg-stone-300";
  }
}

function toneBgColor(tone: number): string {
  switch (tone) {
    case 1: return "bg-red-50 border-red-200 hover:bg-red-100";
    case 2: return "bg-amber-50 border-amber-200 hover:bg-amber-100";
    case 3: return "bg-green-50 border-green-200 hover:bg-green-100";
    case 4: return "bg-blue-50 border-blue-200 hover:bg-blue-100";
    case 0: return "bg-stone-50 border-stone-200 hover:bg-stone-100";
    default: return "bg-stone-50 border-stone-200";
  }
}

function toneName(tone: number): string {
  switch (tone) {
    case 1: return "1er ton (haut plat)";
    case 2: return "2e ton (montant)";
    case 3: return "3e ton (descendant-montant)";
    case 4: return "4e ton (descendant)";
    case 0: return "Ton neutre (léger)";
    default: return "";
  }
}

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

  return (
    <div>
      {/* 4x4 grid */}
      <div className="mb-2 grid grid-cols-5 gap-1 text-center text-xs text-stone-500">
        <div />
        {[1, 2, 3, 4].map((t) => (
          <div key={t} className="flex flex-col items-center py-1">
            <ToneVisual tone={t} size={24} />
            <span>Ton {t}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-5 gap-1.5">
        {[1, 2, 3, 4].map((t1) => (
          <React.Fragment key={`row-${t1}`}>
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center text-xs text-stone-500">
                <ToneVisual tone={t1} size={24} />
                <span>Ton {t1}</span>
              </div>
            </div>
            {[1, 2, 3, 4].map((t2) => {
              const pair = mainPairs.find((p) => p.tone1 === t1 && p.tone2 === t2);
              if (!pair) return <div key={`${t1}-${t2}`} />;
              const mastered = isMastered(pair.id);
              return (
                <button
                  key={pair.id}
                  onClick={() => onSelect(pair)}
                  className={cn(
                    "relative flex flex-col items-center justify-center rounded-lg border-2 p-2 transition-all hover:scale-105 hover:shadow-md",
                    toneBgColor(t1),
                    mastered && "ring-2 ring-green-400"
                  )}
                >
                  {mastered && (
                    <CheckCircle size={14} className="absolute right-1 top-1 text-green-500" />
                  )}
                  <span className="text-lg font-bold">{pair.symbol}</span>
                  <span className="text-[10px] text-stone-500">{t1}+{t2}</span>
                  {pair.sandhi && <Info size={10} className="absolute bottom-1 left-1 text-amber-500" />}
                </button>
              );
            })}
          </React.Fragment>
        ))}
      </div>

      {/* Neutral tone */}
      <h3 className="mb-2 mt-6 text-sm font-medium text-stone-600">Avec ton neutre (5e ton)</h3>
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
              <span className="text-[10px] text-stone-500">{pair.tone1}+neutre</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Exercise({
  pair,
  mode,
  onResult,
}: {
  pair: TonePair;
  mode: ExerciseMode;
  onResult: (correct: boolean) => void;
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
      // Listen to audio, pick correct tone pair
      const correctAnswer = `${pair.tone1}+${pair.tone2}`;
      const allPairIds = tonePairs
        .filter((p) => p.id !== pair.id)
        .map((p) => `${p.tone1}+${p.tone2}`);
      const shuffled = shuffleArray(allPairIds).slice(0, 3);
      shuffled.push(correctAnswer);
      setOptions(shuffleArray(shuffled));
    } else {
      // Show tone pair, pick correct word
      const correctAnswer = word.chinese;
      const otherWords = shuffleArray(
        tonePairs
          .filter((p) => p.id !== pair.id)
          .flatMap((p) => p.words)
          .map((w) => w.chinese)
      ).slice(0, 3);
      const opts = shuffleArray([...otherWords, correctAnswer]);
      setOptions(opts);
    }
  }, [pair, mode]);

  useEffect(() => {
    generateQuestion();
  }, [generateQuestion]);

  function handleSelect(option: string) {
    if (selected) return;
    setSelected(option);

    const correctAnswer = mode === "listen"
      ? `${pair.tone1}+${pair.tone2}`
      : currentWord?.chinese ?? "";

    const correct = option === correctAnswer;
    setIsCorrect(correct);
    onResult(correct);
  }

  function handlePlayAudio() {
    if (currentWord) {
      speak(currentWord.chinese, 0.7);
    }
  }

  if (!currentWord) return null;

  return (
    <div className="flex flex-col items-center gap-4">
      {mode === "listen" ? (
        <>
          <p className="text-sm text-stone-500">Écoutez et identifiez la paire de tons</p>
          <button
            onClick={handlePlayAudio}
            className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary transition-all hover:bg-primary/20 hover:scale-105"
          >
            <Volume2 size={36} />
          </button>
          <p className="chinese text-2xl text-stone-400">{currentWord.chinese}</p>
        </>
      ) : (
        <>
          <p className="text-sm text-stone-500">Quel mot correspond à cette paire de tons ?</p>
          <div className="flex items-center gap-3">
            <ToneVisual tone={pair.tone1} size={48} />
            <span className="text-2xl font-bold text-stone-300">+</span>
            <ToneVisual tone={pair.tone2} size={48} />
          </div>
          <p className="text-sm font-medium text-stone-600">
            {toneName(pair.tone1)} + {toneName(pair.tone2)}
          </p>
        </>
      )}

      <div className="grid w-full max-w-sm grid-cols-2 gap-2">
        {options.map((option) => {
          const correctAnswer = mode === "listen"
            ? `${pair.tone1}+${pair.tone2}`
            : currentWord.chinese;

          let btnClass = "border-stone-200 bg-white hover:bg-stone-50";
          if (selected) {
            if (option === correctAnswer) {
              btnClass = "border-green-400 bg-green-50 text-green-800";
            } else if (option === selected && !isCorrect) {
              btnClass = "border-red-400 bg-red-50 text-red-800";
            } else {
              btnClass = "border-stone-200 bg-stone-50 opacity-50";
            }
          }

          return (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              disabled={!!selected}
              className={cn(
                "rounded-lg border-2 px-3 py-3 text-center font-medium transition-all",
                btnClass,
                !selected && "hover:scale-[1.02]"
              )}
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

      {selected && (
        <div className="flex flex-col items-center gap-2">
          <div className={cn(
            "flex items-center gap-2 rounded-lg px-4 py-2",
            isCorrect ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
          )}>
            {isCorrect ? <CheckCircle size={18} /> : <XCircle size={18} />}
            <span className="text-sm font-medium">
              {isCorrect ? "Correct !" : "Incorrect"}
            </span>
          </div>

          <div className="text-center text-sm text-stone-600">
            <span className="chinese text-lg">{currentWord.chinese}</span>
            <span className="ml-2 italic text-stone-400">{currentWord.pinyin}</span>
            <span className="ml-2">{currentWord.french}</span>
          </div>

          <button
            onClick={generateQuestion}
            className="btn-primary mt-2 gap-1.5 text-sm"
          >
            <RotateCcw size={14} />
            Suivant
          </button>
        </div>
      )}
    </div>
  );
}

function SandhiSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-stone-800">Règles de sandhi tonal</h2>
      <p className="text-sm text-stone-500">
        En mandarin, certains tons changent selon le contexte. Ces règles sont essentielles pour parler naturellement.
      </p>

      {sandhiRules.map((rule, i) => (
        <div key={i} className="card">
          <h3 className="mb-1 text-base font-semibold text-stone-800">{rule.titleFr}</h3>
          <p className="mb-3 text-sm text-stone-600">{rule.ruleFr}</p>

          <div className="space-y-2">
            {rule.examples.map((ex, j) => (
              <div
                key={j}
                className="flex items-center gap-3 rounded-lg bg-stone-50 px-3 py-2"
              >
                <span className="chinese text-lg font-medium">{ex.pinyin}</span>
                <div className="text-sm">
                  <span className="text-stone-400 line-through">{ex.original}</span>
                  <span className="mx-1 text-stone-300">→</span>
                  <span className="font-medium text-primary">{ex.actual}</span>
                </div>
                <span className="ml-auto text-xs text-stone-400">{ex.french}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function TonesPage() {
  const [selectedPair, setSelectedPair] = useState<TonePair | null>(null);
  const [exerciseMode, setExerciseMode] = useState<ExerciseMode>("listen");
  const [progress, setProgress] = useState<Map<string, PairProgress>>(new Map());
  const [showSandhi, setShowSandhi] = useState(false);

  useEffect(() => {
    initVoices();

    // Load progress from storage
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
  }

  const masteredCount = Array.from(progress.entries()).filter(
    ([, p]) => p.correct >= 3 && p.correct / p.total >= 0.8
  ).length;

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-stone-900">
          <span className="chinese text-primary">聲調</span> Exercice des tons
        </h1>
        <p className="mt-1 text-sm text-stone-500">
          Maîtrisez les 4 tons du mandarin et leurs combinaisons
        </p>
      </div>

      {/* Progress bar */}
      <div className="card p-4">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="flex items-center gap-1.5 text-stone-600">
            <Trophy size={16} className="text-amber-500" />
            Progression : {masteredCount}/{tonePairs.length} maîtrisées
          </span>
          <button
            onClick={() => setShowSandhi(!showSandhi)}
            className="flex items-center gap-1 text-xs text-primary hover:underline"
          >
            <Info size={14} />
            Règles de sandhi
          </button>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-stone-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary to-primary-light transition-all duration-500"
            style={{ width: `${(masteredCount / tonePairs.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Tone visualization legend */}
      <div className="flex flex-wrap items-center gap-4 rounded-lg bg-white p-3 text-xs text-stone-500">
        {[1, 2, 3, 4, 0].map((t) => (
          <div key={t} className="flex items-center gap-1.5">
            <ToneVisual tone={t} size={24} />
            <span>{toneName(t)}</span>
          </div>
        ))}
      </div>

      {/* Sandhi rules section */}
      {showSandhi && <SandhiSection />}

      {/* Main content */}
      {selectedPair ? (
        <div className="card p-6">
          {/* Back button + pair info */}
          <div className="mb-4 flex items-center justify-between">
            <button
              onClick={() => setSelectedPair(null)}
              className="flex items-center gap-1 text-sm text-stone-500 hover:text-primary"
            >
              <ChevronLeft size={18} />
              Retour à la grille
            </button>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-stone-700">
                Ton {selectedPair.tone1} + Ton {selectedPair.tone2}
              </span>
              <span className="text-lg font-bold">{selectedPair.symbol}</span>
            </div>
          </div>

          {/* Sandhi note for this pair */}
          {selectedPair.sandhiFr && (
            <div className="mb-4 flex items-start gap-2 rounded-lg bg-amber-50 px-3 py-2">
              <Info size={16} className="mt-0.5 shrink-0 text-amber-600" />
              <p className="text-sm text-amber-700">{selectedPair.sandhiFr}</p>
            </div>
          )}

          {/* Mode toggle */}
          <div className="mb-6 flex justify-center gap-2">
            <button
              onClick={() => setExerciseMode("listen")}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                exerciseMode === "listen"
                  ? "bg-primary text-white"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              )}
            >
              Ecouter → Identifier
            </button>
            <button
              onClick={() => setExerciseMode("reverse")}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                exerciseMode === "reverse"
                  ? "bg-primary text-white"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              )}
            >
              Tons → Trouver le mot
            </button>
          </div>

          {/* Exercise */}
          <Exercise
            pair={selectedPair}
            mode={exerciseMode}
            onResult={handleResult}
          />

          {/* Word list for this pair */}
          <div className="mt-6 border-t border-stone-100 pt-4">
            <h3 className="mb-2 text-sm font-medium text-stone-600">
              Mots de cette combinaison
            </h3>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {selectedPair.words.map((word) => (
                <button
                  key={word.chinese}
                  onClick={() => speak(word.chinese, 0.7)}
                  className="flex flex-col items-center rounded-lg border border-stone-100 p-2 transition-colors hover:bg-stone-50"
                >
                  <span className="chinese text-lg">{word.chinese}</span>
                  <span className="text-xs italic text-stone-400">{word.pinyin}</span>
                  <span className="text-xs text-stone-500">{word.french}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <ToneGrid progress={progress} onSelect={setSelectedPair} />
      )}
    </div>
  );
}
