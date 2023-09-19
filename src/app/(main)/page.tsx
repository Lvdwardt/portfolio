import About from "@/components/about/about";
import Toggle from "@/components/gridcomponents/toggle";
import {
  Github,
  Whatsapp,
  Linkedin,
} from "@/components/gridcomponents/socials";
import Skills from "@/components/gridcomponents/skills";
import Footer from "@/components/footer";
import GithubStats from "@/components/gridcomponents/stats/ghStats";
import WakatimeStats from "@/components/gridcomponents/stats/wtStats";
import AnimatedLayout from "@/layouts/animatedLayout";
import { type Metadata } from "next";
import Mapbox from "@/components/gridcomponents/mapbox/mapbox";
import SpotifyStats from "@/components/gridcomponents/stats/spotify/spotifyStats";
import { Suspense } from "react";
import { sanityFetch } from "s/lib/client";
import type { SanityDocument } from "next-sanity";
import { Projects } from "@/types";
import { featuredProjectsQuery } from "s/lib/queries";
import CoverImage from "@/components/projects/coverImage";

export const metadata: Metadata = {
  title: "Home - Leonvdw.nl",
  description:
    "Welcome to Leonvdw.nl! This is my personal portfolio website where you can find all my projects and more!",
};

export default async function Home() {
  const projects = await sanityFetch<SanityDocument<Projects[]>>(
    featuredProjectsQuery,
    ["projects"]
  );

  return (
    <AnimatedLayout>
      <main className="min-h-screen overflow-visible transition-all duration-300 ease-in ">
        <div className=" mx-auto grid w-full max-w-[320px] grid-cols-1 gap-5 px-4 pb-6 pt-4 [grid-auto-columns:265px] [grid-auto-rows:265px] sm:max-w-[640px] sm:grid-cols-2 xl:max-w-[1200px] xl:grid-cols-4 xl:grid-rows-[265px,265px,265px,265px] xl:px-0 ">
          <div className="col-span-1 h-full w-full rounded-[2rem] bg-card p-6 text-text sm:order-1 sm:col-span-2">
            <About />
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-card  sm:order-2 xl:order-2">
            <Suspense fallback={<div>Loading...</div>}>
              <Mapbox />
            </Suspense>
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-secondary sm:order-4  xl:order-4">
            <Toggle />
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-card sm:order-8 xl:order-5">
            <SpotifyStats />
          </div>
          <div className="relative row-span-2 overflow-hidden rounded-[2rem] bg-card p-6 font-medium text-text sm:order-3 xl:order-6 ">
            <Skills />
          </div>
          <div className="peer h-full rounded-[2rem] bg-card text-text transition-all duration-300 ease-in sm:order-10 xl:order-7">
            <GithubStats />
          </div>
          <div className="flex items-center justify-center overflow-hidden rounded-[2rem] bg-secondary p-8 sm:order-6 xl:order-8">
            <Linkedin />
          </div>
          <Whatsapp />
          <div className="row-span-2 overflow-hidden rounded-[2rem] bg-card sm:order-7 xl:order-3 xl:col-start-4 xl:row-start-1">
            <CoverImage project={projects[0]} />
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-secondary sm:order-9">
            <Github />
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-card sm:order-4 sm:col-span-2 xl:order-10">
            <CoverImage project={projects[1]} />
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-card sm:order-5  xl:order-12">
            <WakatimeStats />
          </div>
        </div>
        <Footer />
      </main>
    </AnimatedLayout>
  );
}
