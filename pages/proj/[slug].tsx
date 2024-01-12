import { useMDXComponent } from "next-contentlayer/hooks";
import MDXComponents from "components/mdx/MDXComponents";
import { allProjs } from "contentlayer/generated";
import type { Proj } from "contentlayer/generated";
import Main from "components/Main";
import Comment from "components/Comment";
import Seo from "components/Seo";
import Head from "next/head";
import metadata from "data/metaData";

export default function Proj({ proj }: { proj: Proj }) {
  const Content = useMDXComponent(proj.body.code);

  return (
    <Main>
      <Seo
        title={proj.title}
        description={proj.summary}
        path={`/proj/${proj.slug}`}
      ></Seo>

      <div className="prose prose-stone mx-auto flex w-full flex-col pt-2 prose-h2:text-lg prose-a:text-nord-9 prose-a:no-underline hover:prose-a:underline dark:prose-invert sm:max-w-3xl ">
        <div className="flex items-center justify-center ">
          <h1 className="">{proj.title}</h1>
        </div>
        <Content components={MDXComponents} />
      </div>
      <div className="mt-8" id="giscus">
        <Comment slug={`posts/${proj.slug}`} reaction="1" />
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
