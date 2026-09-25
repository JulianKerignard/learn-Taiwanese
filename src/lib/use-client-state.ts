"use client";

import { useCallback, useState, useSyncExternalStore, type Dispatch, type SetStateAction } from "react";

const subscribeNever = () => () => {};

/**
 * False while rendering on the server and during hydration, true on every
 * client render after that — including the very first render of a component
 * mounted by a client-side navigation, which has no prerendered HTML to match.
 */
export function useHydrated(): boolean {
  return useSyncExternalStore(subscribeNever, () => true, () => false);
}

/**
 * State whose initial value only the browser can produce: localStorage, a
 * feature check, a random draw.
 *
 * The prerender carries `fallback`; `read` runs once hydration is over, and
 * again whenever `key` changes (a new lesson in a reused page component).
 * Unlike a setState in a mount effect, the read happens during render: React
 * re-renders before committing instead of painting the fallback first, and a
 * client-side navigation reads it on the very first render.
 *
 * `ready` is false exactly while `value` is still the fallback — the signal
 * to keep reader-specific UI (counters, locks, "commence ton parcours") out of
 * the prerendered markup rather than presenting an empty store as a measurement.
 */
export function useClientState<T>(
  read: () => T,
  fallback: T,
  key = ""
): [value: T, setValue: Dispatch<SetStateAction<T>>, ready: boolean] {
  const hydrated = useHydrated();
  const [state, setState] = useState<{ key: string | null; value: T }>(() =>
    hydrated ? { key, value: read() } : { key: null, value: fallback }
  );

  let current = state;
  if (hydrated && state.key !== key) {
    // Adjusting state while rendering: React discards this render's output and
    // renders again with the stored value before anything reaches the screen.
    current = { key, value: read() };
    setState(current);
  }

  const setValue = useCallback<Dispatch<SetStateAction<T>>>((action) => {
    setState((prev) => ({
      key: prev.key,
      value: typeof action === "function" ? (action as (prev: T) => T)(prev.value) : action,
    }));
  }, []);

  return [current.value, setValue, current.key !== null];
}
