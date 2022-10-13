import Link from "next/link";
import React, { FC, useState } from "react";
// import { Menu } from "@headlessui/react";
import { useRouter } from "next/router";
import { ThemeButton } from "./ThemeButton";

const DesktopNavItem: FC<{ url: string; name: string }> = ({ url, name }) => {
  const router = useRouter();
  // const [isActive, setActive] = useState("false");
  const isActive = router.asPath === url;
  return (
    <Link href={url}>
      <a className="hover:ring-2 ring-red-600 mx-1 rounded-lg px-2 py-2 transition-all hover:bg-white/5">
        <div
          className={`${
            isActive
              ? "font-semibold text-gray-200 hover:text-gray-100 transition"
              : "font-normal text-gray-400 hover:text-gray-100 transition"
          }`}
        >
          {name}
        </div>
      </a>
    </Link>
  );
};

export default function NavigationView() {
  return (
    <div>
      <div className="flex items-center flex-row-reverse">
        {/* Desktop menu */}
        <div className="hidden items-center sm:flex font-sans">
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
