import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeKatex from "rehype-katex";
import rehypePrism from "rehype-prism-plus";
import rehypeImgSize from "rehype-img-size";
import rehypeSlug from "rehype-slug";
import imageMetadata from "./lib/imageMetadata";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkUnwrapImages from "remark-unwrap-images";
import remarkRehype from "remark-rehype";
import toc from "markdown-toc";
import markdown, { getCodeString } from "@wcj/markdown-to-html";

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blog/**/*.md[x]*`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    publishDate: {
      type: "date",
      required: true,
    },
    createdDate: {
      type: "date",
      required: true,
    },
    summary: {
      type: "string",
      required: false,
    },
    star: {
      type: "boolean",
      required: false,
    },
    showTOC: {
      type: "boolean",
      required: false,
    },
    series: {
      type: "string",
      required: false,
    },
    draft: {
      type: "boolean",
      required: false,
    },
    tags: {
      type: "json",
      required: false,
    },
    cate: {
      type: "json",
      required: false,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx?$/, ""),
    },
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw),
    },
    toc: {
      type: "json",
      resolve: (doc) => toc(doc.body.raw).json,
    },
    html: {
      type: "string",
      resolve: (doc) => {
        var html = markdown(doc.body.raw);
        if (typeof html !== "string") return "";
        html = html
          .replace(
            /src=\"\/image/g,
            `src=\"https://blog.lxythan2lxy.cn/image` // FIXME: hardcode the URL
          )
          .replace(/\{\/\*[^\*]*\*\/\}/g, "")
          .replace(/<p><\/p>\n/g, "");
        return html;
      },
    },
    externalLink: {
      type: "json",
      resolve: (doc) => {
        var html = markdown(doc.body.raw);
        if (typeof html !== "string") return [];
        const match = html.match(/href=\"https?[^\"]*\"/g);
        if (match === null) return { res: [], raw: [] };
        const rawLink = [...match];
        const res = rawLink.map(
          (str) => str.match(/https?:\/\/([^\"\/]*)\/?/)[1]
        );
        return { res: res, raw: rawLink };
      },
    },
  },
}));

export const Movie = defineDocumentType(() => ({
  name: "Movie",
  filePathPattern: `movie/**/*.md[x]*`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    publishDate: {
      type: "date",
      required: true,
    },
    rating: {
      type: "number",
      required: true,
    },
    star: {
      type: "boolean",
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx?$/, ""),
    },
    externalLink: {
      type: "json",
      resolve: (doc) => {
        var html = markdown(doc.body.raw);
        if (typeof html !== "string") return [];
        const match = html.match(/href=\"https?[^\"]*\"/g);
        if (match === null) return { res: [], raw: [] };
        const rawLink = [...match];
        const res = rawLink.map(
          (str) => str.match(/https?:\/\/([^\"\/]*)\/?/)[1]
        );
        return { res: res, raw: rawLink };
      },
    },
  },
}));

export const About = defineDocumentType(() => ({
  name: "About",
  filePathPattern: `about.mdx`,
  contentType: "mdx",
  fields: {},
  computedFields: {
    externalLink: {
      type: "json",
      resolve: (doc) => {
        var html = markdown(doc.body.raw);
        if (typeof html !== "string") return [];
        const match = html.match(/href=\"https?[^\"]*\"/g);
        if (match === null) return { res: [], raw: [] };
        const rawLink = [...match];
        const res = rawLink.map(
          (str) => str.match(/https?:\/\/([^\"\/]*)\/?/)[1]
        );
        return { res: res, raw: rawLink };
      },
    },
  },
}));

export const ProjPage = defineDocumentType(() => ({
  name: "ProjPage",
  filePathPattern: `proj.mdx`,
  contentType: "mdx",
  fields: {},
}));

export const Proj = defineDocumentType(() => ({
  name: "Proj",
  filePathPattern: `proj/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    publishDate: {
      type: "date",
      required: true,
    },
    createdDate: {
      type: "date",
      required: true,
    },
    summary: {
      type: "string",
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx?$/, ""),
    },
  },
}));

export const Idea = defineDocumentType(() => ({
  name: "Idea",
  filePathPattern: `idea/**/*.md[x]*`,
  contentType: "mdx",
  fields: {
    publishDate: {
      type: "date",
      required: true,
    },
  },
  computedFields: {},
}));

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Blog, Movie, About, Idea, ProjPage, Proj],
  mdx: {
    remarkPlugins: [
      remarkGfm,
      remarkMath,
      remarkUnwrapImages,
      [
        remarkRehype,
        {
          footnoteLabel: "脚注",
          footnoteBackLabel: "Footnote",
        },
      ],
    ],
    rehypePlugins: [
      [rehypeImgSize, { dir: "public" }],
      rehypeCodeTitles,
      imageMetadata,
      [rehypePrism, { showLineNumbers: true }],
      rehypeKatex,
      rehypeSlug,
    ],
  },
});
