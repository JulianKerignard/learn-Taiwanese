import { lessons } from "@/data/lessons";
import LessonContent from "./LessonContent";

export function generateStaticParams() {
  return lessons.map((l) => ({ slug: l.slug }));
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <LessonContent slug={slug} />;
}
