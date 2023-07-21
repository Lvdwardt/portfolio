import MapboxContent from "@/components/map/smallMap";
import { Suspense } from "react";
import MapLoading from "./mapLoading";
import { sql } from "@vercel/postgres";

export default async function Mapbox() {
  const { rows } = await sql`SELECT * FROM location`;
  const location = {} as {
    latitude: number;
    longitude: number;
  };
  location.latitude = rows[0].latitude;
  location.longitude = rows[0].longitude;

  if (!location.latitude || !location.longitude) {
    console.log("no location found, using default");
    (location.latitude = 51.92735), (location.longitude = 5.5735);
  }
  const coords = {
    latitude: location.latitude,
    longitude: location.longitude,
  };

  return (
    <Suspense fallback={<MapLoading />}>
      {/* @ts-expect-error server-component */}
      <MapboxContent coords={coords} />
    </Suspense>
  );
}
