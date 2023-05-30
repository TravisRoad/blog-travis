import { useMDXComponent } from "next-contentlayer/hooks";
import MDXComponents from "components/mdx/MDXComponents";
import { allProjs } from "contentlayer/generated";
import type { Proj } from "contentlayer/generated";
import Main from "components/Main";
import Giscus from "@giscus/react";
import Head from "next/head";

export default function Proj({ proj }: { proj: Proj }) {
  const Content = useMDXComponent(proj.body.code);

  return (
    <Main>
      <Head>
        <title> {proj.slug} </title>
      </Head>
      <div className="prose prose-stone mx-auto flex w-full flex-col prose-h2:text-lg prose-a:text-nord-9 prose-a:no-underline hover:prose-a:underline dark:prose-invert sm:max-w-3xl ">
        <Content components={MDXComponents} />
      </div>
      <div className="mt-4" id="giscus">
        <Giscus
          repo="TravisRoad/blog-discuss"
          repoId="R_kgDOIkniCQ"
          category="Announcements"
          categoryId="DIC_kwDOIkniCc4CS8y1"
          mapping="specific"
          term={`posts/${proj.slug}`}
          strict="1" // strict title matching
          lang="zh-CN"
          loading="lazy"
          reactionsEnabled="1"
          emitMetadata="0"
        />
      </div>
    </Main>
  );
}

export async function getStaticPaths() {
  return {
    paths: allProjs.map((p: Proj) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: any }) {
  const proj = allProjs.find((p) => p.slug === params.slug);
  return {
    props: {
      proj,
    },
  };
}
