import { type SchemaTypeDefinition } from "sanity";

import experiences from "./schemas/experiences";

// export const schema: { types: SchemaTypeDefinition[] } = {
//   types: [],
// };

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [experiences],
};
