import Link from "next/link";
import React, { FC, Fragment, useState } from "react";
// import { Menu } from "@headlessui/react";
import { useRouter } from "next/router";
import { ThemeButton } from "./ThemeButton";
import { Menu, Transition } from "@headlessui/react";
import { pageRouter } from "data/metaData";
import { Bars3Icon as MenuIcon, XMarkIcon } from "@heroicons/react/24/outline";

function DesktopNavItem({
  url,
  name,
  pseudoContent = undefined,
}: {
  url: string;
  name: string;
  pseudoContent?: string;
}) {
  const router = useRouter();
  // const [isActive, setActive] = useState("false");
  // const isActive = router.asPath === url;
  const cwpClass =
    router.asPath === url // current working path className
      ? "text-nord-0 dark:text-nord-6 underline underline-offset-4 decoration-dashed font-semibold text-nord-3 pointer-none"
      : "text-nord-3/80 dark:text-nord-4/80 font-normal before:absolute before:translate-y-full before:content-[attr(data-content)] hover:-translate-y-full";
  const target = url.startsWith("http") ? "_blank" : "_self";

  return (
    <Link href={url}>
      <a className="pointer mx-1 overflow-hidden" target={target}>
        <div
          className={`relative block items-center decoration-nord-7 dark:decoration-nord-10 ${cwpClass} text-xl transition-all duration-[350ms] before:font-semibold before:text-nord-2 before:dark:text-nord-7`}
          data-content={name}
        >
          {name}
        </div>
      </a>
    </Link>
  );
}

const MobileNavItem: FC<{ url: string; name: string }> = ({ url, name }) => (
  <div className="overflow-hidden px-2 py-1">
    <Menu.Item>
      {({ close }) => (
        <Link href={url}>
          <a
            className="relative flex h-[3rem] w-full items-center justify-center text-2xl text-nord-0 dark:text-nord-4"
            onClick={close}
          >
            <div className="px-10">{name}</div>
          </a>
        </Link>
      )}
    </Menu.Item>
  </div>
);

export default function NavigationView({ isTop }: { isTop: Boolean }) {
  return (
    <div>
      <div className="flex flex-row-reverse items-center transition-all ">
        {/* Desktop menu */}
        <div
          className={`hidden items-center space-x-4 overflow-hidden font-sans sm:flex ${isTop ? "text-lg" : "text-sm"
            }`}
        >
          {pageRouter.map((nav, i) => (
            <DesktopNavItem url={nav.url} name={nav.name} key={i} />
          ))}
        </div>
        {/* mobile menu */}
        <div className="flex items-center justify-center space-x-4 sm:hidden">
          <Menu as="div">
            {({ open, close }) => (
              <>
                <Menu.Button
                  className="rounded-lg p-1 transition-colors duration-500 hover:bg-nord-5 dark:hover:bg-nord-2"
                  aria-label="menu"
                >
                  {open ? (
                    <XMarkIcon className="h-6 w-6 stroke-nord-2 dark:stroke-nord-5"></XMarkIcon>
                  ) : (
                    <MenuIcon className="h-6 w-6 stroke-nord-2 dark:stroke-nord-5"></MenuIcon>
                  )}
                </Menu.Button>
                <Transition
                  show={open}
                  enter="transition-opacity duration-200"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-150 ease-in-out"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Menu.Items as={Fragment} static>
                    <div
                      className=" fixed left-0 z-[1000] flex h-screen w-screen flex-col justify-center bg-gradient-to-b from-nord-bgLight to-nord-10 pt-10 dark:from-nord-bgDark dark:to-nord-9"
                      onClick={close}
                    >
                      <div className="-translate-y-[5rem] font-bold">
                        {pageRouter.map((nav, i) => (
                          <MobileNavItem
                            url={nav.url}
                            name={nav.name}
                            key={i}
                          />
                        ))}
                      </div>
                    </div>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        </div>
        <ThemeButton />
      </div>
    </div>
  );
}
