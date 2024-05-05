import type { Metadata } from "next";

import BgBlurs from "@/assets/svgs/bg-blurs.svg";
import { TextTyping } from "@/components/TextTyping";

export default function HelloPage() {
  return (
    <div className="h-full overflow-hidden px-4">
      <div className="mx-auto grid h-full max-w-5xl grid-cols-2 gap-4">
        <div className="flex flex-col justify-center gap-20 pb-28">
          <div>
            <div className="text-xl text-secondary-5">Hi all, I am</div>
            <h1 className="text-headline font-semibold text-secondary-5">Luc Le</h1>
            <TextTyping
              className="text-subheadline text-secondary-3"
              text="Software Engineer"
              prefix="> "
            />
          </div>

          <div className="flex flex-col gap-2 text-secondary-1">
            <div>{"//"} computers are fast - programmers keep it slow</div>
          </div>
        </div>

        <div className="relative">
          <BgBlurs className="absolute -left-60 top-0 h-full" />
        </div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "hi, i'm Luc 👋 | Software Engineer",
};
