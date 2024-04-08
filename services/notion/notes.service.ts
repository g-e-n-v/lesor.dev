import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import dayjs from "dayjs";

import { notion } from "@/services/notion/client";
import { getPlainText } from "@/services/notion/get-plain-text.service";
import type { NotionNote } from "@/types/app.type";
import type { Note, NoteFilter } from "@/types/note.type";
import type { NotionQueryFilter } from "@/types/notion.type";

const isBlockObjectResponse = (block: Record<string, unknown>): block is BlockObjectResponse => "type" in block;

export async function getNotes({ status, type, slug }: NoteFilter = {}) {
  const filter: NotionQueryFilter = {
    and: [
      ...(status ? [{ property: "Status", status: { equals: status } }] : []),
      ...(type ? [{ property: "Type", select: { equals: type } }] : []),
      ...(slug ? [{ property: "Slug", rich_text: { equals: slug } }] : []),
    ],
  };

  const { results } = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter,
    page_size: 10_000,
  });

  const notes: Array<Note> = (results as unknown as Array<NotionNote>).map((result) => ({
    id: result.id,
    cover: result.cover,
    icon: result.icon,
    lastEditTime: result.last_edited_time,
    description: result.properties.Description.rich_text,
    title: result.properties.Title.title,
    status: result.properties.Status.status,
    publishDate: dayjs(result.last_edited_time),
    tags: result.properties.Tag.multi_select,
    slug: getPlainText(result.properties.Slug.rich_text),
  }));

  return notes;
}

export async function getNoteDetail(slug: string) {
  const [note] = await getNotes({ slug });

  if (!note) {
    return {};
  }

  const { results: blocks } = await notion.blocks.children.list({
    block_id: note.id,
    page_size: 10_000,
  });

  return { content: blocks.filter(isBlockObjectResponse), summary: note };
}
