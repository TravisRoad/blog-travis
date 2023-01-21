import { writeFileSync } from "fs";
import { globby } from "globby";
import prettier from "prettier";
import metadata from "data/metaData";

async function createSiteMap() {
  const pages = await globby([
    "pages/*.tsx",
    "data/**/*.mdx",
    "!pages/idea.tsx",
    "!data/*.mdx",
    "!data/idea",
    "!data/movie/*.*",
    "!pages/_*.tsx",
    "!pages/api",
    "!pages/404.tsx",
  ]);

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map((page) => {
            const path = page
              .replace("pages", "")
              .replace("data", "")
              .replace(".tsx", "")
              .replace("blog/", "posts/")
              .replace(".mdx", "");
            const route = path === "/index" ? "" : path;

            return `
              <url>
                  <loc>${`${metadata.site}${route}`}</loc>
              </url>
            `;
          })
          .join("")}
    </urlset>
    `;
  const formatted = prettier.format(sitemap, {
    parser: "html",
  });

  // eslint-disable-next-line no-sync
  writeFileSync("public/sitemap.xml", formatted);
}

export default createSiteMap;
