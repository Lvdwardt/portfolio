import { useState } from "react";

import { PrismaClient, Project, Prisma } from '@prisma/client';

console.log(Prisma.project)
export async function getServerSideProps() {
  const projects = await Prisma.project.findMany();
  console.log("hallo")
  return {
    props: {
      initialProjects: projects
    }
  };
}

export async function getStaticProps(context) {
    const prisma = new PrismaClient();
  const titles = await prisma.project.findMany();
  console.log("hallo")
  return {
    props: {
      initialTitles: titles,
    },
  };
}

export default function projects(initialTitles, initialProjects) {
  console.log(initialTitles, initialProjects, "hey");
  const title = initialTitles;

  return (
    <div>
      <section className="w-2/3 h-screen p-8">
        <div className="mb-3">
          <h2 className="text-3xl text-gray-700">Projects</h2>
        </div>
        {/* {title.map(() => (
          <div className="mb-3" key={i}>
            <ProjectCard project={c} />
          </div>
        ))} */}
      </section>
    </div>
  );
}
