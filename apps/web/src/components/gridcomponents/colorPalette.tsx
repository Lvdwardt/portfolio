"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import { cn } from "@/utils/utils";

const palettes = [
  { name: "Rose", hue: 340 },
  { name: "Coral", hue: 15 },
  { name: "Ocean", hue: 210 },
  { name: "Violet", hue: 270 },
  { name: "Crimson", hue: 0 },
] as const;

const TOTAL_OPTIONS = palettes.length + 1; // +1 for Rainbow

// Full hue spectrum at our actual saturation/lightness values
const PALETTE_GRADIENT =
  "conic-gradient(hsl(0,65%,58%), hsl(60,65%,58%), hsl(120,65%,58%), hsl(180,65%,58%), hsl(240,65%,58%), hsl(300,65%,58%), hsl(360,65%,58%))";
const STORAGE_KEY = "portfolio-accent-hue";
const RAINBOW_KEY = "rainbow";

type AccentMode = number | "rainbow";

function dispatchAccentChange(mode: string) {
  window.dispatchEvent(new CustomEvent("accent-change", { detail: { mode } }));
}

export default function ColorPalette({ className }: { className?: string }) {
  const [activeMode, setActiveMode] = useState<AccentMode | null>(null);
  const [mounted, setMounted] = useState(false);
  const swatchRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Init from localStorage
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === RAINBOW_KEY) {
      setActiveMode("rainbow");
    } else if (saved) {
      const hue = Number.parseInt(saved, 10);
      if (!Number.isNaN(hue)) {
        setActiveMode(hue);
      }
    } else {
      const computed = getComputedStyle(document.documentElement)
        .getPropertyValue("--hue")
        .trim();
      if (computed) {
        setActiveMode(Number.parseInt(computed, 10));
      }
    }
  }, []);

  const handleSelectHue = useCallback((hue: number) => {
    setActiveMode(hue);
    localStorage.setItem(STORAGE_KEY, String(hue));
    dispatchAccentChange(String(hue));
  }, []);

  const handleSelectRainbow = useCallback(() => {
    setActiveMode("rainbow");
    localStorage.setItem(STORAGE_KEY, RAINBOW_KEY);
    dispatchAccentChange(RAINBOW_KEY);
  }, []);

  const activeIndex =
    activeMode === "rainbow"
      ? palettes.length // Rainbow is the last item
      : palettes.findIndex((p) => p.hue === activeMode);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      let nextIndex: number | null = null;

      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
          e.preventDefault();
          nextIndex = (index + 1) % TOTAL_OPTIONS;
          break;
        case "ArrowLeft":
        case "ArrowUp":
          e.preventDefault();
          nextIndex = (index - 1 + TOTAL_OPTIONS) % TOTAL_OPTIONS;
          break;
        case " ":
        case "Enter":
          e.preventDefault();
          if (index === palettes.length) {
            handleSelectRainbow();
          } else {
            handleSelectHue(palettes[index].hue);
          }
          return;
        default:
          return;
      }

      if (nextIndex !== null) {
        if (nextIndex === palettes.length) {
          handleSelectRainbow();
        } else {
          handleSelectHue(palettes[nextIndex].hue);
        }
        swatchRefs.current[nextIndex]?.focus();
      }
    },
    [handleSelectHue, handleSelectRainbow]
  );

  const isRainbow = mounted && activeMode === "rainbow";
  const glowHue = activeMode === "rainbow" ? 0 : (activeMode ?? 340);

  return (
    <div
      className={cn(
        "group relative flex h-full w-full flex-col overflow-hidden rounded-4xl bg-card p-8",
        className
      )}
    >
      {/* Ambient glow — top left */}
      <div
        className="pointer-events-none absolute -left-8 -top-8 h-40 w-40 rounded-full opacity-20 blur-3xl"
        style={{
          background: isRainbow
            ? PALETTE_GRADIENT
            : `hsl(${glowHue}, 70%, 50%)`,
        }}
      />

      {/* Icon */}
      <svg
        className="text-6xl text-primary"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67A2.5 2.5 0 0 1 12 22zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5a.54.54 0 0 0-.14-.35c-.41-.46-.63-1.05-.63-1.65a2.5 2.5 0 0 1 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z" />
        <circle cx="6.5" cy="11.5" r="1.5" />
        <circle cx="9.5" cy="7.5" r="1.5" />
        <circle cx="14.5" cy="7.5" r="1.5" />
        <circle cx="17.5" cy="11.5" r="1.5" />
      </svg>

      {/* Bottom content */}
      <div className="mt-auto flex flex-col" id="accent-label">
        <span className="pb-[1px] font-silka">Accent color:</span>
        <div
          role="radiogroup"
          aria-labelledby="accent-label"
          className="grid grid-cols-3 gap-2 pt-3 sm:gap-2.5"
        >
          {/* Static color swatches */}
          {palettes.map((palette, index) => {
            const isActive = mounted && activeMode === palette.hue;
            return (
              <div
                key={palette.name}
                ref={(el) => {
                  swatchRefs.current[index] = el;
                }}
                role="radio"
                aria-checked={isActive}
                aria-label={palette.name}
                tabIndex={
                  isActive ||
                  (!mounted && index === 0) ||
                  (mounted && activeIndex === -1 && index === 0)
                    ? 0
                    : -1
                }
                onClick={() => handleSelectHue(palette.hue)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={cn(
                  "relative h-7 w-full cursor-pointer rounded-full transition-all duration-300 ease-out sm:h-8",
                  "hover:scale-110 active:scale-95",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                  isActive && "scale-110"
                )}
                style={{
                  backgroundColor: `hsl(${palette.hue}, 65%, 58%)`,
                  boxShadow: isActive
                    ? `0 0 0 2px var(--card), 0 0 0 3.5px hsl(${palette.hue}, 65%, 58%)`
                    : undefined,
                }}
              >
                {isActive && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="h-3 w-3 drop-shadow-sm sm:h-3.5 sm:w-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}

          {/* Rainbow swatch */}
          <div
            ref={(el) => {
              swatchRefs.current[palettes.length] = el;
            }}
            role="radio"
            aria-checked={isRainbow}
            aria-label="Rainbow"
            tabIndex={isRainbow ? 0 : -1}
            onClick={handleSelectRainbow}
            onKeyDown={(e) => handleKeyDown(e, palettes.length)}
            className={cn(
              "relative h-7 w-full cursor-pointer rounded-full transition-all duration-300 ease-out sm:h-8",
              "hover:scale-110 active:scale-95",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
              isRainbow && "scale-110"
            )}
            style={{
              background: PALETTE_GRADIENT,
              boxShadow: isRainbow
                ? "0 0 0 2px var(--card), 0 0 0 3.5px hsl(280, 65%, 58%)"
                : undefined,
            }}
          >
            {isRainbow && (
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="h-3 w-3 drop-shadow-sm sm:h-3.5 sm:w-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
