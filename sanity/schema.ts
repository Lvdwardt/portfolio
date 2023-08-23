import { type SchemaTypeDefinition } from "sanity";

import { Experiences } from "./schemas/experiences";
import { Projects } from "./schemas/projects";

// export const schema: { types: SchemaTypeDefinition[] } = {
//   types: [],
// };

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Experiences, Projects],
};
