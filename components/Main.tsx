import React from "react";

export default function Main({ children }: { children: any }) {
  return (
    <div className="-mt-20 min-h-[92vh] bg-nord-bgLight px-2 pt-20 text-nord-2 dark:bg-nord-bgDark dark:text-nord-6">
      <main className=" mx-auto px-2 pb-5 sm:max-w-6xl">{children}</main>
    </div>
  );
}
