// Pre-generated audio (instant) → Edge TTS API (high quality) → Web Speech API fallback
//
// Playback goes through one long-lived Web Audio context rather than a fresh
// <audio> element per clip. Three cuts came from the old way:
// - the output device woke up for every clip (phones, Bluetooth headsets) and
//   swallowed the first syllable;
// - iOS refuses <audio>.play() once a fetch has broken the tap's user
//   activation, so every clip voiced on the fly fell back to the robotic Web
//   Speech voice, which itself clips;
// - a slow clip could arrive after a newer one had started and cut it off.
// The context is resumed synchronously inside the tap, stays open afterwards,
// and every request carries a number: a clip only plays if it is still the
// latest one asked for.

import { currentLanguage, currentLanguageCode } from "@/lib/language";

/**
 * Settles the promise of whatever is playing now. A stopped source or a paused
 * <audio> does not always report it, so without this an interrupted clip never
 * resolved and its AudioButton stayed pulsing and unclickable for good.
 */
let settleCurrent: (() => void) | null = null;

function track(settle: () => void): () => void {
  let done = false;
  const once = () => {
    if (done) return;
    done = true;
    if (settleCurrent === once) settleCurrent = null;
    settle();
  };
  settleCurrent = once;
  return once;
}

/** Bumped by every speak(): a clip whose number is stale was superseded and must not play. */
let requestId = 0;

// ── Web Audio player ──────────────────────────────────────────────────

type AudioContextCtor = typeof AudioContext;
type AudioSessionNavigator = Navigator & { audioSession?: { type: string } };

let context: AudioContext | null = null;
let currentSource: AudioBufferSourceNode | null = null;
let currentElement: HTMLAudioElement | null = null;

function audioContext(): AudioContext | null {
  if (context) return context;
  const Ctor: AudioContextCtor | undefined =
    window.AudioContext ?? (window as unknown as { webkitAudioContext?: AudioContextCtor }).webkitAudioContext;
  if (!Ctor) return null;
  // iOS mutes Web Audio with the ring/silent switch unless the session says it
  // is media playback, as an <audio> element is (Safari 16.4+).
  const session = (navigator as AudioSessionNavigator).audioSession;
  if (session) {
    try {
      session.type = "playback";
    } catch {
      // read-only or unsupported: keep the default
    }
  }
  try {
    context = new Ctor();
  } catch {
    return null;
  }
  return context;
}

/**
 * A clip that plays on its own — a listening question as it appears — has no
 * tap of its own to resume the context in. So the very first tap or key press
 * anywhere on the page unlocks it, once, for every clip after.
 */
if (typeof window !== "undefined") {
  const unlock = () => {
    const ctx = audioContext();
    if (ctx && ctx.state !== "running") ctx.resume().catch(() => {});
    window.removeEventListener("pointerdown", unlock, true);
    window.removeEventListener("keydown", unlock, true);
  };
  window.addEventListener("pointerdown", unlock, true);
  window.addEventListener("keydown", unlock, true);
}

/**
 * Compressed clips by URL, so a sign heard twice is not fetched twice. The
 * bytes are small (≈10 KB a clip); decoding each time is a few milliseconds.
 */
const clipCache = new Map<string, Promise<ArrayBuffer | null>>();
const CLIP_CACHE_SIZE = 200;

function fetchClip(url: string): Promise<ArrayBuffer | null> {
  const cached = clipCache.get(url);
  if (cached) {
    // Refresh its place: the map is kept in least-recently-used order.
    clipCache.delete(url);
    clipCache.set(url, cached);
    return cached;
  }
  const pending = fetch(url)
    .then((res) => (res.ok ? res.arrayBuffer() : null))
    .catch(() => null);
  clipCache.set(url, pending);
  // A failed fetch is not cached: the next tap retries.
  pending.then((bytes) => {
    if (bytes === null) clipCache.delete(url);
  });
  if (clipCache.size > CLIP_CACHE_SIZE) {
    const oldest = clipCache.keys().next().value;
    if (oldest !== undefined) clipCache.delete(oldest);
  }
  return pending;
}

