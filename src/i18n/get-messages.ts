import { defaultLocale, isLocale, type Locale } from "@/i18n/config";
import { en } from "@/i18n/messages/en";
import { th } from "@/i18n/messages/th";
import type { Messages } from "@/i18n/types";
import {
  questionDefs,
  type Question,
  TOTAL_QUESTIONS,
} from "@/data/question-defs";

const catalog: Record<Locale, Messages> = { th, en };

export function getMessages(locale: string): Messages {
  return catalog[isLocale(locale) ? locale : defaultLocale];
}

export function getLocalizedQuestions(locale: string): Question[] {
  const messages = getMessages(locale);
  return questionDefs.map((def) => {
    const copy = messages.questions[def.id];
    return {
      id: def.id,
      prompt: copy?.prompt ?? def.id,
      choices: def.choices.map((choice) => ({
        ...choice,
        label: copy?.choices[choice.id] ?? choice.id,
      })),
    };
  });
}

export { TOTAL_QUESTIONS };
