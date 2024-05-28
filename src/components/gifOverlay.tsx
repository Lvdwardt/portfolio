"use client";
import clsx from "clsx";
import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { BsPauseCircleFill, BsPlayCircleFill } from "react-icons/bs";

export default function GifOverlay() {
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
          playing ? "bg-transparent" : "bg-card"
        )}
      >
        {!playing && "GIF"}
      </div>
      <button
        className={clsx(
          "absolute bottom-6 right-6 z-10 h-12 w-12 transition-transform duration-300 ease-in-out hover:translate-y-0 peer-hover:translate-y-0",
          playing ? "translate-y-24" : "translate-y-0"
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
