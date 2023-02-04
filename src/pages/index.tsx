import Head from "next/head";
import About from "../components/gridcomponents/about";
import Mapbox from "../components/gridcomponents/mapbox";
import Toggle from "../components/gridcomponents/toggle";
import Janskapsalonsmall from "../components/gridcomponents/janskapsalonsmall";
import Janskapsalonflat from "../components/gridcomponents/janskapsalonflat";
import {
  Github,
  Discord,
  Whatsapp,
  Mail,
} from "../components/gridcomponents/socials";
import Skills from "../components/gridcomponents/skills";
import Timeline2 from "../components/gridcomponents/timeline";
import Flyn from "../components/gridcomponents/flynImg";
import Footer from "../components/footer";

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
        <div className=" mx-auto grid w-full max-w-[320px] grid-cols-1 gap-5 px-4 pt-4 pb-6 [grid-auto-rows:265px] [grid-auto-columns:265px] sm:max-w-[640px] sm:grid-cols-2 xl:max-w-[1200px] xl:grid-cols-4 xl:grid-rows-[265px,265px,265px,265px] xl:px-0 ">
          <div className=" col-span-1 h-full w-full rounded-[2rem] bg-card p-6 dark:text-white sm:order-1 xl:col-span-2">
            <About />
          </div>
          <div className="overflow-hidden rounded-[2rem] border-4 border-card sm:order-6 xl:order-2">
            <Mapbox />
          </div>
          <div className="rounded-[2rem] bg-pinklight dark:bg-[#2F3763] sm:hidden xl:order-3">
            <Janskapsalonsmall />
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-greenlight dark:bg-[#8D5BE9] sm:order-3  xl:order-4">
            <Toggle />
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-bluelight dark:bg-[#CE81C7] sm:order-8 xl:order-5">
            <Github />
          </div>
          <div className="relative row-span-2 overflow-hidden rounded-[2rem] bg-card p-6 font-medium dark:text-white sm:order-2 xl:order-6 ">
            <Skills />
          </div>
          {/* <Timeline /> */}
          <Timeline2 />
          {/* <GithubStats /> */}
          <Discord />
          <Whatsapp />
          <div className="overflow-hidden rounded-[2rem] bg-pinklight dark:bg-[#2F3763] sm:order-7 sm:row-span-2 xl:order-3 xl:col-start-4 xl:row-start-1">
            <Flyn />
          </div>
          <div className="hidden overflow-hidden rounded-[2rem] bg-pinklight dark:bg-[#2F3763] sm:order-4 sm:col-span-2 sm:block xl:order-10">
            <Janskapsalonflat />
          </div>
          <Mail />
        </div>
        <Footer />
      </div>
    </>
  );
}
