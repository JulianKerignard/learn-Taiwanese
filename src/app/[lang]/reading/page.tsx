import { notFound } from "next/navigation";
import ReadingContent from "./ReadingContent";
import { readingsData } from "@/data/server";
import { getLanguage } from "@/lib/language";

export default async function ReadingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const language = getLanguage(lang);
  if (!language) notFound();

  // The library is the page's content, so it is resolved on the server and
  // handed down: importing @/data/<lang>/readings from the client component
  // would put both editions' texts in the browser bundle.
  const { gradedTexts } = await readingsData(language.code);

  return <ReadingContent lang={language.segment} gradedTexts={gradedTexts} />;
}
