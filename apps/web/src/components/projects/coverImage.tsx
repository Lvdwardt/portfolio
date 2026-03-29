import { ProjectsType } from "@/types";
import { ImArrowUpRight2 } from "react-icons/im";
import Link from "next/link";
import React from "react";
import { SanityImg } from "../imageComponent";

type Props = {
  project: ProjectsType;
  color?: string;
  loading?: "lazy" | "eager";
};

export default function CoverImage({ project, color, loading }: Props) {
  function getRandomColor(project: ProjectsType) {
    return project.slug.current.length % 2 === 0
      ? "var(--primary)"
      : "var(--secondary)";
  }

  return (
    <div className="group relative h-full w-full rounded-4xl bg-card">
      {/* colored circle */}
      <div
        className="absolute z-0 h-[300px] w-[300px] translate-x-6 translate-y-4 overflow-hidden rounded-full sm:h-[500px] sm:w-[500px] sm:translate-x-12 sm:translate-y-8 sm:translate-y-[-12.5rem] sm:rounded-t-none"
        style={{
          backgroundColor: color ? `var(--${color})` : getRandomColor(project),
        }}
      />
      {/* image */}
      <SanityImg
        image={project.coverImage}
        className="relative z-10"
        loading={loading}
      />

      {/* arrow */}
      <div className="absolute bottom-1 left-1 z-20 m-1 rounded-full border-2 border-transparent transition-all duration-300 hover:!border-lessTrans group-hover:border-trans sm:bottom-3 sm:left-3 sm:m-2 sm:border-4">
        <div className="box-border rounded-full bg-background px-2 py-0.5 text-text sm:px-3 sm:py-1">
          <Link
            href={`/projects/${project.slug.current}`}
            className="flex items-center gap-1 whitespace-nowrap text-xs sm:gap-2 sm:text-base"
          >
            <span className="">{project.title}</span>
            <div className="text-[10px] sm:text-base">
              <ImArrowUpRight2 />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
