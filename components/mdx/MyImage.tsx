import Image from "next/image";

export default function MyImage({ src, alt, width, height }: any) {
  return (
    <div className="mx-4 mt-4 mb-6 break-inside-avoid-page">
      <div className="grid place-items-center overflow-hidden rounded-lg border-4 border-gray-400 dark:border-2 dark:border-white/10">
        <Image src={`${src}`} width={width} height={height} alt={alt} />
      </div>
      {alt && (
        <div className="text-center font-sans text-base font-semibold opacity-40">
          {alt}
        </div>
      )}
    </div>
  );
}
