import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

import { getHeadingId } from "@/services/id.service";
import { getPlainText } from "@/services/notion/get-plain-text.service";
import type { TOCSection } from "@/types/writing.type";

type NotionHeading = Extract<BlockObjectResponse, { type: `heading_${number}` }>;

const isNotionHeading = (block: BlockObjectResponse): block is NotionHeading => block.type.startsWith("heading");

const getNotionHeadingRichText = (heading: NotionHeading) => {
  switch (heading.type) {
    case "heading_1":
      return heading.heading_1.rich_text;
    case "heading_2":
      return heading.heading_2.rich_text;
    case "heading_3":
      return heading.heading_3.rich_text;
  }
};

export const getTableOfContent = (content: Array<BlockObjectResponse>): Array<TOCSection> => {
  const sections: Array<TOCSection> = content.filter(isNotionHeading).map((heading) => {
    const richtext = getNotionHeadingRichText(heading);

    return {
      title: getPlainText(richtext),
      id: getHeadingId(richtext),
      type: heading.type,
    };
  });

  return sections;
};
