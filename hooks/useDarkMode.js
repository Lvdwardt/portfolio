import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function useDarkMode() {
  const [mode, setmode] = useState("dark");
  const { theme, setTheme } = useTheme();

  const colormode = mode === "light" ? "dark" : "light";
  useEffect(
    () => {
      const root = window.document.documentElement;
      root.classList.remove(colormode);
      root.classList.add(mode);
    },
    [mode],

    setTheme(mode)
  );
  return [colormode, setmode];
}
