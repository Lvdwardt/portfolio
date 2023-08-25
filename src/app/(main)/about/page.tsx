import Image from "next/image";
import About from "@/components/about";
import AnimatedLayout from "@/layouts/animatedLayout";
import { type Metadata } from "next";
import { urlForImage } from "s/lib/image";
import { getSanityData } from "s/lib/client";
import type { SanityDocument } from "next-sanity";
import { experiencesQuery } from "s/lib/queries";
import type { Experience } from "@/types";

export const metadata: Metadata = {
  title: "About",
  description: "Here you can find all about me!",
  icons: [
    {
      url: "/favicon.ico",
    },
  ],
};

export default async function AboutPage() {
  const experiences = await getSanityData<SanityDocument<Experience[]>>(
    experiencesQuery,
    ["experiences"]
  );

  function getDates(startDate: Date, endDate: Date | null) {
    return `${new Date(startDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    })} - ${
      endDate
        ? new Date(endDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
          })
        : "present"
    }`;
  }

  return (
    <AnimatedLayout>
      <div className="flex w-full justify-center">
        <div className="mx-6 flex max-w-[1200px] flex-col gap-6 pb-8 pt-4">
          <div className=" =mx-auto w-full max-w-[320px] gap-5 sm:max-w-[640px] xl:max-w-[1200px] xl:px-0 ">
            <div className="col-span-full  h-full w-full rounded-[2rem] bg-card px-10 py-6 text-text">
              {/* @ts-expect-error server-component */}
              <About />
            </div>
          </div>
          <div className="flex w-full max-w-[320px] flex-1 flex-col gap-4 rounded-[2rem] bg-card px-4 py-8 sm:max-w-[640px] sm:px-12 xl:max-w-[1200px]">
            <h2 className="text-center text-2xl font-bold text-text sm:text-left">
              Experiences
            </h2>
            {experiences.map((experience) => (
              <div
                className="flex items-start gap-4 pb-2 [@media(hover:none)and(pointer:coarse)]:select-none"
                key={experience.name}
              >
                <a href={experience.link}>
                  <Image
                    src={urlForImage(experience.image).url()}
                    alt={experience.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-xl bg-black object-cover"
                  />
                </a>
                <div className="flex w-full flex-col [@media(hover:none)_and_(pointer:coarse)]:select-none">
                  <h3 className="mt-[-4px] align-text-top text-lg text-text">
                    {experience.role}
                  </h3>
                  <div className="flex justify-between text-sm text-gray-400">
                    <div className="flex flex-col break-words sm:flex-row">
                      {!experience.small && <h4>{experience.name} - </h4>}
                      {experience.small && (
                        <>
                          <h4 className="sm:hidden">{experience.small}</h4>
                          <h4 className="hidden sm:block">
                            {experience.name} -{" "}
                          </h4>
                        </>
                      )}
                      <h4 className="w-20 sm:ml-1">{experience.hours}</h4>
                    </div>
                    <h4 className="text-end">
                      {getDates(experience.startDate, experience.endDate)}
                    </h4>
                  </div>
                  <div className="font-thin">
                    <p className="line-clamp-2 hover:line-clamp-none focus:line-clamp-none active:line-clamp-none">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedLayout>
  );
}
