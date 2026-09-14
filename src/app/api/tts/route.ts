import { NextRequest } from "next/server";
import { EdgeTTS } from "edge-tts-universal";

const audioCache = new Map<string, ArrayBuffer>();
const MAX_CACHE = 500;

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const text = searchParams.get("text");
  const voice = searchParams.get("voice") || "zh-TW-HsiaoChenNeural";
  const rate = searchParams.get("rate") || "0.85";

  const ALLOWED_VOICES = ["zh-TW-HsiaoChenNeural", "zh-TW-YunJheNeural"];
  const safeVoice = ALLOWED_VOICES.includes(voice) ? voice : "zh-TW-HsiaoChenNeural";
  const rateNum = parseFloat(rate);
  const safeRate = (!isNaN(rateNum) && rateNum >= 0.5 && rateNum <= 2.0) ? rate : "0.85";

  if (!text || text.length > 500) {
    return Response.json({ error: "Invalid text" }, { status: 400 });
  }

  const cacheKey = `${safeVoice}:${safeRate}:${text}`;

  const cached = audioCache.get(cacheKey);
  if (cached) {
    return new Response(cached, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Cache-Control": "public, max-age=86400",
      },
    });
  }

  try {
    const ratePercent = Math.round((parseFloat(safeRate) - 1) * 100);
    const rateStr = ratePercent >= 0 ? `+${ratePercent}%` : `${ratePercent}%`;

    const tts = new EdgeTTS(text, safeVoice, { rate: rateStr });
    const result = await tts.synthesize();
    const arrayBuffer = await result.audio.arrayBuffer();

    if (audioCache.size >= MAX_CACHE) {
      const firstKey = audioCache.keys().next().value;
      if (firstKey) audioCache.delete(firstKey);
    }
    audioCache.set(cacheKey, arrayBuffer);

    return new Response(arrayBuffer, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch (error) {
    console.error("Edge TTS error:", error);
    return Response.json({ error: "TTS failed" }, { status: 500 });
  }
}
