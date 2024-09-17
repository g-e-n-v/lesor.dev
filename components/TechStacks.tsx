import { ceil, chunk, shuffle } from "lodash-es";

import IconAntD from "@/assets/svgs/antd.svg";
import IconApollo from "@/assets/svgs/apollo.svg";
import IconCircleCI from "@/assets/svgs/circleci.svg";
import IconDart from "@/assets/svgs/dart.svg";
import IconDocker from "@/assets/svgs/docker.svg";
import IconExpress from "@/assets/svgs/express.svg";
import IconFigma from "@/assets/svgs/figma.svg";
import IconFramerMotion from "@/assets/svgs/framer-motion.svg";
import IconGit from "@/assets/svgs/git.svg";
import IconGraphQL from "@/assets/svgs/graphql.svg";
import IconJava from "@/assets/svgs/java.svg";
import IconJavascript from "@/assets/svgs/javascript.svg";
import IconJest from "@/assets/svgs/jest.svg";
import IconMaterialUI from "@/assets/svgs/material-ui.svg";
import IconMongoDB from "@/assets/svgs/mongodb.svg";
import IconNestJs from "@/assets/svgs/nest-js.svg";
import IconNextJs from "@/assets/svgs/next-js.svg";
import IconNx from "@/assets/svgs/nx.svg";
import IconPlaywright from "@/assets/svgs/playwright.svg";
import IconPostCSS from "@/assets/svgs/postcss.svg";
import IconPostgreSQL from "@/assets/svgs/postgresql.svg";
import IconPostman from "@/assets/svgs/postman.svg";
import IconPython from "@/assets/svgs/python.svg";
import IconReact from "@/assets/svgs/react.svg";
import IconReactQuery from "@/assets/svgs/react-query.svg";
import IconRedux from "@/assets/svgs/redux.svg";
import IconSelenium from "@/assets/svgs/selenium.svg";
import IconSentry from "@/assets/svgs/sentry.svg";
import IconSonarQube from "@/assets/svgs/sonarqube.svg";
import IconSpring from "@/assets/svgs/spring.svg";
import IconStorybook from "@/assets/svgs/storybook.svg";
import IconTailwindCSS from "@/assets/svgs/tailwindcss.svg";
import IconThreeJs from "@/assets/svgs/three-js.svg";
import IconTypescript from "@/assets/svgs/typescript.svg";
import IconVite from "@/assets/svgs/vite.svg";
import IconVitest from "@/assets/svgs/vitest.svg";
import IconVSCode from "@/assets/svgs/vscode.svg";
import { TechTag } from "@/components/TechTag";
import { cn } from "@/utils/cn.util";

const TECK_STACKS = [
  { icon: IconJavascript, name: "javascript" },
  { icon: IconTypescript, name: "typescript" },
  { icon: IconJava, name: "java" },
  { icon: IconDart, name: "dart" },
  { icon: IconPython, name: "python" },
  { icon: IconNextJs, name: "nextjs" },
  { icon: IconReact, name: "react" },
  { icon: IconApollo, name: "apollo-client" },
  { icon: IconRedux, name: "redux" },
  { icon: IconVite, name: "vite" },
  { icon: IconTailwindCSS, name: "tailwindcss" },
  { icon: IconPostCSS, name: "postcss" },
  { icon: IconFramerMotion, name: "framer-motion" },
  { icon: IconStorybook, name: "storybook" },
  { icon: IconThreeJs, name: "three.js" },
  { icon: IconReactQuery, name: "react-query" },
  { icon: IconAntD, name: "ant-design" },
  { icon: IconMaterialUI, name: "material-ui" },
  { icon: IconNestJs, name: "nestjs" },
  { icon: IconExpress, name: "express" },
  { icon: IconSpring, name: "spring" },
  { icon: IconDocker, name: "docker" },
  { icon: IconPostgreSQL, name: "postgresql" },
  { icon: IconMongoDB, name: "mongodb" },
  { icon: IconVitest, name: "vitest" },
  { icon: IconJest, name: "jest" },
  { icon: IconPlaywright, name: "playwright" },
  { icon: IconSelenium, name: "selenium" },
  { icon: IconGit, name: "git" },
  { icon: IconGraphQL, name: "graphql" },
  { icon: IconNx, name: "nx" },
  { icon: IconSonarQube, name: "sonarqube" },
  { icon: IconCircleCI, name: "circleci" },
  { icon: IconSentry, name: "sentry" },
  { icon: IconFigma, name: "figma" },
  { icon: IconVSCode, name: "vscode" },
  { icon: IconPostman, name: "postman" },
];

export function TechStacks() {
  const tagGroups = chunk(shuffle(TECK_STACKS), ceil(TECK_STACKS.length / 3));

  return (
    <div
      className={cn("relative flex flex-col gap-2", "after:fade-x after:absolute after:size-full")}
    >
      {tagGroups.map((tags, idx) => (
        <div key={idx} className="overflow-x-hidden">
          <div
            className={cn("w-fit animate-looping-tag whitespace-nowrap", {
              "[animation-direction:reverse]": idx % 2,
            })}
          >
            {[...tags, ...tags].map((tag, idx) => (
              <TechTag key={idx} className="mr-2" {...tag} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
