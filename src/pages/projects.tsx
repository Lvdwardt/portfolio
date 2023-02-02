import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { useTheme } from "next-themes";
import FlynImg from "../components/flynImg";
import Janskapsalonflat from "../components/janskapsalonflat";
import ToggleTheme from "../hooks/toggleTheme";

export default function Projects() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const root = document.documentElement;
    //if getAttribute is null, set to dark
    if (root.getAttribute("data-theme") === null) {
      setTheme("dark");
      root.setAttribute("data-theme", "dark");
    }

    setMounted(true);
  }, []);

  if (!mounted) return <div />;

  return (
    <div className="flex h-full flex-col items-center justify-center py-2">
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full overflow-visible transition-all duration-300 ease-in ">
        <div className="mx-auto grid w-full max-w-[320px] grid-cols-1 gap-4 px-4 pt-2 pb-6 [grid-auto-rows:265px] [grid-auto-columns:265px] sm:max-w-[640px] sm:grid-cols-2 xl:max-w-[1200px] xl:grid-cols-4 xl:grid-rows-[265px,265px] xl:px-0 ">
          <div className="col-span-2 rounded-[2rem] bg-card p-4 pl-6 pt-[18px]">
            <div className="relative h-[120px] w-[80px]  pl-4">
              <Image
                src="/images/memoji/surprised.webp"
                width={80}
                height={120}
                onClick={() => {
                  ToggleTheme({ resolvedTheme, setTheme });
                }}
                alt="memoji surprised"
                className={clsx(
                  "absolute transition-all duration-150 ease-in",
                  resolvedTheme === "dark" || undefined
                    ? "opacity-100"
                    : "opacity-0"
                )}
              />
              <Image
                src="/images/memoji/surprised-sunglasses.webp"
                width={80}
                height={120}
                alt="memoji surprised with sunglasses because of the light mode"
                onClick={() => {
                  ToggleTheme({ resolvedTheme, setTheme });
                }}
                className={clsx(
                  "absolute transition-all duration-150 ease-in",
                  resolvedTheme === "light" ? "opacity-100" : "opacity-0"
                )}
              />
            </div>
            <div className="flex w-full flex-col pb-2 pt-6 xl:hidden">
              <div className="mb-[-3px] flex items-baseline gap-2">
                <p className="text-lg">I&apos;m</p>
                <div className="flex items-baseline">
                  <p className="text-3xl font-bold text-primary">Leon</p>
                  <p>,</p>
                </div>
              </div>
              a software developer from the Netherlands.
            </div>
            <div className="hidden w-full flex-col pl-4 pt-[3px] xl:flex">
              <div className="mb-[-2px] flex items-baseline gap-1">
                <p className="text-lg">I&apos;m</p>
                <div className="flex items-baseline">
                  <p className="text-3xl font-bold text-primary">Leon</p>
                  <p>, a software developer from the Netherlands.</p>
                </div>
              </div>
              <p className="w-[475px] text-left">
                I am currently studying IT at the University of Applied Sciences
                in Utrecht.
              </p>
            </div>
          </div>
          <FlynImg />
          <Janskapsalonflat />
        </div>
      </div>
    </div>
  );
}
