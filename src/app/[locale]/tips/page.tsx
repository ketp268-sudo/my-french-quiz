import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { isLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/get-messages";
import { localizedPath } from "@/i18n/path";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function TipsPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const t = getMessages(locale).tipsPage;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-3xl font-bold sm:text-4xl">{t.title}</h1>
      <p className="mt-3 text-base leading-relaxed sm:text-lg">{t.intro}</p>

      <ol className="mt-8 space-y-5">
        {t.items.map((tip, index) => (
          <li
            key={tip.title}
            className="content-box rounded-2xl border border-black/10 bg-white/55 shadow-sm"
          >
            <p className="text-base font-semibold text-black/70 sm:text-lg">
              {t.tipLabel} {index + 1}
            </p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{tip.title}</h2>
            <p className="mt-3 text-lg leading-relaxed sm:text-xl">{tip.body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href={localizedPath(locale, "/quiz")} className="w-full sm:w-auto">
          {t.ctaQuiz}
        </Button>
        <Button
          href={localizedPath(locale)}
          variant="secondary"
          className="w-full sm:w-auto"
        >
          {t.ctaHome}
        </Button>
      </div>
    </div>
  );
}
