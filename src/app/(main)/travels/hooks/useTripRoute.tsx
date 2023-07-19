import airportList from "@/components/map/airports.json";
import trainstationsList from "@/components/map/trainstations.json";
import memo from "lodash.memoize";
import { Station, Trip } from "@/types";
import * as turf from "@turf/turf";

export default function useTripRoute(trip: Trip) {
  // map with all stations
  const stationsMap = new Map<string, Station>();

  for (const station of airportList) {
    // extend type to include type
    const extendedStation = station as Station;
    extendedStation.type = "airport";
    stationsMap.set(station.code, extendedStation);
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore list is too large
  for (const station of trainstationsList) {
    const extendedStation = station as Station;
    extendedStation.type = "trainstation";
    stationsMap.set(station.code, extendedStation);
  }

  // for (const station of busstopsList) {
  //   stationsMap.set(station.code, station);
  // }

  // Use Set to store unique stations
  const stationsSet = new Set<Station>();

  for (const leg of trip.legs) {
    if (leg.type !== "train" && leg.type !== "plane") {
      continue;
    }
    const fromStation = stationsMap.get(leg.from.code);
    if (fromStation) {
      stationsSet.add(fromStation);
    } else {
      console.log("fromStation not found", leg.from.code);
    }

    const toStation = stationsMap.get(leg.to.code);
    if (toStation) {
      stationsSet.add(toStation);
    } else {
      console.log("toStation not found", leg.to.code);
    }
  }

  // Get the list of all stations that have been visited
  const visitedStations = Array.from(stationsSet);

  const findStation = memo((code: string) => {
    return visitedStations.find((station) => station.code === code);
  });

  // create a dashed line for each leg of the trip
  const lines = [] as turf.Feature<turf.LineString>[];
  for (let i = 0; i < trip.legs.length; i++) {
    console.log(trip.legs[i].type);
    let from;
    let to;
    let route;
    if (trip.legs[i].type === "train" || trip.legs[i].type === "plane") {
      from = findStation(trip.legs[i].from.code);
      to = findStation(trip.legs[i].to.code);
      if (from) {
        trip.legs[i].from.coordinates = from.coordinates;
      }
      if (to) {
        trip.legs[i].to.coordinates = to.coordinates;
      }
    }

    // if the leg is a car, add the route to the map
    if (trip.legs[i].type === "car") {
      console.log("car");
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
  const tripLine = turf.lineString(
    lines.reduce((acc, line) => {
      return [...acc, ...line.geometry.coordinates];
    }, [] as number[][])
  );

  const stations = Array.from(stationsSet);

  return { trip, stations, tripLine };
}
