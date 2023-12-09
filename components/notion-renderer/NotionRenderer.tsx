import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionRichText } from "@/components/notion-renderer/NotionRichText";
import { NotionCodeBlock } from "@/components/notion-renderer/NotionCodeBlock";
import { NotionImage } from "@/components/notion-renderer/NotionImage";

import "@/styles/code-highlight.css";

type NotionRendererProps = {
  blocks: Array<BlockObjectResponse>;
};

export const NotionRenderer = ({ blocks }: NotionRendererProps) => {
  const content = blocks.map((block) => {
    switch (block.type) {
      case "paragraph":
        return (
          <p className="pb-8 text-gray-700">
            <NotionRichText content={block.paragraph.rich_text} />
          </p>
        );

      case "code":
        return <NotionCodeBlock code={block.code} />;

      case "image":
        return <NotionImage image={block.image} />;

      case "heading_1":
        return (
          <h1 className="mb-8">
            <NotionRichText content={block.heading_1.rich_text} />
          </h1>
        );

      case "heading_2":
        return (
          <h2 className="mb-6">
            <NotionRichText content={block.heading_2.rich_text} />
          </h2>
        );

      case "heading_3":
        return (
          <h3 className="mb-4">
            <NotionRichText content={block.heading_3.rich_text} />
          </h3>
        );

      default:
        console.error(`${block.type} not supported`);
        return null;
    }
  });

  return content;
};
