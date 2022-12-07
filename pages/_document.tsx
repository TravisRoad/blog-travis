import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="main-body bg-light dark:bg-dark bg-nord-bgLight dark:bg-nord-bgDark">
        <Main />
        <NextScript />
        <Script src="/lib/darkmode.js" strategy="beforeInteractive" />
      </body>
    </Html>
  );
}
