import { getBasePath } from "@/lib/basepath";

const SYNC_KEYS = [
  { local: "taiwan-cards", remote: "cards" },
  { local: "taiwan-progress", remote: "progress" },
  { local: "taiwan-course-progress", remote: "path_progress" },
  { local: "taiwan-gamification", remote: "gamification" },
  { local: "taiwan-settings", remote: "settings" },
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
    const body: Record<string, unknown> = {};
    for (const { local, remote } of SYNC_KEYS) {
      const raw = localStorage.getItem(local);
      if (raw) { try { body[remote] = JSON.parse(raw); } catch { body[remote] = raw; } }
    }
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

// Call this when user logs in
export function setConnected(connected: boolean): void {
  isConnected = connected;
}
