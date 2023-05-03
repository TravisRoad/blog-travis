import React, { useEffect, useState } from "react";

interface InputProp {
  src: string;
  className: string;
  iframeClassName: string;
}

export default function IframeWithLoading({
  src,
  className,
  iframeClassName,
}: InputProp) {
  const [loading, setLoading] = useState(true);

  function handleIframeLoad() {
    setLoading(false);
  }

  return (
    <div
      className={`relative flex justify-center ${className} my-4 ${
        loading ? "border" : ""
      } rounded-lg dark:border-0`}
    >
      {loading && (
        <div className="flex items-center justify-center">
          <div className="mr-3 h-12 w-12 animate-spin rounded-full border-t-4 border-b-4 border-gray-400"></div>
          <p className="font-medium text-gray-600">正在加载...</p>
        </div>
      )}
      <iframe
        src={src}
        className={`absolute ${iframeClassName} rounded-lg border-4 border-nord-0 shadow-lg shadow-nord-3/50 outline-none dark:border-nord-2 dark:shadow-none`}
        onLoad={handleIframeLoad}
      />
    </div>
  );
}
