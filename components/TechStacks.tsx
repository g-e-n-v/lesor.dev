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

export function TechStacks() {
  return (
    <div className={cn("grid grid-cols-1 gap-4", "lg:grid-cols-[max-content_1fr] lg:gap-y-8")}>
      <div className="whitespace-nowrap align-top leading-6">Programming Languages</div>
      <div className="flex flex-wrap gap-x-2 gap-y-3">
        <TechTag icon={IconJavascript} name="javascript" />
        <TechTag icon={IconTypescript} name="typescript" />
        <TechTag icon={IconJava} name="java" />
        <TechTag icon={IconDart} name="dart" />
        <TechTag icon={IconPython} name="python" />
      </div>

      <div className="whitespace-nowrap align-top leading-6">Front-end</div>
      <div className="flex flex-wrap gap-x-2 gap-y-3">
        <TechTag icon={IconNextJs} name="nextjs" />
        <TechTag icon={IconReact} name="react" />
        <TechTag icon={IconApollo} name="apollo-client" />
        <TechTag icon={IconRedux} name="redux" />
        <TechTag icon={IconVite} name="vite" />
        <TechTag icon={IconTailwindCSS} name="tailwindcss" />
        <TechTag icon={IconPostCSS} name="postcss" />
        <TechTag icon={IconFramerMotion} name="framer-motion" />
        <TechTag icon={IconStorybook} name="storybook" />
        <TechTag icon={IconThreeJs} name="three.js" />
        <TechTag icon={IconReactQuery} name="react-query" />
        <TechTag icon={IconAntD} name="ant-design" />
        <TechTag icon={IconMaterialUI} name="material-ui" />
      </div>

      <div className="whitespace-nowrap align-top leading-6">Back-end</div>
      <div className="flex flex-wrap gap-x-2 gap-y-3">
        <TechTag icon={IconNestJs} name="nestjs" />
        <TechTag icon={IconExpress} name="express" />
        <TechTag icon={IconSpring} name="spring" />
        <TechTag icon={IconDocker} name="docker" />
      </div>

      <div className="whitespace-nowrap align-top leading-6">Database</div>
      <div className="flex flex-wrap gap-x-2 gap-y-3">
        <TechTag icon={IconPostgreSQL} name="postgresql" />
        <TechTag icon={IconMongoDB} name="mongodb" />
      </div>

      <div className="whitespace-nowrap align-top leading-6">Testing</div>
      <div className="flex flex-wrap gap-x-2 gap-y-3">
        <TechTag icon={IconVitest} name="vitest" />
        <TechTag icon={IconJest} name="jest" />
        <TechTag icon={IconPlaywright} name="playwright" />
        <TechTag icon={IconSelenium} name="selenium" />
      </div>

      <div className="whitespace-nowrap align-top leading-6">Others</div>
      <div className="flex flex-wrap gap-x-2 gap-y-3">
        <TechTag icon={IconGit} name="git" />
        <TechTag icon={IconGraphQL} name="graphql" />
        <TechTag icon={IconNx} name="nx" />
        <TechTag icon={IconSonarQube} name="sonarqube" />
        <TechTag icon={IconCircleCI} name="circleci" />
        <TechTag icon={IconSentry} name="sentry" />
        <TechTag icon={IconFigma} name="figma" />
        <TechTag icon={IconVSCode} name="vscode" />
        <TechTag icon={IconPostman} name="postman" />
      </div>
    </div>
  );
}
