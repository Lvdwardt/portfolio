"use client";
import ToggleTheme from "@/hooks/toggleTheme";
import { useTheme } from "next-themes";
import useThemeChecker from "@/hooks/useThemeChecker";

export default function SwitchColor() {
  const { resolvedTheme, setTheme } = useTheme();
  useThemeChecker();

  return (
    <button
      className="absolute left-8 top-5 z-50 h-28 w-20 cursor-pointer"
      onClick={() => {
        ToggleTheme({ resolvedTheme, setTheme });
      }}
    ></button>
  );
}
