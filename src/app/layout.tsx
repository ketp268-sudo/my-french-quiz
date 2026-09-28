import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ฝรั่งเศสของฉัน | My French",
  description:
    "Self-discovery quiz for secondary students considering French / ควิซสำรวจตัวเองก่อนเริ่มเรียนฝรั่งเศส",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="th" className="h-full" suppressHydrationWarning>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
