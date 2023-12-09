import { Tag } from "@/components/Tag";
import { getPublishedSnippets } from "@/services/notion/get-notes.service";
import { getPlainText } from "@/services/notion/get-plain-text.service";
import { cn } from "@/utils/cn.util";
import type { Metadata } from "next";
import Link from "next/link";

export default async function SnippetsPage() {
  const snippets = await getPublishedSnippets();

  return (
    <>
      <h2 className="mb-3 text-center text-3xl font-bold text-gray-900">Snippets</h2>
      <h3 className="mb-12 text-center text-gray-500">small but helpful code examples</h3>

      <div className="flex flex-col gap-4">
        {snippets.map((snippet) => (
          <Link
            href={`/snippets/${snippet.slug}`}
            key={snippet.id}
            className={cn("rounded-md bg-blue-50 p-4 transition-all", "hover:scale-105")}
          >
            <div className="mb-2 flex items-center justify-between gap-4">
              <h1 className="text-lg font-semibold text-gray-700">{getPlainText(snippet.title)}</h1>
              <div className="flex gap-2">
                {snippet.tags.map((tag) => (
                  <Tag key={tag.name} color={tag.color}>
                    {tag.name}
                  </Tag>
                ))}
              </div>
            </div>
            <h2 className="text-gray-500">{getPlainText(snippet.description)}</h2>
          </Link>
        ))}
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: "snippets | trungluc.dev",
};
