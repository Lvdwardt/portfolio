import About from "@/components/about/about";
import AnimatedLayout from "@/layouts/animatedLayout";
import { type Metadata } from "next";
import { SanityDocument } from "next-sanity";
import { sanityFetch } from "s/lib/client";
import { projectsQuery } from "s/lib/queries";
import { Projects } from "@/types";
import CoverImage from "@/components/projects/coverImage";

export const metadata: Metadata = {
  title: "Projects",
  description: "This beautiful page shows some of the projects I've worked on.",
};

export default async function Projects() {
  const projectsData = await sanityFetch<SanityDocument<Projects[]>>(
    projectsQuery,
    ["projects"]
  );

  // sort based on the order property
  const projects = projectsData.sort((a, b) => a.position - b.position);

  return (
    <AnimatedLayout>
      <main className="flex h-full animate-fade-up flex-col items-center justify-center py-2 transition-all duration-300 ease-in">
        <div className="w-full overflow-visible transition-all duration-300 ease-in">
          <div className="mx-auto grid w-full max-w-[320px] grid-cols-1 gap-5 px-4 pb-6 pt-2 sm:max-w-[640px] sm:grid-cols-2 sm:[grid-auto-columns:265px] sm:[grid-auto-rows:265px] xl:max-w-[1200px] xl:grid-cols-4 xl:grid-rows-[265px,265px] xl:px-0 ">
            <div className="order-1 col-span-1 rounded-[2rem] bg-card p-4 pl-6 pt-[18px] xl:col-span-1">
              <About />
            </div>
            <div className="group relative order-2 overflow-hidden rounded-[2rem] bg-card sm:order-5 sm:col-span-2 sm:block xl:order-2">
              <CoverImage project={projects[0]} />
            </div>
            <div className="group relative order-3 overflow-hidden rounded-[2rem] bg-card sm:order-2 sm:row-span-2 xl:order-3">
              <CoverImage project={projects[1]} />
            </div>
            <div className="group relative order-4 overflow-hidden rounded-[2rem] bg-card sm:order-4 sm:col-span-2 sm:block xl:order-4">
              <CoverImage project={projects[2]} />
            </div>
            <div className="group relative order-5 overflow-hidden rounded-[2rem] bg-card sm:order-3 xl:order-5">
              <CoverImage project={projects[3]} />
            </div>
            {/* <div className="group relative order-7 overflow-hidden rounded-[2rem] bg-card sm:order-9 sm:col-span-2 sm:block xl:order-7">
              <CoverImage project={projects[4]} />
            </div>
            <div className="order-6 hidden xl:order-6 xl:block"></div> */}
            {/* <div className="group relative order-6 overflow-hidden rounded-[2rem] bg-card sm:order-6 sm:row-span-2 xl:order-6"></div> */}
            {/* <div className="group relative order-8 overflow-hidden rounded-[2rem] bg-card sm:order-7 xl:order-8"></div> */}
            {/* <div className="group relative order-9 overflow-hidden rounded-[2rem] bg-card sm:order-8 xl:order-9"></div> */}
            {/* <div className="group relative order-10 overflow-hidden rounded-[2rem] bg-card sm:col-span-2 xl:order-10"></div> */}
          </div>
        </div>
      </main>
    </AnimatedLayout>
  );
}
