import { useRouter } from "next/router";
import projectList from "../../components/projects/projectList";
import NotFound from "../../components/projects/notFound";
import AnimatedLayout from "../../layouts/animatedLayout";

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
      <div className="min-h-screen overflow-visible bg-background transition-all duration-300 ease-in ">
        <div className=" mx-4 flex flex-col lg:flex-row">
          <div className="rounded-[2rem] lg:w-3/4">
            <div className=" m-4 rounded-[2rem] bg-br p-4 ">
              <h1 className="text-center text-3xl font-black">
                {project?.title}
              </h1>
            </div>
            <div className=" m-4 my-8 rounded-[2rem] bg-br p-4 pb-[14px] ">
              <h2>{project.description}</h2>
            </div>
            <div className=" m-4  rounded-[2rem] bg-br p-4 pb-[14px] ">
              <h2 className="font-medium">
                Ik heb van dit project de volgende dingen gedaan:
              </h2>
              <hr />
              {project.worked_on.map((work, index) => (
                <h2 key={index}>- {work.work}</h2>
              ))}
            </div>
            <div className=" m-4 my-8 rounded-[2rem] bg-br p-4 ">
              <h2 className="font-medium">
                Ik heb van dit project de volgende dingen geleerd:
              </h2>
              <hr />
              {project.new_skills.map((skill, index) => (
                <h2 key={index}>- {skill.skill}</h2>
              ))}
            </div>
          </div>
          <div className="m-4 lg:h-auto lg:w-1/4">{project.image}</div>
        </div>
      </div>
    </AnimatedLayout>
  );
}
