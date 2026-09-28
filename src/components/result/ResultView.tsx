"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { DIMENSION_LABELS } from "@/data/questions";
import { clearAnswers, loadAnswers } from "@/lib/quiz-storage";
import { buildResultProfile, isComplete } from "@/lib/scoring";
import type { ResultProfile } from "@/data/result-copy";

export function ResultView() {
  const [status, setStatus] = useState<"loading" | "empty" | "ready">("loading");
  const [profile, setProfile] = useState<ResultProfile | null>(null);

  useEffect(() => {
    const answers = loadAnswers();
    if (!isComplete(answers)) {
      setStatus("empty");
      return;
    }
    setProfile(buildResultProfile(answers));
    setStatus("ready");
  }, []);

  if (status === "loading") {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6">
        <p className="text-lg">กำลังจัดเรียงผลลัพธ์…</p>
      </div>
    );
  }

  if (status === "empty" || !profile) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6">
        <div className="quiz-box rounded-2xl p-8 shadow-sm">
          <h1 className="text-2xl font-bold">ยังไม่มีผลลัพธ์</h1>
          <p className="mt-3 text-base leading-relaxed">
            ดูเหมือนคุณยังตอบควิซไม่ครบ หรือยังไม่ได้เริ่มสำรวจ
            ลองตอบคำถามสถานการณ์ 10 ข้อก่อนนะ
          </p>
          <Button href="/quiz" className="mt-6 w-full sm:w-auto">
            ไปทำควิซ
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl space-y-5 px-4 py-8 sm:px-6 sm:py-10">
      <section className="quiz-box rounded-2xl p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold text-black/75">ภาพรวมของคุณ</p>
        <h1 className="mt-2 text-2xl font-bold leading-snug sm:text-3xl">
          สวัสดี! นี่คือโปรไฟล์การสำรวจของคุณ
        </h1>
        <p className="mt-4 text-base leading-relaxed sm:text-lg">
          {profile.overview}
        </p>
        <p className="mt-4 text-sm text-black/75">
          จุดเด่นหลัก: {DIMENSION_LABELS[profile.primaryDimension]} · รอง:{" "}
          {DIMENSION_LABELS[profile.secondaryDimension]}
        </p>
      </section>

      <ResultBlock title="จุดแข็ง">
        <ul className="list-disc space-y-2 pl-5">
          {profile.strengths.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ResultBlock>

      <ResultBlock title="ความสนใจ">
        <p>
          <span className="font-semibold">หลัก:</span> {profile.interests.primary}
        </p>
        <p className="mt-2">
          <span className="font-semibold">รอง:</span> {profile.interests.secondary}
        </p>
      </ResultBlock>

      <ResultBlock title="เป้าหมาย">
        <p>{profile.goals}</p>
      </ResultBlock>

      <ResultBlock title="รูปแบบการเรียนที่เข้ากัน">
        <p>{profile.learningStyle}</p>
      </ResultBlock>

      <ResultBlock title="สิ่งที่ควรเตรียม">
        <ul className="list-disc space-y-2 pl-5">
          {profile.preparation.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ResultBlock>

      <ResultBlock title="เคล็ดลับเริ่มต้น">
        <ol className="list-decimal space-y-2 pl-5">
          {profile.tips.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </ResultBlock>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
        <Button
          href="/quiz"
          className="w-full sm:w-auto"
          onClick={() => clearAnswers()}
        >
          ทำอีกครั้ง
        </Button>
        <Button href="/tips" variant="secondary" className="w-full sm:w-auto">
          ดูเคล็ดลับเพิ่ม
        </Button>
        <Button href="/" variant="ghost" className="w-full sm:w-auto">
          กลับหน้าแรก
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
    <section className="rounded-2xl border border-black/10 bg-white/55 p-5 shadow-sm sm:p-6">
      <h2 className="text-lg font-bold sm:text-xl">{title}</h2>
      <div className="mt-3 text-base leading-relaxed">{children}</div>
    </section>
  );
}
