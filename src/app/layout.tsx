import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-noto-tc",
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
    <html lang="fr" className={notoSansTC.variable}>
      <body className="min-h-screen bg-surface">
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        <Navbar />
        <main id="main-content" className="mx-auto max-w-6xl px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
