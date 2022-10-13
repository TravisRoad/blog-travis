import Image from "next/image";

export default function MyImage({ src, alt, width, height }: any) {
  return (
    <div className="break-inside-avoid-page mt-4 mb-6">
      <div className="grid place-items-center overflow-hidden rounded-lg border-4 border-gray-400 dark:border-2 dark:border-white/10">
        <Image src={`${src}`} width={width} height={height} alt={alt} />
      </div>
      {alt && (
        <div className="mt-1 text-center font-sans text-sm font-light opacity-80">
          {alt}
        </div>
      )}
    </div>
  );
}
