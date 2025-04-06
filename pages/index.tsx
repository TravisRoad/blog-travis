import WelcomeCard from "components/WelcomeCard";
import Main from "components/Main";
import RecentPost from "components/RecentPost";
import SideBar from "components/SideBar";
import createRss from "@/lib/feed";
import createSiteMap from "@/lib/sitemap";
import { allBlogs, Blog } from "contentlayer/generated";
import { compareDesc, parseISO } from "date-fns";
import { PartialBlog } from "types/content";
import { pick } from "contentlayer/client";
import Head from "next/head";
import metadata from "data/metaData";
import Showcase from "components/Showcase";

const Home = ({
  recentBlogs,
  staredBlogs,
}: {
  recentBlogs: PartialBlog[];
  staredBlogs: PartialBlog[];
}) => {
  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <Main>
        <div className="flex flex-col">
          <WelcomeCard />
          <RecentPost recentBlogs={recentBlogs} staredBlogs={staredBlogs} />
          {/* <Showcase /> */}
        </div>
      </Main>
    </div>
  );
};

export async function getStaticProps() {
  createRss();
  createSiteMap();
  const sortedBlogs = allBlogs
    .sort((p1: Blog, p2: Blog) =>
      compareDesc(parseISO(p1.publishDate), parseISO(p2.publishDate))
    )
    .filter(
      (blog: Blog) => process.env.NODE_ENV === "development" || !blog.draft
    );
  const recentBlogs = sortedBlogs
    .slice(0, 8)
    .map((blog: Blog) =>
      pick(blog, ["title", "summary", "publishDate", "slug"])
    );
  const staredBlogs = sortedBlogs
    .filter((blog: Blog) => blog.star)
    .filter(
      (blog: Blog) => process.env.NODE_ENV === "development" || !blog.draft
    )
    .map((blog: Blog) =>
      pick(blog, ["title", "summary", "publishDate", "slug"])
    );
  return { props: { recentBlogs, staredBlogs } };
}

export default Home;
