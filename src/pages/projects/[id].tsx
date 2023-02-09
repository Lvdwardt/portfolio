import { useRouter } from "next/router";
import projectList from "../../components/projects/projectList";
import NotFound from "../../components/projects/notFound";
import AnimatedLayout from "../../layouts/animatedLayout";
import ProjectImage from "../../components/projects/projectImage";

export default function Project() {
  const router = useRouter();
  const { id } = router.query;
  if (typeof id !== "string") {
    return null;
  }
  //find the project with the same title as the url
  const project = projectList.find((project) => project.id === id);
  if (!project) {
    return <NotFound />;
  }
  return (
    <AnimatedLayout>
      <div className="overflow-y-visible bg-background transition-all duration-300 ease-in ">
        <div className=" mx-4 flex flex-col lg:flex-row">
          <div className="my-4 flex flex-col gap-4 rounded-[2rem] bg-card p-8 lg:w-3/4">
            <h1 className="text-center text-3xl font-black">
              {project?.title}
              <hr />
            </h1>
            <h2>{project.description}</h2>
            <div className="">
              <h2 className="font-medium">
                Ik heb van dit project de volgende dingen gedaan:
              </h2>
              <hr />
              {project.workedOn.map((work, index) => (
                <h2 key={index}>- {work.work}</h2>
              ))}
            </div>
            <div className="">
              <h2 className="font-medium">
                Ik heb van dit project de volgende dingen geleerd:
              </h2>
              <hr />
              {project.newSkills.map((skill, index) => (
                <h2 key={index}>- {skill.skill}</h2>
              ))}
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
