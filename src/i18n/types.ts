import type { Dimension, ThemeTag } from "@/data/question-defs";

export type StyleKey = "listenSpeak" | "readWrite" | "gamesFriends" | "solo";

export type QuestionCopy = {
  prompt: string;
  choices: Record<string, string>;
};

export type Messages = {
  meta: {
    title: string;
    description: string;
  };
  brand: string;
  nav: {
    about: string;
    quiz: string;
    tips: string;
  };
  langSwitch: {
    th: string;
    en: string;
    label: string;
  };
  footer: {
    tagline: string;
    about: string;
    tips: string;
  };
  home: {
    eyebrow: string;
    headline: string;
    tagline: string;
    support: string;
    ctaStart: string;
    ctaAbout: string;
    ctaTips: string;
    note: string;
  };
  about: {
    title: string;
    intro: string;
    blocks: { title: string; body: string }[];
    ctaStart: string;
    ctaHome: string;
  };
  tipsPage: {
    title: string;
    intro: string;
    tipLabel: string;
    items: { title: string; body: string }[];
    ctaQuiz: string;
    ctaHome: string;
  };
  quiz: {
    loading: string;
    missing: string;
    backHome: string;
    summarizing: string;
    summarizingHint: string;
    hint: string;
    back: string;
    next: string;
    seeResults: string;
    restartPrompt: string;
    clearAnswers: string;
    progress: string; // "{current}" and "{total}" placeholders
  };
  result: {
    loading: string;
    emptyTitle: string;
    emptyBody: string;
    goQuiz: string;
    overviewLabel: string;
    overviewTitle: string;
    highlights: string; // "{primary}" "{secondary}"
    primaryLabel: string;
    secondaryLabel: string;
    strengths: string;
    interests: string;
    goals: string;
    learningStyle: string;
    preparation: string;
    starterTips: string;
    tryAgain: string;
    moreTips: string;
    backHome: string;
    overviewFallback: string;
    interestFallbackPrimary: string;
    interestFallbackSecondary: string;
  };
  dimensions: Record<Dimension, string>;
  questions: Record<string, QuestionCopy>;
  interestThemes: Partial<Record<ThemeTag, string>>;
  styleCopy: Record<StyleKey, string>;
  goalCopy: Record<
    "travel" | "communication" | "culture" | "food" | "arts" | "future" | "fun",
    string
  >;
  strengthsByDimension: Record<Dimension, string[]>;
  preparationByReadiness: {
    high: string[];
    mid: string[];
    gentle: string[];
  };
  starterTipsByStyle: Record<StyleKey, string[]>;
  overviewByPair: Record<string, string>;
};
