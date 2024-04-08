import Link from "next/link";

import { Tag } from "@/components/Tag";
import type { StrictDayJsConfigType } from "@/types/app.type";
import type { NoteTag } from "@/types/note.type";
import { cn } from "@/utils/cn.util";
import { formatShortDate } from "@/utils/dayjs.util";

type WritingCardProps = {
  title: string;
  description: string;
  tags: Array<NoteTag>;
  publishDate: StrictDayJsConfigType;
  slug: string;
};

export const WritingCard = ({ title, description, tags, publishDate, slug }: WritingCardProps) => {
  return (
    <Link href={`/writings/${slug}`} className="flex">
      <div className={cn("hidden w-28 shrink-0 py-4 text-right text-sm font-semibold text-gray-500", "md:block")}>
        {formatShortDate(publishDate)}
      </div>

      <div className="mx-4 flex flex-col items-center">
        <div className="h-5 w-px bg-gray-300" />
        <div className="size-3 rounded-full border border-solid border-gray-300" />
        <div className="w-px grow bg-gray-300" />
      </div>

      <div className="w-full">
        <div className={cn("shrink-0 pb-2 pt-4 text-sm font-semibold text-gray-500", "md:hidden")}>
          {formatShortDate(publishDate)}
        </div>
        <div className={cn("mb-6 w-full rounded-xl p-4 transition-all duration-500", "hover:bg-neutral-200/50")}>
          <h1 className="mb-1 font-semibold text-gray-700">{title}</h1>
          <h2 className="mb-3 text-sm text-gray-500">{description}</h2>
          <div className="flex gap-1">
            {tags.map(({ name, color }) => (
              <Tag key={name} color={color}>
                {name}
              </Tag>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};
