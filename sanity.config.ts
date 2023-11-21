import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { iconPicker } from "sanity-plugin-icon-picker";
import { googleMapsInput } from "@sanity/google-maps-input";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import { deskStructure } from "s/structures/deskstructure";
import { singletonTypes } from "s/singletons";
import Iframe from "sanity-plugin-iframe-pane";
import Projects from "s/schemas/projects";
import { previewSecretId } from "s/lib/api";
import Skills from "s/schemas/skills";

const GOOGLE_MAPS_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

if (!GOOGLE_MAPS_KEY) {
  throw new Error(
    "The GOOGLE_MAPS_API_KEY environment variable is required to run the studio."
  );
}

// export const PREVIEWABLE_DOCUMENT_TYPES = [
//   Projects.name,
//   Skills.name,
// ] satisfies string[];

// export const PREVIEWABLE_DOCUMENT_TYPES_REQUIRING_SLUGS = [
//   Projects.name,
// ] satisfies typeof PREVIEWABLE_DOCUMENT_TYPES;

// Used to generate URLs for drafts and live previews
// export const PREVIEW_BASE_URL = "/api/draft";

// export const urlResolver = defineUrlResolver({
//   base: PREVIEW_BASE_URL,
//   requiresSlug: PREVIEWABLE_DOCUMENT_TYPES_REQUIRING_SLUGS,
// });

// export const iframeOptions = {
//   url: urlResolver,
//   urlSecretId: previewSecretId,
// } satisfies IframeOptions;

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
      // defaultDocumentNode: (S, { schemaType }) => {
      //   // if ((PREVIEWABLE_DOCUMENT_TYPES as string[]).includes(schemaType)) {
      //   //   return S.document().views([
      //   //     // Default form view
      //   //     S.view.form(),
      //   //     // Preview
      //   //     S.view.component(Iframe).options(iframeOptions).title("Preview"),
      //   //   ]);
      //   // }
      //   // return null;
      //   S.document().views([S.view.form()]);
      // },
    }),
    // previewUrl({
    //   base: PREVIEW_BASE_URL,
    //   requiresSlug: PREVIEWABLE_DOCUMENT_TYPES_REQUIRING_SLUGS,
    //   urlSecretId: previewSecretId,
    //   matchTypes: PREVIEWABLE_DOCUMENT_TYPES,
    // }),
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
