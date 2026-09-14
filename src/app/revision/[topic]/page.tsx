import RevisionSession from "./RevisionSession";

export default async function RevisionTopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  return <RevisionSession topicId={topic} />;
}
