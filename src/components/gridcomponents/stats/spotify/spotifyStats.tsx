import { SiSpotify } from "react-icons/si";
import SpotifyData from "./spotifyData";
import Link from "next/link";
import SpotifyText from "./spotifyText";

export default async function SpotifyStats() {
  const { props } = await SpotifyData();

  const offlineList = [
    {
      song: "Shreksophone",
      artist: "Vonzual",
      url: "https://open.spotify.com/track/779lj5kPd4pH5TIIl8uzJ5",
      artistUrl: "https://open.spotify.com/artist/5QdEbQJ3ylBnc3gsIASAT5",
    },
    {
      song: "Stormvogel",
      artist: "Jungle By Night",
      url: "https://open.spotify.com/track/2PsvWrce7wIkRQD3BDSE4D",
      artistUrl: "https://open.spotify.com/artist/2StcyX3fmelae5agBHIkDO",
    },
    {
      song: "Wii sports theme",
      artist: "The Greatest Bits",
      url: "https://open.spotify.com/track/0hl8k492sfcfLQudNctEiR",
      artistUrl: "https://open.spotify.com/artist/2dB3VxAmEw5Dqewiha1oO1",
    },
    {
      song: "Wii Coopa Cape",
      artist: "AWCJ Media",
      url: "https://open.spotify.com/track/0hl8k492sfcfLQudNctEiR",
      artistUrl: "https://open.spotify.com/artist/1pFFdorEiw3aCOE3d2bAda",
    },
    {
      song: "Elevator Music",
      artist: "Mister Ethan",
      url: "https://open.spotify.com/track/6mRwhCZx2RLutsWC7RcCF8",
      artistUrl: "https://open.spotify.com/artist/03avwC0Ac0WDl5sPjWgA5h",
    },
  ];

  const longSongName =
    props.song?.indexOf("(") > 0
      ? props.song?.substring(0, props.song?.indexOf("("))
      : props.song;

  const songName =
    longSongName?.length > 28
      ? longSongName?.substring(0, 25) + "..."
      : longSongName;

  const NowPlaying = () => {
    return (
      <div>
        <span className="pb-[4px]">Now playing:</span>
        <br />
        <Link href={props.url} target="_blank" rel="norefferer">
          <SpotifyText>{songName}</SpotifyText>
        </Link>
        <span className="text-sm text-gray-400">
          by: <Link href={props.artistUrl}>{props.artist}</Link>
        </span>
        <br />
      </div>
    );
  };

  const randomSong =
    offlineList[Math.floor(Math.random() * offlineList.length)];

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

  const url = props.nowPlaying ? props.url : randomSong.url;
  return (
    <div className="flex h-full w-full flex-col p-8">
      <Link
        href={url}
        target="_blank"
        rel="noreferrer"
        aria-label="listen to this song on spotify"
      >
        <SiSpotify className="text-6xl text-primary" />
      </Link>
      <div className="mt-auto flex flex-col">
        {props.nowPlaying ? <NowPlaying /> : <LastPlayed />}
      </div>
    </div>
  );
}
