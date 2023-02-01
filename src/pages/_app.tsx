import { ThemeProvider } from "next-themes";
import localfont from "@next/font/local";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";
import "../styles/globals.css";

const gotham = localfont({
  src: [
    {
      path: "../assets/fonts/GothamBook.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/Gotham-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-gotham",
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${gotham.variable} font-sans`}>
      <ThemeProvider attribute="class">
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}
export default MyApp;
