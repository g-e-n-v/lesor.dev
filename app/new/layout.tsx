import type { PropsWithChildren } from "react";

import { Footer } from "@/components/new/Footer";
import { Header } from "@/components/new/Header";

export default function PortfolioLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-screen w-screen bg-primary-1 p-4 font-monaspace">
      <div className="flex h-full grow flex-col overflow-y-auto rounded-lg border border-stroke bg-primary-2 text-secondary-1">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
