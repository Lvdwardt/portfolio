import Head from "next/head";
import Image from "next/image";
import About from "../components/about";
import Janskapsalon from "../components/janskapsalon";
import Janskapsalonflat from "../components/janskapsalonflat";
import Mapbox from "../components/mapbox";
import Navbar from "../components/navbar";
import Skills from "../components/skills";
import Timeline from "../components/timeline";
import Timeline2 from "../components/timeline2";
import Toggle from "../components/toggle";
import Whatsapp, { Discord, Github, Mail } from "../components/socials";
import Logo from "../public/logo.png";
import Mapbox2 from "../components/mapbox2";

export default function Home() {
  return (
    <div className="min-h-screen overflow-visible bg-gray-200 transition-all duration-300 ease-in dark:bg-[#1F295B] ">
      <Navbar />
      <div className=" mx-auto grid w-full max-w-[320px] grid-cols-1 gap-4 px-4 pt-3 pb-6 [grid-auto-rows:265px] [grid-auto-columns:265px] sm:max-w-[640px] sm:grid-cols-2 xl:max-w-[1200px] xl:grid-cols-4 xl:grid-rows-[265px,265px,265px,265px] xl:px-0 ">
        <About />
        <Mapbox2 />
        <Toggle />
        <Github />
        <Skills />
        <Timeline2 />
        <Discord />
        <Whatsapp />
        <Janskapsalon />
        <Janskapsalonflat />
        <Mail />
      </div>
    </div>
  );
}
