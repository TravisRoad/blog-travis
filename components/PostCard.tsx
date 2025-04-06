import Link from "next/link";

export default function PostCard({
  title,
  url,
  date,
  summary,
}: {
  title: string;
  url: string;
  summary: string | undefined;
  date: string;
}) {
  return (
    <Link href={url ? url : "/"}>
      <a className="transition-color flex items-center justify-between rounded-none border-0 bg-white px-2 py-3 duration-200 dark:bg-nord-0 md:px-2 md:hover:bg-nord-4/40 md:dark:hover:bg-nord-1">
        <div className="flex flex-col items-baseline justify-between rounded-xl transition-all">
          <p className="font-bold sm:text-lg">{title}</p>
          {<p className="text-sm opacity-60 sm:text-base">{summary}</p>}
        </div>
        <div className="flex-shrink-0 pl-2 font-mono text-sm font-[500] tracking-wide opacity-60 sm:text-base">
          {date}
        </div>
      </a>
    </Link>
  );
}

export function FLoatingCard({
  title,
  url,
  date,
  summary,
}: {
  title: string;
  url: string;
  summary: string | undefined;
  date: string;
}) {
  return (
    <Link href={url ? url : "/404"}>
      <a className=" rounded-lg bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500 p-[0.12rem] shadow-md shadow-red-500/30 transition duration-300 ease-linear hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/40 dark:from-pink-700 dark:via-red-600 dark:to-yellow-600 dark:hover:shadow-xl dark:hover:shadow-red-500/30 sm:p-[0.20rem] ">
        <div className=" flex h-full w-full flex-col justify-between rounded-md bg-white px-4 py-4 dark:bg-nord-0">
          <div className="text-lg font-bold">{title}</div>
          {summary && (
            <div className=" text-ellipsis text-sm font-[500] tracking-wide opacity-60 sm:text-base ">
              {summary}
            </div>
          )}
        </div>
      </a>
    </Link>
  );
}
