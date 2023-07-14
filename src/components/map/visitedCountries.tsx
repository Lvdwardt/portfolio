import { useMemo } from "react";
import { type FillLayer, Layer, Source } from "react-map-gl";

export default function VisitedCountries({
  countries,
  resolvedTheme,
}: {
  countries: string[] | undefined;
  resolvedTheme: string | undefined;
}) {
  const highlightLayer: FillLayer = {
    id: "countries-highlighted",
    type: "fill",
    source: "mapbox://mapbox.country-boundaries-v1",
    "source-layer": "country_boundaries",

    paint: {
      "fill-color": resolvedTheme === "light" ? "#7bdff2" : "#ce81c7",
      "fill-opacity": 0.3,
    },
  };

  const homeLayer: FillLayer = {
    id: "countries-highlighted-home",
    type: "fill",
    source: "mapbox://mapbox.country-boundaries-v1",
    "source-layer": "country_boundaries",

    paint: {
      "fill-color": resolvedTheme === "light" ? "#7bdff2" : "#ce81c7",
      "fill-opacity": 0.7,
    },
    filter: ["in", "iso_3166_1", "NL"],
  };

  const filter = useMemo(() => {
    if (!countries) return;
    return ["in", "iso_3166_1", ...countries];
  }, [countries]);

  return (
    <Source
      id="countries"
      type="vector"
      url="mapbox://mapbox.country-boundaries-v1"
    >
      <Layer beforeId="waterway-label" {...highlightLayer} filter={filter} />
      <Layer beforeId="waterway-label" {...homeLayer} />
    </Source>
  );
}
