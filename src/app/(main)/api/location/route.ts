import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET(request: NextRequest) {
  const secret = request.headers.get("secret");
  if (secret !== process.env.MY_SECRET_TOKEN) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }
  const { rows } = await sql`SELECT * FROM location`;
  const location = {} as {
    latitude: number;
    longitude: number;
  };
  location.latitude = rows[0].latitude;
  location.longitude = rows[0].longitude;
  return NextResponse.json({ location: rows });
}

export async function POST(request: NextRequest) {
  const secret = request.headers.get("secret");

  if (secret !== process.env.MY_SECRET_TOKEN) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  const location = JSON.parse(request.headers.get("location") ?? "{}");

  location.latitude = location.latitude.toFixed(6);
  location.longitude = location.longitude.toFixed(6);

  await sql`UPDATE location SET latitude = ${location.latitude}, longitude = ${location.longitude}`.catch(
    (e) => {
      console.log(e, "error");
    }
  );

  return NextResponse.json({ location: location });
}
