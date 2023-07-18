"use client";
import { Feature, LineString } from "geojson";
import { LngLatBounds, LngLat } from "mapbox-gl";
import { RefObject, useState, startTransition, useEffect } from "react";
import { MapRef } from "react-map-gl";
import * as turf from "@turf/turf";

export default function useAnimatedTrip(
  mapRef: RefObject<MapRef>,
  line: Feature<LineString, turf.Properties>,
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

    line.geometry.coordinates.forEach((coordinate: number[]) => {
      if (coordinate.length === 0) return;
      const [lng, lat] = coordinate;
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
