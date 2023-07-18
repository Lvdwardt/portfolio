import { type Metadata } from "next";
import { headers } from "next/headers";
import useMapData from "./hooks/useMapData";
import PageContent from "./pageContent";

export const metadata: Metadata = {
  title: "Travels",
  description:
    "On this page you can find out about one of my biggest passions: traveling.",
};

export default async function Travels() {
  const secret = process.env.MY_SECRET_TOKEN;
  const host = headers().get("host");
  const res = await fetch(`http://${host}/api/travelstats`, {
    method: "GET",
    headers: {
      secret: secret || "",
    },
    // once every week
    next: {
      revalidate: 60 * 60 * 24 * 7,
    },
  });

  const data = await res.json();
  const stats = data.stats[0] as {
    countries: number;
    capitals: number;
    airports: number;
  };

  const mapData = await useMapData();

  return <PageContent stats={stats} mapData={mapData} />;
}
