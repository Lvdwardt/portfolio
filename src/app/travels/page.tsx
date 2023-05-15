"use client";
import Head from "next/head";
import About from "@/components/about";
import AnimatedLayout from "@/layouts/animatedLayout";
import Image from "next/image";
import {
  TransformWrapper,
  TransformComponent,
  type ReactZoomPanPinchRef,
} from "react-zoom-pan-pinch";
import { useEffect, useRef, useState } from "react";
import useLocalStorageState from "use-local-storage-state";

export default function Travels() {
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
    <AnimatedLayout>
      <div className="flex flex-col items-center justify-center rounded-xl  p-4 pt-2 xl:col-span-2 xl:row-span-2">
        <Head>
          <title>Travels</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="w-full overflow-visible transition-all duration-300 ease-in ">
          <div className="mx-auto grid w-full max-w-[320px] grid-cols-1 gap-5 px-4 pb-6 pt-2 [grid-auto-columns:265px] [grid-auto-rows:265px] sm:max-w-[640px] sm:grid-cols-2 xl:max-w-[1200px] xl:grid-cols-4 xl:grid-rows-[265px,265px] xl:px-0 ">
            <div className="rounded-[2rem] bg-card p-4 pl-6 pt-[18px] sm:col-span-2">
              <About />
            </div>
            <div className="relative flex items-center justify-center overflow-hidden rounded-[2rem] bg-card text-center sm:col-span-2 sm:row-span-2 xl:col-span-4">
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
            </div>
          </div>
        </div>
      </div>
    </AnimatedLayout>
  );
}
