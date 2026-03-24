// Shared basePath for client-side fetch calls
// Next.js App Router doesn't expose basePath via __NEXT_DATA__ anymore
export function getBasePath(): string {
  if (typeof window === "undefined") return "";
  // Check if we're on a path that starts with /taiwan
  if (window.location.pathname.startsWith("/taiwan")) return "/taiwan";
  return "";
}
