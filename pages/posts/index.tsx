import React from "react";
import { allBlogs } from "contentlayer/generated";
import { pick } from "contentlayer/client";
import { compareDesc, format, parseISO } from "date-fns";
import Main from "components/Main";
import PostCard from "components/PostCard";

export default function PostsView({ posts }: { posts: any }) {
  return (
    <Main>
      <div className="py-10">
        <div className="dark:bg-neutral-900 rounded-lg p-5 mx-auto max-w-3xl divide-y divide-black/10 overflow-hidden dark:divide-white/10">
          {posts.map((post: any) => (
            <PostCard
              key={post.title}
              title={post.title}
              url={`/posts/${post.slug}`}
              date={format(parseISO(post.publishDate), "yyyy/LL/dd")}
              summary={post.summary}
              showSummary={true}
            />
          ))}
        </div>
      </div>
    </Main>
  );
}

export async function getStaticProps() {
  const posts = allBlogs
    .map((post) => pick(post, ["title", "slug", "summary", "publishDate"]))
    .sort((p1, p2) =>
      compareDesc(parseISO(p1.publishDate), parseISO(p2.publishDate))
    );
  return {
    props: { posts },
  };
}
