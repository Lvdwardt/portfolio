import AnimatedLayout from "@/layouts/animatedLayout";
import { allDocs } from "contentlayer/generated";
import Link from "next/link";

export const metadata = {
  title: "Posts",
  description: "Posts",
};

export default async function Post() {
  // remove unpublished posts from the list
  const docs = allDocs
    .filter((doc) => doc.published === true)
    .sort((a, b) => {
      if (!a.date) return 1;
      if (!b.date) return -1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return (
    <AnimatedLayout>
      <main className="w-full transition-all duration-300 ease-in">
        <div className="flex w-full flex-col gap-8 px-4">
          {docs.map((doc) => (
            <Link
              key={doc.id}
              href={`/posts/${doc.id}`}
              className="flex flex-col rounded-[2rem] bg-card px-8 py-4"
            >
              <h2 className="pb-2 text-2xl font-bold">{doc.title}</h2>
              <p className="text-gray-500">{doc.description}</p>
            </Link>
          ))}
        </div>
      </main>
    </AnimatedLayout>
  );
}
