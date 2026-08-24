import UnitContent from "./UnitContent";
import { allUnits } from "@/data/course";

export function generateStaticParams() {
  return allUnits.map((u) => ({ unit: u.id }));
}

export default async function UnitPage({
  params,
}: {
  params: Promise<{ unit: string }>;
}) {
  const { unit } = await params;
  return <UnitContent unitId={unit} />;
}
