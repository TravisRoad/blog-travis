import React from "react";
import { allBlogs } from "contentlayer/generated";
import type { Blog } from "contentlayer/generated";
import { pick } from "contentlayer/client";
import { compareDesc, format, parseISO } from "date-fns";
import Main from "components/Main";
import PostCard from "components/PostCard";
import Head from "next/head";

function PostTimeLine({ posts }: { posts: Array<any> }) {
  function yearDict(posts: Array<any>): { [key: string]: Array<any> } {
    var curYear = "0";
    const dict: { [key: string]: Array<any> } = {};
    posts.forEach((post) => {
      var year = parseISO(post.publishDate).getFullYear().toString();
      if (year !== curYear) {
        dict[year] = [];
        curYear = year;
      }
      dict[year].push(post);
    });
    return dict;
  }

  const timeline = yearDict(posts);
  const yearCata = Object.keys(timeline).sort(
    (a, b) => Number.parseInt(b) - Number.parseInt(a)
  );

  function Cell({ year, posts }: { year: string; posts: any[] }) {
    return (
      <div className="">
        <div className="my-1 pl-1 font-semibold">{year}</div>
        <div className=" divide-y divide-nord-5 divide-black/10 overflow-hidden rounded-lg border-2 border-nord-5 dark:divide-nord-dark/80 dark:divide-nord-2 dark:border-nord-2">
          {posts.map((post) => (
            <PostCard
              title={post.title}
              key={post.title}
              url={`/posts/${post.slug}`}
              summary={post.summary}
              date={format(parseISO(post.publishDate), "LL/dd")}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-10 max-w-3xl flex-col justify-center space-y-5">
      {yearCata.map((year) => (
        <Cell year={year} posts={timeline[year]} key={year} />
      ))}
    </div>
  );
}

export default function PostsView({ posts }: { posts: Array<any> }) {
  return (
    <Main>
      <Head>
        <title> 文章 </title>
      </Head>
      <PostTimeLine posts={posts} />
    </Main>
  );
}

export async function getStaticProps() {
  const posts = allBlogs
    .filter(
      (blog: Blog) => process.env.NODE_ENV === "development" || !blog.draft
    )
    .map((post) =>
      pick(post, ["title", "slug", "summary", "publishDate", "url"])
    )
    .sort((p1, p2) =>
      compareDesc(parseISO(p1.publishDate), parseISO(p2.publishDate))
    );
  return {
    props: { posts },
  };
}
