"use client";

import { useSyncExternalStore } from "react";
import { AlertTriangle, Check, RefreshCw } from "lucide-react";
import { getSyncState, subscribeSyncState } from "@/lib/sync";

/**
 * Makes a failed save impossible to miss. The client used to ignore the result
 * of syncUp entirely, so a server that refused the payload (a "cards" key over
 * the per-key ceiling, an expired session) left the user revising against a
 * backup that had silently stopped updating.
 *
 * Renders nothing until a sync has actually been attempted, so a visitor who
 * never signs in sees no chrome.
 */
export default function SyncStatus() {
  const state = useSyncExternalStore(subscribeSyncState, getSyncState, getSyncState);

  if (state.status === "idle") return null;

  if (state.status === "error") {
    return (
      <span
        role="status"
        aria-live="polite"
        title={state.message ?? "La progression n'est plus sauvegardée sur le serveur"}
        className="flex items-center gap-1 text-xs font-medium text-danger"
      >
        <AlertTriangle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        Non synchronisé
      </span>
    );
  }

  if (state.status === "syncing") {
    return (
      <span role="status" aria-live="polite" title="Synchronisation…" className="text-stone-400">
        <RefreshCw className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />
        <span className="sr-only">Synchronisation…</span>
      </span>
    );
  }

  return (
    <span role="status" aria-live="polite" title="Progression sauvegardée" className="text-emerald-600">
      <Check className="h-3.5 w-3.5" aria-hidden="true" />
      <span className="sr-only">Progression sauvegardée</span>
    </span>
  );
}
