import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Navbar from "@/components/Navbar";
import { LANG } from "@/lib/language";
import "./globals.css";

// Only the weights actually used. The subset must include the Japanese ranges:
// requesting "latin" alone served a font that could not render any of the content.
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto-jp",
});

export const metadata: Metadata = {
  title: LANG.brand,
  description: LANG.tagline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // The interface is French; Japanese content carries lang="ja" locally, so a
    // screen reader switches voice on the content instead of reading French with
    // a Japanese one.
    <html lang={LANG.htmlLang} className={notoSansJP.variable}>
      <body className="min-h-screen bg-surface font-sans">
        <a href="#contenu" className="skip-link">
          Aller au contenu
        </a>
        <Navbar />
        <main id="contenu" className="mx-auto max-w-6xl px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
