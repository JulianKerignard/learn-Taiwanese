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

  /**
   * Route segment and label of the reading course for the edition's script,
   * or null when the edition has none. Japanese learners must read kana before
   * the course path can ask them to read anything.
   */
  readingCourse: {
    slug: string;
    label: string;
  } | null;

  /**
   * Route segment and label of the kanji course, or null. Follows the reading
   * course: kanji are taught once the kana can be read.
   */
  kanjiCourse: {
    slug: string;
    label: string;
  } | null;

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
    // The slug is the route, not the label: /taiwan/tones is the URL the
    // Mandarin edition already had, and the merge must not move it.
    phonology: { slug: "tones", label: "Tons" },
    readingCourse: null,
    kanjiCourse: null,
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
    readingCourse: { slug: "kana", label: "Kana" },
    kanjiCourse: { slug: "kanji", label: "Kanji" },
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

/**
 * Prefixes a route with its language: langHref("japon", "/path") → "/japon/path".
 * The edition's own root is "/japon", with no trailing slash.
 */
export function langHref(segment: LanguageSegment, path = "/"): string {
  if (path === "" || path === "/") return `/${segment}`;
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

const BY_CODE: Record<LanguageCode, LanguageConfig> = {
  zh: LANGUAGES.taiwan,
  ja: LANGUAGES.japon,
};

export function getLanguageByCode(code: LanguageCode): LanguageConfig {
  return BY_CODE[code];
}

/**
 * Short designation of a proficiency level: "HSK 1" counting up, "JLPT N5"
 * counting down. `levels.ascending` is what tells the two apart — never a sign
 * hardcoded at the call site.
 */
export function levelName(language: LanguageConfig, level: number): string {
  return language.levels.ascending
    ? `${language.levels.code} ${level}`
    : `${language.levels.code} N${level}`;
}

/**
 * Heading for a level: its designation followed by its title. The Japanese level
 * table already names the scale in each title ("JLPT N5"), so the designation is
 * not repeated when the title already carries it.
 */
export function levelHeading(
  language: LanguageConfig,
  level: { level: number; title: string }
): string {
  const name = levelName(language, level.level);
  return level.title.startsWith(name) ? level.title : `${name} — ${level.title}`;
}

/**
 * The level that follows `level` in difficulty, if any. HSK counts up and JLPT
 * counts down, so the step comes from `levels.ascending`.
 */
export function nextLevelNumber(language: LanguageConfig, level: number): number {
  return level + (language.levels.ascending ? 1 : -1);
}
