import { notFound } from "next/navigation";
import FunFactsContent from "./FunFactsContent";
import { funFactsData } from "@/data/server";
import { getLanguage } from "@/lib/language";

export default async function FunFactsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const language = getLanguage(lang);
  if (!language) notFound();

  // Both the facts and the category list are per-edition content, resolved here
  // so that neither corpus is reachable from the client component.
  const { funFacts, categories } = await funFactsData(language.code);

  return (
    <FunFactsContent
      lang={language.segment}
      funFacts={funFacts}
      categories={categories}
    />
  );
}
