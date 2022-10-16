import Link from "next/link";
import React from "react";

function MyLink({ url, name }: { url: string; name: string }) {
  return (
    <Link href={url}>
      <a className="transition text-nord-3 dark:text-nord-4 hover:text-nord-dark dark:hover:text-white">
        <span className="tracking-wider hover:underline">{name}</span>
      </a>
    </Link>
  );
}

const ICPnumber = () => {
  return (
    <a
      className="text-nord-3 dark:text-nord-4 hover:underline dark:hover:text-white hover:text-nord-dark space-y-2 p-2 mx-auto"
      href="https://www.beianx.cn/search/lxythan2lxy.cn"
    >
      <span className="font-bold">备案号：</span>
      <span>{"京ICP备20006389号-1"}</span>
    </a>
  );
};

const CopyRight = () => {
  return (
    <div className="text-nord-3 dark:text-nord-4 p-2 mx-auto">
      <span>© 2022-2022 Travis Road</span>
    </div>
  );
};

export default function Footer() {
  return (
    <footer className="pb-10 text-nord-3 dark:text-nord-4 -mt-[1px] z-10 dark:bg-nord-1 bg-[#fbfbfc] mx-auto flex flex-col items-center justify-center px-2 w-full text-sm sm:text-base">
      <div className="w-full max-w-2xl">
        <div className="mt-2 mb-4 flex flex-col space-y-4 items-center">
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
