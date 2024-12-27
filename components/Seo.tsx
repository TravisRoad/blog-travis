import { FC } from "react";
import Head from "next/head";
import Script from "next/script";
import metadata from "data/metaData";

export interface SeoProps {
  title: string;
  path: string;
  description: string;
  image?: string;
  keywords?: Array<string>;
}

// https://blog.lxythan2lxy.cn
const ROOTPATH = metadata.site;

const Seo: FC<SeoProps> = (props) => {
  const { title, path, description, image, keywords } = props;
  const url = ROOTPATH + path;
  const imgUrl =
    image !== undefined
      ? ROOTPATH + image
      : "https://blog.lxythan2lxy.cn/image/2022-01-16-14-27-56.png";

  return (
    <>
      <Head>
        {/* Facebook Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={title} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={imgUrl} />
        <meta property="og:description" content={description} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@idk" />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:image" content={imgUrl} />
        <meta name="twitter:description" content={description} />

        {/* QQ Sharing */}

        <meta itemProp="name" content={title} />
        <meta itemProp="image" content={imgUrl} />
        <meta name="description" itemProp="description" content={description} />
        <meta
          name="keywords"
          content={keywords?.filter((item) => item !== "default")?.join(", ")}
        ></meta>
      </Head>

      {/* WeChat Sharing */}
      <Script id="wechat-sharing">
        {`var WECHAT_TITLE = '${title}';
          var WECHAT_DESC = '${description}';
          var WECHAT_IMAGE = '${imgUrl}';
          var WCHAT_NO_GA = '';
        `}
      </Script>
    </>
  );
};

export default Seo;
