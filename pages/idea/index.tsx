import Main from "components/Main";
import React, { useEffect } from "react";
import { allIdeas } from "contentlayer/generated";
import { parseISO, compareDesc } from "date-fns";
import IdeaCard from "components/IdeaCard";
import { useRouter } from "next/router";

function IdeaIndex() {
  const router = useRouter();
  useEffect(() => {
    router.push("/idea/1");
  }, [router]);
  return <></>;
}

export default IdeaIndex;
