import { notFound } from "next/navigation";
import type { Metadata } from "next";
import HangmanContent from "./HangmanContent";
import { gameWordsData } from "@/data/server";
import { getLanguage } from "@/lib/language";

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

  // Every word of the list plays: the Japanese board hides the mora of the
  // word's kana *reading* (carried by the generated list since it gained
  // `reading`), so a kanji word such as 今日 is guessed as き・ょ… — see
  // HangmanContent. The Mandarin board still hides the characters themselves.
  return <HangmanContent lang={language.segment} words={gameWords} />;
}
