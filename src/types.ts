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
  hasBg: boolean;
  projectImage: Image;
  projectImageLight: Image | null;
  coverImage: Image;
  position: number;
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
      svg: string;
      name: string;
      provider: string;
    };
    url: string;
  }[];
  media?: {
    media?: Image;
    caption?: string;
  }[];
  githubUrl?: string;
};

export type ProjectsType = {
  title: string;
  slug: {
    current: string;
  };
  coverImage: Image;
  position: number;
};

export type Station = {
  code: string;
  coordinates: number[];
  type: string;
};
export type Capital = {
  name: string;
  countryCode: string;
  coordinates: number[];
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

export type TripType = {
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
  showTrip: boolean;
  travelStats: TravelStats;
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

export type Use = {
  name: string;
  link: string;
  image: Image;
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

export type TravelData = {
  visitedCountries: {
    countryname: string;
  }[];
  visitedAirports: {
    airport: string;
  }[];
  visitedCapitals: {
    capital: string;
  }[];
  // visitedCities: {
  //   city: string;
  // }[];
  // visitedAirports: {
  //   airport: string;
  // }[];
};
