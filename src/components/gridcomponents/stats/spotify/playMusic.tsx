"use client";
import { SiSpotify } from "react-icons/si";
import clsx from "clsx";
import { RefObject, useEffect, useState } from "react";

type PlayMusicProps = { previewUrl?: string; nowPlaying?: boolean };

export default function PlayMusic({ nowPlaying, previewUrl }: PlayMusicProps) {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [audioRef, setAudioRef] = useState<RefObject<HTMLAudioElement> | null>(
    null
  );

  useEffect(() => {
    if (!previewUrl) return;
    setAudio(new Audio(`${previewUrl}.mp3`));
  }, []);

  useEffect(() => {
    if (!audio || audioRef) return;
    setAudioRef({ current: audio });
  }, [audio, audioRef]);

  audio && (audio.loop = true);

  const [clicked, setClicked] = useState(false);

  return (
    <button
      onMouseEnter={() => {
        if (!clicked) return;
        audioRef?.current?.play();
      }}
      onClick={() => {
        if (audioRef?.current?.paused) {
          audioRef?.current?.play();
        } else {
          audioRef?.current?.pause();
        }
        if (clicked) return;
        setClicked(true);
      }}
      onMouseLeave={() => {
        if (!clicked) return;
        audioRef?.current?.pause();
      }}
      className={clsx(
        "h-min w-min  animate-delay-[5000ms] animate-duration-[800ms] animate-once group-hover:scale-110",
        previewUrl ? "cursor-pointer" : "cursor-default",
        !clicked && "animate-pulse"
      )}
    >
      <SiSpotify
        className={clsx(
          "text-6xl text-primary animate-duration-[5000ms] hover:animate-duration-[5000ms]",
          nowPlaying && "animate-spin",
          previewUrl && clicked && "cursor-pointer hover:animate-spin"
        )}
      />
    </button>
  );
}
