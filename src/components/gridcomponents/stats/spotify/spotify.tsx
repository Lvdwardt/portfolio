import SpotifyStats from "./spotifyStats";

export interface SpotifyResponse {
  props: {
    isPlaying: boolean;
    minutes_ago?: number;
    nowPlaying?: boolean;
    song?: string;
    artist?: string;
    artistUrl?: string;
    url?: string;
    previewUrl?: string;
  };
}

export default async function Spotify() {
  const data = await getToken();
  const songData = await getNowPlaying(data.access_token);
  const offlineList = [
    {
      song: "Shreksophone",
      artist: "Vonzual",
      url: "https://open.spotify.com/track/779lj5kPd4pH5TIIl8uzJ5",
      artistUrl: "https://open.spotify.com/artist/5QdEbQJ3ylBnc3gsIASAT5",
      previewUrl: "/sounds/shreksophone",
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

  const randomSong =
    offlineList[Math.floor(Math.random() * offlineList.length)];

  return <SpotifyStats props={songData.props} randomSong={randomSong} />;
}

const getToken = async () => {
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refresh_token || "",
    }).toString(),
    next: {
      revalidate: 60 * 60,
    },
  });

  if (!response.ok) {
    return {
      props: {
        isPlaying: false,
      },
    };
  }

  const data = await response.json();

  return data;
};

const getNowPlaying = async (token: string) => {
  const nowPlaying = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 60 * 2,
      },
    }
  );

  if (nowPlaying.status === 204) {
    console.log("No song playing");
    return {
      props: {
        isPlaying: false,
      },
    };
  } else {
    const nowPlayingData = await nowPlaying.json();

    return {
      props: {
        isPlaying: true,
        minutes_ago: Math.floor(
          (Date.now() - nowPlayingData.timestamp) / 60000
        ),
        nowPlaying: nowPlayingData.is_playing,
        song: nowPlayingData?.item?.name ? nowPlayingData.item.name : "Unknown",
        artist: nowPlayingData?.item?.artists[0]?.name || "Unknown",
        artistUrl:
          nowPlayingData?.item?.artists[0]?.external_urls?.spotify || "",
        url: nowPlayingData?.item?.external_urls?.spotify || "",
        previewUrl: nowPlayingData?.item?.preview_url || "",
      },
    };
  }
};
