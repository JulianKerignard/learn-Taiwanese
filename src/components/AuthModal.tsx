"use client";

import { useState, useEffect, useCallback } from "react";
import { User, LogIn, UserPlus, X } from "lucide-react";
import { syncDown, syncUp } from "@/lib/sync";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuth: (user: { id: number; username: string }) => void;
}

function getBasePath(): string {
  if (typeof window === "undefined") return "";
  const w = window as unknown as { __NEXT_DATA__?: { basePath?: string } };
  return w.__NEXT_DATA__?.basePath ?? "";
}

export default function AuthModal({ isOpen, onClose, onAuth }: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setUsername("");
      setPassword("");
      setError("");
    }
  }, [isOpen]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose],
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const endpoint =
        mode === "login" ? "/api/auth/login" : "/api/auth/register";
      const res = await fetch(`${getBasePath()}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Une erreur est survenue");
        setLoading(false);
        return;
      }

      if (mode === "login") {
        await syncDown();
        window.dispatchEvent(new Event("storage"));
      } else {
        await syncUp();
      }

      onAuth(data.user);
      onClose();
    } catch {
      setError("Erreur de connexion au serveur");
    } finally {
      setLoading(false);
    }
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="card relative mx-4 w-full max-w-sm">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-stone-400 transition-colors hover:text-stone-600"
        >
          <X size={20} />
        </button>

        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            {mode === "login" ? (
              <LogIn size={24} className="text-primary" />
            ) : (
              <UserPlus size={24} className="text-primary" />
            )}
          </div>
          <h2 className="text-lg font-bold text-stone-900">
            {mode === "login" ? "Se connecter" : "Creer un compte"}
          </h2>
          <p className="mt-1 text-sm text-stone-500">
            {mode === "login"
              ? "Retrouvez votre progression"
              : "Sauvegardez votre progression"}
          </p>
        </div>

        {error && (
          <div className="mb-4 rounded-lg bg-danger/10 px-3 py-2 text-sm text-danger">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="auth-username"
              className="mb-1 block text-sm font-medium text-stone-700"
            >
              Nom d&apos;utilisateur
            </label>
            <div className="relative">
              <User
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"
              />
              <input
                id="auth-username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-lg border border-stone-300 py-2 pl-9 pr-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Votre pseudo"
                minLength={3}
                required
                autoComplete="username"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="auth-password"
              className="mb-1 block text-sm font-medium text-stone-700"
            >
              Mot de passe
            </label>
            <input
              id="auth-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="Votre mot de passe"
              minLength={4}
              required
              autoComplete={
                mode === "login" ? "current-password" : "new-password"
              }
            />
          </div>

          <button type="submit" className="btn-primary w-full" disabled={loading}>
            {loading
              ? "Chargement..."
              : mode === "login"
                ? "Se connecter"
                : "Creer le compte"}
          </button>
        </form>

        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={() => {
              setMode(mode === "login" ? "register" : "login");
              setError("");
            }}
            className="text-sm text-stone-500 transition-colors hover:text-primary"
          >
            {mode === "login"
              ? "Pas encore de compte ? S'inscrire"
              : "Deja un compte ? Se connecter"}
          </button>
        </div>
      </div>
    </div>
  );
}
