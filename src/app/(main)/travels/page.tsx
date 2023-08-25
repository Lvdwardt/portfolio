import { type Metadata } from "next";
import useMapData from "./hooks/useMapData";
import PageContent from "./pageContent";
import { getSanityData } from "s/lib/client";
import { SanityDocument } from "next-sanity";
import { travelStatsQuery } from "s/lib/queries";
import { TravelStats } from "@/types";
import About from "@/components/about";

export const metadata: Metadata = {
  title: "Travels",
  description:
    "On this page you can find out about one of my biggest passions: traveling.",
};

export default async function Travels() {
  const travelStats = await getSanityData<SanityDocument<TravelStats>>(
    travelStatsQuery,
    ["travelStats"]
  );
  const mapData = await useMapData();

  // @ts-expect-error server-component
  const about = <About />;

  return <PageContent stats={travelStats} mapData={mapData} about={about} />;
}
