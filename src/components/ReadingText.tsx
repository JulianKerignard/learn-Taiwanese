"use client";

import { useState, useEffect, useLayoutEffect, useRef, useCallback, useMemo } from "react";
import { cn } from "@/lib/cn";
import { speak } from "@/lib/tts";
import { createCard } from "@/lib/fsrs";
import { getCards, upsertCard, storageGet, storageSet, getSettings, KEYS } from "@/lib/storage";
import AudioButton from "@/components/AudioButton";
import RubyText from "@/components/RubyText";
import { LANGUAGES, type LanguageSegment } from "@/lib/language";
import { Eye, EyeOff, ChevronLeft, ChevronRight, BookOpen, Plus, Volume2 } from "lucide-react";
import type { Segment } from "@/types";
import { useClientState } from "@/lib/use-client-state";

// ─── The shape this renderer needs ───

/**
 * A graded text as the renderer reads it, in either edition.
 *
 * Each corpus declares its own richer version — the Japanese one carries kana
 * readings and furigana `segments`, the Mandarin one does not — so the props
 * describe the subset both satisfy. Importing @/data/<lang>/readings here would
 * both tie the component to one edition and drag a corpus into the bundle.
 */
export interface ReadingVocabulary {
  term: string;
  reading: string;
  romanization: string;
  french: string;
  isNew: boolean;
  /** Ruby placement, when the reading does not distribute over the characters. */
  segments?: Segment[];
}

export interface ReadingSentence {
  native: string;
  romanization: string;
  french: string;
  reading?: string;
  segments?: Segment[];
}

export interface GradedText {
  id: string;
  level: 1 | 2 | 3;
  title: string;
  titleFr: string;
  text: string;
  sentences: ReadingSentence[];
  vocabulary: ReadingVocabulary[];
  culturalNote?: string;
}

// ─── Constants ───

const KNOWN_WORDS_KEY = KEYS.readingKnownWords;
const TOOLTIP_DISMISS_MS = 200;
const FLASHCARD_TOAST_MS = 2000;
const SPEECH_RATE = 0.75;

// ─── localStorage helpers ───

function getKnownWords(): Set<string> {
  const arr = storageGet<string[]>(KNOWN_WORDS_KEY, []);
  return new Set(arr);
}

function saveKnownWords(words: Set<string>) {
  storageSet(KNOWN_WORDS_KEY, [...words]);
}

function addToFlashcards(vocab: { term: string; romanization: string; reading?: string; french: string }): boolean {
  try {
    const existingCards = getCards();
    if (existingCards.some((c) => c.front === vocab.term)) return false;
    const card = createCard({
      id: `reading-${vocab.term}-${Date.now()}`,
      front: vocab.term,
      back: vocab.french,
      romanization: vocab.romanization,
      reading: vocab.reading || "",
      type: "vocabulary",
    });
    upsertCard(card);
    return true;
  } catch {
    return false;
  }
}

// ─── Tooltip ───

interface TooltipData {
  term: string;
  romanization: string;
  reading?: string;
  french: string;
  x: number;
  y: number;
}

function CharTooltip({
  data,
  displayMode,
  contentLang,
  onAddFlashcard,
  onPointerEnter,
  onPointerLeave,
}: {
  data: TooltipData;
  displayMode: "romanization" | "reading" | "both";
  contentLang: string;
  onAddFlashcard: (char: string, romanization: string, french: string) => void;
  onPointerEnter: () => void;
  onPointerLeave: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // Placed before paint, straight on the node: measuring in a passive effect
  // showed the tooltip at its raw position for a frame, then made it jump.
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    let left = data.x;
    let top = data.y;
    if (left + rect.width > window.innerWidth - 8) left = window.innerWidth - rect.width - 8;
    if (left < 8) left = 8;
    if (top + rect.height > window.innerHeight - 8) top = data.y - rect.height - 40;
    if (top < 8) top = 8;
    el.style.left = `${left}px`;
    el.style.top = `${top}px`;
    el.style.visibility = "visible";
  }, [data]);

  const showReading = displayMode === "romanization" || displayMode === "both";
  const showZhuyin = (displayMode === "reading" || displayMode === "both") && data.reading;

  return (
    <>
      <div
        ref={ref}
        data-reading-tooltip
        role="tooltip"
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        className="invisible fixed z-[100] max-w-[calc(100vw-16px)] rounded-lg border border-stone-200 bg-white p-3 shadow-lg"
        style={{ left: data.x, top: data.y }}
      >
        <div className="flex items-center gap-2">
          <span className="chinese text-2xl font-medium text-stone-900" lang={contentLang}>
            {showZhuyin && data.reading ? (
              <RubyText
                native={data.term}
                romanization={data.reading}
                showReading
                mode="reading"
                readingSize="sm"
              />
            ) : (
              data.term
            )}
          </span>
          <AudioButton text={data.term} size="sm" />
        </div>
        {showReading && (
          <p className="mt-1 text-sm italic text-stone-500">{data.romanization}</p>
        )}
        <p className="text-sm text-stone-700">{data.french}</p>
        <button
          onClick={() => onAddFlashcard(data.term, data.romanization, data.french)}
          className="mt-2 flex items-center gap-1 rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary hover:bg-primary/20 transition-colors"
        >
          <Plus size={12} />
          Ajouter aux flashcards
        </button>
      </div>
    </>
  );
}

