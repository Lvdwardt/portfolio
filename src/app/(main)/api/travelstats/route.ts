import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
  const secret = request.headers.get("secret");
  if (secret !== process.env.MY_SECRET_TOKEN) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }
  const { rows } = await sql`SELECT * FROM travelstats`;
  const stats = {} as {
    countries: number;
    capitals: number;
    airports: number;
  };
  stats.countries = rows[0].countries;
  stats.capitals = rows[0].capitals;
  stats.airports = rows[0].airports;
  return NextResponse.json({ stats: rows });
}

export async function POST(request: NextRequest) {
  const secret = request.headers.get("secret");

  if (secret !== process.env.MY_SECRET_TOKEN) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  const stats = JSON.parse(request.headers.get("stats") ?? "{}");

  await sql`CREATE TABLE IF NOT EXISTS travelstats (
    countries INTEGER,
    capitals INTEGER,
    airports INTEGER
    )`;

  await sql`UPDATE travelstats SET countries = ${stats.countries}, capitals = ${stats.capitals}, airports = ${stats.airports}`
    .then(() => {
      revalidatePath("/travels");
    })
    .catch((e) => {
      console.log(e, "error");
    });

  return NextResponse.json({ stats: stats });
}
