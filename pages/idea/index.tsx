import React, { useEffect } from "react";
import { useRouter } from "next/router";

function IdeaIndex() {
  const router = useRouter();
  useEffect(() => {
    router.push("/idea/1");
  }, [router]);
  return <></>;
}

export default IdeaIndex;
