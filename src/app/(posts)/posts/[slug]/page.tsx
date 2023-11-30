import { allDocs } from "contentlayer/generated";

import { notFound } from "next/navigation";
import { Mdx } from "@/components/blog/mdx";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps) {
  const doc = await getDocFromParams(params.slug);

  return {
    title: doc.title + " - Posts",
    description: doc.description,
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
    <main className="flex flex-col items-center gap-12 px-4 sm:px-8 xl:mt-[-4rem]">
      <div className="flex h-10 w-10 items-center justify-center">
        <Link
          href="/posts"
          className="rounded-full bg-card p-2 transition-all duration-300 hover:p-4"
        >
          <IoClose className="text-2xl " />
        </Link>
      </div>
      <div className="xl:w-3/5">
        <h1 className="text-center text-4xl font-bold">{doc.title}</h1>
        <Mdx code={doc.body.code} />
      </div>
    </main>
  );
};

export default page;
