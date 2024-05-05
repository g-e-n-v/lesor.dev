import { cn } from "@/utils/cn.util";

type FooterProps = {
  className?: string;
};

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("text-center text-sm text-slate-500", className)}>
      <hr />
      <div className="py-6">
        Made by <code className="font-semibold text-blue-500">_lesor</code> with ❤️ and ☕
      </div>
    </footer>
  );
}
