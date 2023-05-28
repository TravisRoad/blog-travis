import React, { useEffect, useState } from "react";

interface InputProp {
  src: string;
  className?: string;
  iframeClassName?: string;
}

export default function IframeWithLoading({
  src,
  className = "",
  iframeClassName = "",
}: InputProp) {
  const [loading, setLoading] = useState(true);

  function handleIframeLoad() {
    setLoading(false);
  }

  return (
    <div className={`relative flex justify-center ${className} `}>
      {loading && (
        <div className="flex items-center justify-center">
          <div className="mr-3 h-12 w-12 animate-spin rounded-full border-t-4 border-b-4 border-gray-400"></div>
          <p className="font-medium text-gray-600">正在加载...</p>
        </div>
      )}
      <iframe
        src={src}
        className={`absolute ${iframeClassName} `}
        onLoad={handleIframeLoad}
      />
    </div>
  );
}
