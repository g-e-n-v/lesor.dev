"use client";
import type { CodeBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import type { Nodes, Options } from "hast-util-to-jsx-runtime/lib";
import { Fragment, useRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { refractor } from "refractor";

import { OutlineClipboardTextIcon } from "@/assets/icons/OutlineClipboardTextIcon";
import { OutlineClipboardTickIcon } from "@/assets/icons/OutlineClipboardTickIcon";
import { CODE_LANGUAGE_ICON } from "@/constants/mapping-language-icon.constant";
import { useClipboard } from "@/hooks/useClipboard";
import { getPlainText } from "@/services/notion/get-plain-text.service";
import { cn } from "@/utils/cn.util";

type NotionCodeBlockProps = Pick<CodeBlockObjectResponse, "code">;

export function NotionCodeBlock({ code }: NotionCodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);
  const clipboard = useClipboard({ timeout: 2000 });

  const { caption, language, rich_text } = code;
  const codePlainText = rich_text.map((text) => text.plain_text).join("");

  const tree = refractor.highlight(codePlainText, language);

  const content = toJsxRuntime(tree as Nodes, {
    Fragment,
    jsx: jsx as Options["jsx"],
    jsxs: jsxs as Options["jsxs"],
    development: false,
  });

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
          <span className="font-mono text-xs text-gray-500">{title}</span>
        </div>

        <ClipboardIcon
          className={cn("cursor-pointer text-gray-500 transition-all", {
            "text-green-500": clipboard.copied,
          })}
          onClick={handleCopy}
        />
      </div>
      <pre className="ligatures-none mb-8 overflow-x-auto rounded-b-lg bg-gray-200/50 p-4">
        <code className="text-gray-700" ref={codeRef}>
          {content}
        </code>
      </pre>
    </div>
  );
}
