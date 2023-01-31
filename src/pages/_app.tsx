import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
