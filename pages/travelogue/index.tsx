import Main from "components/Main";
import PostCard from "components/PostCard";
import Head from "next/head";

interface Story {
  title: string;
  desc: string;
  url: string;
  datetime: {
    from: number[];
    to: number[];
  }
  draft: boolean;
}

const defaultStory: Story = {
  title: "example",
  desc: "this is an example",
  url: "example",
  datetime: {
    from: [1970, 1, 1],
    to: [1970, 1, 1],
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
    desc: "和研究生室友的长白山之行",
    url: "baishan",
    datetime: {
      from: [2025, 3, 7],
      to: [2025, 3, 11],
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
            date={`${s.datetime.from.slice(1).map(n => n.toString().padStart(2, '0')).join("/")}~${s.datetime.to.slice(1).map(n => n.toString().padStart(2, '0')).join("/")}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const yearlyStories = stories.reduce((acc, story) => {
    const year = story.datetime.from[0].toString();
    return {
      ...acc,
      [year]: [...(acc[year] || []), story]
    };
  }, {} as { [year: string]: Story[] });

  const yearCata = Object.keys(yearlyStories).sort((a, b) => Number(b) - Number(a));

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
