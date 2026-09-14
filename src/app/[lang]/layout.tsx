import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContentLanguageProvider from "@/components/ContentLanguage";
import { LANGUAGE_SEGMENTS, getLanguage } from "@/lib/language";

export function generateStaticParams() {
  return LANGUAGE_SEGMENTS.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const language = getLanguage(lang);
  return language ? { title: language.name, description: language.tagline } : {};
}

export default async function LanguageLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const language = getLanguage(lang);
  if (!language) notFound();

  return (
    <ContentLanguageProvider lang={language.segment}>
      <div data-lang={language.code}>
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        <Navbar lang={language.segment} />
        <main id="main-content" className="mx-auto max-w-6xl px-4 py-8">
          {children}
        </main>
      </div>
    </ContentLanguageProvider>
  );
}
