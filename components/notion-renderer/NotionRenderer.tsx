import "@/styles/code-highlight.css";

import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { ReactHTML } from "react";
import { createElement, type JSX } from "react";

import { NotionCodeBlock } from "@/components/notion-renderer/NotionCodeBlock";
import { NotionImage } from "@/components/notion-renderer/NotionImage";
import { NotionRichText } from "@/components/notion-renderer/NotionRichText";
import { getHeadingId } from "@/services/id.service";

const WRAPPER_TAG: Partial<Record<string, keyof ReactHTML>> = {
  bulleted_list_item: "ul",
  numbered_list_item: "ol",
};

type NotionRendererProps = {
  blocks: Array<BlockObjectResponse>;
};

type BlockRendererProps = {
  block: BlockObjectResponse;
};

const BlockRenderer = ({ block }: BlockRendererProps) => {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="pb-2 text-gray-950">
          <NotionRichText content={block.paragraph.rich_text} />
        </p>
      );

    case "code":
      return <NotionCodeBlock code={block.code} />;

    case "image":
      return <NotionImage image={block.image} />;

    case "heading_1":
      return (
        <h1 className="mb-4 mt-12 font-mono text-3xl">
          <NotionRichText content={block.heading_1.rich_text} />
        </h1>
      );

    case "heading_2":
      return (
        <h2
          className="-mt-16 pb-4 pt-24 font-mono text-2xl before:text-slate-400"
          id={getHeadingId(block.heading_2.rich_text)}
        >
          <NotionRichText content={block.heading_2.rich_text} />
        </h2>
      );

    case "heading_3":
      return (
        <h3 className="mb-2 mt-4 font-mono text-xl font-medium before:text-slate-400">
          <NotionRichText content={block.heading_3.rich_text} />
        </h3>
      );

    case "numbered_list_item":
      return (
        <li className="list-disc">
          <NotionRichText content={block.numbered_list_item.rich_text} />
        </li>
      );

    case "bulleted_list_item":
      return (
        <li className="list-disc">
          <NotionRichText content={block.bulleted_list_item.rich_text} />
        </li>
      );

    case "quote":
      return (
        <blockquote className="relative my-4 border-s-4 ps-6">
          <p className="py-2 text-gray-500">
            <em>
              <NotionRichText content={block.quote.rich_text} />
            </em>
          </p>
        </blockquote>
      );

    default:
      console.error(`${block.type} not supported`);
      return null;
  }
};

export const NotionRenderer = ({ blocks }: NotionRendererProps) => {
  const jsxBlocks: Array<JSX.Element> = [];
  let group: { type: string; children: Array<JSX.Element> } | null;

  blocks.forEach((block) => {
    const jsxElement = <BlockRenderer key={block.id} block={block} />;

    if (block.type === "bulleted_list_item" || block.type === "numbered_list_item") {
      if (group) {
        group.children.push(jsxElement);
      } else {
        group = {
          type: block.type,
          children: [jsxElement],
        };
      }

      return;
    }

    if (group && group.type !== block.type) {
      jsxBlocks.push(createElement(WRAPPER_TAG[group.type] ?? "div", { className: "pl-6 mb-2" }, group.children));
      group = null;
    }

    jsxBlocks.push(jsxElement);
  });

  return jsxBlocks;
};
