import Head from "next/head";
import Image from "next/image";
import About from "../components/about";
import Janskapsalon from "../components/janskapsalon";
import Mapbox from "../components/mapbox";
import Navbar from "../components/navbar";
import Timeline from "../components/timeline";
import Toggle from "../components/toggle";
import Logo from "../public/logo.png";

export default function Home() {
  return (
    <>
      <div className=" bg-orange-50 dark:bg-neutral-800 min-h-screen ">
        <Navbar />
        <div className=" w-full pt-3 px-4 pb-6 grid xl:px-0 max-w-[1200px] mx-auto grid-cols-1 xl:grid-cols-4 xl:grid-rows-[280px,280px,280px,280px] gap-4">
          <About />
          <Mapbox />
          <Toggle />
          
          <div className="col-span-2 bg-bluelight dark:bg-gray-700 rounded-3xl"></div>
          <Timeline />
          <div className="bg-pinklight dark:bg-gray-700 rounded-3xl"></div>
          <Janskapsalon/>
        </div>
      </div>
    </>
  );
}
