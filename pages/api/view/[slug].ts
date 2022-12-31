// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ViewData } from "types/LikeData";
import { getViewCount, setViewNum, unique_view } from "@/lib/leancloud";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ViewData>
) {
  const slug = req.query.slug as string;
  if (req.method === "GET") {
    await getViewCount(slug)
      .then((val) => {
        res.status(200).json({ num: val });
      })
      .catch((_err) => {
        setViewNum(slug, 1);
        res.status(200).json({ num: 1 });
      });
  } else if (req.method === "POST") {
    unique_view(slug);
    res.status(200).json({ num: -1 });
  }
}
