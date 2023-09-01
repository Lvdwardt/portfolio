import { Project } from "@/types";
import { ImArrowUpRight2 } from "@react-icons/all-files/im/ImArrowUpRight2";
import Link from "next/link";
import React from "react";
import { SanityImg } from "../imageComponent";

type Props = {
  project: Project;
};

export default function CoverImage({ project }: Props) {
  function getRandomColor(project: Project) {
    return project.slug.current.length % 2 === 0
      ? "var(--secondary)"
      : "var(--primary)";
  }

  return (
    <div className="group relative h-full w-full overflow-hidden rounded-[2rem] bg-card">
      {/* colored circle */}
      <div
        className="absolute z-0 h-[500px] w-[500px] translate-x-12 translate-y-8 overflow-hidden rounded-full sm:translate-y-[-12.5rem] sm:rounded-t-none"
        style={{
          backgroundColor: getRandomColor(project),
        }}
      />

      {/* image */}
      <SanityImg image={project.projectImage} className="relative z-10" />

      {/* arrow */}
      <div className="absolute bottom-3 left-3 z-20 m-2 rounded-full border-4 border-transparent transition-all duration-300 group-hover:border-trans hover:!border-lessTrans">
        <div className="box-border rounded-full bg-background px-3 py-1 text-text">
          <div className="flex items-center gap-2 ">
            <Link href={project.url} className="whitespace-nowrap">
              <span className="">{project.title}</span>
            </Link>
            <div className="">
              <ImArrowUpRight2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
