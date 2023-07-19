"use client";
import { LngLatBounds, LngLat } from "mapbox-gl";
import { RefObject, useState, startTransition, useEffect } from "react";
import { MapRef } from "react-map-gl";
import { TripLine } from "@/types";

export default function useAnimatedTrip(
  mapRef: RefObject<MapRef>,
  line: TripLine,
  duration: number
) {
  const [animationPhase, setAnimationPhase] = useState(0);
  const [start, setStart] = useState(false);
  const startTime = Date.now();
  const delay = 2000;

  const beforeAnimationTimeout = setTimeout(() => {
    startTransition(() => {
      setStart(true);
    });
  }, delay);

  beforeAnimationTimeout;

  useEffect(() => {
    if (start) {
      const frame = async () => {
        const elapsed = Date.now() - startTime;
        const progress = elapsed / duration;

        setAnimationPhase(progress > 1 ? 1 : progress);

        if (progress < 1) {
          requestAnimationFrame(frame);
        }
      };

      requestAnimationFrame(frame);
    }
  }, [start]);

  useEffect(() => {
    setAnimationPhase(0);
    setStart(false);
    beforeAnimationTimeout;
  }, [line]);

  //fly to the trip
  useEffect(() => {
    const bounds = new LngLatBounds();

    line.geometry.coordinates.forEach((coordinate: number[] | number[][]) => {
      if (coordinate.length === 0) return;
      if (typeof coordinate[0] === "number") {
        const [lng, lat] = coordinate as number[];
        const fromLngLat = new LngLat(lng, lat);
        bounds.extend(fromLngLat);
        return;
      }

      const [lng, lat] = (coordinate as number[][])[0];
      const fromLngLat = new LngLat(lng, lat);
      bounds.extend(fromLngLat);
    });

    startTransition(() => {
      mapRef.current?.fitBounds(bounds, {
        padding: { top: 100, bottom: 100, left: 100, right: 100 },
        duration: 2000,
      });
    });
    setTimeout(() => {
      startTransition(() => {
        mapRef.current?.flyTo({
          zoom: mapRef.current.getZoom() - 0.5,
          duration: 1000,
        });
      });
    }, 1000);
  }, [line]);

  return { animationPhase };
}
