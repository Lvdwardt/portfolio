"use client";
import { SiSpotify } from "@react-icons/all-files/si/SiSpotify";
import clsx from "clsx";
import { Ref, RefObject, useEffect, useRef, useState } from "react";

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
        console.log("enter");
        if (!clicked) return;
        console.log("play");
        audioRef?.current?.play();
      }}
      onClick={() => {
        if (clicked) return;
        audioRef?.current?.play();
        setClicked(true);
      }}
      onMouseLeave={() => {
        if (!clicked) return;
        audioRef?.current?.pause();
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
