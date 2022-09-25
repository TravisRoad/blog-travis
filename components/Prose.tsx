export default function Prose({ children }: { children: any }) {
  return (
    <div className="bg-white py-10 dark:bg-neutral-900 sm:mx-auto sm:rounded-lg sm:shadow-lg sm:dark:shadow-none md:max-w-4xl">
      <div className="prose prose-neutral mx-auto overscroll-contain px-3 dark:prose-invert prose-a:no-underline hover:prose-a:underline prose-a:text-red-700 dark:prose-a:text-red-300 md:prose-lg md:max-w-3xl">
        {children}
      </div>
    </div>
  );
}
