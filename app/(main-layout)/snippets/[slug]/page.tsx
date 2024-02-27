import { Tag } from "@/components/Tag";
import { NotionRenderer } from "@/components/notion-renderer/NotionRenderer";
import {
  getPublishedSnippetBySlug,
  getPublishedSnippetContentBySlug,
  getPublishedSnippets,
} from "@/services/notion/get-notes.service";
import { getPlainText } from "@/services/notion/get-plain-text.service";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type SnippetPageProps = {
  params: { slug: string };
};

export default async function SnippetPage({ params }: SnippetPageProps) {
  const { content, summary } = (await getPublishedSnippetContentBySlug(params.slug)) ?? {};

  if (!content || !summary) {
    notFound();
  }

  const { tags, title, description } = summary;

  return (
    <div className="px-2">
      <div className="flex gap-2">
        {tags.map((tag) => (
          <Tag key={tag.name} color={tag.color}>
            {tag.name}
          </Tag>
        ))}
      </div>
      <h1 className="mb-8 mt-2 text-3xl font-bold text-gray-800">{getPlainText(title)}</h1>
      <p className="mb-6 italic text-gray-500">{getPlainText(description)}</p>

      <hr className="mb-12 w-1/4" />

      <NotionRenderer blocks={content} />
    </div>
  );
}

export const generateMetadata = async ({ params }: SnippetPageProps): Promise<Metadata> => {
  const snippet = await getPublishedSnippetBySlug(params.slug);

  if (!snippet) {
    return {};
  }

  const { title } = snippet;
  const metadata: Metadata = {
    title: `${getPlainText(title)} | trungluc.dev`,
  };

  return metadata;
};

export const generateStaticParams = async () => {
  const snippets = await getPublishedSnippets();

  return snippets.map((snippet) => ({
    slug: snippet.slug,
  }));
};
