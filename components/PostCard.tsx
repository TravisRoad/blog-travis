import Link from "next/link";

export default function PostCard({
  title,
  url,
  date,
  summary,
  showSummary = false,
}: {
  title: string;
  url: string;
  summary: string | undefined;
  date: string;
  showSummary: boolean;
}) {
  return (
    <div className="transition-color rounded-none border-0 bg-white px-2 py-3 duration-200 first:rounded-t-lg last:rounded-b-lg hover:bg-[#f7f7fe] dark:bg-nord-0 dark:hover:bg-nord-1">
      <Link href={url ? url : "/"}>
        <a className="flex items-center justify-between">
          <div className="flex flex-col items-baseline justify-between rounded-xl transition-all">
            <p className="text-sm font-bold sm:text-lg">{title}</p>
            {typeof showSummary !== undefined && (
              <p className="text-xs opacity-60 sm:text-base">{summary}</p>
            )}
          </div>
          <div className="flex-shrink-0 pl-2 font-mono text-sm tracking-wide opacity-60 sm:text-base">
            {date}
          </div>
        </a>
      </Link>
    </div>
  );
}
