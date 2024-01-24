import { notion } from "@/services/notion/client";
import type { NotionNote } from "@/types/app.type";
import type { Note } from "@/types/note.type";
import type { NotionQueryDatabaseParams, NotionQueryFilterAnd } from "@/types/notion.type";
import dayjs from "dayjs";
import { first } from "lodash-es";
import { getPlainText } from "@/services/notion/get-plain-text.service";
import type { Maybe } from "@/types/base.type";
import type { BlockObjectResponse, PartialBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

const getNotes = async (args?: Omit<NotionQueryDatabaseParams, "database_id">): Promise<Array<Note>> => {
  const notionItems = [];
  let start_cursor = undefined;

  do {
    const { results, next_cursor } = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      ...args,
      start_cursor,
    });

    notionItems.push(...results);
    start_cursor = next_cursor;
  } while (start_cursor);

  const notes: Array<Note> = (notionItems as unknown as Array<NotionNote>).map((result) => ({
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
};

const getPublishedNotes = async (filters: NotionQueryFilterAnd["and"] = []) => {
  const notes = await getNotes({
    filter: { and: [{ property: "Status", status: { equals: "Published" } }, ...filters] },
  });

  return notes;
};

export const getPublishedWritings = async (filters: NotionQueryFilterAnd["and"] = []): Promise<Array<Note>> => {
  const writings = await getPublishedNotes([
    {
      property: "Type",
      select: { equals: "writing" },
    },
    ...filters,
  ]);

  return writings;
};

const isCompleteBlockObjectResponse = (
  block: PartialBlockObjectResponse | BlockObjectResponse
): block is BlockObjectResponse => "type" in block;

export const isBlockHasChildren = (block: BlockObjectResponse) => block.has_children;

const getBlocks = async (blockId: string) => {
  const blocks: Array<BlockObjectResponse> = [];
  let cursor: Maybe<string> = undefined;

  do {
    const { results, next_cursor } = await notion.blocks.children.list({
      start_cursor: cursor,
      block_id: blockId,
    });
    blocks.push(...results.filter(isCompleteBlockObjectResponse));
    cursor = next_cursor;
  } while (cursor);

  return blocks;
};

export const getPublishedWritingBySlug = async (slug: string) => {
  const writings = await getPublishedWritings([{ property: "Slug", rich_text: { equals: slug } }]);
  const writing = first(writings);

  return writing;
};

export const getPublishedWritingContentBySlug = async (slug: string) => {
  const writing = await getPublishedWritingBySlug(slug);

  if (!writing) {
    return {};
  }

  const blocks = await getBlocks(writing.id);

  return { content: blocks, summary: writing };
};

export const getPublishedSnippets = async (filters: NotionQueryFilterAnd["and"] = []): Promise<Array<Note>> => {
  const snippets = await getPublishedNotes([
    {
      property: "Type",
      select: { equals: "snippet" },
    },
    ...filters,
  ]);

  return snippets;
};

export const getPublishedSnippetBySlug = async (slug: string) => {
  const snippets = await getPublishedSnippets([{ property: "Slug", rich_text: { equals: slug } }]);
  const snippet = first(snippets);

  return snippet;
};

export const getPublishedSnippetContentBySlug = async (slug: string) => {
  const snippet = await getPublishedSnippetBySlug(slug);

  if (!snippet) {
    return;
  }

  const blocks = await getBlocks(snippet.id);

  return { content: blocks, summary: snippet };
};
