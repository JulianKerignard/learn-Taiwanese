"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { RotateCcw, Pencil, Volume2, Eye } from "lucide-react";
import AudioButton from "./AudioButton";
import PinyinDisplay from "./PinyinDisplay";
import { speak } from "@/lib/tts";
import { cn } from "@/lib/cn";
import { Rating, Grades, previewScheduling } from "@/lib/fsrs";
import type { SM2Card, SM2Grade, ReviewMode } from "@/types";
import type { Grade } from "ts-fsrs";

interface FlashcardProps {
  card: SM2Card;
  mode: ReviewMode;
  onGrade: (grade: SM2Grade) => void;
  displayMode?: "pinyin" | "zhuyin" | "both";
  distractors?: SM2Card[];
}

const gradeButtons: { grade: Grade; label: string; color: string }[] = [
  { grade: Rating.Again, label: "Oublie", color: "bg-danger text-white" },
  { grade: Rating.Hard, label: "Difficile", color: "bg-warning text-white" },
  { grade: Rating.Good, label: "Correct", color: "bg-accent text-white" },
  { grade: Rating.Easy, label: "Facile", color: "bg-success text-white" },
];

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// ------- Recognize Mode -------
function RecognizeMode({
  card,
  distractors,
  onAnswer,
}: {
  card: SM2Card;
  distractors: SM2Card[];
  onAnswer: (correct: boolean) => void;
}) {
  const [options, setOptions] = useState<{ text: string; isCorrect: boolean }[]>([]);
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const wrongAnswers = distractors
      .filter((d) => d.id !== card.id)
      .slice(0, 3)
      .map((d) => ({ text: d.back, isCorrect: false }));

    // Fill if not enough distractors
    while (wrongAnswers.length < 3) {
      wrongAnswers.push({ text: "---", isCorrect: false });
    }

    setOptions(shuffleArray([{ text: card.back, isCorrect: true }, ...wrongAnswers]));
    setAnswered(false);
    setSelected(null);
  }, [card.id, distractors]);

  function handleSelect(idx: number) {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    onAnswer(options[idx].isCorrect);
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium text-accent uppercase tracking-wide">Reconnaissance</span>
        <span className="character-display">{card.front}</span>
        <AudioButton text={card.front} size="lg" />
      </div>

      <p className="text-sm text-stone-500">Quelle est la traduction ?</p>

      <div className="grid w-full max-w-md grid-cols-2 gap-3">
        {options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(idx)}
            className={cn(
              "rounded-xl border-2 px-4 py-3 text-sm font-medium transition-all",
              !answered && "border-stone-200 bg-white hover:border-primary hover:bg-primary/5",
              answered && opt.isCorrect && "border-success bg-success/10 text-success",
              answered && selected === idx && !opt.isCorrect && "border-danger bg-danger/10 text-danger",
              answered && selected !== idx && !opt.isCorrect && "border-stone-100 bg-stone-50 text-stone-400"
            )}
            disabled={answered}
          >
            {opt.text}
          </button>
        ))}
      </div>
    </div>
  );
}

// ------- Recall Mode -------
function RecallMode({
  card,
  displayMode,
  onRevealed,
}: {
  card: SM2Card;
  displayMode: "pinyin" | "zhuyin" | "both";
  onRevealed: () => void;
}) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    setFlipped(false);
  }, [card.id]);

  function handleFlip() {
    if (!flipped) {
      setFlipped(true);
      onRevealed();
    }
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <span className="text-xs font-medium text-violet-600 uppercase tracking-wide">Rappel</span>

      <button
        onClick={handleFlip}
        className="group relative h-72 w-full max-w-md cursor-pointer perspective-1000"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-2xl border border-stone-200 bg-white shadow-lg transition-transform duration-500",
            "flex flex-col items-center justify-center gap-3 p-8",
            flipped && "rotate-y-180 opacity-0"
          )}
        >
          <p className="text-lg font-medium text-stone-700">{card.back}</p>
          <PinyinDisplay pinyin={card.pinyin} zhuyin={card.zhuyin} mode={displayMode} size="lg" />
          <p className="mt-2 text-xs text-stone-400">Cliquer pour reveler le caractere</p>
        </div>

        <div
          className={cn(
            "absolute inset-0 rounded-2xl border border-stone-200 bg-white shadow-lg transition-transform duration-500",
            "flex flex-col items-center justify-center gap-3 p-8",
            !flipped && "rotate-y-180 opacity-0"
          )}
        >
          <span className="character-display">{card.front}</span>
          <PinyinDisplay pinyin={card.pinyin} zhuyin={card.zhuyin} mode={displayMode} size="lg" />
          <p className="text-lg font-medium text-stone-700">{card.back}</p>
          <AudioButton text={card.front} size="md" />
        </div>
      </button>
    </div>
  );
}

