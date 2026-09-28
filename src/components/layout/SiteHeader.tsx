import Link from "next/link";

const nav = [
  { href: "/about", label: "เกี่ยวกับควิซ" },
  { href: "/quiz", label: "เริ่มสำรวจ" },
  { href: "/tips", label: "เคล็ดลับ" },
];

export function SiteHeader() {
  return (
    <header className="relative z-10 border-b border-black/10 bg-white/35 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-black sm:text-xl"
        >
          ฝรั่งเศสของฉัน
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-3 gap-y-1 text-sm font-medium sm:text-base">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-black/90 underline-offset-4 hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
