"use client";
import { startTransition, useEffect, useState } from "react";

export default function useCenter() {
  const [width, setWidth] = useState(0);

  const bigScreen = width > 640;

  useEffect(() => {
    setWidth(window.innerWidth);
    function setScrollVar() {
      const htmlElement = document.documentElement;
      const percentOfScreenheightScrolled =
        htmlElement.scrollTop / htmlElement.clientHeight;

      const windowHeight = window.innerHeight;

      const minHeight = windowHeight / 9.11;

      const scroll = Math.min(
        Math.max(percentOfScreenheightScrolled * (windowHeight / 8.7) - 7.5, 0),
        minHeight
      );
      console.log(windowHeight / 9.11);

      const width = Math.max(590, 895 - scroll * 7.6) + "px";

      htmlElement.style.setProperty("--scroll", scroll + "%");
      htmlElement.style.setProperty("--width", width);
    }
    setScrollVar();
    // add event listener for resize
    window.addEventListener("resize", () => {
      setScrollVar();
      startTransition(() => {
        setWidth(window.innerWidth);
      });
    });
    // add event listener for scroll
    window.addEventListener("scroll", () => {
      setScrollVar();
    });
    // remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", () => {
        setScrollVar();
      });
      window.removeEventListener("scroll", () => {
        setScrollVar();
      });
    };
  }, []);

  return bigScreen;
}
