"use client";
import type React from "react";
import { useTheme } from "next-themes";
import ToggleTheme from "../../hooks/toggleTheme";
import { AnimatePresence, motion } from "framer-motion";
import FiMoon from "public/icons/fi/FiMoon.svg";
import FiSun from "public/icons/fi/FiSun.svg";
import useSound from "use-sound";

export default function Toggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [play] = useSound("/sounds/click.mp3", { volume: 0.2 });

  /**
   * credits to Melanie Seltzer for this toggle animation!
   * https://github.com/melanieseltzer/framer-motion-playground/
   */
  const variants = {
    initial: { opacity: 0, scale: 0.5, x: 0, rotate: -90 },
    animate: { opacity: 1, scale: 1, x: 0, rotate: 0 },
    exit: { opacity: 0, scale: 0.5, x: 0, rotate: 90 },
  };

  const ariaLabel =
    resolvedTheme === "light" ? "Activate dark mode" : "Activate light mode";

  return (
    <div className="group relative flex h-full w-full items-center justify-center text-3xl text-text">
      <div className="absolute z-0 h-80 w-80 translate-x-[-12rem] translate-y-32 rounded-t-full bg-primary " />
      <AnimatePresence initial={false}>
        <button
          aria-label={ariaLabel}
          onClick={() => {
            play();
            ToggleTheme({ setTheme, resolvedTheme });
          }}
          className="curser-pointer z-10 flex h-16 w-16 items-center justify-center rounded-full bg-background text-text shadow-lg transition-colors duration-100 ease-in-out"
        >
          <motion.div
            key={resolvedTheme}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {resolvedTheme === "light" ? (
              <FiSun
                suppressHydrationWarning
                className="group-hover:scale-110"
              />
            ) : (
              <FiMoon
                suppressHydrationWarning
                className="group-hover:scale-110"
              />
            )}
          </motion.div>
        </button>
      </AnimatePresence>
    </div>
  );
}
