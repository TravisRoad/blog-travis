import React from "react";

export default function DeletedData({ data }: { data: string }) {
  return (
    <span>
      <span className="not-prose hidden bg-nord-0 text-nord-0 transition-colors duration-[130ms] ease-linear hover:text-nord-4 dark:bg-gray-600 dark:text-gray-600 dark:hover:text-nord-4 sm:inline">
        {data}
      </span>
      <del className="inline text-nord-2/20 dark:text-nord-3 sm:hidden">
        {data}
      </del>
    </span>
  );
}
