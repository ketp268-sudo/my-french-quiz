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

export type Choice = {
  id: string;
  label: string;
  scores: ScoreMap;
  themes?: ThemeTag[];
};

export type Question = {
  id: string;
  prompt: string;
  choices: Choice[];
};

export const DIMENSION_LABELS: Record<Dimension, string> = {
  interest: "ความสนใจ",
  goals: "เป้าหมาย",
  style: "รูปแบบการเรียน",
  motivation: "แรงจูงใจ",
  readiness: "การเตรียมตัว",
};

export const DIMENSION_ORDER: Dimension[] = [
  "interest",
  "goals",
  "style",
  "motivation",
  "readiness",
];

export const questions: Question[] = [
  {
    id: "q1",
    prompt: "ถ้าได้ไปฝรั่งเศสครั้งแรก คุณอยากทำอะไรเป็นอย่างแรก?",
    choices: [
      {
        id: "a",
        label: "เดินเล่นตามท้องถนน ดูผู้คน แล้วลองทักทายง่ายๆ",
        scores: { interest: 2, goals: 1 },
        themes: ["travel", "communication"],
      },
      {
        id: "b",
        label: "ไปร้านอาหาร ลองเมนูท้องถิ่น และอยากรู้คำสั่งอาหาร",
        scores: { interest: 2, style: 1 },
        themes: ["food", "culture"],
      },
      {
        id: "c",
        label: "เข้าพิพิธภัณฑ์ / ดูงานศิลปะ / ฟังเพลงฝรั่งเศส",
        scores: { interest: 2 },
        themes: ["arts", "culture"],
      },
      {
        id: "d",
        label: "ถ่ายรูปสถานที่ดัง แล้วอยากเล่าเรื่องนั้นเป็นภาษาฝรั่งเศสได้",
        scores: { interest: 1, goals: 2 },
        themes: ["travel", "communication"],
      },
    ],
  },
  {
    id: "q2",
    prompt: "วันหยุดยาว คุณอยากใช้เวลาเรียนภาษาแบบไหนมากที่สุด?",
    choices: [
      {
        id: "a",
        label: "เปิดเพลงหรือคลิปสั้นๆ แล้วทวนตาม",
        scores: { style: 2, motivation: 1 },
        themes: ["listenSpeak", "arts"],
      },
      {
        id: "b",
        label: "นั่งอ่านการ์ตูนหรือเรื่องสั้นภาษาฝรั่งเศสแบบง่าย",
        scores: { style: 2, interest: 1 },
        themes: ["readWrite", "culture"],
      },
      {
        id: "c",
        label: "ชวนเพื่อนมาเล่นเกมทายคำ / แข่งตอบด้วยกัน",
        scores: { style: 2, motivation: 1 },
        themes: ["gamesFriends"],
      },
      {
        id: "d",
        label: "ตั้งเป้าเล็กๆ แล้วเรียนคนเดียวอย่างเงียบๆ",
        scores: { style: 2, readiness: 1 },
        themes: ["solo"],
      },
    ],
  },
  {
    id: "q3",
    prompt: "ทำไมคุณถึงเริ่มสนใจภาษาฝรั่งเศส?",
    choices: [
      {
        id: "a",
        label: "อยากเที่ยวและพูดคุยกับคนท้องถิ่นได้",
        scores: { goals: 2, interest: 1 },
        themes: ["travel", "communication"],
      },
      {
        id: "b",
        label: "ชอบวัฒนธรรม อาหาร หนัง หรือเพลงฝรั่งเศส",
        scores: { interest: 2, goals: 1 },
        themes: ["culture", "food", "arts"],
      },
      {
        id: "c",
        label: "คิดว่าอาจมีประโยชน์กับอนาคตการเรียนหรืองาน",
        scores: { goals: 2, readiness: 1 },
        themes: ["future"],
      },
      {
        id: "d",
        label: "อยากลองของใหม่ ดูสนุกและท้าทาย",
        scores: { motivation: 2, goals: 1 },
        themes: ["fun"],
      },
    ],
  },
  {
    id: "q4",
    prompt: "ถ้าต้องเรียนคำใหม่ 5 คำในวันนี้ คุณจะเลือกวิธีไหน?",
    choices: [
      {
        id: "a",
        label: "ฟังเสียงแล้วพูดตามหลายรอบ",
        scores: { style: 2 },
        themes: ["listenSpeak"],
      },
      {
        id: "b",
        label: "เขียนลงสมุดพร้อมวาดรูปช่วยจำ",
        scores: { style: 2, readiness: 1 },
        themes: ["readWrite", "solo"],
      },
      {
        id: "c",
        label: "ทำเป็นเกมบัตรคำ หรือใช้แอปที่มีคะแนน",
        scores: { style: 2, motivation: 1 },
        themes: ["gamesFriends"],
      },
      {
        id: "d",
        label: "หาประโยคสั้นๆ ที่ใช้จริง แล้วลองพูดกับเพื่อน",
        scores: { style: 1, interest: 2 },
        themes: ["communication", "gamesFriends"],
      },
    ],
  },
  {
    id: "q5",
    prompt: "สัปดาห์นี้คุณมีเวลาว่างหลังเลิกเรียนประมาณไหน?",
    choices: [
      {
        id: "a",
        label: "มีเวลาชัดเจน วันละนิดได้เกือบทุกวัน",
        scores: { readiness: 2, motivation: 1 },
      },
      {
        id: "b",
        label: "มีเวลาเป็นบางวัน แต่ตั้งใจจะจองไว้เรียน",
        scores: { readiness: 2 },
      },
      {
        id: "c",
        label: "เวลาไม่แน่นอน แต่พร้อมเริ่มเมื่อไหร่ก็ได้ที่ว่าง",
        scores: { motivation: 2, readiness: 1 },
      },
      {
        id: "d",
        label: "ยังไม่แน่ใจเรื่องเวลา อยากรู้ก่อนว่าควรเริ่มยังไง",
        scores: { readiness: 1, goals: 1 },
      },
    ],
  },
  {
    id: "q6",
    prompt: "ถ้าเพื่อนชวนทำโปรเจกต์เล็กๆ เกี่ยวกับฝรั่งเศส คุณอยากเลือกหัวข้อไหน?",
    choices: [
      {
        id: "a",
        label: "ทำแผนเที่ยวเมืองในฝรั่งเศสแบบง่าย",
        scores: { interest: 2, goals: 1 },
        themes: ["travel"],
      },
      {
        id: "b",
        label: "แนะนำอาหารหรือร้านดัง พร้อมคำศัพท์สั่งอาหาร",
        scores: { interest: 2 },
        themes: ["food", "culture"],
      },
      {
        id: "c",
        label: "สรุปศิลปิน / เพลง / หนังฝรั่งเศสที่ชอบ",
        scores: { interest: 2, style: 1 },
        themes: ["arts", "culture"],
      },
      {
        id: "d",
        label: "ทำบทสนทนาสั้นๆ สำหรับทักทายและแนะนำตัว",
        scores: { interest: 1, goals: 2 },
        themes: ["communication"],
      },
    ],
  },
  {
    id: "q7",
    prompt: "พอเจอคำที่ยังไม่รู้ คุณมักทำอย่างไร?",
    choices: [
      {
        id: "a",
        label: "ลองเดาจากบริบทก่อน แล้วค่อยเช็กทีหลัง",
        scores: { motivation: 2, style: 1 },
        themes: ["listenSpeak"],
      },
      {
        id: "b",
        label: "เปิดหาความหมายทันที แล้วจดเก็บ",
        scores: { readiness: 2, style: 1 },
        themes: ["readWrite", "solo"],
      },
      {
        id: "c",
        label: "ถามเพื่อนหรือครู แล้วฝึกพูดตาม",
        scores: { style: 2, motivation: 1 },
        themes: ["gamesFriends", "listenSpeak"],
      },
      {
        id: "d",
        label: "ข้ามไปก่อน แล้วกลับมาทบทวนตอนว่าง",
        scores: { readiness: 1, style: 1 },
        themes: ["solo"],
      },
    ],
  },
  {
    id: "q8",
    prompt: "ถ้าเรียนฝรั่งเศสได้ 3 เดือน คุณอยากเห็นตัวเองทำอะไรได้บ้าง?",
    choices: [
      {
        id: "a",
        label: "ทักทาย สั่งอาหาร และถามทางแบบง่ายได้",
        scores: { goals: 2, interest: 1 },
        themes: ["communication", "travel", "food"],
      },
      {
        id: "b",
        label: "ฟังเพลงหรือคลิปสั้นแล้วจับใจความได้มากขึ้น",
        scores: { style: 2, goals: 1 },
        themes: ["listenSpeak", "arts"],
      },
      {
        id: "c",
        label: "อ่านป้าย เมนู หรือข้อความสั้นๆ ได้",
        scores: { style: 2, interest: 1 },
        themes: ["readWrite", "food"],
      },
      {
        id: "d",
        label: "มีนิสัยเรียนต่อเนื่อง และกล้าลองพูดมากขึ้น",
        scores: { motivation: 2, readiness: 1 },
        themes: ["fun", "communication"],
      },
    ],
  },
  {
    id: "q9",
    prompt: "บรรยากาศการเรียนแบบไหนที่ทำให้คุณอยากเปิดบทเรียนต่อ?",
    choices: [
      {
        id: "a",
        label: "สั้น กระชับ มีภาพ/เสียงสนุก ไม่กดดัน",
        scores: { style: 2, motivation: 1 },
        themes: ["listenSpeak", "fun"],
      },
      {
        id: "b",
        label: "มีเป้าหมายชัด และเห็นความคืบหน้าทีละนิด",
        scores: { readiness: 2, goals: 1 },
        themes: ["solo", "future"],
      },
      {
        id: "c",
        label: "มีเพื่อนเรียนด้วย ช่วยกันและหัวเราะได้",
        scores: { style: 2, motivation: 1 },
        themes: ["gamesFriends"],
      },
      {
        id: "d",
        label: "เงียบๆ คนเดียว โฟกัสได้เต็มที่",
        scores: { style: 2, readiness: 1 },
        themes: ["solo"],
      },
    ],
  },
  {
    id: "q10",
    prompt: "ก่อนเริ่มเรียนจริง คุณอยากเตรียมอะไรเป็นอย่างแรก?",
    choices: [
      {
        id: "a",
        label: "หาคลิป/เพลง/แอปที่ดูสนุกแล้วเริ่มเลย",
        scores: { motivation: 2, interest: 1 },
        themes: ["arts", "fun"],
      },
      {
        id: "b",
        label: "จองเวลาในปฏิทินและตั้งเป้าเล็กๆ เดือนแรก",
        scores: { readiness: 2, goals: 1 },
        themes: ["solo", "future"],
      },
      {
        id: "c",
        label: "ซื้อสมุดจดหรือจัดมุมเรียนเล็กๆ ให้พร้อม",
        scores: { readiness: 2 },
        themes: ["readWrite", "solo"],
      },
      {
        id: "d",
        label: "ชวนเพื่อน 1 คนมาเริ่มด้วยกัน",
        scores: { style: 2, motivation: 1 },
        themes: ["gamesFriends"],
      },
    ],
  },
];

export const TOTAL_QUESTIONS = questions.length;
