import Head from "next/head";
import Image from "next/image";
import About from "../components/gridcomponents/about";

export default function AboutPage() {
  const experiences = [
    {
      name: "Babble",
      role: "Software Developer",
      hours: "full-time",
      description:
        "Babble is a platform where streamers can interact with their viewers. I worked on the frontend of the app, using React.",
      image: "/images/companies/babble.webp",
      link: "https://play.streambabble.net",
      dates: "sep 2022 - present",
    },
    // {
    //   name: "Flyn",
    //   role: "Software Developer",
    //   hours: "full-time",
    //   description:
    //     "Fly-n is a travel application that allows users to find the best route to their destination. I worked on the frontend of the app, using react native.",
    //   image: "/images/companies/fly-n.webp",
    //   link: "https://play.streambabble.net",
    //   dates: "oct 2021 - jun 2022",
    // },
    {
      name: "Uw Computerstudent",
      small: "UCS",
      role: "Technical Support",
      hours: "part-time",
      description:
        "Uw Computerstudent is a company that provides IT support for elderly people. I worked at the helpdesk, helping people with their computer problems.",
      image: "/images/companies/ucs.webp",
      link: "https://uwcomputerstudent.nl",
      dates: "jul 2021 - present",
    },
  ];
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-full justify-center">
        <div className="mx-6 flex max-w-[1200px] flex-col gap-6 pt-4 pb-8">
          <div className=" mx-auto grid w-full max-w-[320px] grid-cols-1 gap-5 [grid-auto-rows:265px] [grid-auto-columns:265px] sm:max-w-[640px] sm:grid-cols-2 xl:max-w-[1200px] xl:grid-cols-4 xl:px-0 ">
            <div className=" col-span-1 h-full w-full rounded-[2rem] bg-card p-6 dark:text-white xl:col-span-4">
              <About />
            </div>
          </div>
          <div className="flex w-full flex-1 flex-col gap-4 rounded-[2rem] bg-card px-4 py-8 sm:px-12">
            <h2 className="text-center text-2xl font-bold text-text sm:text-left">
              Experiences
            </h2>
            {experiences.map((experience) => (
              <div
                className="flex items-start gap-4 pb-2"
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
                <div className="flex w-full flex-col">
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
                    <p className="line-clamp-2">{experience.description}</p>
                    {/* <p className="text-right">read more</p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
