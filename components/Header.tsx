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
    <header className="sticky top-0 z-50 w-full bg-neutral-900 text-gray-400 print:hidden">
      <div className="px-5 py-2 space-x-8 mx-auto text-xl flex flex-row items-center justify-between">
        <Logo />
        <NavigationView />
      </div>
    </header>
  );
}
