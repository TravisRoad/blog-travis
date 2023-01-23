import React from "react";
import avatar from "public/profile.jpg";
import Image from "next/image";
import Link from "next/link";
import { EnvelopeIcon, RssIcon } from "@heroicons/react/24/outline";
import metadata from "data/metaData";

const Logo = ({ children, url }: { children: any; url: string }) => {
  return (
    <a
      className=" rounded-lg p-1 ring-nord-11 transition-all hover:bg-nord-6 hover:ring-2 dark:hover:bg-nord-1/80"
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
        {/* <Link href="/about" legacyBehavior> */}
        <Link href="/about">
          <Image
            src={avatar}
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
        <div className="my-5 mx-auto flex items-center justify-center gap-2 ">
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
