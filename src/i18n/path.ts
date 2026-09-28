import type { Locale } from "@/i18n/config";

/** Build a locale-prefixed path, e.g. localizedPath("en", "/quiz") → "/en/quiz" */
export function localizedPath(locale: Locale, path = "/"): string {
  if (!path || path === "/") return `/${locale}`;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${clean}`;
}

/** Swap locale in a pathname like /th/quiz → /en/quiz */
export function swapLocalePath(pathname: string, nextLocale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments[0] === "th" || segments[0] === "en") {
    segments[0] = nextLocale;
  } else {
    segments.unshift(nextLocale);
  }
  return `/${segments.join("/")}`;
}
