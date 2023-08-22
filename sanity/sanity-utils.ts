import { createClient, groq } from "next-sanity";

export async function getExperiences() {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: "2023-08-22",
    useCdn: true,
  });
  /* eslint-disable import/no-anonymous-default-export */

  const experiences = await client
    .fetch(
      groq`*[_type == "experiences"]{
        name,
        small,
        role,
        hours,
        description,
        image,
        link,
        startDate,
        endDate
    }`
    )
    .catch((err) => console.error(err));
  return experiences;
}
