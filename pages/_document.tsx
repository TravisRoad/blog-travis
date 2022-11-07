import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className=" bg-nord-bgLight bg-light dark:bg-nord-bgDark dark:bg-dark">
        <Main />
        <NextScript />
        <Script src="lib/darkmode.js" strategy="beforeInteractive" />
      </body>
    </Html>
  );
}
