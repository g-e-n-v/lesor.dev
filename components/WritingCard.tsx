import Image from "next/image";
import Link from "next/link";

import { Tag } from "@/components/Tag";
import type { StrictDayJsConfigType } from "@/types/app.type";
import type { Maybe } from "@/types/base.type";
import type { NoteTag } from "@/types/note.type";
import { cn } from "@/utils/cn.util";

type WritingCardProps = {
  title: string;
  description: string;
  tags: Array<NoteTag>;
  publishDate: StrictDayJsConfigType;
  slug: string;
  thumbnail: Maybe<string>;
};

export function WritingCard({ title, thumbnail, slug, tags, description }: WritingCardProps) {
  return (
    <Link
      href={`/writings/${slug}`}
      className="group relative aspect-square overflow-hidden rounded-lg border border-neutral-700 bg-blue-100"
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
        <h2 className={cn("line-clamp-2 shrink-0", "group-hover:text-white")}>{title}</h2>
        <desc
          className={cn(
            "line-clamp-3 h-0 overflow-hidden italic text-neutral-500",
            "transition-all duration-500",
            "group-hover:h-full"
          )}
        >
          {description}
        </desc>

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
