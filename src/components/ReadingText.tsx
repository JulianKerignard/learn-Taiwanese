"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { cn } from "@/lib/cn";
import { speak } from "@/lib/tts";
import { createCard } from "@/lib/fsrs";
import { getCards, upsertCard, storageGet, storageSet, getSettings, KEYS } from "@/lib/storage";
import AudioButton from "@/components/AudioButton";
import RubyText from "@/components/RubyText";
import type { GradedText } from "@/data/readings";
import { Eye, EyeOff, ChevronLeft, ChevronRight, BookOpen, Plus, Volume2 } from "lucide-react";

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

function addToFlashcards(vocab: { character: string; pinyin: string; zhuyin?: string; french: string }): boolean {
  try {
    const existingCards = getCards();
    if (existingCards.some((c) => c.front === vocab.character)) return false;
    const card = createCard({
      id: `reading-${vocab.character}-${Date.now()}`,
      front: vocab.character,
      back: vocab.french,
      pinyin: vocab.pinyin,
      zhuyin: vocab.zhuyin || "",
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
  character: string;
  pinyin: string;
  zhuyin?: string;
  french: string;
  x: number;
  y: number;
}

function CharTooltip({
  data,
  displayMode,
  onAddFlashcard,
  onDismiss,
}: {
  data: TooltipData;
  displayMode: "pinyin" | "zhuyin" | "both";
  onAddFlashcard: (char: string, pinyin: string, french: string) => void;
  onDismiss: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ left: data.x, top: data.y });

  useEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    let left = data.x;
    let top = data.y;

    if (rect.right > window.innerWidth - 8) {
      left = window.innerWidth - rect.width - 8;
    }
    if (left < 8) left = 8;
    if (rect.bottom > window.innerHeight - 8) {
      top = data.y - rect.height - 40;
    }
    setPos({ left, top });
  }, [data.x, data.y]);

  const showPinyin = displayMode === "pinyin" || displayMode === "both";
  const showZhuyin = (displayMode === "zhuyin" || displayMode === "both") && data.zhuyin;

  return (
    <>
      {/* Transparent overlay to dismiss on touch/click outside */}
      <div className="fixed inset-0 z-[99]" onClick={onDismiss} />
      <div
        ref={ref}
        className="fixed z-[100] rounded-lg border border-stone-200 bg-white p-3 shadow-lg"
        style={{ left: pos.left, top: pos.top }}
      >
        <div className="flex items-center gap-2">
          <span className="chinese text-2xl font-medium text-stone-900">{data.character}</span>
          <AudioButton text={data.character} size="sm" />
        </div>
        {showPinyin && (
          <p className="mt-1 text-sm italic text-stone-500">{data.pinyin}</p>
        )}
        {showZhuyin && (
          <p className="mt-0.5 text-sm text-stone-400 chinese">{data.zhuyin}</p>
        )}
        <p className="text-sm text-stone-700">{data.french}</p>
        <button
          onClick={() => onAddFlashcard(data.character, data.pinyin, data.french)}
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
  reading: GradedText;
  onClose?: () => void;
}

export default function ReadingText({ reading, onClose }: ReadingTextProps) {
  const [showPinyin, setShowPinyin] = useState(false);
  const [sentenceMode, setSentenceMode] = useState(false);
  const [currentSentence, setCurrentSentence] = useState(0);
  const [revealedTranslations, setRevealedTranslations] = useState<Set<number>>(new Set());
  const [knownWords, setKnownWords] = useState<Set<string>>(new Set());
  const [tooltip, setTooltip] = useState<TooltipData | null>(null);
  const [flashcardAdded, setFlashcardAdded] = useState<string | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const tooltipTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const displayMode = getSettings().displayMode;

  useEffect(() => {
    setKnownWords(getKnownWords());
  }, []);

  // Detect touch device
  useEffect(() => {
    function onTouchStart() {
      setIsTouchDevice(true);
      window.removeEventListener("touchstart", onTouchStart);
    }
    window.addEventListener("touchstart", onTouchStart, { once: true });
    return () => window.removeEventListener("touchstart", onTouchStart);
  }, []);

  // Cleanup tooltip timeout on unmount
  useEffect(() => {
    return () => {
      if (tooltipTimeout.current) clearTimeout(tooltipTimeout.current);
    };
  }, []);

  // Optimized vocab lookup: character → vocab item (O(1) instead of O(n²))
  const vocabMap = useMemo(
    () => new Map(reading.vocabulary.map((v) => [v.character, v])),
    [reading.vocabulary]
  );

  // Reverse index: single char → vocab item (for character-level lookup)
  const charIndex = useMemo(() => {
    const map = new Map<string, (typeof reading.vocabulary)[0]>();
    for (const v of reading.vocabulary) {
      for (const ch of v.character) {
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
        character: match.character,
        pinyin: match.pinyin,
        zhuyin: match.zhuyin,
        french: match.french,
        x: rect.left,
        y: rect.bottom + 8,
      });
    },
    [findVocabForChar]
  );

  const handleCharInteraction = useCallback(
    (char: string, e: React.MouseEvent | React.TouchEvent) => {
      const rect = (e.currentTarget as HTMLSpanElement).getBoundingClientRect();
      showTooltipForChar(char, rect);
    },
    [showTooltipForChar]
  );

  const handleCharLeave = useCallback(() => {
    if (isTouchDevice) return; // Touch devices dismiss via overlay click
    tooltipTimeout.current = setTimeout(() => setTooltip(null), TOOLTIP_DISMISS_MS);
  }, [isTouchDevice]);

  const dismissTooltip = useCallback(() => {
    setTooltip(null);
  }, []);

  const handleAddFlashcard = useCallback(
    (character: string, pinyin: string, french: string) => {
      const vocab = vocabMap.get(character) || charIndex.get(character);
      const added = addToFlashcards({ character, pinyin, zhuyin: vocab?.zhuyin, french });
      if (added) {
        const updated = new Set(knownWords);
        updated.add(character);
        setKnownWords(updated);
        saveKnownWords(updated);
        setFlashcardAdded(character);
        setTimeout(() => setFlashcardAdded(null), FLASHCARD_TOAST_MS);
      }
    },
    [knownWords, vocabMap, charIndex]
  );

  const toggleTranslation = useCallback((idx: number) => {
    setRevealedTranslations((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  }, []);

  const isNewWord = useCallback(
    (char: string): boolean => {
      const vocab = charIndex.get(char);
      if (!vocab) return false;
      return vocab.isNew && !knownWords.has(vocab.character);
    },
    [knownWords, charIndex]
  );

  const getPinyinForChar = useCallback(
    (char: string): string => {
      const vocab = charIndex.get(char);
      if (!vocab) return "";
      const idx = vocab.character.indexOf(char);
      if (idx === -1) return vocab.pinyin;
      const syllables = vocab.pinyin.split(/[\s]+/);
      return syllables[idx] || vocab.pinyin;
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
              <h2 className="chinese text-xl font-bold text-stone-900">{reading.title}</h2>
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
            onClick={() => setShowPinyin(!showPinyin)}
            className={cn(
              "btn-secondary gap-1.5 text-xs",
              showPinyin && "border-primary text-primary"
            )}
          >
            {showPinyin ? <EyeOff size={14} /> : <Eye size={14} />}
            Pinyin
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
                onClick={() => speak(reading.sentences[currentSentence].chinese, SPEECH_RATE)}
                className="btn-secondary gap-1.5 text-xs"
              >
                <Volume2 size={14} />
                Écouter
              </button>
            </div>

            <div className="min-h-[120px]">
              <div className="chinese text-2xl leading-relaxed tracking-wide text-stone-900">
                <RubyText
                  chinese={reading.sentences[currentSentence].chinese}
                  pinyin={reading.sentences[currentSentence].pinyin}
                  showPinyin={showPinyin}
                  pinyinSize="sm"
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
              onMouseLeave={handleCharLeave}
            >
              {reading.text.split("").map((char, i) => {
                const isChinese = /[\u4e00-\u9fff\u3400-\u4dbf]/.test(char);
                if (!isChinese) {
                  return <span key={i}>{char}</span>;
                }

                const isNew = isNewWord(char);
                const partOfVocab = charIndex.has(char);

                return (
                  <span
                    key={i}
                    className={cn(
                      "cursor-pointer rounded transition-colors",
                      partOfVocab && "hover:bg-primary/10",
                      isNew && "bg-amber-50 text-amber-900"
                    )}
                    onMouseEnter={isTouchDevice ? undefined : (e) => handleCharInteraction(char, e)}
                    onClick={isTouchDevice ? (e) => handleCharInteraction(char, e) : undefined}
                  >
                    {showPinyin ? (
                      <RubyText
                        chinese={char}
                        pinyin={getPinyinForChar(char)}
                        showPinyin={showPinyin}
                        pinyinSize="xs"
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
              <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-wider">
                Phrases
              </h3>
              {reading.sentences.map((s, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-lg p-3 hover:bg-stone-50 transition-colors"
                >
                  <AudioButton text={s.chinese} size="sm" />
                  <div className="flex-1">
                    <p className="chinese text-base text-stone-900">{s.chinese}</p>
                    {showPinyin && (
                      <p className="text-xs italic text-stone-400">{s.pinyin}</p>
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
          <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-3">
            Vocabulaire
          </h3>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {reading.vocabulary.map((v) => (
              <div
                key={v.character}
                className={cn(
                  "flex items-center gap-2 rounded-lg border p-2 text-sm transition-colors",
                  v.isNew && !knownWords.has(v.character)
                    ? "border-amber-200 bg-amber-50"
                    : "border-stone-100 bg-white"
                )}
              >
                <AudioButton text={v.character} size="sm" />
                <div className="min-w-0 flex-1">
                  <span className="chinese font-medium text-stone-900">{v.character}</span>
                  {(displayMode === "pinyin" || displayMode === "both") && (
                    <span className="ml-1 text-xs text-stone-400 italic">{v.pinyin}</span>
                  )}
                  {(displayMode === "zhuyin" || displayMode === "both") && v.zhuyin && (
                    <span className="ml-1 text-xs text-stone-400 chinese">{v.zhuyin}</span>
                  )}
                  <p className="truncate text-xs text-stone-500">{v.french}</p>
                </div>
                {v.isNew && !knownWords.has(v.character) && (
                  <button
                    onClick={() => handleAddFlashcard(v.character, v.pinyin, v.french)}
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
            <h3 className="text-sm font-semibold text-accent mb-1">Note culturelle</h3>
            <p className="text-sm text-stone-600 leading-relaxed">{reading.culturalNote}</p>
          </div>
        )}
      </div>

      {/* Tooltip */}
      {tooltip && (
        <CharTooltip
          data={tooltip}
          displayMode={displayMode}
          onAddFlashcard={handleAddFlashcard}
          onDismiss={dismissTooltip}
        />
      )}
    </div>
  );
}
