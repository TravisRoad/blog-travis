import React from "react";
import Link from "next/link";
import NavigationView from "./NavigationView";
import metadata from "data/metaData";
import clsx from "clsx";
import { useRouter } from "next/router";

function Logo({ hidden }: { hidden: Boolean }) {
  return (
    <div className="">
      <Link href="/">
        <a>
          <span
            className={`font-sans text-2xl font-bold tracking-tighter text-nord-3 transition-all duration-500 dark:text-nord-6`}
          >
            {metadata.header.logo}
          </span>
          <sup
            className={`inline overflow-hidden font-sans text-base font-normal text-nord-11 transition-all duration-500 dark:text-nord-13`}
          >
            {metadata.header.sup}
          </sup>
        </a>
      </Link>
    </div>
  );
}

function LogoGradient() {
  return (
    <div className="">
      <Link href="/">
        <a>
          <span
            className={`bg-gradient-to-r from-nord-7 to-nord-10 bg-clip-text font-sans text-2xl font-bold tracking-tight text-transparent transition-all duration-500 dark:from-nord-10 dark:to-nord-7`}
          >
            {metadata.header.logo}
          </span>
          <sup
            className={` inline bg-gradient-to-r font-sans text-base font-normal text-nord-11 transition-all duration-500 dark:text-nord-13 `}
          >
            {metadata.header.sup}
          </sup>
        </a>
      </Link>
    </div>
  );
}

export default function Header({ isTop }: { isTop: Boolean }) {
  const router = useRouter();

  return (
    <header
      className={`sticky top-0 -translate-y-[15rem] -mb-[15rem] z-50 col-start-1 w-full bg-nord-headerLight text-gray-400 transition-all duration-500 dark:bg-nord-headerDark print:hidden pt-[15rem] border-b border-nord-4 dark:border-nord-0 ${!isTop && "shadow-sm shadow-nord-5 dark:shadow-none "
        }`}
    >
      <div
        className={clsx(
          `mx-auto flex flex-row items-center justify-between space-x-8 px-4 text-base transition-all duration-[1000] sm:text-xl`,
          {
            "h-[2.75rem]": isTop,
            "h-[2.5rem]": !isTop
          },
          {
            "max-w-3xl": !router.asPath.startsWith("/travel-story")
          }
        )}
      >
        {/* <Logo hidden={!isTop} /> */}
        <LogoGradient />
        <NavigationView isTop={isTop} />
      </div>
    </header >
  );
}
