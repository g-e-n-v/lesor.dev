import { WritingCard } from "@/components/WritingCard";
import { getPublishedWritings } from "@/services/notion/get-notes.service";
import { getPlainText } from "@/services/notion/get-plain-text.service";
import type { Metadata } from "next";

export default async function WritingsPage() {
  const writings = await getPublishedWritings();

  return (
    <>
      <h2 className="mb-3 text-center text-3xl font-bold text-gray-900">Writings</h2>
      <h3 className="mb-12 text-center text-gray-500">some of my thoughts on web development</h3>

      <div className="px-2">
        {writings.map((writing) => (
          <WritingCard
            key={writing.id}
            title={getPlainText(writing.title)}
            description={getPlainText(writing.description)}
            publishDate={writing.publishDate}
            tags={writing.tags}
            slug={writing.slug}
          />
        ))}
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: "writings | trungluc.dev",
};
