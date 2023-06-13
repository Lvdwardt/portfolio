import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/blog/mdx";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getDocFromParams(slug: string) {
  const doc = allDocs.find((doc) => doc.id === slug);

  if (!doc || doc.published !== true) {
    notFound();
  }

  return doc;
}

const page = async ({ params }: PageProps) => {
  const doc = await getDocFromParams(params.slug);

  return (
    <div className="px-4 sm:px-8">
      <h1 className="text-4xl font-bold">{doc.title}</h1>
      <Mdx code={doc.body.code} />
    </div>
  );
};

export default page;

