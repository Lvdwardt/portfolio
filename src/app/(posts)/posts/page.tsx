import AnimatedLayout from "@/layouts/animatedLayout";
import { allDocs } from "contentlayer/generated";
import Link from "next/link";

export const metadata = {
  title: "Posts",
  description: "Posts",
};

export default async function Post() {
  return (
    <AnimatedLayout>
      <div className="w-fulltransition-all duration-300 ease-in">
        <div className="flex w-full flex-col px-4 lg:flex-row">
          <div className="flex w-full flex-col rounded-[2rem] bg-card px-8 py-4">
            {allDocs.map((doc) => (
              <Link
                key={doc.id}
                href={`/posts/${doc.id}`}
                className="flex flex-col"
              >
                <h2 className="pb-2 text-2xl font-bold">{doc.title}</h2>
                <p className="text-gray-500">{doc.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </AnimatedLayout>
  );
}
