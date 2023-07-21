import { sql } from "@vercel/postgres";
import type { Geometry } from "geojson";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

interface Result {
  display_name: string;
  geojson: {
    type: Geometry["type"];
    coordinates: number[][];
  };
}

export async function GET(request: NextRequest) {
  const secret = request.headers.get("secret");
  if (secret !== process.env.MY_SECRET_TOKEN) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }
  const { rows } = await sql`SELECT * FROM cities`;

  return NextResponse.json({ cities: rows });
}

export async function POST(request: NextRequest) {
  // get the secret from the query
  const secret = request.nextUrl.searchParams.get("secret");
  // check if the secret is valid
  if (secret !== process.env.MY_SECRET_TOKEN) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }
  const city = request.nextUrl.searchParams.get("city");
  const country = request.nextUrl.searchParams.get("country");
  if (!city || !country) {
    return NextResponse.json(
      { message: "Invalid city or country" },
      { status: 401 }
    );
  }

  // check if city is already in database
  const { rows: cityRows } =
    await sql`SELECT * FROM cities WHERE name = ${city}`;

  if (cityRows.length > 0) {
    return NextResponse.json(
      { message: "City already in database" },
      { status: 400 }
    );
  }

  function sanitizePolygonResult(
    results: Result[]
  ): { name: string; geojson: string } | undefined {
    const polygon = results.find(
      (r) =>
        r.geojson &&
        (r.geojson.type === "Polygon" || r.geojson.type === "MultiPolygon")
    );

    if (polygon) {
      return {
        name: polygon.display_name,
        // geojson: polygon.geojson,
        geojson: JSON.stringify(polygon.geojson),
      };
    }
  }

  const results = await fetch(
    `https://nominatim.openstreetmap.org/search.php?q=${city}&format=jsonv2&countrycodes=${country}&polygon_geojson=1&polygon_threshold=0.00005`
  ).then((res) => res.json());

  const result = sanitizePolygonResult(results);

  if (!result) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 400 }
    );
  }

  // add new result to database
  await sql`
  INSERT INTO cities (name, country, display_name, geojson)
  VALUES (${city}, ${country}, ${result.name}, ${result.geojson})
  ON CONFLICT (name) DO UPDATE SET geojson = ${result.geojson}
  `;

  const { rows } = await sql`SELECT * FROM cities WHERE name = ${city}`;

  const display_name = rows[0].display_name;

  revalidatePath("/travels");

  return NextResponse.json({
    message: `success, added ${display_name} to the DB`,
  });
}
