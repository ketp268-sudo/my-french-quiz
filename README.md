# ฝรั่งเศสของฉัน / My French

Interactive self-discovery quiz for Thai secondary students who are considering learning French.

ไม่ใช่ข้อสอบ ไม่มีผ่าน/ไม่ผ่าน และไม่บอกว่า “เหมาะ/ไม่เหมาะ” — ผลลัพธ์เป็นโปรไฟล์หลายมิติ  
Not a test — no pass/fail, and never “suitable/unsuitable.” Results are a multi-dimension profile.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS

## Run locally

```bash
npm install
npm run dev -- -p 43127 -H 127.0.0.1
```

Open [http://127.0.0.1:43127](http://127.0.0.1:43127) (redirects to `/th` by default)

Other scripts:

```bash
npm run build
npm run start -- -p 43127
npm run lint
```

## Language (TH / EN)

- **Thai (default):** `/th`, `/th/quiz`, `/th/result`, …
- **English:** `/en`, `/en/quiz`, `/en/result`, …
- Use the **TH / EN** switcher in the header (same page, other language).
- Visiting `/` redirects to the last chosen locale for the session (cookie `quiz_locale`), or Thai by default.

## Pages

| Path | Thai | English |
|------|------|---------|
| `/{locale}` | หน้าแรก | Home |
| `/{locale}/about` | เกี่ยวกับควิซ | About the quiz |
| `/{locale}/quiz` | คำถาม 10 ข้อ | 10 situation questions |
| `/{locale}/result` | โปรไฟล์ผลลัพธ์ | Result profile |
| `/{locale}/tips` | เคล็ดลับเริ่มต้น | Starter tips |

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

- Background red ~50%: `rgba(196, 12, 12, 0.55)` over warm under-surface `#ffc2b3`
- Text: `#000000`
- Question box: `rgba(100, 170, 230, 0.55)` (padding via `--content-box-pad` / `--content-box-pad-lg`, ~2× prior scale)

## Notes

- Answers are kept in `sessionStorage` for the current browser tab only (no auth/DB).
- Scoring dimensions are the same in both languages; only labels and prose change.
- Content follows the approved design docs in the project store.
