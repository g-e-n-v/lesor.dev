import type { PropsWithChildren } from "react";

import { Footer } from "@/components/new/Footer";
import { Header } from "@/components/new/Header";

export default function PortfolioLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-screen w-screen bg-primary-1 p-6 font-monaspace">
      <div className="flex h-full grow flex-col rounded-lg border border-stroke bg-primary-2 text-secondary-1">
        <Header />
        <main className="grow overflow-y-auto">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
