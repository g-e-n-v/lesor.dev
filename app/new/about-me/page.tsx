import type { Metadata } from "next";

import EIS_LOGO from "@/assets/images/eis.png";
import { TableOfContent } from "@/components/new/TableOfContent";
import { TechStacks } from "@/components/TechStacks";
import { WorkCard } from "@/components/WorkCard";

export default function AboutMePage() {
  return (
    <div className="flex h-full">
      <div className="w-80 shrink-0 border-r border-stroke">
        <TableOfContent />
      </div>

      <div className="grow overflow-y-auto">
        <article className="mx-auto max-w-4xl scroll-smooth p-4 leading-6">
          <section id="summary">
            <h2>Summary</h2>
            <p className="text-justify">
              With over 3 years of software development experience across diverse industries
              including B2B, aviation, construction, blockchain, and e-commerce, I am confident in
              my ability to provide valuable insights and effectively develop new projects. I am
              known for my attention to detail, integrity, and positive attitude. I am currently
              seeking opportunities that will challenge me and enable me to leverage my skills to
              the fullest.
            </p>
          </section>

          <section id="tech-stack">
            <h2>Tech stacks</h2>
            <TechStacks />
          </section>

          <section id="experience">
            <h2>Work Experience</h2>

            <div className="flex flex-col gap-4">
              <section id="experience__enouvo">
                <WorkCard
                  logo={EIS_LOGO}
                  company="Enouvo IT Solution"
                  position="Software Engineer"
                  from="2022-03-01"
                  description={[
                    "Optimize website performance, and improve UI/UX.",
                    "Reduce the number of issued tickets by using Typescript and applying unit tests.",
                    "Write a coding guideline and review checklists, applicable to the whole team.",
                    "Share knowledge about software development with the team weekly.",
                    "Follow up on the feature's release plan.",
                  ]}
                />
              </section>

              <section id="experience__zozitech">
                <WorkCard
                  company="ZoZiTech"
                  position="Frontend Developer"
                  from="2021-04-01"
                  to="2022-03-01"
                  description={[
                    "Engage in the creation of a digital currency exchange and Non-Fungible Token (NFT) offerings.",
                    "Build a cross-platform mobile app",
                  ]}
                />
              </section>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Luc Le - About me",
};
