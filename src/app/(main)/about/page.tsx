import Image from "next/image";
import About from "@/components/about";
import AnimatedLayout from "@/layouts/animatedLayout";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Here you can find all about me!",
  icons: [
    {
      url: "/favicon.ico",
    },
  ],
};

export default function AboutPage() {
  const experiences = [
    {
      name: "Hiperr",
      small: "Hiperr",
      role: "Software Developer",
      hours: "internship",
      description:
        "Hiperr is company that aims to improve the interaction between streamers and their viewers. I'm working on the frontend of a web application that provides minigames for streamers to play with their chat. The application is being build with react and typescript.",
      image: "/images/companies/babble.webp",
      link: "https://hiperr.net",
      dates: "sep 2022 - present",
    },
    // {
    //   name: "Flyn",
    //   role: "Software Developer",
    //   hours: "full-time",
    //   description:
    //     "Fly-n is a travel application that allows users to find the best route to their destination. I worked on the frontend of the app, using react native.",
    //   image: "/images/companies/fly-n.webp",
    //   link: "https://hiperr.net",
    //   dates: "oct 2021 - jun 2022",
    // },
    {
      name: "Uw Computerstudent",
      small: "UCS",
      role: "Technical Support",
      hours: "part-time",
      description:
        "Uw Computerstudent is a company that provides IT support for elderly people. I'm working at the helpdesk, helping people with their computer problems.",
      image: "/images/companies/ucs.webp",
      link: "https://uwcomputerstudent.nl",
      dates: "jul 2021 - present",
    },
  ];
  return (
    <AnimatedLayout>
      <div className="flex w-full justify-center">
        <div className="mx-6 flex max-w-[1200px] flex-col gap-6 pb-8 pt-4">
          <div className=" =mx-auto w-full max-w-[320px] gap-5 sm:max-w-[640px] xl:max-w-[1200px] xl:px-0 ">
            <div className="col-span-full  h-full w-full rounded-[2rem] bg-card p-6 text-text">
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
                    src={experience.image}
                    alt={experience.name}
                    width={50}
                    height={50}
                    className="rounded-xl bg-black"
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
                    <h4 className="text-end">{experience.dates}</h4>
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
