import React, { useState } from "react";

import {
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Admonition({
  defaultOpen = true,
  title,
  type = "warn",
  children,
}: {
  defaultOpen: boolean;
  title?: string;
  type: string;
  children: any;
}) {
  const [open, setOpen] = useState<boolean>(defaultOpen);

  const className =
    "absolute inline h-[100%] py-1.5 leading-none admonition-icon ";

  const icon = () => {
    switch (type) {
      case "warn":
        return <ExclamationTriangleIcon className={className} />;
      case "quote":
        return <Quote className={className} />;
      case "info":
        return <InformationCircleIcon className={className} />;
      default:
        return <ExclamationTriangleIcon className={className} />;
    }
  };

  const titleString = () => {
    if (title !== undefined) {
      return title;
    }

    switch (type) {
      case "warn":
        return "警告";
      case "quote":
        return "引用";
      case "info":
        return "信息";
      default:
        return "警告";
    }
  };

  return (
    <div className={`admonition border-l-2 ${open ? "open" : ""} ${type} mb-2`}>
      <div
        onClick={() => setOpen(!open)}
        className="admonition-title relative items-center bg-[rgba(255,145,0,0.1)] pl-2"
      >
        {icon()}
        {/* <ExclamationTriangleIcon className={className} />
        <Quote className={className} /> */}
        <div className="ml-6 inline"> {titleString()} </div>
        <ChevronRightIcon
          className={`absolute right-2 inline h-[100%] stroke-[4px] py-1.5 leading-none transition-transform duration-500 ${
            open ? "rotate-[90deg]" : ""
          }`}
        />
      </div>
      <div className="admonition-content pl-2">{children}</div>
    </div>
  );
}

function Quote({ className }: any) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <g>
        <path d="M18.686,6.513H0.001v16.35h10.628c-0.098,10.181-9.584,12.104-9.584,12.104s-0.05,0.341,0,6.521   c15.815-3.034,17.499-14.931,17.636-18.625h0.004v-0.102c0.021-0.632,0-1.028,0-1.028V6.513z" />
        <path d="M47.99,21.732V6.513H29.306v16.35h10.629c-0.098,10.181-9.584,12.104-9.584,12.104s-0.05,0.341,0,6.521   c15.815-3.034,17.499-14.931,17.636-18.625h0.004v-0.102C48.011,22.129,47.99,21.732,47.99,21.732z" />
      </g>
    </svg>
  );
}
