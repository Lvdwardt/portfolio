"use client";
import clsx from "clsx";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Map, MapRef, useMap } from "react-map-gl";
import Image from "next/image";
import mapboxgl from "mapbox-gl";

export default async function Mapbox({ data }: { data: any }) {
  const [viewState, setViewState] = useState({
    longitude: data[0].longitude || 5.5735,
    latitude: data[0].latitude || 51.92735,
    zoom: 11,
  });
  const [awake, setAwake] = useState(false);
  const { current: map } = useMap();

  return (
    <div className="h-full w-full">
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        {...viewState}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        onMove={(evt) => setViewState(evt.viewState)}
        attributionControl={false}
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
            viewState.zoom === 1
              ? "hidden"
              : "absolute bottom-12 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-secondary  text-text"
          }
          title="Zoom out"
          onClick={() => Minus(map)}
        >
          <FaMinus />
        </button>

        <button
          className={
            viewState.zoom >= 11
              ? "hidden"
              : "absolute bottom-12 right-8 flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-text"
          }
          title="Zoom in"
          onClick={() => Plus(map)}
        >
          <FaPlus />
        </button>
      </Map>
    </div>
  );
}

function Plus(map: MapRef | undefined) {
  map?.setZoom(map.getZoom() + 2);
}

function Minus(map: MapRef | undefined) {
  map?.setZoom(map.getZoom() - 2);
}
