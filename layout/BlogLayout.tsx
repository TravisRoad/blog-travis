import Prose from "components/Prose";
import { Blog } from "contentlayer/generated";
import React, { PropsWithChildren } from "react";

export default function BlogLayout({
  children,
  post,
}: PropsWithChildren<{ post: Blog }>) {
  return (
    <div>
      <div className="bg-gray-100 dark:bg-black">
        <article className="pb-5 sm:pt-10">
          <Prose>
            <h1 className="">{post.title}</h1>
            <div></div>
            {children}
          </Prose>
        </article>
      </div>
    </div>
  );
}
