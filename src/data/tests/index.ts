import type { MockTest } from "@/types/test";
import { n5Test } from "./n5";

/** Examens blancs disponibles, du plus accessible au plus difficile (N5 → N1). */
export const mockTests: MockTest[] = [n5Test];

export function getTestById(id: string): MockTest | undefined {
  return mockTests.find((test) => test.id === id);
}
