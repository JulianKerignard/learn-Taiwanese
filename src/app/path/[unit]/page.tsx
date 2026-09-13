import UnitContent from "./UnitContent";
import { getUnitById } from "@/data/zh/course";
import {
  allUnitMetas,
  chapters,
  getLevelForUnit,
  getLevelUnitMetas,
} from "@/data/zh/course/meta";

export function generateStaticParams() {
  return allUnitMetas.map((u) => ({ unit: u.id }));
}

export default async function UnitPage({
  params,
}: {
  params: Promise<{ unit: string }>;
}) {
  const { unit: unitId } = await params;

  // Resolved on the server, not in a client effect: the unit is known at build
  // time, so its lesson belongs in the prerendered HTML. Its navigation metadata
  // travels with it as props — were UnitContent to reach for the catalogue
  // itself, all 88 unit modules would land back in the client bundle.
  const unit = getUnitById(unitId);
  const level = unit ? getLevelForUnit(unit) : undefined;

  return (
    <UnitContent
      unitId={unitId}
      unit={unit}
      chapters={chapters}
      level={level}
      levelUnitIds={level ? getLevelUnitMetas(level).map((u) => u.id) : []}
    />
  );
}
