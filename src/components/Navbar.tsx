"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, LogIn, LogOut, Menu, X } from "lucide-react";
import { checkUser, login, syncUp, syncDown, setConnected } from "@/lib/sync";
import SyncStatus from "@/components/SyncStatus";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { cn } from "@/lib/cn";
import { LANGUAGES, langHref, type LanguageSegment } from "@/lib/language";

/** Every link carries the edition it belongs to: a bare href leaves the tree. */
export default function Navbar({ lang }: { lang: LanguageSegment }) {
  const language = LANGUAGES[lang];
  const pathname = usePathname();

  // Reading comes before everything else: an edition with a syllabary to learn
  // (Japanese kana) opens its links with it.
  const links = [
    ...(language.readingCourse
      ? [{ path: `/${language.readingCourse.slug}`, label: language.readingCourse.label }]
      : []),
    { path: "/path", label: "Parcours" },
    { path: "/lessons", label: "Leçons" },
    { path: "/revision", label: "Révision" },
    { path: `/${language.phonology.slug}`, label: language.phonology.label },
    { path: "/dictionary", label: "Dictionnaire" },
    { path: "/reading", label: "Lecture" },
    { path: "/funfacts", label: "Fun Facts" },
    { path: "/games", label: "Jeux" },
    { path: "/tests", label: "Tests" },
    { path: "/progress", label: "Progression" },
  ].map((link) => {
    const href = langHref(lang, link.path);
    const active = pathname === href || (pathname ?? "").startsWith(`${href}/`);
    return { ...link, href, active };
  });

  const [user, setUser] = useState<{ id: number; username: string } | null>(null);
  const [showLogin, setShowLogin] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [drawerLogin, setDrawerLogin] = useState(false);

  useEffect(() => {
    checkUser().then(setUser);
  }, []);

  // An open drawer owns the screen: the page behind must not scroll under the
  // finger, and Escape closes it like any dialog.
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

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
      setDrawerLogin(false);
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
    await fetch("/api/auth/logout", { method: "POST" });
    setConnected(false);
    setUser(null);
    window.location.reload();
  }

  // One form, two homes: the desktop popover and the mobile drawer.
  const loginForm = (id: string) => (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin();
      }}
    >
      <label htmlFor={id} className="mb-3 block text-sm font-medium text-stone-700">
        Entre ton prénom
      </label>
      <input
        id={id}
        type="text"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
        placeholder="Ton prénom..."
        autoComplete="username"
        autoCapitalize="none"
        // 16px on touch screens: iOS Safari zooms into any smaller field on
        // focus and leaves the page zoomed afterwards.
        className="mb-2 w-full rounded-lg border border-stone-200 px-3 py-2 text-base focus:border-primary sm:text-sm"
        autoFocus
      />
      {error && <p className="mb-2 text-xs text-danger">{error}</p>}
      <button type="submit" disabled={loading} className={cn("btn-primary w-full", loading && "opacity-50")}>
        {loading ? "..." : "C'est parti !"}
      </button>
      <p className="mt-2 text-xs text-stone-500">Ta progression sera sauvegardée</p>
    </form>
  );

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-stone-200 bg-white/80 backdrop-blur-sm">
        <div className="w-full mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link
            href={langHref(lang, "/")}
            className="flex shrink-0 items-center gap-2 whitespace-nowrap text-lg font-bold text-stone-900"
          >
            <span className="chinese text-2xl text-primary" lang={language.contentLang}>
              {language.nameNative.slice(0, 1)}
            </span>
            {/* The name makes way for the links between xl and 2xl: the
                language switcher already says which edition this is. */}
            <span className="hidden sm:inline xl:hidden 2xl:inline">{language.name}</span>
          </Link>

          {/* Desktop nav. Up to eleven links (Kana leads the Japanese edition):
              below xl the drawer takes over rather than letting the row push the
              page sideways. gap-3, not gap-4: at 2xl the edition name returns
              beside the logo and the Mandarin row overran its container by 7px. */}
          <div className="hidden items-center gap-3 xl:flex">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.href}
                aria-current={link.active ? "page" : undefined}
                className={cn(
                  "whitespace-nowrap text-sm font-medium transition-colors hover:text-primary",
                  link.active ? "text-primary" : "text-stone-600"
                )}
              >
                {link.label}
              </Link>
            ))}

            <LanguageSwitcher />

            {/* Auth desktop */}
            <div className="relative">
              {user ? (
                <div className="flex items-center gap-2">
                  {/* Names run to 32 characters; uncapped, a long one pushed
                      the row ~100px past its container. */}
                  <span
                    className="flex items-center gap-1 whitespace-nowrap text-sm font-medium text-primary"
                    title={user.username}
                  >
                    <User className="h-4 w-4 shrink-0" />
                    <span className="max-w-[6rem] truncate">{user.username}</span>
                  </span>
                  <SyncStatus />
                  <button
                    onClick={handleLogout}
                    className="rounded p-1 text-stone-400 hover:text-stone-600"
                    title="Déconnexion"
                    aria-label="Déconnexion"
                  >
                    <LogOut className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowLogin(!showLogin)}
                  aria-expanded={showLogin}
                  className="flex items-center gap-1 whitespace-nowrap rounded-lg border border-stone-200 px-3 py-1.5 text-sm font-medium text-stone-600 transition-colors hover:border-primary hover:text-primary"
                >
                  <LogIn className="h-4 w-4" />
                  Connexion
                </button>
              )}

              {showLogin && !user && (
                <div className="absolute right-0 top-full z-50 mt-2 w-64 rounded-xl border border-stone-200 bg-white p-4 shadow-lg">
                  {loginForm("login-desktop")}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            <LanguageSwitcher />
            <button
              className="flex h-10 w-10 items-center justify-center rounded-lg text-stone-600 transition-colors hover:bg-stone-100"
              onClick={() => setMenuOpen(true)}
              aria-label="Ouvrir le menu"
              aria-expanded={menuOpen}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer. A sibling of <nav>, not a child: the nav's backdrop-blur
          makes it the containing block of any fixed descendant, which pinned the
          drawer to the 64px bar and spilled the links over the page. */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] xl:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="absolute inset-0 bg-black/30" onClick={() => setMenuOpen(false)} />
          <div className="absolute right-0 top-0 flex h-full w-72 max-w-[85vw] flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-stone-200 px-4 py-3">
              <span className="text-lg font-bold text-stone-900">Menu</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-stone-500 hover:bg-stone-100"
                aria-label="Fermer le menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-1 flex-col gap-1 overflow-y-auto overscroll-contain p-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={link.active ? "page" : undefined}
                  className={cn(
                    "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-stone-100",
                    link.active ? "bg-primary/5 text-primary" : "text-stone-700"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="border-t border-stone-200 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
              {user ? (
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-sm font-medium text-primary">
                    <User className="h-4 w-4" />
                    {user.username}
                    <SyncStatus />
                  </span>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMenuOpen(false);
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-stone-400 hover:text-stone-600"
                    title="Déconnexion"
                    aria-label="Déconnexion"
                  >
                    <LogOut className="h-4 w-4" />
                  </button>
                </div>
              ) : drawerLogin ? (
                loginForm("login-drawer")
              ) : (
                <button
                  onClick={() => setDrawerLogin(true)}
                  className="flex w-full items-center justify-center gap-1 rounded-lg border border-stone-200 px-3 py-2.5 text-sm font-medium text-stone-600 transition-colors hover:border-primary hover:text-primary"
                >
                  <LogIn className="h-4 w-4" />
                  Connexion
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
