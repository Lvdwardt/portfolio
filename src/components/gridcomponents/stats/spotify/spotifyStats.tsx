import SpotifyData from "./spotifyData";
import Link from "next/link";
import SpotifyText from "./spotifyText";
import PlayMusic from "./playMusic";

export default async function SpotifyStats() {
  const { props } = await SpotifyData();

  const offlineList = [
    {
      song: "Shreksophone",
      artist: "Vonzual",
      url: "https://open.spotify.com/track/779lj5kPd4pH5TIIl8uzJ5",
      artistUrl: "https://open.spotify.com/artist/5QdEbQJ3ylBnc3gsIASAT5",
      previewUrl: "",
    },
    {
      song: "Stormvogel",
      artist: "Jungle By Night",
      url: "https://open.spotify.com/track/2PsvWrce7wIkRQD3BDSE4D",
      artistUrl: "https://open.spotify.com/artist/2StcyX3fmelae5agBHIkDO",
      previewUrl:
        "https://p.scdn.co/mp3-preview/e47ac58ee464abc22ae3c69c533be594b73bddf1?cid=47e7bc15290348cd8d6f8e5d6358c390",
    },
    {
      song: "Wii sports theme",
      artist: "The Greatest Bits",
      url: "https://open.spotify.com/track/0hl8k492sfcfLQudNctEiR",
      artistUrl: "https://open.spotify.com/artist/2dB3VxAmEw5Dqewiha1oO1",
      previewUrl:
        "https://p.scdn.co/mp3-preview/721028c84adcf9cf9c76ccb30b2f2026eecc3647?cid=47e7bc15290348cd8d6f8e5d6358c390",
    },
    {
      song: "Wii Coopa Cape",
      artist: "AWCJ Media",
      url: "https://open.spotify.com/track/0hl8k492sfcfLQudNctEiR",
      artistUrl: "https://open.spotify.com/artist/1pFFdorEiw3aCOE3d2bAda",
      previewUrl:
        "https://p.scdn.co/mp3-preview/5674df4fa9296605e80a56446cd8427be2fa7b38?cid=47e7bc15290348cd8d6f8e5d6358c390",
    },
    {
      song: "Elevator Music",
      artist: "Mister Ethan",
      url: "https://open.spotify.com/track/6mRwhCZx2RLutsWC7RcCF8",
      artistUrl: "https://open.spotify.com/artist/03avwC0Ac0WDl5sPjWgA5h",
      previewUrl:
        "https://p.scdn.co/mp3-preview/f31d12f195fc7387f7ebdda65805667f10a9ccca?cid=47e7bc15290348cd8d6f8e5d6358c390",
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

  const previewUrl = props.nowPlaying
    ? props.previewUrl
    : randomSong.previewUrl;

  return (
    <div className="group flex h-full w-full flex-col p-8">
      <PlayMusic previewUrl={previewUrl} nowPlaying={props.nowPlaying} />
      <div className="mt-auto flex flex-col">
        {props.nowPlaying ? <NowPlaying /> : <LastPlayed />}
      </div>
    </div>
  );
}
