export default function Prose({ children }: { children: any }) {
  return (
    <div className="smax-w-5xl rounded-lg bg-transparent py-10 transition-colors duration-500 sm:mx-auto sm:rounded-lg sm:shadow-lg sm:dark:shadow-sm md:max-w-6xl md:bg-white/80 md:dark:bg-nord-0/80">
      <div className="prose prose-stone mx-auto max-w-4xl overscroll-contain px-2 prose-h1:-mt-2 prose-a:text-nord-11 prose-a:no-underline hover:prose-a:underline dark:prose-invert md:prose-lg md:px-6">
        {children}
      </div>
    </div>
  );
}
