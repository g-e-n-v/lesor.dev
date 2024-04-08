import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { NotionRenderer } from "@/components/notion-renderer/NotionRenderer";
import { TableOfContent } from "@/components/TableOfContent";
import { Tag } from "@/components/Tag";
import { getPlainText } from "@/services/notion/get-plain-text.service";
import { getNoteDetail, getNotes } from "@/services/notion/notes.service";
import { getTableOfContent } from "@/services/notion/toc.service";
import { cn } from "@/utils/cn.util";
import { formatShortDate } from "@/utils/dayjs.util";

type WritingPageProps = {
  params: { slug: string };
};

export default async function WritingPage({ params }: WritingPageProps) {
  const { content, summary } = await getNoteDetail(params.slug);

  if (!content) {
    notFound();
  }

  const { lastEditTime, tags, title, description } = summary;
  const toc = getTableOfContent(content);

  return (
    <div className="relative px-2 pb-4">
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
      <h1
        className={cn(
          "mb-8 mt-2 font-mono text-3xl font-bold text-gray-800",
          "before:text-slate-300 before:content-['#.']"
        )}
      >
        {getPlainText(title)}
      </h1>
      <p className="mb-6 italic text-gray-500">{getPlainText(description)}</p>

      <hr className="mb-8 w-1/4" />

      <div className="toc-index leading-loose tracking-wide">
        <NotionRenderer blocks={content} />
      </div>

      <div className="absolute left-full top-0 h-full pl-8">
        <TableOfContent className="sticky top-44 hidden xl:block" toc={toc} />
      </div>
    </div>
  );
}

export const generateMetadata = async ({ params }: WritingPageProps): Promise<Metadata> => {
  const [writing] = await getNotes({ slug: params.slug, type: "writing", status: "Published" });

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
  const writings = await getNotes({ status: "Published", type: "writing" });

  return writings.map((writing) => ({
    slug: writing.slug,
  }));
};
