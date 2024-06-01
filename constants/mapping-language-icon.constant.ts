import type { FunctionComponent } from "react";

import IconBash from "@/assets/svgs/bash.svg";
import IconJavascript from "@/assets/svgs/javascript.svg";
import IconTypescript from "@/assets/svgs/typescript.svg";
import type { CodeLanguage } from "@/types/notion.type";

export const CODE_LANGUAGE_ICON: Partial<Record<CodeLanguage, FunctionComponent>> = {
  bash: IconBash,
  javascript: IconJavascript,
  typescript: IconTypescript,
};
