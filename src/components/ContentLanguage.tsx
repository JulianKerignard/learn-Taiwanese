"use client";

import { createContext, useContext } from "react";
import { LANGUAGES, DEFAULT_LANGUAGE, type LanguageSegment } from "@/lib/language";

const ContentLanguageContext = createContext<string>(LANGUAGES[DEFAULT_LANGUAGE].contentLang);

/**
 * BCP-47 tag for the language being taught, for `lang` on fragments of target
 * text. It comes from the route rather than from `currentLanguage()`, which
 * reads `window.location` and so resolves to the default edition during SSR —
 * enough to make every Japanese page hydrate with a mismatched attribute.
 */
export function useContentLang(): string {
  return useContext(ContentLanguageContext);
}

export default function ContentLanguageProvider({
  lang,
  children,
}: {
  lang: LanguageSegment;
  children: React.ReactNode;
}) {
  return (
    <ContentLanguageContext.Provider value={LANGUAGES[lang].contentLang}>
      {children}
    </ContentLanguageContext.Provider>
  );
}
