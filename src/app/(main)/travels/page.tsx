import About from "@/components/about";
import AnimatedLayout from "@/layouts/animatedLayout";
import { type Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const TravelMap = dynamic(() => import("@/components/travels/travelMap"));

export const metadata: Metadata = {
  title: "Travels",
  description:
    "On this page you can find out about one of my biggest passions: traveling.",
};

export default function Travels() {
  return (
    <AnimatedLayout>
      <div className="flex flex-col items-center justify-center rounded-xl  p-4 pt-2 xl:col-span-2 xl:row-span-2">
        <div className="w-full overflow-visible transition-all duration-300 ease-in ">
          <div className="mx-auto grid w-full max-w-[320px] grid-cols-1 gap-5 px-4 pb-6 pt-2 [grid-auto-columns:265px] [grid-auto-rows:265px] sm:max-w-[640px] sm:grid-cols-2 xl:max-w-[1200px] xl:grid-cols-4 xl:grid-rows-[265px,265px] xl:px-0 ">
            <div className="rounded-[2rem] bg-card p-4 px-6 pt-[18px]">
              <About />
            </div>
            <div className="relative flex items-center justify-center overflow-hidden rounded-[2rem] bg-card text-center sm:col-span-2 sm:row-span-2 xl:col-span-3">
              <Suspense fallback={<h1>Still Loading…</h1>}>
                <TravelMap />
              </Suspense>
            </div>
            <div className="rounded-[2rem] bg-card">
              <div className="flex h-full w-full flex-col p-8">
                <div className="flex h-full flex-col justify-between">
                  <div className="">
                    <div className="flex h-6 items-center gap-2">
                      <span className="text-2xl font-bold">18</span>
                    </div>
                    <span className="font-silka text-sm text-gray-400">
                      countries visited
                    </span>
                  </div>
                  <div className="">
                    <div className="flex h-6 items-center gap-2">
                      <span className="text-2xl font-bold">12</span>
                    </div>
                    <span className="font-silka text-sm text-gray-400">
                      capitals explored
                    </span>
                  </div>
                  <div className="">
                    <div className="flex h-6 items-center gap-2">
                      <span className="text-2xl font-bold">25</span>
                    </div>
                    <span className="font-silka text-sm text-gray-400">
                      airports conquered
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedLayout>
  );
}
