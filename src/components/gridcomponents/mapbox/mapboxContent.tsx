"use client";
import React, { useEffect, useRef, useState, startTransition } from "react";
import {
  FaInfoCircle,
  FaMinus,
  FaPlus,
  FaRegCommentDots,
  FaRegCopyright,
} from "react-icons/fa";
import { Map, MapRef, Marker } from "react-map-gl";
import Image from "next/image";
import { useTheme } from "next-themes";
import { SiMapbox } from "react-icons/si";
import Link from "next/link";
import { AiFillCloseCircle } from "react-icons/ai";
import clsx from "clsx";
import useThemeChecker from "@/hooks/useThemeChecker";

export default function MapboxContent({
  coords,
}: {
  coords: { latitude: number; longitude: number };
}) {
  useThemeChecker();
  const [awake, setAwake] = useState(false);
  const [contributionOpen, setContributionOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (transitioning) {
      setTimeout(() => {
        startTransition(() => {
          setTransitioning(false);
        });
      }, 1000);
    }
  }, [transitioning]);

  const [zoom, setZoom] = useState(11);
  const [exactZoom, setExactZoom] = useState(11);
  const [style, setStyle] = useState("mapbox://styles/mapbox/dark-v11");

  const mapRef = useRef<MapRef>(null);

  const plus = () => {
    startTransition(() => {
      setTransitioning(true);
      setZoom(zoom + 2);
    });
  };

  const minus = () => {
    startTransition(() => {
      setTransitioning(true);
      setZoom(zoom - 2);
    });
  };

  // if resolvedTheme changes, change map style
  useEffect(() => {
    if (resolvedTheme === "light") {
      startTransition(() => {
        setStyle("mapbox://styles/mapbox/light-v10");
      });
    } else {
      startTransition(() => {
        setStyle("mapbox://styles/mapbox/dark-v11");
      });
    }
  }, [resolvedTheme]);

  //center to marker
  useEffect(() => {
    mapRef.current?.flyTo({
      center: [coords.longitude, coords.latitude],
      zoom: zoom,
      duration: 1000,
    });
    startTransition(() => {
      setExactZoom(zoom);
    });
  }, [zoom]);

  const setUncontrolledZoom = () => {
    if (transitioning) {
      return;
    }

    startTransition(() => {
      setExactZoom(mapRef.current?.getZoom() || 10);
    });
  };

  const marker = () => {
    return (
      <div
        className="h-24 w-24 rounded-full border-4 border-primary bg-trans opacity-80 transition-all duration-1000"
        style={{
          //scale based on the zoom, the larger the zoom the bigger the marker //min scale is 0.1 //max is 1 //min zoom is -1 //max is 11
          // from zoom 2 scale is 0.1, then normal calculation.

          transform: `scale(${Math.min(Math.max(0.1, (exactZoom - 2) / 10), 1)}
          )`,
        }}
      >
        <Image
          src="/images/memoji/sleep.webp"
          alt="memoji sleeping"
          width={45}
          height={45}
          onClick={() => startTransition(() => setAwake(true))}
          className={clsx(
            "pointer-events-auto absolute inset-0 m-auto transform rounded-full transition duration-500 ease-in-out hover:animate-scale",
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
    );
  };

  return (
    <div className="relative h-full w-full">
      <Map
        onZoom={() => setUncontrolledZoom()}
        ref={mapRef}
        maxZoom={11}
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
        <Marker
          draggable={false}
          longitude={coords.longitude}
          latitude={coords.latitude}
        >
          {marker()}
        </Marker>
      </Map>
      <button
        className="absolute bottom-4 left-4 z-50 flex items-center"
        onClick={() =>
          startTransition(() => {
            setContributionOpen(!contributionOpen);
          })
        }
      >
        {/* <FaInfoCircle className="mr-1 text-xs text-text" /> */}
        {contributionOpen ? (
          <AiFillCloseCircle className="mr-1 text-xs text-text" />
        ) : (
          <FaInfoCircle className="mr-1 text-xs text-text" />
        )}
      </button>
      {contributionOpen && (
        <div className="absolute bottom-0 left-0 z-40 flex w-full flex-col items-start justify-center rounded-md bg-secondary p-4 pb-10 shadow-md">
          <p className="text-xs font-semibold text-text">Mapbox GL JS </p>
          <Link
            href="https://www.mapbox.com/about/maps/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <FaRegCopyright className="mr-1 text-xs text-text" />
            <span className="text-xs text-text">mapbox</span>
          </Link>
          <Link
            href="https://www.openstreetmap.org/copyright"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <FaRegCopyright className="mr-1 text-xs text-text" />
            <span className="text-xs text-text">OpenStreetMap</span>
          </Link>
          <Link
            href="https://www.mapbox.com/map-feedback/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <FaRegCommentDots className="mr-1 text-xs text-text" />
            <span className="text-xs text-text">Improve this map</span>
          </Link>
        </div>
      )}

      <Link
        href="https://www.mapbox.com/about/maps/"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 flex items-center"
      >
        <SiMapbox className="" />
        <span className=" mx-1 select-none text-xs font-bold text-text">
          mapbox
        </span>
      </Link>

      <button
        className={clsx(
          transitioning && "opacity-40",
          zoom <= -1 && "hidden",
          "absolute bottom-12 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-text"
        )}
        title="Zoom out"
        onClick={minus}
        disabled={transitioning}
      >
        <FaMinus />
      </button>

      <button
        className={clsx(
          transitioning && "opacity-40",
          zoom >= 11 && "hidden",
          "absolute bottom-12 right-8 flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-text"
        )}
        title="Zoom in"
        onClick={plus}
        disabled={transitioning}
      >
        <FaPlus />
      </button>
    </div>
  );
}
