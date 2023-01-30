import type React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Toggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    setTheme("dark");
    root.setAttribute("data-theme", "dark");
    setMounted(true);
  }, []);
  if (!mounted) return <></>;

  function onToggle() {
    const root = document.documentElement;
    setTheme(resolvedTheme === "light" ? "dark" : "light");
    // add data-theme attribute to html
    switch (resolvedTheme) {
      case "light":
        root.setAttribute("data-theme", "dark");
        break;
      case "dark":
        root.setAttribute("data-theme", "light");
        break;
      default:
        root.setAttribute("data-theme", "light");
        break;
    }
  }

  return (
    <div className=" relative flex items-center justify-center overflow-hidden rounded-3xl bg-greenlight dark:bg-[#8D5BE9] sm:order-3 xl:order-4">
      <div className="absolute  z-0 h-80 w-80 translate-x-[-12rem] translate-y-32 rounded-t-full bg-pinklight dark:bg-[#CE81C7]" />
      <span
        onClick={onToggle}
        className="curser-pointer z-10 flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 shadow-lg transition-all duration-300 ease-in dark:bg-[#1F295B] dark:text-white"
      >
        {resolvedTheme === "light" ? (
          <svg
            className="h-10 w-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        ) : (
          <svg
            className="h-10 w-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </span>
    </div>
  );
}
