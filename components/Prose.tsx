export default function Prose({ children }: { children: any }) {
  return (
    <div className="mb-5 max-w-5xl rounded-lg bg-white py-10 dark:bg-nord-0 sm:mx-auto sm:rounded-lg sm:shadow-lg sm:dark:shadow-sm md:max-w-6xl">
      <div className="prose prose-stone mx-auto overscroll-contain px-3 prose-h1:-mt-2 prose-a:text-nord-11 prose-a:no-underline hover:prose-a:underline dark:prose-invert md:prose-lg md:max-w-5xl">
        {children}
      </div>
    </div>
  );
}
