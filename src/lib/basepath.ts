// basePath for client-side fetch calls: the App Router no longer exposes it.
// Derived from LANG so it cannot drift from next.config.ts independently.
import { LANG } from "@/lib/language";

export function getBasePath(): string {
  if (typeof window === "undefined") return "";
  return window.location.pathname.startsWith(LANG.basePath) ? LANG.basePath : "";
}
