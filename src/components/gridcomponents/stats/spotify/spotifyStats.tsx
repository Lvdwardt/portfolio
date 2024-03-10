"use client";
import type { SpotifyResponse } from "./spotify";
import Link from "next/link";
import SpotifyText from "./spotifyText";
import PlayMusic from "./playMusic";
import { useEffect, useState } from "react";

type OfflineSong = {
  song: string;
  artist: string;
  url: string;
  artistUrl: string;
  previewUrl: string;
};

type Props = SpotifyResponse & { randomSong: OfflineSong };

export default function SpotifyStats({
  props: initialProps,
  randomSong,
}: Props) {
  const [props, setProps] = useState(initialProps);

  useEffect(() => {
    const interval = setInterval(async () => {
      const props = await fetch("/api/spotify").then((res) => res.json());
      setProps(props);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const longSongName =
    props.song && props.song?.indexOf("(") > 0
      ? props.song?.substring(0, props.song?.indexOf("("))
      : props.song ?? "";

  const songName =
    longSongName?.length > 28
      ? longSongName?.substring(0, 25) + "..."
      : longSongName;

  const NowPlaying = () => {
    return (
      <div>
        <span className="pb-[4px]">Now playing:</span>
        <br />
        <Link href={props.url ?? ""} target="_blank" rel="norefferer">
          <SpotifyText>{songName}</SpotifyText>
        </Link>
        <span className="text-sm text-gray-400">
          by:{" "}
          <Link href={props.artistUrl ?? ""} target="_blank" rel="norefferer">
            {props.artist}
          </Link>
        </span>
        <br />
      </div>
    );
  };

  const LastPlayed = () => {
    return (
      <div>
        <span className="pb-[1px]">Offline, Last played:</span>
        <br />
        <Link href={randomSong.url}>
          <span className="text-2xl font-bold">{randomSong.song}</span>
        </Link>
        <br />
        <span className="font-silka text-sm text-gray-400">
          by: <Link href={randomSong.artistUrl}>{randomSong.artist}</Link>
        </span>
        <br />
      </div>
    );
  };

  const previewUrl = props.nowPlaying
    ? props.previewUrl
    : randomSong.previewUrl;

  return (
    <div className="group flex h-full w-full flex-col p-8">
      <PlayMusic
        previewUrl={previewUrl}
        nowPlaying={props.nowPlaying}
        key={previewUrl}
      />
      <div className="mt-auto flex flex-col">
        {props.nowPlaying ? <NowPlaying /> : <LastPlayed />}
      </div>
    </div>
  );
}
