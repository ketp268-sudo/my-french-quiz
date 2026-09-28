import {
  DIMENSION_ORDER,
  Dimension,
  ThemeTag,
  questions,
  type ScoreMap,
} from "@/data/questions";
import {
  GOAL_COPY,
  INTEREST_THEME_LABELS,
  OVERVIEW_BY_PAIR,
  PREPARATION_BY_READINESS,
  STARTER_TIPS_BY_STYLE,
  STRENGTHS_BY_DIMENSION,
  STYLE_COPY,
  THEME_TO_STYLE,
  type ResultProfile,
} from "@/data/result-copy";

export type AnswerMap = Record<string, string>;

export type Totals = Record<Dimension, number>;

export type ThemeCounts = Partial<Record<ThemeTag, number>>;

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

  for (const question of questions) {
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

function pickOverview(primary: Dimension, secondary: Dimension): string {
  const key = `${primary}+${secondary}`;
  const reverse = `${secondary}+${primary}`;
  return (
    OVERVIEW_BY_PAIR[key] ??
    OVERVIEW_BY_PAIR[reverse] ??
    OVERVIEW_BY_PAIR[`${primary}+interest`] ??
    "คุณกำลังสำรวจตัวเองก่อนเริ่มเรียนฝรั่งเศส และดูมีจุดเด่นที่น่าสนใจหลายด้าน ควิซนี้ช่วยให้เห็นภาพชัดขึ้นว่าอยากเรียนแบบไหน"
  );
}

function pickStrengths(primary: Dimension, secondary: Dimension): string[] {
  const primaryList = STRENGTHS_BY_DIMENSION[primary] ?? [];
  const secondaryList = STRENGTHS_BY_DIMENSION[secondary] ?? [];
  const merged = [...primaryList.slice(0, 2), ...secondaryList.slice(0, 2)];
  return Array.from(new Set(merged)).slice(0, 4);
}

function pickInterests(themes: ThemeCounts): { primary: string; secondary: string } {
  const ranked = topThemes(themes, 6).filter((t) =>
    ["travel", "food", "arts", "communication", "culture", "fun", "future"].includes(
      t,
    ),
  );

  const primaryTag = ranked[0] ?? "culture";
  const secondaryTag = ranked[1] ?? "communication";

  return {
    primary: INTEREST_THEME_LABELS[primaryTag] ?? "วัฒนธรรมและการเรียนรู้",
    secondary: INTEREST_THEME_LABELS[secondaryTag] ?? "การสื่อสารในชีวิตประจำวัน",
  };
}

function pickStyleKey(themes: ThemeCounts): keyof typeof STYLE_COPY {
  const styleThemes = topThemes(themes, 8).filter((t) => t in THEME_TO_STYLE);
  const mapped = styleThemes.map((t) => THEME_TO_STYLE[t]!);
  if (mapped.length === 0) return "listenSpeak";

  const counts: Record<string, number> = {};
  for (const key of mapped) {
    counts[key] = (counts[key] ?? 0) + 1;
  }
  return (Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] ??
    "listenSpeak") as keyof typeof STYLE_COPY;
}

function pickGoals(themes: ThemeCounts, totals: Totals): string {
  const goalThemes = topThemes(themes, 6);
  for (const tag of goalThemes) {
    if (tag in GOAL_COPY) return GOAL_COPY[tag as keyof typeof GOAL_COPY];
  }
  if (totals.goals >= totals.interest) {
    return GOAL_COPY.travel;
  }
  return GOAL_COPY.culture;
}

function pickPreparation(totals: Totals): string[] {
  if (totals.readiness >= 6) return PREPARATION_BY_READINESS.high;
  if (totals.readiness >= 3) return PREPARATION_BY_READINESS.mid;
  return PREPARATION_BY_READINESS.gentle;
}

export function buildResultProfile(answers: AnswerMap): ResultProfile {
  const { totals, themes } = scoreAnswers(answers);
  const ranked = rankDimensions(totals);
  const primary = ranked[0] ?? "interest";
  const secondary = ranked[1] ?? "goals";
  const styleKey = pickStyleKey(themes);

  return {
    overview: pickOverview(primary, secondary),
    strengths: pickStrengths(primary, secondary),
    interests: pickInterests(themes),
    goals: pickGoals(themes, totals),
    learningStyle: STYLE_COPY[styleKey],
    preparation: pickPreparation(totals),
    tips: STARTER_TIPS_BY_STYLE[styleKey],
    primaryDimension: primary,
    secondaryDimension: secondary,
    totals,
  };
}

export function isComplete(answers: AnswerMap): boolean {
  return questions.every((q) => Boolean(answers[q.id]));
}

export function mergeScores(base: ScoreMap, add: ScoreMap): ScoreMap {
  const next: ScoreMap = { ...base };
  for (const [k, v] of Object.entries(add) as [Dimension, number][]) {
    next[k] = (next[k] ?? 0) + (v ?? 0);
  }
  return next;
}
