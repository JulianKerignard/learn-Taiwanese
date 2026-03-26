import { getBasePath } from "@/lib/basepath";
import { KEYS } from "@/lib/storage";

const SYNC_KEYS = [
  { local: KEYS.cards, remote: "cards" },
  { local: KEYS.progress, remote: "progress" },
  { local: KEYS.courseProgress, remote: "path_progress" },
  { local: KEYS.gamification, remote: "gamification" },
  { local: KEYS.settings, remote: "settings" },
  { local: KEYS.speedRecord, remote: "speed_record" },
  { local: KEYS.studyTime, remote: "study_time" },
  { local: KEYS.mistakes, remote: "mistakes" },
];

export async function checkUser(): Promise<{ id: number; username: string } | null> {
  try {
    const res = await fetch(`${getBasePath()}/api/auth/me`);
    if (!res.ok) return null;
    const data = await res.json();
    return data.user || null;
  } catch { return null; }
}

export async function login(username: string): Promise<{ id: number; username: string } | null> {
  try {
    const res = await fetch(`${getBasePath()}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.user || null;
  } catch { return null; }
}

export async function syncUp(): Promise<boolean> {
  try {
    // Snapshot all data before async operation to avoid race conditions
    const body: Record<string, unknown> = {};
    for (const { local, remote } of SYNC_KEYS) {
      const raw = localStorage.getItem(local);
      if (raw) { try { body[remote] = JSON.parse(raw); } catch { body[remote] = raw; } }
    }
    if (Object.keys(body).length === 0) return true;
    const res = await fetch(`${getBasePath()}/api/progress/save`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return res.ok;
  } catch { return false; }
}

export async function syncDown(): Promise<boolean> {
  try {
    const res = await fetch(`${getBasePath()}/api/progress/load`);
    if (!res.ok) return false;
    const data = await res.json();
    for (const { local, remote } of SYNC_KEYS) {
      if (data[remote] !== undefined) {
        localStorage.setItem(local, JSON.stringify(data[remote]));
      }
    }
    return true;
  } catch { return false; }
}

let saveTimeout: ReturnType<typeof setTimeout> | null = null;
let isConnected: boolean | null = null;

export function scheduleSync(): void {
  if (saveTimeout) clearTimeout(saveTimeout);
  saveTimeout = setTimeout(async () => {
    // Check connection status once, then cache it
    if (isConnected === null) {
      const user = await checkUser();
      isConnected = user !== null;
    }
    if (isConnected) {
      const ok = await syncUp();
      if (!ok) isConnected = null; // Reset on failure
    }
  }, 3000);
}

// Ensure final sync before page close
if (typeof window !== "undefined") {
  window.addEventListener("beforeunload", () => {
    if (isConnected) {
      const body: Record<string, unknown> = {};
      for (const { local, remote } of SYNC_KEYS) {
        const raw = localStorage.getItem(local);
        if (raw) { try { body[remote] = JSON.parse(raw); } catch { body[remote] = raw; } }
      }
      navigator.sendBeacon(
        `${typeof getBasePath === "function" ? getBasePath() : ""}/api/progress/save`,
        new Blob([JSON.stringify(body)], { type: "application/json" })
      );
    }
  });
}

// Call this when user logs in
export function setConnected(connected: boolean): void {
  isConnected = connected;
}
