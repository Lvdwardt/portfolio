import { NextRequest } from "next/server";

export default async function GET(request: NextRequest) {
  // `https://nominatim.openstreetmap.org/search.php?q=${city}&format=jsonv2&countrycodes=nl&polygon_geojson=1&polygon_threshold=0.00005}`

  return { status: 200, body: "Hello World" };
}
