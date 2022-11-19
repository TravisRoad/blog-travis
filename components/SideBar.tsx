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
      <div className="mx-auto h-[120px] w-[120px] cursor-pointer transition-transform duration-500 hover:rotate-6 hover:scale-105">
        <Link href="/about">
          <Image
            src={avatar}
            className="overflow-hidden rounded-full"
            alt="Travis Road"
          />
        </Link>
      </div>
      {/* username */}
      <div className="text-center text-lg font-bold">Travis Road</div>
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