// ------- Listening Mode -------
function ListeningMode({
  card,
  distractors,
  onAnswer,
}: {
  card: SM2Card;
  distractors: SM2Card[];
  onAnswer: (correct: boolean) => void;
}) {
  const [options, setOptions] = useState<{ text: string; isCorrect: boolean }[]>([]);
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [audioPlayed, setAudioPlayed] = useState(false);

  useEffect(() => {
    const wrongAnswers = distractors
      .filter((d) => d.id !== card.id)
      .slice(0, 3)
      .map((d) => ({ text: d.front, isCorrect: false }));

    while (wrongAnswers.length < 3) {
      wrongAnswers.push({ text: "?", isCorrect: false });
    }

    setOptions(shuffleArray([{ text: card.front, isCorrect: true }, ...wrongAnswers]));
    setAnswered(false);
    setSelected(null);
    setAudioPlayed(false);
  }, [card.id, distractors]);

  async function playAudio() {
    setAudioPlayed(true);
    await speak(card.front, 0.85);
  }

  function handleSelect(idx: number) {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    onAnswer(options[idx].isCorrect);
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <span className="text-xs font-medium text-orange-600 uppercase tracking-wide">Ecoute</span>

      <button
        onClick={playAudio}
        className={cn(
          "flex h-24 w-24 items-center justify-center rounded-full transition-all",
          audioPlayed ? "bg-primary/10 text-primary" : "bg-primary text-white animate-pulse"
        )}
      >
        <Volume2 size={40} />
      </button>

      {!audioPlayed && (
        <p className="text-sm text-stone-500">Appuie pour ecouter</p>
      )}

      {audioPlayed && (
        <>
          <p className="text-sm text-stone-500">Quel caractere entends-tu ?</p>
          <div className="grid w-full max-w-md grid-cols-2 gap-3">
            {options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={cn(
                  "rounded-xl border-2 px-4 py-4 text-2xl font-bold transition-all",
                  !answered && "border-stone-200 bg-white hover:border-primary hover:bg-primary/5",
                  answered && opt.isCorrect && "border-success bg-success/10 text-success",
                  answered && selected === idx && !opt.isCorrect && "border-danger bg-danger/10 text-danger",
                  answered && selected !== idx && !opt.isCorrect && "border-stone-100 bg-stone-50 text-stone-400"
                )}
                disabled={answered}
              >
                {opt.text}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ------- Writing Mode -------
function WritingMode({
  card,
  displayMode,
  onRevealed,
}: {
  card: SM2Card;
  displayMode: "pinyin" | "zhuyin" | "both";
  onRevealed: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [drawing, setDrawing] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);

  useEffect(() => {
    setRevealed(false);
    setHasDrawn(false);
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
  }, [card.id]);

  function getPos(e: React.MouseEvent | React.TouchEvent, canvas: HTMLCanvasElement) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    if ("touches" in e) {
      return {
        x: (e.touches[0].clientX - rect.left) * scaleX,
        y: (e.touches[0].clientY - rect.top) * scaleY,
      };
    }
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  }

  function startDraw(e: React.MouseEvent | React.TouchEvent) {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    setDrawing(true);
    setHasDrawn(true);
    const pos = getPos(e, canvas);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  }

  function draw(e: React.MouseEvent | React.TouchEvent) {
    if (!drawing) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const pos = getPos(e, canvas);
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#1c1917";
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  }

  function stopDraw() {
    setDrawing(false);
  }

  function clearCanvas() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    setHasDrawn(false);
  }

  function handleReveal() {
    setRevealed(true);
    onRevealed();
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <span className="text-xs font-medium text-emerald-600 uppercase tracking-wide">Ecriture</span>

      <div className="flex flex-col items-center gap-1">
        <p className="text-lg font-medium text-stone-700">{card.back}</p>
        <PinyinDisplay pinyin={card.pinyin} zhuyin={card.zhuyin} mode={displayMode} size="lg" />
      </div>

      <div className="relative">
        <canvas
          ref={canvasRef}
          width={240}
          height={240}
          className="rounded-xl border-2 border-dashed border-stone-300 bg-white touch-none"
          onMouseDown={startDraw}
          onMouseMove={draw}
          onMouseUp={stopDraw}
          onMouseLeave={stopDraw}
          onTouchStart={startDraw}
          onTouchMove={draw}
          onTouchEnd={stopDraw}
        />
        {/* Grid overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-xl">
          <div className="absolute left-1/2 top-0 h-full w-px bg-stone-200/50" />
          <div className="absolute left-0 top-1/2 h-px w-full bg-stone-200/50" />
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={clearCanvas}
          className="flex items-center gap-1 rounded-lg border border-stone-200 px-3 py-1.5 text-sm text-stone-600 hover:bg-stone-50"
        >
          <RotateCcw size={14} />
          Effacer
        </button>
        {hasDrawn && !revealed && (
          <button
            onClick={handleReveal}
            className="flex items-center gap-1 rounded-lg bg-primary px-3 py-1.5 text-sm text-white hover:bg-primary/90"
          >
            <Eye size={14} />
            Verifier
          </button>
        )}
      </div>

      {revealed && (
        <div className="flex flex-col items-center gap-2 rounded-xl border border-stone-200 bg-stone-50 p-4">
          <p className="text-xs text-stone-500">Caractere correct :</p>
          <span className="text-5xl font-bold text-stone-900">{card.front}</span>
          <AudioButton text={card.front} size="md" />
        </div>
      )}
    </div>
  );
}

// ------- Grade Buttons (shared) -------
function GradeButtons({
  card,
  onGrade,
}: {
  card: SM2Card;
  onGrade: (grade: SM2Grade) => void;
}) {
  const preview = previewScheduling(card);

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <p className="text-center text-sm text-stone-500 mb-1">Comment c&apos;etait ?</p>
      <div className="grid grid-cols-4 gap-2">
        {gradeButtons.map((btn) => {
          const intervalLabel = preview[btn.grade]?.interval ?? "";
          // Map FSRS grade to SM2Grade for backward compat
          const sm2Grade = (
            btn.grade === Rating.Again ? 0 :
            btn.grade === Rating.Hard ? 2 :
            btn.grade === Rating.Good ? 3 : 5
          ) as SM2Grade;

          return (
            <button
              key={btn.grade}
              onClick={() => onGrade(sm2Grade)}
              className={cn(
                "flex flex-col items-center rounded-lg px-3 py-2 text-sm font-medium transition-transform hover:scale-105",
                btn.color
              )}
            >
              <span>{btn.label}</span>
              <span className="text-xs opacity-80">{intervalLabel}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ------- Main Flashcard Component -------
export default function Flashcard({
  card,
  mode,
  onGrade,
  displayMode = "pinyin",
  distractors = [],
}: FlashcardProps) {
  const [showGrade, setShowGrade] = useState(false);
  const [autoGrade, setAutoGrade] = useState<SM2Grade | null>(null);

  useEffect(() => {
    setShowGrade(false);
    setAutoGrade(null);
  }, [card.id, mode]);

  function handleMultipleChoiceAnswer(correct: boolean) {
    if (correct) {
      setAutoGrade(3); // Good
    } else {
      setAutoGrade(0); // Again
    }
    setShowGrade(true);
  }

  function handleRevealed() {
    setShowGrade(true);
  }

  function handleGrade(grade: SM2Grade) {
    setShowGrade(false);
    onGrade(grade);
  }

  return (
    <div className="flex flex-col items-center gap-6">
      {mode === "recognize" && (
        <RecognizeMode
          card={card}
          distractors={distractors}
          onAnswer={handleMultipleChoiceAnswer}
        />
      )}
      {mode === "recall" && (
        <RecallMode
          card={card}
          displayMode={displayMode}
          onRevealed={handleRevealed}
        />
      )}
      {mode === "listening" && (
        <ListeningMode
          card={card}
          distractors={distractors}
          onAnswer={handleMultipleChoiceAnswer}
        />
      )}
      {mode === "writing" && (
        <WritingMode
          card={card}
          displayMode={displayMode}
          onRevealed={handleRevealed}
        />
      )}

      {showGrade && <GradeButtons card={card} onGrade={handleGrade} />}
    </div>
  );
}
