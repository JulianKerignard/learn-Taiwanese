import { notFound } from "next/navigation";
import PathContent from "./PathContent";
import { getLanguage } from "@/lib/language";

export default async function PathPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const language = getLanguage(lang);
  if (!language) notFound();

  // Metadata only — PathContent reads the level table from @/data/meta, which is
  // client-safe. Nothing here needs the corpora.
  return <PathContent lang={language.segment} />;
}
