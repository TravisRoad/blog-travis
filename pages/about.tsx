import type { NextPage } from "next";
import WelcomeCard from "components/WelcomeCard";
import Main from "components/Main";
import { useMDXComponent } from "next-contentlayer/hooks";
import { About as about, allAbouts } from "contentlayer/generated";
import MDXComponents from "components/mdx/MDXComponents";

const About: NextPage = () => {
  const Content = useMDXComponent(allAbouts[0].body.code);

  return (
    <div>
      <Main>
        {/* <WelcomeCard /> */}
        <div className="mt-5 flex flex-col">
          <div className="prose prose-stone mx-auto text-lg dark:prose-invert sm:max-w-3xl sm:text-2xl">
            <Content components={MDXComponents}></Content>
          </div>
        </div>
      </Main>
    </div>
  );
};

export default About;
