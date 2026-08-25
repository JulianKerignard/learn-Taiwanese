import { notFound } from "next/navigation";
import TestPage from "./TestPage";
import { mockTests, getTestById } from "@/data/tests";

// Derived from the data instead of hardcoded: the Mandarin version listed two
// ids by hand, and they matched no test at all once the corpus was replaced.
export function generateStaticParams() {
  return mockTests.map((test) => ({ testId: test.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ testId: string }> }) {
  const { testId } = await params;
  const test = getTestById(testId);
  return test ? { title: test.title } : {};
}

export default async function TestRoute({ params }: { params: Promise<{ testId: string }> }) {
  const { testId } = await params;
  if (!getTestById(testId)) notFound();
  return <TestPage testId={testId} />;
}
