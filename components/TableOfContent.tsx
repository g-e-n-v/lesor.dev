import type { TOCSection } from "@/types/writing.type";
import { cn } from "@/utils/cn.util";

type TableOfContentProps = {
  toc: Array<TOCSection>;
  className?: string;
};

export const TableOfContent = ({ toc, className }: TableOfContentProps) => {
  return (
    <div
      className={cn(
        "flex w-80 translate-y-2 flex-col font-mono opacity-40 transition-all duration-500 hover:translate-y-0 hover:opacity-100",
        className
      )}
    >
      <span className="mb-2 text-lg font-semibold">Table of Content</span>
      <ol className="tracking-tighter [counter-reset:h2]">
        {toc.map((section) => (
          <li
            key={section.id}
            className={cn("mb-2 before:mr-2 before:text-slate-400", {
              "[counter-reset:h3] [counter-increment:h2] before:content-[counter(h2)'.']": section.type === "heading_2",
              "[counter-increment:h3] before:content-[counter(h2)'.'counter(h3)'.']": section.type === "heading_3",
            })}
            data-heading={section.type}
          >
            <a className="hover:underline" href={`#${section.id}`}>
              {section.title}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
};
