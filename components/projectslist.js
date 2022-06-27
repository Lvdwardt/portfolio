import Link from "next/link";

const ProjectsList = ({ projects }) => {
  return (
    <div className="bg-bluelight relative order-[20] flex flex-col overflow-hidden rounded-3xl p-8 text-center text-white dark:bg-[#8D5BE9]">
      <h1 className=" pb-8 text-2xl font-bold">Projects</h1>
      <ul className="mb-3 list-none space-y-4 text-xl font-bold ">
        {projects &&
          projects.data.map((project) => {
            return (
              <li key={project.id}>
                <Link
                  href={`projects/` + project.id}
                  // as={`projects/` + project.attributes.title}
                >
                  {project.attributes.title}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ProjectsList;
