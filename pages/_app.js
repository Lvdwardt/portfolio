import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script> document.documentElement.classList.add('dark')</script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
