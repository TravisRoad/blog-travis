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
      <li key={h3.i} className="ml-5">
        <a href={`#${h3.slug}`} className="hover:underline">
          {h3.content}
        </a>
      </li>
    ));
    return (
      <li key={h2.i} className="ml-3">
        <a href={`#${h2.slug}`} className="hover:underline ">
          {h2.content}
        </a>
        {h2li}
      </li>
    );
  });

  return (
    <div className="not-prose relative mx-2 mt-4 rounded-lg border-4 pb-2 dark:border-nord-3 dark:text-nord-6/80">
      <div className="absolute top-0 left-0 flex items-center justify-center space-x-2 rounded-br-lg border-b-2 border-r-2 bg-nord-bgLight px-2 font-bold dark:border-nord-3 dark:bg-nord-bgDark">
        <QueueListIcon className="h-5 w-5 stroke-nord-12" />
        <span>目录</span>
      </div>
      <div className="pt-6 pb-4"></div>
      <ul className="list-inside list-[square]">{tocdom}</ul>
    </div>
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
