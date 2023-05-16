"use client";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { toggleScheme } from "../utils/colorScheme";

export default function About() {
  const router = useRouter();

  const toggle = async () => {
    await toggleScheme();
    router.refresh();
  };

  let currentPath = usePathname();
  currentPath = currentPath.replace("/", "");
  if (currentPath === "") currentPath = "home";

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
      text: (
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
      ),
      mobileText: (
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
      ),
    },
    {
      name: "about",
      src: "mac",
      alt: "memoji on a mac",
      dark: "mac-sunglasses",
      alt_dark: "memoji on a mac with sunglasses because of the light mode",
      width: 80,
      height: 120,
      className: "relative, min-h-[120px] min-w-[80px] ml-3 mt-[-13px]",
      text: (
        <div className="hidden w-full flex-col pl-4 pt-4 xl:flex">
          <div className="mb-[-2px] flex items-baseline gap-1">
            <span>
              <span className="text-lg">I&apos;m </span>
              <span className="text-3xl font-bold text-primary">Leon</span>
              <span>
                , a software developer from the Netherlands. I am currently
                studying IT at the University of Applied Sciences in Utrecht.
                There, I am doing an internship at{" "}
              </span>
              <a
                href="https://hiperr.net"
                target="_blank"
                rel="noreferrer"
                className="text-xl font-bold text-primary"
              >
                Hiperr
              </a>
              <span>
                , where I&apos;m working on a product that aims to enhance the
                interaction between streamers and their audience by providing
                engaging chat games. When I&apos;m not working on Hiperr,
                I&apos;m developing my own projects such as this website, or{" "}
              </span>
              <Link
                href={"/projects/fly-n"}
                className="whitespace-nowrap text-xl font-bold text-primary"
              >
                Fly-n
              </Link>
              <span>
                .
                <br />
                <br />
                On the rare occasions where I&apos;m not coding, I&apos;m most
                likely out there exploring the world. I really enjoy finding the
                cheapest flights to the most interesting places. I&apos;ve been
                to 19 countries so far, spread across 3 continents.
              </span>
            </span>
          </div>
        </div>
      ),
      mobileText: (
        <div className="flex w-full flex-col pb-2 pt-6 xl:hidden">
          <div className="mb-[-2px] flex items-baseline gap-1">
            <span>
              <span className="text-lg">I&apos;m </span>
              <span className="text-3xl font-bold text-primary">Leon</span>
              <span>
                , a software developer from the Netherlands. I am currently
                studying IT at the University of Applied Sciences in Utrecht.
                There, I am doing an internship at{" "}
              </span>
              <a
                href="https://hiperr.net"
                target="_blank"
                rel="noreferrer"
                className="text-xl font-bold text-primary"
              >
                Hiperr
              </a>
              <span>
                , where I&apos;m working on a product that aims to enhance the
                interaction between streamers and their audience by providing
                engaging chat games. When I&apos;m not working on Hiperr,
                I&apos;m developing my own projects such as this website, or{" "}
              </span>
              <Link
                href={"/projects/fly-n"}
                className="whitespace-nowrap text-xl font-bold text-primary"
              >
                Fly-n
              </Link>
              <span>.</span>
            </span>
          </div>
        </div>
      ),
    },
    {
      name: "projects",
      src: "star",
      alt: "memoji",
      dark: "star-sunglasses",
      alt_dark: "memoji mad because of the light mode",
      height: 127.5,
      width: 85,
      className:
        "relative, min-h-[120px] min-w-[80px] pl-2 pt-[1px] mb-[-14px]",
      text: (
        <div className="hidden w-full flex-col pl-4 pt-4 xl:flex">
          <div className="mb-[-2px] flex items-baseline gap-1">
            <p className="text-lg">
              Here are some of the projects I&apos;ve been working on:
            </p>
          </div>
        </div>
      ),
      mobileText: (
        <div className="flex w-full flex-col px-4 pb-2 pt-6 xl:hidden">
          <div className="mb-[-2px] flex items-baseline gap-2">
            <p className="text-lg">
              Here are some of the projects I&apos;ve been working on:
            </p>
          </div>
        </div>
      ),
    },
    {
      name: "travels",
      src: "wink",
      alt: "memoji wink",
      dark: "wink-sunglasses",
      alt_dark: "memoji wink with sunglasses because of the light mode",
      height: 100,
      width: 100,
      className:
        "relative, min-h-[100px] min-w-[100px] pt-[10px] mb-[11px] mt-[-5px] ml-[-2px]",
    },
    {
      name: "else",
      src: "surprised",
      alt: "memoji surprised",
      dark: "surprised-sunglasses",
      alt_dark: "memoji surprised with sunglasses because of the light mode",
      height: 120,
      width: 80,
      className: "relative, min-h-[120px] min-w-[80px] pl-4 mb-[-14px]",
    },
  ];
  const current = possibilites.find((possibility) => {
    if (possibility.name === currentPath) return possibility;
    else return possibility.name === "else";
  });
  if (!current) return <div>error</div>;

  return (
    <div className="w-full flex-col items-center gap-2 sm:items-start">
      <div className={current.className} key={current.name}>
        <Image
          src={`/images/memoji/${current.src}.webp`}
          width={current.width}
          height={current.height}
          alt={current.alt}
          onClick={() => {
            toggle();
          }}
          className="absolute cursor-pointer opacity-0 transition-all duration-150 ease-in dark:opacity-100"
        />
        <Image
          src={`/images/memoji/${current.dark}.webp`}
          width={current.width}
          height={current.height}
          alt={current.alt_dark}
          onClick={() => {
            toggle();
          }}
          className="absolute opacity-100 transition-all duration-150 ease-in dark:opacity-0"
        />
      </div>
      {/* mobile */}
      {current.mobileText}
      {/* large screens */}
      {current.text}
    </div>
  );
}
