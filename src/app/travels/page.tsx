import Head from "next/head";
import About from "@/components/about";
import AnimatedLayout from "@/layouts/animatedLayout";
import { type Metadata } from "next";
import TravelMap from "@/components/travels/map";

export const metadata: Metadata = {
  title: "Travels",
  description:
    "On this page you can find out about one of my biggest passions: traveling.",
};

export default function Travels() {
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
              <TravelMap />
            </div>
          </div>
        </div>
      </div>
    </AnimatedLayout>
  );
}
