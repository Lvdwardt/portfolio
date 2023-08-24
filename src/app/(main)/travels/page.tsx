import { type Metadata } from "next";
import useMapData from "./hooks/useMapData";
import PageContent from "./pageContent";
import { cachedClient } from "s/lib/client";
import { SanityDocument } from "next-sanity";
import { travelStatsQuery } from "s/lib/queries";
import { TravelStats } from "@/types";

export const metadata: Metadata = {
  title: "Travels",
  description:
    "On this page you can find out about one of my biggest passions: traveling.",
};

export default async function Travels() {
  const travelStats = await cachedClient<SanityDocument<TravelStats>>(
    travelStatsQuery
  );
  const mapData = await useMapData();

  return <PageContent stats={travelStats} mapData={mapData} />;
}
