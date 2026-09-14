"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import TestRunner from "@/components/TestRunner";
import { getTestById } from "@/data/tests";

export default function TestPage({ testId }: { testId: string }) {
  const test = getTestById(testId);

  if (!test) {
    return (
      <div className="flex flex-col items-center gap-4 py-20 text-center">
        <p className="text-lg text-stone-500">Ce test n'existe pas.</p>
        <Link href="/tests" className="btn-primary">
          Retour aux tests
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <Link
        href="/tests"
        className="flex items-center gap-1 text-sm text-stone-400 hover:text-primary transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Tous les tests
      </Link>
      <TestRunner test={test} />
    </div>
  );
}
