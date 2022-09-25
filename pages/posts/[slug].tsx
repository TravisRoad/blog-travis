import { useMDXComponent } from "next-contentlayer/hooks";
import WelcomeCard from "components/WelcomeCard";
import BlogLayout from "layout/BlogLayout";

import { allBlogs } from "contentlayer/generated";
import type { Blog } from "contentlayer/generated";
import React from "react";

export default function Post({ post }: { post: Blog }) {
  const Content = useMDXComponent(post.body.code);
  return (
    <BlogLayout post={post}>
      <Content components={{ WelcomeCard }} />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((p: Blog) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = allBlogs.find((p) => p.slug === params.slug);
  return {
    props: {
      post,
    },
  };
}
