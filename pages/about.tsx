import type { NextPage } from "next";
import Head from "next/head";
import WelcomeCard from "components/WelcomeCard";
import Main from "components/Main";

const Home: NextPage = () => {
  return (
    <div>
      <Main>
        <WelcomeCard />
        <WelcomeCard />
        <WelcomeCard />
      </Main>
    </div>
  );
};

export default Home;
