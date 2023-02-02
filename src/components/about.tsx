import { useTheme } from "next-themes";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
import ToggleTheme from "../hooks/toggleTheme";

export default function About() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <div className="col-span-1 h-full w-full rounded-[2rem] bg-card sm:order-1 xl:col-span-2" />
    );

  return (
    <div className=" col-span-1 h-full w-full rounded-[2rem] bg-card p-6 dark:text-white sm:order-1 xl:col-span-2">
      <div className="w-full flex-col items-center gap-2 sm:items-start">
        <div className="realtive min-h-[100px] min-w-[100px]">
          <Image
            src="/images/memoji/normal.webp"
            width={100}
            height={100}
            alt="memoji"
            onClick={() => {
              ToggleTheme({ resolvedTheme, setTheme });
            }}
            className={clsx(
              resolvedTheme === "dark" || undefined
                ? "opacity-100"
                : "opacity-0",
              "absolute transition-all duration-150 ease-in"
            )}
          />
          <Image
            src="/images/memoji/mad-sunglasses.webp"
            width={100}
            height={100}
            alt="memoji mad because of the light mode"
            onClick={() => {
              ToggleTheme({ resolvedTheme, setTheme });
            }}
            className={clsx(
              resolvedTheme === "light" ? "opacity-100" : "opacity-0",
              "absolute transition-all duration-150 ease-in"
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
        <div className="hidden w-full flex-col pl-4 pt-4 xl:flex">
          <div className="mb-[-2px] flex items-baseline gap-1">
            <p className="text-lg">I&apos;m</p>
            <div className="flex items-baseline">
              <p className="text-3xl font-bold text-primary">Leon</p>
              <p>, a software developer from the Netherlands.</p>
            </div>
          </div>
          <p className="w-[475px] text-left">
            I am currently studying IT at the University of Applied Sciences in
            Utrecht.
          </p>
        </div>
      </div>
    </div>
  );
}
