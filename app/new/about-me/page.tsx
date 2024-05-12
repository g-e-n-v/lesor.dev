import type { Metadata } from "next";

import EIS_LOGO from "@/assets/images/eis.png";
import FU_LOGO from "@/assets/images/fu-logo.jpg";
import { TableOfContent } from "@/components/new/TableOfContent";
import { TechStacks } from "@/components/TechStacks";
import { WorkCard } from "@/components/WorkCard";
import { cn } from "@/utils/cn.util";

export default function AboutMePage() {
  return (
    <div className="flex h-full">
      <div className={cn("hidden w-80 shrink-0 border-r border-stroke", "lg:block")}>
        <TableOfContent />
      </div>

      <div className="grow overflow-y-auto" id="article">
        <article className="mx-auto flex max-w-4xl flex-col gap-12 scroll-smooth p-4 leading-6">
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
                  description={
                    [
                      // "Optimize website performance, and improve UI/UX.",
                      // "Reduce the number of issued tickets by using Typescript and applying unit tests.",
                      // "Write a coding guideline and review checklists, applicable to the whole team.",
                      // "Share knowledge about software development with the team weekly.",
                      // "Follow up on the feature's release plan.",
                    ]
                  }
                />
              </section>

              <section id="experience__zozitech">
                <WorkCard
                  company="ZoZiTech"
                  position="Frontend Developer"
                  from="2021-04-01"
                  to="2022-03-01"
                  description={
                    [
                      // "Engage in the creation of a digital currency exchange and Non-Fungible Token (NFT) offerings.",
                      // "Build a cross-platform mobile app",
                    ]
                  }
                />
              </section>
            </div>
          </section>

          <section id="education">
            <h2>Education</h2>
            <section id="education__fpt">
              <WorkCard
                company="FPT University"
                position="Software Engineering"
                description={[
                  "Classification: Good",
                  "Coursework: Data Structure & Algorithm, Operating Systems, Networking, Computer Architecture, Software Development Process,...",
                  "Leader of FU-Dever Club - software development club at FPT University, Da Nang Campus.",
                ]}
                from={"2019-08-01"}
                to={"2023-08-01"}
                logo={FU_LOGO}
              />
            </section>
          </section>
        </article>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Luc Le - About me",
};
