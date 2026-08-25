import { notFound } from "next/navigation";
import JLPTLevelContent from "@/components/JLPTLevelContent";
import { jlptLevels, getJLPTLevelBySlug } from "@/data/course/meta";

// One route instead of four near-identical level pages. Adding N1 is a data
// change, not a new file.
export function generateStaticParams() {
  return jlptLevels.map((level) => ({ level: level.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ level: string }> }) {
  const { level } = await params;
  const found = getJLPTLevelBySlug(level);
  return found
    ? { title: `${found.title} — ${found.titleJa}`, description: found.description }
    : {};
}

export default async function LevelPage({ params }: { params: Promise<{ level: string }> }) {
  const { level } = await params;
  if (!getJLPTLevelBySlug(level)) notFound();
  return <JLPTLevelContent slug={level} />;
}
