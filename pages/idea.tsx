import Main from "components/Main";
import React from "react";
import { allIdeas } from "contentlayer/generated";
import type { Idea } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { parseISO, format, compareDesc } from "date-fns";
import Image from "next/image";

const MyImage = ({ src, alt, width, height }: any) => (
  <>
    <Image src={`${src}`} width={width} height={height} alt={alt} />
  </>
);

function IdeaCard({ idea }: { idea: Idea }) {
  const Content = useMDXComponent(idea.body.code);
  return (
    <div className="duration-400 prose mb-4 break-inside-avoid rounded-md border-2 bg-white px-5 pt-4 pb-2 shadow-sm transition-all ease-linear hover:-translate-y-1 hover:shadow-xl prose-p:mb-1 prose-p:mt-1 prose-a:text-nord-10 prose-img:my-1 dark:prose-invert dark:border-nord-2 dark:bg-nord-0 prose-a:dark:text-nord-9">
      <Content
        components={{
          img: MyImage,
        }}
      ></Content>
      <div className=" mt-6 border-t border-dashed pt-1 text-right text-sm text-nord-3/50 dark:border-nord-6/20 dark:text-nord-6/20">
        {format(parseISO(idea.publishDate), "yyyy-MM-dd HH:mm:ss")}
      </div>
    </div>
  );
}

function idea() {
  allIdeas
    .sort((a, b) =>
      compareDesc(parseISO(a.publishDate), parseISO(b.publishDate))
    )
    .slice(0, 5); // FIXME: slice 0 5
  return (
    <Main>
      <div className="mx-auto">
        <h1 className="mt-2 mb-4 text-lg font-bold"> 💡 我的想法 </h1>
        <div className=" columns-1 gap-y-8 gap-x-4 sm:columns-2 ">
          {allIdeas.map((idea) => (
            <IdeaCard idea={idea} key={idea._id}></IdeaCard>
          ))}
        </div>
      </div>
    </Main>
  );
}

export default idea;
