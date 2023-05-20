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
    <div className="group flex items-start gap-7 rounded-lg border-2 p-2 dark:border-nord-3">
      <Image
        src={iconUrl ? (iconUrl as string) : "/image/default.jpg"}
        alt={name}
        width={64}
        height={64}
        className="rounded-full"
      />
      <div className="flex flex-col">
        <Link href={url}>
          <a className=" bg-transparent text-nord-10 transition duration-150 group-hover:underline dark:text-nord-8">
            {name}
          </a>
        </Link>
        <small> {description} </small>
      </div>
    </div>
  );
}
