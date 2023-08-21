import type {
  Feature,
  Polygon,
  MultiPolygon,
  Position,
  LineString,
  GeoJsonProperties,
} from "geojson";

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
  type: string;
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

export type City = {
  id: number;
  name: string;
  country: string;
  display_name: string;
  geojson: Feature<Polygon | MultiPolygon>;
};

export type Trip = {
  id: string;
  title: string;
  legs: {
    from: {
      code: string;
      coordinates: number[];
    };
    to: {
      code: string;
      coordinates: number[];
    };
    route?: {
      coordinates: Position[];
    };
    type: string;
  }[];
  duration: number;
  date: string;
  story: string;
  facts: string | string[];
  prices?: {
    flights?: number;
    total?: number;
  };
};

export type MapData = {
  airports: Station[];
  countries: string[];
  capitals: Capital[];
  cities: City[];
  showTrip: boolean;
};

export type TripLine = Feature<LineString, GeoJsonProperties>;
