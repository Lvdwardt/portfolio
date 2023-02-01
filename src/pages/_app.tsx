import { ThemeProvider } from "next-themes";
import localfont from "@next/font/local";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";
import "../styles/globals.css";

const gotham = localfont({
  src: [
    {
      path: "../assets/fonts/Gotham-Book.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/Gotham-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Moranga-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/Gotham-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-gotham",
});
const silka = localfont({
  src: [
    {
      path: "../assets/fonts/Silka-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Silka-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-silka",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${gotham.variable} ${silka.variable} font-sans `}>
      <ThemeProvider attribute="class">
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}
export default MyApp;
