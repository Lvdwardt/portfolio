import Head from "next/head";
import About from "../components/about";
import Mapbox from "../components/gridcomponents/mapbox";
import Toggle from "../components/gridcomponents/serverToggle";
import Janskapsalonsmall from "../components/gridcomponents/janskapsalonsmall";
import Janskapsalonflat from "../components/gridcomponents/janskapsalonflat";
import {
  Github,
  Discord,
  Whatsapp,
  Mail,
} from "../components/gridcomponents/socials";
import Skills from "../components/gridcomponents/skills";
import Flyn from "../components/gridcomponents/flynImg";
import Footer from "../components/footer";
import GithubStats from "../components/gridcomponents/githubStats";
import AnimatedLayout from "../layouts/animatedLayout";
import { type ElementCompact, xml2js } from "xml-js";

export default async function Home() {
  const res = await fetch(
    "https://cors-proxy.lvdw.workers.dev/?https://streak-stats.demolab.com/?user=Lvdwardt",
    {
      next: {
        revalidate: 86400,
      },
    }
  ).then(function (response) {
    return response.text();
  });

  const svgObject = xml2js(res, { compact: true }) as ElementCompact;

  const commits = svgObject.svg.g.g[2].g[0].text._text;
  const streak = svgObject.svg.g.g[3].g[0].text._text;
  const streakDate = svgObject.svg.g.g[3].g[2].text._text;
  const longestStreak = svgObject.svg.g.g[4].g[0].text._text;
  const longestStreakDate = svgObject.svg.g.g[4].g[2].text._text;

  const data = {
    commits: commits,
    streak: {
      number: streak,
      date: streakDate,
    },
    longestStreak: {
      number: longestStreak,
      date: longestStreakDate,
    },
  };

  return (
    <AnimatedLayout>
      <Head>
        <title>Leon van de Wardt</title>
        <meta
          name="description"
          content="Leon van de Wardt's portfolio website"
        />
      </Head>
      <div className="min-h-screen overflow-visible transition-all duration-300 ease-in ">
        <div className=" mx-auto grid w-full max-w-[320px] grid-cols-1 gap-5 px-4 pb-6 pt-4 [grid-auto-columns:265px] [grid-auto-rows:265px] sm:max-w-[640px] sm:grid-cols-2 xl:max-w-[1200px] xl:grid-cols-4 xl:grid-rows-[265px,265px,265px,265px] xl:px-0 ">
          <div className=" col-span-1 h-full w-full rounded-[2rem] bg-card p-6 text-text sm:order-1 xl:col-span-2">
            <About />
          </div>
          <div className="overflow-hidden rounded-[2rem] border-4 border-card sm:order-6 xl:order-2">
            <Mapbox />
          </div>
          <div className="rounded-[2rem] bg-br sm:hidden xl:order-3">
            <Janskapsalonsmall />
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-pg sm:order-3  xl:order-4">
            <Toggle />
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-rb sm:order-8 xl:order-5">
            <Github />
          </div>
          <div className="relative row-span-2 overflow-hidden rounded-[2rem] bg-card p-6 font-medium text-text sm:order-2 xl:order-6 ">
            <Skills />
          </div>
          <div className="peer h-full rounded-[2rem] bg-card text-text transition-all duration-300 ease-in sm:order-10 sm:col-span-2 xl:order-7">
            <GithubStats data={data} />
          </div>
          <Discord />
          <Whatsapp />
          <div className="overflow-hidden rounded-[2rem] bg-br sm:order-7 sm:row-span-2 xl:order-3 xl:col-start-4 xl:row-start-1">
            <Flyn />
          </div>
          <div className="hidden overflow-hidden rounded-[2rem] bg-br sm:order-4 sm:col-span-2 sm:block xl:order-10">
            <Janskapsalonflat />
          </div>
          <Mail />
        </div>
        <Footer />
      </div>
    </AnimatedLayout>
  );
}
