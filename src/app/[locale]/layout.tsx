import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/get-messages";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: LocaleLayoutProps) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "th";
  const messages = getMessages(locale);
  return {
    title: messages.meta.title,
    description: messages.meta.description,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const messages = getMessages(locale);

  return (
    <SiteShell locale={locale} messages={messages}>
      <HtmlLang locale={locale} />
      {children}
    </SiteShell>
  );
}

function HtmlLang({ locale }: { locale: Locale }) {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `document.documentElement.lang=${JSON.stringify(locale)};`,
      }}
    />
  );
}
