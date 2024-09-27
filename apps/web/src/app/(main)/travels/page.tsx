import { type Metadata } from "next";
import useMapData from "./hooks/useMapData";
import PageContent from "./pageContent";
import About from "@/components/about/about";

export const metadata: Metadata = {
  title: "Travels",
  description:
    "On this page you can find out about one of my biggest passions: traveling.",
};

export default async function Travels() {
  const mapData = await useMapData();

  const about = <About />;

  return <PageContent mapData={mapData} about={about} />;
}
