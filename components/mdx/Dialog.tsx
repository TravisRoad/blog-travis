import me from "public/profile.jpg";
import other from "public/pixel.png";
import Image from "next/image";

export function Dialog({
  reverse,
  children,
}: {
  reverse: boolean | undefined;
  children: any;
}): JSX.Element {
  return (
    <div
      className={` flex ${
        reverse ? "flex-row-reverse" : "flex-row"
      } my-2 items-center gap-x-1 sm:mx-2 sm:gap-x-6`}
    >
      <span className="h-12 w-12 ">
        <Image
          src={reverse ? me : other}
          alt="avatar"
          className={` overflow-hidden rounded-full ${
            !reverse && "scale-x-[-1]"
          }`}
        ></Image>
      </span>
      <div className="prose max-w-[75%] rounded-lg border-2 border-nord-10 bg-nord-5 py-1 px-2 text-sm text-nord-0 dark:bg-nord-0 dark:text-nord-4 sm:max-w-[62%] sm:px-4 sm:text-base">
        {children}
      </div>
    </div>
  );
}

export function DialogRight() {
  return <div>Dialog</div>;
}
