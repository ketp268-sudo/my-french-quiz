"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { QuestionCard } from "@/components/quiz/QuestionCard";
import { ProgressBar } from "@/components/quiz/ProgressBar";
import { Button } from "@/components/ui/Button";
import { questions, TOTAL_QUESTIONS } from "@/data/questions";
import { clearAnswers, loadAnswers, saveAnswers } from "@/lib/quiz-storage";

export function QuizFlow() {
  const router = useRouter();
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
      <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6">
        <p className="text-lg">กำลังโหลดควิซ…</p>
      </div>
    );
  }

  if (!question) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6">
        <p className="text-lg">ไม่พบคำถาม</p>
        <Button href="/" className="mt-6">
          กลับหน้าแรก
        </Button>
      </div>
    );
  }

  if (submitting) {
    return (
      <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-20 text-center sm:px-6">
        <div className="quiz-box w-full max-w-md rounded-2xl p-8 shadow-sm">
          <p className="text-xl font-bold">กำลังสรุปผล…</p>
          <p className="mt-3 text-base">กำลังจัดโปรไฟล์ของคุณให้อ่านง่ายๆ สักครู่</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-10">
      <ProgressBar current={index + 1} total={TOTAL_QUESTIONS} />

      <div className="mt-6">
        <QuestionCard
          question={question}
          selectedId={selectedId}
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
          ย้อนกลับ
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
              router.push("/result");
            }, 700);
          }}
        >
          {isLast ? "ดูผลลัพธ์" : "ถัดไป"}
        </Button>
      </div>

      <p className="mt-8 text-center text-sm text-black/75">
        อยากเริ่มใหม่?{" "}
        <button
          type="button"
          className="font-semibold underline underline-offset-4"
          onClick={() => {
            clearAnswers();
            setAnswers({});
            setIndex(0);
          }}
        >
          ล้างคำตอบทั้งหมด
        </button>
      </p>
    </div>
  );
}
