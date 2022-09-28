import React from "react";
import { allBlogs } from "contentlayer/generated";
import type { Blog } from "contentlayer/generated";
import PostCard from "./PostCard";
import { parseISO, format, compareDesc } from "date-fns";

export default function RecentPost() {
  const recentBlogs = allBlogs.sort((p1: Blog, p2: Blog) =>
    compareDesc(parseISO(p1.publishDate), parseISO(p2.publishDate))
  );
  const staredBlogs = recentBlogs.filter((blog: Blog) => blog.star);

  return (
    <div className="py-2">
      <div className="py-5">
        <div className="pl-4 pb-1 text-base font-semibold opacity-80">star</div>
        <div className="rounded-lg divide-y divide-black/10 overflow-hidden dark:divide-white/10">
          {staredBlogs.map((blog: Blog) => (
            <PostCard
              key={blog.title}
              title={blog.title}
              url={`/posts/${blog.slug}`}
              summary={blog.summary}
              date={format(parseISO(blog.publishDate), "yyyy/LL/dd")}
              showSummary={true}
            />
          ))}
        </div>
        <div className="py-2 pl-4 pb-1 text-base font-semibold opacity-80">
          recent
        </div>
        <div className="divide-y divide-black/10 overflow-hidden dark:divide-white/10">
          {recentBlogs.slice(0, 5).map((blog: Blog) => (
            <PostCard
              key={blog.title}
              title={blog.title}
              url={`/posts/${blog.slug}`}
              summary={blog.summary}
              date={format(parseISO(blog.publishDate), "yyyy/LL/dd")}
              showSummary={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
