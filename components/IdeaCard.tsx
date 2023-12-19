import React from "react";
import type { Idea } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { parseISO, format } from "date-fns";
import { Quote } from "components/mdx/Quote";
import MyImage from "./mdx/MyImage";

export default function IdeaCard({ idea }: { idea: Idea }) {
  const Content = useMDXComponent(idea.body.code);
  return (
    <div className="duration-400 prose mx-auto mb-4 w-full break-inside-avoid rounded-md border-2 bg-white px-5 pt-4 pb-2 shadow-sm transition-all ease-linear prose-p:mb-1 prose-p:mt-1 prose-a:text-nord-10 prose-img:my-1 dark:prose-invert dark:border-nord-2 dark:bg-nord-0 prose-a:dark:text-nord-9 md:hover:translate-y-0.5 md:hover:shadow-lg">
      <Content
        components={{
          img: MyImage,
          Quote,
        }}
      ></Content>
      <div className=" mt-6 border-t border-dashed pt-1 text-right text-sm text-nord-3/50 dark:border-nord-6/20 dark:text-nord-6/20">
        {format(parseISO(idea.publishDate), "yyyy-MM-dd HH:mm:ss")}
      </div>
    </div>
  );
}
