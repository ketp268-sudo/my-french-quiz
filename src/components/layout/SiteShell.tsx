import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/types";

type SiteShellProps = {
  locale: Locale;
  messages: Messages;
  children: ReactNode;
};

export function SiteShell({ locale, messages, children }: SiteShellProps) {
  return (
    <div className="site-bg flex min-h-full flex-col text-black">
      <SiteHeader locale={locale} messages={messages} />
      <main className="relative z-10 flex-1">{children}</main>
      <SiteFooter locale={locale} messages={messages} />
    </div>
  );
}
