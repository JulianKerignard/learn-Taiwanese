import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-chinese",
});

export const metadata: Metadata = {
  title: "Learn Taiwanese Mandarin",
  description: "Apprendre le chinois mandarin pour vivre à Taiwan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant-TW" className={notoSansTC.variable}>
      <body className="min-h-screen bg-surface">
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
      </body>
    </html>
  );
}

function Navbar() {
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
        </div>
      </div>
    </nav>
  );
}
