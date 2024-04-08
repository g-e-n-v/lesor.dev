import type { PropsWithChildren } from "react";

import { Footer } from "@/components/Footer";

export default function SingleSnippetLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative min-h-[calc(100vh-112px)] pb-[68px]">
      <div className="">{children}</div>
      <Footer className="absolute bottom-0 mx-auto w-full" />
    </div>
  );
}
