import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="zh-cn">
      <Head>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@200;300;500;900&display=swap"
          rel="stylesheet"
          media="print"
        /> */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-1Y104QW25K"
        />
        <Script strategy="beforeInteractive" src="/lib/darkmode.js" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1Y104QW25K');
            `,
          }}
        />
        <Script
          id="clarity-Microsoft"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "fitpvdaw6o");
              `,
          }}
        />
        <Script
          strategy="afterInteractive"
          data-website-id="55c27de1-3943-4efe-98bf-685762731e3b"
          src="https://umami.lxythan2lxy.cn/index.js"
        />
      </Head>
      <NextScript />
      <body className="main-body bg-light dark:bg-dark bg-nord-bgLight dark:bg-nord-bgDark">
        <Main />
      </body>
    </Html>
  );
}
