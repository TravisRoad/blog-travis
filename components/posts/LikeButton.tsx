import React, { useEffect, useState } from "react";
import { HandThumbUpIcon as ThumbUpIconSolid } from "@heroicons/react/24/solid";
import { HandThumbUpIcon as ThumbUpIconOutline } from "@heroicons/react/24/outline";
import { LikeData } from "type/LikeData";
import { getCookie, setCookie } from "lib/utils";

export default function LikeButton({ slug }: { slug: string }) {
  const [likeData, setLikeData] = useState<LikeData | undefined>(undefined);
  const [cookieExist, setCookieExist] = useState<boolean>(false);
  const cookieName = `like-${slug}`;

  useEffect(() => {
    fetch(`/api/like/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setLikeData(data);
      });
    const val = getCookie(cookieName);
    if (val.length > 0) setCookieExist(true);
  }, [cookieName, slug]);

  const likeThis = (slug: string) => {
    if (!cookieExist) {
      fetch(`/api/like/${slug}`, {
        method: "POST",
      });
      setCookie(cookieName, true, 30);
      setCookieExist(true);
      setLikeData({ num: (likeData === undefined ? 0 : likeData.num) + 1 });
    }
  };

  return (
    <div className="flex items-center ">
      <div
        className={`flex p-2 ${
          cookieExist
            ? ""
            : "rounded-full bg-transparent transition-colors duration-500 hover:bg-nord-3/5 dark:hover:bg-nord-4/5"
        }`}
      >
        <button
          onClick={() => likeThis(slug)}
          className={`${cookieExist ? "cursor-default" : ""}`}
        >
          {cookieExist ? (
            <ThumbUpIconSolid className="w-9 items-center fill-nord-11 dark:fill-nord-12 md:w-10 " />
          ) : (
            <ThumbUpIconOutline className="w-9 items-center stroke-nord-2/20 transition-all duration-200 hover:rotate-[-10deg] hover:scale-125 hover:stroke-nord-11 dark:stroke-nord-5/50 dark:hover:stroke-nord-11 md:w-10" />
          )}
        </button>
      </div>
      <div className="pr-2 font-mono text-xl font-semibold">
        {likeData === undefined ? "🈚" : likeData.num}
      </div>
    </div>
  );
}
