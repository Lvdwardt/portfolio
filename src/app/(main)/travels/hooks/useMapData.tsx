import { countryList } from "@/components/map/countrylist";
import { Station, Capital, City } from "@/types";
import { countries, airportCodes, capitalNames } from "../traveldata";
import airportList from "@/components/map/airports.json";
import capitalList from "@/components/map/capitals.json";
import cityFeatures from "@/components/map/cities.json";
import useTripRoute from "./useTripRoute";
import { headers } from "next/headers";

export default async function useMapData() {
  const countryCodes = [] as string[];
  for (let i = 0; i < countries.length; i++) {
    const country = countries[i] as keyof typeof countryList;
    const code = countryList[country];
    countryCodes.push(code);
  }

  const airports = [] as Station[];
  for (let i = 0; i < airportCodes.length; i++) {
    const airportCode = airportCodes[i];
    const airport = airportList.find((airport) => airport.code === airportCode);
    if (airport) {
      airports.push(airport);
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

  const trip = useTripRoute();

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
    trip: trip,
    cities: cities,
  };

  return mapData;
}
