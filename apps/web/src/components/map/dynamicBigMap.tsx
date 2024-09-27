"use client";
import dynamic from "next/dynamic";

const DynamicBigMapbox = dynamic(() => import("./bigMapContent"), {
  ssr: false,
});

export default DynamicBigMapbox;
