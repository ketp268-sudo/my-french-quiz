import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { isLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/get-messages";
import { localizedPath } from "@/i18n/path";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const t = getMessages(locale).about;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-3xl font-bold sm:text-4xl">{t.title}</h1>
      <p className="mt-3 text-base leading-relaxed sm:text-lg">{t.intro}</p>

      <div className="mt-8 space-y-5">
        {t.blocks.map((block) => (
          <section
            key={block.title}
            className="content-box rounded-2xl border border-black/10 bg-[rgba(100,170,230,0.28)]"
          >
            <h2 className="text-2xl font-bold sm:text-3xl">{block.title}</h2>
            <p className="mt-3 text-lg leading-relaxed sm:text-xl">{block.body}</p>
          </section>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href={localizedPath(locale, "/quiz")} className="w-full sm:w-auto">
          {t.ctaStart}
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
