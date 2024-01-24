import "@/styles/global.css";

import { cn } from "@/utils/cn.util";
import type { PropsWithChildren } from "react";
import { Inconsolata, Space_Mono } from "next/font/google";
import { Header } from "@/components/Header";

const fontSans = Inconsolata({
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
      <body className="bg-gray-50/50 text-gray-950">
        <Header className="mx-auto max-w-3xl" />
        <main className="mx-auto max-w-3xl px-4">{children}</main>
      </body>
    </html>
  );
}
