import { Metadata } from "next";
import localfont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { getCurrentScheme } from "../utils/colorScheme";

import "../styles/globals.css";
import "../styles/mapbox-gl.css";
import Navbar from "../components/navbar";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const scheme = await getCurrentScheme();
  return (
    <html
      lang="en"
      data-theme={scheme === "light" ? "light" : "dark"}
      className={`${gotham.variable} ${silka.variable} font-sans text-text ${
        scheme === "light" ? "" : "dark"
      }`}
    >
      <body>
        <Navbar />
        {children}
      </body>
      <Analytics />
    </html>
  );
}
