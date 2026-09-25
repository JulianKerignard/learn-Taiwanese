import { notFound } from "next/navigation";
import KanaContent from "./KanaContent";
import { kanaData } from "@/data/server";
import { LANGUAGE_SEGMENTS, LANGUAGES, getLanguage } from "@/lib/language";

/**
 * The reading course of the editions whose script must be learned before
 * anything else can be read: the kana for Japanese. Mandarin has none, so the
 * route only exists where `readingCourse` is set.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return LANGUAGE_SEGMENTS.filter((segment) => LANGUAGES[segment].readingCourse !== null).map((lang) => ({
    lang,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const language = getLanguage(lang);
  return language?.readingCourse ? { title: `${language.readingCourse.label} — ${language.name}` } : {};
}

export default async function KanaPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const language = getLanguage(lang);
  if (!language?.readingCourse) notFound();

  const data = await kanaData(language.code);
  if (!data) notFound();

  return <KanaContent kana={data.kana} lessons={data.kanaLessons} words={data.kanaWords} />;
}
