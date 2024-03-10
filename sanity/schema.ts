import { type SchemaTypeDefinition } from "sanity";

import Experiences from "./schemas/experiences";
import ProjectsSchema from "./schemas/projects";
import Location from "./schemas/location";
import About from "./schemas/about";
import Pages from "./schemas/pages";
import Skills from "./schemas/skills";
import TravelData from "./schemas/travelData";
import Uses from "./schemas/uses";

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
