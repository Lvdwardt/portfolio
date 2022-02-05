import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script>document.documentElement.classList.add(&#39;dark&#39;)</script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
