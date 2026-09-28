import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import "./globals.css";

export const metadata: Metadata = {
  title: "ฝรั่งเศสของฉัน | สำรวจตัวเองก่อนเริ่มเรียนฝรั่งเศส",
  description:
    "ควิซสำรวจตัวเองสำหรับนักเรียนมัธยมที่กำลังคิดจะเรียนภาษาฝรั่งเศส — ไม่ใช่ข้อสอบ ไม่มีผ่าน–ไม่ผ่าน",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="th" className="h-full">
      <body className="min-h-full antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
