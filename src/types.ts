import { Feature, Geometry, GeoJsonProperties } from "geojson";

export type ProjectList = {
  id: string;
  title: string;
  quote: string;
  logo: string;
  projectImage: string;
  projectImageLight: string;
  coverImage: string;
  translate: string;
  width: string;
  url: string;
  grid: string;
  order: string;
  description: string;
  workedOn: {
    work: string;
  }[];
  newSkills: {
    skill: string;
  }[];
  icons: {
    icon: JSX.Element;
    url: string;
  }[];
  githubUrl?: string;
};

export type Station = {
  code: string;
  name: string;
  coordinates: number[];
};
export type Capital = {
  CapitalName: string;
  CountryCode: string;
  lat: number;
  lon: number;
};

export type CityFeature = {
  type: "Feature";
  properties: {
    NAME: string;
  };
  geometry: {
    type: "Polygon";
    coordinates: number[][][];
  };
};

export type Trip = {
  trip: {
    id: string;
    title: string;
    legs: {
      from: string;
      to: string;
      type: string;
    }[];
    duration: number;
  };
  stations: Station[];
  lines: Feature<Geometry, GeoJsonProperties>[];
};
