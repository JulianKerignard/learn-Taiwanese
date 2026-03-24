// Pre-generate audio files for all Chinese vocabulary and phrases
// Usage: node scripts/generate-audio.mjs
// Requires: edge-tts-universal (already in project dependencies)

import {
  readFileSync,
  readdirSync,
  writeFileSync,
  mkdirSync,
  existsSync,
} from "fs";
import { createHash } from "crypto";
import { join, resolve } from "path";
import { EdgeTTS } from "edge-tts-universal";

const ROOT = resolve(".");
const AUDIO_DIR = join(ROOT, "public", "audio");
const VOICE = "zh-TW-HsiaoChenNeural";
const RATE = "-15%";
const DELAY_MS = 200;

// ── Extract all Chinese texts from TypeScript data files ──────────────

function extractChineseTexts() {
  const texts = new Set();

  const dataDirs = [
    join(ROOT, "src/data/course"),
    join(ROOT, "src/data/lessons"),
  ];

  const standaloneFiles = [
    join(ROOT, "src/data/readings.ts"),
    join(ROOT, "src/data/tone-pairs.ts"),
  ];

  function scanDir(dir) {
    if (!existsSync(dir)) return;
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory()) {
        scanDir(fullPath);
      } else if (entry.name.endsWith(".ts")) {
        extractFromFile(fullPath, texts);
      }
    }
  }

  function extractFromFile(filePath, set) {
    const content = readFileSync(filePath, "utf-8");

    // character: "..." or character: '...'
    for (const m of content.matchAll(/character:\s*["']([^"']+)["']/g)) {
      set.add(m[1]);
    }

    // chinese: "..." or chinese: '...'
    for (const m of content.matchAll(/chinese:\s*["']([^"']+)["']/g)) {
      set.add(m[1]);
    }
  }

  dataDirs.forEach(scanDir);
  standaloneFiles.forEach((f) => {
    if (existsSync(f)) extractFromFile(f, texts);
  });

  return [...texts].sort();
}

// ── Hash function for filenames ───────────────────────────────────────

function hash(text) {
  return createHash("md5").update(text).digest("hex").slice(0, 10);
}

// ── Main ──────────────────────────────────────────────────────────────

async function main() {
  mkdirSync(AUDIO_DIR, { recursive: true });

  const texts = extractChineseTexts();
  console.log(`Found ${texts.length} unique Chinese texts to generate\n`);

  if (texts.length === 0) {
    console.log("No texts found. Check that src/data/ contains .ts files.");
    return;
  }

  const manifest = {};
  // Load existing manifest to preserve entries for files already on disk
  const manifestPath = join(AUDIO_DIR, "manifest.json");
  if (existsSync(manifestPath)) {
    try {
      const existing = JSON.parse(readFileSync(manifestPath, "utf-8"));
      Object.assign(manifest, existing);
    } catch {
      // ignore corrupt manifest
    }
  }

  let generated = 0;
  let skipped = 0;
  let failed = 0;

  for (const text of texts) {
    const h = hash(text);
    const filename = `${h}.mp3`;
    const filepath = join(AUDIO_DIR, filename);

    // Skip if file already exists on disk (idempotent)
    if (existsSync(filepath)) {
      manifest[text] = filename;
      skipped++;
      continue;
    }

    try {
      const tts = new EdgeTTS(text, VOICE, { rate: RATE });
      const result = await tts.synthesize();
      const buffer = Buffer.from(await result.audio.arrayBuffer());
      writeFileSync(filepath, buffer);
      manifest[text] = filename;
      generated++;
      process.stdout.write(
        `\r  Generated: ${generated} | Cached: ${skipped} | Failed: ${failed} | Total: ${texts.length}`
      );
      // Delay to avoid rate limiting
      await new Promise((r) => setTimeout(r, DELAY_MS));
    } catch (err) {
      failed++;
      console.error(`\n  Failed: "${text}" — ${err.message}`);
    }
  }

  // Write manifest
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

  console.log(`\n\nDone!`);
  console.log(`  Generated: ${generated}`);
  console.log(`  Cached (skipped): ${skipped}`);
  console.log(`  Failed: ${failed}`);
  console.log(`  Total in manifest: ${Object.keys(manifest).length}`);
  console.log(`  Output: ${AUDIO_DIR}/`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
