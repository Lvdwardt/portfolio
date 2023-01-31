import Head from "next/head";
import About from "../components/about";
import Mapbox from "../components/mapbox";
import Toggle from "../components/toggle";
import Janskapsalonsmall from "../components/janskapsalonsmall";
import Janskapsalonflat from "../components/janskapsalonflat";
import { Github, Discord, Whatsapp, Mail } from "../components/socials";
import Skills from "../components/skills";
import Timeline2 from "../components/timeline2";
import Flyn from "../components/flynImg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Leon van de Wardt</title>
        <meta
          name="description"
          content="Leon van de Wardt's portfolio website"
        />
      </Head>
      <div className="min-h-screen overflow-visible transition-all duration-300 ease-in ">
        <div className=" mx-auto grid w-full max-w-[320px] grid-cols-1 gap-4 px-4 pt-3 pb-6 [grid-auto-rows:265px] [grid-auto-columns:265px] sm:max-w-[640px] sm:grid-cols-2 xl:max-w-[1200px] xl:grid-cols-4 xl:grid-rows-[265px,265px,265px,265px] xl:px-0 ">
          <About />
          <Mapbox />
          <Toggle />
          <Janskapsalonsmall />
          <Github />
          <Skills />
          {/* <Timeline /> */}
          <Timeline2 />
          <Discord />
          <Whatsapp />
          <Flyn />
          <Janskapsalonflat />
          <Mail />
        </div>
        <div className="flex justify-center pb-8 pt-16 font-thin">
          <h3>© {new Date().getFullYear()} Leon van de Wardt - Inspired by</h3>
          <a
            href="
          https://nevflynn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 text-primary"
          >
            Nev Flynn
          </a>
          <h3>&nbsp;and</h3>
          <a
            href="
          https://robertozaccardi.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 text-primary"
          >
            Roberto Zaccardi
          </a>
        </div>
      </div>
    </>
  );
}