// ─── Main component ───

interface ReadingTextProps {
  /** Edition being read: it sets the content language and the reading's name. */
  lang: LanguageSegment;
  reading: GradedText;
  onClose?: () => void;
}

const NO_KNOWN_WORDS = new Set<string>();

export default function ReadingText({ lang, reading, onClose }: ReadingTextProps) {
  const [showReading, setShowReading] = useState(false);
  const [sentenceMode, setSentenceMode] = useState(false);
  const [currentSentence, setCurrentSentence] = useState(0);
  const [revealedTranslations, setRevealedTranslations] = useState<Set<number>>(new Set());
  const [knownWords, setKnownWords] = useClientState(getKnownWords, NO_KNOWN_WORDS);
  const [tooltip, setTooltip] = useState<TooltipData | null>(null);
  const [flashcardAdded, setFlashcardAdded] = useState<string | null>(null);
  const tooltipTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const language = LANGUAGES[lang];
  const displayMode = getSettings().displayMode;

  // Cleanup tooltip timeout on unmount
  useEffect(() => {
    return () => {
      if (tooltipTimeout.current) clearTimeout(tooltipTimeout.current);
    };
  }, []);

  // Optimized vocab lookup: term → vocab item (O(1) instead of O(n²))
  const vocabMap = useMemo(
    () => new Map(reading.vocabulary.map((v) => [v.term, v])),
    [reading.vocabulary]
  );

  // Reverse index: single char → vocab item (for term-level lookup)
  const charIndex = useMemo(() => {
    const map = new Map<string, GradedText["vocabulary"][number]>();
    for (const v of reading.vocabulary) {
      for (const ch of v.term) {
        if (!map.has(ch)) map.set(ch, v);
      }
    }
    return map;
  }, [reading.vocabulary]);

  const findVocabForChar = useCallback(
    (char: string) => vocabMap.get(char) || charIndex.get(char) || null,
    [vocabMap, charIndex]
  );

  const showTooltipForChar = useCallback(
    (char: string, rect: DOMRect) => {
      if (tooltipTimeout.current) clearTimeout(tooltipTimeout.current);
      const match = findVocabForChar(char);
      if (!match) return;

      setTooltip({
        term: match.term,
        romanization: match.romanization,
        reading: match.reading,
        french: match.french,
        x: rect.left,
        y: rect.bottom + 8,
      });
    },
    [findVocabForChar]
  );

  // A mouse opens the tooltip on hover; a tap or a click opens it on click.
  // The pointer type is read per event rather than guessed once per page: a
  // laptop with a touch screen uses both, and the old "touch seen yet?" flag was
  // still false during the very first tap.
  const handleCharHover = useCallback(
    (char: string, e: React.PointerEvent<HTMLSpanElement>) => {
      if (e.pointerType !== "mouse") return;
      showTooltipForChar(char, e.currentTarget.getBoundingClientRect());
    },
    [showTooltipForChar]
  );

  const handleCharClick = useCallback(
    (char: string, e: React.MouseEvent<HTMLSpanElement>) => {
      showTooltipForChar(char, e.currentTarget.getBoundingClientRect());
    },
    [showTooltipForChar]
  );

  const scheduleDismiss = useCallback((e?: React.PointerEvent) => {
    if (e && e.pointerType !== "mouse") return; // taps dismiss by tapping elsewhere
    if (tooltipTimeout.current) clearTimeout(tooltipTimeout.current);
    tooltipTimeout.current = setTimeout(() => setTooltip(null), TOOLTIP_DISMISS_MS);
  }, []);

  const cancelDismiss = useCallback(() => {
    if (tooltipTimeout.current) clearTimeout(tooltipTimeout.current);
  }, []);

  // While open: a press outside the text and the tooltip, Escape, or a scroll
  // (the tooltip is fixed and would stay behind while the text moves) closes it.
  const tooltipOpen = tooltip !== null;
  useEffect(() => {
    if (!tooltipOpen) return;
    const close = () => setTooltip(null);
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Element | null;
      if (target?.closest("[data-reading-tooltip], [data-reading-char]")) return;
      close();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    window.addEventListener("scroll", close, { passive: true });
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", close);
    };
  }, [tooltipOpen]);

  const handleAddFlashcard = useCallback(
    (term: string, romanization: string, french: string) => {
      const vocab = vocabMap.get(term) || charIndex.get(term);
      const added = addToFlashcards({ term, romanization, reading: vocab?.reading, french });
      if (added) {
        const updated = new Set(knownWords);
        updated.add(term);
        setKnownWords(updated);
        saveKnownWords(updated);
        setFlashcardAdded(term);
        setTimeout(() => setFlashcardAdded(null), FLASHCARD_TOAST_MS);
      }
    },
    [knownWords, setKnownWords, vocabMap, charIndex]
  );

  const toggleTranslation = useCallback((idx: number) => {
    setRevealedTranslations((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  }, []);

  /** The syllable of a word's romanization that belongs to one of its characters. */
  const romanizationForChar = useCallback(
    (char: string): string => {
      const vocab = charIndex.get(char);
      if (!vocab) return "";
      const idx = vocab.term.indexOf(char);
      if (idx === -1) return vocab.romanization;
      const syllables = vocab.romanization.split(/[\s]+/);
      return syllables[idx] || vocab.romanization;
    },
    [charIndex]
  );

  const levelColor = {
    1: "bg-green-100 text-green-700",
    2: "bg-amber-100 text-amber-700",
    3: "bg-red-100 text-red-700",
  }[reading.level];

  return (
    <div className="rounded-xl border border-stone-200 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-stone-100 px-6 py-4">
        <div className="flex items-center gap-3">
          {onClose && (
            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-stone-400 hover:bg-stone-100 hover:text-stone-600 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
          )}
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-title font-bold chinese text-stone-900" lang={language.contentLang}>
                {reading.title}
              </h2>
              <span className={cn("badge", levelColor)}>Niveau {reading.level}</span>
            </div>
            <p className="text-sm text-stone-500">{reading.titleFr}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSentenceMode(!sentenceMode)}
            className={cn(
              "btn-secondary gap-1.5 text-xs",
              sentenceMode && "border-primary text-primary"
            )}
          >
            <BookOpen size={14} />
            {sentenceMode ? "Mode texte" : "Phrase par phrase"}
          </button>
          <button
            onClick={() => setShowReading(!showReading)}
            className={cn(
              "btn-secondary gap-1.5 text-xs",
              showReading && "border-primary text-primary"
            )}
          >
            {showReading ? <EyeOff size={14} /> : <Eye size={14} />}
            <span className="capitalize">{language.copy.readingPrimary}</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="relative px-6 py-6">
        {/* Flash notification */}
        {flashcardAdded && (
          <div className="absolute top-2 right-6 rounded-lg bg-success/10 px-3 py-1.5 text-sm font-medium text-success">
            {flashcardAdded} ajouté aux flashcards
          </div>
        )}

        {sentenceMode ? (
          /* ─── Sentence mode ─── */
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-stone-400">
                Phrase {currentSentence + 1} / {reading.sentences.length}
              </span>
              <button
                onClick={() => speak(reading.sentences[currentSentence].native, SPEECH_RATE)}
                className="btn-secondary gap-1.5 text-xs"
              >
                <Volume2 size={14} />
                Écouter
              </button>
            </div>

            <div className="min-h-[120px]">
              <div className="chinese text-2xl leading-relaxed tracking-wide text-stone-900" lang={language.contentLang}>
                <RubyText
                  native={reading.sentences[currentSentence].native}
                  romanization={reading.sentences[currentSentence].romanization}
                  showReading={showReading}
                  readingSize="sm"
                  charSize="text-2xl"
                />
              </div>

              <button
                onClick={() => toggleTranslation(currentSentence)}
                className="mt-4 text-sm text-stone-400 hover:text-stone-600 transition-colors"
              >
                {revealedTranslations.has(currentSentence)
                  ? reading.sentences[currentSentence].french
                  : "Cliquer pour voir la traduction"}
              </button>
            </div>

            <div className="flex items-center justify-between border-t border-stone-100 pt-4">
              <button
                onClick={() => setCurrentSentence(Math.max(0, currentSentence - 1))}
                disabled={currentSentence === 0}
                className="btn-secondary text-xs disabled:opacity-30"
              >
                <ChevronLeft size={16} />
                Précédent
              </button>
              <div className="flex gap-1">
                {reading.sentences.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSentence(i)}
                    aria-label={`Phrase ${i + 1}`}
                    className={cn(
                      "h-2 w-2 rounded-full transition-colors",
                      i === currentSentence ? "bg-primary" : "bg-stone-200"
                    )}
                  />
                ))}
              </div>
              <button
                onClick={() =>
                  setCurrentSentence(Math.min(reading.sentences.length - 1, currentSentence + 1))
                }
                disabled={currentSentence === reading.sentences.length - 1}
                className="btn-secondary text-xs disabled:opacity-30"
              >
                Suivant
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        ) : (
          /* ─── Full text mode ─── */
          <div>
            <div
              className="chinese text-2xl leading-[2.5] tracking-wide text-stone-900"
              lang={language.contentLang}
              onPointerLeave={scheduleDismiss}
            >
              {reading.text.split("").map((char, i) => {
                const isIdeograph = /[\u4e00-\u9fff\u3400-\u4dbf]/.test(char);
                if (!isIdeograph) {
                  return <span key={i}>{char}</span>;
                }

                const vocab = charIndex.get(char);
                const isNew = vocab !== undefined && vocab.isNew && !knownWords.has(vocab.term);
                // A reading that needs `segments` does not distribute over the
                // characters — one kanji can carry three kana — so it is never
                // stretched over a single one. The word stays readable, it just
                // goes unannotated here; the vocabulary list below has the ruby.
                const annotate = showReading && vocab !== undefined && !vocab.segments;

                return (
                  <span
                    key={i}
                    className={cn(
                      "cursor-pointer rounded transition-colors",
                      vocab !== undefined && "hover:bg-primary/10",
                      isNew && "bg-amber-50 text-amber-900"
                    )}
                    data-reading-char
                    onPointerEnter={(e) => handleCharHover(char, e)}
                    onClick={(e) => handleCharClick(char, e)}
                  >
                    {annotate ? (
                      <RubyText
                        native={char}
                        romanization={romanizationForChar(char)}
                        showReading={showReading}
                        readingSize="xs"
                      />
                    ) : (
                      char
                    )}
                  </span>
                );
              })}
            </div>

            {/* Sentence breakdown */}
            <div className="mt-8 space-y-3 border-t border-stone-100 pt-6">
              <h3 className="text-sm font-bold text-stone-500 uppercase tracking-wider">
                Phrases
              </h3>
              {reading.sentences.map((s, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-lg p-3 hover:bg-stone-50 transition-colors"
                >
                  <AudioButton text={s.native} size="sm" />
                  <div className="flex-1">
                    <p className="chinese text-base text-stone-900" lang={language.contentLang}>{s.native}</p>
                    {showReading && (
                      <p className="text-xs italic text-stone-500">{s.romanization}</p>
                    )}
                    <button
                      onClick={() => toggleTranslation(i)}
                      className="mt-1 text-sm text-stone-400 hover:text-stone-600 transition-colors"
                    >
                      {revealedTranslations.has(i) ? s.french : "Voir la traduction..."}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Vocabulary */}
        <div className="mt-8 border-t border-stone-100 pt-6">
          <h3 className="text-sm font-bold text-stone-500 uppercase tracking-wider mb-3">
            Vocabulaire
          </h3>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {reading.vocabulary.map((v) => (
              <div
                key={v.term}
                className={cn(
                  "flex items-center gap-2 rounded-lg border p-2 text-sm transition-colors",
                  v.isNew && !knownWords.has(v.term)
                    ? "border-amber-200 bg-amber-50"
                    : "border-stone-100 bg-white"
                )}
              >
                <AudioButton text={v.term} size="sm" />
                <div className="min-w-0 flex-1">
                  <span className="chinese font-medium text-stone-900" lang={language.contentLang}>
                    {(displayMode === "reading" || displayMode === "both") && v.reading ? (
                      <RubyText
                        native={v.term}
                        romanization={v.reading}
                        showReading
                        mode="reading"
                        readingSize="sm"
                      />
                    ) : (
                      v.term
                    )}
                  </span>
                  {(displayMode === "romanization" || displayMode === "both") && (
                    <span className="ml-1 text-xs text-stone-500 italic">{v.romanization}</span>
                  )}
                  <p className="truncate text-xs text-stone-500">{v.french}</p>
                </div>
                {v.isNew && !knownWords.has(v.term) && (
                  <button
                    onClick={() => handleAddFlashcard(v.term, v.romanization, v.french)}
                    className="shrink-0 rounded p-1 text-primary hover:bg-primary/10 transition-colors"
                    title="Ajouter aux flashcards"
                  >
                    <Plus size={14} />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Cultural note */}
        {reading.culturalNote && (
          <div className="mt-6 rounded-lg bg-accent/5 border border-accent/20 p-4">
            <h3 className="text-sm font-bold text-accent-ink mb-1">Note culturelle</h3>
            <p className="text-sm text-stone-600 leading-relaxed">{reading.culturalNote}</p>
          </div>
        )}
      </div>

      {/* Tooltip */}
      {tooltip && (
        <CharTooltip
          data={tooltip}
          displayMode={displayMode}
          contentLang={language.contentLang}
          onAddFlashcard={handleAddFlashcard}
          onPointerEnter={cancelDismiss}
          onPointerLeave={() => scheduleDismiss()}
        />
      )}
    </div>
  );
}
