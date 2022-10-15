import React from "react";
import avatar from "public/profile.jpg";
import Image from "next/image";
import Link from "next/link";

export default function SideBar() {
  return (
    <div className="flex-1 mx-2 mt-5 p-2">
      <div className="cursor-pointer mx-auto h-[120px] w-[120px] transition-transform duration-500 hover:rotate-6 hover:scale-105 my-2">
        <Link href="/about">
          <Image
            src={avatar}
            className="rounded-full overflow-hidden"
            alt="Travis Road"
          />
        </Link>
      </div>
      {/* username */}
      <div className="font-bold text-lg text-center">Travis Road</div>
      {/* about */}
      <div className="mt-2 px-1">
        <p className="font-sans">你好👋，我是 Travis</p>
        <p>这是我写的一些项目:</p>
        <ul className="list-outside">
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>
        </ul>
      </div>
    </div>
  );
}
