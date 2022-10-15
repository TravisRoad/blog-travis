import "../styles/globals.css";
import "../styles/prism/prism-dark.css";
import type { AppProps } from "next/app";
import Header from "components/Header";
import Footer from "components/Footer";
import Script from "next/script";
import { useCallback, useEffect, useState } from "react";

<Script strategy="beforeInteractive" src="/lib/darkmode.js" />;

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
      <Header isTop={scrollY < 20} />
      <div className="">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
