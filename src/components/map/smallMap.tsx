"use client";
import { Map } from "react-map-gl";
import Contribution from "./contribution";
import Controls from "./controls";
import { LocationMarker } from "./markers";
import useMap from "./useMap";
import { useState } from "react";

export default function MapboxContent({
  coords,
}: {
  coords: { latitude: number; longitude: number };
}) {
  const {
    setUncontrolledZoom,
    mapRef,
    setZoom,
    exactZoom,
    style,
    setTransitioning,
  } = useMap({ coords });

  const [visible, setVisible] = useState(false);
  return (
    <div className="relative h-full w-full">
      <Map
        onZoom={() => setUncontrolledZoom()}
        style={{ opacity: visible ? "100" : "0" }}
        ref={mapRef}
        onLoad={() => setVisible(true)}
        maxZoom={coords ? 11 : 20}
        minZoom={0.0000001}
        mapStyle={style}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        initialViewState={{
          longitude: coords.longitude,
          latitude: coords.latitude,
          zoom: 11,
        }}
        projection={"globe"}
        attributionControl={false}
      >
        {/* Show a marker with my current location */}
        <LocationMarker exactZoom={exactZoom} coords={coords} />
      </Map>
      <Contribution />

      <Controls
        exactZoom={exactZoom}
        setZoom={setZoom}
        setTransitioning={setTransitioning}
      />
    </div>
  );
}
