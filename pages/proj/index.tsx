import Main from "components/Main";
import MDXComponents from "components/mdx/MDXComponents";
import { allProjPages } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import React from "react";

export default function Proj() {
  const Content = useMDXComponent(allProjPages[0].body.code);
  return (
    <Main>
      <h1 className="sr-only" id="forSearchEngine">
        Proj | 项目
      </h1>
      <div className="prose prose-stone mx-auto flex w-full flex-col prose-h2:text-lg prose-a:text-nord-9 prose-a:no-underline hover:prose-a:underline dark:prose-invert sm:max-w-3xl ">
        <Content components={MDXComponents} />
      </div>
    </Main>
  );
}
