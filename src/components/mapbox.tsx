import React, { useRef, useEffect, useState, useCallback } from "react";
import mapboxgl from "mapbox-gl";
import Map, { Marker } from "react-map-gl";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useTheme } from "next-themes";
import "mapbox-gl/dist/mapbox-gl.css";

if (!process.env.MAPBOX_TOKEN) throw new Error("No Mapbox token found");
mapboxgl.accessToken = process.env.MAPBOX_TOKEN;
//eslint-disable-next-line
export default function Mapbox() {
  //get html attribute for theme
  const { resolvedTheme } = useTheme();
  const colorTheme = resolvedTheme;

  const mapRef = useRef(null);
  const [lng, setLng] = useState(5.572);
  const [lat, setLat] = useState(51.9341);
  const [zoom, setZoom] = useState(11);
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
        <Marker longitude={5.572} latitude={51.9341} color={"var(--primary)"} />

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
            zoom >= 11
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
