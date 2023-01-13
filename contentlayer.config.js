import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeKatex from "rehype-katex";
import rehypePrism from "rehype-prism-plus";
import rehypeImgSize from "rehype-img-size";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkUnwrapImages from "remark-unwrap-images";
import toc from "markdown-toc";

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
  },
}));

export const About = defineDocumentType(() => ({
  name: "About",
  filePathPattern: `about.mdx`,
  contentType: "mdx",
  fields: {},
  computedFields: {},
}));

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Blog, Movie, About],
  mdx: {
    rehypePlugins: [
      [rehypeImgSize, { dir: "public" }],
      rehypeCodeTitles,
      [rehypePrism, { showLineNumbers: true }],
      rehypeKatex,
      rehypeSlug,
      // [
      //   toc,
      //   {
      //     headings: ["h2", "h3"],
      //     cssClasses: {
      //       toc: "page-outline", // Change the CSS class for the TOC
      //       link: "page-link", // Change the CSS class for links in the TOC
      //     },
      //   },
      // ],
    ],
    remarkPlugins: [remarkGfm, remarkMath, remarkUnwrapImages],
  },
});
