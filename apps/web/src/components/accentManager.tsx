"use client";

import { useEffect, useRef } from "react";

// LW logo SVG paths (from lw.svg) — used to generate a dynamic favicon
const LW_SVG_PATHS = `<g transform="translate(-2092.643 1708.232)"><g transform="translate(-2 -2)"><path d="M16.043,4H0A4,4,0,0,1-4,0,4,4,0,0,1,0-4H16.043a4,4,0,0,1,4,4A4,4,0,0,1,16.043,4Z" transform="translate(2114.284 -1637.201)"/><g><path d="M0,41.3a4,4,0,0,1-4-4V0A4,4,0,0,1,0-4,4,4,0,0,1,4,0V37.3A4,4,0,0,1,0,41.3Z" transform="translate(2098.643 -1674.5)"/><path d="M6.819,20.846a4,4,0,0,1-3.709-2.5L-3.708,1.5A4,4,0,0,1-1.5-3.708,4,4,0,0,1,3.708-1.5l6.818,16.845a4,4,0,0,1-3.706,5.5Z" transform="translate(2103.466 -1702.068)"/><path d="M6.819,20.846a4,4,0,0,1-3.709-2.5L-3.708,1.5A4,4,0,0,1-1.5-3.708,4,4,0,0,1,3.708-1.5l6.818,16.845a4,4,0,0,1-3.706,5.5Z" transform="translate(2133.947 -1702.068)"/><path d="M0,41.3A3.988,3.988,0,0,1-1.513,41,4,4,0,0,1-3.7,35.786l15.24-37.3A4,4,0,0,1,16.753-3.7a4,4,0,0,1,2.19,5.216L3.7,38.812A4,4,0,0,1,0,41.3Z" transform="translate(2118.707 -1702.068)"/><path d="M0,41.3A3.988,3.988,0,0,1-1.513,41,4,4,0,0,1-3.7,35.786l15.24-37.3A4,4,0,0,1,16.753-3.7a4,4,0,0,1,2.19,5.216L3.7,38.812A4,4,0,0,1,0,41.3Z" transform="translate(2149.188 -1702.231)"/></g></g></g>`;

const STORAGE_KEY = "portfolio-accent-hue";
const RAINBOW_KEY = "rainbow";

function updateFavicon(hue: number) {
  const color = `hsl(${hue}, 60%, 68%)`;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="73.786" height="73.031" viewBox="0 0 73.786 73.031" fill="${color}">${LW_SVG_PATHS}</svg>`;
  const encoded = `data:image/svg+xml,${encodeURIComponent(svg)}`;

  let link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
  }
  link.type = "image/svg+xml";
  link.href = encoded;
}

function applyHue(hue: number) {
  document.documentElement.style.setProperty("--hue", String(hue));
}

/**
 * Global accent color manager that lives in the root layout.
 * Handles rainbow animation and favicon updates across all pages.
 * The ColorPalette component communicates via a custom "accent-change" event.
 */
export default function AccentManager() {
  const rainbowHueRef = useRef(0);
  const modeRef = useRef<string | null>(null);

  useEffect(() => {
    // Read initial mode from localStorage
    const saved = localStorage.getItem(STORAGE_KEY);
    modeRef.current = saved;

    if (saved && saved !== RAINBOW_KEY) {
      const hue = Number.parseInt(saved, 10);
      if (!Number.isNaN(hue)) {
        applyHue(hue);
        updateFavicon(hue);
      }
    }

    // Listen for changes from ColorPalette
    const handleAccentChange = (e: Event) => {
      const detail = (e as CustomEvent).detail as { mode: string };
      modeRef.current = detail.mode;

      if (detail.mode !== RAINBOW_KEY) {
        const hue = Number.parseInt(detail.mode, 10);
        if (!Number.isNaN(hue)) {
          applyHue(hue);
          updateFavicon(hue);
        }
      }
    };

    window.addEventListener("accent-change", handleAccentChange);
    return () => window.removeEventListener("accent-change", handleAccentChange);
  }, []);

  // Rainbow animation — runs continuously when mode is "rainbow"
  useEffect(() => {
    let animationId: number;
    let lastTime: number | null = null;
    let lastFaviconHue = -1;

    const animate = (time: number) => {
      if (modeRef.current === RAINBOW_KEY) {
        if (lastTime !== null) {
          const delta = time - lastTime;
          rainbowHueRef.current =
            (rainbowHueRef.current + delta * 0.006) % 360;
          const roundedHue = Math.round(rainbowHueRef.current);
          applyHue(roundedHue);

          if (Math.abs(roundedHue - lastFaviconHue) >= 10) {
            updateFavicon(roundedHue);
            lastFaviconHue = roundedHue;
          }
        }
        lastTime = time;
      } else {
        lastTime = null;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return null;
}
