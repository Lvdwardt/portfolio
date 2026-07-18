import { createClient } from "next-sanity";
import type { QueryParams } from "@sanity/client";
import { apiVersion, dataset, projectId, useCdn } from "../env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

export const token = process.env.SANITY_READ_TOKEN;

export async function sanityFetch<QueryResponse>(
  query: string,
  tags: string[],
  params: QueryParams = {}
): Promise<QueryResponse> {
  const isDev = process.env.NODE_ENV === "development";

  return client.fetch<QueryResponse>(query, params, {
    // Dev: always hit Sanity so Studio edits show up without manual cache clears.
    // Prod: force-cache + tags for on-demand revalidation.
    ...(isDev
      ? { cache: "no-store" as const }
      : {
          cache: "force-cache" as const,
          next: { tags },
        }),
  });
}
