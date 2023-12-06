import { Feed } from "feed";
import metadata from "data/metaData";
import { allBlogs, allIdeas } from "contentlayer/generated";
import type { Blog, Idea } from "contentlayer/generated";
import { parseISO, format } from "date-fns";
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

  allBlogs
    .filter((blog: Blog) => {
      return !blog.draft;
    })
    .forEach((post: Blog) => {
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
          },
        ],
        date: parseISO(post.publishDate),
        image: undefined,
      };
      feed.addItem(item);
    });

  allIdeas.forEach((idea: Idea) => {
    const item = {
      title: idea._id,
      id: `${metadata.site}/ideas/${idea._id}`,
      link: `${metadata.site}/idea`,
      description: `我在 ${format(
        parseISO(idea.publishDate),
        "yyyy-MM-dd HH:mm:ss"
      )} 的想法 \n请在浏览器中浏览以获得最佳体验`,
      content: idea.html,
      author: [
        {
          name: metadata.author,
          email: metadata.email,
        },
      ],
      date: parseISO(idea.publishDate),
      image: undefined,
    };
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
