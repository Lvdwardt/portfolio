import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import { FaMinus, FaPlus } from "react-icons/fa";
import useDarkMode from "../hooks/useDarkMode";
import Map from "react-map-gl";

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
  const [style, setStyle] = useState(
    "mapbox://styles/leonvdw/ckza3leh5002g14qhbxatpdjt"
  );
  const [colorTheme, setTheme] = useDarkMode();

  // function Check() {
  //   if (colorTheme === "light") {
  //     setStyle("mapbox://styles/leonvdw/ckza3leh5002g14qhbxatpdjt");
  //     console.log(style, "hallo");
  //   } else {
  //     console.log("test");
  //   }
  // }

  // useEffect(() => {
  //   if (map.current) return; // initialize map only once
  //   map.current = new mapboxgl.Map({
  //     container: mapContainer.current,
  //     style: style,
  //     center: [lng, lat],
  //     zoom: zoom,
  //     minZoom: minzoom,
  //     maxZoom: maxzoom,
  //     renderWorldCopies: false,
  //     interactive: true,
  //     attributionControl: true,
  //   });
  // });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
    });
  });

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

  return (
    <div className="overflow-hidden rounded-3xl">
      <Map
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: zoom,
        }}
        style={{ width: 280, height: 280 }}
        mapStyle={style}
      />
    </div>
  );
}
