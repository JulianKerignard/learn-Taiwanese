export function shuffleArray<T>(arr: T[]): T[] {
  const s = [...arr];
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [s[i], s[j]] = [s[j], s[i]];
  }
  return s;
}

export function hasChinese(str: string): boolean {
  return /[\u4e00-\u9fff\u3400-\u4dbf]/.test(str);
}

/**
 * Full-width punctuation and whitespace, ignored when comparing free-form answers.
 * Shared with scripts/validate-corpus.mjs: when the two disagreed, the validator
 * rejected a reorder the runtime graded correctly.
 */
export const IGNORED_PUNCTUATION = /[，。？！、：；「」『』…\s]/g;

export const stripPunctuation = (value: string) => value.replace(IGNORED_PUNCTUATION, "");

/** Calendar day in the reader's own timezone, YYYY-MM-DD. Daily counters reset at local midnight, not at UTC midnight. */
export function localDayKey(date: Date): string {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}
