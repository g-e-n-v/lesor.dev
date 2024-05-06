import type { PropsWithChildren } from "react";

import { Footer } from "@/components/new/Footer";
import { Header } from "@/components/new/Header";
import { cn } from "@/utils/cn.util";

export default function PortfolioLayout({ children }: PropsWithChildren) {
  return (
    <div className={cn("h-screen w-screen bg-primary-1 p-2 font-monaspace", "lg:p-6")}>
      <div className="flex h-full grow flex-col overflow-hidden rounded-lg border border-stroke bg-primary-2 text-secondary-1">
        <Header />
        <main className="grow overflow-y-auto">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
