import { NextRequest, NextResponse } from "next/server";
// TODO: wrtie this api route and add a front-end to update location
// get current location lat and lng
// trim to 4 decimal places
// update location in vercel edge config db
// revalidate with /api/revalidate
// return success)

export async function GET(request: NextRequest) {
  return NextResponse.json({ message: "TODO: update location" });
}
