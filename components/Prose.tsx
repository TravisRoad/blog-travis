export default function Prose({ children }: { children: any }) {
  return (
    <div className="mx-auto py-10 transition-colors duration-500 sm:mx-5 sm:rounded-lg md:max-w-4xl ">
      <div
        className={`prose prose-gray relative mx-auto max-w-4xl overscroll-contain px-2 prose-h1:-mt-2 prose-h2:my-5 prose-a:font-semibold prose-a:text-nord-10 prose-a:no-underline hover:prose-a:underline dark:prose-invert prose-a:dark:text-nord-7 sm:px-5 md:prose-lg md:px-6 md:prose-h2:my-5`}
      >
        {children}
      </div>
    </div>
  );
}
