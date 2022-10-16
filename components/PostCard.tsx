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
    <div className="bg-white px-3 py-3 transition-color duration-200 hover:bg-[#f7f7fe] dark:bg-nord-0 dark:hover:bg-nord-1 rounded-none first:rounded-t-lg last:rounded-b-lg border-0">
      <Link href={url ? url : "/"}>
        <a>
          <div className="flex flex-row justify-between items-baseline rounded-xl transition-all">
            <p className="font-bold text-xs sm:text-lg">{title}</p>
            <div className="flex-shrink-0 pl-2 font-mono tracking-wide opacity-60">
              {date}
            </div>
          </div>
          {typeof showSummary !== undefined && (
            <p className="opacity-60">{summary}</p>
          )}
        </a>
      </Link>
    </div>
  );
}
