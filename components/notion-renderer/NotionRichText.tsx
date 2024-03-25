import { TEXT_COLOR_CLASSNAME } from "@/constants/mapping-color.constant";
import { cn } from "@/utils/cn.util";
import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import { createElement } from "react";

type NotionParagraphProps = {
  content: Array<RichTextItemResponse>;
};

export const NotionRichText = ({ content }: NotionParagraphProps) => {
  const texts = content.filter((item) => "text" in item);

  return texts.map(({ plain_text, annotations, href }, idx) => {
    const getElement = () => {
      if (annotations.code) {
        return "code";
      }

      if (href) {
        return "a";
      }

      return "span";
    };

    return createElement(
      getElement(),
      {
        ...(href ? { href, target: "_blank" } : {}),
        key: idx,
        className: cn(
          {
            underline: annotations.underline,
            "font-semibold": annotations.bold,
            italic: annotations.italic,
            "line-through": annotations.strikethrough,
            "bg-neutral-200/50 rounded-md py-0.5 px-1 text-sm font-medium text-blue-500": annotations.code,
            rounded: annotations.color.endsWith("_background"),
            "underline text-blue-400 font-medium cursor-pointer": href,
          },
          TEXT_COLOR_CLASSNAME[annotations.color]
        ),
      },
      plain_text
    );
  });
};
