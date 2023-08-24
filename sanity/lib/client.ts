import { createClient } from "next-sanity";
import { cache } from "react";

import { apiVersion, dataset, projectId, useCdn } from "../env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

export const normalClient = client.fetch.bind(client);

export const cachedClient = cache(client.fetch.bind(client));
