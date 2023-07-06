import dynamic from "next/dynamic";
import { get } from "@vercel/edge-config";

const MapboxContent = dynamic(() => import("./mapboxContent"));

export default async function Mapbox() {
  const location = (await get("location")) as {
    latitude: number;
    longitude: number;
  };

  let { latitude, longitude } = location;

  if (!latitude || !longitude) {
    (latitude = 51.92735), (longitude = 5.5735);
  }

  return <MapboxContent coords={{ latitude, longitude }} />;
}
