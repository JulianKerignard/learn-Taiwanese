"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { User, LogIn, LogOut, Menu, X } from "lucide-react";
import { checkUser, login, syncUp, syncDown, setConnected } from "@/lib/sync";
import { cn } from "@/lib/cn";
import { getBasePath } from "@/lib/basepath";

export default function Navbar() {
  const [user, setUser] = useState<{ id: number; username: string } | null>(null);
  const [showLogin, setShowLogin] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    checkUser().then(setUser);
  }, []);

  async function handleLogin() {
    if (!nameInput.trim() || nameInput.trim().length < 3) {
      setError("3 caractères minimum");
      return;
    }
    setLoading(true);
    setError("");
    const u = await login(nameInput.trim());
    if (u) {
      setUser(u);
      setShowLogin(false);
      setNameInput("");
      setConnected(true);
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
    await fetch(`${getBasePath()}/api/auth/logout`, { method: "POST" });
    setConnected(false);
    setUser(null);
    window.location.reload();
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-stone-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-stone-900">
          <span className="chinese text-2xl text-primary">學</span>
          <span className="hidden sm:inline">Taiwan Mandarin</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
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
          <Link href="/funfacts" className="text-sm font-medium text-stone-600 hover:text-primary transition-colors">
            Fun Facts
          </Link>
          <Link href="/games" className="text-sm font-medium text-stone-600 hover:text-primary transition-colors">
            Jeux
          </Link>
          <Link href="/tests" className="text-sm font-medium text-stone-600 hover:text-primary transition-colors">
            Tests
          </Link>
          <Link href="/progress" className="text-sm font-medium text-stone-600 hover:text-primary transition-colors">
            Progression
          </Link>

          {/* Auth desktop */}
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

        {/* Hamburger button */}
        <button
          className="md:hidden flex items-center justify-center rounded-lg p-2 text-stone-600 hover:bg-stone-100 transition-colors"
          onClick={() => setMenuOpen(true)}
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Mobile drawer */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div className="absolute inset-0 bg-black/30" onClick={() => setMenuOpen(false)} />
            <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-xl flex flex-col">
              <div className="flex items-center justify-between border-b border-stone-200 px-4 py-3">
                <span className="text-lg font-bold text-stone-900">Menu</span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg p-1.5 text-stone-500 hover:bg-stone-100"
                  aria-label="Fermer le menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-1 p-4">
                <Link href="/path" onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-stone-700 hover:bg-stone-100 transition-colors">Parcours</Link>
                <Link href="/lessons" onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-stone-700 hover:bg-stone-100 transition-colors">Leçons</Link>
                <Link href="/tones" onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-stone-700 hover:bg-stone-100 transition-colors">Tons</Link>
                <Link href="/dictionary" onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-stone-700 hover:bg-stone-100 transition-colors">Dictionnaire</Link>
                <Link href="/reading" onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-stone-700 hover:bg-stone-100 transition-colors">Lecture</Link>
                <Link href="/funfacts" onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-stone-700 hover:bg-stone-100 transition-colors">Fun Facts</Link>
                <Link href="/games" onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-stone-700 hover:bg-stone-100 transition-colors">Jeux</Link>
                <Link href="/tests" onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-stone-700 hover:bg-stone-100 transition-colors">Tests</Link>
                <Link href="/progress" onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-stone-700 hover:bg-stone-100 transition-colors">Progression</Link>
              </nav>
              <div className="mt-auto border-t border-stone-200 p-4">
                {user ? (
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-sm font-medium text-primary">
                      <User className="h-4 w-4" />
                      {user.username}
                    </span>
                    <button onClick={() => { handleLogout(); setMenuOpen(false); }} className="text-stone-400 hover:text-stone-600" title="Déconnexion">
                      <LogOut className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => { setShowLogin(!showLogin); setMenuOpen(false); }}
                    className="flex w-full items-center justify-center gap-1 rounded-lg border border-stone-200 px-3 py-2 text-sm font-medium text-stone-600 hover:border-primary hover:text-primary transition-colors"
                  >
                    <LogIn className="h-4 w-4" />
                    Connexion
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
