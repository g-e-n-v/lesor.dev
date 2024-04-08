import type { PageObjectResponse, RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import type { ConfigType } from "dayjs";

import type {
  NotionMultipleSelectProperty,
  NotionRichTextProperty,
  NotionSelectProperty,
  NotionStatusProperty,
  NotionTitleProperty,
} from "@/types/notion.type";

export type StrictDayJsConfigType = Exclude<ConfigType, undefined | null>;

export type RichText = Array<RichTextItemResponse>;

export type NotionNote = PageObjectResponse & {
  properties: {
    Title: NotionTitleProperty;
    Description: NotionRichTextProperty;
    Status: NotionStatusProperty;
    Tag: NotionMultipleSelectProperty;
    Type: NotionSelectProperty;
    Slug: NotionRichTextProperty;
  };
};
