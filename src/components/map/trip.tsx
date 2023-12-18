import { Layer, MapRef, Source } from "react-map-gl";
import { Station, TripType, TripLine } from "@/types";
import { StationMarker } from "./markers";
import { type RefObject } from "react";
import useAnimatedTrip from "./hooks/useAnimatedTrip";

type TripProps = {
  exactZoom: number;
  trip: TripType;
  resolvedTheme: string | undefined;
  mapRef: RefObject<MapRef>;
  stations: Station[];
  tripLine: TripLine;
};

export default function Trip({
  exactZoom,
  resolvedTheme,
  mapRef,
  stations,
  tripLine,
}: TripProps) {
  const { animationPhase } = useAnimatedTrip(mapRef, tripLine);

  return (
    <>
      <Source id="trip" type="geojson" data={tripLine} lineMetrics={true}>
        <Layer
          id="trip"
          type="line"
          layout={{
            "line-cap": "round",
          }}
          paint={{
            "line-width": 2,
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
        <StationMarker
          key={station.code}
          exactZoom={exactZoom}
          station={station as Station}
        />
      ))}
    </>
  );
}
