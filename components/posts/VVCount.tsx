import React, { useEffect, useState } from "react";
import type { ViewData } from "type/LikeData";
import { getCookie, setCookie } from "lib/utils";
import { EyeIcon } from "@heroicons/react/24/outline";

export default function VVCount({ slug }: { slug: string }) {
  const [viewData, setViewData] = useState<ViewData | undefined>(undefined);
  const cookieName = `vv-${slug}`;

  useEffect(() => {
    // Get vv Data
    fetch(`/api/vv/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setViewData(data);
      });
    const val = getCookie(cookieName);
    if (val.length === 0) {
      // not viewed
      fetch(`/api/vv/${slug}`, { method: "POST" });
      setCookie(cookieName, true, 0, "/", 30); // 30 seconds
    }
  }, [cookieName, slug]);

  return (
    <div className="mx-2 flex cursor-default items-center " title="unique view">
      <div>
        <EyeIcon className="w-5 translate-y-[10%] items-center stroke-nord-3 dark:stroke-gray-300" />
      </div>
      <div className=" text-nord-3 dark:text-gray-100">
        {viewData === undefined ? "🈚" : viewData.num}
      </div>
    </div>
  );
}
