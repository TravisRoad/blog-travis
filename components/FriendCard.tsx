import { Friend } from "data/friendLink";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FriendCard({
  url,
  description,
  name,
  iconUrl,
}: Friend) {
  return (
    <Link href={url} target="_blank">
      <a>
        <div className="group relative flex select-none items-start gap-7 overflow-hidden rounded-lg border-2 p-2 dark:border-nord-3">
          <Image
            src={iconUrl ? (iconUrl as string) : "/image/default.jpg"}
            alt={name}
            width={64}
            height={64}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <div className="bg-transparent text-nord-10 transition duration-150 dark:text-nord-8 md:group-hover:underline">
              {name}
            </div>
            <small> {description} </small>
          </div>
          <div className="absolute right-0 bottom-0 z-20 h-[2rem] w-24 translate-x-[1.75rem] -rotate-45 bg-nord-10 text-center opacity-75 ">
            <div className="translate-y-[4px] translate-x-[2px] text-nord-6">
              友链
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
