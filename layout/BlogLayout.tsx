import LikeButton from "components/posts/LikeButton";
import Prose from "components/Prose";
import Seo from "components/Seo";
import type { Blog } from "contentlayer/generated";
import { allBlogs } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Head from "next/head";
import React, { PropsWithChildren } from "react";
import Comment from "components/Comment";
import Toc from "components/Toc";
import metadata from "data/metaData";
import SeriesBlock from "components/posts/SeriesBlock";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

export default function BlogLayout({
  children,
  post,
}: PropsWithChildren<{ post: Blog; prev: Blog; next: Blog }>) {
  const License = () => (
    <div className=" text-sm text-nord-3/50 dark:text-nord-6/50">
      © LICENSED UNDER{" "}
      <a
        className="text-nord-11/80"
        href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh"
      >
        CC BY-NC-SA 4.0
      </a>
    </div>
  );
  return (
    <div>
      <Seo
        description={post.summary as string}
        image={undefined}
        title={post.title}
        path={post.url}
        keywords={post.tags}
      />
      <Head>
        <title>{`${post.title} | ${metadata.title}`}</title>
        <meta name="description" content={post.summary} />
      </Head>
      <div className="-mt-10 min-h-[92vh] bg-nord-bgLight pb-10 dark:bg-nord-bgDark ">
        {/* <div className="-mt-20 min-h-[92vh] px-2 pt-20"> */}
        <article
          className=" mx-auto mt-5 grid max-w-[100vw] pb-5 sm:max-w-3xl sm:px-4"
          style={{ gridTemplateColumns: "auto 0px" }}
          data-clarity-region="article"
        >
          <Prose>
            <header>
              <h1 className="break-words text-center text-2xl sm:text-4xl md:text-start">
                {post.title}
              </h1>
              <div className="-mt-5 flex flex-col items-center justify-between sm:flex-row">
                {/* author and the date */}
                <div className="inline-flex items-center space-x-1 text-gray-400 dark:text-gray-500">
                  <span className="text-base">Travis</span>
                  <span className="text-base">
                    {format(parseISO(post.publishDate), "yyyy/LL/dd")}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="mr-1 text-base text-gray-400 dark:text-gray-500">
                    {post.readingTime.words} 字， 阅读需要&thinsp;
                    {Math.ceil(post.readingTime.minutes)}&thinsp;分钟
                  </div>
                  {/* {process.env.NODE_ENV !== "development" && (
                    <>
                      <UVCount slug={post.slug} />
                      <VVCount slug={post.slug} />
                    </>
                  )} */}
                </div>
              </div>
            </header>
            {post.series && (
              <SeriesBlock
                blogs={allBlogs
                  .filter((blog) => {
                    if (process.env.NODE_ENV === "development")
                      return true; // dev mode show draft
                    else return blog.draft !== true;
                  })
                  .filter((blog) => blog.series && blog.series === post.series)}
              />
            )}
            {post.showTOC && <Toc toc={post.toc}></Toc>}
            {children}
            <div className="py-4"></div>
            <License />
            {/* <div className="absolute bottom-0 right-0 mr-5">
              <LikeButton slug={post.slug} />
            </div> */}
            {false && post.series && post.readingTime.minutes > 8.0 && (
              <SeriesBlock
                blogs={allBlogs
                  .filter((blog) => {
                    if (process.env.NODE_ENV === "development")
                      return true; // dev mode show draft
                    else return blog.draft !== true;
                  })
                  .filter((blog) => blog.series && blog.series === post.series)}
              />
            )}
          </Prose>
          {/* return to top button */}
          {post.readingTime.words >= 500 && (
            <a
              href="#"
              id="btt_button"
              className="group sticky bottom-4 mr-4 mt-[calc(100vh+50px)] -mb-10 place-self-end whitespace-nowrap
            rounded-lg bg-nord-4 p-[0.65rem] text-nord-3 opacity-70 dark:bg-nord-2 dark:text-nord-6 md:-mr-10"
            >
              {/* https://www.freecodecamp.org/news/css-only-back-to-top-button/ */}
              <ArrowUpIcon className="h-8 w-8 md:group-hover:translate-y-2 md:group-hover:animate-bounce" />
            </a>
          )}
        </article>
        <Comment slug={`posts/${post.slug}`} reaction="1" />
      </div>
    </div>
  );
}
