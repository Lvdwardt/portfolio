import Link from "next/link";

import Layout from "../../components/layout";

export default function Project({ project }) {
  return (
    <Layout>
      <h1 className="leading-tighter mb-4 text-5xl font-extrabold md:text-6xl">
        <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text py-2 text-transparent">
          {project.data.attributes.title}
        </span>
      </h1>
      <div className="flex flex-col text-black md:flex-row">
        <Link href={`/`}>back</Link>
      </div>
    </Layout>
  );
}
export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/projects/${id}`
  );
  const project = await res.json();
  return {
    props: {
      project: project,
    },
  };
}
