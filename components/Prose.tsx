export default function Prose({ children }: { children: any }) {
  return (
    <div className="rounded-lg bg-white py-10 dark:bg-neutral-900 sm:mx-auto sm:rounded-lg sm:shadow-lg sm:dark:shadow-none md:max-w-4xl">
      <div className="prose prose-neutral mx-auto overscroll-contain px-3 dark:prose-invert prose-a:no-underline hover:prose-a:underline prose-a:text-red-700 dark:prose-a:text-red-300 md:prose-lg md:max-w-3xl prose-h1:-mt-2 prose-h2:sticky prose-h2:top-14 prose-h2:z-30 prose-h2:bg-white prose-h2:dark:bg-neutral-900 prose-h2:py-4 prose-h2:border-b prose-h2:border-gray-300 prose-h2:dark:border-gray-700 md:prose-h2:border-none md:prose-h2:static">
        {children}
      </div>
    </div>
  );
}
