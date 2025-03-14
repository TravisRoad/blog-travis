import React from "react";

export default function Main({ children }: { children: any }) {
  return (
    <div className=" mb-10 min-h-[92vh] bg-nord-bgLight px-4 text-nord-2 dark:bg-nord-bgDark dark:text-nord-6">
      <main className=" mx-auto pb-5 sm:max-w-3xl">{children}</main>
    </div>
  );
}
