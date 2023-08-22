import { type Metadata } from "next";
import useMapData from "./hooks/useMapData";
import PageContent from "./pageContent";
import { sql } from "@vercel/postgres";

export const metadata: Metadata = {
  title: "Travels",
  description:
    "On this page you can find out about one of my biggest passions: traveling.",
};

async function getStats() {
  const { rows } = await sql`SELECT * FROM travelstats`;
  const stats = {} as {
    countries: number;
    capitals: number;
    airports: number;
  };

  stats.countries = rows[0].countries;
  stats.capitals = rows[0].capitals;
  stats.airports = rows[0].airports;

  return stats;
}

export default async function Travels() {
  const stats = await getStats();

  const mapData = await useMapData();

  return <PageContent stats={stats} mapData={mapData} />;
}
