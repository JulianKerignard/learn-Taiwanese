export { hasJapanese } from "@/lib/japanese";

export function shuffleArray<T>(arr: T[]): T[] {
  const s = [...arr];
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [s[i], s[j]] = [s[j], s[i]];
  }
  return s;
}

/**
 * Full-width punctuation and whitespace, ignored when comparing free-form answers.
 * Shared with scripts/validate-corpus.mjs: when the two disagreed, the validator
 * rejected a reorder the runtime graded correctly.
 */
export const IGNORED_PUNCTUATION = /[、。？！：；「」『』…，\\s]/g;

export const stripPunctuation = (value: string) => value.replace(IGNORED_PUNCTUATION, "");
