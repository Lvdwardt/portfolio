"use client";
import useThemeChecker from "@/hooks/useThemeChecker";
import { useTheme } from "next-themes";
import { startTransition, useEffect, useRef, useState } from "react";
import { MapRef } from "react-map-gl";

export default function useMap({
  coords,
}: {
  coords?: { latitude: number; longitude: number };
}) {
  useThemeChecker();
  const { resolvedTheme } = useTheme();
  const [transitioning, setTransitioning] = useState(false);
  const [zoom, setZoom] = useState(coords ? 11 : 2.7);
  const [exactZoom, setExactZoom] = useState(coords ? 11 : 2.7);
  const [style, setStyle] = useState("mapbox://styles/mapbox/dark-v11");

  const mapRef = useRef<MapRef>(null);

  useEffect(() => {
    if (transitioning) {
      setTimeout(() => {
        startTransition(() => {
          setTransitioning(false);
        });
      }, 1000);
    }
  }, [transitioning]);

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
    if (!coords) {
      mapRef.current?.flyTo({
        zoom: zoom,
        duration: 1000,
      });
      startTransition(() => {
        setExactZoom(zoom);
      });
    } else {
      mapRef.current?.flyTo({
        center: [coords.longitude, coords.latitude],
        zoom: zoom,
        duration: 1000,
      });

      startTransition(() => {
        setExactZoom(zoom);
      });
    }
  }, [zoom]);

  const setUncontrolledZoom = () => {
    if (transitioning) {
      return;
    }

    startTransition(() => {
      setExactZoom(mapRef.current?.getZoom() || 10);
    });
  };

  if (coords)
    return {
      setUncontrolledZoom,
      mapRef,
      zoom,
      setZoom,
      exactZoom,
      style,
      resolvedTheme,
      setTransitioning,
    };

  // hide all labels
  const show = false;
  const mapboxMap = mapRef.current?.getMap();
  if (mapboxMap) {
    mapboxMap.getStyle().layers?.forEach(function (layer) {
      if (layer.type === "symbol" && layer.id !== "my-data-label") {
        mapboxMap.setLayoutProperty(
          layer.id,
          "visibility",
          show ? "visible" : "none"
        );
      }
    });
  }

  return {
    setUncontrolledZoom,
    mapRef,
    zoom,
    setZoom,
    exactZoom,
    style,
    resolvedTheme,
    setTransitioning,
  };
}
