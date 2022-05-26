import React, { useRef, useEffect, useState, useCallback } from "react";
import mapboxgl from "mapbox-gl";
import { FaMinus, FaPlus } from "react-icons/fa";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoibGVvbnZkdyIsImEiOiJja3o4aGZob20xajl4MndyeGI4Nm9oMHFrIn0.qh6ihyou9U5wnDZyZjQdew";
export default function Mapbox2() {
  const mapRef = useRef(null);
  const [lng, setLng] = useState(5.570198498008655);
  const [lat, setLat] = useState(51.93230413376818);
  const [zoom, setZoom] = useState(13);
  const [style, setStyle] = useState(
    "mapbox://styles/leonvdw/ckza3leh5002g14qhbxatpdjt"
  );

  const onMapLoad = useCallback(() => {
    setLng(mapRef.current.getCenter().lng.toFixed(4));
    setLat(mapRef.current.getCenter().lat.toFixed(4));
  });

  const plus = () => {
    setZoom(zoom + 2);
    mapRef.current?.flyTo({ zoom: zoom + 2, duration: 1000 });
  };

  const minus = () => {
    setZoom(zoom - 2);
    mapRef.current?.flyTo({ zoom: zoom - 2, duration: 1000 });
  };

  return (
    <div className="overflow-hidden rounded-3xl sm:order-6 xl:order-2">
      <Map
        ref={mapRef}
        attributionControl={false}
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: zoom,
        }}
        style={{ width: 280, height: 280 }}
        mapStyle={style}
        interactive={false}
        onMove={onMapLoad}
      >
        <Marker
          longitude={5.570198498008655}
          latitude={51.93230413376818}
          color={"var(--color)"}
        ></Marker>

        <button
          className={
            zoom === 1
              ? "hidden"
              : "absolute bottom-8 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-[#8D5BE9] dark:text-white"
          }
          onClick={minus}
        >
          <FaMinus />
        </button>

        <button
          className={
            zoom >= 13
              ? "hidden"
              : "absolute bottom-8 right-8 flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-[#8D5BE9] dark:text-white"
          }
          onClick={plus}
        >
          <FaPlus />
        </button>
      </Map>
    </div>
  );
}
