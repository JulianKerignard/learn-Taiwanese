import { gameWords, type GameWord } from "@/data/game-words";

export type { GameWord };

/**
 * Word pool shared by the three mini-games.
 *
 * Reads the pre-extracted list in src/data/game-words.ts rather than the course
 * index: /games/* are client components, so importing the units here would ship
 * every section, dialogue and exercise of the 44 units to the browser.
 * Regenerate that file with scripts/generate-game-words.mjs after editing any
 * unit or lesson vocabulary.
 *
 * The returned array is the module constant itself — treat it as read-only.
 */
export function getAllGameWords(): GameWord[] {
  return gameWords;
}

export function getRandomWords(count: number): GameWord[] {
  const shuffled = [...gameWords];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}
