import NotFoundComponent from "@/components/projects/notFound";
import AnimatedLayout from "@/layouts/animatedLayout";
import { ImArrowUpRight2 } from "@react-icons/all-files/im/ImArrowUpRight2";
import Image from "next/image";
import { Balancer } from "react-wrap-balancer";
import { type Metadata } from "next";
import { urlForImage } from "s/lib/image";

import { Project as ProjectType } from "@/types";
import type { SanityDocument } from "next-sanity";
import { getSanityData } from "s/lib/client";
import { projectQuery } from "s/lib/queries";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const project = await getSanityData<SanityDocument>(
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
  const project = await getSanityData<SanityDocument<ProjectType>>(
    projectQuery,
    ["projects"],
    params
  );

  if (!project) {
    return <NotFoundComponent url="projects" />;
  }
  return (
    <AnimatedLayout>
      <div className="overflow-y-visible bg-background transition-all duration-300 ease-in ">
        <div className="grid w-full gap-8 p-4 sm:grid-cols-2 sm:px-16 sm:py-16 xl:px-32">
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
          <div className="col-span-1 flex flex-col gap-6 sm:pt-14">
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
          </div>
        </div>
        <div className="mx-auto grid w-full max-w-[320px] grid-cols-1 gap-5 px-4 pb-6 pt-2 [grid-auto-columns:265px] [grid-auto-rows:265px] sm:max-w-[640px] sm:grid-cols-2 xl:max-w-[1200px] xl:grid-cols-4 xl:grid-rows-[265px,265px] xl:px-0 ">
          <div className="order-1 h-full w-full rounded-[2rem] bg-card sm:order-2 xl:order-5"></div>
          <div className="h-full w-full rounded-[2rem] bg-card sm:order-1 sm:col-span-2 xl:order-2"></div>
          <div className="h-full w-full rounded-[2rem] bg-card sm:order-3 sm:row-span-2 xl:order-3"></div>
          <div className="h-full w-full rounded-[2rem] bg-card sm:order-5 sm:col-span-2 xl:order-4"></div>
          <div className="flex h-full w-full items-center justify-center rounded-[2rem] bg-card sm:order-4 xl:order-1">
            <Image
              src={urlForImage(project.logo).url()}
              alt={project.title}
              width={100}
              height={100}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </AnimatedLayout>
  );
}
