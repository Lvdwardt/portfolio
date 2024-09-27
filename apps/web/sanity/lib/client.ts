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
  return client.fetch<QueryResponse>(query, params, {
    cache: "force-cache",
    next: {
      tags,
    },
  });
}
