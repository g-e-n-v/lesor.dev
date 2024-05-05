import type { Metadata } from "next";

import { TechStacks } from "@/components/TechStacks";

export default function AboutMePage() {
  return (
    <div className="flex h-full">
      <div className="w-80 shrink-0 border-r border-stroke p-4">hehe</div>

      <div className="grow overflow-y-auto">
        <article className="mx-auto h-full max-w-4xl p-4 leading-6">
          <section>
            <h1>Summary</h1>
            <p className="text-justify">
              With over 3 years of software development experience across diverse industries
              including B2B, aviation, construction, blockchain, and e-commerce, I am confident in
              my ability to provide valuable insights and effectively develop new projects. I am
              known for my attention to detail, integrity, and positive attitude. I am currently
              seeking opportunities that will challenge me and enable me to leverage my skills to
              the fullest.
            </p>
          </section>

          <section>
            <h1>Tech stacks</h1>
            <TechStacks />
          </section>

          <section>
            <h1>Work Experience</h1>
            <TechStacks />
          </section>
        </article>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Luc Le - About me",
};
