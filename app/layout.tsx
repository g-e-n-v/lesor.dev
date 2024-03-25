import "@/styles/global.css";

import { cn } from "@/utils/cn.util";
import { Encode_Sans_Expanded, Lora, Space_Mono } from "next/font/google";
import type { PropsWithChildren } from "react";

const fontSans = Encode_Sans_Expanded({
  subsets: ["latin-ext", "vietnamese"],
  preload: true,
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "600", "700", "900"],
});

const fontSerif = Lora({
  subsets: ["latin-ext", "vietnamese"],
  preload: true,
  variable: "--font-serif",
  display: "swap",
});

const fontMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin-ext"],
  variable: "--font-mono",
  display: "swap",
  adjustFontFallback: false,
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="vi" className={cn(fontSerif.variable, fontSans.variable, fontMono.variable)}>
      <body className="bg-gray-50/50 text-base text-gray-950">{children}</body>
    </html>
  );
}
