import "server-only";

import type { LanguageCode } from "@/lib/language";

/**
 * The heavy corpora, resolved per language — server components only.
 *
 * `import "server-only"` is the guard that matters: these modules are megabytes,
 * and a client component importing this file would ship *both* editions to the
 * browser. The build fails instead, which is the point.
 *
 * Dynamic imports keep each language's modules out of the other's chunk.
 */
export async function courseData(code: LanguageCode) {
  return code === "zh" ? import("./zh/course/index") : import("./ja/course/index");
}

export async function lessonsData(code: LanguageCode) {
  return code === "zh" ? import("./zh/lessons") : import("./ja/lessons");
}

export async function readingsData(code: LanguageCode) {
  return code === "zh" ? import("./zh/readings") : import("./ja/readings");
}

export async function dictionaryData(code: LanguageCode) {
  return code === "zh" ? import("./zh/dictionary") : import("./ja/dictionary");
}

export async function funFactsData(code: LanguageCode) {
  return code === "zh" ? import("./zh/funfacts") : import("./ja/funfacts");
}

export async function testsData(code: LanguageCode) {
  return code === "zh" ? import("./zh/tests") : import("./ja/tests");
}

export async function gameWordsData(code: LanguageCode) {
  return code === "zh" ? import("./zh/game-words") : import("./ja/game-words");
}

/** Phonology differs in kind: tone pairs for Mandarin, pitch accent for Japanese. */
export async function phonologyData(code: LanguageCode) {
  return code === "zh"
    ? { kind: "tones" as const, ...(await import("./zh/tone-pairs")) }
    : { kind: "pitch" as const, ...(await import("./ja/pitch-accent")) };
}
