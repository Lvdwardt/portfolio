export default async function SpotifyData() {
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

  const nowPlaying = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${data.access_token}`,
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 60 * 2,
      },
    }
  );

  if (nowPlaying.status === 204) {
    return {
      props: {
        isPlaying: false,
      },
    };
  } else {
    const nowPlayingData = await nowPlaying.json();

    return {
      props: {
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
}
