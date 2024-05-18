import { cn } from "@/utils/cn.util";

type KeyboardKeyProps = {
  children: string;
  className?: string;
};

export function KeyboardKey({ children, className }: KeyboardKeyProps) {
  return (
    <div
      className={cn(
        "rounded-md border-b-2 border-neutral-700 bg-neutral-800 px-2 font-mono text-sm font-medium leading-6",
        className
      )}
    >
      {children}
    </div>
  );
}
