import { notFound } from "next/navigation";
import UnitContent from "./UnitContent";
import { courseData } from "@/data/server";
import { courseMeta, getLevelForUnit, getLevelUnitMetas } from "@/data/meta";
import { LANGUAGE_SEGMENTS, getLanguage } from "@/lib/language";

export function generateStaticParams() {
  return LANGUAGE_SEGMENTS.flatMap((segment) => {
    const language = getLanguage(segment)!;
    return courseMeta(language.code).allUnitMetas.map((u) => ({
      lang: segment,
      unit: u.id,
    }));
  });
}

export default async function UnitPage({
  params,
}: {
  params: Promise<{ lang: string; unit: string }>;
}) {
  const { lang, unit: unitId } = await params;
  const language = getLanguage(lang);
  if (!language) notFound();

  // Resolved on the server, not in a client effect: the unit is known at build
  // time, so its lesson belongs in the prerendered HTML. Its navigation metadata
  // travels with it as props — were UnitContent to reach for the catalogue
  // itself, every unit module would land back in the client bundle.
  const { getUnitById } = await courseData(language.code);
  const { chapters } = courseMeta(language.code);
  const unit = getUnitById(unitId);
  const level = unit ? getLevelForUnit(language.code, unit) : undefined;

  return (
    <UnitContent
      lang={language.segment}
      unitId={unitId}
      unit={unit}
      chapters={chapters}
      level={level}
      levelUnitIds={level ? getLevelUnitMetas(language.code, level).map((u) => u.id) : []}
    />
  );
}
