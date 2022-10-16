import metadata from "data/metaData";
import Link from "next/link";
import React from "react";

function MyLink({ url, name }: { url: string; name: string }) {
  return (
    <Link href={url}>
      <a className="text-nord-3 transition hover:text-nord-dark dark:text-nord-4 dark:hover:text-white">
        <span className="tracking-wider hover:underline">{name}</span>
      </a>
    </Link>
  );
}

const ICPnumber = () => {
  return (
    <a
      className="mx-auto space-y-2 p-2 text-nord-3 hover:text-nord-dark hover:underline dark:text-nord-4 dark:hover:text-white"
      href={metadata.ICP.url}
    >
      <span className="font-bold">备案号：</span>
      <span>{metadata.ICP.code}</span>
    </a>
  );
};

const CopyRight = () => {
  return (
    <div className="mx-auto p-2 text-nord-3 dark:text-nord-4">
      <span>
        © {metadata.time.start}-{metadata.time.end} {metadata.title}
      </span>
    </div>
  );
};

export default function Footer() {
  return (
    <footer className="z-10 mx-auto -mt-[1px] flex w-full flex-col items-center justify-center bg-[#fbfbfc] px-2 pb-10 text-sm text-nord-3 dark:bg-nord-1 dark:text-nord-4 sm:text-base">
      <div className="w-full max-w-2xl">
        <div className="mt-2 mb-4 flex flex-col items-center space-y-4">
          <MyLink url="/" name="Home" />
          <MyLink url="/about" name="About" />
          <MyLink url="/posts" name="Blogs" />
        </div>
      </div>
      <div className="flex flex-col">
        <CopyRight />
        <ICPnumber />
      </div>
    </footer>
  );
}
