export const QUIZ_STORAGE_KEY = "french-quiz-answers-v1";

export type StoredAnswers = Record<string, string>;

export function loadAnswers(): StoredAnswers {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(QUIZ_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== "object") return {};
    return parsed as StoredAnswers;
  } catch {
    return {};
  }
}

export function saveAnswers(answers: StoredAnswers): void {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(answers));
}

export function clearAnswers(): void {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem(QUIZ_STORAGE_KEY);
}
