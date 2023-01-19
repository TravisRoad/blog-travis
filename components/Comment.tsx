import Giscus from "@giscus/react";
import { getTheme } from "@/lib/utils";
import { useEffect, useState } from "react";

const Comment = ({ slug }: { slug: string }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const t = getTheme();

    setTheme(t);
  }, []);

  return (
    <div className="mx-auto max-w-5xl pb-5">
      <div className="px-5">
        <Giscus
          repo="TravisRoad/blog-discuss"
          repoId="R_kgDOIkniCQ"
          category="Announcements"
          categoryId="DIC_kwDOIkniCc4CS8y1"
          mapping="specific"
          term={`posts/${slug}`}
          strict="1" // strict title matching
          lang="zh-CN"
          loading="lazy"
          reactionsEnabled="0"
          emitMetadata="0"
          // inputPosition="top"
          // theme="preferred_color_scheme"
          theme={theme}
        />
      </div>
    </div>
  );
};

export default Comment;
