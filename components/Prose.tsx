export default function Prose({ children }: { children: any }) {
  return (
    <div className="mx-auto mt-10 w-full transition-colors ">
      <div
        className={`prose prose-gray relative mx-auto max-w-[100vw] overscroll-contain px-4 text-justify prose-h1:-mt-2 prose-h2:my-5 prose-a:font-semibold prose-a:text-nord-10/90 prose-a:no-underline prose-a:hover:text-nord-10 hover:prose-a:underline dark:prose-invert prose-a:dark:text-nord-7/80 prose-a:hover:dark:text-nord-7 sm:prose-lg sm:max-w-none sm:px-0 sm:prose-h2:my-5`}
      >
        {children}
      </div>
    </div>
  );
}
