import Giscus, { BooleanString } from "@giscus/react";
import useDarkMode from "@/lib/hooks/useDarkMode";

const Comment = ({
  slug,
  reaction = "0",
}: {
  slug: string;
  reaction?: BooleanString;
}) => {
  const { theme } = useDarkMode();

  return (
    <div className="z-10 mx-auto max-w-3xl px-4 ">
      <Giscus
        repo="TravisRoad/blog-discuss"
        repoId="R_kgDOIkniCQ"
        category="Announcements"
        categoryId="DIC_kwDOIkniCc4CS8y1"
        mapping="specific"
        term={slug}
        strict="1" // strict title matching
        lang="zh-CN"
        loading="lazy"
        reactionsEnabled={reaction}
        emitMetadata="0"
        theme={theme}
      />
    </div>
  );
};

export default Comment;
