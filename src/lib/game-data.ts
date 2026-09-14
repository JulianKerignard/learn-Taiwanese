/**
 * Word pool shared by the three mini-games.
 *
 * The list is not resolved here: `src/data/<lang>/game-words.ts` is a corpus
 * module, and a client component that imports one ships *both* editions to the
 * browser. The games are client components, so their server page reads the list
 * through `gameWordsData()` in src/data/server.ts and passes it down; these
 * helpers only shuffle what they are given.
 *
 * Regenerate the source lists with `npm run generate-game-words` after editing
 * any unit or lesson vocabulary.
 */

/** The three fields the mini-games read. Both editions expose exactly these. */
export interface GameWord {
  term: string;
  romanization: string;
  french: string;
}

/** A shuffled slice of `words`. The input array is never mutated. */
export function getRandomWords(words: readonly GameWord[], count: number): GameWord[] {
  const shuffled = [...words];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}
