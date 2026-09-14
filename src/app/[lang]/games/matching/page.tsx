import { notFound } from "next/navigation";
import type { Metadata } from "next";
import MatchingContent from "./MatchingContent";
import { gameWordsData } from "@/data/server";
import { getLanguage } from "@/lib/language";

const TITLES = { zh: "Matching", ja: "Associations" } as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const language = getLanguage(lang);
  return language ? { title: TITLES[language.code] } : {};
}

export default async function MatchingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const language = getLanguage(lang);
  if (!language) notFound();

  // Read here rather than in the game: a client import of the generated list
  // would ship both editions' vocabulary to the browser.
  const { gameWords } = await gameWordsData(language.code);

  return (
    <MatchingContent lang={language.segment} title={TITLES[language.code]} words={gameWords} />
  );
}
