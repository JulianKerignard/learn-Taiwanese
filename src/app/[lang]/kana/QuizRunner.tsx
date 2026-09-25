"use client";

import { useEffect, useRef, useState } from "react";
import { Check, X, ArrowRight, Volume2 } from "lucide-react";
import ProgressBar from "@/components/ProgressBar";
import { useContentLang } from "@/components/ContentLanguage";
import { cn } from "@/lib/cn";
import { isAcceptedAnswer } from "@/lib/kana";
import { speak } from "@/lib/tts";
import type { Kana } from "@/types/kana";
import { romajiLabel, type Question } from "./kana-ui";

export interface QuizResult {
  target: Kana;
  correct: boolean;
}

const PROMPTS: Record<string, string> = {
  "kana-romaji": "Comment se lit ce signe ?",
  "romaji-kana": "Quel signe se lit ainsi ?",
  listen: "Quel signe entends-tu ?",
  type: "Écris la lecture en rōmaji",
  word: "Comment se lit ce mot ?",
};

function promptOf(q: Question): string {
  return q.kind === "choice" ? PROMPTS[q.mode] : PROMPTS[q.kind];
}

/** The text heard for a question: the sign, or the whole word for っ and ー. */
const spoken = (q: Question) => (q.kind === "word" ? q.word.term : q.target.char);

/**
 * Runs a list of questions with immediate feedback. Every answer is reported
 * through `onAnswer` as it happens, so mastery is saved even if the learner
 * leaves halfway.
 *
 * Keyboard: 1–4 pick an option, Enter moves on (or checks a typed answer).
 */
