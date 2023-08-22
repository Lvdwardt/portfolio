import MapboxContent from "@/components/map/smallMap";
import { sql } from "@vercel/postgres";

async function getData() {
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
  return coords;
}

export default async function Mapbox() {
  const coords = await getData();

  return <MapboxContent coords={coords} />;
}
