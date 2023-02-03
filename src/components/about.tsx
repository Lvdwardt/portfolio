import { useTheme } from "next-themes";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
import ToggleTheme from "../hooks/toggleTheme";
import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();
  let currentPath = router.pathname;
  currentPath = currentPath.replace("/", "");
  if (currentPath === "") currentPath = "home";

  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <div className="col-span-1 h-full w-full rounded-[2rem] bg-card sm:order-1 xl:col-span-2" />
    );

  const possibilites = [
    {
      name: "home",
      src: "normal",
      alt: "memoji",
      dark: "mad-sunglasses",
      alt_dark: "memoji mad because of the light mode",
      height: 100,
      width: 100,
      className: "relative, min-h-[100px] min-w-[100px]",
    },
    {
      name: "projects",
      src: "surprised",
      alt: "memoji surprised",
      dark: "surprised-sunglasses",
      alt_dark: "memoji surprised with sunglasses because of the light mode",
      height: 120,
      width: 80,
      className: "relative, min-h-[120px] min-w-[80px] pl-4 mb-[-14px]",
    },
    {
      name: "contact",
      src: "wink",
      alt: "memoji wink",
      dark: "wink-sunglasses",
      alt_dark: "memoji wink with sunglasses because of the light mode",
      height: 100,
      width: 100,
      className:
        "relative, min-h-[100px] min-w-[100px] pt-[10px] mb-1.5 ml-[-2px]",
    },
  ];

  return (
    <div className="w-full flex-col items-center gap-2 sm:items-start">
      {possibilites.map((possibility) => {
        if (possibility.name === currentPath) {
          return (
            <div className={possibility.className} key={possibility.name}>
              <Image
                src={`/images/memoji/${possibility.src}.webp`}
                width={possibility.width}
                height={possibility.height}
                alt={possibility.alt}
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
                src={`/images/memoji/${possibility.dark}.webp`}
                width={possibility.width}
                height={possibility.height}
                alt={possibility.alt_dark}
                onClick={() => {
                  ToggleTheme({ resolvedTheme, setTheme });
                }}
                className={clsx(
                  resolvedTheme === "light" ? "opacity-100" : "opacity-0",
                  "absolute transition-all duration-150 ease-in"
                )}
              />
            </div>
          );
        }
      })}
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
  );
}
