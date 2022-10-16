export default function Prose({ children }: { children: any }) {
  return (
    <div className="rounded-lg bg-white py-10 dark:bg-nord-0 sm:mx-auto sm:rounded-lg sm:shadow-lg sm:dark:shadow-sm md:max-w-6xl mb-5">
      <div className="prose prose-stone mx-auto overscroll-contain px-3 dark:prose-invert prose-a:no-underline hover:prose-a:underline prose-a:text-nord-11 md:prose-lg md:max-w-5xl prose-h1:-mt-2 prose-h2:sticky prose-h2:top-14 prose-h2:z-30 prose-h2:py-4 prose-h2:border-b md:prose-h2:border-none md:prose-h2:static">
        {children}
      </div>
    </div>
  );
}
