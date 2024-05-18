import Image from "next/image";
import Link from "next/link";

import WAVING_HAND_PNG from "@/assets/images/waving-hand.png";
import IconArrowRight from "@/assets/svgs/arrow-right.svg";
import IconLocation from "@/assets/svgs/location.svg";
import VietnamFlag from "@/assets/svgs/vietnam-flag.svg";
import { Divider } from "@/components/Divider";
import { WritingCard } from "@/components/WritingCard";
import { getCoverUrl } from "@/services/notion/get-cover-url.service";
import { getPlainText } from "@/services/notion/get-plain-text.service";
import { getNotes } from "@/services/notion/notes.service";
import { cn } from "@/utils/cn.util";

export default async function HelloPage() {
  const writings = await getNotes({ type: "writing" });

  return (
    <div className="py-10">
      <h1 className="mb-2 flex items-start gap-2 text-3xl font-medium">
        Hi, I&apos;m Luc <Image src={WAVING_HAND_PNG} alt="waving hand" className="size-7" />
      </h1>

      <div className="mb-6 flex items-center gap-2 text-neutral-500">
        <IconLocation />
        <span>Da Nang, Viet Nam</span>
        <VietnamFlag className="text-xl" />
      </div>

      <p>
        I&apos;m a full-stack software engineer with a primary focus on front-end development. I
        work with JavaScript and specialize in all-things web. I thrive on collaborating with teams
        to deliver efficient, scalable, and visually appealing web applications. If you need
        something done tomorrow, hit me up today.
      </p>

      <Divider />

      <section>
        <h2 className="mb-4 flex justify-between text-xl font-medium">
          Latest Writings{" "}
          <Link
            href="/writings"
            className={cn(
              "group flex items-center text-sm font-normal text-neutral-500",
              "hover:text-neutral-100"
            )}
          >
            <span className={cn("mr-2 transition-all", "group-hover:mr-4")}>all writings</span>
            <IconArrowRight />
          </Link>
        </h2>
        <div className={cn("grid grid-cols-1 gap-4", "md:grid-cols-2", "lg:grid-cols-3")}>
          {writings.slice(0, 3).map((writing) => (
            <WritingCard
              thumbnail={getCoverUrl(writing.cover)}
              key={writing.id}
              title={getPlainText(writing.title)}
              description={getPlainText(writing.description)}
              publishDate={writing.publishDate}
              tags={writing.tags}
              slug={writing.slug}
            />
          ))}
        </div>
      </section>

      <Divider />
    </div>
  );
}
