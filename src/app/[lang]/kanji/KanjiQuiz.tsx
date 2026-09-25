"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, X } from "lucide-react";
import ProgressBar from "@/components/ProgressBar";
import { useContentLang } from "@/components/ContentLanguage";
import { cn } from "@/lib/cn";
import { speak } from "@/lib/tts";
import type { Kanji } from "@/types/kanji";
import { BLANK, blanked, meaningLabel, type Question } from "./kanji-ui";
import { Furigana } from "./KanjiParts";

export interface QuizResult {
  target: Kanji;
  correct: boolean;
}

const PROMPTS: Record<Question["kind"], string> = {
  meaning: "Que signifie ce kanji ?",
  reading: "Comment se lit ce mot ?",
  word: "Quel kanji manque dans ce mot ?",
};

/** Option ids: the kanji for "meaning" and "word", the reading for "reading". */
function optionIds(q: Question): string[] {
  return q.kind === "reading" ? q.options : q.options.map((k) => k.char);
}

const rightId = (q: Question) => (q.kind === "reading" ? q.word.reading : q.target.char);

/**
 * Runs a list of kanji questions with immediate feedback. Every answer is
 * reported through `onAnswer` as it happens, so mastery is saved even if the
 * learner leaves halfway. Keyboard: 1–4 pick an option, Enter moves on.
 */
export default function KanjiQuiz({
  questions,
  onAnswer,
  onFinish,
}: {
  questions: Question[];
  onAnswer: (char: string, correct: boolean) => void;
  onFinish: (results: QuizResult[]) => void;
}) {
  const lang = useContentLang();
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [results, setResults] = useState<QuizResult[]>([]);
  const nextRef = useRef<HTMLButtonElement>(null);

  const question = questions[index];
  const answered = picked !== null;
  const lastCorrect = answered ? results[results.length - 1]?.correct : false;

  function pickOption(i: number) {
    if (answered || !question) return;
    const id = optionIds(question)[i];
    if (id === undefined) return;
    const correct = id === rightId(question);
    setPicked(id);
    setResults((prev) => [...prev, { target: question.target, correct }]);
    onAnswer(question.target.char, correct);
    // Hearing the word after answering ties the sound to the characters.
    if (question.kind !== "meaning") speak(question.word.term).catch(() => {});
  }

  function next() {
    if (index + 1 >= questions.length) {
      onFinish(results);
      return;
    }
    setIndex(index + 1);
    setPicked(null);
  }

  useEffect(() => {
    if (answered) nextRef.current?.focus();
  }, [answered]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const tag = (e.target as HTMLElement | null)?.tagName;
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
  const ids = optionIds(question);
  const right = rightId(question);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <ProgressBar value={index + (answered ? 1 : 0)} max={questions.length} className="flex-1" />
        <span className="shrink-0 text-xs text-stone-500 tabular-nums">
          {index + 1} / {questions.length}
        </span>
      </div>

      <div className="card flex flex-col items-center gap-4 p-5 text-center sm:p-8">
        <p className="text-sm font-medium text-stone-500">{PROMPTS[question.kind]}</p>

        {question.kind === "meaning" && (
          <span lang={lang} className="chinese text-8xl leading-none text-stone-900 sm:text-9xl">
            {question.target.char}
          </span>
        )}
        {question.kind === "reading" && (
          <span className="flex flex-col items-center gap-1">
            <span lang={lang} className="chinese text-5xl leading-tight break-all text-stone-900 sm:text-6xl">
              {question.word.term}
            </span>
            <span className="text-sm text-stone-500">{question.word.french}</span>
          </span>
        )}
        {question.kind === "word" && (
          <span className="flex flex-col items-center gap-1">
            <span lang={lang} className="chinese text-5xl leading-tight break-all text-stone-900 sm:text-6xl">
              {answered ? (
                <Furigana segments={question.word.segments} highlight={question.target.char} rtClassName="text-[0.35em]" />
              ) : (
                [...blanked(question.word, question.target.char)].map((c, i) =>
                  c === BLANK ? (
                    <span key={i} className="text-primary/60" aria-label="kanji manquant">
                      {c}
                    </span>
                  ) : (
                    <span key={i}>{c}</span>
                  )
                )
              )}
            </span>
            <span className="text-sm text-stone-600">
              <span lang={lang} className="chinese">
                {question.word.reading}
              </span>{" "}
              · {question.word.french}
            </span>
          </span>
        )}

        <div
          className={cn(
            "grid w-full max-w-md gap-2 sm:gap-3",
            question.kind === "word" ? "grid-cols-2" : "grid-cols-1 sm:grid-cols-2"
          )}
        >
          {ids.map((id, i) => {
            const isRight = id === right;
            const isPicked = picked === id;
            const kanji = question.kind === "reading" ? null : question.options[i];
            return (
              <button
                key={id}
                type="button"
                disabled={answered}
                onClick={() => pickOption(i)}
                className={cn(
                  "relative flex min-h-14 items-center justify-center rounded-xl border-2 px-3 py-3 font-medium transition-colors",
                  !answered && "border-stone-200 bg-white hover:border-primary/50 hover:bg-primary/5",
                  answered && isRight && "border-success bg-success/10 text-success-ink",
                  answered && isPicked && !isRight && "border-danger bg-danger/10 text-red-800",
                  answered && !isRight && !isPicked && "border-stone-100 text-stone-400"
                )}
              >
                <span className="absolute top-1 left-2 hidden text-[10px] text-stone-400 sm:inline">{i + 1}</span>
                {question.kind === "reading" ? (
                  <span lang={lang} className="chinese text-xl">
                    {id}
                  </span>
                ) : question.kind === "word" ? (
                  <span lang={lang} className="chinese text-4xl leading-none">
                    {id}
                  </span>
                ) : (
                  <span className="text-base">{kanji && meaningLabel(kanji)}</span>
                )}
              </button>
            );
          })}
        </div>

        {answered && (
          <div className="flex w-full max-w-md flex-col items-center gap-3" aria-live="polite">
            <p
              className={cn(
                "flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm font-medium",
                lastCorrect ? "text-success-ink" : "text-red-800"
              )}
            >
              {lastCorrect ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
              {lastCorrect ? "Bravo !" : "Pas tout à fait."}
              <span className="text-stone-600">
                {question.kind === "meaning" ? (
                  <>
                    <span lang={lang} className="chinese">
                      {question.target.char}
                    </span>{" "}
                    signifie « {meaningLabel(question.target, 3)} »
                  </>
                ) : (
                  <>
                    <span lang={lang} className="chinese">
                      {question.word.term}
                    </span>{" "}
                    se lit «{" "}
                    <span lang={lang} className="chinese">
                      {question.word.reading}
                    </span>{" "}
                    » ({question.word.romanization}), {question.word.french}
                  </>
                )}
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

/** Score screen shared by the lesson quiz and the drill. */
export function QuizSummary({ results }: { results: QuizResult[] }) {
  const lang = useContentLang();
  const correct = results.filter((r) => r.correct).length;
  const pct = results.length > 0 ? Math.round((correct / results.length) * 100) : 0;
  const missed = [...new Map(results.filter((r) => !r.correct).map((r) => [r.target.char, r.target])).values()];

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
              <li key={k.char} className="flex items-baseline gap-1.5 rounded-lg border border-stone-200 bg-white px-3 py-1.5">
                <span lang={lang} className="chinese text-2xl">
                  {k.char}
                </span>
                <span className="text-sm text-stone-600">{meaningLabel(k)}</span>
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