/** Plays decoded bytes through the shared context. False when Web Audio cannot. */
async function playBytes(bytes: ArrayBuffer, id: number): Promise<boolean | "superseded"> {
  const ctx = audioContext();
  if (!ctx) return false;
  let buffer: AudioBuffer;
  try {
    // decodeAudioData detaches its argument: decode a copy, keep the cache intact.
    buffer = await ctx.decodeAudioData(bytes.slice(0));
  } catch {
    return false;
  }
  if (id !== requestId) return "superseded";
  if (ctx.state !== "running") {
    try {
      await ctx.resume();
    } catch {
      return false;
    }
    // TypeScript keeps the narrowing from before the await; the state has moved.
    if ((ctx.state as AudioContextState) !== "running") return false;
  }
  if (id !== requestId) return "superseded";

  return new Promise((resolve) => {
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.connect(ctx.destination);
    const finish = track(() => {
      if (currentSource === source) currentSource = null;
      resolve(true);
    });
    source.onended = finish;
    currentSource = source;
    // A few milliseconds ahead, so the very first samples are not scheduled
    // in the past and dropped.
    source.start(ctx.currentTime + 0.02);
  });
}

/** The old path, kept for browsers without Web Audio or with a clip it cannot decode. */
function playElement(url: string, id: number): Promise<boolean> {
  return new Promise((resolve) => {
    if (id !== requestId) return resolve(true);
    const audio = new Audio(url);
    currentElement = audio;
    let started = false;
    const finish = track(() => {
      if (currentElement === audio) currentElement = null;
      resolve(true);
    });
    audio.onplaying = () => {
      started = true;
    };
    audio.onended = finish;
    audio.onerror = () => {
      if (currentElement === audio) currentElement = null;
      if (started) finish();
      else resolve(false);
    };
    audio.play().catch(() => {
      if (currentElement === audio) currentElement = null;
      resolve(false);
    });
  });
}

async function playUrl(url: string, id: number): Promise<boolean> {
  const bytes = await fetchClip(url);
  if (id !== requestId) return true;
  // Nothing to play (404, server error, offline): move on to the next tier
  // rather than asking an <audio> element to fetch the same failure again.
  if (!bytes) return false;
  const played = await playBytes(bytes, id);
  if (played === "superseded" || played) return true;
  return playElement(url, id);
}

function stopCurrent(): void {
  if (currentSource) {
    try {
      currentSource.stop();
    } catch {
      // already stopped
    }
    currentSource = null;
  }
  if (currentElement) {
    currentElement.pause();
    currentElement = null;
  }
  const synth = typeof window !== "undefined" ? window.speechSynthesis : undefined;
  if (synth && (synth.speaking || synth.pending)) synth.cancel();
  settleCurrent?.();
}

// ── Pre-generated audio manifest ──────────────────────────────────────

let audioManifest: Record<string, string> | null = null;
let manifestLang: string | null = null;
let manifestRequest: Promise<Record<string, string>> | null = null;

function getManifest(): Promise<Record<string, string>> {
  const lang = currentLanguageCode();
  if (audioManifest && manifestLang === lang) return Promise.resolve(audioManifest);
  if (manifestRequest && manifestLang === lang) return manifestRequest;
  manifestLang = lang;
  manifestRequest = fetch(`/audio/${lang}/manifest.json`)
    .then((res) => (res.ok ? res.json() : {}))
    .catch(() => ({}))
    .then((manifest: Record<string, string>) => {
      if (manifestLang === lang) audioManifest = manifest;
      return manifest;
    });
  return manifestRequest;
}

/** The on-the-fly voice for a text. Prefetch and playback must build the same URL to share the cache. */
function apiUrl(text: string, rate: number): string {
  const params = new URLSearchParams({ text, voice: currentLanguage().tts.voice, rate: String(rate) });
  return `/api/tts?${params}`;
}

// ── Warm-up and prefetch ──────────────────────────────────────────────

type ConnectionNavigator = Navigator & { connection?: { saveData?: boolean; effectiveType?: string } };

/**
 * Prefetching spends the learner's data on clips they may not play: never when
 * they asked the browser to save data, nor on a 2G-class connection.
 */
