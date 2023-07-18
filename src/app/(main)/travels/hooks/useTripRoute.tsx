import airportList from "@/components/map/airports.json";
import trainstationsList from "@/components/map/trainstations.json";
import { Feature } from "geojson";
import memo from "lodash.memoize";
import { Trip } from "@/types";

export default function useTripRoute(trip: Trip) {
  type Station = {
    code: string;
    name: string;
    coordinates: number[];
  };
  // map with all stations
  const stationsMap = new Map<string, Station>();

  for (const station of airportList) {
    stationsMap.set(station.code, station);
  }

  // for (const station of trainstationsList) {
  //   stationsMap.set(station.code, station);
  // }

  // for (const station of busstopsList) {
  //   stationsMap.set(station.code, station);
  // }

  // Use Set to store unique stations
  const stationsSet = new Set<Station>();

  for (const leg of trip.legs) {
    const fromStation = stationsMap.get(leg.from.code);
    if (fromStation) {
      stationsSet.add(fromStation);
    }

    const toStation = stationsMap.get(leg.to.code);
    if (toStation) {
      stationsSet.add(toStation);
    }
  }

  // Get the list of all stations that have been visited
  const visitedStations = Array.from(stationsSet);

  const findStation = memo((code: string) => {
    return visitedStations.find((station) => station.code === code);
  });

  // create a dashed line for each leg of the trip
  const lines = [] as Feature[];
  for (let i = 0; i < trip.legs.length; i++) {
    const from = findStation(trip.legs[i].from.code);
    const to = findStation(trip.legs[i].to.code);

    // add the coordinates of the from and to stations to the trip
    if (from) {
      trip.legs[i].from.coordinates = from.coordinates;
    }
    if (to) {
      trip.legs[i].to.coordinates = to.coordinates;
    }

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
