import clsx from "clsx";
import Gradient from "@/assets/lineargradient";
import type { Skills } from "@/types";
import type { SanityDocument } from "next-sanity";
import { skillsQuery } from "s/lib/queries";
import { sanityFetch } from "s/lib/client";

export default async function Skills() {
  const skills = await sanityFetch<SanityDocument<Skills>>(skillsQuery, [
    "skills",
  ]);

  if (!skills) {
    return (
      <div>
        <p>Sorry, something went wrong.</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-center text-lg font-semibold sm:text-2xl">Skills</h1>
      <div className="flex flex-col items-center justify-center">
        <Gradient />
        <div className="flex w-full flex-col items-center justify-center font-medium max-sm:gap-0.5">
          <div className="flex w-full flex-col items-center justify-center py-8">
            {skills?.icons?.map((skill, index) => {
              const innerHtml = skill.icon.svg; //add fill-[url(#logo)] to the svg
              const newHtml = innerHtml.replace(
                "<svg",
                '<svg class="fill-[url(#logo)] text-base sm:text-4xl my-0"'
              );
              return (
                <div
                  key={skill.title}
                  className={clsx(
                    "my-[-2px] flex w-full sm:my-[-10px]",
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  )}
                >
                  <div className="flex w-[70px] flex-col items-center gap-0 px-1 sm:w-[120px] sm:gap-2 sm:px-4">
                    <Gradient />
                    <div dangerouslySetInnerHTML={{ __html: newHtml }} />
                    <p className="text-[10px] leading-tight sm:text-base">
                      {skill.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
