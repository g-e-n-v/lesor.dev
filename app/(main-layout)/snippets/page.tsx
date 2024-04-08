import type { Metadata } from "next";
import Link from "next/link";

import { Tag } from "@/components/Tag";
import { getPlainText } from "@/services/notion/get-plain-text.service";
import { getNotes } from "@/services/notion/notes.service";
import { cn } from "@/utils/cn.util";

export default async function SnippetsPage() {
  const snippets = await getNotes({ status: "Published", type: "snippet" });

  return (
    <>
      <h2 className="mb-3 text-center text-3xl font-bold text-gray-900">Snippets</h2>
      <h3 className="mb-12 text-center text-gray-500">small but helpful code examples</h3>

      <div className="flex flex-col gap-4">
        {snippets.map((snippet) => (
          <Link
            href={`/snippets/${snippet.slug}`}
            key={snippet.id}
            className={cn("rounded-md bg-neutral-200/30 p-4 transition-all", "hover:scale-105")}
          >
            <div className="mb-2 flex items-center justify-between gap-4">
              <h1 className="font-semibold text-gray-700">{getPlainText(snippet.title)}</h1>
              <div className="flex gap-2">
                {snippet.tags.map((tag) => (
                  <Tag key={tag.name} color={tag.color}>
                    {tag.name}
                  </Tag>
                ))}
              </div>
            </div>
            <h2 className="text-sm text-gray-500">{getPlainText(snippet.description)}</h2>
          </Link>
        ))}
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: "snippets | trungluc.dev",
};