function prefetchAllowed(): boolean {
  const connection = (navigator as ConnectionNavigator).connection;
  if (!connection) return true;
  return !connection.saveData && !/(^|-)2g$/.test(connection.effectiveType ?? "");
}

function whenIdle(task: () => void): void {
  if ("requestIdleCallback" in window) window.requestIdleCallback(task, { timeout: 3000 });
  else setTimeout(task, 1500);
}

let warmed = false;

/**
 * Loads the edition's audio manifest while the page is idle, so the first tap
 * does not wait for it (57 KB gzipped for Japanese). Called by every audio
 * button as it mounts; only the first call does anything per page load.
 */
export function warmSpeech(): void {
  if (typeof window === "undefined" || warmed) return;
  warmed = true;
  whenIdle(() => {
    getManifest().catch(() => {});
  });
}

/**
 * Fetches the clips for what is about to be heard — the next question, the
 * next card — into the clip cache, so playing them costs no network time.
 * Small by design: a few texts at a time, clips of 10–20 KB each.
 */
export function prefetchSpeech(texts: string[], rate = 0.85): void {
  if (typeof window === "undefined" || !prefetchAllowed()) return;
  const wanted = [...new Set(texts.filter((t) => t && t.trim()))].slice(0, 6);
  if (wanted.length === 0) return;
  whenIdle(() => {
    getManifest()
      .then((manifest) => {
        const lang = currentLanguageCode();
        for (const text of wanted) {
          const file = manifest[text];
          fetchClip(file ? `/audio/${lang}/${file}` : apiUrl(text, rate));
        }
      })
      .catch(() => {});
  });
}

// ── Main speak function ───────────────────────────────────────────────

export async function speak(text: string, rate = 0.85): Promise<void> {
  if (typeof window === "undefined") return;

  // Everything up to the first await runs inside the tap that called us: that
  // is where the audio context may be resumed (iOS allows it nowhere else).
  const id = ++requestId;
  stopCurrent();
  const ctx = audioContext();
  if (ctx && ctx.state !== "running") ctx.resume().catch(() => {});

  // 1. Pre-generated audio (instant, zero latency)
  const manifest = await getManifest();
  if (id !== requestId) return;
  const audioFile = manifest[text];
  if (audioFile && (await playUrl(`/audio/${currentLanguageCode()}/${audioFile}`, id))) return;
  if (id !== requestId) return;

  // 2. Edge TTS API (high quality, slight latency)
  if (await playUrl(apiUrl(text, rate), id)) return;
  if (id !== requestId) return;

  // 3. Web Speech API fallback
  return speakFallback(text, rate, id);
}

/**
 * The utterance being spoken. Chrome stops an utterance mid-word, without
 * firing onend, once nothing references it any more and it is garbage
 * collected — a module variable keeps it alive until it is done.
 */
let activeUtterance: SpeechSynthesisUtterance | null = null;

function speakFallback(text: string, rate: number, id: number): Promise<void> {
  return new Promise((resolve) => {
    if (!window.speechSynthesis || id !== requestId) {
      resolve();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    const { tts } = currentLanguage();
    utterance.lang = tts.speechLang;
    utterance.rate = rate;
    utterance.pitch = 1;

    const voices = window.speechSynthesis.getVoices();
    const match = tts.voicePrefixes.reduce<SpeechSynthesisVoice | undefined>(
      (found, prefix) => found ?? voices.find((v) => v.lang.startsWith(prefix)),
      undefined
    );
    if (match) utterance.voice = match;

    // iOS Safari does not always fire onend: a ceiling scaled on the text
    // keeps the caller from waiting forever.
    const timeout = setTimeout(() => finish(), 3000 + text.length * 400);
    const finish = track(() => {
      clearTimeout(timeout);
      if (activeUtterance === utterance) activeUtterance = null;
      resolve();
    });
    utterance.onend = finish;
    utterance.onerror = finish;
    activeUtterance = utterance;
    window.speechSynthesis.speak(utterance);
  });
}

export function initVoices(): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      resolve();
      return;
    }
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      resolve();
      return;
    }
    window.speechSynthesis.onvoiceschanged = () => resolve();
  });
}

export function isSupported(): boolean {
  return typeof window !== "undefined";
}
