"use client";
import About from "@/components/about";
import AnimatedLayout from "@/layouts/animatedLayout";
import { Suspense, startTransition, useState } from "react";
import "./travel.css";
import MapboxContent from "@/components/map/map";
import { MapData } from "@/types";
import useTripRoute from "./hooks/useTripRoute";
import { Trip } from "@/types";
import { trips } from "./traveldata";
import useCenter from "./hooks/useCenter";
import { AiFillCaretDown } from "react-icons/ai";

export default function PageContent({
  stats,
  mapData,
}: {
  stats: {
    countries: number;
    capitals: number;
    airports: number;
  };
  mapData: MapData;
}) {
  const [showTrip, setShowTrip] = useState(false);
  const [currentTrip, setCurrentTrip] = useState<Trip>(trips[0]);
  const { trip, stations, tripLine } = useTripRoute(currentTrip);

  mapData.showTrip = showTrip;

  const big = useCenter();

  const scrollDown = () => {
    const options: ScrollToOptions = {};
    options.behavior = "smooth";
    options.top = 1000000;
    window.scrollTo(options);
  };

  return (
    <AnimatedLayout>
      <div className="relative flex flex-col items-center justify-center rounded-xl  p-4 pt-2 xl:col-span-2 xl:row-span-2">
        <div className="mx-auto grid w-full max-w-[320px] grid-cols-1 gap-5 px-4 pb-6 pt-2 [grid-auto-columns:265px] [grid-auto-rows:265px] sm:max-w-[640px] sm:grid-cols-2 xl:min-h-screen xl:max-w-[1200px] xl:grid-cols-4 xl:grid-rows-[265px,265px] xl:px-0">
          <div className="rounded-[2rem] bg-card p-4 px-6 pt-[18px]">
            <About />
          </div>
          <div className="order-2 rounded-[2rem] bg-card xl:order-3">
            <div className="flex h-full w-full flex-col p-8">
              <div className="flex h-full flex-col justify-between">
                <div className="">
                  <div className="flex h-6 items-center gap-2">
                    <span className="text-2xl font-bold">
                      {stats.countries}
                    </span>
                  </div>
                  <span className="font-silka text-sm text-gray-400">
                    countries visited
                  </span>
                </div>
                <div className="">
                  <div className="flex h-6 items-center gap-2">
                    <span className="text-2xl font-bold">{stats.capitals}</span>
                  </div>
                  <span className="font-silka text-sm text-gray-400">
                    capitals explored
                  </span>
                </div>
                <div className="">
                  <div className="flex h-6 items-center gap-2">
                    <span className="text-2xl font-bold">{stats.airports}</span>
                  </div>
                  <span className="font-silka text-sm text-gray-400">
                    airports conquered
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="map-element flex items-center justify-center overflow-hidden rounded-[2rem] bg-card text-center sm:order-3 sm:col-span-2 sm:row-span-2 xl:order-2 xl:col-span-3 xl:ml-auto">
            <Suspense fallback={<></>}>
              {/* @ts-expect-error react-server-component */}
              <MapboxContent
                big={big}
                data={mapData}
                trip={trip}
                tripLine={tripLine}
                stations={stations}
              />
            </Suspense>
          </div>
        </div>
        <div className="mx-auto grid w-full max-w-[320px] grid-cols-1 gap-5 px-4 pb-6 pt-2 [grid-auto-columns:265px] [grid-auto-rows:265px] sm:max-w-[640px] sm:grid-cols-2 xl:min-h-[calc(100vh_-_130px)]  xl:max-w-[1200px] xl:grid-cols-4 xl:grid-rows-[265px,265px] xl:px-0">
          <div className="order-4 row-span-2 rounded-[2rem] bg-card p-8 lg:col-span-2">
            {/* toggle for trip */}
            <button
              className="flex= items-center justify-center"
              onClick={() => startTransition(() => setShowTrip(false))}
            >
              show all visited countries
            </button>
            {/* map over the trips */}
            <div className="mt-4 flex flex-col gap-4">
              {trips.map((trip) => (
                <button
                  className="flex flex-col gap-2"
                  key={trip.id}
                  onClick={() =>
                    startTransition(() => {
                      setShowTrip(true), setCurrentTrip(trip);
                    })
                  }
                >
                  <div className="flex w-full items-center justify-between gap-2 text-left">
                    <span className="text-xl font-bold">{trip.title}</span>
                    <span className="text-gray-40 whitespace-nowrap font-silka text-sm">
                      {trip.date}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
        <button
          onFocus={() => scrollDown()}
          onClick={() => scrollDown()}
          className="sticky bottom-4 left-0 right-0 mx-auto rounded-full pb-2 focus-visible:opacity-0 active:opacity-0"
        >
          <AiFillCaretDown className="mx-auto animate-pulse text-4xl text-primary" />
        </button>
        <div className="absolute bottom-6 left-0 right-0 mx-auto h-8 w-8 bg-background " />
      </div>
    </AnimatedLayout>
  );
}
