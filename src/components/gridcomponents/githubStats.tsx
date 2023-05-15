import { AiFillFire } from "react-icons/ai";
import Gradient from "@/assets/lineargradient";
import clsx from "clsx";

type Data = {
  data: {
    commits: number;
    streak: {
      number: number;
      date: string;
    };
    longestStreak: {
      number: number;
      date: string;
    };
  };
};

export default function GithubStats({ data }: Data) {
  return (
    <div className="flex flex-col items-center justify-center px-4 pt-8">
      <Gradient />
      <h1 className="bg-clip-text pb-2 text-center text-2xl ">GitHub Stats</h1>
      <div
        className={clsx(
          "grid w-full grid-flow-col pt-2 text-center",
          data.streak.number > 0
            ? "grid-cols-3 gap-2 sm:gap-0 sm:px-4"
            : "grid-cols-2 gap-4 sm:gap-0"
        )}
      >
        <div className="">
          <h2>total commits</h2>
          <h2 className="bg-gradient-to-br from-secondary to-logo bg-clip-text text-3xl font-bold text-transparent sm:text-5xl">
            {data.commits}
          </h2>
          <h3 className="pt-2 text-xs font-thin">Jul 13, 2021 - Present</h3>
        </div>
        <div
          className={clsx(
            "mt-4 flex flex-col items-center text-xl",
            data.streak.number > 0 ? "relative" : "hidden"
          )}
        >
          <div className="relative">
            <AiFillFire
              className="text-[3rem] sm:text-[5rem]"
              fill="url(#logo)"
            />
            <div className="absolute inset-0 bottom-1/2 mx-auto mb-1 translate-y-full">
              <h2 className="text-xl font-bold text-white sm:text-3xl">
                {data.streak.number}
              </h2>
            </div>
          </div>
          <h2 className="text-sm sm:text-base">
            {data.streak.number == 1 ? "last commit" : "current commit streak"}
          </h2>
          <h3 className="text-xs font-thin">{data.streak.date}</h3>
        </div>
        <div className="">
          <h2>longest streak</h2>
          <h2 className="bg-gradient-to-br from-secondary to-logo bg-clip-text text-3xl font-bold text-transparent sm:text-5xl">
            {data.longestStreak.number}
          </h2>
          <h3 className="pt-2 text-xs font-thin">{data.longestStreak.date}</h3>
        </div>
      </div>
    </div>
  );
}
// className="bg-gradient-to-r from-secondary to-logo bg-clip-text text-transparent"
