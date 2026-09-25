// Pre-generated audio (instant) → Edge TTS API (high quality) → Web Speech API fallback

let currentAudio: HTMLAudioElement | null = null;

/**
 * Settles the promise of whatever is playing now. Pausing an <audio> fires
 * neither `ended` nor `error`, so without this an interrupted clip never
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

// ── Pre-generated audio manifest ──────────────────────────────────────

import { currentLanguage, currentLanguageCode } from "@/lib/language";

let audioManifest: Record<string, string> | null = null;
let manifestLang: string | null = null;

async function getManifest(): Promise<Record<string, string>> {
  const lang = currentLanguageCode();
  if (audioManifest && manifestLang === lang) return audioManifest;
  manifestLang = lang;
  try {
    const res = await fetch(`/audio/${currentLanguageCode()}/manifest.json`);
    if (res.ok) {
      audioManifest = await res.json();
      return audioManifest!;
    }
  } catch {
    // manifest not available
  }
  audioManifest = {};
  return audioManifest;
}

function playStaticAudio(audioFile: string): Promise<void> {
  const audio = new Audio(`/audio/${currentLanguageCode()}/${audioFile}`);
  currentAudio = audio;
  return new Promise((resolve) => {
    const finish = track(() => {
      if (currentAudio === audio) currentAudio = null;
      resolve();
    });
    audio.onended = finish;
    audio.onerror = finish;
    audio.play().catch(finish);
  });
}

// ── Main speak function ───────────────────────────────────────────────

export async function speak(text: string, rate = 0.85): Promise<void> {
  if (typeof window === "undefined") return;

  // Stop any currently playing audio, and let its caller know it is over.
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
  window.speechSynthesis?.cancel();
  settleCurrent?.();

  // 1. Try pre-generated audio first (instant, zero latency)
  const manifest = await getManifest();
  const audioFile = manifest[text];
  if (audioFile) {
    return playStaticAudio(audioFile);
  }

  // 2. Try Edge TTS API (high quality, slight latency)
  try {
    const params = new URLSearchParams({
      text,
      voice: currentLanguage().tts.voice,
      rate: String(rate),
    });

    const response = await fetch(`/api/tts?${params}`);
    if (response.ok) {
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      currentAudio = audio;

      return new Promise((resolve) => {
        const finish = track(() => {
          URL.revokeObjectURL(url);
          if (currentAudio === audio) currentAudio = null;
          resolve();
        });
        const fallback = () => {
          // The clip failed or autoplay was blocked: hand over to Web Speech,
          // unless another speak() has taken over in the meantime.
          if (settleCurrent !== finish) return;
          URL.revokeObjectURL(url);
          if (currentAudio === audio) currentAudio = null;
          speakFallback(text, rate).then(resolve);
        };
        audio.onended = finish;
        audio.onerror = fallback;
        audio.play().catch(fallback);
      });
    }
  } catch {
    // API unreachable, fallback
  }

  // 3. Web Speech API fallback
  return speakFallback(text, rate);
}

// Web Speech API fallback
function speakFallback(text: string, rate: number): Promise<void> {
  return new Promise((resolve) => {
    if (!window.speechSynthesis) {
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
      resolve();
    });
    utterance.onend = finish;
    utterance.onerror = finish;
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
