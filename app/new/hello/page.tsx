import type { Metadata } from "next";

import BgBlurs from "@/assets/svgs/bg-blurs.svg";
import { TextTyping } from "@/components/TextTyping";
import { cn } from "@/utils/cn.util";

export default function HelloPage() {
  return (
    <div className="h-full overflow-hidden px-4">
      <div className={cn("relative mx-auto grid h-full max-w-5xl gap-4", "lg:grid-cols-2")}>
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

        <div className={cn("hidden", "lg:block")}></div>

        <BgBlurs className="absolute right-0 top-0 aspect-square h-full" />
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "hi, i'm Luc 👋 | Software Engineer",
};
