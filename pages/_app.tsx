import "../styles/globals.css";
import "../styles/prism/prism-dark.css";
import "../styles/nprogress.css";
import type { AppProps } from "next/app";
import Header from "components/Header";
import Footer from "components/Footer";
import { useEffect, useState } from "react";
import Head from "next/head";
import metadata from "data/metaData";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // just trigger this so that the initial state
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="alternate"
          href="/feed/feed.xml"
          type="application/rss+xml"
          title={metadata.title}
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#242933" />

        {/*https://github.com/giscus/giscus/issues/675 */}
        <meta name="color-scheme" content="dark light" />

        {/* <meta
          name="theme-color"
          content="#f2f4f8"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#242933"
          media="(prefers-color-scheme: dark)"
        /> */}
      </Head>
      <NextNProgress
        options={{
          showSpinner: false,
        }}
      />
      <Header isTop={scrollY < 50} />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
