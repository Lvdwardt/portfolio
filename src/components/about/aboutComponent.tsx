"use client";

import { PortableText, PortableTextComponents } from "@portabletext/react";
import { AboutContent } from "@/types";
import { usePathname } from "next/navigation";
import useThemeChecker from "@/hooks/useThemeChecker";
import { useTheme } from "next-themes";
import type { SanityDocument } from "next-sanity";
import ToggleTheme from "@/hooks/toggleTheme";
import { SanityImg } from "../imageComponent";
import { motion } from "framer-motion";
import { generateAnimationConfig, scaleUp, translateUp20 } from "../animations";

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

  const animateMemoji = generateAnimationConfig(
    {
      scale: [0.2, 1],
      translateX: [-20, -20],
      translateY: [-25, -25],
      rotate: [20, 0],
      originX: [0.5, 0.5],
      originY: [0.5, 0.5],
    },
    { duration: 0.5, delay: 0.1 }
  );

  return (
    <div className="w-full flex-col items-center gap-2 sm:items-start">
      <motion.div {...animateMemoji} className="relative h-[120px] w-[175px]">
        <SanityImg
          image={about.memojis.darkMemoji}
          size="medium"
          className="absolute cursor-pointer opacity-0 transition-all duration-150 ease-in dark:opacity-100"
        />
        <SanityImg
          image={about.memojis.lightMemoji}
          size="medium"
          className="absolute cursor-pointer opacity-100 transition-all duration-150 ease-in dark:opacity-0"
        />
        <button
          aria-label="Toggle theme"
          className="absolute left-8 top-5 z-50 h-28 w-20 cursor-pointer"
          onClick={() => {
            ToggleTheme({ resolvedTheme, setTheme });
          }}
        />
      </motion.div>

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
