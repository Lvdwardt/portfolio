import { type SchemaTypeDefinition } from "sanity";

import Experiences from "./schemas/experiences";
import Projects from "./schemas/projects";
import Location from "./schemas/location";
import About from "./schemas/about";
import Pages from "./schemas/pages";
import Skills from "./schemas/skills";
import TravelData from "./schemas/travelData";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Experiences, Projects, Location, TravelData, About, Pages, Skills],
};
