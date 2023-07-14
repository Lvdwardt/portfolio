import { CityFeature } from "@/types";
import type { FeatureCollection } from "geojson";
import { FillLayer, Layer, Source } from "react-map-gl";

export default function VisitedCities({
  cities,
  resolvedTheme,
}: {
  cities?: CityFeature[];
  resolvedTheme: string | undefined;
}) {
  const citiesCollection: FeatureCollection = {
    type: "FeatureCollection",
    features: cities || [],
  };

  const layerStyle: FillLayer = {
    id: "my-data",
    type: "fill",
    source: "my-data",
    paint: {
      "fill-color": resolvedTheme === "light" ? "#7bdff2" : "#ce81c7",
      "fill-opacity": 0.8,
    },
  };

  return (
    <Source id="my-data" type="geojson" data={citiesCollection}>
      <Layer beforeId="waterway-label" {...layerStyle} />
    </Source>
  );
}
