import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
  // get the secret from the query
  const secret = request.nextUrl.searchParams.get("secret");
  // check if the secret is valid
  if (secret !== process.env.MY_SECRET_TOKEN) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }
  //revalidate "/"
  revalidatePath("/");

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
