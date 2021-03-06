import "../styles/globals.css";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Leon v d W</title>
        <script>
          document.documentElement.classList.add(&quot;dark&quot;)
        </script>
      </Head>
      <ThemeProvider defaultTheme="dark">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
