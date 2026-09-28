import {
  DIMENSION_ORDER,
  questionDefs,
  THEME_TO_STYLE,
  type Dimension,
  type ScoreMap,
  type ThemeTag,
} from "@/data/question-defs";
import type { Messages, StyleKey } from "@/i18n/types";

export type AnswerMap = Record<string, string>;

export type Totals = Record<Dimension, number>;

export type ThemeCounts = Partial<Record<ThemeTag, number>>;

export type ResultProfile = {
  overview: string;
  strengths: string[];
  interests: { primary: string; secondary: string };
  goals: string;
  learningStyle: string;
  preparation: string[];
  tips: string[];
  primaryDimension: Dimension;
  secondaryDimension: Dimension;
  totals: Totals;
};

const emptyTotals = (): Totals => ({
  interest: 0,
  goals: 0,
  style: 0,
  motivation: 0,
  readiness: 0,
});

export function scoreAnswers(answers: AnswerMap): {
  totals: Totals;
  themes: ThemeCounts;
} {
  const totals = emptyTotals();
  const themes: ThemeCounts = {};

  for (const question of questionDefs) {
    const choiceId = answers[question.id];
    if (!choiceId) continue;
    const choice = question.choices.find((c) => c.id === choiceId);
    if (!choice) continue;

    for (const [dim, value] of Object.entries(choice.scores) as [
      Dimension,
      number,
    ][]) {
      totals[dim] += value ?? 0;
    }

    for (const theme of choice.themes ?? []) {
      themes[theme] = (themes[theme] ?? 0) + 1;
    }
  }

  return { totals, themes };
}

export function rankDimensions(totals: Totals): Dimension[] {
  return [...DIMENSION_ORDER].sort((a, b) => {
    const diff = totals[b] - totals[a];
    if (diff !== 0) return diff;
    return DIMENSION_ORDER.indexOf(a) - DIMENSION_ORDER.indexOf(b);
  });
}

function topThemes(themes: ThemeCounts, limit = 4): ThemeTag[] {
  return (Object.entries(themes) as [ThemeTag, number][])
    .sort((a, b) => {
      if (b[1] !== a[1]) return b[1] - a[1];
      return a[0].localeCompare(b[0]);
    })
    .slice(0, limit)
    .map(([tag]) => tag);
}

function pickOverview(
  messages: Messages,
  primary: Dimension,
  secondary: Dimension,
): string {
  const key = `${primary}+${secondary}`;
  const reverse = `${secondary}+${primary}`;
  return (
    messages.overviewByPair[key] ??
    messages.overviewByPair[reverse] ??
    messages.overviewByPair[`${primary}+interest`] ??
    messages.result.overviewFallback
  );
}

function pickStrengths(
  messages: Messages,
  primary: Dimension,
  secondary: Dimension,
): string[] {
  const primaryList = messages.strengthsByDimension[primary] ?? [];
  const secondaryList = messages.strengthsByDimension[secondary] ?? [];
  const merged = [...primaryList.slice(0, 2), ...secondaryList.slice(0, 2)];
  return Array.from(new Set(merged)).slice(0, 4);
}

function pickInterests(
  messages: Messages,
  themes: ThemeCounts,
): { primary: string; secondary: string } {
  const ranked = topThemes(themes, 6).filter((t) =>
    ["travel", "food", "arts", "communication", "culture", "fun", "future"].includes(
      t,
    ),
  );

  const primaryTag = ranked[0] ?? "culture";
  const secondaryTag = ranked[1] ?? "communication";

  return {
    primary:
      messages.interestThemes[primaryTag] ??
      messages.result.interestFallbackPrimary,
    secondary:
      messages.interestThemes[secondaryTag] ??
      messages.result.interestFallbackSecondary,
  };
}

function pickStyleKey(themes: ThemeCounts): StyleKey {
  const styleThemes = topThemes(themes, 8).filter((t) => t in THEME_TO_STYLE);
  const mapped = styleThemes.map((t) => THEME_TO_STYLE[t]!);
  if (mapped.length === 0) return "listenSpeak";

  const counts: Record<string, number> = {};
  for (const key of mapped) {
    counts[key] = (counts[key] ?? 0) + 1;
  }
  return (Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] ??
    "listenSpeak") as StyleKey;
}

function pickGoals(
  messages: Messages,
  themes: ThemeCounts,
  totals: Totals,
): string {
  const goalThemes = topThemes(themes, 6);
  for (const tag of goalThemes) {
    if (tag in messages.goalCopy) {
      return messages.goalCopy[tag as keyof typeof messages.goalCopy];
    }
  }
  if (totals.goals >= totals.interest) {
    return messages.goalCopy.travel;
  }
  return messages.goalCopy.culture;
}

function pickPreparation(messages: Messages, totals: Totals): string[] {
  if (totals.readiness >= 6) return messages.preparationByReadiness.high;
  if (totals.readiness >= 3) return messages.preparationByReadiness.mid;
  return messages.preparationByReadiness.gentle;
}

export function buildResultProfile(
  answers: AnswerMap,
  messages: Messages,
): ResultProfile {
  const { totals, themes } = scoreAnswers(answers);
  const ranked = rankDimensions(totals);
  const primary = ranked[0] ?? "interest";
  const secondary = ranked[1] ?? "goals";
  const styleKey = pickStyleKey(themes);

  return {
    overview: pickOverview(messages, primary, secondary),
    strengths: pickStrengths(messages, primary, secondary),
    interests: pickInterests(messages, themes),
    goals: pickGoals(messages, themes, totals),
    learningStyle: messages.styleCopy[styleKey],
    preparation: pickPreparation(messages, totals),
    tips: messages.starterTipsByStyle[styleKey],
    primaryDimension: primary,
    secondaryDimension: secondary,
    totals,
  };
}

export function isComplete(answers: AnswerMap): boolean {
  return questionDefs.every((q) => Boolean(answers[q.id]));
}

export function mergeScores(base: ScoreMap, add: ScoreMap): ScoreMap {
  const next: ScoreMap = { ...base };
  for (const [k, v] of Object.entries(add) as [Dimension, number][]) {
    next[k] = (next[k] ?? 0) + (v ?? 0);
  }
  return next;
}
