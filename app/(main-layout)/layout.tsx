import type { PropsWithChildren } from "react";

import { Sidebar } from "@/components/v3/Sidebar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto flex h-screen max-w-6xl gap-x-10 px-4">
      <Sidebar className="h-full min-w-52 shrink-0" />
      <main className="h-full grow overflow-y-auto">{children}</main>
    </div>
  );
}
