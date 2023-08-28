import type {
  Feature,
  Polygon,
  MultiPolygon,
  Position,
  LineString,
  GeoJsonProperties,
} from "geojson";
import type { Image, TypedObject } from "sanity";

export type Project = {
  title: string;
  slug: {
    current: string;
  };
  quote: string;
  logo: Image;
  projectImage: Image;
  projectImageLight: Image | null;
  coverImage: Image;
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
    icon: {
      name: string;
      provider: string;
    };
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

export type TravelStats = {
  countries: number;
  capitals: number;
  airports: number;
};

export type MapData = {
  airports: Station[];
  countries: string[];
  capitals: Capital[];
  cities: City[];
  showTrip: boolean;
};

export type TripLine = Feature<LineString, GeoJsonProperties>;

export type Experience = {
  name: string;
  small: string;
  role: string;
  hours: string;
  startDate: Date;
  endDate: Date;
  description: string;
  link: string;
  image: Image;
  id: number;
};

export type CurrentLocation = {
  currentLocation: {
    lat: number;
    lng: number;
  };
};

export type AboutContent = {
  slug: {
    current: string;
  };
  memojis: {
    lightMemoji: Image;
    darkMemoji: Image;
  };
  text: {
    mobileText: TypedObject[];
    text: TypedObject[];
  };
};

export type Skills = {
  icons: {
    title: string;
    icon: {
      svg: string;
      name: string;
      provider: string;
    };
  }[];
};
