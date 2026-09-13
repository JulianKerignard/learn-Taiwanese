// Every value that differs between the two editions lives here, keyed by the
// first URL segment. Nothing else in the app may hardcode a language.
//
// The segments are "taiwan" and "japon" rather than "zh"/"ja" so the Mandarin
// edition's public URLs survive the merge unchanged: /taiwan/path/unit-01 used to
// come from basePath and now comes from this segment, and resolves identically.

export const LANGUAGE_SEGMENTS = ["taiwan", "japon"] as const;

export type LanguageSegment = (typeof LANGUAGE_SEGMENTS)[number];

/** Directory name under src/data and public/audio. */
export type LanguageCode = "zh" | "ja";

export interface LanguageConfig {
  segment: LanguageSegment;
  code: LanguageCode;

  /** Shown in the language switcher and the page title. */
  name: string;
  /** The language written in itself. */
  nameNative: string;
  flag: string;

  /** `lang` attribute for content in this language. The UI stays French. */
  contentLang: string;

  /** Prefix for every localStorage key and every synced server key. */
  storagePrefix: string;

  tts: {
    voice: string;
    altVoice: string;
    speechLang: string;
    /** Tried in order when falling back to the Web Speech API. */
    voicePrefixes: string[];
  };

  /** Proficiency scale. JLPT counts down with difficulty, HSK counts up. */
  levels: {
    code: string;
    /** True when a higher number means a harder level (HSK), false for JLPT. */
    ascending: boolean;
  };

  /** Route segment and label of the phonology page, which differs in kind. */
  phonology: {
    slug: string;
    label: string;
  };

  /** Domain nouns used in UI copy. */
  copy: {
    term: string;
    terms: string;
    readingPrimary: string;
    readingSecondary: string;
  };

  tagline: string;
}

export const LANGUAGES: Record<LanguageSegment, LanguageConfig> = {
  taiwan: {
    segment: "taiwan",
    code: "zh",
    name: "Mandarin taïwanais",
    nameNative: "中文",
    flag: "🇹🇼",
    contentLang: "zh-Hant-TW",
    storagePrefix: "taiwan",
    tts: {
      voice: "zh-TW-HsiaoChenNeural",
      altVoice: "zh-TW-YunJheNeural",
      speechLang: "zh-TW",
      voicePrefixes: ["zh-TW", "zh-Hant", "zh"],
    },
    levels: { code: "HSK", ascending: true },
    phonology: { slug: "tons", label: "Tons" },
    copy: {
      term: "caractère",
      terms: "caractères",
      readingPrimary: "pinyin",
      readingSecondary: "zhuyin",
    },
    tagline: "Apprendre le mandarin pour vivre à Taïwan",
  },
  japon: {
    segment: "japon",
    code: "ja",
    name: "Japonais",
    nameNative: "日本語",
    flag: "🇯🇵",
    contentLang: "ja",
    storagePrefix: "japon",
    tts: {
      voice: "ja-JP-NanamiNeural",
      altVoice: "ja-JP-KeitaNeural",
      speechLang: "ja-JP",
      voicePrefixes: ["ja-JP", "ja"],
    },
    levels: { code: "JLPT", ascending: false },
    phonology: { slug: "accent", label: "Accent" },
    copy: {
      term: "mot",
      terms: "mots",
      readingPrimary: "rōmaji",
      readingSecondary: "kana",
    },
    tagline: "Apprendre le japonais pour vivre au Japon",
  },
};

export const DEFAULT_LANGUAGE: LanguageSegment = "taiwan";

export function isLanguageSegment(value: string | undefined): value is LanguageSegment {
  return value !== undefined && (LANGUAGE_SEGMENTS as readonly string[]).includes(value);
}

export function getLanguage(segment: string | undefined): LanguageConfig | undefined {
  return isLanguageSegment(segment) ? LANGUAGES[segment] : undefined;
}

/** Prefixes a route with its language: href("japon", "/path") → "/japon/path". */
export function langHref(segment: LanguageSegment, path: string): string {
  return `/${segment}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Language of the page being viewed, read from the first path segment.
 *
 * Client code that needs the language without a prop — audio lookup, speech
 * synthesis — goes through here. Falls back to the default rather than throwing:
 * a missing segment means a route outside the language tree.
 */
export function currentLanguage(): LanguageConfig {
  if (typeof window === "undefined") return LANGUAGES[DEFAULT_LANGUAGE];
  const first = window.location.pathname.split("/").filter(Boolean)[0];
  return getLanguage(first) ?? LANGUAGES[DEFAULT_LANGUAGE];
}

export const currentLanguageCode = (): LanguageCode => currentLanguage().code;
