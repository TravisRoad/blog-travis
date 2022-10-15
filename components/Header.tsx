import React from "react";
import Link from "next/link";
import NavigationView from "./NavigationView";

function Logo({ hidden }: { hidden: Boolean }) {
  return (
    <div className="">
      <Link href="/">
        <a>
          <span
            className={`text-white font-bold font-sans tracking-tighter transition-all duration-500 ${
              hidden ? "text-base" : "text-xl"
            }`}
          >
            Travis
          </span>
          <sup
            className={`text-nord-13 font-normal font-sans transition-all overflow-hidden inline duration-500 ${
              hidden ? "text-[0.55rem]" : "text-[0.8rem]"
            }`}
          >
            {" "}
            Blog{" "}
          </sup>
        </a>
      </Link>
    </div>
  );
}

export default function Header({ isTop }: { isTop: Boolean }) {
  console.log(isTop);
  return (
    <header className="sticky col-start-1 sm:backdrop-blur top-0 z-50 w-full dark:sm:bg-nord-dark/90 sm:bg-nord-light/90 text-gray-400 print:hidden transition-all duration-500">
      <div
        className={`px-4 space-x-8 sm:text-xl text-base flex flex-row items-center justify-between transition-all ${
          isTop ? "py-2" : "py-0"
        }`}
      >
        <Logo hidden={!isTop} />
        <NavigationView />
      </div>
    </header>
  );
}
