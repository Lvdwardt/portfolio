import { FaCode, FaGlobeEurope } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { singletonTypes, singletons } from "s/singletons";
import type { StructureBuilder } from "sanity/desk";

const singletonActions = new Set(["publish", "discardChanges", "restore"]);

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title("Base")
    .items([
      ...singletons.map(
        (s) =>
          S.listItem()
            .title(s.title)
            .icon(s.icon)
            .id(s.id)
            .child(S.document().schemaType(s.id).documentId(s.id)),
        S.divider()
      ),

      // List out the rest of the document types
      ...S.documentTypeListItems()
        .filter(
          (listItem) =>
            !singletonTypes.has(listItem.getId() || "") &&
            !singletonActions.has(listItem.getId() || "")
        )
        .reverse(),
    ]);
