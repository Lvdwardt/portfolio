"use client";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import type { IconBaseProps } from "react-icons";
import { Marker } from "react-map-gl";
import { Station, Capital } from "@/types";
import FaCity from "public/icons/fa/FaCity.svg";
import FaHome from "public/icons/fa/FaHome.svg";
import MdLocalAirport from "public/icons/md/MdLocalAirport.svg";
import MdTrain from "public/icons/md/MdTrain.svg";

type Coords = {
  latitude: number;
  longitude: number;
};

interface MarkerProps {
  exactZoom: number;
}

interface Location extends MarkerProps {
  coords: Coords;
}

export const LocationMarker = ({ exactZoom, coords }: Location) => {
  const [awake, setAwake] = useState(false);
  return (
    <Marker
      draggable={false}
      longitude={coords?.longitude}
      latitude={coords?.latitude}
    >
      <div
        className="h-24 w-24 rounded-full border-4 border-primary bg-trans opacity-80 transition-all duration-1000"
        style={{
          transform: `scale(${Math.min(Math.max(0.1, (exactZoom - 2) / 10), 1)}
          )`,
        }}
      >
        <Image
          src="/images/memoji/sleep.webp"
          alt="memoji sleeping"
          width={45}
          height={45}
          onClick={() => setAwake(true)}
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
    </Marker>
  );
};

export const HomeMarker = ({ exactZoom }: MarkerProps) => {
  return (
    <Marker draggable={false} longitude={5.573} latitude={51.937}>
      <FaHome
        className="text-4xl text-white/60 dark:text-white/20"
        style={{
          transform: `scale(${Math.min(Math.max(0.1, (exactZoom - 2) / 10), 1)}
          )`,
        }}
      />
    </Marker>
  );
};

interface AMarker extends MarkerProps {
  station: Station;
}

const airportIcon = (props: IconBaseProps) => <MdLocalAirport {...props} />;
const trainstationIcon = (props: IconBaseProps) => <MdTrain {...props} />;

export const StationMarker = ({ exactZoom, station }: AMarker) => {
  const lat = station.coordinates[1];
  const lon = station.coordinates[0];

  const Icon = station.type === "airport" ? airportIcon : trainstationIcon;
  return (
    <Marker draggable={false} latitude={lat} longitude={lon}>
      <Icon
        className="text-4xl text-black dark:text-white"
        style={{
          transform: `scale(${Math.min(Math.max(0.1, (exactZoom - 2) / 10), 1)}
          )`,
        }}
      />
    </Marker>
  );
};

interface CMarker extends MarkerProps {
  capital: Capital;
}

export const CapitalMarker = ({ exactZoom, capital }: CMarker) => {
  const lat = capital.coordinates[0];
  const lon = capital.coordinates[1];
  return (
    <Marker draggable={false} longitude={lon} latitude={lat}>
      <FaCity
        className="text-4xl text-black dark:text-white"
        style={{
          transform: `scale(${Math.min(Math.max(0.1, (exactZoom - 2) / 10), 1)}
          )`,
        }}
      />
    </Marker>
  );
};
