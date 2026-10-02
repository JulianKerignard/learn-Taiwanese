// Pre-generate audio files for everything the app speaks, for one edition
// Usage: node scripts/generate-audio.mjs [zh|ja]   (or CORPUS_LANG=ja)
//
// Every text found here plays from a static file; anything missed is voiced
// on the fly by /api/tts, which is slower and, on iOS, falls back to the
// browser's voice whenever the network delay outlives the tap.
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
// Which corpus to voice, and where its files belong. Hardwiring either one
// made this script read the wrong data or write over the other language's audio.
const LANG = process.env.CORPUS_LANG ?? process.argv.find((a) => a === "zh" || a === "ja") ?? "zh";
const VOICES = { zh: "zh-TW-HsiaoChenNeural", ja: "ja-JP-NanamiNeural" };
const AUDIO_DIR = join(ROOT, "public", "audio", LANG);
const VOICE = VOICES[LANG];
const RATE = "-15%";
const DELAY_MS = 200;

// ── Extract all Chinese texts from TypeScript data files ──────────────

function extractChineseTexts() {
  const texts = new Set();

  const dataDirs = [
    join(ROOT, `src/data/${LANG}/course`),
    join(ROOT, `src/data/${LANG}/lessons`),
  ];
  // Listening questions of the mock tests are read aloud from `question`.
  const testDir = join(ROOT, `src/data/${LANG}/tests`);

  const standaloneFiles = [
    join(ROOT, `src/data/${LANG}/readings.ts`),
    join(ROOT, `src/data/${LANG}/tone-pairs.ts`),
    join(ROOT, `src/data/${LANG}/pitch-accent.ts`),
    // The kana course speaks every sign (`char`) and its reading words (`term`).
    join(ROOT, `src/data/${LANG}/kana.ts`),
  ];

  // Only text in the language being learned is spoken: a French quiz
  // question or a label must not be sent to the voice.
  const SPEAKABLE = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]/;
  // っ, ッ and ー are not syllables: the course never speaks them alone.
  const SILENT = new Set(["っ", "ッ", "ー"]);
  const add = (set, text) => {
    const t = text.trim();
    if (t && SPEAKABLE.test(t) && !SILENT.has(t)) set.add(t);
  };

  // A test question is spoken only when it is all target language — speaker
  // labels "A:" / "B:" aside. A French question quoting 「…」 is read, not heard.
  const LATIN = /[A-Za-zÀ-ÿ]/;
  const isListening = (text) => !LATIN.test(text.replace(/\b[A-Z]\s*[:：]/g, ""));

  function scanDir(dir, withQuestions = false) {
    if (!existsSync(dir)) return;
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory()) {
        scanDir(fullPath, withQuestions);
      } else if (entry.name.endsWith(".ts")) {
        extractFromFile(fullPath, texts, withQuestions);
      }
    }
  }

  function extractFromFile(filePath, set, withQuestions = false) {
    const content = readFileSync(filePath, "utf-8");

    // term, native and char (the kana course's signs)
    for (const m of content.matchAll(/\b(?:term|native|char):\s*["']([^"']+)["']/g)) {
      add(set, m[1]);
    }
    if (withQuestions) {
      for (const m of content.matchAll(/\bquestion:\s*["']([^"']+)["']/g)) {
        // A blank (___) marks a written question, never a listening one.
        if (isListening(m[1]) && !m[1].includes("_")) add(set, m[1]);
      }
    }
  }

  dataDirs.forEach((dir) => scanDir(dir));
  scanDir(testDir, true);
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
  console.log(`Found ${texts.length} unique texts to voice (${LANG})\n`);

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
