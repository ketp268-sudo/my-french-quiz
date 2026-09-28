import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="relative z-10 mt-auto border-t border-black/10 bg-white/20">
      <div className="mx-auto flex max-w-3xl flex-col gap-2 px-4 py-6 text-sm text-black sm:px-6 sm:flex-row sm:items-center sm:justify-between">
        <p>ทำเพื่อนักเรียนมัธยมที่อยากสำรวจตัวเองก่อนเริ่มเรียนฝรั่งเศส</p>
        <p className="flex flex-wrap gap-3">
          <Link href="/about" className="underline-offset-4 hover:underline">
            เกี่ยวกับควิซ
          </Link>
          <Link href="/tips" className="underline-offset-4 hover:underline">
            เคล็ดลับเริ่มต้น
          </Link>
        </p>
      </div>
    </footer>
  );
}
