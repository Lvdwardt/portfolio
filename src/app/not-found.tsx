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
    // @ts-expect-error
    <MainLayout>
      {/* @ts-expect-error */}
      <NotFoundComponent params={params} url={url} />
    </MainLayout>
  );
}
