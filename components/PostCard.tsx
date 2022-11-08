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
    <div className="transition-color rounded-none border-0 bg-white px-3 py-3 duration-200 first:rounded-t-lg last:rounded-b-lg hover:bg-[#f7f7fe] dark:bg-nord-0 dark:hover:bg-nord-1">
      <Link href={url ? url : "/"}>
        <a>
          <div className="flex flex-row items-baseline justify-between rounded-xl transition-all">
            <p className="text-sm font-bold sm:text-lg">{title}</p>
            <div className="flex-shrink-0 pl-2 font-mono tracking-wide opacity-60">
              {date}
            </div>
          </div>
          {typeof showSummary !== undefined && (
            <p className="text-xs opacity-60 sm:text-base">{summary}</p>
          )}
        </a>
      </Link>
    </div>
  );
}
