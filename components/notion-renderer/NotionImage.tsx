import type { ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import Image from "next/image";

type NotionImageProps = Pick<ImageBlockObjectResponse, "image">;

export const NotionImage = ({ image }: NotionImageProps) => {
  const url = image.type === "external" ? image.external.url : image.file.url;
  const alt = image.caption.map((caption) => caption.plain_text).join(" ");

  return (
    <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-md">
      <Image src={url} alt={alt} sizes="100vw" fill className="object-contain" />
    </div>
  );
};
