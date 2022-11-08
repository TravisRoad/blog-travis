import React from "react";
import { allBlogs } from "contentlayer/generated";
import { pick } from "contentlayer/client";
import { compareDesc, format, parseISO } from "date-fns";
import Main from "components/Main";
import PostCard from "components/PostCard";
import { useState, useEffect } from "react";
import { settings } from "data/metaData";

export default function PostsView({ posts }: { posts: Array<any> }) {
  const [page, setPage] = useState(0);
  const start = page * settings.postPerPage;
  let end = start + settings.postPerPage;
  end = end > posts.length ? -1 : end;
  return (
    <Main>
      <div className="mx-auto max-w-4xl flex-col justify-center">
        <div className=" mx-auto divide-y divide-nord-6 overflow-hidden rounded-lg p-5 dark:divide-nord-dark/80">
          {posts.slice(start, end).map((post: any) => (
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
        <div className=" flex flex-row items-center justify-center divide-x-2 divide-nord-light px-10 dark:divide-nord-0">
          <button
            onClick={() => {
              var currentPage = page - 1;
              if (currentPage < 0) currentPage = 0;
              setPage(currentPage);
            }}
            className=" rounded-l-lg bg-nord-6 pl-2 pr-1 dark:bg-nord-1"
          >
            {"<"}
          </button>
          <span className=" bg-nord-6 px-1 dark:bg-nord-1">
            {page + 1}/{Math.floor(posts.length / settings.postPerPage + 1)}
          </span>
          <button
            onClick={() => {
              if (end - start < settings.postPerPage) return;
              setPage(page + 1);
            }}
            className=" rounded-r-lg bg-nord-6 pr-2 pl-1 dark:bg-nord-1"
          >
            {">"}
          </button>
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
