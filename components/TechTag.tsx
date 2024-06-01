import type { FC, SVGProps } from "react";

import { cn } from "@/utils/cn.util";

type TechTagProps = {
  icon: FC<SVGProps<SVGElement>>;
  name: string;
  className?: string;
};

export function TechTag({ icon: Icon, name, className }: TechTagProps) {
  return (
    <div
      className={cn(
        "group",
        "inline-flex cursor-pointer items-center gap-2 rounded-full bg-slate-800/40 px-3 py-1",
        className
      )}
    >
      <Icon className={cn("rounded text-xl transition-all")} />
      <span className={cn("text-sm transition-all")}>{name}</span>
    </div>
  );
}
