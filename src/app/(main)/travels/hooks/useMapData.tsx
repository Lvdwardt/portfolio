import { Station, Capital, TravelData } from "@/types";
import { sanityFetch } from "s/lib/client";
import type { SanityDocument } from "next-sanity";
import { travelDataQuery } from "s/lib/queries";

export default async function useMapData() {
  const travelData = await sanityFetch<SanityDocument<TravelData>>(
    travelDataQuery,
    ["traveldata"]
  );

  const countries = [] as string[];
  for (let i = 0; i < travelData.visitedCountries.length; i++) {
    const countryCode =
      travelData.visitedCountries[i].countryname.split(",")[1];
    countries.push(countryCode);
  }

  const airports = [] as Station[];
  for (let i = 0; i < travelData.visitedAirports.length; i++) {
    const airportCode = travelData.visitedAirports[i].airport.split("|")[0];
    const coordinates = travelData.visitedAirports[i].airport
      .split("|")[1]
      .split(",")
      .map(parseFloat);
    const airport = {
      code: airportCode,
      coordinates: coordinates,
      type: "airport",
    };
    airports.push(airport);
  }

  const capitals = [] as Capital[];
  for (let i = 0; i < travelData.visitedCapitals.length; i++) {
    const capital = travelData.visitedCapitals[i].capital;
    const capitalName = capital.split(",")[0];
    const coordinates = capital.split("|")[1].split(",").map(parseFloat);
    const capitalObject = {
      name: capitalName,
      countryCode: capital.split(",")[1].split("|")[0],
      coordinates: coordinates,
    };
    capitals.push(capitalObject);
  }

  // const host = headers().get("host");
  // const secret = process.env.MY_SECRET_TOKEN;
  // const { cities }: { cities: City[] } = await fetch(
  //   `http://${host}/api/cities`,
  //   {
  //     method: "GET",
  //     headers: {
  //       secret: secret || "",
  //     },
  //     // once every week
  //     next: {
  //       revalidate: 60 * 60 * 24 * 7,
  //     },
  //   }
  // ).then((res) => res.json());

  const travelStats = {
    countries: travelData.visitedCountries.length,
    airports: travelData.visitedAirports.length,
    capitals: travelData.visitedCapitals.length,
  };

  const mapData = {
    countries: countries,
    airports: airports,
    capitals: capitals,
    showTrip: false,
    travelStats: travelStats,
  };

  return mapData;
}
