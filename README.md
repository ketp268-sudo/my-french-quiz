# ฝรั่งเศสของฉัน

Interactive self-discovery quiz for Thai secondary students who are considering learning French.

ไม่ใช่ข้อสอบ ไม่มีผ่าน/ไม่ผ่าน และไม่บอกว่า “เหมาะ/ไม่เหมาะ” — ผลลัพธ์เป็นโปรไฟล์หลายมิติ (ความสนใจ เป้าหมาย สไตล์การเรียน แรงจูงใจ การเตรียมตัว)

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS

## Run locally

```bash
npm install
npm run dev -- -p 43127 -H 127.0.0.1
```

Open [http://127.0.0.1:43127](http://127.0.0.1:43127)

Other scripts:

```bash
npm run build
npm run start -- -p 43127
npm run lint
```

## Pages

| Path | หน้าที่ |
|------|---------|
| `/` | หน้าแรก — ทักทาย + ปุ่มเริ่มสำรวจ |
| `/about` | เกี่ยวกับควิซ |
| `/quiz` | คำถามสถานการณ์ 10 ข้อ ทีละข้อ |
| `/result` | โปรไฟล์ผลลัพธ์ |
| `/tips` | เคล็ดลับเริ่มต้น (อ่านได้โดยไม่ต้องทำควิซ) |

## Font: CS Prajad (user must add)

The visual design locks **CS Prajad** for Thai and English site-wide.

Font files are **not bundled** in this repo (licensing). Add them yourself:

1. Obtain CS Prajad legally.
2. Copy files into `public/fonts/`, e.g.:
   - `CSPrajad.woff2` / `CSPrajad.ttf`
   - `CSPrajad-Bold.woff2` / `CSPrajad-Bold.ttf` (optional)
3. Restart the dev server.

Until those files exist, the CSS falls back to Sarabun / Noto Sans Thai / Tahoma. See `public/fonts/README.md`.

## Visual tokens

- Background red ~50%: `rgba(220, 80, 80, 0.5)` over a soft under-surface
- Text: `#000000`
- Question box: `rgba(100, 170, 230, 0.55)`

## Notes

- Answers are kept in `sessionStorage` for the current browser tab only (no auth/DB).
- Content and scoring follow the approved design docs in the project store.
