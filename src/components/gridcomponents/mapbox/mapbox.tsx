import MapboxContent from "@/components/map/map";
import { headers } from "next/headers";
import { Suspense } from "react";

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

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* @ts-expect-error server-component */}
      <MapboxContent
        coords={{
          latitude: location[0].latitude,
          longitude: location[0].longitude,
        }}
      />
    </Suspense>
  );
}
