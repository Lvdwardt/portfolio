"use client";
import { LngLatBounds, LngLat } from "mapbox-gl";
import { RefObject, useState, startTransition, useEffect, useRef } from "react";
import { MapRef } from "react-map-gl";
import { TripLine } from "@/types";
import * as turf from "@turf/turf";

export default function useAnimatedTrip(
  mapRef: RefObject<MapRef>,
  line: TripLine
) {
  const [animationPhase, setAnimationPhase] = useState(0);
  const [duration, setDuration] = useState(0);
  const animationRef = useRef<number | null>(null);
  const startRef = useRef(false);
  const startTimeRef = useRef<number>(0);
  const delay = 2000;

  useEffect(() => {
    // center the trip on the map
    const bbox = turf.bbox(line);
    const bounds = new LngLatBounds(
      new LngLat(bbox[0] - 15, bbox[1]),
      new LngLat(bbox[2] + 15, bbox[3])
    );

    startTransition(() => {
      mapRef.current?.fitBounds(bounds, {
        duration: 2000,
      });
    });
    // calculate speed based on length of the trip
    const length = turf.lineDistance(line, { units: "kilometers" });
    const duration = length * 1000 * 0.0008;
    setDuration(duration);

    startRef.current = false;
    animationPhase !== 0 && setAnimationPhase(0);

    animationRef.current = window.setTimeout(() => {
      startRef.current = true;
      startTimeRef.current = Date.now();
      const frame = async () => {
        const elapsed = Date.now() - startTimeRef.current;
        const progress = elapsed / duration;

        setAnimationPhase(progress > 1 ? 1 : progress);

        if (progress < 1 && startRef.current) {
          animationRef.current = requestAnimationFrame(frame);
        }
      };

      requestAnimationFrame(frame);
    }, delay);

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [line, duration]);

  return { animationPhase };
}
