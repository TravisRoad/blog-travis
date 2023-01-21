import React from "react";
import { allBlogs } from "contentlayer/generated";
import type { Blog } from "contentlayer/generated";
import PostCard, { FLoatingCard } from "./PostCard";
import { parseISO, format, compareDesc } from "date-fns";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export default function RecentPost({
  recentBlogs,
  staredBlogs,
}: {
  recentBlogs: Blog[];
  staredBlogs: Blog[];
}) {
  return (
    <div className="mt-2 mb-2 px-0">
      <div className="py-4">
        <div className="pl-4 pb-1 text-base font-semibold opacity-80">star</div>
        <div className="mx-auto grid grid-cols-2 gap-x-4">
          {staredBlogs.map((blog: Blog) => (
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
          {recentBlogs.slice(0, 5).map((blog: Blog) => (
            <PostCard
              key={blog.title}
              title={blog.title}
              url={`/posts/${blog.slug}`}
              summary={blog.summary}
              date={format(parseISO(blog.publishDate), "yyyy/LL/dd")}
            />
          ))}
          <div className="transition-color rounded-none border-0 bg-white px-3 py-3 duration-200 first:rounded-t-lg last:rounded-b-lg hover:bg-[#f7f7fe] dark:bg-nord-0 dark:hover:bg-nord-1">
            <Link href="/posts">
              <a>
                <div className="flex flex-row items-center justify-between rounded-xl py-1 transition-all">
                  <span className="font-semibold text-nord-10"> read more</span>
                  <ArrowUpRightIcon className="h-4 w-4 stroke-nord-10 stroke-[2px] dark:stroke-nord-7" />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
