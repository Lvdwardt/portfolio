import { Station } from "@/types";
import airportList from "@/components/map/airports.json";
import { Feature } from "geojson";
import { trips } from "../traveldata";

export default function useTripRoute() {
  const trip = trips[1];

  type Station = {
    code: string;
    name: string;
    coordinates: number[];
  };

  const stationsMap = new Map<string, Station | Station>();
  for (const airport of airportList) {
    stationsMap.set(airport.code, airport);
  }

  // Use Set to store unique stations
  const stationsSet = new Set<Station | Station>();

  for (const leg of trip.legs) {
    const fromAirport = stationsMap.get(leg.from);
    if (fromAirport) {
      stationsSet.add(fromAirport);
    }

    const toAirport = stationsMap.get(leg.to);
    if (toAirport) {
      stationsSet.add(toAirport);
    }
  }

  // create a dashed line for each leg of the trip
  const lines = [] as Feature[];
  for (let i = 0; i < trip.legs.length; i++) {
    const from = stationsMap.get(trip.legs[i].from);
    const to = stationsMap.get(trip.legs[i].to);
    if (from && to) {
      lines.push({
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [from.coordinates, to.coordinates],
        },
        properties: {
          id: trip.id,
          title: trip.title,
          type: trip.legs[i].type,
        },
      });
    }
  }

  const stations = Array.from(stationsSet);

  return { trip, stations, lines };
}
