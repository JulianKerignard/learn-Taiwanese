"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import TestRunner from "@/components/TestRunner";
import { langHref, type LanguageSegment } from "@/lib/language";
import type { MockTest } from "@/types/test";

// The exam arrives as a prop: see ./page.tsx for why it is not imported here.
export default function TestPage({
  lang,
  test,
}: {
  lang: LanguageSegment;
  test?: MockTest;
}) {
  if (!test) {
    return (
      <div className="flex flex-col items-center gap-4 py-20 text-center">
        <p className="text-lg text-stone-500">Ce test n&apos;existe pas.</p>
        <Link href={langHref(lang, "/tests")} className="btn-primary">
          Retour aux tests
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <Link
        href={langHref(lang, "/tests")}
        className="flex items-center gap-1 text-sm text-stone-400 hover:text-primary transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Tous les tests
      </Link>
      <TestRunner lang={lang} test={test} />
    </div>
  );
}
