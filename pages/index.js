import About from "../components/about";
import ProjectBanner from "../components/projectBanner";
import ProjectBannerFlat from "../components/projectBannerFlat";
import Navbar from "../components/navbar";
import Skills from "../components/skills";
import Timeline2 from "../components/timeline2";
import Toggle from "../components/toggle";
import Whatsapp, { Discord, Github, Mail } from "../components/socials";
import Mapbox from "../components/mapbox";
import useDarkMode from "../hooks/useDarkMode";
import Flyn from "../components/flyn";
import { fetcher } from "../lib/api";
import useSWR from "swr";
import ProjectsList from "../components/projectslist";

export default function Home({ projects }) {
  const [colorTheme, setTheme] = useDarkMode();
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/projects`,
    fetcher,
    {
      fallbackData: projects,
    }
  );

  return (
    <div className="min-h-screen overflow-visible bg-gray-200 transition-all duration-300 ease-in dark:bg-[#1F295B] ">
      <Navbar />
      <div className=" mx-auto grid w-full max-w-[320px] grid-cols-1 gap-4 px-4 pt-3 pb-6 [grid-auto-rows:265px] [grid-auto-columns:265px] sm:max-w-[640px] sm:grid-cols-2 xl:max-w-[1200px] xl:grid-cols-4 xl:grid-rows-[265px,265px,265px,265px] xl:px-0 ">
        <About />
        <Mapbox colorTheme={colorTheme} />
        <Toggle colorTheme={colorTheme} setTheme={setTheme} />
        <Github />
        <Skills />
        <Timeline2 />
        <Discord />
        <Whatsapp />
        <ProjectBanner projects={projects} />
        <ProjectBannerFlat />
        <Mail />
        <ProjectsList projects={projects} />
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const projectsRes = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/projects`
  );
  return {
    props: {
      projects: projectsRes,
    },
  };
}
