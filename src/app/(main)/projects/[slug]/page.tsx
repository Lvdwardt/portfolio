import NotFoundComponent from "@/components/projects/notFound";
import AnimatedLayout from "@/layouts/animatedLayout";
import { ImArrowUpRight2 } from "react-icons/im";
import { Balancer } from "react-wrap-balancer";
import { type Metadata } from "next";

import { Project as ProjectType } from "@/types";
import type { SanityDocument } from "next-sanity";
import { sanityFetch } from "s/lib/client";
import { projectQuery } from "s/lib/queries";
import { SanityImg } from "@/components/imageComponent";
import Link from "next/link";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const project = await sanityFetch<SanityDocument>(
    projectQuery,
    ["projects"],
    params
  );
  if (!project) {
    return {
      title: "Project not found",
      description: "Unfortunately, this project does not exist.",
    };
  }
  return {
    title: project.title + " - Projects",
    description: project.description,
  };
}

export default async function Project({ params }: PageProps) {
  //find the project with the same title as the url
  const project = await sanityFetch<SanityDocument<ProjectType>>(
    projectQuery,
    ["projects"],
    params
  );

  if (!project) {
    return <NotFoundComponent url="projects" />;
  }
  return (
    <AnimatedLayout>
      <main className="overflow-y-visible bg-background transition-all duration-300 ease-in ">
        <div className="grid w-full gap-8 p-4 sm:px-16 sm:py-16 xl:grid-cols-2 xl:px-32">
          <div className="col-span-1 flex flex-col gap-4">
            <h1 className="text-3xl font-bold sm:text-4xl">{project.title}</h1>
            <h2 className="text-xl">{project.quote}</h2>
            <div className="w-min rounded-full border-4 border-card">
              <div className="flex h-8 items-center justify-end gap-4 overflow-hidden rounded-full  bg-card p-2 text-text">
                <a
                  href={project.url}
                  target={"_blank"}
                  rel="noreferrer"
                  className="flex items-center gap-3"
                >
                  <span className="text-sm">Web</span>
                  <ImArrowUpRight2 />
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-6 xl:pt-14">
            <Balancer className="font-light">{project.description}</Balancer>
            <div className="pl-4">
              <ul>
                {project.workedOn.map((work, index) => (
                  <li
                    className="ml-6 list-disc pb-1 pl-2 font-light"
                    key={index}
                  >
                    {work.work}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex w-full gap-6 pl-1 sm:justify-end">
              {project.icons.map((icon, index) => (
                <Link href={icon.url} key={index}>
                  <svg
                    dangerouslySetInnerHTML={{ __html: icon.icon.svg }}
                    className="h-4 w-4 scale-125"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto grid w-full max-w-[320px] grid-cols-1 gap-5 px-4 pb-6 pt-2 [grid-auto-columns:132.5px] [grid-auto-rows:132.5px] sm:max-w-[640px] sm:grid-cols-2 sm:[grid-auto-columns:265px] sm:[grid-auto-rows:265px] xl:max-w-[1200px] xl:grid-cols-4 xl:grid-rows-[265px,265px] xl:px-0 ">
          <div className="order-2 h-full w-full rounded-[2rem] bg-card xl:order-5"></div>
          <div className="order-1 col-span-2 h-full w-full rounded-[2rem] bg-card xl:order-2"></div>
          <div className="order-3 row-span-2 h-full w-full rounded-[2rem] bg-card"></div>
          <div className="order-5 col-span-2 h-full w-full rounded-[2rem] bg-card xl:order-4"></div>
          <div className="order-4 flex h-full w-full items-center justify-center rounded-[2rem] bg-card p-8 sm:p-24 xl:order-1">
            <SanityImg image={project.logo} round={18} />
          </div>
        </div>
      </main>
    </AnimatedLayout>
  );
}
