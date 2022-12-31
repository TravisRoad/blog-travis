// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { LikeData } from "types/LikeData";
import { getLikeNum, setLikeNum, like } from "@/lib/leancloud";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LikeData>
) {
  const slug = req.query.slug as string;
  if (req.method === "GET") {
    await getLikeNum(slug)
      .then((val) => {
        res.status(200).json({ num: val });
      })
      .catch((_err) => {
        setLikeNum(slug, 0);
        res.status(200).json({ num: 0 });
      });
  } else if (req.method === "POST") {
    like(slug);
    res.status(200).json({ num: -1 });
  }
}
