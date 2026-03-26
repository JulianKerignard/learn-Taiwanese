import { storageGet, storageSet, KEYS } from "@/lib/storage";
import type { TestResult } from "@/types/test";

const TEST_RESULTS_KEY = KEYS.testResults;

export function getTestResults(): TestResult[] {
  return storageGet<TestResult[]>(TEST_RESULTS_KEY, []);
}

export function saveTestResult(result: TestResult): void {
  const results = getTestResults();
  results.push(result);
  storageSet(TEST_RESULTS_KEY, results);
}

export function getTestResultsForTest(testId: string): TestResult[] {
  return getTestResults().filter((r) => r.testId === testId);
}

export function getBestResult(testId: string): TestResult | null {
  const results = getTestResultsForTest(testId);
  if (results.length === 0) return null;
  return results.reduce((best, r) => (r.percentage > best.percentage ? r : best));
}
