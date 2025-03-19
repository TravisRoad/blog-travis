import Main from "components/Main";
import PostCard from "components/PostCard";
import Head from "next/head";

interface Story {
  title: string;
  desc: string;
  url: string;
  datetime: {
    year: number;
    month: number;
    day: number;
  };
  draft: boolean;
}

const defaultStory: Story = {
  title: "example",
  desc: "this is an example",
  url: "example",
  datetime: {
    year: 1970,
    month: 1,
    day: 1
  },
  draft: true
}

const stories: Story[] = [
  {
    ...defaultStory,
    draft: false
  },
  {
    ...defaultStory,
    title: "例子",
    desc: "例子",
    url: "example-zh",
    draft: false
  },
  {
    ...defaultStory,
    title: "长白山",
    desc: "长白山",
    url: "baishan",
    datetime: {
      year: 2025,
      month: 3,
      day: 7
    },
    draft: false
  }
]

function Cell({ year, stories }: { year: string; stories: Story[] }) {
  return (
    <div className="">
      <div className="my-1 pl-1 font-semibold">{year}</div>
      <div className=" divide-y divide-nord-5 divide-black/10 overflow-hidden rounded-lg border-2 border-nord-5 dark:divide-nord-dark/80 dark:divide-nord-2 dark:border-nord-2">
        {stories.map((s) => (
          <PostCard
            title={s.title}
            key={s.url}
            url={`/travelogue/${s.url}`}
            summary={s.desc}
            date={`${s.datetime.year}-${s.datetime.month}-${s.datetime.day}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const yearlyStories: { [year: string]: Story[] } = {};
  stories.forEach((s) => {
    if (yearlyStories[s.datetime.year]) {
      yearlyStories[s.datetime.year].push(s);
    } else {
      yearlyStories[s.datetime.year] = [s];
    }
  });
  const yearCata = Object.keys(yearlyStories).sort((a, b) => {
    return parseInt(b) - parseInt(a);
  });

  return (
    <Main>
      <Head>
        <title>游记</title>
      </Head>
      <div className="mt-4">
        {yearCata.map((y) => {
          return <Cell key={y} year={y} stories={yearlyStories[y]} />;
        })}
      </div>
    </Main>
  )
}
