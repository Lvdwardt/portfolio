"use client";
import clsx from "clsx";
import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { BsPauseCircleFill, BsPlayCircleFill } from "react-icons/bs";
import { FaSpinner } from "react-icons/fa";

export default function GifOverlay({ isLoading }: { isLoading?: boolean }) {
  const reduceMotion = useReducedMotion();
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setPlaying(!reduceMotion);
  }, [reduceMotion]);

  return (
    <>
      <div
        className={clsx(
          "peer absolute inset-0 flex  h-full items-center justify-center text-4xl font-bold text-primary transition-all duration-300 ease-in-out",
          playing ? "bg-transparent" : "bg-card",
          isLoading && "!bg-card"
        )}
      >
        {isLoading && (
          <>
            <span>Loading GIF</span>
            <div className="ml-4 h-6 w-6 animate-spin rounded-full border-b-2 border-current" />
          </>
        )}
        {!playing && "GIF"}
      </div>
      <button
        className={clsx(
          "absolute bottom-6 right-6 z-10 h-12 w-12 transition-transform duration-300 ease-in-out hover:translate-y-0 peer-hover:translate-y-0",
          playing ? "translate-y-24" : "translate-y-0",
          isLoading && "!translate-y-24"
        )}
        onClick={() => setPlaying(!playing)}
        aria-label={playing ? "pause" : "play"}
      >
        {playing ? (
          <BsPauseCircleFill className="h-12 w-12 text-primary" />
        ) : (
          <BsPlayCircleFill className="h-12 w-12 text-primary" />
        )}
      </button>
    </>
  );
}
