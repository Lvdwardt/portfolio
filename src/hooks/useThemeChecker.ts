"use client";
import { useTheme } from "next-themes";

export default function useThemeChecker() {
  const { resolvedTheme, setTheme } = useTheme();
  if (typeof document === "undefined" || typeof window === "undefined") return;
  const root = document.documentElement;
  const dataTheme = root.getAttribute("data-theme");

  if (!resolvedTheme || !setTheme) return;
  if (dataTheme !== null && resolvedTheme !== dataTheme) {
    setTheme(dataTheme ?? "dark");
  }
}
