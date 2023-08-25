"use client";

import { PortableText, PortableTextComponents } from "@portabletext/react";
import { urlForImage } from "s/lib/image";
import { AboutContent } from "@/types";
import Image from "next/image";
import { usePathname } from "next/navigation";
import useThemeChecker from "@/hooks/useThemeChecker";
import { useTheme } from "next-themes";
import type { SanityDocument } from "next-sanity";
import ToggleTheme from "@/hooks/toggleTheme";

export default function AboutComponent({
  allAboutData,
}: {
  allAboutData: SanityDocument<AboutContent[]>;
}) {
  const { resolvedTheme, setTheme } = useTheme();
  useThemeChecker();

  let currentPath = usePathname();
  currentPath = currentPath.replace("/", "");
  if (currentPath === "") currentPath = "home";

  let about = allAboutData.find((about) => about.slug.current === currentPath);

  if (!about)
    about = allAboutData.find((about) => about.slug.current === "not-found");

  if (!about) return null;

  return (
    <div className="w-full flex-col items-center gap-2 sm:items-start">
      <div className="relative h-[120px] w-[175px] translate-x-[-20px] translate-y-[-25px]">
        <Image
          src={urlForImage(about.memojis.darkMemoji).url()}
          width={140}
          height={140}
          alt={about.memojis.darkMemoji.alt as string}
          className="absolute cursor-pointer opacity-0 transition-all duration-150 ease-in dark:opacity-100"
        />
        <Image
          src={urlForImage(about.memojis.lightMemoji).url()}
          width={140}
          height={140}
          alt={about.memojis.lightMemoji.alt as string}
          className="absolute cursor-pointer opacity-100 transition-all duration-150 ease-in dark:opacity-0"
        />
        <button
          className="absolute left-8 top-5 z-50 h-28 w-20 cursor-pointer"
          onClick={() => {
            ToggleTheme({ resolvedTheme, setTheme });
          }}
        />
      </div>

      <div className="">
        {/* mobile */}
        <div className="flex flex-col items-baseline gap-2 sm:hidden">
          <PortableText value={about.text.mobileText} components={components} />
        </div>
        {/* large screens */}
        <div className="hidden flex-col items-baseline gap-2 sm:flex">
          <PortableText value={about.text.text} components={components} />
        </div>
      </div>
    </div>
  );
}

const components: PortableTextComponents = {
  marks: {
    strong: (props) => (
      <strong className="text-xl font-bold text-primary">
        {props.children}
      </strong>
    ),
    em: (props) => (
      <em className="mb-[-2px] text-3xl font-bold !not-italic text-primary">
        {props.children}
      </em>
    ),
  },
  block: {
    h6: (props) => <h6 className="px-4 text-lg">{props.children}</h6>,
  },
};