// Pre-generated audio (instant) → Edge TTS API (high quality) → Web Speech API fallback

let currentAudio: HTMLAudioElement | null = null;

// ── Pre-generated audio manifest ──────────────────────────────────────

let audioManifest: Record<string, string> | null = null;

function getBasePath(): string {
  const w = window as unknown as { __NEXT_DATA__?: { basePath?: string } };
  return w.__NEXT_DATA__?.basePath ?? "";
}

async function getManifest(): Promise<Record<string, string>> {
  if (audioManifest) return audioManifest;
  try {
    const res = await fetch(`${getBasePath()}/audio/manifest.json`);
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
  const audio = new Audio(`${getBasePath()}/audio/${audioFile}`);
  currentAudio = audio;
  return new Promise((resolve) => {
    audio.onended = () => {
      currentAudio = null;
      resolve();
    };
    audio.onerror = () => {
      currentAudio = null;
      resolve();
    };
    audio.play().catch(() => {
      currentAudio = null;
      resolve();
    });
  });
}

// ── Main speak function ───────────────────────────────────────────────

export async function speak(text: string, rate = 0.85): Promise<void> {
  if (typeof window === "undefined") return;

  // Stop any currently playing audio
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
  window.speechSynthesis?.cancel();

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
      voice: "zh-TW-HsiaoChenNeural",
      rate: String(rate),
    });

    const basePath = getBasePath();
    const response = await fetch(`${basePath}/api/tts?${params}`);
    if (response.ok) {
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      currentAudio = audio;

      return new Promise((resolve) => {
        audio.onended = () => {
          URL.revokeObjectURL(url);
          currentAudio = null;
          resolve();
        };
        audio.onerror = () => {
          URL.revokeObjectURL(url);
          currentAudio = null;
          // Fallback to Web Speech
          speakFallback(text, rate).then(resolve);
        };
        audio.play().catch(() => {
          // Autoplay blocked, fallback
          speakFallback(text, rate).then(resolve);
        });
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
    utterance.lang = "zh-TW";
    utterance.rate = rate;
    utterance.pitch = 1;

    const voices = window.speechSynthesis.getVoices();
    const zhVoice =
      voices.find((v) => v.lang === "zh-TW") ||
      voices.find((v) => v.lang.startsWith("zh-Hant")) ||
      voices.find((v) => v.lang.startsWith("zh"));
    if (zhVoice) utterance.voice = zhVoice;

    utterance.onend = () => resolve();
    utterance.onerror = () => resolve();
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
