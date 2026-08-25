import { allUnits } from "@/data/course";
import { lessons } from "@/data/lessons";

export interface GameWord {
  term: string;
  kana: string;
  french: string;
  romaji: string;
}

let _cachedWords: GameWord[] | null = null;

export function getAllGameWords(): GameWord[] {
  if (_cachedWords) return _cachedWords;

  const words = new Map<string, GameWord>();

  for (const unit of allUnits) {
    for (const v of unit.vocabulary) {
      if (!words.has(v.term)) {
        words.set(v.term, {
          term: v.term,
          kana: v.kana,
          french: v.french,
          romaji: v.romaji,
        });
      }
    }
  }

  for (const lesson of lessons) {
    for (const v of lesson.vocabulary) {
      if (!words.has(v.term)) {
        words.set(v.term, {
          term: v.term,
          kana: v.kana,
          french: v.french,
          romaji: v.romaji,
        });
      }
    }
  }

  _cachedWords = [...words.values()];
  return _cachedWords;
}

export function getRandomWords(count: number): GameWord[] {
  const all = getAllGameWords();
  const shuffled = [...all];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}
