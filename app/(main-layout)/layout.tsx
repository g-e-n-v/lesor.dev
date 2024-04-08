import type { PropsWithChildren } from "react";

import { Header } from "@/components/Header";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header className="mx-auto max-w-3xl" />
      <main className="mx-auto max-w-3xl px-4">{children}</main>
    </>
  );
}
