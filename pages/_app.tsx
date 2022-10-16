import "../styles/globals.css";
import "../styles/prism/prism-dark.css";
import type { AppProps } from "next/app";
import Header from "components/Header";
import Footer from "components/Footer";
import { useEffect, useState } from "react";

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
      <Header isTop={scrollY < 50} />
      <Component {...pageProps} />
      <svg
        viewBox="0 0 1920 250"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[100%] bg-nord-light dark:bg-nord-dark"
      >
        <path
          className="dark:fill-[#373d4c] fill-nord-5/80"
          d="M1920 250H0V0s126.707 78.536 349.975 80.05c177.852 1.203 362.805-63.874 553.803-63.874 290.517 0 383.458 57.712 603.992 61.408 220.527 3.696 278.059-61.408 412.23-17.239"
        ></path>
        <path
          className="fill-nord-6 dark:fill-[#39404f]"
          d="M1920 144s-467.917 116.857-1027.243-17.294C369.986 1.322 0 45.578 0 45.578V250h1920V144z"
        ></path>
        <path
          className="fill-[#fbfbfc] dark:fill-nord-1"
          d="M0 195.553s208.547-75.581 701.325-20.768c376.707 41.908 520.834-67.962 722.545-67.962 222.926 0 311.553 83.523 496.129 86.394V250H0v-54.447z"
        ></path>
      </svg>
      <Footer />
    </div>
  );
}

export default MyApp;
