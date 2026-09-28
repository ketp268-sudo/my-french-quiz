"use client";

import { useParams } from "next/navigation";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/get-messages";
import { localizedPath } from "@/i18n/path";
import { clearAnswers, loadAnswers } from "@/lib/quiz-storage";
import {
  buildResultProfile,
  isComplete,
  type ResultProfile,
} from "@/lib/scoring";

export function ResultView() {
  const params = useParams();
  const locale: Locale = isLocale(String(params?.locale))
    ? (String(params.locale) as Locale)
    : defaultLocale;
  const messages = useMemo(() => getMessages(locale), [locale]);

  const [status, setStatus] = useState<"loading" | "empty" | "ready">(
    "loading",
  );
  const [profile, setProfile] = useState<ResultProfile | null>(null);

  useEffect(() => {
    const answers = loadAnswers();
    if (!isComplete(answers)) {
      setStatus("empty");
      return;
    }
    setProfile(buildResultProfile(answers, messages));
    setStatus("ready");
  }, [messages]);

  if (status === "loading") {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <p className="text-xl">{messages.result.loading}</p>
      </div>
    );
  }

  if (status === "empty" || !profile) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <div className="quiz-box rounded-2xl shadow-sm">
          <h1 className="text-3xl font-bold sm:text-4xl">
            {messages.result.emptyTitle}
          </h1>
          <p className="mt-4 text-lg leading-relaxed sm:text-xl">
            {messages.result.emptyBody}
          </p>
          <Button
            href={localizedPath(locale, "/quiz")}
            className="mt-8 w-full sm:w-auto"
          >
            {messages.result.goQuiz}
          </Button>
        </div>
      </div>
    );
  }

  const highlights = messages.result.highlights
    .replace("{primary}", messages.dimensions[profile.primaryDimension])
    .replace("{secondary}", messages.dimensions[profile.secondaryDimension]);

  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-8 sm:px-6 sm:py-10">
      <section className="quiz-box rounded-2xl shadow-sm">
        <p className="text-base font-semibold text-black/75 sm:text-lg">
          {messages.result.overviewLabel}
        </p>
        <h1 className="mt-3 text-3xl font-bold leading-snug sm:text-5xl">
          {messages.result.overviewTitle}
        </h1>
        <p className="mt-5 text-lg leading-relaxed sm:text-2xl">
          {profile.overview}
        </p>
        <p className="mt-5 text-base text-black/75 sm:text-lg">{highlights}</p>
      </section>

      <ResultBlock title={messages.result.strengths}>
        <ul className="list-disc space-y-2 pl-5">
          {profile.strengths.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ResultBlock>

      <ResultBlock title={messages.result.interests}>
        <p>
          <span className="font-semibold">{messages.result.primaryLabel}:</span>{" "}
          {profile.interests.primary}
        </p>
        <p className="mt-2">
          <span className="font-semibold">{messages.result.secondaryLabel}:</span>{" "}
          {profile.interests.secondary}
        </p>
      </ResultBlock>

      <ResultBlock title={messages.result.goals}>
        <p>{profile.goals}</p>
      </ResultBlock>

      <ResultBlock title={messages.result.learningStyle}>
        <p>{profile.learningStyle}</p>
      </ResultBlock>

      <ResultBlock title={messages.result.preparation}>
        <ul className="list-disc space-y-2 pl-5">
          {profile.preparation.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ResultBlock>

      <ResultBlock title={messages.result.starterTips}>
        <ol className="list-decimal space-y-2 pl-5">
          {profile.tips.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </ResultBlock>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
        <Button
          href={localizedPath(locale, "/quiz")}
          className="w-full sm:w-auto"
          onClick={() => clearAnswers()}
        >
          {messages.result.tryAgain}
        </Button>
        <Button
          href={localizedPath(locale, "/tips")}
          variant="secondary"
          className="w-full sm:w-auto"
        >
          {messages.result.moreTips}
        </Button>
        <Button
          href={localizedPath(locale)}
          variant="ghost"
          className="w-full sm:w-auto"
        >
          {messages.result.backHome}
        </Button>
      </div>
    </div>
  );
}

function ResultBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="content-box rounded-2xl border border-black/10 bg-white/55 shadow-sm">
      <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
      <div className="mt-4 text-lg leading-relaxed sm:text-xl">{children}</div>
    </section>
  );
}
