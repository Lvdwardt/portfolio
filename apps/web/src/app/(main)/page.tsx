import About from "@/components/about/about";
import Toggle from "@/components/gridcomponents/toggle";
import { Github, LinkedIn } from "@/components/gridcomponents/socials";
import ColorPalette from "@/components/gridcomponents/colorPalette";
import Skills from "@/components/gridcomponents/skills";
import Footer from "@/components/footer";
import GithubStats from "@/components/gridcomponents/stats/github/ghStats";
import WakatimeStats from "@/components/gridcomponents/stats/wtStats";
import AnimatedLayout from "@/layouts/animatedLayout";
import { type Metadata } from "next";
import Mapbox from "@/components/gridcomponents/mapbox/mapbox";
import { Suspense } from "react";
import { sanityFetch } from "s/lib/client";
import type { SanityDocument } from "next-sanity";
import { ProjectsType } from "@/types";
import { featuredProjectsQuery } from "s/lib/queries";
import CoverImage from "@/components/projects/coverImage";
import Spotify from "@/components/gridcomponents/stats/spotify/spotify";

export const metadata: Metadata = {
  title: "Home - Leonvdw.nl",
  description:
    "Welcome to Leonvdw.nl! This is my personal portfolio website where you can find all my projects and more!",
};

export default async function Home() {
  const projects = await sanityFetch<SanityDocument<ProjectsType[]>>(
    featuredProjectsQuery,
    ["projects"]
  );

  return (
    <AnimatedLayout>
      <main className="min-h-screen animate-fade-up transition-all duration-300 ease-in">
        <div className="mx-auto grid w-full max-w-320 grid-cols-2 grid-flow-dense gap-5 px-4 pb-6 pt-4 [grid-auto-rows:calc((min(100vw,320px)-2rem-1.25rem)/2)] sm:max-w-640 sm:grid-cols-2 sm:[grid-auto-rows:265px] xl:max-w-[1200px] xl:grid-cols-4 xl:grid-rows-[265px,265px,265px,265px] xl:px-0 ">
          <div className="group order-1 col-span-2 row-span-2 h-full w-full rounded-4xl bg-card p-6 text-text sm:row-span-1 sm:order-1 sm:col-span-2">
            <About />
          </div>
          <div className="order-2 col-span-2 row-span-2 overflow-hidden rounded-4xl bg-map sm:col-span-1 sm:row-span-1 sm:order-2 xl:order-2">
            <Suspense fallback={<div>Loading...</div>}>
              <Mapbox />
            </Suspense>
          </div>
          <div className="order-7 col-span-1 row-span-1 overflow-hidden rounded-4xl bg-secondary sm:col-span-1 sm:row-span-1 sm:order-4 xl:order-4">
            <Toggle />
          </div>
          <div className="order-8 col-span-2 row-span-2 overflow-hidden rounded-4xl bg-card sm:col-span-1 sm:row-span-1 sm:order-8 xl:order-5">
            <Spotify />
          </div>
          <div className="relative order-5 col-span-1 row-span-2 overflow-hidden rounded-4xl bg-card p-3 sm:p-6 font-medium text-text sm:col-span-1 sm:order-3 xl:order-6 ">
            <Skills />
          </div>
          <div className="order-9 col-span-2 row-span-2 peer h-full rounded-4xl bg-card text-text sm:col-span-1 sm:row-span-1 sm:order-10 xl:order-7">
            <GithubStats />
          </div>
          <LinkedIn className="order-10 col-span-2 row-span-2 sm:col-span-1 sm:row-span-1 sm:order-6 xl:order-8" />
          <ColorPalette className="order-11 col-span-2 row-span-2 sm:col-span-1 sm:row-span-1 sm:order-9" />
          {projects?.[0] && (
            <div className="order-6 col-span-1 row-span-2 overflow-hidden rounded-4xl sm:col-span-1 sm:row-span-2 sm:order-7 xl:order-3 xl:col-start-4 xl:row-start-1">
              <CoverImage project={projects[0]} loading="eager" />
            </div>
          )}
          <Github className="order-4 col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 sm:order-10" />
          {projects?.[1] && (
            <div className="order-3 col-span-2 row-span-1 overflow-hidden rounded-4xl bg-card sm:col-span-2 sm:row-span-1 sm:order-4 xl:order-10">
              <CoverImage project={projects[1]} />
            </div>
          )}
          <div className="order-12 col-span-2 row-span-2 overflow-hidden rounded-4xl bg-card sm:col-span-1 sm:row-span-1 sm:order-5 xl:order-12">
            <WakatimeStats />
          </div>
        </div>
        <Footer />
      </main>
    </AnimatedLayout>
  );
}
