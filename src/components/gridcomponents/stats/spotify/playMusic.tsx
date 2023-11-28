"use client";
import { SiSpotify } from "@react-icons/all-files/si/SiSpotify";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

type PlayMusicProps = { previewUrl?: string; nowPlaying?: boolean };

export default function PlayMusic({ nowPlaying, previewUrl }: PlayMusicProps) {
  // const audio = new Audio(`${previewUrl}.mp3` || "");
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!previewUrl) return;
    setAudio(new Audio(`${previewUrl}.mp3`));
  }, [previewUrl]);

  audio && (audio.loop = true);
  const audioRef = useRef(audio);

  const [clicked, setClicked] = useState(false);

  return (
    <button
      onMouseEnter={() => {
        if (!clicked || !audioRef.current) return;
        audioRef.current.play();
      }}
      onClick={() => {
        if (clicked || !audioRef.current) return;
        audioRef.current.play();
        setClicked(true);
      }}
      onMouseLeave={() => {
        if (!clicked || !audioRef.current) return;
        audioRef.current.pause();
      }}
      className={previewUrl ? "cursor-pointer" : "cursor-default"}
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
