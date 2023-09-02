import { Station, Capital, City, TravelData } from "@/types";
import { airportCodes, capitalNames } from "../traveldata";
import airportList from "@/components/map/airports.json";
import capitalList from "@/components/map/capitals.json";
import { headers } from "next/headers";
import { sanityFetch } from "s/lib/client";
import type { SanityDocument } from "next-sanity";
import { travelDataQuery } from "s/lib/queries";

export default async function useMapData() {
  const travelData = await sanityFetch<SanityDocument<TravelData[]>>(
    travelDataQuery,
    ["traveldata"]
  );

  const countryCodes = [] as string[];
  for (let i = 0; i < travelData[0].visitedCountries.length; i++) {
    const countryCode = travelData[0].visitedCountries[i].countryname
      .split("(")[1]
      .replace(")", "");
    countryCodes.push(countryCode);
  }

  const airports = [] as Station[];
  for (let i = 0; i < airportCodes.length; i++) {
    const airportCode = airportCodes[i];
    const airport = airportList.find((airport) => airport.code === airportCode);
    if (airport) {
      const extendedAirport = airport as Station;
      extendedAirport.type = "airport";
      airports.push(extendedAirport);
    } else {
      console.log(airportCode);
    }
  }

  const capitals = [] as Capital[];
  for (let i = 0; i < capitalNames.length; i++) {
    const capitalName = capitalNames[i];
    const capital = capitalList.find(
      (capital) => capital.CapitalName === capitalName
    );
    if (capital) {
      capitals.push(capital);
    } else {
      console.log(capitalName);
    }
  }

  // const cityList = [] as CityFeature[];
  // const cityFeatures2 = cityFeatures as {
  //   type: "FeatureCollection";
  //   features: CityFeature[];
  // };

  // for (let i = 0; i < capitalNames.length; i++) {
  //   // find features where the name is equal to the capital name.uppercase
  //   // also check if the first item in the coordinates array is within a certain range of the capital coordinates
  //   const capitalName = capitalNames[i];
  //   const capital = capitalList.find(
  //     (capital) => capital.CapitalName === capitalName
  //   );
  //   if (capital) {
  //     const city = cityFeatures2.features.find(
  //       (feature) =>
  //         feature.properties.NAME === capitalName.toUpperCase() &&
  //         feature.geometry.coordinates[0][0][0] >= capital.lon - 2.5 &&
  //         feature.geometry.coordinates[0][0][0] <= capital.lon + 2.5 &&
  //         feature.geometry.coordinates[0][0][1] >= capital.lat - 2.5 &&
  //         feature.geometry.coordinates[0][0][1] <= capital.lat + 2.5
  //     );
  //     if (city) {
  //       console.log(city.properties.NAME);
  //       cityList.push(city);
  //     } else {
  //       console.log(capitalName);
  //     }
  //   }
  // }

  const host = headers().get("host");
  const secret = process.env.MY_SECRET_TOKEN;
  const { cities }: { cities: City[] } = await fetch(
    `http://${host}/api/cities`,
    {
      method: "GET",
      headers: {
        secret: secret || "",
      },
      // once every week
      next: {
        revalidate: 60 * 60 * 24 * 7,
      },
    }
  ).then((res) => res.json());

  const mapData = {
    countries: countryCodes,
    airports: airports,
    capitals: capitals,
    cities: cities,
    showTrip: false,
  };

  return mapData;
}
