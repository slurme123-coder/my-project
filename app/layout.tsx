import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Алмазная 6 — Дата-центр в Липецке",
  description:
    "Профессиональный дата-центр в Липецке. Colocation, аренда стоек. Мощность 1 МВт, стойки по 10 кВт. Адрес: ул. Алмазная, 6.",
  keywords: ["дата-центр", "colocation", "липецк", "аренда стоек", "ЦОД"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#070d1a] text-[#f0f4ff]">
        {children}
      </body>
    </html>
  );
}
