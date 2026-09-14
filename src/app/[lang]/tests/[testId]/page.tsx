import { notFound } from "next/navigation";
import type { Metadata } from "next";
import TestPage from "./TestPage";
import { testsData } from "@/data/server";
import { LANGUAGE_SEGMENTS, getLanguage } from "@/lib/language";

/** Every published exam of every edition; the ids differ per language. */
export async function generateStaticParams() {
  const params: { lang: string; testId: string }[] = [];
  for (const segment of LANGUAGE_SEGMENTS) {
    const language = getLanguage(segment)!;
    const { mockTests } = await testsData(language.code);
    params.push(...mockTests.map((test) => ({ lang: segment, testId: test.id })));
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; testId: string }>;
}): Promise<Metadata> {
  const { lang, testId } = await params;
  const language = getLanguage(lang);
  if (!language) return {};
  const { getTestById } = await testsData(language.code);
  const test = getTestById(testId);
  return test ? { title: test.title, description: test.description } : {};
}

export default async function TestRoute({
  params,
}: {
  params: Promise<{ lang: string; testId: string }>;
}) {
  const { lang, testId } = await params;
  const language = getLanguage(lang);
  if (!language) notFound();

  // The exam is resolved here, not in the client component: a client import of
  // @/data/<lang>/tests would ship both editions' question banks to the browser.
  const { getTestById } = await testsData(language.code);

  return <TestPage lang={language.segment} test={getTestById(testId)} />;
}
