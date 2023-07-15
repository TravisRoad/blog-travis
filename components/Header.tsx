import React from "react";
import Link from "next/link";
import NavigationView from "./NavigationView";
import metadata from "data/metaData";

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
  return (
    <header
      className={` sticky top-0 z-50 col-start-1 w-full bg-nord-headerLight text-gray-400 transition-all duration-500 dark:bg-nord-headerDark print:hidden ${
        !isTop && "shadow-sm shadow-nord-5 dark:shadow-none "
      }`}
    >
      <div
        className={`mx-auto flex max-w-5xl flex-row items-center justify-between space-x-8 px-4 text-base transition-all duration-300 sm:text-xl lg:px-0 ${
          isTop ? "h-[2.75rem]" : "h-[2.5rem] "
        }`}
      >
        {/* <Logo hidden={!isTop} /> */}
        <LogoGradient />
        <NavigationView isTop={isTop} />
      </div>
    </header>
  );
}
