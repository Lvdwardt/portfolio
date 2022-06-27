import { fetcher } from "../lib/api";
import useSWR from "swr";

export default function Skills({ skillsApi }) {
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/skills`,
    fetcher,
    {
      fallbackData: skillsApi,
    }
  );
  const skills = data;
  return (
    <div className="relative row-span-2 overflow-hidden rounded-3xl bg-white p-6 font-bold dark:bg-[#2F3763] dark:text-white sm:order-2 xl:order-6 ">
      <h1 className="text-center text-2xl">Skills</h1>
      {skills &&
        skills.data
          .sort((a, b) => {
            return b.attributes.level - a.attributes.level;
          })
          .map((skill) => {
            const level = skill.attributes.level;
            console.log(level);
            return (
              <div className="" key={skill.id}>
                <div className="mb-2 mt-5 flex justify-between">
                  <h2>{skill.attributes.skill}</h2>
                  <h2>{skill.attributes.level}%</h2>
                </div>
                <div className="flex w-full rounded-full bg-pink-50 dark:bg-[#1F295B]">
                  <div
                    className=" bg-pinklight animate-fadeInRight h-6 rounded-full transition-all duration-300 ease-in dark:bg-[#8D5BE9]"
                    style={{ width: `${level}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
    </div>
  );
}
export async function getStaticProps() {
  const skillsRes = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/skills`
  );
  return {
    props: {
      skillsApi: skillsRes,
    },
  };
}
