import Layout from "../components/layout";
import ProjectsList from "../components/projectslist";
import { fetcher } from "../lib/api";
import useSWR from "swr";

const Projects = ({ projects }) => {
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/projects`,
    fetcher,
    {
      fallbackData: projects,
    }
  );
  return (
    <Layout>
      <h1 className="leading-tighter mb-4 text-5xl font-extrabold md:text-6xl">
        <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text py-2 text-transparent">
          Projects
        </span>
      </h1>
      <ProjectsList projects={data} />
    </Layout>
  );
};

export default Projects;

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
