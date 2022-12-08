import React, { useEffect, useState } from "react";
import { ViewData } from "type/LikeData";
import { getCookie, setCookie } from "lib/utils";
import { UserIcon } from "@heroicons/react/24/outline";

export default function UVCount({ slug }: { slug: string }) {
  const [viewData, setViewData] = useState<ViewData | undefined>(undefined);
  const cookieName = `uv-${slug}`;

  useEffect(() => {
    // Get uv Data
    fetch(`/api/view/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setViewData(data);
      });
    const val = getCookie(cookieName);
    if (val.length === 0) {
      // not viewed
      fetch(`/api/view/${slug}`, { method: "POST" });
      setCookie(cookieName, true, 7);
    }
  }, [cookieName, slug]);

  return (
    <div className="mx-2 flex cursor-default items-center " title="unique view">
      <div>
        <UserIcon className="w-5 translate-y-[10%] items-center stroke-nord-3 dark:stroke-gray-300" />
      </div>
      <div className=" text-nord-3 dark:text-gray-100">
        {viewData === undefined ? "..." : viewData.num}
      </div>
    </div>
  );
}
