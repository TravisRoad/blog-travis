import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

type IMG = { url: string; alt?: string };

export default function Gallery({ imgs }: { imgs: IMG[] }) {
  return (
    <PhotoProvider>
      <div className="not-prose relative overflow-auto rounded-lg border-2 shadow-lg dark:border-0 dark:bg-nord-0 dark:shadow-none">
        <div className="flex w-full snap-x snap-mandatory gap-x-8 overflow-x-auto pt-4 pb-4">
          {imgs.map((img, idx) => (
            <div
              key={idx}
              className="relative shrink-0 snap-center snap-normal scroll-ml-6 first:pl-6 last:pr-2"
            >
              <PhotoView src={img.url}>
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="relative w-80 shrink-0 cursor-pointer bg-white shadow-xl sm:w-[45rem]"
                    draggable="false"
                  />
                  {img.alt && (
                    <div className="not-prose mt-0.5 mb-4 text-center font-sans text-base font-semibold opacity-40">
                      {img.alt}
                    </div>
                  )}
                </div>
              </PhotoView>
            </div>
          ))}
        </div>
      </div>
    </PhotoProvider>
  );
}
