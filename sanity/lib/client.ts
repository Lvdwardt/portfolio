import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn } from "../env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

export const normalClient = client.fetch.bind(client);

export async function getSanityData<T>(
  query: string,
  tags: string[],
  params?: Record<string, string>
): Promise<T> {
  const res = await fetch(
    `https://${projectId}.api.sanity.io/v2021-06-07/data/query/${dataset}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        params,
      }),
      cache: "force-cache",
      next: {
        tags: ["all", ...tags],
      },
    }
  ).then((res) => res.json());
  return res.result;
}
