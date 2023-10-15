import React from "react";
// import avatar from "public/dialog.webp";
import Image from "next/image";
import Link from "next/link";
import { EnvelopeIcon, RssIcon } from "@heroicons/react/24/outline";
import metadata from "data/metaData";

const avatar =
  "data:image/png;base64,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";

const Logo = ({ children, url }: { children: any; url: string }) => {
  return (
    <a
      className=" rounded-lg p-1 ring-nord-11 transition-all hover:bg-nord-6 hover:ring-4 dark:hover:bg-nord-1/80"
      href={url}
    >
      {children}
    </a>
  );
};

export default function SideBar() {
  return (
    <div className="mr-2 mt-5 flex-1 pt-4">
      <div className="mx-auto mb-1 h-[128px] w-[128px] cursor-pointer rounded-full p-1 transition duration-500 hover:scale-105 hover:ring">
        <Link href="/about">
          <Image
            src={avatar}
            width={128}
            height={128}
            className="overflow-hidden rounded-full"
            alt="Travis Road"
          />
        </Link>
      </div>
      {/* username */}
      <a
        className="flex items-center justify-center gap-1 text-lg font-bold "
        title="verified ($10/year for my website instead of $20/month)"
      >
        <span>Travis Road</span>
        <svg
          role="img"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="inline h-4 w-4 cursor-pointer fill-[#003abd] dark:fill-[#ebcc45]"
        >
          <path d="M23.334 11.96c-.713-.726-.872-1.829-.393-2.727.342-.64.366-1.401.064-2.062-.301-.66-.893-1.142-1.601-1.302-.991-.225-1.722-1.067-1.803-2.081-.059-.723-.451-1.378-1.062-1.77-.609-.393-1.367-.478-2.05-.229-.956.347-2.026.032-2.642-.776-.44-.576-1.124-.915-1.85-.915-.725 0-1.409.339-1.849.915-.613.809-1.683 1.124-2.639.777-.682-.248-1.44-.163-2.05.229-.61.392-1.003 1.047-1.061 1.77-.082 1.014-.812 1.857-1.803 2.081-.708.16-1.3.642-1.601 1.302s-.277 1.422.065 2.061c.479.897.32 2.001-.392 2.727-.509.517-.747 1.242-.644 1.96s.536 1.347 1.17 1.7c.888.495 1.352 1.51 1.144 2.505-.147.71.044 1.448.519 1.996.476.549 1.18.844 1.902.798 1.016-.063 1.953.54 2.317 1.489.259.678.82 1.195 1.517 1.399.695.204 1.447.072 2.031-.357.819-.603 1.936-.603 2.754 0 .584.43 1.336.562 2.031.357.697-.204 1.258-.722 1.518-1.399.363-.949 1.301-1.553 2.316-1.489.724.046 1.427-.249 1.902-.798.475-.548.667-1.286.519-1.996-.207-.995.256-2.01 1.145-2.505.633-.354 1.065-.982 1.169-1.7s-.135-1.443-.643-1.96zm-12.584 5.43l-4.5-4.364 1.857-1.857 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.642z"></path>
        </svg>
      </a>
      <div className="mx-auto mt-1 text-center font-[500] "> 👨‍🎓 学习中... </div>
      {/* about */}
      <div className="mt-2 px-1">
        <div className="my-5 mx-auto flex items-center justify-center gap-2 px-2">
          {/* github */}
          <Logo url="https://github.com/travisroad">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              className="h-6 w-6"
              width="32"
              height="32"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
              ></path>
            </svg>
          </Logo>
          {/* mail */}
          <Logo url={`mailto: ${metadata.email}`}>
            <EnvelopeIcon className="h-6 w-6" />
          </Logo>
          <Logo url={`/feed/feed.xml`}>
            <RssIcon className="h-6 w-6" />
          </Logo>
          <Logo url="https://twitter.com/LuXiuyuan138454">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              className="h-6 w-6"
              width="32"
              height="32"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"
              ></path>
            </svg>
          </Logo>
        </div>

        <p className="font-sans font-semibold">你好👋，我是 Travis</p>
        <p> 热爱游戏动漫和一切具有创造性的事物 </p>
        {/* <p>这是我写的一些项目:</p>
        <ul className="list-outside">
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
        </ul> */}
      </div>
    </div>
  );
}
