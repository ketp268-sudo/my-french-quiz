"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { QuestionCard } from "@/components/quiz/QuestionCard";
import { ProgressBar } from "@/components/quiz/ProgressBar";
import { Button } from "@/components/ui/Button";
import { TOTAL_QUESTIONS } from "@/data/question-defs";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";
import { getLocalizedQuestions, getMessages } from "@/i18n/get-messages";
import { localizedPath } from "@/i18n/path";
import { clearAnswers, loadAnswers, saveAnswers } from "@/lib/quiz-storage";

export function QuizFlow() {
  const router = useRouter();
  const params = useParams();
  const locale: Locale = isLocale(String(params?.locale))
    ? (String(params.locale) as Locale)
    : defaultLocale;
  const messages = useMemo(() => getMessages(locale), [locale]);
  const questions = useMemo(() => getLocalizedQuestions(locale), [locale]);

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [ready, setReady] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setAnswers(loadAnswers());
    setReady(true);
  }, []);

  const question = questions[index];
  const selectedId = question ? answers[question.id] : undefined;
  const isLast = index === TOTAL_QUESTIONS - 1;

  if (!ready) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <p className="text-lg">{messages.quiz.loading}</p>
      </div>
    );
  }

  if (!question) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <p className="text-lg">{messages.quiz.missing}</p>
        <Button href={localizedPath(locale)} className="mt-6">
          {messages.quiz.backHome}
        </Button>
      </div>
    );
  }

  if (submitting) {
    return (
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-20 text-center sm:px-6">
        <div className="quiz-box w-full max-w-xl rounded-2xl shadow-sm">
          <p className="text-2xl font-bold sm:text-3xl">
            {messages.quiz.summarizing}
          </p>
          <p className="mt-4 text-lg sm:text-xl">
            {messages.quiz.summarizingHint}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
      <ProgressBar
        current={index + 1}
        total={TOTAL_QUESTIONS}
        labelTemplate={messages.quiz.progress}
      />

      <div className="mt-8">
        <QuestionCard
          question={question}
          selectedId={selectedId}
          hint={messages.quiz.hint}
          onSelect={(choice) => {
            const next = { ...answers, [question.id]: choice.id };
            setAnswers(next);
            saveAnswers(next);
          }}
        />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-between">
        <Button
          variant="secondary"
          disabled={index === 0}
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          className="w-full sm:w-auto"
        >
          {messages.quiz.back}
        </Button>
        <Button
          disabled={!selectedId}
          className="w-full sm:w-auto"
          onClick={() => {
            if (!selectedId) return;
            if (!isLast) {
              setIndex((i) => Math.min(TOTAL_QUESTIONS - 1, i + 1));
              return;
            }
            setSubmitting(true);
            window.setTimeout(() => {
              router.push(localizedPath(locale, "/result"));
            }, 700);
          }}
        >
          {isLast ? messages.quiz.seeResults : messages.quiz.next}
        </Button>
      </div>

      <p className="mt-8 text-center text-sm text-black/75">
        {messages.quiz.restartPrompt}{" "}
        <button
          type="button"
          className="font-semibold underline underline-offset-4"
          onClick={() => {
            clearAnswers();
            setAnswers({});
            setIndex(0);
          }}
        >
          {messages.quiz.clearAnswers}
        </button>
      </p>
    </div>
  );
}
