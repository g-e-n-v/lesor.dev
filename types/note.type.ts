import type { RichText, StrictDayJsConfigType } from "@/types/app.type";
import type { NotionCover, NotionIcon } from "@/types/notion.type";
import type { Maybe } from "@/types/base.type";

type NoteStatus = { name: string; color: string };
export type NoteTag = { name: string; color: string };

export type Note = {
  id: string;
  cover: NotionCover;
  icon: NotionIcon;
  title: RichText;
  description: RichText;
  lastEditTime: string;
  status: Maybe<NoteStatus>;
  publishDate: StrictDayJsConfigType;
  tags: Array<NoteTag>;
  slug: string;
};
