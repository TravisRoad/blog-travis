import Giscus, { BooleanString } from "@giscus/react";
import { getTheme } from "@/lib/utils";
import { useEffect, useState } from "react";

const Comment = ({
  slug,
  reaction = "0",
}: {
  slug: string;
  reaction?: BooleanString;
}) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const t = getTheme();

    setTheme(t);
  }, []);

  return (
    <div className="mx-auto max-w-5xl pb-5">
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
