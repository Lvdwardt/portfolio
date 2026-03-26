import About from "@/components/about/about";
import AnimatedLayout from "@/layouts/animatedLayout";
import { type Metadata } from "next";
import { SanityDocument } from "next-sanity";
import { sanityFetch } from "s/lib/client";
import { projectsQuery } from "s/lib/queries";
import { ProjectsType } from "@/types";
import CoverImage from "@/components/projects/coverImage";

export const metadata: Metadata = {
  title: "Projects",
  description: "This beautiful page shows some of the projects I've worked on.",
};

export default async function Projects() {
  const projectsData = await sanityFetch<SanityDocument<ProjectsType[]>>(
    projectsQuery,
    ["projects"]
  );

  // sort based on the order property
  const projects = projectsData.sort((a, b) => a.position - b.position);

  return (
    <AnimatedLayout>
      <main className="flex h-full animate-fade-up flex-col items-center justify-center py-2 transition-all duration-300 ease-in">
        <div className="w-full overflow-visible transition-all duration-300 ease-in">
          <div className="mx-auto grid w-full max-w-320 grid-cols-1 gap-5 px-4 pb-6 pt-2 sm:max-w-640 sm:grid-cols-2 sm:[grid-auto-columns:265px] sm:[grid-auto-rows:265px] xl:max-w-1200 xl:auto-rows-[265px] xl:grid-cols-4 xl:px-0 ">
            <div className="col-span-1 rounded-4xl bg-card p-4 pl-6 pt-[18px]">
              <About />
            </div>
            {projects.slice(0, 4).map((project, index) => {
              // Repeat the original layout pattern: wide, tall, wide, normal
              const layoutPatterns = [
                "sm:col-span-2",
                "sm:row-span-2",
                "sm:col-span-2",
                "",
              ];
              const pattern = layoutPatterns[index % layoutPatterns.length];

              return (
                <div
                  key={project.slug?.current ?? index}
                  className={`group relative overflow-hidden rounded-4xl bg-card ${pattern}`}
                >
                  <CoverImage project={project} />
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </AnimatedLayout>
  );
}
