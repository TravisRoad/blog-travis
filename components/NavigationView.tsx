import Link from "next/link";
import React, { FC, useState } from "react";
// import { Menu } from "@headlessui/react";
import { useRouter } from "next/router";
import { ThemeButton } from "./ThemeButton";
import { Menu } from "@headlessui/react";
import { Bars3Icon as MenuIcon } from "@heroicons/react/24/outline";

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
      <a className="mx-1 overflow-hidden rounded-lg ">
        {/* <div
          className={`${
            isActive
              ? "font-semibold text-gray-200 hover:text-gray-100 transition"
              : "font-normal text-gray-400 hover:text-gray-100 transition"
          }`}
        >
          {name}
        </div> */}
        <div
          className={` relative block items-center before:absolute before:translate-y-full before:content-[attr(data-content)] hover:-translate-y-full ${cwpClass} text-xl transition-all duration-[350ms] before:font-semibold before:text-nord-2 before:dark:text-nord-7`}
          data-content={name}
        >
          {name}
        </div>
      </a>
    </Link>
  );
};

const MobileNavItem: FC<{ url: string; name: string }> = ({ url, name }) => (
  <div className="overflow-hidden px-2 py-1 first:rounded-t-lg last:rounded-b-lg hover:bg-nord-4/30 dark:hover:bg-nord-1">
    <Menu.Item>
      <Link href={url}>
        <a className="flex items-center justify-center">
          <div>{name}</div>
        </a>
      </Link>
    </Menu.Item>
  </div>
);

export default function NavigationView({ isTop }: { isTop: Boolean }) {
  return (
    <div>
      <div className="flex flex-row-reverse items-center transition-all ">
        {/* Desktop menu */}
        <div
          className={`hidden items-center space-x-4 overflow-hidden font-sans sm:flex ${
            isTop ? "text-lg" : "text-sm"
          }`}
        >
          <DesktopNavItem url="/" name="主页" />
          <DesktopNavItem url="/posts" name="文章" />
          <DesktopNavItem url="/idea/1" name="想法" />
          <DesktopNavItem url="/about" name="关于" />
        </div>
        {/* mobile menu */}
        <div className="flex items-center justify-center space-x-4 sm:hidden">
          <Menu as="div">
            <Menu.Button className="rounded-lg p-1 transition-colors duration-500 hover:bg-nord-5 dark:hover:bg-nord-2">
              <MenuIcon className="h-6 w-6 stroke-nord-2 transition-colors dark:stroke-nord-5"></MenuIcon>
            </Menu.Button>
            <Menu.Items className="top-15 absolute right-4 flex min-w-[17vw] flex-col divide-y divide-nord-4 rounded-lg border border-nord-6 bg-white text-nord-3 dark:divide-nord-2 dark:border-nord-2 dark:bg-nord-0 dark:text-nord-6">
              <MobileNavItem url="/" name="主页" />
              <MobileNavItem url="/posts" name="文章" />
              <MobileNavItem url="/idea/1" name="想法" />
              <MobileNavItem url="/about" name="关于" />
            </Menu.Items>
          </Menu>
        </div>
        <ThemeButton />
      </div>
    </div>
  );
}
