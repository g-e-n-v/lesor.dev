"use client";
import type { CodeBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
// @ts-expect-error: react types don’t type these.
import { jsx, jsxs } from "react/jsx-runtime";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { Fragment, useRef } from "react";
import { refractor } from "refractor";
import type { Nodes } from "hast-util-to-jsx-runtime/lib";
import { OutlineClipboardTextIcon } from "@/assets/icons/OultlineClipboardTextIcon";
import { cn } from "@/utils/cn.util";
import { getPlainText } from "@/services/notion/get-plain-text.service";
import { CODE_LANGUAGE_ICON } from "@/constants/mapping-language-icon.constant";
import { useClipboard } from "@/hooks/useClipboard";
import { OutlineClipboardTickIcon } from "@/assets/icons/OutlineClipboardTickIcon";

export type NotionCodeBlockProps = Pick<CodeBlockObjectResponse, "code">;

export const NotionCodeBlock = ({ code }: NotionCodeBlockProps) => {
  const codeRef = useRef<HTMLElement>(null);
  const clipboard = useClipboard({ timeout: 2000 });

  const { caption, language, rich_text } = code;
  const codePlainText = rich_text.map((text) => text.plain_text).join("");

  const tree = refractor.highlight(codePlainText, language);
  /*  eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
  const content = toJsxRuntime(tree as Nodes, { Fragment, jsx, jsxs });

  const title = getPlainText(caption) || language;
  const Icon = CODE_LANGUAGE_ICON[language];

  const handleCopy = () => {
    const content = codeRef.current?.innerText ?? "";
    clipboard.copy(content);
  };

  const ClipboardIcon = clipboard.copied ? OutlineClipboardTickIcon : OutlineClipboardTextIcon;

  return (
    <div>
      <div className="flex items-center rounded-t-lg bg-gray-200 px-4 py-3">
        <div className="flex grow items-center gap-2">
          {Icon && <Icon />}
          <span className="text-sm text-gray-500">{title}</span>
        </div>

        <ClipboardIcon
          className={cn("cursor-pointer text-gray-500 transition-all", {
            "text-green-500": clipboard.copied,
          })}
          onClick={handleCopy}
        />
      </div>
      <pre className="mb-8 overflow-x-auto rounded-b-lg bg-gray-200/50 p-4">
        <code className="text-sm text-gray-700" ref={codeRef}>
          {content}
        </code>
      </pre>
    </div>
  );
};
