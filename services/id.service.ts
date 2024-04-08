import { getPlainText } from "@/services/notion/get-plain-text.service";
import type { RichText } from "@/types/app.type";
import { removeAccent } from "@/utils/string.util";

export const getHeadingId = (richText: RichText) => {
  const plainText = getPlainText(richText).toLowerCase();
  const headingId = removeAccent(plainText).replaceAll(" ", "-");

  return headingId;
};
