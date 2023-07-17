import { City } from "@/types";
import { Geometry } from "geojson";
import { FillLayer, Layer, Source, SymbolLayer } from "react-map-gl";

export default function VisitedCities({
  cities,
  resolvedTheme,
}: {
  cities?: City[];
  resolvedTheme: string | undefined;
}) {
  const layerStyle: FillLayer = {
    id: "my-data",
    type: "fill",
    source: "my-data",
    paint: {
      "fill-color": resolvedTheme === "light" ? "#7bdff2" : "#ce81c7",
      "fill-opacity": 1,
    },
  };

  const labelStyle: SymbolLayer = {
    id: "my-data-label",
    type: "symbol",
    source: "my-data",
    layout: {
      "text-field": ["get", "name"],
      "text-variable-anchor": ["top", "bottom", "left", "right"],
      "text-radial-offset": 0.5,
      "text-justify": "auto",
    },
  };

  if (!cities) return null;

  const featureCollection = {
    type: "FeatureCollection" as const,
    features: cities.map((city) => {
      return {
        type: "Feature" as const,
        geometry: city.geojson as unknown as Geometry,
        properties: {
          name: city.display_name,
        },
      };
    }),
  };

  // add a layer with the cities labels
  return (
    <Source id="my-data" type="geojson" data={featureCollection}>
      <Layer beforeId="waterway-label" {...layerStyle} />
      {/* <Layer {...labelStyle} /> */}
    </Source>
  );
}
