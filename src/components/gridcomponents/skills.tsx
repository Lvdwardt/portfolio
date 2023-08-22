import clsx from "clsx";
import Gradient from "@/assets/lineargradient";
import skills from "./skillList";

export default function Skills() {
  return (
    <div>
      <h1 className="text-center text-2xl font-semibold">Skills</h1>
      <div className=" flex flex-col items-center justify-center">
        <Gradient />
        <div className="flex w-full flex-col items-center justify-center font-medium">
          <div className="flex w-full flex-col items-center justify-center py-8">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className={clsx(
                  "my-[-10px] flex w-full",
                  skill.position === "left" ? "justify-start" : "justify-end"
                )}
              >
                <div className="flex w-[120px] flex-col items-center gap-2 px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox={skill.viewBox}
                    className="flex h-10 w-10 items-center justify-center"
                    fill="url(#logo)"
                  >
                    {skill.path}
                  </svg>
                  <p>{skill.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
