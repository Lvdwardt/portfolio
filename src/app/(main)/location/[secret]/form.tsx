"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function LocationForm({ secret }: { secret: string }) {
  const [supported, setSupported] = useState(false);
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const [dbLocation, setDbLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  useEffect(() => {
    //check if browser supports location api
    if (navigator.geolocation) {
      setSupported(true);
    }
  }, []);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  };

  const updateLocation = async () => {
    if (!location || !secret) return;
    await fetch("/api/location", {
      method: "POST",
      headers: {
        location: JSON.stringify(location),
        secret: secret,
      },
    }).catch((err) => console.log(err));
  };

  const getFromDB = async () => {
    const res = await fetch("/api/location", {
      method: "GET",
      headers: {
        secret: secret,
      },
      next: {
        // once every week
        revalidate: 60 * 60 * 24 * 7,
      },
    });
    const data = await res.json();
    const location = data.location[0];
    console.log(location);
    setDbLocation(location);
  };

  return (
    <div className="flex flex-col items-center gap-2 pb-4 text-center">
      <h1>Location</h1>
      <button onClick={getLocation}>Get Location</button>
      {supported && location && (
        <div className="flex flex-col gap-2">
          <h2>Latitude: {location.latitude}</h2>
          <h2>Longitude: {location.longitude}</h2>
          <button
            className="my-2 rounded-lg bg-primary p-4"
            onClick={updateLocation}
          >
            Update Location
          </button>
          <Image
            src={`https://api.mapbox.com/styles/v1/mapbox/dark-v11/static/${location.longitude},${location.latitude},8.29,0/300x200?access_token=pk.eyJ1IjoibGVvbnZkdyIsImEiOiJja3o4aGZob20xajl4MndyeGI4Nm9oMHFrIn0.qh6ihyou9U5wnDZyZjQdew`}
            width={300}
            height={200}
            alt="mapbox map"
          />
          <button
            className="my-2 rounded-lg bg-secondary p-4"
            onClick={getFromDB}
          >
            Get from DB
          </button>
          {dbLocation && (
            <div className="flex flex-col gap-2">
              <h2>Latitude: {dbLocation.latitude}</h2>
              <h2>Longitude: {dbLocation.longitude}</h2>
              <Image
                src={`https://api.mapbox.com/styles/v1/mapbox/dark-v11/static/${dbLocation.longitude},${dbLocation.latitude},8.29,0/300x200?access_token=pk.eyJ1IjoibGVvbnZkdyIsImEiOiJja3o4aGZob20xajl4MndyeGI4Nm9oMHFrIn0.qh6ihyou9U5wnDZyZjQdew`}
                width={300}
                height={200}
                alt="mapbox map"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
