import React from "react";
import { statistic } from "types/statistic";

function formatNumber(num: number) {
  return num.toString().replace(/\d+/, (n) => {
    return n.replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
  });
}

function DataItem({ title, data }: { title: string; data: string }) {
  return (
    <li className="relative list-item justify-between">
      <span className="block w-[80%] overflow-hidden text-ellipsis">
        {title}
      </span>
      <span className=" absolute right-0 top-[0.1rem] rounded-full bg-nord-9 px-2 font-mono text-[0.78rem] text-nord-6 dark:bg-nord-10">
        {data}
      </span>
    </li>
  );
}

function States({ statistic }: { statistic: statistic }) {
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
      <h2 className=" mx-auto my-2 max-w-3xl text-lg font-bold">总数统计</h2>
      <ul className=" mx-auto grid max-w-3xl list-disc grid-cols-2 gap-x-16 px-6 ">
        <DataItem
          title="文章数"
          data={formatNumber(statistic.postsNum).toString()}
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
      <h2 className="mx-auto my-2 max-w-3xl text-lg font-bold">每年统计</h2>
      <ul className=" mx-auto grid max-w-3xl list-disc grid-cols-2 gap-x-16 px-6 ">
        {list.map((item: { title: string; data: string }) => (
          <DataItem title={item.title} data={item.data} key={item.title} />
        ))}
      </ul>
      <h2 className="mx-auto my-2 max-w-3xl text-lg font-bold">外链统计</h2>
      <ul className=" mx-auto grid max-w-3xl list-disc grid-cols-2 gap-x-16 px-6 ">
        {externalLinks.map((item: [string, number]) => (
          <DataItem
            title={item[0]}
            data={item[1].toString()}
            key={item[0]}
          ></DataItem>
        ))}
      </ul>
    </>
  );
}

export default States;
