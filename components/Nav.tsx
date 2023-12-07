import Link from "next/link";
import React from "react";

export default function Nav({
  pages,
  current,
  className = "",
}: {
  pages: string[];
  current: string;
  className: string;
}) {
  function NavLink({ href, content }: any) {
    return (
      <Link href={`/idea/${href}`}>
        <button
          className={` ${
            content === current ? "bg-nord-10/50" : "bg-nord-10/20"
          } border-b border-b-nord-3/20 py-1 px-2 shadow-lg first:rounded-l-lg last:rounded-r-lg hover:bg-nord-10/50 dark:hover:bg-nord-10/80`}
        >
          {content}
        </button>
      </Link>
    );
  }

  // if (pages.length >= 5) {
  //   pages = [...pages.slice(0, 3), "...", ...pages.slice(-2)];
  // }

  const lz = [
    ["1", "first", "<<"],
    ...pages.map((page, i) => {
      if (page === "...") {
        return [i + 1, i + 1, page];
      }
      return [page, page, page];
    }),
    [pages[pages.length - 1], "last", ">>"],
  ];

  return (
    <div className={`${className} divide-x-2 font-mono dark:divide-x-0 `}>
      {lz.map(([href, key, content]) => (
        <NavLink href={href} key={key} content={content} />
      ))}
    </div>
  );
}
