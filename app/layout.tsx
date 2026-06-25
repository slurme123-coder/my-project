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
        <div id="cursor-dot" />
        <div id="cursor-ring" />
        {children}
        <script dangerouslySetInnerHTML={{ __html: `
          const dot = document.getElementById('cursor-dot');
          const ring = document.getElementById('cursor-ring');
          let mx = 0, my = 0, rx = 0, ry = 0;
          document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; dot.style.left = mx + 'px'; dot.style.top = my + 'px'; });
          function animateRing() { rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12; ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; requestAnimationFrame(animateRing); }
          animateRing();
          document.addEventListener('mousedown', () => { dot.style.transform = 'translate(-50%,-50%) scale(0.6)'; ring.style.width = '50px'; ring.style.height = '50px'; ring.style.borderColor = '#4ade80'; });
          document.addEventListener('mouseup', () => { dot.style.transform = 'translate(-50%,-50%) scale(1)'; ring.style.width = '36px'; ring.style.height = '36px'; });
          document.querySelectorAll('a,button').forEach(el => { el.addEventListener('mouseenter', () => { ring.style.width = '52px'; ring.style.height = '52px'; ring.style.borderColor = '#4ade80'; dot.style.background = '#22c55e'; }); el.addEventListener('mouseleave', () => { ring.style.width = '36px'; ring.style.height = '36px'; ring.style.borderColor = '#4ade8099'; dot.style.background = '#4ade80'; }); });
        ` }} />
      </body>
    </html>
  );
}
