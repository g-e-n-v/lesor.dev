import "@/styles/global.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Lora, Onest } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import type { PropsWithChildren } from "react";

import { cn } from "@/utils/cn.util";

const fontSans = Onest({
  subsets: ["latin-ext"],
  preload: true,
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "900"],
});

const fontSerif = Lora({
  subsets: ["latin-ext", "vietnamese"],
  preload: true,
  variable: "--font-serif",
  display: "swap",
});

const fontMono = localFont({
  src: "../assets/fonts/MonaspaceNeon-VF.ttf",
  variable: "--font-mono",
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="vi"
      className={cn(fontSerif.variable, fontSans.variable, fontMono.variable, "dark")}
      suppressHydrationWarning
    >
      <head>
        {process.env.NODE_ENV === "production" && (
          <Script defer src="/api/in$ight" data-website-id="8b8f0fe4-aa08-4629-bce5-d9831a63319f" />
        )}
      </head>
      <body className="text-base leading-7 tracking-wide">
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>

        <SpeedInsights />
      </body>
    </html>
  );
}
