import type { NotionCover } from "@/types/notion.type";

export const getCoverUrl = (cover: NotionCover) => {
  if (!cover) return null;

  return cover.type === "external" ? cover.external.url : cover.file.url;
};
