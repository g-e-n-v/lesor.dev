import { Tag } from "@/components/Tag";
import { NotionRenderer } from "@/components/notion-renderer/NotionRenderer";
import {
  getPublishedWritingBySlug,
  getPublishedWritingContentBySlug,
  getPublishedWritings,
} from "@/services/notion/get-notes.service";
import { getPlainText } from "@/services/notion/get-plain-text.service";
import { formatShortDate } from "@/utils/dayjs.util";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type WritingPageProps = {
  params: { slug: string };
};

export default async function WritingPage({ params }: WritingPageProps) {
  const { content, summary } = await getPublishedWritingContentBySlug(params.slug);

  if (!content) {
    notFound();
  }

  const { lastEditTime, tags, title, description } = summary;

  return (
    <div className="px-2 pb-12">
      <div className="mb-1 mt-4 flex items-center gap-4">
        <span className="text-sm font-semibold text-gray-500">{formatShortDate(lastEditTime)}</span>
        <div className="flex gap-2">
          {tags.map((tag) => (
            <Tag key={tag.name} color={tag.color}>
              {tag.name}
            </Tag>
          ))}
        </div>
      </div>
      <h1 className="mb-8 mt-2 text-3xl font-bold text-gray-800">{getPlainText(title)}</h1>
      <p className="mb-6 italic text-gray-500">{getPlainText(description)}</p>

      <hr className="mb-12 w-1/4" />

      <div className="leading-loose tracking-wide">
        <NotionRenderer blocks={content} />
      </div>
    </div>
  );
}

export const generateMetadata = async ({ params }: WritingPageProps): Promise<Metadata> => {
  const writing = await getPublishedWritingBySlug(params.slug);

  if (!writing) {
    return {};
  }

  const { title } = writing;
  const metadata: Metadata = {
    title: `${getPlainText(title)} | trungluc.dev`,
  };

  return metadata;
};

export const generateStaticParams = async () => {
  const writings = await getPublishedWritings();

  return writings.map((writing) => ({
    slug: writing.slug,
  }));
};
