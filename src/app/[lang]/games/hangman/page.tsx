import { notFound } from "next/navigation";
import type { Metadata } from "next";
import HangmanContent from "./HangmanContent";
import { gameWordsData } from "@/data/server";
import { getLanguage } from "@/lib/language";
import { isKana } from "@/lib/japanese";

const TITLES = { zh: "Pendu chinois", ja: "Pendu japonais" } as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const language = getLanguage(lang);
  return language ? { title: TITLES[language.code] } : {};
}

export default async function HangmanPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const language = getLanguage(lang);
  if (!language) notFound();

  // The generated word list is read here, never in the game: a client import of
  // @/data/<lang>/game-words would put both editions' vocabulary in the bundle.
  const { gameWords } = await gameWordsData(language.code);

  // The Japanese hangman is played on the mora of the *reading*, and the
  // generated list carries only term, rōmaji and French — no kana reading. So
  // the Japanese pool is restricted to the words that are written in kana
  // already, where the term *is* its reading (238 of 773). Widening it means
  // adding `reading` to scripts/generate-game-words.mjs and regenerating both
  // corpora, which this change is not allowed to touch.
  const words =
    language.code === "ja"
      ? gameWords.filter((word) => [...word.term].every(isKana))
      : gameWords;

  return <HangmanContent lang={language.segment} words={words} />;
}
