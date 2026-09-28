import { tips } from "@/data/tips";
import { Button } from "@/components/ui/Button";

export default function TipsPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-3xl font-bold sm:text-4xl">เคล็ดลับเริ่มเรียนฝรั่งเศส</h1>
      <p className="mt-3 text-base leading-relaxed sm:text-lg">
        อ่านได้เลยโดยไม่ต้องทำควิซก่อน — ทิปสั้นๆ สำหรับมือใหม่ที่อยากเริ่มแบบสบายๆ
      </p>

      <ol className="mt-8 space-y-4">
        {tips.map((tip, index) => (
          <li
            key={tip.title}
            className="rounded-2xl border border-black/10 bg-white/55 p-5 shadow-sm sm:p-6"
          >
            <p className="text-sm font-semibold text-black/70">ทิป {index + 1}</p>
            <h2 className="mt-1 text-lg font-bold sm:text-xl">{tip.title}</h2>
            <p className="mt-2 text-base leading-relaxed">{tip.body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/quiz" className="w-full sm:w-auto">
          ไปทำควิซ
        </Button>
        <Button href="/" variant="secondary" className="w-full sm:w-auto">
          กลับหน้าแรก
        </Button>
      </div>
    </div>
  );
}
