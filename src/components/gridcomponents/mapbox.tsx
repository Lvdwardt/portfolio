import React, { useRef, useEffect, useState, useCallback } from "react";
import mapboxgl from "mapbox-gl";
import Map from "react-map-gl";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useTheme } from "next-themes";
import "mapbox-gl/dist/mapbox-gl.css";
import Image from "next/image";
import clsx from "clsx";

mapboxgl.accessToken =
  "pk.eyJ1IjoibGVvbnZkdyIsImEiOiJja3o4aGZob20xajl4MndyeGI4Nm9oMHFrIn0.qh6ihyou9U5wnDZyZjQdew";
//eslint-disable-next-line
export default function Mapbox() {
  //get html attribute for theme
  const { resolvedTheme } = useTheme();
  const colorTheme = resolvedTheme;

  const mapRef = useRef(null);
  const [lng, setLng] = useState(5.5735);
  const [lat, setLat] = useState(51.92735);
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
  const [awake, setAwake] = useState(false);

  return (
    <div>
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
        <div className=" absolute inset-0 bottom-8 m-auto h-24 w-24 rounded-full border-4 border-primary bg-trans opacity-80">
          <Image
            src="/images/memoji/sleep.webp"
            alt="memoji sleeping"
            width={45}
            height={45}
            onClick={() => setAwake(true)}
            className={clsx(
              "absolute inset-0 m-auto transform rounded-full transition duration-500 ease-in-out hover:animate-scale",
              awake ? "opacity-0" : "opacity-100"
            )}
          />
          <Image
            src="/images/memoji/knocked.webp"
            alt="memoji knocked out"
            width={62}
            height={62}
            className={clsx(
              "pointer-events-none absolute inset-0 top-2 m-auto transform rounded-full transition duration-500 ease-in-out ",
              awake ? "opacity-100" : "opacity-0"
            )}
          />
        </div>

        <button
          className={
            zoom === 1
              ? "hidden"
              : "absolute bottom-12 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-secondary  text-text"
          }
          title="Zoom out"
          onClick={minus}
        >
          <FaMinus />
        </button>

        <button
          className={
            zoom >= 11
              ? "hidden"
              : "absolute bottom-12 right-8 flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-text"
          }
          title="Zoom in"
          onClick={plus}
        >
          <FaPlus />
        </button>
      </Map>
    </div>
  );
}
