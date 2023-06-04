import React from "react";
import type { Blog } from "contentlayer/generated";
import Link from "next/link";
import { parseISO, format } from "date-fns";

export default function SeriesBlock({ blogs }: { blogs: Blog[] }) {
  if (blogs.length === 0) return <></>;
  const BlogItem = ({ blog }: { blog: Blog }) => (
    <li>
      <div className="flex flex-row items-baseline justify-between sm:max-w-[60%] md:max-w-[50%] lg:max-w-[40%] ">
        <Link href={`/posts/${blog.slug}`}>
          <a className="z-30 overflow-x-hidden text-ellipsis whitespace-nowrap font-serif font-semibold decoration-nord-9/80 underline-offset-2 hover:underline dark:decoration-nord-10/50 dark:underline-offset-[3px]">
            {blog.title}
          </a>
        </Link>
        <span className="ml-2 font-mono text-sm text-nord-9/40">
          {format(parseISO(blog.publishDate), "yyyy/LL/dd")}
        </span>
      </div>
    </li>
  );
  return (
    <div className="not-prose relative mt-2 flex flex-col overflow-clip rounded-lg border-2 border-nord-10/50 bg-nord-10/20 p-2">
      <span className="absolute right-0 bottom-0 z-20 hidden w-32 translate-x-10 -translate-y-1 -rotate-45 select-none bg-[#bed5e2] text-center font-serif text-3xl font-bold text-nord-9 dark:bg-[#4b6373] sm:block">
        专栏
      </span>
      <div className=" z-30 font-serif font-bold sm:text-xl">
        {blogs[0].series}
      </div>
      <div className="absolute right-0 top-0 z-[5] -translate-y-[0.75rem] select-none whitespace-nowrap font-serif text-7xl font-bold text-nord-9/10 dark:text-nord-10/5 sm:-translate-y-[1.0rem] sm:text-8xl">
        {blogs[0].series}
      </div>
      <ol className="ml-8 list-decimal">
        {blogs.map((blog) => (
          <BlogItem blog={blog} key={blog.slug} />
        ))}
      </ol>
    </div>
  );
}
