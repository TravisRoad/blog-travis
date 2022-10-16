import React from "react";

export default function Main({ children }: { children: any }) {
  return (
    <div className="-mt-20 min-h-[92vh] bg-nord-light px-2 pt-20 text-nord-2 dark:bg-nord-dark dark:text-nord-6">
      <main className="mx-auto px-2 pb-5 sm:max-w-5xl">{children}</main>
    </div>
  );
}
