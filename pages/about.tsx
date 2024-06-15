import Main from "components/Main";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allAbouts, allIdeas, allMovies } from "contentlayer/generated";
import MDXComponents from "components/mdx/MDXComponents";
import States from "components/States";
import WelcomeCard from "components/WelcomeCard";
import {
  UserCircleIcon,
  UserGroupIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
import type { Friend } from "data/friendLink";
import friends from "data/friendLink";
import FriendCard from "components/FriendCard";
import React from "react";
import Head from "next/head";

const Line = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative mt-8 mb-6 inline-flex w-full items-center justify-center">
      {/* <hr className="my-4 h-1 max-w-3xl border-0 bg-nord-0 " /> */}
      <hr className=" mt-2 mb-0 h-0.5 w-[32rem] rounded border-0 bg-nord-3/50 dark:h-1 " />
      <div className="absolute left-1/2 -translate-x-1/2 bg-nord-bgLight px-2 dark:bg-nord-bgDark ">
        {children}
      </div>
    </div>
  );
};

const FriendLink = () => {
  return (
    <>
      <Line>
        <UserGroupIcon className="h-6 w-6 stroke-[1.5] text-nord-3/80 dark:text-nord-4/80" />
      </Line>
      <div
        className="mx-auto grid gap-2 sm:max-w-3xl sm:grid-cols-2"
        id="friendLink"
      >
        {friends.map((friend: Friend) => (
          <FriendCard
            key={friend.name}
            url={friend.url}
            name={friend.name}
            description={friend.description}
            iconUrl={friend.iconUrl}
          />
        ))}
      </div>
    </>
  );
};

const Statistic = () => {
  return (
    <>
      <Line>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
          />
        </svg>
      </Line>
      <States />
    </>
  );
};

const Log = () => (
  <>
    <Line>
      <BookOpenIcon className="h-6 w-6 stroke-[1.5] text-nord-3/80 dark:text-nord-4/80" />
    </Line>
    <div className="prose prose-stone mx-auto dark:prose-invert sm:max-w-3xl">
      <ul>
        <li>2022年9月28日 - 转移到新博客框架了</li>
        <li>2023年12月9日 - 增加了返回顶部按钮 && 丝滑滚动</li>
      </ul>
    </div>
  </>
);

const About = () => {
  const Content = useMDXComponent(allAbouts[0].body.code);

  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <Main>
        <div className="mx-auto max-w-3xl">
          <WelcomeCard />
        </div>
        <figure className="mx-auto mt-4 hidden max-w-3xl pl-4 dark:invert lg:block lg:h-[8rem]">
          <embed src="https://wakatime.com/share/@TravisRoad/fa4c2a51-c527-4076-959e-9501d918fdcd.svg"></embed>
        </figure>
        <Line>
          <UserCircleIcon className="h-6 w-6 stroke-[1.5] text-nord-3/80 dark:text-nord-4/80" />
        </Line>
        <div className=" flex flex-col">
          <div className="prose prose-stone mx-auto prose-a:text-nord-9 prose-a:no-underline hover:prose-a:underline dark:prose-invert sm:max-w-3xl">
            <Content components={MDXComponents}></Content>
          </div>
        </div>
        <Log />
        <Statistic />
        <FriendLink />
      </Main>
    </div>
  );
};

export default About;
