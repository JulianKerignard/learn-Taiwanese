// Module resolution hook so Node can load the project's TypeScript data files:
// maps the "@/*" path alias to src/ and adds the extension Node requires.
import { existsSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const SRC = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../src");

export async function resolve(specifier, context, next) {
  let spec = specifier;

  if (spec.startsWith("@/")) {
    spec = pathToFileURL(path.join(SRC, spec.slice(2))).href;
  }

  if (spec.startsWith(".") || spec.startsWith("file:")) {
    const url = spec.startsWith("file:") ? spec : new URL(spec, context.parentURL).href;
    const filePath = fileURLToPath(url);
    if (!path.extname(filePath)) {
      const candidates = [
        `${filePath}.ts`,
        `${filePath}.tsx`,
        path.join(filePath, "index.ts"),
      ];
      for (const candidate of candidates) {
        if (existsSync(candidate)) return next(pathToFileURL(candidate).href, context);
      }
    }
    return next(url, context);
  }

  return next(specifier, context);
}
