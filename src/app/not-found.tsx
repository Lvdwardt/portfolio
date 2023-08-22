"use client";
import NotFoundComponent from "@/components/projects/notFound";
import MainLayout from "./(main)/layout";

interface PageProps {
  params?: {
    slug?: string;
  };
  url?: string;
}

export default function NotFound({ params, url }: PageProps) {
  return (
    // @ts-expect-error server-component
    <MainLayout>
      {/* @ts-expect-error server-component */}
      <NotFoundComponent params={params} url={url} />
    </MainLayout>
  );
}