export default function QuizRunner({
  questions,
  onAnswer,
  onFinish,
}: {
  questions: Question[];
  onAnswer: (kanaId: string, correct: boolean) => void;
  onFinish: (results: QuizResult[]) => void;
}) {
  const lang = useContentLang();
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [typed, setTyped] = useState("");
  const [results, setResults] = useState<QuizResult[]>([]);
  const nextRef = useRef<HTMLButtonElement>(null);

  const question = questions[index];
  const answered = picked !== null;
  const lastCorrect = answered ? results[results.length - 1]?.correct : false;

  function answer(value: string, correct: boolean) {
    if (answered || !question) return;
    setPicked(value);
    setResults((prev) => [...prev, { target: question.target, correct }]);
    onAnswer(question.target.id, correct);
    // Hearing the sign after answering ties the sound to the shape.
    if (question.kind !== "choice" || question.mode !== "listen") speak(spoken(question)).catch(() => {});
  }

  function pickOption(i: number) {
    if (!question) return;
    if (question.kind === "choice") {
      const option = question.options[i];
      if (option) answer(option.id, option.id === question.target.id);
    } else if (question.kind === "word") {
      const option = question.options[i];
      if (option) answer(option, option === question.word.romaji);
    }
  }

  function next() {
    if (index + 1 >= questions.length) {
      onFinish(results);
      return;
    }
    setIndex(index + 1);
    setPicked(null);
    setTyped("");
  }

  // Move focus to "Suivant" once answered, so Enter (a native click) goes on.
  useEffect(() => {
    if (answered) nextRef.current?.focus();
  }, [answered]);

  // A listening question speaks as it appears.
  useEffect(() => {
    if (question?.kind === "choice" && question.mode === "listen") speak(question.target.char).catch(() => {});
  }, [question]);

  // Digits pick an option. Enter only when focus is on nothing interactive:
  // a focused button or input already handles it natively.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const target = e.target as HTMLElement | null;
      const tag = target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if (/^[1-4]$/.test(e.key) && !answered) {
        e.preventDefault();
        pickOption(Number(e.key) - 1);
      } else if (e.key === "Enter" && answered && tag !== "BUTTON" && tag !== "A") {
        e.preventDefault();
        next();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (!question) return null;

  const isListen = question.kind === "choice" && question.mode === "listen";
  const showGlyphPrompt = question.kind === "type" || (question.kind === "choice" && question.mode === "kana-romaji");

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <ProgressBar value={index + (answered ? 1 : 0)} max={questions.length} className="flex-1" />
        <span className="shrink-0 text-xs text-stone-500 tabular-nums">
          {index + 1} / {questions.length}
        </span>
      </div>

      <div className="card flex flex-col items-center gap-4 p-5 text-center sm:p-8">
        <p className="text-sm font-medium text-stone-500">{promptOf(question)}</p>

        {showGlyphPrompt && (
          <span lang={lang} className="chinese text-7xl leading-none text-stone-900 sm:text-8xl">
            {question.target.char}
          </span>
        )}
        {question.kind === "choice" && question.mode === "romaji-kana" && (
          <span className="text-5xl font-bold text-stone-900">{question.target.romaji}</span>
        )}
        {question.kind === "word" && (
          <span lang={lang} className="chinese text-5xl leading-tight text-stone-900 sm:text-6xl">
            {question.word.term}
          </span>
        )}
        {isListen && (
          <button
            type="button"
            onClick={() => speak(question.target.char).catch(() => {})}
            className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary/20"
            aria-label="Réécouter le signe"
          >
            <Volume2 className="h-9 w-9" />
          </button>
        )}

        {question.kind === "type" ? (
          <form
            className="flex w-full max-w-xs flex-col gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              if (answered) next();
              else if (typed.trim()) answer(typed, isAcceptedAnswer(question.target, typed));
            }}
          >
            <label htmlFor="kana-typed" className="sr-only">
              Lecture en rōmaji
            </label>
            <input
              id="kana-typed"
              key={index}
              value={typed}
              onChange={(e) => setTyped(e.target.value)}
              readOnly={answered}
              autoComplete="off"
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck={false}
              autoFocus
              className={cn(
                "w-full rounded-lg border-2 px-4 py-3 text-center text-base font-medium outline-none transition-colors sm:text-lg",
                !answered && "border-stone-300 focus:border-primary",
                answered && lastCorrect && "border-success bg-success/10 text-success-ink",
                answered && !lastCorrect && "border-danger bg-danger/10 text-red-800"
              )}
              placeholder="ex. ka"
            />
            {!answered && (
              <button type="submit" className="btn-primary" disabled={!typed.trim()}>
                Vérifier
              </button>
            )}
          </form>
        ) : (
          <div
            className={cn(
              "grid w-full gap-2 sm:gap-3",
              question.kind === "word" ? "max-w-md grid-cols-1 sm:grid-cols-2" : "max-w-md grid-cols-2"
            )}
          >
            {(question.kind === "choice" ? [...question.options] : [...question.options]).map((option: Kana | string, i) => {
              const id = typeof option === "string" ? option : option.id;
              const isRight = question.kind === "choice" ? id === question.target.id : id === question.word.romaji;
              const isPicked = picked === id;
              const glyphOption = question.kind === "choice" && question.mode !== "kana-romaji";
              return (
                <button
                  key={id}
                  type="button"
                  disabled={answered}
                  onClick={() => pickOption(i)}
                  className={cn(
                    "relative flex min-h-16 items-center justify-center rounded-xl border-2 px-3 py-3 font-medium transition-colors",
                    !answered && "border-stone-200 bg-white hover:border-primary/50 hover:bg-primary/5",
                    answered && isRight && "border-success bg-success/10 text-success-ink",
                    answered && isPicked && !isRight && "border-danger bg-danger/10 text-red-800",
                    answered && !isRight && !isPicked && "border-stone-100 text-stone-400"
                  )}
                >
                  <span className="absolute top-1 left-2 hidden text-[10px] text-stone-400 sm:inline">{i + 1}</span>
                  {typeof option === "string" ? (
                    <span className="text-lg">{option}</span>
                  ) : glyphOption ? (
                    <span lang={lang} className="chinese text-4xl leading-none">
                      {option.char}
                    </span>
                  ) : (
                    <span className="text-xl">{option.romaji}</span>
                  )}
                </button>
              );
            })}
          </div>
        )}

        {answered && (
          <div className="flex w-full max-w-md flex-col items-center gap-3" aria-live="polite">
            <p
              className={cn(
                "flex items-center gap-2 text-sm font-medium",
                lastCorrect ? "text-success-ink" : "text-red-800"
              )}
            >
              {lastCorrect ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
              {lastCorrect ? "Bravo !" : "Pas tout à fait."}
              <span className="text-stone-600">
                <span lang={lang} className="chinese">
                  {question.kind === "word" ? question.word.term : question.target.char}
                </span>{" "}
                se lit «{" "}
                {question.kind === "word" ? question.word.romaji : romajiLabel(question.target)} »
                {question.kind === "word" && <> ({question.word.french})</>}
              </span>
            </p>
            <button ref={nextRef} type="button" onClick={next} className="btn-primary gap-2">
              {index + 1 >= questions.length ? "Voir le résultat" : "Suivant"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/** Score screen shared by the lesson quiz and the free drill. */
export function QuizSummary({ results }: { results: QuizResult[] }) {
  const lang = useContentLang();
  const correct = results.filter((r) => r.correct).length;
  const pct = results.length > 0 ? Math.round((correct / results.length) * 100) : 0;
  const missed = [...new Map(results.filter((r) => !r.correct).map((r) => [r.target.id, r.target])).values()];

  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <p className="text-5xl font-bold text-stone-900 tabular-nums">{pct}%</p>
      <p className="text-stone-600">
        {correct} bonne{correct > 1 ? "s" : ""} réponse{correct > 1 ? "s" : ""} sur {results.length}
      </p>
      {missed.length > 0 ? (
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-stone-500">À revoir :</p>
          <ul className="flex flex-wrap justify-center gap-2">
            {missed.map((k) => (
              <li key={k.id} className="flex items-baseline gap-1.5 rounded-lg border border-stone-200 bg-white px-3 py-1.5">
                <span lang={lang} className="chinese text-2xl">
                  {k.char}
                </span>
                <span className="text-sm text-stone-600">{romajiLabel(k)}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        results.length > 0 && <p className="text-sm font-medium text-success-ink">Sans faute !</p>
      )}
    </div>
  );
}
