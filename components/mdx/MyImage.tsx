import Image from "next/image";
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

function extractDimensionsAndCleanPath(path: string): {
  dimensions: { width: number; height: number } | null;
  cleanedPath: string;
} {
  // 正则匹配 _{width}x{height} 并确保后缀为指定图片格式
  const match = path.match(/_(\d+)x(\d+)\.(jpg|jpeg|png|webp)$/i);

  if (match) {
    const width = parseInt(match[1], 10);
    const height = parseInt(match[2], 10);
    const ext = match[3]; // 文件扩展名

    // 去掉 _600x600 部分，保留其他部分
    const cleanedPath = path.replace(
      /_\d+x\d+\.(jpg|jpeg|png|webp)$/i,
      `.${ext}`
    );

    return {
      dimensions: { width, height },
      cleanedPath,
    };
  }

  // 如果没有匹配到尺寸，则直接返回原路径
  return {
    dimensions: null,
    cleanedPath: path,
  };
}

export default function MyImage({
  src,
  alt,
  width,
  height,
  blurDataURL,
  border = false,
  rounded = false,
}: any) {
  if (src.endsWith("svg")) {
    return (
      <Image
        src={`${src}`}
        width={width}
        height={height}
        alt={alt}
        blurDataURL={blurDataURL}
        placeholder="blur"
      />
    );
  }

  const transformPath = extractDimensionsAndCleanPath(src);
  if (transformPath.dimensions !== null) {
    width = transformPath.dimensions.width;
    height = transformPath.dimensions.height;
  }

  return (
    <PhotoProvider>
      <PhotoView src={src}>
        <div className="not-prose mx-2 mb-0 mt-4 break-inside-avoid-page ">
          {width && height ? (
            <LocalImage
              src={src}
              alt={alt}
              width={width}
              height={height}
              blurDataURL={blurDataURL}
              border={true}
              rounded={rounded}
            />
          ) : (
            <WebImage
              src={src}
              alt={alt}
              blurDataURL={blurDataURL}
              border={border}
              rounded={rounded}
            />
          )}
          {alt && (
            <div className="not-prose mb-4 text-center font-sans text-base font-semibold opacity-40">
              {alt}
            </div>
          )}
        </div>
      </PhotoView>
    </PhotoProvider>
  );
}

function LocalImage({
  src,
  alt,
  width,
  height,
  blurDataURL,
  border = false,
  rounded = true,
}: any) {
  return (
    <div
      className={`grid place-items-center overflow-hidden ${
        rounded && "rounded-lg "
      } ${border && " border-0 border-nord-10/20 dark:border-white/30"}`}
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        blurDataURL={blurDataURL}
        placeholder="blur"
      />
    </div>
  );
}
function WebImage({
  src,
  alt,
  blurDataURL,
  border = false,
  rounded = true,
}: any) {
  return (
    <div
      className={`relative aspect-video place-items-center ${
        rounded && "rounded-lg"
      }`}
    >
      <img
        src={src}
        alt={alt}
        className="relative w-80 shrink-0 cursor-pointer bg-white shadow-xl sm:w-[45rem]"
        draggable="false"
      />
    </div>
  );
}
