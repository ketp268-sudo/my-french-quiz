export type Dimension =
  | "interest"
  | "goals"
  | "style"
  | "motivation"
  | "readiness";

export type ThemeTag =
  | "travel"
  | "food"
  | "arts"
  | "communication"
  | "listenSpeak"
  | "readWrite"
  | "gamesFriends"
  | "solo"
  | "future"
  | "fun"
  | "culture";

export type ScoreMap = Partial<Record<Dimension, number>>;

export type ChoiceDef = {
  id: string;
  scores: ScoreMap;
  themes?: ThemeTag[];
};

export type QuestionDef = {
  id: string;
  choices: ChoiceDef[];
};

export type Choice = ChoiceDef & { label: string };

export type Question = {
  id: string;
  prompt: string;
  choices: Choice[];
};

export const DIMENSION_ORDER: Dimension[] = [
  "interest",
  "goals",
  "style",
  "motivation",
  "readiness",
];

/** Scoring structure only — labels come from i18n messages */
export const questionDefs: QuestionDef[] = [
  {
    id: "q1",
    choices: [
      {
        id: "a",
        scores: { interest: 2, goals: 1 },
        themes: ["travel", "communication"],
      },
      {
        id: "b",
        scores: { interest: 2, style: 1 },
        themes: ["food", "culture"],
      },
      { id: "c", scores: { interest: 2 }, themes: ["arts", "culture"] },
      {
        id: "d",
        scores: { interest: 1, goals: 2 },
        themes: ["travel", "communication"],
      },
    ],
  },
  {
    id: "q2",
    choices: [
      {
        id: "a",
        scores: { style: 2, motivation: 1 },
        themes: ["listenSpeak", "arts"],
      },
      {
        id: "b",
        scores: { style: 2, interest: 1 },
        themes: ["readWrite", "culture"],
      },
      { id: "c", scores: { style: 2, motivation: 1 }, themes: ["gamesFriends"] },
      { id: "d", scores: { style: 2, readiness: 1 }, themes: ["solo"] },
    ],
  },
  {
    id: "q3",
    choices: [
      {
        id: "a",
        scores: { goals: 2, interest: 1 },
        themes: ["travel", "communication"],
      },
      {
        id: "b",
        scores: { interest: 2, goals: 1 },
        themes: ["culture", "food", "arts"],
      },
      { id: "c", scores: { goals: 2, readiness: 1 }, themes: ["future"] },
      { id: "d", scores: { motivation: 2, goals: 1 }, themes: ["fun"] },
    ],
  },
  {
    id: "q4",
    choices: [
      { id: "a", scores: { style: 2 }, themes: ["listenSpeak"] },
      {
        id: "b",
        scores: { style: 2, readiness: 1 },
        themes: ["readWrite", "solo"],
      },
      { id: "c", scores: { style: 2, motivation: 1 }, themes: ["gamesFriends"] },
      {
        id: "d",
        scores: { style: 1, interest: 2 },
        themes: ["communication", "gamesFriends"],
      },
    ],
  },
  {
    id: "q5",
    choices: [
      { id: "a", scores: { readiness: 2, motivation: 1 } },
      { id: "b", scores: { readiness: 2 } },
      { id: "c", scores: { motivation: 2, readiness: 1 } },
      { id: "d", scores: { readiness: 1, goals: 1 } },
    ],
  },
  {
    id: "q6",
    choices: [
      { id: "a", scores: { interest: 2, goals: 1 }, themes: ["travel"] },
      { id: "b", scores: { interest: 2 }, themes: ["food", "culture"] },
      {
        id: "c",
        scores: { interest: 2, style: 1 },
        themes: ["arts", "culture"],
      },
      { id: "d", scores: { interest: 1, goals: 2 }, themes: ["communication"] },
    ],
  },
  {
    id: "q7",
    choices: [
      {
        id: "a",
        scores: { motivation: 2, style: 1 },
        themes: ["listenSpeak"],
      },
      {
        id: "b",
        scores: { readiness: 2, style: 1 },
        themes: ["readWrite", "solo"],
      },
      {
        id: "c",
        scores: { style: 2, motivation: 1 },
        themes: ["gamesFriends", "listenSpeak"],
      },
      { id: "d", scores: { readiness: 1, style: 1 }, themes: ["solo"] },
    ],
  },
  {
    id: "q8",
    choices: [
      {
        id: "a",
        scores: { goals: 2, interest: 1 },
        themes: ["communication", "travel", "food"],
      },
      {
        id: "b",
        scores: { style: 2, goals: 1 },
        themes: ["listenSpeak", "arts"],
      },
      {
        id: "c",
        scores: { style: 2, interest: 1 },
        themes: ["readWrite", "food"],
      },
      {
        id: "d",
        scores: { motivation: 2, readiness: 1 },
        themes: ["fun", "communication"],
      },
    ],
  },
  {
    id: "q9",
    choices: [
      {
        id: "a",
        scores: { style: 2, motivation: 1 },
        themes: ["listenSpeak", "fun"],
      },
      {
        id: "b",
        scores: { readiness: 2, goals: 1 },
        themes: ["solo", "future"],
      },
      { id: "c", scores: { style: 2, motivation: 1 }, themes: ["gamesFriends"] },
      { id: "d", scores: { style: 2, readiness: 1 }, themes: ["solo"] },
    ],
  },
  {
    id: "q10",
    choices: [
      {
        id: "a",
        scores: { motivation: 2, interest: 1 },
        themes: ["arts", "fun"],
      },
      {
        id: "b",
        scores: { readiness: 2, goals: 1 },
        themes: ["solo", "future"],
      },
      { id: "c", scores: { readiness: 2 }, themes: ["readWrite", "solo"] },
      { id: "d", scores: { style: 2, motivation: 1 }, themes: ["gamesFriends"] },
    ],
  },
];

export const TOTAL_QUESTIONS = questionDefs.length;

export const THEME_TO_STYLE: Partial<
  Record<ThemeTag, "listenSpeak" | "readWrite" | "gamesFriends" | "solo">
> = {
  listenSpeak: "listenSpeak",
  readWrite: "readWrite",
  gamesFriends: "gamesFriends",
  solo: "solo",
  arts: "listenSpeak",
  communication: "listenSpeak",
  food: "readWrite",
};
