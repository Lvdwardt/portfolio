import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
  // get the secret from the query
  const secret = request.nextUrl.searchParams.get("secret");
  const route = request.nextUrl.searchParams.get("route") ?? "/";
  // check if the secret is valid
  if (secret !== process.env.MY_SECRET_TOKEN) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  revalidatePath(route);

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
