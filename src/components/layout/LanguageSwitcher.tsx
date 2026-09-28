"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { swapLocalePath } from "@/i18n/path";
import type { Messages } from "@/i18n/types";

type LanguageSwitcherProps = {
  locale: Locale;
  labels: Messages["langSwitch"];
};

export function LanguageSwitcher({ locale, labels }: LanguageSwitcherProps) {
  const pathname = usePathname() || `/${locale}`;

  return (
    <div
      className="flex items-center gap-1 rounded-lg border border-black/15 bg-white/40 px-1.5 py-1 text-sm font-semibold"
      aria-label={labels.label}
    >
      {(["th", "en"] as const).map((code) => {
        const active = locale === code;
        return (
          <Link
            key={code}
            href={swapLocalePath(pathname, code)}
            className={[
              "rounded-md px-2 py-0.5 transition",
              active
                ? "bg-[var(--btn-primary)] text-black"
                : "text-black/70 hover:bg-white/70",
            ].join(" ")}
            aria-current={active ? "page" : undefined}
          >
            {code === "th" ? labels.th : labels.en}
          </Link>
        );
      })}
    </div>
  );
}
