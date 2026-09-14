"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { getRandomWords, type GameWord } from "@/lib/game-data";
import AudioButton from "@/components/AudioButton";
import { LANGUAGES, langHref, type LanguageSegment } from "@/lib/language";

interface Card {
  id: number;
  pairId: number;
  text: string;
  type: "term" | "french";
  word: GameWord;
  flipped: boolean;
  matched: boolean;
}

function buildCards(words: GameWord[]): Card[] {
  const cards: Card[] = [];
  words.forEach((word, i) => {
    cards.push({
      id: i * 2,
      pairId: i,
      text: word.term,
      type: "term",
      word,
      flipped: false,
      matched: false,
    });
    cards.push({
      id: i * 2 + 1,
      pairId: i,
      text: word.french,
      type: "french",
      word,
      flipped: false,
      matched: false,
    });
  });
  // Fisher-Yates shuffle
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

const PAIR_COUNT = 6;

// The word pool arrives as a prop: see ./page.tsx.
export default function MatchingContent({
  lang,
  title,
  words: pool,
}: {
  lang: LanguageSegment;
  title: string;
  words: GameWord[];
}) {
  const language = LANGUAGES[lang];

  const [words, setWords] = useState<GameWord[]>([]);
  const [cards, setCards] = useState<Card[]>([]);
  const [selected, setSelected] = useState<number[]>([]);
  const [attempts, setAttempts] = useState(0);
  const [startTime, setStartTime] = useState<number>(0);
  const [elapsed, setElapsed] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showRomanization, setShowRomanization] = useState(true);
  const locked = useRef(false);
  /** Pairs already found. A ref, not state: nothing renders it. */
  const matched = useRef(0);

  const initGame = useCallback(() => {
    const w = getRandomWords(pool, PAIR_COUNT);
    setWords(w);
    setCards(buildCards(w));
    setSelected([]);
    setAttempts(0);
    matched.current = 0;
    setStartTime(Date.now());
    setElapsed(0);
    setFinished(false);
    locked.current = false;
  }, [pool]);

  // The draw is random and the clock starts now: both wait for the client.
  useEffect(() => {
    initGame();
  }, [initGame]);

  useEffect(() => {
    if (finished || startTime === 0) return;
    const interval = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [startTime, finished]);

  function handleCardClick(cardId: number) {
    if (locked.current) return;
    const card = cards.find((c) => c.id === cardId);
    if (!card || card.flipped || card.matched) return;
    if (selected.includes(cardId)) return;

    const newSelected = [...selected, cardId];
    setCards((prev) =>
      prev.map((c) => (c.id === cardId ? { ...c, flipped: true } : c))
    );
    setSelected(newSelected);

    if (newSelected.length === 2) {
      locked.current = true;
      setAttempts((a) => a + 1);
      const [firstId, secondId] = newSelected;
      const first = cards.find((c) => c.id === firstId)!;
      const second = cards.find((c) => c.id === secondId)!;

      if (first.pairId === second.pairId) {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              c.pairId === first.pairId ? { ...c, matched: true, flipped: true } : c
            )
          );
          setSelected([]);
          locked.current = false;
          matched.current += 1;
          if (matched.current === PAIR_COUNT) setFinished(true);
        }, 400);
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              newSelected.includes(c.id) ? { ...c, flipped: false } : c
            )
          );
          setSelected([]);
          locked.current = false;
        }, 1000);
      }
    }
  }

  const formatTime = (s: number) =>
    `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

  if (words.length === 0) {
    return (
      <div className="mx-auto max-w-4xl py-12 text-center">
        <p className="text-stone-500">Chargement...</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <Link
          href={langHref(lang, "/games")}
          className="text-sm text-stone-400 hover:text-stone-600 transition-colors"
        >
          &larr; Retour aux jeux
        </Link>
        <div className="flex items-center gap-4 text-sm text-stone-600">
          <label className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={showRomanization}
              onChange={(e) => setShowRomanization(e.target.checked)}
              className="rounded"
            />
            {language.copy.readingPrimary}
          </label>
          <span>
            Tentatives : <strong>{attempts}</strong>
          </span>
          <span>
            Temps : <strong>{formatTime(elapsed)}</strong>
          </span>
        </div>
      </div>

      <h1 className="text-display font-bold mb-6 text-center text-stone-900">{title}</h1>

      {finished ? (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
          <div className="mb-2 text-4xl" aria-hidden>&#127881;</div>
          <h2 className="text-title font-bold mb-2 text-emerald-700">Bravo !</h2>
          <p className="mb-1 text-stone-600">
            {PAIR_COUNT} paires trouvées en <strong>{attempts}</strong> tentatives
          </p>
          <p className="mb-6 text-stone-600">
            Temps : <strong>{formatTime(elapsed)}</strong>
          </p>
          <button
            onClick={initGame}
            className="rounded-xl bg-primary px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary/90"
          >
            Rejouer
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
          {cards.map((card) => (
            <button
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              className="relative aspect-[3/4] [perspective:600px]"
            >
              <div
                className={`absolute inset-0 transition-transform duration-500 [transform-style:preserve-3d] ${
                  card.flipped || card.matched ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                {/* Face cachée */}
                <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-md [backface-visibility:hidden]">
                  <span className="text-2xl font-bold text-white/80">?</span>
                </div>

                {/* Face visible */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center rounded-xl border-2 shadow-md [backface-visibility:hidden] [transform:rotateY(180deg)] ${
                    card.matched ? "border-emerald-300 bg-emerald-50" : "border-stone-200 bg-white"
                  }`}
                >
                  <span
                    className={`text-center font-bold leading-tight ${
                      card.type === "term"
                        ? "chinese text-2xl text-stone-900"
                        : "text-sm text-stone-700"
                    }`}
                    lang={card.type === "term" ? language.contentLang : undefined}
                  >
                    {card.text}
                  </span>
                  {card.type === "term" && (card.flipped || card.matched) && (
                    <div className="mt-1 flex flex-col items-center gap-0.5">
                      {showRomanization && (
                        <span className="text-xs text-stone-500 italic">
                          {card.word.romanization}
                        </span>
                      )}
                      <AudioButton text={card.word.term} size="sm" />
                    </div>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
