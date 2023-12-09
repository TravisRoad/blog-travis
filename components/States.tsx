import {
  allAbouts,
  allBlogs,
  allIdeas,
  allMovies,
} from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import React from "react";
import { ReadingTime } from "types/reading-time";
import { statistic } from "types/statistic";

function formatNumber(num: number) {
  return num.toString().replace(/\d+/, (n) => {
    return n.replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
  });
}

function DataItem({ title, data }: { title: string; data: string }) {
  return (
    <li className="relative list-item ">
      <span className="block w-[85%] overflow-hidden text-ellipsis">
        {title}
      </span>
      <span className=" absolute right-0 top-[0.123rem] rounded bg-nord-9 px-2 font-sans text-[0.88rem] text-nord-6 ">
        {data}
      </span>
    </li>
  );
}

function States() {
  const statistic: statistic = GetStatistic();
  const postsPerYearMap = new Map(Object.entries(statistic.postsPerYear));
  const wordsPerYearMap = new Map(Object.entries(statistic.wordsPerYear));
  const list: { title: string; data: string }[] = [];
  postsPerYearMap.forEach((v, k) => {
    const words = wordsPerYearMap.get(k);
    if (words === undefined) return;

    list.push({ title: k, data: `${v}/${formatNumber(words)}` });
  });

  var externalLinks = Array.from(Object.entries(statistic.externalLinks))
    .sort((a: [string, number], b: [string, number]) => {
      return b[1] - a[1];
    })
    .slice(0, 8);

  return (
    <>
      <h2 className="mx-auto my-2 max-w-3xl font-bold dark:font-normal">
        总数统计
      </h2>
      <ul className="mx-auto flex max-w-3xl list-disc flex-col px-6 sm:grid sm:grid-cols-2 sm:gap-x-16">
        <DataItem
          title="文章数"
          data={formatNumber(statistic.postsNum).toString()}
        />
        <DataItem
          title="想法数"
          data={formatNumber(statistic.ideaNum).toString()}
        />
        <DataItem
          title="外链数"
          data={formatNumber(statistic.externalLinksNum).toString()}
        />
        <DataItem
          title="写作年数"
          data={formatNumber(statistic.years).toString()}
        />
        <DataItem
          title="总字数"
          data={formatNumber(statistic.totalWordsNum).toString()}
        />
      </ul>
      <h2 className="mx-auto my-2 max-w-3xl font-bold dark:font-normal">
        每年统计
      </h2>
      <ul className=" mx-auto flex max-w-3xl list-disc flex-col px-6 sm:grid sm:grid-cols-2 sm:gap-x-16">
        {list.map((item: { title: string; data: string }) => (
          <DataItem title={item.title} data={item.data} key={item.title} />
        ))}
      </ul>
      <h2 className="mx-auto my-2 max-w-3xl font-bold dark:font-normal">
        外链统计
      </h2>
      <ul className=" mx-auto flex max-w-3xl list-disc flex-col px-6 sm:grid sm:grid-cols-2 sm:gap-x-16">
        {externalLinks.map((item: [string, number]) => (
          <DataItem
            title={item[0]}
            data={item[1].toString()}
            key={item[0]}
          ></DataItem>
        ))}
      </ul>
      <h2 className="mx-auto my-2 max-w-3xl font-bold dark:font-normal">
        访问量统计
      </h2>
      <ul className="mx-auto flex max-w-3xl list-disc flex-col px-6 sm:grid sm:grid-cols-2 sm:gap-x-16">
        <a
          className="list-item underline decoration-dashed underline-offset-2"
          href="https://umami.lxythan2lxy.cn/share/WH1nhwUn/blog.lxythan2lxy.cn"
        >
          umami 统计
        </a>
      </ul>
    </>
  );
}

const GetStatistic = (): statistic => {
  // total statistic
  var totalWordsNum = 0;
  var externalLinksMap = new Map<string, number>();
  var externalLinksNum = 0;
  var postsNum = 0; /* + allMovies.length */
  var ideaNum = 0;

  const computeExternalLinksNum = (link: string) => {
    var val = externalLinksMap.get(link);
    if (val === undefined) externalLinksMap.set(link, 1);
    else externalLinksMap.set(link, val + 1);
  };
  allBlogs.forEach((blog) => {
    if (blog.draft) return; // 跳过 draft
    postsNum += 1;
    const readingTime: ReadingTime = blog.readingTime;
    totalWordsNum += readingTime.words;

    externalLinksNum += blog.externalLink.raw.length;
    blog.externalLink.res.forEach(computeExternalLinksNum);
  });
  // 统计 Movie 和 About 页面的外链
  allMovies.forEach((movie) => {
    externalLinksNum += movie.externalLink.raw.length;
    movie.externalLink.res.forEach(computeExternalLinksNum);
  });
  allAbouts.forEach((about) => {
    externalLinksNum += about.externalLink.raw.length;
    about.externalLink.res.forEach(computeExternalLinksNum);
  });
  ideaNum = allIdeas.length;
  const externalLinks = Object.fromEntries(externalLinksMap);

  // statistic per year
  var wordsPerYearMap = new Map<string, number>();
  var postsPerYearMap = new Map<string, number>();
  allBlogs.forEach((blog) => {
    if (blog.draft) return;
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
    totalWordsNum,
    externalLinksNum,
    externalLinks,
    postsNum,
    ideaNum,
    wordsPerYear,
    postsPerYear,
    years,
  };
};

export default States;
