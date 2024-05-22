import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import { Sidebar } from "@/components/Sidebar";
import { cn } from "@/utils/cn.util";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className={cn("mx-auto flex h-screen max-w-6xl flex-col gap-x-10 px-4", "md:flex-row")}>
      <Sidebar
        className={cn(
          "fixed left-0 top-0 z-10 h-screen w-screen shrink-0 bg-neutral-900 px-4",
          "md:static md:h-full md:w-60"
        )}
      />
      <main className="h-full grow overflow-y-auto scrollbar-none">{children}</main>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Luc Le | lesor.dev",
};
