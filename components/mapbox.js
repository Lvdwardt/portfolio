import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import { FaMinus, FaPlus } from "react-icons/fa";
import useDarkMode from "../hooks/useDarkMode";
import mapStyle from "../hooks/mapStyle";

mapboxgl.accessToken =
  "pk.eyJ1IjoibGVvbnZkdyIsImEiOiJja3o4aGZob20xajl4MndyeGI4Nm9oMHFrIn0.qh6ihyou9U5wnDZyZjQdew";
export default function Mapbox2() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(5.5742);
  const [lat, setLat] = useState(51.9348);
  const [zoom, setZoom] = useState(12);
  const [minzoom, setMinZoom] = useState(0);
  const [maxzoom, setMaxZoom] = useState(12);
  const [style, setStyle] = mapStyle();

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: style,
      center: [lng, lat],
      zoom: zoom,
      minZoom: minzoom,
      maxZoom: maxzoom,
      renderWorldCopies: false,
      interactive: false,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
    });
  });
  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
    });
  });

  // useEffect(() => {
  //   if (!colorTheme == "dark") return;
  //   {
  //     console.log("donker");
  //   }
  // });

  function Min() {
    if (!map.current) return; // wait for map to initialize
    setZoom(map.current.setZoom(zoom - 4));
    setZoom(zoom - 4);
  }
  function Max() {
    if (!map.current) return; // wait for map to initialize

    setZoom(map.current.setZoom(zoom + 4));
    setZoom(zoom + 4);
  }
  function Color() {
    if (!map.current) return; // wait for map to initialize

    setStyle(map.current.setStyle("mapbox://styles/mapbox/streets-v11"));
    setStyle("mapbox://styles/mapbox/streets-v11");
  }

  return (
    <div className="relative">
      <div
        ref={mapContainer}
        className="h-full overflow-hidden rounded-3xl transition-all duration-500"
      />
      <div className="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 transform animate-pulse rounded-full bg-[#8D5BE9] opacity-80"></div>
      <button
        className={
          zoom === 0
            ? "hidden"
            : "absolute bottom-4 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-[#8D5BE9] dark:text-white"
        }
        onClick={() => Min()}
      >
        <FaMinus />
      </button>
      <button
        className={
          zoom === 12
            ? "hidden"
            : "absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-[#8D5BE9] dark:text-white"
        }
        onClick={() => Max()}
      >
        <FaPlus />
      </button>
    </div>
  );
}
