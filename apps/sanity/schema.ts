import { type SchemaTypeDefinition } from "sanity";

import Experiences from "./schemas/experiences.ts";
import ProjectsSchema from "./schemas/projects.tsx";
import Location from "./schemas/location.ts";
import About from "./schemas/about.ts";
import Pages from "./schemas/pages.ts";
import Skills from "./schemas/skills.ts";
import TravelData from "./schemas/travelData.tsx";
import Uses from "./schemas/uses.ts";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    Experiences,
    ProjectsSchema,
    Location,
    TravelData,
    About,
    Pages,
    Skills,
    Uses,
  ],
};
