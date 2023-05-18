/* eslint-disable @typescript-eslint/ban-ts-comment */
import Head from "next/head";
import About from "@/components/about";
import Toggle from "@/components/gridcomponents/toggle";
import Janskapsalonsmall from "@/components/gridcomponents/janskapsalonsmall";
import Janskapsalonflat from "@/components/gridcomponents/janskapsalonflat";
import {
  Github,
  Whatsapp,
  Mail,
  Linkedin,
} from "@/components/gridcomponents/socials";
import Skills from "@/components/gridcomponents/skills";
import Flyn from "@/components/gridcomponents/flynImg";
import Footer from "@/components/footer";
import GithubStats from "@/components/gridcomponents/stats/ghStats";
import WakatimeStats from "@/components/gridcomponents/stats/wtStats";
import AnimatedLayout from "@/layouts/animatedLayout";
import { type Metadata } from "next";
import { Maps } from "@/components/gridcomponents/maps/maps";
import { Suspense } from "react";
import { SiGooglemaps } from "react-icons/si";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Leonvdw.nl!",
};

// loading component
const MapsLoading = () => (
  <div className="flex flex-col overflow-hidden rounded-[2rem] bg-card p-8 sm:order-5 xl:order-8">
    <SiGooglemaps className="text-6xl text-primary" />
  </div>
);

export default async function Home() {
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
          <div className=" overflow-hidden rounded-[2rem] bg-card  sm:order-6 xl:order-2">
            <Suspense fallback={<MapsLoading />}>
              {/* @ts-expect-error */}
              <Maps />
            </Suspense>
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
          <div className="peer h-full rounded-[2rem] bg-card text-text transition-all duration-300 ease-in sm:order-10 xl:order-7">
            {/* @ts-expect-error */}
            <GithubStats />
          </div>

          <div className="flex items-center justify-center overflow-hidden rounded-[2rem] bg-pr p-8 sm:order-5 xl:order-8">
            <Linkedin />
          </div>
          <Whatsapp />
          <div className="overflow-hidden rounded-[2rem] bg-br sm:order-7 sm:row-span-2 xl:order-3 xl:col-start-4 xl:row-start-1">
            <Flyn />
          </div>
          <div className="hidden overflow-hidden rounded-[2rem] bg-br sm:order-4 sm:col-span-2 sm:block xl:order-10">
            <Janskapsalonflat />
          </div>

          <Mail />
          <div className="hidden overflow-hidden rounded-[2rem] bg-br  sm:block xl:order-12">
            {/* @ts-expect-error */}
            <WakatimeStats />
          </div>
        </div>
        <Footer />
      </div>
    </AnimatedLayout>
  );
}
