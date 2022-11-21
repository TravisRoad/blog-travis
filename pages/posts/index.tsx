import React from "react";
import { allBlogs } from "contentlayer/generated";
import type { Blog } from "contentlayer/generated";
import { pick } from "contentlayer/client";
import { compareDesc, format, parseISO } from "date-fns";
import Main from "components/Main";
import PostCard from "components/PostCard";
import { useState, useEffect } from "react";
import { settings } from "data/metaData";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";

function PostBlock({ posts }: { posts: Array<any> }) {
  const [page, setPage] = useState(0);
  const start = page * settings.postPerPage;
  let end = start + settings.postPerPage;
  end = end > posts.length ? -1 : end;
  const totlePage = Math.floor(posts.length / settings.postPerPage + 1);
  return (
    <div className="mx-auto mt-10 max-w-5xl flex-col justify-center space-y-5">
      <div className=" divide-y divide-nord-5 divide-black/10 overflow-hidden rounded-lg border-2 border-nord-5 dark:divide-nord-dark/80 dark:divide-nord-2 dark:border-nord-2">
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
      <div className=" mx-auto flex flex-row items-center justify-between rounded-lg bg-nord-5 dark:divide-nord-0 dark:bg-nord-1/70">
        <button
          onClick={() => {
            var currentPage = page - 1;
            if (currentPage < 0) currentPage = 0;
            setPage(currentPage);
          }}
          className="my-1 ml-1 rounded-l-lg px-10 transition-colors duration-[300ms] hover:bg-nord-4 hover:dark:bg-nord-0"
        >
          <ArrowLeftIcon className="my-1 h-5 w-5 stroke-nord-2 dark:stroke-nord-4 " />
        </button>
        <span className="px-2">
          {page + 1} / {totlePage}
        </span>
        <button
          onClick={() => {
            if (end - start < settings.postPerPage) return;
            setPage(page + 1);
          }}
          className="my-1 mr-1 rounded-r-lg px-10 transition-colors duration-300 hover:bg-nord-4 hover:dark:bg-nord-0 "
        >
          <ArrowRightIcon className="my-1 h-5 w-5 stroke-nord-2 dark:stroke-nord-4 " />
        </button>
      </div>
    </div>
  );
}

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
              url={post.url}
              summary={post.summary}
              date={format(parseISO(post.publishDate), "yyyy/LL/dd")}
              showSummary={true}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-10 max-w-5xl flex-col justify-center space-y-5">
      {yearCata.map((year) => (
        <Cell year={year} posts={timeline[year]} key={year} />
      ))}
    </div>
  );
}

export default function PostsView({ posts }: { posts: Array<any> }) {
  return (
    <Main>
      {/* <PostBlock posts={posts} /> */}
      <PostTimeLine posts={posts} />
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
