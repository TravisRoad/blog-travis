import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

export default function MyImage({
  src,
  alt,
  width,
  height,
  blurDataURL,
  border = true,
  rounded = true,
}: any) {
  return (
    <div className="not-prose mx-2 mt-4 mb-0 break-inside-avoid-page">
      <div
        className={`grid place-items-center overflow-hidden ${
          rounded && "rounded-lg "
        } ${
          border &&
          " border-[3px] border-gray-400 dark:border-2 dark:border-white/10"
        }`}
      >
        <Image
          src={`${src}`}
          width={width}
          height={height}
          alt={alt}
          blurDataURL={blurDataURL}
          placeholder="blur"
        />
      </div>
      {alt && (
        <div className="not-prose mb-4 text-center font-sans text-base font-semibold opacity-40">
          {alt}
        </div>
      )}
    </div>
  );
}
