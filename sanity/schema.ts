import { type SchemaTypeDefinition } from "sanity";

import { Experiences } from "./schemas/experiences";
import { Projects } from "./schemas/projects";
import { Location } from "./schemas/location";
import { TravelStats } from "./schemas/travelStats";
import { About } from "./schemas/about";
import { Skills } from "./schemas/skills";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Experiences, Projects, Location, TravelStats, About, Skills],
};
