import { type SchemaTypeDefinition } from "sanity";

import { Experiences } from "./schemas/experiences";
import { Projects } from "./schemas/projects";
import { Location } from "./schemas/location";
import { TravelStats } from "./schemas/travelStats";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Experiences, Projects, Location, TravelStats],
};
