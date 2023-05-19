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
  function NavLink({ href, key, content }: any) {
    return (
      <Link href={`/idea/${href}`} key={key}>
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

  return (
    <div className={`${className} divide-x-2 font-mono dark:divide-nord-5/20`}>
      <NavLink href="1" key="first" content={"<<"} />
      {pages.map((page) => (
        <NavLink href={`${page}`} key={page} content={page} />
      ))}
      <NavLink href={pages[pages.length - 1]} key="last" content={">>"} />
    </div>
  );
}
