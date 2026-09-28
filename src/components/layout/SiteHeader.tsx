import Link from "next/link";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/path";
import type { Messages } from "@/i18n/types";

type SiteHeaderProps = {
  locale: Locale;
  messages: Messages;
};

export function SiteHeader({ locale, messages }: SiteHeaderProps) {
  const nav = [
    { href: localizedPath(locale, "/about"), label: messages.nav.about },
    { href: localizedPath(locale, "/quiz"), label: messages.nav.quiz },
    { href: localizedPath(locale, "/tips"), label: messages.nav.tips },
  ];

  return (
    <header className="relative z-10 border-b border-black/10 bg-white/20 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link
          href={localizedPath(locale)}
          className="text-lg font-bold tracking-tight text-black sm:text-xl"
        >
          {messages.brand}
        </Link>
        <div className="flex flex-wrap items-center justify-end gap-x-3 gap-y-2">
          <nav className="flex flex-wrap items-center justify-end gap-x-3 gap-y-1 text-sm font-medium sm:text-base">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-black/90 underline-offset-4 hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <LanguageSwitcher locale={locale} labels={messages.langSwitch} />
        </div>
      </div>
    </header>
  );
}
