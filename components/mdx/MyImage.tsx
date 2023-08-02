import Image from "next/image";

export default function MyImage({
  src,
  alt,
  width,
  height,
  blurDataURL,
  border = false,
  rounded = false,
}: any) {
  return (
    <div className="not-prose mx-2 mb-0 mt-4 break-inside-avoid-page">
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
  );
}

function LocalImage({
  src,
  alt,
  width,
  height,
  blurDataURL,
  border = true,
  rounded = true,
}: any) {
  return (
    <div
      className={`grid place-items-center overflow-hidden ${
        rounded && "rounded-lg "
      } ${border && " border-2 border-nord-10/20 dark:border-white/30"}`}
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
  );
}
function WebImage({
  src,
  alt,
  blurDataURL,
  border = true,
  rounded = true,
}: any) {
  return (
    <div
      className={`relative aspect-video place-items-center overflow-hidden ${
        rounded && "rounded-lg"
      } ${
        border &&
        " border-[3px] border-gray-400 dark:border-2 dark:border-white/10"
      } bg-nord-10/10`}
    >
      <Image
        src={`${src}`}
        // width={width}
        // height={height}
        objectFit="contain"
        layout="fill"
        alt={alt}
        blurDataURL={blurDataURL}
        placeholder="blur"
      />
    </div>
  );
}
