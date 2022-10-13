import "../styles/globals.css";
import "../styles/prism/prism-dark.css";
import type { AppProps } from "next/app";
import Header from "components/Header";
import Footer from "components/Footer";
import Script from "next/script";
import Head from "next/head";
import { useEffect, useState } from "react";

<Script strategy="beforeInteractive" src="/lib/darkmode.js" />;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <div className="">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
