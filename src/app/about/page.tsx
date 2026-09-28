import { Button } from "@/components/ui/Button";

const blocks = [
  {
    title: "ควิซนี้คืออะไร",
    body: "นี่คือการสำรวจตัวเองสำหรับนักเรียนมัธยมที่กำลังคิดจะเรียนภาษาฝรั่งเศส ไม่ใช่ข้อสอบ และไม่มีการตัดเกรด",
  },
  {
    title: "ไม่มีถูก–ผิด",
    body: "ทุกตัวเลือกสะท้อนความชอบ เป้าหมาย หรือรูปแบบการเรียนคนละด้าน ผลลัพธ์จะไม่บอกว่า “เหมาะ” หรือ “ไม่เหมาะ”",
  },
  {
    title: "เล่นจบแล้วได้อะไร",
    body: "คุณจะเห็นความสนใจหลัก เป้าหมาย สไตล์การเรียน สิ่งที่ควรเตรียม และเคล็ดลับเริ่มต้นที่เข้ากับตัวเอง — แล้วตัดสินใจต่อเองได้อย่างมั่นใจขึ้น",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-3xl font-bold sm:text-4xl">เกี่ยวกับควิซ</h1>
      <p className="mt-3 text-base leading-relaxed sm:text-lg">
        ฝรั่งเศสของฉัน ออกแบบมาให้เหมือนเพื่อนชวนคุย ไม่ใช่ครูตรวจข้อสอบ
      </p>

      <div className="mt-8 space-y-4">
        {blocks.map((block) => (
          <section
            key={block.title}
            className="rounded-2xl border border-black/10 bg-[rgba(100,170,230,0.28)] p-5 sm:p-6"
          >
            <h2 className="text-lg font-bold sm:text-xl">{block.title}</h2>
            <p className="mt-2 text-base leading-relaxed">{block.body}</p>
          </section>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/quiz" className="w-full sm:w-auto">
          เริ่มสำรวจเลย
        </Button>
        <Button href="/" variant="secondary" className="w-full sm:w-auto">
          กลับหน้าแรก
        </Button>
      </div>
    </div>
  );
}
