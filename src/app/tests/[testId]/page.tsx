import TestPage from "./TestPage";

export function generateStaticParams() {
  return [{ testId: "hsk-1" }, { testId: "hsk-2" }];
}

export default async function TestRoute({
  params,
}: {
  params: Promise<{ testId: string }>;
}) {
  const { testId } = await params;
  return <TestPage testId={testId} />;
}
