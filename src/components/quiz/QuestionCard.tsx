"use client";

import type { Choice, Question } from "@/data/questions";

type QuestionCardProps = {
  question: Question;
  selectedId?: string;
  onSelect: (choice: Choice) => void;
};

export function QuestionCard({
  question,
  selectedId,
  onSelect,
}: QuestionCardProps) {
  return (
    <section className="quiz-box rounded-2xl p-5 shadow-sm sm:p-7">
      <h1 className="text-xl font-bold leading-snug sm:text-2xl">
        {question.prompt}
      </h1>
      <p className="mt-2 text-sm text-black/80">เลือกได้ 1 ข้อ — ไม่มีถูกหรือผิด</p>

      <ul className="mt-5 space-y-3">
        {question.choices.map((choice) => {
          const selected = selectedId === choice.id;
          return (
            <li key={choice.id}>
              <button
                type="button"
                onClick={() => onSelect(choice)}
                className={[
                  "w-full rounded-xl border px-4 py-3.5 text-left text-base leading-snug transition",
                  selected
                    ? "border-[var(--accent-blue)] bg-white/85 shadow-sm"
                    : "border-black/10 bg-white/55 hover:bg-white/75",
                ].join(" ")}
                aria-pressed={selected}
              >
                <span className="mr-2 font-semibold">{choice.id.toUpperCase()}.</span>
                {choice.label}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
