import { FaGlobeEurope } from "react-icons/fa";
import { PinIcon } from "@sanity/icons";
import type { StructureBuilder } from "sanity/desk";

const singletonActions = new Set(["publish", "discardChanges", "restore"]);

const singletonTypes = new Set(["travelStats", "location"]);

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Travel Stats")
        .icon(FaGlobeEurope)
        .id("travelStats")
        .child(
          S.document().schemaType("travelStats").documentId("travelStats")
        ),
      S.divider(),

      S.listItem()
        .title("Location")
        .icon(PinIcon)
        .id("location")
        .child(S.document().schemaType("location").documentId("location")),
      S.divider(),

      // List out the rest of the document types
      ...S.documentTypeListItems()
        .filter(
          (listItem) =>
            !singletonTypes.has(listItem.getId() || "") &&
            !singletonActions.has(listItem.getId() || "")
        )
        .reverse(),
    ]);
