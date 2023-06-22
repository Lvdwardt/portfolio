"use client";

import dynamic from "next/dynamic";

import { useEffect, useState } from "react";

const MapboxContent = dynamic(() => import("./mapboxContent"));

const Loader = () => (
  <div className="flex h-full w-full items-center justify-center bg-card">
    <span className="circle mx-1 my-12 h-4 w-4 animate-loader rounded-full bg-gray-400"></span>
    <span className="circle animation-delay-200 mx-1 my-12 h-4 w-4 animate-loader rounded-full bg-gray-400"></span>
    <span className="circle animation-delay-400 mx-1 my-12 h-4 w-4 animate-loader rounded-full bg-gray-400"></span>
  </div>
);

export default function Mapbox() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return isLoaded ? <MapboxContent /> : <Loader />;
}
