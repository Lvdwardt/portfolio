"use client";
import Image from "next/image";
import {
  TransformWrapper,
  TransformComponent,
  type ReactZoomPanPinchRef,
} from "react-zoom-pan-pinch";
import { useEffect, useRef, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Travels",
  description:
    "On this page you can find out about one of my biggest passions: traveling.",
};

export default function TravelMap() {
  const [windowWidth, setWindowWidth] = useState(0);
  const ref = useRef<ReactZoomPanPinchRef | null>(null);

  const [settings, setSettings] = useLocalStorageState("settings", {
    defaultValue: {
      x: -902,
      y: -148,
      zoom: 3,
    },
  });

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
      });
    };
  }, []);

  useEffect(() => {
    if (ref.current === null) return;
    if (windowWidth < 640) {
      ref.current.setTransform(-625, -110, 5);
      setSettings({
        x: -625,
        y: -110,
        zoom: 5,
      });
    } else if (windowWidth < 1280) {
      ref.current.setTransform(-1000, -175, 4);
      setSettings({
        x: -1000,
        y: -175,
        zoom: 4,
      });
    } else {
      ref.current.setTransform(-902, -48, 2.5);
      setSettings({
        x: -902,
        y: -48,
        zoom: 2.5,
      });
    }
  }, [windowWidth]);

  return (
    <TransformWrapper
      //on init set transform to the value from useLocalStorageState
      onInit={(e) => {
        e.setTransform(settings.x, settings.y, settings.zoom);
      }}
      ref={ref}
    >
      <TransformComponent>
        <Image
          src="/images/travels/map.svg"
          alt="map"
          priority
          height={1200}
          width={2400}
        />
        {/* </div> */}
      </TransformComponent>
    </TransformWrapper>
  );
}
