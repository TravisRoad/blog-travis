import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function BangumiCard({
  iid,
  rank = 5,
}: {
  iid: any;
  rank: number;
}) {
  const [bangumiSubject, setBangumiSubject] = useState<any>({});
  const [image, setImage] = useState<string>("");
  const [rating, setRating] = useState<any>({});
  const baseURL = "https://api.bgm.tv/v0/subjects/";
  const url = `${baseURL}${iid}`;
  useEffect(() => {
    const getJson = async () => {
      const rsp = await fetch(url, {
        headers: {
          // "User-Agent": "TravisLee/travisblog",
        },
      });
      const subject = await rsp.json();
      setBangumiSubject(subject);

      setImage(subject.images.small);
    };
    getJson();
  }, [url]);
  console.log(bangumiSubject);

  return (
    <div className="flex rounded-lg border justify-between flex-row-reverse px-4 py-2">
      <div>{bangumiSubject.name_cn}</div>
      <Link href={url}>
        <a className="w-[80px] h-[80px]">
          <Image
            src={image}
            alt="image"
            className="overflow-hidden"
            placeholder="blur"
            width={400}
            height={640}
            layout="intrinsic"
            blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          />
        </a>
      </Link>
    </div>
  );
}
