import "@/styles/global.css";

import { cn } from "@/utils/cn.util";
import { Encode_Sans_Expanded, Lora, Sono } from "next/font/google";
import type { PropsWithChildren } from "react";

const fontSans = Encode_Sans_Expanded({
  subsets: ["latin-ext", "vietnamese"],
  preload: true,
  variable: "--font-sans",
  display: "fallback",
  weight: ["400", "600", "700", "900"],
});

const fontSerif = Lora({
  subsets: ["vietnamese", "latin-ext"],
  preload: true,
  variable: "--font-serif",
  display: "fallback",
});

const fontMono = Sono({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "fallback",
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="vi" className={cn(fontSerif.variable, fontSans.variable, fontMono.variable)}>
      <body className="bg-gray-50/50 text-base text-gray-950">{children}</body>
    </html>
  );
}
