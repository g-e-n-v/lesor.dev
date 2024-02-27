import "@/styles/global.css";

import { cn } from "@/utils/cn.util";
import type { PropsWithChildren } from "react";
import { Inter, Space_Mono } from "next/font/google";

const fontSans = Inter({
  subsets: ["vietnamese", "latin-ext"],
  preload: true,
  variable: "--font-sans",
  display: "fallback",
});

const fontMono = Space_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono",
  display: "fallback",
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="vi" className={cn(fontSans.variable, fontMono.variable)}>
      <body className="bg-gray-50/50 text-gray-950">{children}</body>
    </html>
  );
}
