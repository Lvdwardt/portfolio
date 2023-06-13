import { Metadata } from "next";
import localfont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";

import "@/styles/globals.css";
import "@/styles/mapbox-gl.css";
import Navbar from "@/components/nav/navbar";
import Providers from "@/utils/providers";

export const metadata: Metadata = {
  title: "Leonvdw.nl",
  description: "Leon's personal portfolio site",
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
      path: "../assets/fonts/Silka-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Silka-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Moranga-Medium.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/Moranga-Bold.woff2",
      weight: "700",
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
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${gotham.variable} ${silka.variable} font-silka text-text`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
      <Analytics />
    </html>
  );
}
