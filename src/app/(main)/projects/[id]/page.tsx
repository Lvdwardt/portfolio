import projectList from "@/components/projects/projectList";
import NotFoundComponent from "@/components/projects/notFound";
import AnimatedLayout from "@/layouts/animatedLayout";
import ProjectImage from "@/components/projects/projectImage";
import Head from "next/head";
import { SiGithub } from "react-icons/si";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Project({ params }: PageProps) {
  //find the project with the same title as the url
  const project = projectList.find((project) => project.id === params.id);
  if (!project) {
    // @ts-expect-error server-component
    return <NotFoundComponent url="projects" />;
  }
  return (
    <AnimatedLayout>
      <div className="overflow-y-visible bg-background transition-all duration-300 ease-in ">
        <Head>
          <title>{project?.title}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="mx-4 flex flex-col lg:flex-row">
          <div className="m-4 flex flex-col rounded-[2rem] bg-card px-8 pb-6 pt-4 lg:w-3/4">
            <h1 className="pb-2 text-3xl font-black">{project?.title}</h1>
            <hr />
            <span className="font-light">{project.description}</span>
            <div className=" pt-6">
              <h2 className="font-medium">
                For this project I have done the following:
              </h2>
              <hr />
              <ul>
                {project.workedOn.map((work, index) => (
                  <li className="ml-4 list-disc pl-2 font-light" key={index}>
                    {work.work}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-6">
              <h2 className="font-medium">
                I have learned the following from this project:
              </h2>
              <hr />
              <ul>
                {project.newSkills.map((skill, index) => (
                  <li className="ml-4 list-disc pl-2 font-light" key={index}>
                    {skill.skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto flex gap-4 pt-6 text-4xl">
              {project.icons.map((icon, index) => (
                <a
                  href={icon.url}
                  key={index}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  {icon.icon}
                </a>
              ))}
              {project.githubUrl && (
                <a
                  className="ml-auto"
                  href={project.githubUrl}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <SiGithub />
                </a>
              )}
            </div>
          </div>
          <div className="m-4 lg:h-auto lg:w-1/4">
            {ProjectImage({ project })}
          </div>
        </div>
      </div>
    </AnimatedLayout>
  );
}
