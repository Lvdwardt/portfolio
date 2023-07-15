import MapboxContent from "@/components/map/smallMap";
import { headers } from "next/headers";
import { Suspense } from "react";
import MapLoading from "./mapLoading";

export default async function Mapbox() {
  const secret = process.env.MY_SECRET_TOKEN;
  const host = headers().get("host");
  const res = await fetch(`http://${host}/api/location`, {
    method: "GET",
    headers: {
      secret: secret || "",
    },
    next: {
      revalidate: 60 * 60 * 24 * 7,
    },
  });
  const data = await res.json();
  const location = data.location as [{ latitude: number; longitude: number }];
  if (!location[0].latitude || !location[0].longitude) {
    (location[0].latitude = 51.92735), (location[0].longitude = 5.5735);
  }
  const coords = {
    latitude: location[0].latitude,
    longitude: location[0].longitude,
  };

  return (
    <Suspense fallback={<MapLoading />}>
      {/* @ts-expect-error server-component */}
      <MapboxContent coords={coords} />
    </Suspense>
  );
}
