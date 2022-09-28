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
    <div className="bg-white px-3 py-3 transition-all hover:bg-gray-50 dark:bg-neutral-900 dark:hover:bg-neutral-800 rounded-none first:rounded-t-lg last:rounded-b-lg">
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
