import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import Navbar from "@/components/Navbar";
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
