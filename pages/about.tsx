import type { NextPage } from "next";
import Head from "next/head";
import WelcomeCard from "components/WelcomeCard";
import Main from "components/Main";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About me</title>
        <meta name="description" content="something about Travis" />
        <link rel="icon" type="image/png" href="/favicon-1.png" />
      </Head>
      <Main>
        <WelcomeCard />
      </Main>
    </div>
  );
};

export default Home;