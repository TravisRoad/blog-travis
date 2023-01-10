import React from "react";

export default function Ezbg({
  children,
  content,
}: {
  children: any;
  content: string;
}) {
  return (
    <div className="relative break-inside-avoid bg-clip-text py-10">
      <div className="absolute bottom-1 right-1 scale-[10] text-xl">
        {content}
      </div>
      <div>{children}</div>
    </div>
  );
}
