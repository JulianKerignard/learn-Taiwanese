import UnitContent from "./UnitContent";

export function generateStaticParams() {
  const ids: string[] = [];
  for (let i = 1; i <= 55; i++) {
    ids.push(`unit-${String(i).padStart(2, "0")}`);
  }
  return ids.map((id) => ({ unit: id }));
}

export default async function UnitPage({
  params,
}: {
  params: Promise<{ unit: string }>;
}) {
  const { unit } = await params;
  return <UnitContent unitId={unit} />;
}
