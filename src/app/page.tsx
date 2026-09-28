import { Button } from "@/components/ui/Button";

export default function HomePage() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-3xl flex-col justify-center px-4 py-12 sm:px-6 sm:py-16">
      <section className="max-w-xl animate-[fadeUp_0.7s_ease-out]">
        <p className="text-sm font-semibold tracking-wide text-black/70 sm:text-base">
          สำหรับนักเรียนมัธยม
        </p>
        <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          ฝรั่งเศสของฉัน
        </h1>
        <p className="mt-5 text-lg leading-relaxed sm:text-xl">
          สำรวจตัวเองก่อนเริ่มเรียนฝรั่งเศส
        </p>
        <p className="mt-2 text-base text-black/80 sm:text-lg">
          ไม่ใช่ข้อสอบ ไม่มีผ่าน–ไม่ผ่าน — แค่ช่วยให้เห็นความสนใจ
          เป้าหมาย และสไตล์การเรียนของตัวเองชัดขึ้น
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href="/quiz" className="w-full sm:w-auto sm:min-w-44">
            เริ่มสำรวจ
          </Button>
          <Button href="/about" variant="secondary" className="w-full sm:w-auto">
            เกี่ยวกับควิซ
          </Button>
        </div>

        <p className="mt-6">
          <Button href="/tips" variant="ghost" className="px-0">
            ดูเคล็ดลับเริ่มต้น
          </Button>
        </p>
      </section>

      <p className="mt-16 max-w-md text-sm leading-relaxed text-black/75 animate-[fadeUp_1s_ease-out]">
        ยังไม่มีพื้นฐานฝรั่งเศสก็เล่นได้ คำถามเป็นสถานการณ์ในชีวิตจริง
        ผลลัพธ์เป็นโปรไฟล์ ไม่ใช่คะแนนสอบ
      </p>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
