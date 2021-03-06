import About from "../components/about";
import Janskapsalonflat from "../components/janskapsalonflat";
import Navbar from "../components/navbar";
import Skills from "../components/skills";
import Timeline2 from "../components/timeline2";
import Toggle from "../components/toggle";
import Whatsapp, { Discord, Github, Mail } from "../components/socials";
import Mapbox from "../components/mapbox";
import useDarkMode from "../hooks/useDarkMode";
import Flyn from "../components/flynImg";
import Janskapsalonsmall from "../components/janskapsalonsmall";

export default function Home() {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div className="min-h-screen overflow-visible bg-gray-200 transition-all duration-300 ease-in dark:bg-[#1F295B] ">
      <Navbar />
      <div className=" mx-auto grid w-full max-w-[320px] grid-cols-1 gap-4 px-4 pt-3 pb-6 [grid-auto-rows:265px] [grid-auto-columns:265px] sm:max-w-[640px] sm:grid-cols-2 xl:max-w-[1200px] xl:grid-cols-4 xl:grid-rows-[265px,265px,265px,265px] xl:px-0 ">
        <About />
        <Mapbox colorTheme={colorTheme} />
        <Toggle colorTheme={colorTheme} setTheme={setTheme} />
        <Janskapsalonsmall />
        <Github />
        <Skills />
        <Timeline2 />
        <Discord />
        <Whatsapp />
        <Flyn />
        <Janskapsalonflat />
        <Mail />
      </div>
    </div>
  );
}
