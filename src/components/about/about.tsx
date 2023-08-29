import { sanityFetch } from "s/lib/client";
import type { SanityDocument } from "next-sanity";
import { aboutQuery } from "s/lib/queries";
import { AboutContent } from "@/types";
import AboutComponent from "./aboutComponent";

export default async function About() {
  const allAboutData = await sanityFetch<SanityDocument<AboutContent[]>>(
    aboutQuery,
    ["about"]
  );
  return <AboutComponent allAboutData={allAboutData} />;
}
