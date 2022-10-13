import { useMDXComponent } from "next-contentlayer/hooks";
import BlogLayout from "layout/BlogLayout";
import MDXComponents from "components/mdx/MDXComponents";

import { allBlogs } from "contentlayer/generated";
import type { Blog } from "contentlayer/generated";
import React from "react";
import { compareDesc, parseISO } from "date-fns";

export default function Post({
  post,
}: // next,
// prev,
{
  post: Blog;
  // next: Blog;
  // prev: Blog;
}) {
  const Content = useMDXComponent(post.body.code);
  return (
    <BlogLayout post={post} prev={post} next={post}>
      <Content components={{ ...MDXComponents }} />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((p: Blog) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: any }) {
  // const posts = allBlogs.sort((p1, p2) =>
  //   compareDesc(parseISO(p1.publishDate), parseISO(p2.publishDate))
  // );
  const post = allBlogs.find((p) => p.slug === params.slug);
  // const prev = allBlogs.find((p) => p.slug === params.prev);
  return {
    props: {
      post,
      // next,
      // prev,
    },
  };
}
