import Link from "next/link";
import React from "react";

export default function MyLink({
  href,
  children,
  className,
}: {
  href: string;
  children: any;
  className?: string;
}) {
  return (
    <Link href={href}>
      <a
        className={className}
        target={href.startsWith("http") ? "_blank" : "_self"}
      >
        {children}
      </a>
    </Link>
  );
}
