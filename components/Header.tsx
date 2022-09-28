import React from "react";
import Link from "next/link";
import NavigationView from "./NavigationView";

function Logo() {
  return (
    <div className="">
      <Link href="/">
        <a>
          <span className="text-white font-bold font-sans tracking-tighter">
            Travis
          </span>
          <sup className="text-yellow-200 font-normal font-sans"> Blog </sup>
        </a>
      </Link>
    </div>
  );
}

export default function Header() {
  return (
    <header className="sticky col-start-1 backdrop-blur sm:backdrop-blur-sm top-0 z-50 w-full bg-neutral-900/80 text-gray-400 print:hidden border-b-2 border-gray-600/10">
      <div className="px-5 py-2 space-x-8 mx-auto text-xl flex flex-row items-center justify-between">
        <Logo />
        <NavigationView />
      </div>
    </header>
  );
}
