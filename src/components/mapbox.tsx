import React, { useRef, useEffect, useState, useCallback } from "react";
import mapboxgl from "mapbox-gl";
import Map, { Marker } from "react-map-gl";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useTheme } from "next-themes";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoibGVvbnZkdyIsImEiOiJja3o4aGZob20xajl4MndyeGI4Nm9oMHFrIn0.qh6ihyou9U5wnDZyZjQdew";
//eslint-disable-next-line
export default function Mapbox() {
  //get html attribute for theme
  const { resolvedTheme } = useTheme();
  const colorTheme = resolvedTheme;

  const mapRef = useRef(null);
  const [lng, setLng] = useState(5.570198498008655);
  const [lat, setLat] = useState(51.93230413376818);
  const [zoom, setZoom] = useState(13);
  const [style, setStyle] = useState(
    "mapbox://styles/leonvdw/ckza19352000615rsk08y22f3"
  );

  const onMapLoad = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    mapRef.current.getCenter() &&
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      setLng(mapRef.current.getCenter().lng.toFixed(4));
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    setLat(mapRef.current.getCenter().lat.toFixed(4));
  }, []);

  useEffect(() => {
    colorTheme == "light"
      ? setStyle("mapbox://styles/mapbox/light-v10")
      : setStyle("mapbox://styles/leonvdw/ckza19352000615rsk08y22f3");
  }, [colorTheme]);

  const plus = () => {
    setZoom(zoom + 2);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    mapRef.current?.flyTo({ zoom: zoom + 2, duration: 1000 });
  };

  const minus = () => {
    setZoom(zoom - 2);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    mapRef.current?.flyTo({ zoom: zoom - 2, duration: 1000 });
  };

  return (
    <div className="overflow-hidden rounded-3xl border-4 border-white dark:border-[#2F3763] sm:order-6 xl:order-2">
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
        />

        <button
          className={
            zoom === 1
              ? "hidden"
              : "absolute bottom-12 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc6d7]  dark:bg-[#8D5BE9] dark:text-white"
          }
          onClick={minus}
        >
          <FaMinus />
        </button>

        <button
          className={
            zoom >= 13
              ? "hidden"
              : "absolute bottom-12 right-8 flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc6d7] dark:bg-[#8D5BE9] dark:text-white"
          }
          onClick={plus}
        >
          <FaPlus />
        </button>
      </Map>
    </div>
  );
}
