import AnimatedLayout from "@/layouts/animatedLayout";
import Head from "next/head";
import { allDocs } from "contentlayer/generated";
import Link from "next/link";

export default async function Post() {
  return (
    <AnimatedLayout>
      <div className="overflow-y-visible transition-all duration-300 ease-in ">
        <Head>
          <title>Post</title>
        </Head>
        <div className="mx-4 flex w-full flex-col pr-8 lg:flex-row">
          <div className="m-4 flex w-full flex-col rounded-[2rem] bg-card px-8 pb-6 pt-4">
            {allDocs.map((doc) => (
              <Link href={`/posts/${doc.id}`} className="flex flex-col">
                <div key={doc.id}>
                  <h2 className="text-2xl font-bold">{doc.title}</h2>
                  <p className="text-gray-500">{doc.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </AnimatedLayout>
  );
}

