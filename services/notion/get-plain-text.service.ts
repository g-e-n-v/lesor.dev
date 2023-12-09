import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

export const getPlainText = (richtext: Array<RichTextItemResponse>): string => {
  const plainText = richtext.map((text) => text.plain_text).join(" ");

  return plainText;
};
