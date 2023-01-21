import metadata from "data/metaData";
import Link from "next/link";
import React from "react";
import UVCount from "./posts/UVCount";
import VVCount from "./posts/VVCount";

function MyLink({ url, name }: { url: string; name: string }) {
  return (
    <Link href={url}>
      <a className="text-nord-3 transition hover:text-nord-dark dark:text-nord-4 dark:hover:text-white">
        <span className=" capitalize tracking-wider hover:underline">
          {name}
        </span>
      </a>
    </Link>
  );
}

const ICPnumber = () => {
  // const isChinaMainland: string | undefined = process.env.CHINA;
  const isChinaMainland: string | undefined = "china";
  if (isChinaMainland !== undefined)
    return (
      <a
        className="mx-auto space-y-2 p-2 text-nord-3 hover:text-nord-dark hover:underline dark:text-nord-4 dark:hover:text-white"
        href={metadata.ICP.url}
      >
        <span className="font-bold">备案号：</span>
        <span>{metadata.ICP.code}</span>
      </a>
    );
  else return <></>;
};

const CopyRight = () => {
  return (
    <div className="mx-auto p-2 text-nord-3 dark:text-nord-4">
      <span>
        © {metadata.time.start}-{metadata.time.end}{" "}
        <Link href="https://github.com/TravisRoad/blog-travis">
          <a className=" hover:underline "> {metadata.title} </a>
        </Link>
      </span>
    </div>
  );
};

export default function Footer() {
  return (
    <div className="">
      <svg
        viewBox="0 0 1920 250"
        xmlns="http://www.w3.org/2000/svg"
        className="z-0 w-full overflow-hidden bg-nord-bgLight dark:bg-nord-bgDark"
      >
        <path
          className="fill-nord-5/90 dark:fill-[#373d4c]"
          d="M1920 250H0V0s126.707 78.536 349.975 80.05c177.852 1.203 362.805-63.874 553.803-63.874 290.517 0 383.458 57.712 603.992 61.408 220.527 3.696 278.059-61.408 412.23-17.239"
        ></path>
        <path
          className="fill-nord-6 dark:fill-[#39404f]"
          d="M1920 144s-467.917 116.857-1027.243-17.294C369.986 1.322 0 45.578 0 45.578V250h1920V144z"
        ></path>
        <path
          className="translate-y-1 fill-[#fbfbfc] dark:fill-nord-1"
          d="M0 195.553s208.547-75.581 701.325-20.768c376.707 41.908 520.834-67.962 722.545-67.962 222.926 0 311.553 83.523 496.129 86.394V250H0v-54.447z"
        ></path>
      </svg>
      <footer className="z-10 mx-auto -mt-2 block w-full bg-[#fbfbfc] px-2 pb-4 text-sm text-nord-3 dark:bg-nord-1 dark:text-nord-4 sm:text-base">
        <div className="mx-auto flex flex-col-reverse items-center justify-center sm:grid sm:grid-cols-2 sm:gap-4">
          <div className="flex flex-col items-center">
            <div className="my-2 grid grid-cols-2 items-center gap-2">
              <div className="text-right first-letter:uppercase">spired by</div>
              <div>
                <Link href="https://www.whexy.com/posts/blog-diy">
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  <a className="font-semibold hover:underline">{"blog-1999"}</a>
                </Link>
              </div>
              <div className="text-right first-letter:uppercase">thanks to</div>
              <div>
                <Link href="https://nordtheme.com">
                  <a className="font-semibold hover:underline ">Nord theme </a>
                </Link>
              </div>
            </div>
            <CopyRight />
            <ICPnumber />
            <div className="flex">
              <UVCount slug="whole-site-uv" />
              {"|"}
              <VVCount slug="whole-site-uv" />
            </div>
          </div>
          <div className="w-full max-w-2xl">
            <div className="mt-2 mb-4 flex flex-col items-center space-y-4">
              <MyLink url="/" name="Home" />
              <MyLink url="/about" name="About" />
              <MyLink url="/idea" name="Ideas" />
              <MyLink url="/posts" name="Blogs" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
