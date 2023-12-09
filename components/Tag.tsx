import { cn } from "@/utils/cn.util";
import type { PropsWithChildren } from "react";

type TagProps = PropsWithChildren<{ color: string }>;

const getTagStyleClassName = (color: string): string => {
  switch (color) {
    case "blue":
      return `bg-blue-600/10 text-blue-400`;

    case "orange":
      return `bg-orange-600/10 text-orange-400`;

    default:
      return `bg-violet-600/10 text-violet-400`;
  }
};

export function Tag({ children, color }: TagProps) {
  return (
    <div
      className={cn(
        "inline-flex h-6 min-w-[4em] items-center justify-center gap-px rounded-full px-2 text-xs font-semibold",
        getTagStyleClassName(color)
      )}
    >
      <span>#</span>
      <span>{children}</span>
    </div>
  );
}
