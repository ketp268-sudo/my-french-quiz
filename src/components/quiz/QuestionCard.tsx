"use client";

import type { Choice, Question } from "@/data/question-defs";

type QuestionCardProps = {
  question: Question;
  selectedId?: string;
  onSelect: (choice: Choice) => void;
  hint: string;
};

export function QuestionCard({
  question,
  selectedId,
  onSelect,
  hint,
}: QuestionCardProps) {
  return (
    <section className="quiz-box rounded-2xl shadow-sm">
      <h1 className="text-2xl font-bold leading-snug sm:text-4xl">
        {question.prompt}
      </h1>
      <p className="mt-3 text-base text-black/80 sm:text-lg">{hint}</p>

      <ul className="mt-8 space-y-4">
        {question.choices.map((choice) => {
          const selected = selectedId === choice.id;
          return (
            <li key={choice.id}>
              <button
                type="button"
                onClick={() => onSelect(choice)}
                className={[
                  "w-full rounded-xl border px-5 py-6 text-left text-lg leading-snug transition sm:px-6 sm:py-7 sm:text-xl",
                  selected
                    ? "border-[var(--accent-blue)] bg-white/85 shadow-sm"
                    : "border-black/10 bg-white/55 hover:bg-white/75",
                ].join(" ")}
                aria-pressed={selected}
              >
                <span className="mr-2 font-semibold">
                  {choice.id.toUpperCase()}.
                </span>
                {choice.label}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
