"use client";
import { uniq } from "lodash-es";
import Link from "next/link";
import { useEffect, useState } from "react";

import IconFile from "@/assets/svgs/file.svg";
import IconFolderOpen from "@/assets/svgs/folder-open.svg";
import IconTOC from "@/assets/svgs/toc.svg";
import { cn } from "@/utils/cn.util";

type TOCItem = {
  id: string;
  title: string;
  level: number;
};

export function TableOfContent() {
  const [sections, setSections] = useState<Array<TOCItem>>();
  const [activeIds, setActiveIds] = useState<Array<string>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id") ?? "";

        if (entry.intersectionRatio > 0) {
          setActiveIds((ids) => uniq([...ids, id]));
        } else {
          setActiveIds((ids) => ids.filter((i) => i !== id));
        }
      });
    });

    const sectionElements = Array.from(document.querySelectorAll("section[id]"));
    setSections(
      sectionElements.map((el) => {
        const id = el.getAttribute("id") ?? "";
        const heading = el.querySelector("h2, h3, h4");
        const title = heading?.textContent?.toLowerCase().replaceAll(" ", "-") ?? "";
        const level = Number(heading?.nodeName[1]);

        return { id, title, level };
      })
    );

    sectionElements.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <nav>
      <div className="flex items-center gap-2 border-b border-stroke px-4 py-2 text-secondary-5">
        <IconTOC className="text-lg" /> table-of-content
      </div>
      <ul className="py-4">
        {sections?.map((section) => (
          <li key={section.id}>
            <Link
              className={cn("flex items-center gap-2 py-1 pl-4", {
                "bg-stroke/50 text-secondary-5": activeIds.includes(section.id),
                "pl-6": section.level === 3,
              })}
              href={`#${section.id}`}
            >
              {section.level === 2 && <IconFolderOpen className="text-lg" />}
              {section.level === 3 && <IconFile className="text-lg" />}
              {section.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
