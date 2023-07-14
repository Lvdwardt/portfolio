import { Layer, Source } from "react-map-gl";
import { Station, Trip } from "@/types";
import { AirportMarker } from "./markers";

type TripProps = {
  exactZoom: number;
  trip: Trip;
  resolvedTheme: string | undefined;
};
export default function Trip({ exactZoom, trip, resolvedTheme }: TripProps) {
  return (
    <>
      <Source
        id="trip"
        type="geojson"
        data={{ type: "FeatureCollection", features: trip.lines }}
      >
        <Layer
          id="trip"
          type="line"
          source="trip"
          layout={{
            "line-join": "round",
            "line-cap": "round",
          }}
          paint={{
            "line-color": resolvedTheme === "light" ? "#000" : "#fff",
            "line-width": 2,
            "line-dasharray": [2, 2],
          }}
        />
      </Source>

      {Array.from(trip.stations).map((station) => (
        <AirportMarker
          key={station.code}
          exactZoom={exactZoom}
          airport={station as Station}
        />
      ))}
    </>
  );
}
