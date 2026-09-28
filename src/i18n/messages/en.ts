import type { Messages } from "@/i18n/types";

export const en: Messages = {
  meta: {
    title: "My French | Explore yourself before learning French",
    description:
      "A friendly self-discovery quiz for secondary students thinking about learning French — not a test, and never pass/fail.",
  },
  brand: "My French",
  nav: {
    about: "About the quiz",
    quiz: "Start exploring",
    tips: "Tips",
  },
  langSwitch: {
    th: "TH",
    en: "EN",
    label: "Language",
  },
  footer: {
    tagline:
      "Made for secondary students who want to explore themselves before starting French",
    about: "About the quiz",
    tips: "Starter tips",
  },
  home: {
    eyebrow: "For secondary students",
    headline: "My French",
    tagline: "Explore yourself before you start learning French",
    support:
      "This is not a test and there is no pass or fail — it just helps you see your interests, goals, and learning style more clearly.",
    ctaStart: "Start exploring",
    ctaAbout: "About the quiz",
    ctaTips: "See starter tips",
    note: "No French background needed. Questions are real-life situations. Your result is a profile, not an exam score.",
  },
  about: {
    title: "About the quiz",
    intro:
      "My French is designed like a friendly chat with a friend — not a teacher grading a test.",
    blocks: [
      {
        title: "What is this quiz?",
        body: "This is a self-discovery quiz for secondary students who are thinking about learning French. It is not an exam and it does not give grades.",
      },
      {
        title: "No right or wrong answers",
        body: "Every choice reflects a different interest, goal, or learning style. The result will never say you are “suitable” or “unsuitable.”",
      },
      {
        title: "What you get at the end",
        body: "You’ll see your main interests, goals, learning style, things to prepare, and starter tips that fit you — so you can decide your next step with more confidence.",
      },
    ],
    ctaStart: "Start exploring now",
    ctaHome: "Back to home",
  },
  tipsPage: {
    title: "Starter tips for learning French",
    intro:
      "You can read these anytime — no quiz required. Short tips for beginners who want an easy start.",
    tipLabel: "Tip",
    items: [
      {
        title: "Start with words you can use every day",
        body: "Greetings, thanks, ordering a drink, or a short self-introduction. Use them right away — you don’t need long grammar first.",
      },
      {
        title: "Keep it short but steady",
        body: "Ten to fifteen minutes a day beats a long session that disappears for a week. Consistency matters more than speed.",
      },
      {
        title: "Use songs, clips, or food menus to remember",
        body: "Pick media you truly like, then collect a few new words at a time. You’ll remember more and want to come back.",
      },
      {
        title: "Set a tiny goal for month one",
        body: "For example, “I can introduce myself” or “I can order a drink.” Small goals help you see progress and stay motivated.",
      },
      {
        title: "Don’t fear mistakes — fixing them is learning",
        body: "This quiz is not a test, and language learning doesn’t wait for perfect readiness. Try, miss, and try again.",
      },
    ],
    ctaQuiz: "Take the quiz",
    ctaHome: "Back to home",
  },
  quiz: {
    loading: "Loading the quiz…",
    missing: "Question not found",
    backHome: "Back to home",
    summarizing: "Putting your profile together…",
    summarizingHint: "Just a moment while we shape a friendly summary for you.",
    hint: "Choose 1 option — there is no right or wrong",
    back: "Back",
    next: "Next",
    seeResults: "See my result",
    restartPrompt: "Want to start over?",
    clearAnswers: "Clear all answers",
    progress: "Question {current} of {total}",
  },
  result: {
    loading: "Sorting your result…",
    emptyTitle: "No result yet",
    emptyBody:
      "It looks like you haven’t finished the quiz, or you haven’t started exploring yet. Try the 10 situation questions first.",
    goQuiz: "Go to the quiz",
    overviewLabel: "Your overview",
    overviewTitle: "Hi! Here’s your exploration profile",
    highlights: "Main highlight: {primary} · Next: {secondary}",
    primaryLabel: "Main",
    secondaryLabel: "Next",
    strengths: "Strengths",
    interests: "Interests",
    goals: "Goals",
    learningStyle: "Learning style that may fit you",
    preparation: "Things to prepare",
    starterTips: "Starter tips",
    tryAgain: "Try again",
    moreTips: "See more tips",
    backHome: "Back to home",
    overviewFallback:
      "You’re exploring yourself before starting French, and you already show a few interesting strengths. This quiz helps you see more clearly how you might like to learn.",
    interestFallbackPrimary: "Culture and learning",
    interestFallbackSecondary: "Everyday communication",
  },
  dimensions: {
    interest: "Interests",
    goals: "Goals",
    style: "Learning style",
    motivation: "Motivation",
    readiness: "Preparation",
  },
  questions: {
    q1: {
      prompt: "If you went to France for the first time, what would you want to do first?",
      choices: {
        a: "Walk around the streets, watch people, and try a simple greeting",
        b: "Go to a restaurant, try local dishes, and learn how to order food",
        c: "Visit a museum / see art / listen to French music",
        d: "Take photos of famous places and want to tell that story in French",
      },
    },
    q2: {
      prompt: "On a long break, how would you most like to spend time learning a language?",
      choices: {
        a: "Play a song or short clip and repeat along",
        b: "Sit and read an easy French comic or short story",
        c: "Invite friends to play word-guessing games / quiz each other",
        d: "Set a tiny goal and study quietly on my own",
      },
    },
    q3: {
      prompt: "Why did you start getting interested in French?",
      choices: {
        a: "I want to travel and talk with local people",
        b: "I like French culture, food, films, or music",
        c: "I think it might help with future study or work",
        d: "I want to try something new — it looks fun and challenging",
      },
    },
    q4: {
      prompt: "If you need to learn 5 new words today, which way would you choose?",
      choices: {
        a: "Listen and say them out loud several times",
        b: "Write them in a notebook and draw little pictures",
        c: "Turn them into a card game or use an app with points",
        d: "Find short real-life sentences and try saying them with a friend",
      },
    },
    q5: {
      prompt: "About how much free time do you have after school this week?",
      choices: {
        a: "I have a clear slot — a little almost every day",
        b: "I have time on some days, and I’ll save it for learning",
        c: "My time is uneven, but I’m ready whenever there’s a gap",
        d: "I’m not sure about time yet — I want to know how to start first",
      },
    },
    q6: {
      prompt: "If a friend invites you to a small French project, which topic would you pick?",
      choices: {
        a: "Make a simple trip plan for a city in France",
        b: "Recommend food or famous restaurants with ordering words",
        c: "Summarize French artists / songs / films you like",
        d: "Write a short dialogue for greeting and introducing yourself",
      },
    },
    q7: {
      prompt: "When you meet a word you don’t know yet, what do you usually do?",
      choices: {
        a: "Guess from context first, then check later",
        b: "Look up the meaning right away and write it down",
        c: "Ask a friend or teacher, then practice saying it",
        d: "Skip it for now and review when I have free time",
      },
    },
    q8: {
      prompt: "After 3 months of French, what would you like to be able to do?",
      choices: {
        a: "Greet people, order food, and ask for directions in a simple way",
        b: "Follow short songs or clips and catch more of the meaning",
        c: "Read signs, menus, or short messages",
        d: "Build a steady learning habit and feel braver speaking",
      },
    },
    q9: {
      prompt: "What kind of learning vibe makes you want to open the next lesson?",
      choices: {
        a: "Short and light, with fun images/sounds, no pressure",
        b: "Clear goals and tiny visible progress",
        c: "Learning with friends — helping each other and laughing",
        d: "Quiet alone time where I can focus fully",
      },
    },
    q10: {
      prompt: "Before you really start learning, what would you prepare first?",
      choices: {
        a: "Find fun clips/songs/apps and just begin",
        b: "Block time in my calendar and set a tiny first-month goal",
        c: "Get a notebook or set up a small study corner",
        d: "Invite one friend to start together",
      },
    },
  },
  interestThemes: {
    travel: "Travel and exploring places",
    food: "Food and everyday culture",
    arts: "Music, art, and French media",
    communication: "Talking and communicating",
    culture: "French culture",
    fun: "Fun and trying new things",
    future: "Future study or work",
  },
  styleCopy: {
    listenSpeak:
      "A style that may help you enjoy learning is listening to short audio and repeating every day, mixed with real phrases like greetings and ordering food.",
    readWrite:
      "A style that may help you is reading or listening to things you like, jotting new words in a short notebook, and reviewing lightly in the time you set aside.",
    gamesFriends:
      "A style that may help you enjoy learning is studying with friends, playing word games, or doing short quiz challenges so language feels playful.",
    solo: "A style that may help you is setting tiny goals and studying quietly on your own — short, steady sessions without too much pressure.",
  },
  goalCopy: {
    travel:
      "A clear goal right now is learning so you can greet people, order food, ask for directions, and tell short stories while traveling.",
    communication:
      "A clear goal right now is communicating in short real phrases — greetings, introducing yourself, and easy chats.",
    culture:
      "You want to learn so you can understand the things you love more deeply — culture, music, or French stories — and slowly build a calm language habit.",
    food: "Right now you’d like to learn so you can order food, read menus, and talk simply about French food.",
    arts: "Right now you’d like to learn so you can understand songs, clips, or French media you enjoy, a little more each time.",
    future:
      "A clear goal right now is building basics that may help with future study or work, starting with small steps you can actually do.",
    fun: "A clear goal right now is trying something new in a fun, challenging way — without pressure to be great immediately.",
  },
  strengthsByDimension: {
    interest: [
      "You like exploring what truly interests you",
      "You’re curious about people, culture, or places",
      "You learn well from real things around you",
    ],
    goals: [
      "You have a clear idea of how you want to use the language",
      "You’re willing to start with short phrases",
      "You can picture your own end goal",
    ],
    style: [
      "You know a learning style that suits you",
      "You can adapt how you remember words to fit yourself",
      "You want to keep going when learning feels fun",
    ],
    motivation: [
      "You like trying new things",
      "You’re okay with trial and error",
      "You have energy to start and keep going",
    ],
    readiness: [
      "You like organizing your time",
      "You’re ready to set tiny goals for yourself",
      "You’re good at keeping knowledge tidy",
    ],
  },
  preparationByReadiness: {
    high: [
      "Block calendar time 3 times a week, 10–15 minutes each",
      "A notebook or phone notes for new words",
      "A tiny first-month goal, like greeting and introducing yourself",
      "Songs or short clips you like for breaks",
    ],
    mid: [
      "Pick 2–3 free slots a week and start a little at a time",
      "A list of 5–10 basic phrases you want to know",
      "An app or short clip that’s easy to open when you have time",
      "A small notebook or phone notes for words",
    ],
    gentle: [
      "Start with 5–10 minutes a day — no need to go long",
      "Pick one thing you like, such as a song or short clip",
      "Set a tiny goal, like remembering 3 greeting words",
      "Find one friend you can casually share progress with",
    ],
  },
  starterTipsByStyle: {
    listenSpeak: [
      "Start with greetings and thank-yous — reuse them every day",
      "Practice ordering a simple drink or snack from a pretend menu",
      "Watch a short travel clip and keep only 3–5 new words each time",
      "Keep month-one goals tiny, like introducing yourself out loud",
    ],
    readWrite: [
      "Pick one media you like and collect no more than 5 new words a day",
      "Write a short sentence from those words in your notebook",
      "Review yesterday’s words for about 2 minutes before bed",
      "In month one, focus on consistency more than speed",
    ],
    gamesFriends: [
      "Invite a friend to guess words or race short phrases",
      "Make simple word cards and draw one to say aloud",
      "Set a weekly challenge, like greeting in French before you chat",
      "Laugh at mistakes — fixing them is part of learning",
    ],
    solo: [
      "Block a short slot in your calendar and turn it into a habit",
      "Keep a notebook or small study corner ready to start",
      "Set a tiny measurable goal, like 10 minutes of study",
      "Review old words lightly before bed — no pressure",
    ],
  },
  overviewByPair: {
    "interest+goals":
      "You’re an explorer who wants to experience French through what interests you and through conversation. You seem to enjoy learning from real life more than long memorizing.",
    "interest+style":
      "You seem interested in French through the things you already like, and you have a fairly clear sense of how you want to learn in a fun way.",
    "interest+motivation":
      "You’re interested in French and you have energy to try new things. Starting from what you enjoy can help you keep going longer.",
    "interest+readiness":
      "You’re drawn to French through culture or stories you like, and you tend to want small, steady study habits you can keep up.",
    "goals+style":
      "You have a fairly clear goal and you know a learning method that fits you. Tiny goals plus a style you enjoy can take you far.",
    "goals+motivation":
      "You have a goal and the energy to begin. You look ready to take a first step without waiting for everything to be perfect.",
    "goals+readiness":
      "You have a clear goal and you like preparing yourself. A tiny first-month goal can help you move forward comfortably.",
    "goals+interest":
      "You want to learn French because you can picture an end goal, and you’re already interested in things connected to French.",
    "style+motivation":
      "You know a learning style you enjoy and you have energy to continue. A fun style will help you open the next lesson more often.",
    "style+readiness":
      "You have a fairly clear learning style, and you like organizing time or tools before you start.",
    "style+interest":
      "You like learning languages through formats that suit you, and you connect well with French topics that interest you.",
    "style+goals":
      "You have a learning method that fits you, and a goal for how you want to use the language.",
    "motivation+readiness":
      "You have the energy to start and you’re ready to set small steps. Short, steady beginnings fit you well.",
    "motivation+interest":
      "You want to try new things and you’re already interested in French. Starting with something fun will make learning feel lighter.",
    "motivation+goals":
      "You have energy to begin and a goal guiding you. Trial and error plus tiny goals can help a lot.",
    "motivation+style":
      "You’re ready to try and you have a learning style that feels fun. Short lessons match your rhythm.",
    "readiness+interest":
      "You like getting prepared, and you’re interested in the side of French you enjoy. A study corner and media you like make starting easier.",
    "readiness+goals":
      "You’re ready to organize time and you have a clear goal. Small calendar blocks plus a first-month goal will help you move ahead.",
    "readiness+style":
      "You like staying organized and you have a clear study style. Preparing a notebook or app will help you start right away.",
    "readiness+motivation":
      "You’re ready to set small steps and you have energy to continue. Steady progress without pressure fits you well.",
  },
};
