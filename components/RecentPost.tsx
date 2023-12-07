import React from "react";
import PostCard, { FLoatingCard } from "./PostCard";
import { parseISO, format, compareDesc } from "date-fns";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { PartialBlog } from "types/content";

export default function RecentPost({
  recentBlogs,
  staredBlogs,
}: {
  recentBlogs: PartialBlog[];
  staredBlogs: PartialBlog[];
}) {
  return (
    <div className="mt-2 mb-2 px-0">
      <div className="py-4">
        <div className="pl-4 pb-1 text-base font-semibold opacity-80">star</div>
        <div className="mx-auto grid grid-cols-2 gap-4">
          {staredBlogs.map((blog: PartialBlog) => (
            <FLoatingCard
              key={blog.title}
              title={blog.title}
              url={`/posts/${blog.slug}`}
              summary={blog.summary}
              date={format(parseISO(blog.publishDate), "yyyy/LL/dd")}
            />
          ))}
        </div>
        <div className="py-2 pl-4 pb-1 text-base font-semibold opacity-80">
          recent
        </div>
        <div className="divide-y divide-black/10 overflow-hidden rounded-lg border-2 border-nord-4 dark:divide-nord-2 dark:border-nord-2">
          {recentBlogs.map((blog: PartialBlog) => (
            <PostCard
              key={blog.title}
              title={blog.title}
              url={`/posts/${blog.slug}`}
              summary={blog.summary}
              date={format(parseISO(blog.publishDate), "yyyy/LL/dd")}
            />
          ))}
          <Link href="/posts">
            <a className="transition-color flex min-h-[4rem] w-full flex-row items-center justify-between bg-white px-3 py-3 transition-all hover:bg-[#f7f7fe] dark:bg-nord-0 dark:hover:bg-nord-1">
              <span className="font-semibold text-nord-10"> read more</span>
              <ArrowUpRightIcon className="h-4 w-4 stroke-nord-10 stroke-[2px] dark:stroke-nord-7" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
