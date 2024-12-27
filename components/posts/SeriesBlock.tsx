import React from "react";
import type { Blog } from "contentlayer/generated";
import Link from "next/link";
import { parseISO, format } from "date-fns";

export default function SeriesBlock({ blogs }: { blogs: Blog[] }) {
  if (blogs.length === 0) return <></>;
  const BlogItem = ({ blog }: { blog: Blog }) => (
    <>
      <div className="flex w-full items-baseline justify-between sm:max-w-[60%] md:max-w-[50%] lg:max-w-[40%]">
        <Link href={`/posts/${blog.slug}`}>
          <a className="z-30 inline-block whitespace-nowrap font-bold decoration-nord-9/80 underline-offset-2 hover:underline dark:decoration-nord-10/50 dark:underline-offset-[3px]">
            {blog.title}
          </a>
        </Link>
        <span className="ml-2 hidden font-mono text-sm text-nord-9/80 sm:block">
          {format(parseISO(blog.publishDate), "yyyy/LL/dd")}
        </span>
      </div>
    </>
  );
  return (
    <div className="not-prose relative mt-4 flex flex-col overflow-hidden rounded-lg border-2 border-nord-10/50 bg-nord-10/20 p-2">
      <span className="absolute right-0 bottom-0 z-20 hidden w-32 translate-x-11 -translate-y-0.5 -rotate-45 select-none bg-[#bed5e2] text-center font-serif text-2xl font-bold text-nord-9 dark:bg-[#4b6373] sm:block">
        专栏
      </span>
      {/* <div className=" z-30 font-serif font-bold sm:text-xl">
        {blogs[0].series}
      </div> */}
      <div className="absolute right-0 top-0 z-[5] -translate-y-[0.5rem] select-none whitespace-nowrap font-serif text-6xl font-bold text-nord-9/20 dark:text-nord-10/[0.15] sm:-translate-y-[1.0rem] sm:text-8xl">
        {blogs[0].series}
      </div>
      <ul className="font-serif">
        {blogs.map((blog) => (
          <li
            key={blog.slug}
            id="series-list"
            className="relative ml-[1rem] list-item"
          >
            <BlogItem blog={blog} />
          </li>
        ))}
      </ul>
    </div>
  );
}
