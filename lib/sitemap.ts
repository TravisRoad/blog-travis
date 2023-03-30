import { writeFileSync, statSync } from "fs";
import { globby } from "globby";
import prettier from "prettier";
import metadata from "data/metaData";
import { parseISO, format } from "date-fns";

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
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        ${pages
          .map((page) => {
            const path = page
              .replace("pages", "")
              .replace("data", "")
              .replace(".tsx", "")
              .replace("blog/", "posts/")
              .replace(".mdx", "");
            const route = path === "/index" ? "" : path;

            const { mtime, ctime } = statSync(page);

            return `
              <url>
                  <loc>${`${metadata.site}${route}`}</loc>
                  <lastmod>${format(mtime, "yyyy-MM-dd'T'HH:mm:ssxxx")}</lastmod>
              </url>
            `;
          })
          .join("")}
    </urlset>
    `;
  const txt = `
        ${pages
          .map((page) => {
            const path = page
              .replace("pages", "")
              .replace("data", "")
              .replace(".tsx", "")
              .replace("blog/", "posts/")
              .replace(".mdx", "");
            const route = path === "/index" ? "" : path;

            return `${`${metadata.site}${route}`}`;
          })
          .join("\n")}
  `;
  const formatted = prettier.format(sitemap, {
    parser: "html",
  });

  // eslint-disable-next-line no-sync
  writeFileSync("public/sitemap.xml", formatted);
  writeFileSync("public/sitemap.txt", txt);
}

export default createSiteMap;
