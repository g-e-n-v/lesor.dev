import { DashDivider } from "@/components/DashDivider";
import { WritingCard } from "@/components/WritingCard";
import { getCoverUrl } from "@/services/notion/get-cover-url.service";
import { getPlainText } from "@/services/notion/get-plain-text.service";
import { getNotes } from "@/services/notion/notes.service";
import { cn } from "@/utils/cn.util";

export default async function WritingsPage() {
  const writings = await getNotes({ type: "writing", status: "Published" });

  return (
    <div className="py-10">
      <h1 className="mb-2 text-xl font-medium">Writings</h1>
      <p className="text-neutral-500">Web development thoughts and stories</p>
      <DashDivider />

      <div className={cn("grid grid-cols-1 gap-4", "sm:grid-cols-2", "lg:grid-cols-3")}>
        {writings.map((writing) => (
          <WritingCard
            className={cn("aspect-square", "sm:aspect-[3/4]")}
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
    </div>
  );
}
