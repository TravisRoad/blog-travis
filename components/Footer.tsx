import Link from "next/link";
import React from "react";

function MyLink({ url, name }: { url: string; name: string }) {
  return (
    <Link href={url}>
      <a className="transition text-white/50 hover:text-white/70 hover:font-semibold">
        {name}
      </a>
    </Link>
  );
}

const ICPnumber = () => {
  return (
    <a
      className="text-white/50 hover:underline hover:text-white/70 space-y-2 p-4"
      href="https://www.beianx.cn/search/lxythan2lxy.cn"
    >
      <span className="font-bold">备案号：</span>
      <span>{"京ICP备20006389号-1"}</span>
    </a>
  );
};

const CopyRight = () => {
  return (
    <div>
      <span>CopyRight</span>
    </div>
  );
};

export default function Footer() {
  return (
    <footer className="bg-neutral-900 mx-auto flex flex-col items-center justify-center px-2 w-full text-base">
      <div className="w-full max-w-2xl">
        <div className="mt-2 flex flex-col space-y-4 items-center">
          <MyLink url="/" name="Home" />
          <MyLink url="/about" name="About" />
          <MyLink url="/posts" name="Blogs" />
        </div>
      </div>
      <ICPnumber />
    </footer>
  );
}