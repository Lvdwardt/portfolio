/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { iconPicker } from "sanity-plugin-icon-picker";
import { googleMapsInput } from "@sanity/google-maps-input";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import { deskStructure } from "s/structures/deskstructure";
import { singletonTypes } from "s/singletons";

const GOOGLE_MAPS_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

if (!GOOGLE_MAPS_KEY) {
  throw new Error(
    "The GOOGLE_MAPS_API_KEY environment variable is required to run the studio."
  );
}

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in './sanity/schema.ts'
  schema: {
    ...schema,
    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    // iconPicker to get react-icons in Sanity Studio
    iconPicker(),
    // Google maps input component
    googleMapsInput({
      apiKey: GOOGLE_MAPS_KEY,
      defaultLocation: {
        lat: 51.92735,
        lng: 5.5735,
      },
    }),
  ],
});
