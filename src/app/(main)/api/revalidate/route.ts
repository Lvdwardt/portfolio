import { type NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { parseBody } from "next-sanity/webhook";

const revalidateSecret = process.env.MY_SECRET_TOKEN;

export async function GET(request: NextRequest) {
  // get the secret from the query
  const secret = request.nextUrl.searchParams.get("secret");
  const route = request.nextUrl.searchParams.get("route") ?? "/";
  const tag = request.nextUrl.searchParams.get("tag");
  // check if the secret is valid
  if (secret !== revalidateSecret) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  if (tag) {
    revalidateTag(tag);
    return NextResponse.json({ revalidated: true, now: Date.now() });
  }

  revalidatePath(route);

  return NextResponse.json({ revalidated: true, now: Date.now() });
}

export async function POST(req: NextRequest) {
  if (!revalidateSecret) {
    return new Response(
      "The `MY_SECRET_TOKEN` environment variable is required."
    );
  }
  try {
    const { body, isValidSignature } = await parseBody<{
      _type: string;
      slug?: string | undefined;
    }>(req, revalidateSecret);
    if (!isValidSignature) {
      const message = "Invalid signature";
      return new Response(message, { status: 401 });
    }

    if (!body?._type) {
      return new Response("Bad Request", { status: 400 });
    }

    revalidateTag(body._type);
    if (body.slug) {
      revalidateTag(`${body._type}:${body.slug}`);
    }
    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
      body,
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(err);
      return new Response(err.message, { status: 500 });
    }
    return new Response("Unknown error", { status: 500 });
  }
}
