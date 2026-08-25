// Single source of truth for everything that identifies this app as the Japanese
// edition. In the Mandarin original these values were hardcoded across nine files,
// twice for basePath — which meant a mismatch silently broke every client fetch.
//
// basePath is duplicated in next.config.ts because Next needs it at config time,
// before module resolution. Keep the two in sync; nothing else reads it directly.

export const LANG = {
  id: "ja",
  htmlLang: "fr",
  contentLang: "ja",
  basePath: "/japon",
  storagePrefix: "japon",
  cookieName: "japon-user",

  brand: "Apprendre le japonais",
  tagline: "Le japonais pour vivre au Japon",

  tts: {
    voice: "ja-JP-NanamiNeural",
    altVoice: "ja-JP-KeitaNeural",
    speechLang: "ja-JP",
    voicePrefixes: ["ja-JP", "ja"],
  },

  levels: {
    code: "JLPT",
    /** JLPT runs from N5 (easiest) to N1, the reverse of HSK's 1 to 6. */
    slugs: ["jlpt-n5", "jlpt-n4", "jlpt-n3", "jlpt-n2", "jlpt-n1"],
  },

  /** Domain nouns that appear in UI copy. */
  copy: {
    term: "mot",
    terms: "mots",
    readingPrimary: "rōmaji",
    readingSecondary: "kana",
    phonology: "accent de hauteur",
  },
} as const;

export type LanguageConfig = typeof LANG;
