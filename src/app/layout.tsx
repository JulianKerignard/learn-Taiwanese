import type { Metadata } from "next";
import { Noto_Sans_TC, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

// Both faces are declared here and selected per language in [lang]/layout.tsx.
// next/font only emits the subsets a page actually uses, so declaring both costs
// nothing on a page that renders one.
const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-noto-tc",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto-jp",
});

export const metadata: Metadata = {
  title: "Apprendre une langue",
  description: "Mandarin taïwanais et japonais pour francophones",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // The interface is French throughout; content carries its own lang attribute.
  return (
    <html lang="fr" className={`${notoSansTC.variable} ${notoSansJP.variable}`}>
      <body className="min-h-screen bg-surface">{children}</body>
    </html>
  );
}
