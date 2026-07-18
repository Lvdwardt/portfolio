"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import SpotifyText from "./spotifyText";
import PlayMusic from "./playMusic";
import type { OfflineSong } from "./songs";
import { favorites } from "./songs";

export default function SpotifyStats() {
  const [song, setSong] = useState<OfflineSong | null>(null);

  useEffect(() => {
    setSong(favorites[Math.floor(Math.random() * favorites.length)]);
  }, []);

  if (!song) {
    return <div className="h-full w-full" />;
  }

  const longSongName =
    song.song.indexOf("(") > 0
      ? song.song.substring(0, song.song.indexOf("("))
      : song.song;

  const songName =
    longSongName.length > 28
      ? longSongName.substring(0, 25) + "..."
      : longSongName;

  return (
    <div className="group flex h-full w-full flex-col p-8">
      <PlayMusic previewUrl={song.previewUrl} key={song.previewUrl} />
      <div className="mt-auto flex flex-col">
        <span className="pb-[4px] font-silka text-sm text-gray-400">
          A random song I like — click it
        </span>
        <Link href={song.url} target="_blank" rel="noreferrer">
          <SpotifyText>{songName}</SpotifyText>
        </Link>
        <span className="font-silka text-sm text-gray-400">
          by:{" "}
          <Link href={song.artistUrl} target="_blank" rel="noreferrer">
            {song.artist}
          </Link>
        </span>
      </div>
    </div>
  );
}
