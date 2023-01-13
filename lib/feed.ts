import { Feed } from "feed";
import metadata from "data/metaData";
import { allBlogs } from "contentlayer/generated";
import type { Blog } from "contentlayer/generated";
import { parseISO } from "date-fns";
import fs from "fs";

const createRss = () => {
  const feed = new Feed({
    title: metadata.title,
    description: metadata.description,
    id: metadata.site,
    link: metadata.site,
    language: "zh", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
    //   image: "http://example.com/image.png",
    //   favicon: "http://example.com/favicon.ico",
    copyright: `All rights reserved ${metadata.time.end}, ${metadata.author}`,
    //   updated: new Date(2013, 6, 14), // optional, default = today
    //   generator: "awesome", // optional, default = 'Feed for Node.js'
    feedLinks: {
      json: `${metadata.site}/feed/feed.json`,
      atom: `${metadata.site}/feed/feed.xml`,
    },
    author: {
      name: metadata.author,
      email: metadata.email,
      link: metadata.site,
    },
  });

  allBlogs.forEach((post: Blog) => {
    const item = {
      title: post.title,
      id: `${metadata.site}/posts/${post.slug}`,
      link: `${metadata.site}/posts/${post.slug}`,
      description: `${post.summary}\n请在浏览器中浏览以获得最佳体验`,
      content: post.html,
      author: [
        {
          name: metadata.author,
          email: metadata.email,
          // link:,
        },
      ],
      // contributor: [
      //   {
      //     name: "Shawn Kemp",
      //     email: "shawnkemp@example.com",
      //     link: "https://example.com/shawnkemp",
      //   },
      //   {
      //     name: "Reggie Miller",
      //     email: "reggiemiller@example.com",
      //     link: "https://example.com/reggiemiller",
      //   },
      // ],
      date: parseISO(post.publishDate),
      image: undefined,
    };
    //   if (post.image) { }
    feed.addItem(item);
  });

  // feed.addCategory("Technologie");

  // feed.addContributor({
  //   name: "Johan Cruyff",
  //   email: "johancruyff@example.com",
  //   link: "https://example.com/johancruyff",
  // });

  fs.writeFileSync("public/feed/feed.xml", feed.rss2());
  fs.writeFileSync("public/feed/feed.json", feed.json1());
};

export default createRss;
