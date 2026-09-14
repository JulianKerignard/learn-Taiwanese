import { notFound } from "next/navigation";
import type { Metadata } from "next";
import DictionaryContent from "./DictionaryContent";
import { dictionaryData } from "@/data/server";
import { courseMeta } from "@/data/meta";
import { getLanguage } from "@/lib/language";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const language = getLanguage(lang);
  return language
    ? { title: `Dictionnaire — ${language.name}`, description: `Tout le vocabulaire du parcours, des leçons et des lectures en ${language.name.toLowerCase()}.` }
    : {};
}

export default async function DictionaryPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const language = getLanguage(lang);
  if (!language) notFound();

  // Resolved on the server: the generated dictionaries weigh 304 kB (Mandarin)
  // and 212 kB (Japanese), and a client import would ship both. The entries
  // travel as props, so the browser only ever receives the edition being read.
  const { dictionaryEntries } = await dictionaryData(language.code);

  // Unreleased levels have no vocabulary behind them — filtering by one would
  // always show an empty list.
  const levels = courseMeta(language.code)
    .levels.filter((level) => !level.comingSoon)
    .map((level) => level.level);

  return (
    <DictionaryContent lang={language.segment} entries={dictionaryEntries} levels={levels} />
  );
}
