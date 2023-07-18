import { Layer, MapRef, Source } from "react-map-gl";
import { Station, Trip } from "@/types";
import { AirportMarker } from "./markers";
import { type RefObject, useMemo } from "react";
import type { Position } from "geojson";
import * as turf from "@turf/turf";
import useAnimatedTrip from "./hooks/useAnimatedTrip";

type TripProps = {
  exactZoom: number;
  trip: Trip;
  resolvedTheme: string | undefined;
  mapRef: RefObject<MapRef>;
  stations: Station[];
};

export default function Trip({
  exactZoom,
  trip,
  resolvedTheme,
  mapRef,
  stations,
}: TripProps) {
  const legs = trip.legs;

  const lines = legs.reduce((acc: Position[], leg) => {
    const from = leg.from.coordinates;
    const to = leg.to.coordinates;
    // from and to are sometimes []. if so, don't add them to the trip

    if (from && to && from.length > 0 && to.length > 0) {
      acc.push(from, to);
    }

    return acc;
  }, []);

  const line = useMemo(() => {
    return turf.lineString(lines);
  }, [trip]);

  const { animationPhase } = useAnimatedTrip(mapRef, line, 2000);

  return (
    <>
      <Source id="trip" type="geojson" data={line} lineMetrics={true}>
        <Layer
          id="trip"
          type="line"
          paint={{
            "line-gradient": [
              "step",
              ["line-progress"],
              resolvedTheme === "light" ? "#000" : "#fff",
              animationPhase,
              "rgba(0,0,0,0)",
            ],
          }}
        />
      </Source>
      {Array.from(stations).map((station) => (
        <AirportMarker
          key={station.code}
          exactZoom={exactZoom}
          airport={station as Station}
        />
      ))}
    </>
  );
}
