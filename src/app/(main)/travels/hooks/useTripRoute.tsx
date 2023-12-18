import memo from "lodash.memoize";
import { MapData, Station, TripType } from "@/types";
import { type LineString, type Feature, lineString } from "@turf/helpers";

export default function useTripRoute(trip: TripType | null, mapData: MapData) {
  // map with all airports
  const airports = new Map<string, Station>();

  for (const station of mapData.airports) {
    const extendedStation = station as Station;
    airports.set(station.code, extendedStation);
  }

  // Use Set to store unique stations
  const stationsSet = new Set<Station>();

  if (!trip) {
    // TODO: zoom back out to the world
    return { lines: [], stations: [] };
  }

  for (const leg of trip.legs) {
    if (leg.type !== "plane") {
      continue;
    }
    const fromStation = airports.get(leg.from.code);
    if (fromStation) {
      stationsSet.add(fromStation);
    } else {
      console.log("fromStation not found", leg.from.code);
    }

    const toStation = airports.get(leg.to.code);
    if (toStation) {
      stationsSet.add(toStation);
    } else {
      console.log("toStation not found", leg.to.code);
    }
  }

  const findStation = memo((code: string) => {
    return mapData.airports.find((station) => station.code === code);
  });

  // create a dashed line for each leg of the trip
  const lines = [] as Feature<LineString>[];
  for (let i = 0; i < trip.legs.length; i++) {
    let from;
    let to;
    let route;
    if (trip.legs[i].type === "plane") {
      from = findStation(trip.legs[i].from.code);
      to = findStation(trip.legs[i].to.code);
      if (from) {
        trip.legs[i].from.coordinates = from.coordinates;
      }
      if (to) {
        trip.legs[i].to.coordinates = to.coordinates;
      }
    }
    if (trip.legs[i].type === "train") {
      from = trip.legs[i].from;
      to = trip.legs[i].to;
      // add to the stations set
      stationsSet.add({
        code: from.code,
        coordinates: from.coordinates,
        type: "train",
      });
      stationsSet.add({
        code: to.code,
        coordinates: to.coordinates,
        type: "train",
      });
    }

    // if the leg is a car, add the route to the map
    if (trip.legs[i].type === "car") {
      route = trip.legs[i].route?.coordinates ?? [];
    }

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
    if (route) {
      lines.push({
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: route,
        },
        properties: {
          id: trip.id,
          title: trip.title,
          type: trip.legs[i].type,
        },
      });
    }
  }

  // make one line for the whole trip. connect all gaps
  const tripLine = lineString(
    lines.reduce((acc, line) => {
      return [...acc, ...line.geometry.coordinates];
    }, [] as number[][])
  );

  const stations = Array.from(stationsSet);

  return { trip, stations, tripLine };
}
