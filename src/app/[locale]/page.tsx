import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { isLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/get-messages";
import { localizedPath } from "@/i18n/path";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const t = getMessages(locale).home;
  const brand = getMessages(locale).brand;

  return (
    <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-3xl flex-col justify-center px-4 py-12 sm:px-6 sm:py-16">
      <section className="max-w-xl animate-[fadeUp_0.7s_ease-out]">
        <p className="text-sm font-semibold tracking-wide text-black/70 sm:text-base">
          {t.eyebrow}
        </p>
        <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          {brand}
        </h1>
        <p className="mt-5 text-lg leading-relaxed sm:text-xl">{t.tagline}</p>
        <p className="mt-2 text-base text-black/80 sm:text-lg">{t.support}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button
            href={localizedPath(locale, "/quiz")}
            className="w-full sm:w-auto sm:min-w-44"
          >
            {t.ctaStart}
          </Button>
          <Button
            href={localizedPath(locale, "/about")}
            variant="secondary"
            className="w-full sm:w-auto"
          >
            {t.ctaAbout}
          </Button>
        </div>

        <p className="mt-6">
          <Button
            href={localizedPath(locale, "/tips")}
            variant="ghost"
            className="px-0"
          >
            {t.ctaTips}
          </Button>
        </p>
      </section>

      <p className="mt-16 max-w-md text-sm leading-relaxed text-black/75 animate-[fadeUp_1s_ease-out]">
        {t.note}
      </p>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
