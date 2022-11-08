import Prose from "components/Prose";
import { Blog } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import React, { PropsWithChildren } from "react";

export default function BlogLayout({
  children,
  post,
  prev,
  next,
}: PropsWithChildren<{ post: Blog; prev: Blog; next: Blog }>) {
  return (
    <div>
      <div className="-mt-10 min-h-[92vh] bg-nord-bgLight px-2 pb-[2rem] pt-20 dark:bg-nord-bgDark">
        {/* <div className="-mt-20 min-h-[92vh] px-2 pt-20"> */}
        <article className="mx-auto mt-5 px-2 pb-5 sm:max-w-5xl ">
          <Prose>
            <h1 className="">{post.title}</h1>
            <div className="-mt-5 flex items-center justify-between">
              {/* author and the date */}
              <div className="inline-flex items-center space-x-1 dark:text-gray-500">
                <span className="text-base">Travis</span>
                <span className="text-base">
                  {format(parseISO(post.publishDate), "yyyy/LL/dd")}
                </span>
              </div>
              <div className="dark:text-gray-400">{post.readingTime.text}</div>
            </div>
            {children}
            <div className="text-sm text-nord-3/50 dark:text-nord-6/50">
              © LICENSED UNDER{" "}
              <a
                className="text-nord-11/80"
                href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh"
              >
                CC BY-NC-SA 4.0
              </a>
            </div>
          </Prose>
        </article>
        {/* <div className="flex justify-between">
          <div>{prev.slug}</div>
          <div>{next.slug}</div>
        </div> */}
      </div>
    </div>
  );
}
