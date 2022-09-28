import type { NextPage } from "next";
import Head from "next/head";
import WelcomeCard from "components/WelcomeCard";
import Main from "components/Main";
import RecentPost from "components/RecentPost";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Travis&apos; blog</title>
        <meta name="description" content="Travis' blog site" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      {/* <div className="min-h-[80vh] bg-gray-100 text-black dark:bg-black dark:text-white">
        <main className="mx-auto sm:max-w-4xl px-2">
          <WelcomeCard />
        </main>
      </div> */}
      <Main>
        <WelcomeCard />
        <RecentPost />
      </Main>
    </div>
  );
};

export default Home;
