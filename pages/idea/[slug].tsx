import IdeaCard from "components/IdeaCard";
import Main from "components/Main";
import Nav from "components/Nav";
import { Idea, allIdeas } from "contentlayer/generated";
import { compareDesc, parseISO } from "date-fns";
import Head from "next/head";

const size = 4;

function getPageList(): string[] {
  const paths: string[] = [];
  var cnt = 1,
    len = allIdeas.length;
  while (true) {
    paths.push(`${cnt}`);
    len -= size;
    if (len <= 0) break;
    cnt++;
  }
  return paths;
}

export async function getStaticPaths() {
  const pageList = getPageList();
  const paths: { params: { slug: string } }[] = [];
  pageList.forEach((page) => {
    paths.push({ params: { slug: `${page}` } });
  });
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const ideas: Idea[] = allIdeas.sort((p1, p2) =>
    compareDesc(parseISO(p1.publishDate), parseISO(p2.publishDate))
  );
  return {
    props: {
      ideas: ideas.slice(
        (parseInt(params.slug) - 1) * size,
        parseInt(params.slug) * size
      ),
      current: params.slug,
      pages: getPageList(),
    },
  };
}

export default function ideaPage({
  ideas,
  current,
  pages,
}: {
  ideas: Idea[];
  current: string;
  pages: string[];
}) {
  return (
    <Main>
      <Head>
        <title> 我的想法 </title>
      </Head>
      <div className="mx-auto">
        <h1 className="mt-2 mb-4 text-lg font-bold"> 💡 我的想法 </h1>
        <Nav
          current={current}
          pages={pages}
          className=" mb-4 flex justify-center"
        />
        <div className=" flex flex-col justify-center ">
          {ideas.map((idea) => (
            <IdeaCard idea={idea} key={idea._id}></IdeaCard>
          ))}
        </div>
        <Nav
          current={current}
          pages={pages}
          className=" mt-4 flex justify-center"
        />
      </div>
    </Main>
  );
}
