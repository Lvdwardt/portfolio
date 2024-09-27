import { sanityFetch } from "s/lib/client";
import type { SanityDocument } from "next-sanity";
import { locationQuery } from "s/lib/queries";
import type { CurrentLocation } from "@/types";
import "@/styles/mapbox-gl.css";
import DynamicSmallMapbox from "@/components/map/dynamciSmallMap";

async function getData() {
  const { currentLocation } = await sanityFetch<
    SanityDocument<CurrentLocation>
  >(locationQuery, ["location"]);

  if (!currentLocation.lat || !currentLocation.lng) {
    (currentLocation.lat = 51.92735), (currentLocation.lng = 5.5735);
  }
  const coords = {
    latitude: currentLocation.lat,
    longitude: currentLocation.lng,
  };
  return coords;
}

export default async function Mapbox() {
  const coords = await getData();

  return <DynamicSmallMapbox coords={coords} />;
}
