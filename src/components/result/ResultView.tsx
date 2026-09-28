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
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <div className="quiz-box rounded-2xl shadow-sm">
          <h1 className="text-3xl font-bold sm:text-4xl">ยังไม่มีผลลัพธ์</h1>
          <p className="mt-4 text-lg leading-relaxed sm:text-xl">
            ดูเหมือนคุณยังตอบควิซไม่ครบ หรือยังไม่ได้เริ่มสำรวจ
            ลองตอบคำถามสถานการณ์ 10 ข้อก่อนนะ
          </p>
          <Button href="/quiz" className="mt-8 w-full sm:w-auto">
            ไปทำควิซ
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-8 sm:px-6 sm:py-10">
      <section className="quiz-box rounded-2xl shadow-sm">
        <p className="text-base font-semibold text-black/75 sm:text-lg">
          ภาพรวมของคุณ
        </p>
        <h1 className="mt-3 text-3xl font-bold leading-snug sm:text-5xl">
          สวัสดี! นี่คือโปรไฟล์การสำรวจของคุณ
        </h1>
        <p className="mt-5 text-lg leading-relaxed sm:text-2xl">
          {profile.overview}
        </p>
        <p className="mt-5 text-base text-black/75 sm:text-lg">
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
    <section className="content-box rounded-2xl border border-black/10 bg-white/55 shadow-sm">
      <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
      <div className="mt-4 text-lg leading-relaxed sm:text-xl">{children}</div>
    </section>
  );
}
