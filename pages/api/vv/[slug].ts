// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getVVCount, setVVNum, vv } from "@/lib/leancloud";
import type { NextApiRequest, NextApiResponse } from "next";
import { ViewData } from "type/LikeData";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ViewData>
) {
  const slug = req.query.slug as string;
  if (req.method === "GET") {
    await getVVCount(slug)
      .then((val) => {
        res.status(200).json({ num: val });
      })
      .catch((_err) => {
        setVVNum(slug, 1);
        res.status(200).json({ num: 1 });
      });
  } else if (req.method === "POST") {
    vv(slug);
    res.status(200).json({ num: -1 });
  }
}
