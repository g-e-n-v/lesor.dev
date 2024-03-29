import { Tag } from "@/components/Tag";
import { NotionRenderer } from "@/components/notion-renderer/NotionRenderer";
import { getPlainText } from "@/services/notion/get-plain-text.service";
import { getNoteDetail, getNotes } from "@/services/notion/notes.service";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type SnippetPageProps = {
  params: { slug: string };
};

export default async function SnippetPage({ params }: SnippetPageProps) {
  const { content, summary } = await getNoteDetail(params.slug);

  if (!content) {
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
      <h1 className="mb-8 mt-2 font-mono text-3xl font-bold text-gray-800">{getPlainText(title)}</h1>
      <p className="mb-6 italic text-gray-500">{getPlainText(description)}</p>

      <hr className="mb-8 w-1/4" />

      <div className="leading-loose tracking-wide">
        <NotionRenderer blocks={content} />
      </div>
    </div>
  );
}

export const generateMetadata = async ({ params }: SnippetPageProps): Promise<Metadata> => {
  const [snippet] = await getNotes({ slug: params.slug, status: "Published", type: "snippet" });

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
  const snippets = await getNotes({ status: "Published", type: "snippet" });

  return snippets.map((snippet) => ({
    slug: snippet.slug,
  }));
};
