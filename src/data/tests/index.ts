import { hsk1Test } from "./hsk1";
import { hsk2Test } from "./hsk2";
import type { MockTest } from "@/types/test";

export const mockTests: MockTest[] = [hsk1Test, hsk2Test];

export function getTestById(id: string): MockTest | undefined {
  return mockTests.find((t) => t.id === id);
}
