import { createClient, groq } from "next-sanity";
import type { QueryParams } from "@sanity/client";
import { apiVersion, dataset, projectId, useCdn } from "../env";
import { draftMode } from "next/headers";

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
  params?: QueryParams
): Promise<QueryResponse> {
  const isDraftMode = draftMode().isEnabled;
  if (isDraftMode && !token) {
    throw new Error(
      "The `SANITY_READ_TOKEN` environment variable is required."
    );
  }

  return client.fetch<QueryResponse>(query, params, {
    cache: "force-cache",
    ...(isDraftMode && {
      cache: undefined,
      token: token,
      perspective: "previewDrafts",
    }),
    next: {
      ...(isDraftMode && { revalidate: 30 }),
      tags,
    },
  });
}
