import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import WAVING_HAND_PNG from "@/assets/images/waving-hand.png";
import IconArrowRight from "@/assets/svgs/arrow-right.svg";
import IconLocation from "@/assets/svgs/location.svg";
import IconRocket from "@/assets/svgs/rocket.svg";
import VietnamFlag from "@/assets/svgs/vietnam-flag.svg";
import { Divider } from "@/components/Divider";
import { TechStacks } from "@/components/TechStacks";
import { WritingCard } from "@/components/WritingCard";
import { getCoverUrl } from "@/services/notion/get-cover-url.service";
import { getPlainText } from "@/services/notion/get-plain-text.service";
import { getNotes } from "@/services/notion/notes.service";
import { cn } from "@/utils/cn.util";

export default async function HelloPage() {
  const writings = await getNotes({ type: "writing", status: "Published" });

  return (
    <div className="py-10">
      <h1 className="mb-2 flex items-start gap-2 text-3xl font-semibold">
        Hi, I&apos;m Luc <Image src={WAVING_HAND_PNG} alt="waving hand" className="size-7" />
      </h1>

      <Link
        href="https://maps.app.goo.gl/9uJqLtQ9qJZYhRTf6"
        target="_blank"
        className={cn("mb-6 flex items-center gap-2 text-neutral-500", "hover:underline")}
      >
        <IconLocation />
        <span>Da Nang, Viet Nam</span>
        <VietnamFlag className="text-xl" />
      </Link>

      <p>
        I&apos;m a full-stack software engineer with a primary focus on front-end development. I
        work with JavaScript and specialize in all-things web. I thrive on collaborating with teams
        to deliver efficient, scalable, and visually appealing web applications.
      </p>

      <Divider />

      <section>
        <h2 className="mb-4 flex justify-between text-xl font-medium">
          Latest Writings
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
        <div className="flex gap-4 overflow-x-auto scrollbar-none">
          {writings.slice(0, 4).map((writing) => (
            <WritingCard
              className="w-72 shrink-0"
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

      <section>
        <h2 className="mb-4 flex justify-between text-xl font-medium">Tools That I Have Used</h2>
        <TechStacks />
      </section>

      <Divider />

      <section>
        <h2 className="mb-4 flex justify-between text-xl font-medium">
          What I&apos;ve Been Working On
        </h2>
        <p className="mb-4">
          I assist brands, companies, institutions, and startups in creating exceptional digital
          experiences for their businesses through strategic development services.
        </p>

        <div className="rounded-lg border border-neutral-700 bg-neutral-800 p-4">
          <h2 className="mb-2 flex items-center gap-2 text-xl font-medium">
            <IconRocket />
            Lets work together!
          </h2>

          <p className="mb-4">
            I&apos;m looking forward to connecting with you. Don&apos;t hesitate to reach out to me
            for a meeting today.
          </p>

          <Link
            href="/contact"
            className={cn(
              "rounded-lg bg-neutral-600 px-3 py-2 transition-all",
              "hover:bg-neutral-700"
            )}
          >
            Contact me
          </Link>
        </div>
      </section>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Luc Le | lesor.dev",
};
