import React from "react";

export default function Main({ children }: { children: any }) {
  return (
    <div className="px-2 -mt-20 pt-20 min-h-[92vh] bg-gray-100 text-black dark:bg-black dark:text-white">
      <main className="mx-auto sm:max-w-5xl px-2">{children}</main>
    </div>
  );
}
