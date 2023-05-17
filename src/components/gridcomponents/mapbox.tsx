"use client";
import React, { useRef, useEffect, useState, useCallback, lazy } from "react";
const Map = lazy(() => import("react-map-gl"));
import { FaMinus, FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";
import clsx from "clsx";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
//eslint-disable-next-line
export default async function Mapbox() {
  const router = useRouter();
  //get html attribute for theme

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
    const htmlElement = document.querySelector<HTMLElement>("html");
    let timeout: NodeJS.Timeout;

    const observer = new MutationObserver((mutations) => {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === "data-theme") {
            htmlElement?.getAttribute("data-theme") === "light"
              ? setStyle("mapbox://styles/mapbox/light-v10")
              : setStyle("mapbox://styles/leonvdw/ckza19352000615rsk08y22f3");
            router.refresh();
          }
        });
      }, 100);
    });

    if (!htmlElement) {
      return;
    }

    observer.observe(htmlElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

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
        mapLib={import("mapbox-gl")}
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
        mapboxAccessToken={MAPBOX_TOKEN}
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
