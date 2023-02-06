import { Data } from "../../pages";
import { AiFillFire } from "react-icons/ai";
import Gradient from "../../assets/lineargradient";

export default function GithubStats({ data }: Data) {
  return (
    <div className="flex flex-col items-center justify-center px-4 pt-8">
      <Gradient />
      <h1 className=" bg-clip-text pb-2 text-center text-2xl ">GitHub Stats</h1>
      <div className="grid grid-flow-col grid-cols-3 pt-2 text-center">
        <div className="">
          <h2>total commits</h2>
          <h2 className="bg-gradient-to-br from-secondary to-logo bg-clip-text text-5xl font-bold text-transparent">
            {data.commits}
          </h2>
          <h3 className="pt-2 text-xs font-thin">Jul 13, 2021 - Present</h3>
        </div>
        <div className="mt-4 flex flex-col items-center text-xl">
          <div className="relative">
            <AiFillFire className=" text-[5rem]" fill="url(#logo)" />
            <div className="absolute inset-y-9 inset-x-8">
              <h2 className="text-3xl font-bold">{data.streak.number}</h2>
            </div>
          </div>
          <h2 className="text-base">current commit streak</h2>
          <h3 className="text-xs font-thin">{data.streak.date}</h3>
        </div>
        <div className="">
          <h2>longest streak</h2>
          <h2 className="bg-gradient-to-br from-secondary to-logo bg-clip-text text-5xl font-bold text-transparent">
            {data.longestStreak.number}
          </h2>
          <h3 className="pt-2 text-xs font-thin">{data.longestStreak.date}</h3>
        </div>
      </div>
    </div>
  );
}
// className="bg-gradient-to-r from-secondary to-logo bg-clip-text text-transparent"
