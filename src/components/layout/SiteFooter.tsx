import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/path";
import type { Messages } from "@/i18n/types";

type SiteFooterProps = {
  locale: Locale;
  messages: Messages;
};

export function SiteFooter({ locale, messages }: SiteFooterProps) {
  return (
    <footer className="relative z-10 mt-auto border-t border-black/10 bg-white/20">
      <div className="mx-auto flex max-w-3xl flex-col gap-2 px-4 py-6 text-sm text-black sm:px-6 sm:flex-row sm:items-center sm:justify-between">
        <p>{messages.footer.tagline}</p>
        <p className="flex flex-wrap gap-3">
          <Link
            href={localizedPath(locale, "/about")}
            className="underline-offset-4 hover:underline"
          >
            {messages.footer.about}
          </Link>
          <Link
            href={localizedPath(locale, "/tips")}
            className="underline-offset-4 hover:underline"
          >
            {messages.footer.tips}
          </Link>
        </p>
      </div>
    </footer>
  );
}
