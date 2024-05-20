import Image from "next/image";
import Link from "next/link";

import IconCalendar from "@/assets/svgs/calendar.svg";
import { Tag } from "@/components/Tag";
import type { StrictDayJsConfigType } from "@/types/app.type";
import type { Maybe } from "@/types/base.type";
import type { NoteTag } from "@/types/note.type";
import { cn } from "@/utils/cn.util";
import { formatShortDate } from "@/utils/dayjs.util";

type WritingCardProps = {
  title: string;
  description: string;
  tags: Array<NoteTag>;
  publishDate: StrictDayJsConfigType;
  slug: string;
  thumbnail: Maybe<string>;
  className?: string;
};

export function WritingCard({
  title,
  thumbnail,
  slug,
  tags,
  description,
  className,
  publishDate,
}: WritingCardProps) {
  return (
    <Link
      href={`/writings/${slug}`}
      className={cn(
        "group relative inline-block aspect-[3/4] overflow-hidden rounded-lg border border-neutral-700",
        className
      )}
    >
      <div
        className={cn(
          "absolute top-0 h-3/5 w-full bg-red-50",
          "transition-all duration-500",
          "group-hover:h-1/5"
        )}
      >
        {thumbnail && (
          <Image
            src={thumbnail}
            alt={title}
            className="absolute size-full object-cover object-bottom"
            fill
          />
        )}
      </div>

      <div
        className={cn(
          "absolute bottom-0 flex h-2/5 w-full flex-col border-t border-neutral-700 bg-neutral-800 p-2",
          "transition-all duration-500",
          "group-hover:h-4/5"
        )}
      >
        <div className="flex size-max items-center gap-1 px-1 text-sm text-neutral-500">
          <IconCalendar />
          {formatShortDate(publishDate)}
        </div>

        <h2 className={cn("line-clamp-2 shrink-0", "group-hover:text-white")}>{title}</h2>

        <p
          className={cn(
            "line-clamp-3 h-0 overflow-hidden italic text-neutral-500",
            "transition-all duration-500",
            "group-hover:h-full"
          )}
        >
          {description}
        </p>

        <div className="flex grow items-end gap-1">
          {tags.map(({ name, color }) => (
            <Tag key={name} color={color}>
              {name}
            </Tag>
          ))}
        </div>
      </div>
    </Link>
  );
}
