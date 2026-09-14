import { notFound } from "next/navigation";
import ToneContent from "./ToneContent";
import PitchAccentContent from "./PitchAccentContent";
import { phonologyData } from "@/data/server";
import { LANGUAGE_SEGMENTS, getLanguage } from "@/lib/language";

/**
 * The phonology page of both editions, from one route.
 *
 * The two editions teach different things here — four syllabic tones and their
 * pairs for Mandarin, a single downstep and its four patterns for Japanese — so
 * the route picks a module rather than parameterising one.
 *
 * The segment is dynamic because each edition keeps its own slug
 * (LANG.phonology.slug: /taiwan/tones, /japon/accent). Those are the URLs the
 * Navbar and the language switcher build, and /taiwan/tones is a public URL the
 * merge must not move. `dynamicParams = false` limits the segment to the two
 * pairs below, so it never acts as a catch-all.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return LANGUAGE_SEGMENTS.map((segment) => ({
    lang: segment,
    phonologie: getLanguage(segment)!.phonology.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; phonologie: string }>;
}) {
  const { lang } = await params;
  const language = getLanguage(lang);
  return language ? { title: `${language.phonology.label} — ${language.name}` } : {};
}

export default async function PhonologyPage({
  params,
}: {
  params: Promise<{ lang: string; phonologie: string }>;
}) {
  const { lang, phonologie } = await params;
  const language = getLanguage(lang);
  if (!language || phonologie !== language.phonology.slug) notFound();

  const data = await phonologyData(language.code);

  return data.kind === "tones" ? (
    <ToneContent tonePairs={data.tonePairs} sandhiRules={data.sandhiRules} />
  ) : (
    <PitchAccentContent accentGroups={data.accentGroups} minimalPairs={data.minimalPairs} />
  );
}
