import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="bg-nord-light dark:bg-nord-dark">
        <Main />
        <NextScript />
        <Script src="lib/darkmode.js" strategy="beforeInteractive" />
      </body>
    </Html>
  );
}
