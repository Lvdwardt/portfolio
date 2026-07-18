import { type NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { parseBody } from "next-sanity/webhook";

// Node runtime: edge revalidate can mark cache STALE without a successful regen.
export const runtime = "nodejs";

function purge(tagOrPath: { tag?: string | null; route?: string | null }) {
  if (tagOrPath.tag) {
    revalidateTag(tagOrPath.tag);
  }
  if (tagOrPath.route) {
    revalidatePath(tagOrPath.route, "layout");
    revalidatePath(tagOrPath.route, "page");
  }
}

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  const route = request.nextUrl.searchParams.get("route") ?? "/";
  const tag = request.nextUrl.searchParams.get("tag");

  if (secret !== process.env.MY_SECRET_TOKEN) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  if (tag) {
    purge({ tag, route: route === "/" ? "/" : null });
    return NextResponse.json({ revalidated: true, tag, now: Date.now() });
  }

  purge({ route });
  return NextResponse.json({ revalidated: true, route, now: Date.now() });
}

export async function POST(req: NextRequest) {
  if (!process.env.MY_SECRET_TOKEN) {
    return new Response(
      "The `MY_SECRET_TOKEN` environment variable is required."
    );
  }
  try {
    const { body, isValidSignature } = await parseBody<{
      _type: string;
      slug?: string | undefined;
    }>(req, process.env.MY_SECRET_TOKEN);
    if (!isValidSignature) {
      return new Response("Invalid signature", { status: 401 });
    }

    if (!body?._type) {
      return new Response("Bad Request", { status: 400 });
    }

    revalidateTag(body._type);
    if (body.slug) {
      revalidateTag(`${body._type}:${body.slug}`);
    }

    // Homepage pulls about / projects / skills / location — purge the route too.
    if (
      body._type === "about" ||
      body._type === "projects" ||
      body._type === "skills" ||
      body._type === "location"
    ) {
      revalidatePath("/", "layout");
      revalidatePath("/", "page");
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
