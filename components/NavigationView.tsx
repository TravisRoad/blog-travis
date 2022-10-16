import Link from "next/link";
import React, { FC, useState } from "react";
// import { Menu } from "@headlessui/react";
import { useRouter } from "next/router";
import { ThemeButton } from "./ThemeButton";

const DesktopNavItem: FC<{ url: string; name: string }> = ({ url, name }) => {
  const router = useRouter();
  // const [isActive, setActive] = useState("false");
  // const isActive = router.asPath === url;
  const cwpClass =
    router.asPath === url // current working path className
      ? "text-nord-0 dark:text-nord-6 font-semibold"
      : "text-nord-3/80 dark:text-nord-4/80 font-normal";
  return (
    <Link href={url}>
      <a
        className="overflow-hidden block mx-1
        rounded-lg px-2"
      >
        {/* <div
          className={`${
            isActive
              ? "font-semibold text-gray-200 hover:text-gray-100 transition"
              : "font-normal text-gray-400 hover:text-gray-100 transition"
          }`}
        >
          {name}
        </div> */}
        <span
          className={`relative block before:translate-y-full before:content-[attr(data-content)] before:absolute hover:-translate-y-full ${cwpClass} text-xl before:text-nord-2 before:dark:text-nord-7 before:font-semibold transition-all duration-[350ms]`}
          data-content={name}
        >
          {name}
        </span>
      </a>
    </Link>
  );
};

export default function NavigationView({ isTop }: { isTop: Boolean }) {
  return (
    <div>
      <div className="flex items-center flex-row-reverse transition-all ">
        {/* Desktop menu */}
        <div
          className={`hidden items-center sm:flex font-sans overflow-hidden ${
            isTop ? "text-lg" : "text-sm"
          }`}
        >
          {/* <DesktopNavItem url="/" name="Home" />
          <DesktopNavItem url="/posts" name="Posts" />
          <DesktopNavItem url="/about" name="About" /> */}
          <DesktopNavItem url="/" name="主页" />
          <DesktopNavItem url="/posts" name="文章" />
          <DesktopNavItem url="/about" name="关于" />
        </div>
        <div>
          <ThemeButton />
        </div>
      </div>
    </div>
  );
}
