import "../styles/globals.css";
import "../styles/prism/prism-dark.css";
import type { AppProps } from "next/app";
import Header from "components/Header";
import Footer from "components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <div className="dark">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
