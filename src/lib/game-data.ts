import { allUnits } from "@/data/course";
import { lessons } from "@/data/lessons";

export interface GameWord {
  character: string;
  french: string;
  pinyin: string;
}

export function getAllGameWords(): GameWord[] {
  const words = new Map<string, GameWord>();

  for (const unit of allUnits) {
    for (const v of unit.vocabulary) {
      if (!words.has(v.character)) {
        words.set(v.character, {
          character: v.character,
          french: v.french,
          pinyin: v.pinyin,
        });
      }
    }
  }

  for (const lesson of lessons) {
    for (const v of lesson.vocabulary) {
      if (!words.has(v.character)) {
        words.set(v.character, {
          character: v.character,
          french: v.french,
          pinyin: v.pinyin,
        });
      }
    }
  }

  return [...words.values()];
}

export function getRandomWords(count: number): GameWord[] {
  const all = getAllGameWords();
  const shuffled = [...all].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
