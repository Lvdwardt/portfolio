import MapboxContent from "@/components/map/smallMap";
import { normalClient } from "s/lib/client";
import type { SanityDocument } from "next-sanity";
import { locationQuery } from "s/lib/queries";
import type { CurrentLocation } from "@/types";

async function getData() {
  const { currentLocation } = await normalClient<
    SanityDocument<CurrentLocation>
  >(locationQuery);

  if (!currentLocation.lat || !currentLocation.lng) {
    console.log("no location found, using default");
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

  return <MapboxContent coords={coords} />;
}
