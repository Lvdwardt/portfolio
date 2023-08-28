import { FaCode } from "@react-icons/all-files/fa/FaCode";
import { FaGlobeEurope } from "@react-icons/all-files/fa/FaGlobeEurope";
import { MdLocationPin } from "@react-icons/all-files/md/MdLocationPin";
import type { StructureBuilder } from "sanity/desk";
const singletonActions = new Set(["publish", "discardChanges", "restore"]);

const singletonTypes = new Set(["travelStats", "location", "skills"]);

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
        .icon(MdLocationPin)
        .id("location")
        .child(S.document().schemaType("location").documentId("location")),
      S.divider(),

      S.listItem()
        .title("Skills")
        .icon(FaCode)
        .id("skills")
        .child(S.document().schemaType("skills").documentId("skills")),
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
