"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { User, LogIn, LogOut } from "lucide-react";
import { checkUser, login, syncUp, syncDown } from "@/lib/sync";
import { cn } from "@/lib/cn";
import { getBasePath } from "@/lib/basepath";

export default function Navbar() {
  const [user, setUser] = useState<{ id: number; username: string } | null>(null);
  const [showLogin, setShowLogin] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    checkUser().then(setUser);
  }, []);

  async function handleLogin() {
    if (!nameInput.trim() || nameInput.trim().length < 2) {
      setError("2 caractères minimum");
      return;
    }
    setLoading(true);
    setError("");
    const u = await login(nameInput.trim());
    if (u) {
      setUser(u);
      setShowLogin(false);
      setNameInput("");
      // Sync: if server has data, load it. Otherwise upload local data.
      const loaded = await syncDown();
      if (!loaded) await syncUp();
      window.location.reload();
    } else {
      setError("Erreur de connexion");
    }
    setLoading(false);
  }

  async function handleLogout() {
    document.cookie = "taiwan-user=; max-age=0; path=/";
    setUser(null);
    window.location.reload();
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-stone-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-stone-900">
          <span className="chinese text-2xl text-primary">學</span>
          <span>Taiwan Mandarin</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/path" className="text-sm font-medium text-stone-600 hover:text-primary transition-colors">
            Parcours
          </Link>
          <Link href="/lessons" className="text-sm font-medium text-stone-600 hover:text-primary transition-colors">
            Leçons
          </Link>
          <Link href="/tones" className="text-sm font-medium text-stone-600 hover:text-primary transition-colors">
            Tons
          </Link>
          <Link href="/dictionary" className="text-sm font-medium text-stone-600 hover:text-primary transition-colors">
            Dictionnaire
          </Link>
          <Link href="/reading" className="text-sm font-medium text-stone-600 hover:text-primary transition-colors">
            Lecture
          </Link>
          <Link href="/progress" className="text-sm font-medium text-stone-600 hover:text-primary transition-colors">
            Progression
          </Link>

          {/* Auth */}
          <div className="relative ml-2">
            {user ? (
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 text-sm font-medium text-primary">
                  <User className="h-4 w-4" />
                  {user.username}
                </span>
                <button onClick={handleLogout} className="text-stone-400 hover:text-stone-600" title="Déconnexion">
                  <LogOut className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowLogin(!showLogin)}
                className="flex items-center gap-1 rounded-lg border border-stone-200 px-3 py-1.5 text-sm font-medium text-stone-600 hover:border-primary hover:text-primary transition-colors"
              >
                <LogIn className="h-4 w-4" />
                Connexion
              </button>
            )}

            {showLogin && !user && (
              <div className="absolute right-0 top-full mt-2 w-64 rounded-xl border border-stone-200 bg-white p-4 shadow-lg z-50">
                <p className="mb-3 text-sm font-medium text-stone-700">Entre ton prénom</p>
                <input
                  type="text"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                  placeholder="Ton prénom..."
                  className="mb-2 w-full rounded-lg border border-stone-200 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                  autoFocus
                />
                {error && <p className="mb-2 text-xs text-danger">{error}</p>}
                <button
                  onClick={handleLogin}
                  disabled={loading}
                  className={cn("btn-primary w-full text-sm", loading && "opacity-50")}
                >
                  {loading ? "..." : "C'est parti !"}
                </button>
                <p className="mt-2 text-xs text-stone-400">Ta progression sera sauvegardée</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
