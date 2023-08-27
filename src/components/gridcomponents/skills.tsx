import clsx from "clsx";
import Gradient from "@/assets/lineargradient";
import type { Skills } from "@/types";
import type { SanityDocument } from "next-sanity";
import { skillsQuery } from "s/lib/queries";
import { getSanityData } from "s/lib/client";
import SiIcon from "s/utils/SiIcon";

export default async function Skills() {
  const skills = await getSanityData<SanityDocument<Skills>>(skillsQuery, [
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
      <h1 className="text-center text-2xl font-semibold">Skills</h1>
      <div className=" flex flex-col items-center justify-center">
        <Gradient />
        <div className="flex w-full flex-col items-center justify-center font-medium">
          <div className="flex w-full flex-col items-center justify-center py-8">
            {skills.icons.map((icon, index) => (
              <div
                key={icon.title}
                className={clsx(
                  "my-[-10px] flex w-full",
                  index % 2 === 0 ? "justify-start" : "justify-end"
                )}
              >
                <div className="flex w-[120px] flex-col items-center gap-2 stroke-[url(#logo)] px-4">
                  <Gradient />
                  {SiIcon(icon.icon.name, "h-10 w-9 fill-[url(#logo)]")}
                  <p>{icon.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
