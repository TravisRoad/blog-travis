import type { NextPage } from "next";
import Head from "next/head";
import WelcomeCard from "components/WelcomeCard";
import Main from "components/Main";
import RecentPost from "components/RecentPost";
import SideBar from "components/SideBar";
import createRss from "@/lib/feed";

const Home = ({ trivial }: { trivial: boolean }) => {
  return (
    <div>
      {/* <div className="min-h-[80vh] bg-gray-100 text-black dark:bg-black dark:text-white">
        <main className="mx-auto sm:max-w-5xl px-2">
          <WelcomeCard />
        </main>
      </div> */}
      <Main>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:hidden">
            <WelcomeCard />
          </div>
          <div className="hidden basis-1/4 lg:flex">
            <SideBar />
          </div>
          <div className="flex-1">
            <RecentPost />
          </div>
        </div>
      </Main>
    </div>
  );
};

export async function getStaticProps() {
  createRss();
  return { props: { trivial: true } };
}
export default Home;
