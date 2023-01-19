import type { NextPage } from "next";
import Main from "components/Main";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allAbouts } from "contentlayer/generated";
import MDXComponents from "components/mdx/MDXComponents";
import { allBlogs } from ".contentlayer/generated";
import type { Blog } from "contentlayer/generated";
import type { ReadingTime } from "types/reading-time";
import { parseISO, format } from "date-fns";
import { statistic } from "types/statistic";
import States from "components/States";
import WelcomeCard from "components/WelcomeCard";

const About = (props: statistic) => {
  const Content = useMDXComponent(allAbouts[0].body.code);

  return (
    <div>
      <Main>
        <div className="mx-auto max-w-3xl">
          <WelcomeCard />
        </div>
        <div className="relative mt-8 inline-flex w-full items-center justify-center">
          {/* <hr className="my-4 h-1 max-w-3xl border-0 bg-nord-0 " /> */}
          <hr className=" mt-2 mb-0 h-1 w-[32rem] rounded border-0 bg-nord-3/50 " />
          <span className="absolute left-1/2 -translate-x-1/2 bg-nord-bgLight px-3 text-2xl font-medium text-gray-900 dark:bg-nord-bgDark dark:text-white">
            简介
          </span>
        </div>
        <div className=" flex flex-col">
          <div className="prose prose-stone mx-auto text-lg dark:prose-invert sm:max-w-3xl sm:text-2xl">
            <Content components={MDXComponents}></Content>
          </div>
        </div>
        <div className="relative mt-12 mb-4 inline-flex w-full items-center justify-center">
          {/* <hr className="my-4 h-1 max-w-3xl border-0 bg-nord-0 " /> */}
          <hr className=" mt-2 mb-0 h-1 w-[32rem] rounded border-0 bg-nord-3/50 " />
          <div className="absolute left-1/2 -translate-x-1/2 bg-nord-bgLight px-2 dark:bg-nord-bgDark ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 dark:stroke-nord-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
              />
            </svg>
          </div>
        </div>
        <States statistic={props} />
      </Main>
    </div>
  );
};

export default About;

export async function getStaticProps() {
  // total statistic
  var totalWordsNum = 0;
  var externalLinksMap = new Map<string, number>();
  var externalLinksNum = 0;
  var postsNum = allBlogs.length;
  allBlogs.forEach((blog) => {
    const readingTime: ReadingTime = blog.readingTime;
    totalWordsNum += readingTime.words;

    externalLinksNum += blog.externalLink.raw.length;
    blog.externalLink.res.forEach((link: string) => {
      var val = externalLinksMap.get(link);
      if (val === undefined) externalLinksMap.set(link, 1);
      else externalLinksMap.set(link, val + 1);
    });
  });
  const externalLinks = Object.fromEntries(externalLinksMap);

  // statistic per year
  var wordsPerYearMap = new Map<string, number>();
  var postsPerYearMap = new Map<string, number>();
  allBlogs.forEach((blog) => {
    const year = format(parseISO(blog.publishDate), "yyyy");
    const wordNum = blog.readingTime.words;

    var wordVal = wordsPerYearMap.get(year);
    if (wordVal === undefined) wordsPerYearMap.set(year, wordNum);
    else wordsPerYearMap.set(year, wordVal + wordNum);

    var postVal = postsPerYearMap.get(year);
    if (postVal === undefined) postsPerYearMap.set(year, 1);
    else postsPerYearMap.set(year, postVal + 1);
  });
  const wordsPerYear = Object.fromEntries(wordsPerYearMap);
  const postsPerYear = Object.fromEntries(postsPerYearMap);

  const years = wordsPerYearMap.size;

  return {
    props: {
      totalWordsNum,
      externalLinksNum,
      externalLinks,
      postsNum,
      wordsPerYear,
      postsPerYear,
      years,
    },
  };
}
