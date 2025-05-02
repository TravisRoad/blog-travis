import { QueueListIcon } from "@heroicons/react/24/outline";

export interface TOC {
  content: string;
  slug: string;
  lvl: number;
  i: number;
  seen: number;
}

interface TREE {
  content: string;
  slug: string;
  son: Array<TREE>;
  i: number;
}

function genTree(toc: any): TREE {
  const root: TREE = {
    content: "",
    slug: "",
    son: [],
    i: 0,
  };
  var parent: TREE | null = null;
  toc.forEach((item: any) => {
    if (item.lvl === 2) {
      const h2: TREE = {
        content: item.content,
        slug: item.slug,
        son: [],
        i: item.i,
      };
      root.son.push(h2);
      parent = h2;
    } else if (item.lvl === 3) {
      const h3: TREE = {
        content: item.content,
        slug: item.slug,
        son: [],
        i: item.i,
      };
      if (parent === null) return root;
      parent.son.push(h3);
    }
  });
  return root;
}

export default function Toc(toc: any) {
  const root: TREE = genTree(toc.toc);

  const tocdom = root.son.map((h2) => {
    const h2li = h2.son.map((h3) => (
      <li key={h3.i} className="ml-4">
        <a href={`#${h3.slug}`} className="hover:underline">
          {h3.content}
        </a>
      </li>
    ));
    return (
      <li key={h2.i} className="ml-1 -space-y-[6px] sm:-space-y-1 ">
        <a href={`#${h2.slug}`} className="hover:underline ">
          {h2.content}
        </a>
        {h2li}
      </li>
    );
  });

  return (
    <details
      open={false}
      className="not-prose relative mt-4 rounded-lg border-4 py-2 pl-4 pr-8 dark:border-nord-3 dark:text-nord-6/80 dark:shadow-none md:border-none md:bg-nord-6 md:shadow-md md:dark:bg-nord-1 "
    >
      <summary className="flex cursor-pointer select-none items-center gap-x-1 md:justify-center">
        <QueueListIcon className="inline h-6 w-6 stroke-nord-10 dark:stroke-nord-8 " />
        <h2 className=" font-bold text-nord-10 dark:text-nord-8 ">目录</h2>
      </summary>
      <ul className=" list-inside list-disc -space-y-[6px] text-nord-0 dark:text-nord-6 sm:-space-y-1">
        {tocdom}
      </ul>
    </details>
  );
}

export function FloatingToc(toc: any) {
  const root: TREE = genTree(toc.toc);

  const tocdom = root.son.map((h2) => {
    const h2li = h2.son.map((h3) => (
      <li key={h3.i} className="my-0 ml-5 py-0 font-serif">
        <a href={`#${h3.slug}`} className="hover:underline">
          {h3.content}
        </a>
      </li>
    ));
    return (
      <li key={h2.i} className="my-0 ml-3 py-0 font-serif">
        <a href={`#${h2.slug}`} className="hover:underline ">
          {h2.content}
        </a>
        {h2li}
      </li>
    );
  });

  return (
    <div className="not-prose fixed top-16 mx-2 mt-4 ml-[860px] hidden w-[220px] rounded bg-nord-9/20 pt-2 pr-[24px] pb-2 shadow dark:border-nord-3 dark:bg-nord-5/10 dark:text-nord-6 dark:text-nord-6/80 xl:block">
      <h1 className="pl-4 pb-2 font-serif text-2xl uppercase"> Content </h1>
      <ul className="list-inside list-[square]">{tocdom}</ul>
    </div>
  );
}
