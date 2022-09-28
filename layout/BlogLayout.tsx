import Prose from "components/Prose";
import { Blog } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import React, { PropsWithChildren } from "react";

export default function BlogLayout({
  children,
  post,
}: PropsWithChildren<{ post: Blog }>) {
  return (
    <div>
      <div className="bg-gray-100 dark:bg-black pt-20 -mt-20">
        <article className="p-5 sm:pt-8">
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
          </Prose>
        </article>
      </div>
    </div>
  );
}
