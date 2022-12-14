export default function Prose({ children }: { children: any }) {
  return (
    // <div className="mx-auto rounded-lg py-10 transition-colors duration-500 sm:mx-5 sm:rounded-lg sm:shadow-lg sm:dark:shadow-sm md:max-w-6xl md:bg-white/80 md:dark:bg-nord-0/80">
    <div className="mx-auto py-10 transition-colors duration-500 sm:mx-5 sm:rounded-lg md:max-w-4xl ">
      <div className="prose prose-stone relative mx-auto max-w-4xl overscroll-contain px-2 prose-h1:-mt-2 prose-h2:my-5 prose-a:text-nord-11 prose-a:no-underline hover:prose-a:underline dark:prose-invert sm:px-5 md:prose-lg md:px-6 md:prose-h2:my-5">
        {children}
      </div>
    </div>
  );
}
